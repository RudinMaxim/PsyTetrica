package router

import (
	"example.com/m/internal/chat"
	"example.com/m/internal/user"
	"github.com/gin-gonic/gin"
)

var r *gin.Engine

func InitRouter(userHandler *user.Handler, wsHandler *chat.Handler) {
	r = gin.Default()

	r.Use(CORSMiddleware())

	r.POST("/registration", userHandler.CreateUser)
	r.POST("/createPsy", userHandler.CreatePsychologistProfile)
	r.POST("/login", userHandler.Login)
	r.PUT("/user/update", userHandler.UpdateUser)
	r.DELETE("/user/delete/:id", userHandler.DeleteUser)
	r.GET("/users", userHandler.GetAllUsers)

	//r.POST("/chat/createRoom", wsHandler.CreateRoom)
	//r.GET("/chat/joinRoom/:roomId", wsHandler.JoinRoom)
	//r.GET("/chat/getRooms", wsHandler.GetRooms)
	//r.GET("/chat/getClients/:roomId", wsHandler.GetClients)
}

func Start(addr string) error {
	return r.Run(addr)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
