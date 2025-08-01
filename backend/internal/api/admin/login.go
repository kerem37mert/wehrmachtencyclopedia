package admin

import (
	"context"
	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
	"net/http"
	"os"
	"time"
	"wehrmachtencyclopedia/internal/models"
	"wehrmachtencyclopedia/pkg/db"
)

func PostLogin(c echo.Context) error {
	login := &models.Login{}

	if err := c.Bind(login); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error": err.Error(),
		})
	}

	row := db.DB.QueryRow(context.Background(), "SELECT id from admin where user_name=$1 and password=$2", login.Username, login.Password)

	var result models.Admin

	err := row.Scan(&result.Id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"success": false,
			"error":   err.Error(),
		})
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":   result.Id,
		"role": "admin",
		"exp":  time.Now().Add(time.Hour * 24).Unix(),
	})

	var jwtKey = []byte(os.Getenv("JWT_KEY"))

	tokenString, err := token.SignedString([]byte(jwtKey))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"success": false,
			"error":   "can not token created",
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"success": true,
		"token":   tokenString,
	})

}
