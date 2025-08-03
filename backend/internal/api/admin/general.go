package admin

import (
	"context"
	"github.com/labstack/echo/v4"
	"net/http"
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
