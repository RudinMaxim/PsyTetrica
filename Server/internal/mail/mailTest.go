package mail

import (
	"github.com/joho/godotenv"
	"log"
	"os"
	"testing"
)

func TestSendEmailWithGmail(t *testing.T) {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	EmailSenderName := os.Getenv("EMAIL_SEBDER_NAME")
	EmailSenderAddress := os.Getenv("EMAIL_SEBDER_ADDRESS")
	EmailSenderPassword := os.Getenv("EMAIL_SEBDER_PASSWORD")

	sender := NewGmailSender(EmailSenderName, EmailSenderAddress, EmailSenderPassword)

	subject := "A test email"
	content := `
	<h1>Hello world</h1>
	<p>This is a test message from <a href="http://techschool.guru">Tech School</a></p>
	`
	to := []string{"techschool.guru@gmail.com"}
	attachFiles := []string{"../README.md"}

	err = sender.SendEmail(subject, content, to, nil, nil, attachFiles)
}
