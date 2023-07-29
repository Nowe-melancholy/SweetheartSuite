package todolist

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todoitem"

	"github.com/google/uuid"
)

type ToDoList struct {
	id        string
	toDoItems []*todoitem.ToDoItem
	coupleId  string
}

func (t *ToDoList) ID() string {
	return t.id
}

func NewToDoList(
	toDoItems []*todoitem.ToDoItem,
	coupleId string,
) *ToDoList {
	return &ToDoList{
		id:        uuid.New().String(),
		toDoItems: toDoItems,
		coupleId:  coupleId,
	}
}

func (t *ToDoList) AddItem(item *todoitem.ToDoItem) {
	t.toDoItems = append(t.toDoItems, item)
}

func (t *ToDoList) RemoveItem(item *todoitem.ToDoItem) {
	for i, v := range t.toDoItems {
		if v.ID() == item.ID() {
			t.toDoItems = append(t.toDoItems[:i], t.toDoItems[i+1:]...)
			break
		}
	}
}
