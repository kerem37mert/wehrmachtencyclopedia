package models

type Dictionary struct {
	Id         int64  `json:"id"`
	Term       string `json:"term"`
	Defination string `json:"defination"`
}
