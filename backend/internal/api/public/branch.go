package public

import (
	"context"
	"github.com/labstack/echo/v4"
	"net/http"
	"wehrmachtencyclopedia/internal/models"
	"wehrmachtencyclopedia/pkg/db"
)

func GetBranches(c echo.Context) error {
	rows, err := db.DB.Query(context.Background(), "SELECT * FROM branch")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": err.Error(),
		})
	}

	defer rows.Close()

	var result []models.Branch
	for rows.Next() {
		var d models.Branch
		err := rows.Scan(&d.ID, &d.Name)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{
				"error": err.Error(),
			})
		}

		result = append(result, d)
	}

	return c.JSON(http.StatusOK, result)
}
