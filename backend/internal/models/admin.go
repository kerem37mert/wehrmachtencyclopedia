package models

import "database/sql"

type Admin struct {
	Id        int64          `json:"id"`
	FirstName sql.NullString `json:"first_name"`
	LastName  sql.NullString `json:"last_name"`
	Email     sql.NullString `json:"email"`
	UserName  sql.NullString `json:"username"`
	Password  sql.NullString `json:"password"`
}
