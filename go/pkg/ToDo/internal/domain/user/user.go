package user

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todolist"

	"github.com/google/uuid"
)

type User struct {
	ID       string
	Name     string
	Gender   string
	ToDoList *todolist.ToDoList
}

func NewUser(name string, gender string) *User {
	return &User{
		ID:     uuid.New().String(),
		Name:   name,
		Gender: gender,
	}
}
