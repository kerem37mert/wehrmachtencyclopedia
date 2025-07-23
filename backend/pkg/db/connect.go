package db

import (
	"context"
	"github.com/jackc/pgx/v5/pgxpool"
	"log"
)

var DB *pgxpool.Pool

func Connect() {
	db, err := pgxpool.New(context.Background(), "postgres://postgres:1234@localhost:5432/wehrmacht")

	if err != nil {
		log.Fatal("Query error:", err)
	}

	DB = db
}
