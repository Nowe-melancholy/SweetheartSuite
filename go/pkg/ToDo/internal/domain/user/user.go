package user

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todolist"

	"github.com/google/uuid"
)

type User struct {
	id       string
	name     string
	gender   string
	toDoList *todolist.ToDoList
}

func NewUser(name string, gender string) *User {
	return &User{
		id:     uuid.New().String(),
		name:   name,
		gender: gender,
	}
}