package todolist

type ToDoListIRepository interface {
	FindByCoupleID(coupleId string) (*ToDoList, error)
}
