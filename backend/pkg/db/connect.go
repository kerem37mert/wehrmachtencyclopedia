package db

import (
	"context"
	"github.com/jackc/pgx/v5/pgxpool"
)

func Connect() (*pgxpool.Pool, error) {
	db, err := pgxpool.New(context.Background(), "postgres://postgres:1234@localhost:5432/wehrmacht")

	if err != nil {
		return nil, err
	}

	return db, nil
}
