package admin

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"wehrmachtencyclopedia/internal/models"
)

func PostLogin(c echo.Context) error {
	login := &models.Login{}

	if err := c.Bind(login); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error": err.Error(),
		})
	}

	return c.JSON(http.StatusOK, map[string]string{
		"username": login.Username,
		"password": login.Password,
	})
}
