package todolist

import (
	"github.com/google/uuid"
)

type ToDoList struct {
	id          string
	toDoItemIds []string
	coupleId    string
}

func (t *ToDoList) ID() string {
	return t.id
}

func NewToDoList(
	toDoItemIds []string,
	coupleId string,
) *ToDoList {
	return &ToDoList{
		id:          uuid.New().String(),
		toDoItemIds: toDoItemIds,
		coupleId:    coupleId,
	}
}
