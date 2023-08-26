package usecase

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todoitem"
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todolist"
	"context"

	"github.com/google/uuid"
)

type AddToDoItemUsecase interface {
	Execute(ctx context.Context, userID string, title string, description string) (itemId string, err error)
}

type addToDoItemUsecase struct {
	toDoListRepo todolist.ToDoListIRepository
	toDoItemRepo todoitem.ToDoItemIRepository
}

func NewAddToDoItemUsecase(toDoListRepo todolist.ToDoListIRepository, toDoItemRepo todoitem.ToDoItemIRepository) AddToDoItemUsecase {
	return &addToDoItemUsecase{
		toDoListRepo: toDoListRepo,
		toDoItemRepo: toDoItemRepo,
	}
}

func (usecase *addToDoItemUsecase) Execute(
	ctx context.Context,
	coupleId string,
	title string,
	description string,
) (itemId string, err error) {
	toDoList, err := usecase.toDoListRepo.FindByCoupleID(coupleId)
	if err != nil {
		return "", err
	}

	toDoItem := todoitem.NewToDoItem(uuid.NewString(), title, description, toDoList.ID())

	err = usecase.toDoItemRepo.Create(toDoItem)
	if err != nil {
		return "", err
	}

	return toDoItem.ID(), nil
}
