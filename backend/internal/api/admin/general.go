package admin

import (
	"context"
	"github.com/labstack/echo/v4"
	"net/http"
	"wehrmachtencyclopedia/internal/models"
	"wehrmachtencyclopedia/pkg/db"
)

func DeleteGeneral(c echo.Context) error {

	id := c.Param("id")

	_, err := db.DB.Exec(context.Background(), "DELETE FROM generals WHERE id=$1", id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"success": false,
			"error":   err.Error(),
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"success": true,
		"id":      id,
	})
}

func UpdateGeneral(c echo.Context) error {

	id := c.Param("id")

	general := &models.General{}

	if err := c.Bind(general); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]interface{}{
			"success": false,
			"error":   err.Error(),
		})
	}

	_, err := db.DB.Exec(context.Background(), "UPDATE generals SET name=$1, rank=$2, bio=$3 WHERE id=$4", general.Name, general.Rank, general.Bio, id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"success": false,
			"error":   err.Error(),
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"success": true,
		"id":      id,
	})
}
