package presenter

import (
	"context"
	"errors"
	"os"
	"strings"

	"github.com/dgrijalva/jwt-go"
)

func ValidateJWT(ctx context.Context, auth string) (string, error) {
	token := strings.Replace(auth, "Bearer ", "", 1)
	
	jwtKey := os.Getenv("JWT_KEY")
	jwtToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("unexpected signing method")
		}
        return []byte(jwtKey), nil
	})

	if err != nil {
		return "", err
	}

	if claims, ok := jwtToken.Claims.(jwt.MapClaims); ok && jwtToken.Valid {
        return claims["userId"].(string), nil
    } else {
        return "", errors.New("unexpected signing method")
    }
}