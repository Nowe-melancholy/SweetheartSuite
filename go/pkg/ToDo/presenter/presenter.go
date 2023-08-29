package presenter

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/usecase"
	"SweetheartSuite/v2/pkg/ToDo/internal/infra"
	"context"
	"fmt"

	"connectrpc.com/connect"
)

type Presenter interface {
	AddItem(
		ctx context.Context,
		req *connect.Request[AddItemRequest],
	) (*connect.Response[AddItemResponse], error)
}

type presenter struct {
	addItemUsecase usecase.AddItemUsecase
}

func NewPresenter() Presenter {
	listRepo := infra.NewListRepository()
	itemRepo := infra.NewitemRepository()
	addItemUsecase := usecase.NewAddItemUsecase(
		listRepo,
		itemRepo,
	)

	return &presenter{
		addItemUsecase: addItemUsecase,
	}
}

func (presenter *presenter) AddItem(
	ctx context.Context,
	req *connect.Request[AddItemRequest],
) (*connect.Response[AddItemResponse], error) {
	itemId, err := presenter.addItemUsecase.Execute(ctx, req.Msg.UserId, req.Msg.Title, req.Msg.Description)
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
