package todolist

type ToDoList struct {
	id       string
	coupleId string
}

func (t *ToDoList) ID() string {
	return t.id
}

func NewToDoList(
	id string,
	coupleId string,
) *ToDoList {
	return &ToDoList{
		id:       id,
		coupleId: coupleId,
	}
}
