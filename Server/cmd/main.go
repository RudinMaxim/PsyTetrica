package main

import (
	"example.com/m/database"
	"example.com/m/internal/chat"
	"example.com/m/internal/user"
	"example.com/m/router"
	"log"
)

func main() {
	db, err := database.PostgresConnect()
	if err != nil {
		log.Fatalf("could not initialize database connection: %s", err)
	}

	userRep := user.NewRepository(db.GetDB())
	userSvc := user.NewService(userRep)
	userHandler := user.NewHandler(userSvc)

	hub := chat.NewHub()
	wsHandler := chat.NewHandler(hub)
	go hub.Run()

	router.InitRouter(userHandler, wsHandler)
	router.Start(`0.0.0.0:8084`)
}
