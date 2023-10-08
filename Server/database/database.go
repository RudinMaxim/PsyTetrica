package database

import (
	"database/sql"
	"fmt"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"log"
)

// создание структуры
type Database struct {
	db *sql.DB
}

func PostgresConnect() (*Database, error) {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// host := os.Getenv("DB_HOST")
	host := "db.rdtrqemvzkbtzqmkxned.supabase.co"
	// port := os.Getenv("DB_PORT")
	port := "5432"
	// user := os.Getenv("DB_USER")
	user := "postgres"
	// password := os.Getenv("DB_PASSWORD")
	password := "xLV71wrMBofxm1Dz"
	// dbname := os.Getenv("DB_NAME")
	dbname := "postgres"

	// формирование строки подключения к базе данных
	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s "+"password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

	// открытие соединения с базой данных
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}

	// проверка соединения с базой данных
	err = db.Ping()
	if err != nil {
		panic(err)
	}

	// возвращение экземпляра структуры Database
	return &Database{db: db}, nil
}

// метод для закрытия соединения с базой данных
func (d *Database) Close() error {
	return d.db.Close()
}

// метод для получения экземпляра sql.DB для выполнения запросов к базе данных
func (d *Database) GetDB() *sql.DB {
	return d.db
}
