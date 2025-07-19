package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.HTML(http.StatusOK, "<h1>kerem</h1>")
	})

	e.Logger.Fatal(e.Start(":8000"))
}
