package todolist

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todoitem"

	"github.com/google/uuid"
)

type ToDoList struct {
	ID        string
	ToDoItems []*todoitem.ToDoItem
}

func NewToDoList() *ToDoList {
	return &ToDoList{
		ID: uuid.New().String(),
	}
}

func (t *ToDoList) AddItem(item *todoitem.ToDoItem) {
	t.ToDoItems = append(t.ToDoItems, item)
}

func (t *ToDoList) RemoveItem(item *todoitem.ToDoItem) {
	for i, v := range t.ToDoItems {
		if v.ID == item.ID {
			t.ToDoItems = append(t.ToDoItems[:i], t.ToDoItems[i+1:]...)
			break
		}
	}
}
