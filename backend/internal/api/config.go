package api

import (
	"context"
	"github.com/labstack/echo/v4"
	"net/http"
	"wehrmachtencyclopedia/internal/models"
	"wehrmachtencyclopedia/pkg/db"
)

func GetConfig(c echo.Context) error {
	row := db.DB.QueryRow(context.Background(), "SELECT * FROM config")

	var result models.Config

	err := row.Scan(&result.TabTitle, &result.Title, &result.SubTitle)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, result)
}
