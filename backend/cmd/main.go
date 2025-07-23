package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
	"wehrmachtencyclopedia/internal/api"
	"wehrmachtencyclopedia/pkg/db"
)

func main() {
	e := echo.New()
	e.Use(middleware.CORS())

	db.Connect()
	defer db.DB.Close()

	e.GET("/", func(c echo.Context) error {
		return c.HTML(http.StatusOK, "<h1>WERHMACT</h1>")
	})

	e.GET("/api/dictionary", api.GetDictionary)
	e.GET("/api/config", api.GetConfig)

	e.Logger.Fatal(e.Start(":8000"))
}
