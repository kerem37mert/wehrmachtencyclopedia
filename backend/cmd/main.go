package main

import (
	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"log"
	"net/http"
	"os"
	"strings"
	"wehrmachtencyclopedia/internal/api/admin"
	"wehrmachtencyclopedia/internal/api/public"
	"wehrmachtencyclopedia/pkg/db"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

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

	adminGroup := e.Group("/api/admin")

	adminGroup.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			authHeader := c.Request().Header.Get("Authorization")
			if authHeader == "" || !strings.HasPrefix(authHeader, "Bearer ") {
				return c.JSON(http.StatusUnauthorized, echo.Map{"error": "Yetkisiz"})
			}

			tokenString := strings.TrimPrefix(authHeader, "Bearer ")
			claims := jwt.MapClaims{}
			token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
				return []byte(os.Getenv("JWT_SECRET_KEY")), nil
			})

			if err != nil || !token.Valid {
				return c.JSON(http.StatusUnauthorized, echo.Map{"error": "Geçersiz token"})
			}

			c.Set("user", token)

			return next(c)
		}
	})

	adminGroup.DELETE("/remove-general/:id", admin.DeleteGeneral)

	e.Logger.Fatal(e.Start(":8000"))
}
