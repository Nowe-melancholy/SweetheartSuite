package todoitem

import (
	"github.com/google/uuid"
)

type ToDoItem struct {
	ID          string
	Title       string
	Description string
	IsDone      bool
	ToDoListID  string
}

func NewToDoItem(title string, description string, toDoListID string) *ToDoItem {
	return &ToDoItem{
		ID:          uuid.New().String(),
		Title:       title,
		Description: description,
		IsDone:      false,
		ToDoListID:  toDoListID,
	}
}

func (t *ToDoItem) EditItem(title string, description string) {
	t.Title = title
	t.Description = description
}

func (t *ToDoItem) MarkAsDone() {
	t.IsDone = true
}
