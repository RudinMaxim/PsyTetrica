package router

import (
	"example.com/m/internal/chat"
	"example.com/m/internal/user"
	"github.com/gin-gonic/gin"
)

var r *gin.Engine

func InitRouter(userHandler *user.Handler, wsHandler *chat.Handler) {
	r = gin.Default()

	r.POST("/signup", userHandler.CreateUser)
	r.POST("/login", userHandler.Login)
	r.GET("/logout", userHandler.Logout)
	r.PUT("/user/update", userHandler.UpdateUser)
	r.DELETE("/user/delete/:id", userHandler.DeleteUser)
	r.GET("/users", userHandler.GetAllUsers)

	r.POST("/chat/createRoom", wsHandler.CreateRoom)
	r.GET("/chat/joinRoom/:roomId", wsHandler.JoinRoom)
	r.GET("/chat/getRooms", wsHandler.GetRooms)
	r.GET("/chat/getClients/:roomId", wsHandler.GetClients)
}

func Start(addr string) error {
	return r.Run(addr)
}
