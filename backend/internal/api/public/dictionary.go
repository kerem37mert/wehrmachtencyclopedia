package public

import (
	"context"
	"github.com/labstack/echo/v4"
	"net/http"
	"wehrmachtencyclopedia/internal/models"
	"wehrmachtencyclopedia/pkg/db"
)

func GetDictionary(c echo.Context) error {

	rows, err := db.DB.Query(context.Background(), "SELECT * FROM dictionary")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	defer rows.Close()

	var results []models.Dictionary
	for rows.Next() {
		var d models.Dictionary
		err := rows.Scan(&d.Id, &d.Term, &d.Defination)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, err)
		}

		results = append(results, d)
	}

	return c.JSON(http.StatusOK, results)
}
