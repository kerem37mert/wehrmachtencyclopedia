package api

import (
	"context"
	"github.com/labstack/echo/v4"
	"net/http"
	"wehrmachtencyclopedia/internal/models"
	"wehrmachtencyclopedia/pkg/db"
)

func GetQuote(c echo.Context) error {
	row := db.DB.QueryRow(context.Background(), "SELECT * FROM quotes ORDER BY hashtext(CURRENT_DATE::TEXT) LIMIT 1")

	var result models.Quote

	err := row.Scan(&result.ID, &result.Quote, &result.Author, &result.Source, &result.DateUsed)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": err.Error(),
		})
	}

	return c.JSON(http.StatusOK, result)
}

func GetQuotes(c echo.Context) error {
	rows, err := db.DB.Query(context.Background(), "SELECT * FROM quotes")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": err.Error(),
		})
	}

	var results []models.Quote

	for rows.Next() {
		var result models.Quote

		err := rows.Scan(&result.ID, &result.Quote, &result.Author, &result.Source, &result.DateUsed)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{
				"error": err.Error(),
			})
		}

		results = append(results, result)
	}

	return c.JSON(http.StatusOK, results)
}
