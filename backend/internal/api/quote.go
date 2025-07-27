package api

import (
	"context"
	"github.com/labstack/echo/v4"
	"net/http"
	"wehrmachtencyclopedia/internal/models"
	"wehrmachtencyclopedia/pkg/db"
)

func GetQuote(c echo.Context) error {
	row := db.DB.QueryRow(context.Background(), "SELECT * FROM quotes")

	var result models.Quote

	err := row.Scan(&result.ID, &result.Quote, &result.Author, &result.Source, &result.DateUsed)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": err.Error(),
		})
	}

	return c.JSON(http.StatusOK, result)
}
