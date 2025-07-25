package models

import "database/sql"

type General struct {
	ID         int64          `json:"id"`
	Name       sql.NullString `json:"name"`
	Rank       sql.NullString `json:"rank"`
	BirthDate  sql.NullTime   `json:"birth_date"`
	DeathDate  sql.NullTime   `json:"death_date"`
	BirthPlace sql.NullString `json:"birth_place"`
	DeathPlace sql.NullString `json:"death_place"`
	Bio        sql.NullString `json:"bio"`
	PhotoURL   sql.NullString `json:"photo_url"`
	BranchID   sql.NullInt64  `json:"branch_id"`
}
