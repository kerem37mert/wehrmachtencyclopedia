package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
	"wehrmachtencyclopedia/internal/api/public"
	"wehrmachtencyclopedia/pkg/db"
)

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
	e.Static("/static", "static")

	db.Connect()
	defer db.DB.Close()

	e.GET("/", func(c echo.Context) error {
		return c.HTML(http.StatusOK, "<h1>WEHRMACHT</h1>")
	})

	e.GET("/api/dictionary", public.GetDictionary)
	e.GET("/api/config", public.GetConfig)
	e.GET("/api/general/:id", public.GetGeneral)
	e.GET("/api/generals", public.GetGenerals)
	e.GET("/api/branches", public.GetBranches)
	e.GET("/api/generals-for-branch/:branch_id", public.GetGeneralsForBranch)
	e.GET("/api/quote", public.GetQuote)
	e.GET("/api/quotes", public.GetQuotes)

	e.POST("/api/login", public.PostLogin)

	e.Logger.Fatal(e.Start(":8000"))
}
