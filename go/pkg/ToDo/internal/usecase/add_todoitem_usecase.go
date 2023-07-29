package addtodoitemusecase

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todoitem"
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todolist"
	"context"
)

type AddToDoItemUsecase interface {
	Execute(ctx context.Context, userID string, title string, description string) error
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

func (usecase *addToDoItemUsecase) Execute(ctx context.Context, userId string, title string, description string) error {
	toDoList, err := usecase.toDoListRepo.FindByUserID(ctx, userId)
	if err != nil {
		return err
	}

	toDoItem := todoitem.NewToDoItem(title, description, toDoList.ID())

	err = usecase.toDoItemRepo.Save(ctx, toDoItem)
	if err != nil {
		return err
	}

	return nil
}
