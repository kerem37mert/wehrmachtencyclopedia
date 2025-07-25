package api

import (
	"context"
	"github.com/labstack/echo/v4"
	"net/http"
	"strconv"
	"wehrmachtencyclopedia/internal/models"
	"wehrmachtencyclopedia/pkg/db"
)

func GetGeneral(c echo.Context) error {
	id, convErr := strconv.Atoi(c.Param("id"))
	if convErr != nil {
		return c.String(http.StatusInternalServerError, "Invalid parameter")
	}

	row := db.DB.QueryRow(context.Background(), "SELECT * FROM generals WHERE id=$1", id)

	var result models.General

	err := row.Scan(&result.ID, &result.Name, &result.Rank, &result.BirthDate, &result.DeathDate, &result.BirthPlace, &result.DeathPlace, &result.Bio, &result.PhotoURL, &result.BranchID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": err.Error(),
		})
	}

	return c.JSON(http.StatusOK, result)
}

func GetGenerals(c echo.Context) error {
	rows, err := db.DB.Query(context.Background(), "SELECT * FROM generals")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": err.Error(),
		})
	}

	defer rows.Close()

	var result []models.General
	for rows.Next() {
		var general models.General
		err := rows.Scan(&general.ID, &general.Name, &general.Rank, &general.BirthDate, &general.DeathDate, &general.BirthPlace, &general.DeathPlace, &general.Bio, &general.PhotoURL, &general.BranchID)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{
				"error": err.Error(),
			})
		}

		result = append(result, general)
	}

	return c.JSON(http.StatusOK, result)
}
