package chat

import (
	"log"

	"github.com/gorilla/websocket"
)

type Room struct {
	ID      string             `json:"id"`
	Name    string             `json:"name"`
	Clients map[string]*Client `json:"clients"`
}
type CreateRoomReq struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
type RoomRes struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Hub struct {
	Rooms      map[string]*Room
	Register   chan *Client
	Unregister chan *Client
	Broadcast  chan *Message
}

type Client struct {
	Conn     *websocket.Conn
	Message  chan *Message
	ID       string `json:"id"`
	RoomID   string `json:"roomId"`
	Username string `json:"username"`
}

type ClientRes struct {
	ID       string `json:"id"`
	Username string `json:"username"`
}

type Message struct {
	Content  string `json:"content"`
	RoomID   string `json:"roomId"`
	Username string `json:"username"`
}

func NewHub() *Hub {
	return &Hub{
		Rooms:      make(map[string]*Room),
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Broadcast:  make(chan *Message, 5),
	}
}

func (h *Hub) Run() {
	for {
		select {
		case cl := <-h.Register:
			if _, ok := h.Rooms[cl.RoomID]; ok {
				r := h.Rooms[cl.RoomID]

				if _, ok := r.Clients[cl.ID]; !ok {
					r.Clients[cl.ID] = cl
				}
			}
		case cl := <-h.Unregister:
			if _, ok := h.Rooms[cl.RoomID]; ok {
				if _, ok := h.Rooms[cl.RoomID].Clients[cl.ID]; ok {
					if len(h.Rooms[cl.RoomID].Clients) != 0 {
						h.Broadcast <- &Message{
							Content:  "user left the chat",
							RoomID:   cl.RoomID,
							Username: cl.Username,
						}
					}

					delete(h.Rooms[cl.RoomID].Clients, cl.ID)
					close(cl.Message)
				}
			}

		case m := <-h.Broadcast:
			if _, ok := h.Rooms[m.RoomID]; ok {

				for _, cl := range h.Rooms[m.RoomID].Clients {
					cl.Message <- m
				}
			}
		}
	}
}

func (c *Client) writeMessage() {
	defer func() {
		c.Conn.Close()
	}()

	for {
		message, ok := <-c.Message
		if !ok {
			return
		}

		c.Conn.WriteJSON(message)
	}
}

func (c *Client) readMessage(hub *Hub) {
	defer func() {
		hub.Unregister <- c
		c.Conn.Close()
	}()

	for {
		_, m, err := c.Conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("error: %v", err)
			}
			break
		}

		msg := &Message{
			Content:  string(m),
			RoomID:   c.RoomID,
			Username: c.Username,
		}

		hub.Broadcast <- msg
	}
}
