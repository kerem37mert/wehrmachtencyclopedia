package models

import "database/sql"

type Quote struct {
	ID       int64          `json:"id"`
	Quote    string         `json:"quote"`
	Author   sql.NullString `json:"author"`
	Source   sql.NullString `json:"source"`
	DateUsed sql.NullTime   `json:"date_used"`
}
