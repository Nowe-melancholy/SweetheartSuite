package todoitem

import (
	"github.com/google/uuid"
)

type ToDoItem struct {
	id          string
	title       string
	description string
	isDone      bool
	toDoListId  string
}

func (t *ToDoItem) ID() string {
	return t.id
}

func NewToDoItem(title string, description string, toDoListId string) *ToDoItem {
	return &ToDoItem{
		id:          uuid.New().String(),
		title:       title,
		description: description,
		isDone:      false,
		toDoListId:  toDoListId,
	}
}

func (t *ToDoItem) EditItem(title string, description string) {
	t.title = title
	t.description = description
}

func (t *ToDoItem) MarkAsDone() {
	t.isDone = true
}
