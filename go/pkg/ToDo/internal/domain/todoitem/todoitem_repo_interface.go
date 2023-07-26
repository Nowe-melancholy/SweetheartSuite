package todoitem

import (
	"context"
)

type ToDoItemIRepository interface {
	Save(ctx context.Context, toDoItem *ToDoItem) error
}
