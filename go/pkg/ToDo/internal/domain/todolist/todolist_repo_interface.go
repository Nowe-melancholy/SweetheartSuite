package todolist

import (
	"context"
)

type ToDoListIRepository interface {
	FindByUserID(ctx context.Context, userID string) (ToDoList, error)
}
