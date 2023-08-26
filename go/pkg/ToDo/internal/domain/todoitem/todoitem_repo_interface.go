package todoitem

type ToDoItemIRepository interface {
	Create(toDoItem *ToDoItem) error
}
