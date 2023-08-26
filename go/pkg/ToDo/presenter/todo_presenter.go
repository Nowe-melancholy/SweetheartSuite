package presenter

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/usecase"
	"SweetheartSuite/v2/pkg/ToDo/internal/infra"
	"context"
	"fmt"

	"connectrpc.com/connect"
)

type ToDoPresenter interface {
	AddToDoItem(
		ctx context.Context,
		req *connect.Request[AddRequest],
	) (*connect.Response[AddResponse], error)
}

type todoPresenter struct {
	addToDoItemUsecase usecase.AddToDoItemUsecase
}

func NewToDoPresenter() ToDoPresenter {
	toDoListRepo := infra.NewToDoListRepository()
	toDoItemRepo := infra.NewToDoItemRepository()
	addToDoItemUsecase := usecase.NewAddToDoItemUsecase(
		toDoListRepo,
		toDoItemRepo,
	)

	return &todoPresenter{
		addToDoItemUsecase: addToDoItemUsecase,
	}
}

func (presenter *todoPresenter) AddToDoItem(
	ctx context.Context,
	req *connect.Request[AddRequest],
) (*connect.Response[AddResponse], error) {
	itemId, err := presenter.addToDoItemUsecase.Execute(ctx, req.Msg.UserId, req.Msg.Title, req.Msg.Description)
	if err != nil {
		fmt.Println("Error in presenter")
		fmt.Println(err)
		return nil, err
	}

	res := connect.NewResponse(&AddResponse{
		ItemId: itemId,
	})

	return res, nil
}
