package todoitem

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

func (t *ToDoItem) Title() string {
	return t.title
}

func (t *ToDoItem) Description() string {
	return t.description
}

func (t *ToDoItem) IsDone() bool {
	return t.isDone
}

func (t *ToDoItem) ToDoListID() string {
	return t.toDoListId
}

func NewToDoItem(id string, title string, description string, toDoListId string) *ToDoItem {
	return &ToDoItem{
		id:          id,
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
