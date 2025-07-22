package main

import (
	"wehrmachtencyclopedia/pkg/db"
)

func main() {
	//e := echo.New()

	db.Connect()
	//e.GET("/", func(c echo.Context) error {
	//	return c.HTML(http.StatusOK, "<h1>kerem</h1>")
	//})
	//
	//e.Logger.Fatal(e.Start(":8000"))
}
