package user

import (
	"github.com/google/uuid"
)

type User struct {
	id     string
	name   string
	gender string
}

func NewUser(name string, gender string) *User {
	return &User{
		id:     uuid.New().String(),
		name:   name,
		gender: gender,
	}
}
