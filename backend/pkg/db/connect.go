package db

import (
	"context"
	"fmt"
	"github.com/jackc/pgx/v5"
	"os"
)

func Connect() *pgx.Conn {
	db, err := pgx.Connect(context.Background(), "postgres://postgres:1234@localhost:5432/wehrmacht")

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	res, err := db.Exec(context.Background(), "select * from dictionary")
	fmt.Printf(res.String())

	return db
}
