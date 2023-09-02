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

	AddList(
		ctx context.Context,
		req *connect.Request[AddListRequest],
	) (*connect.Response[AddListResponse], error)
}

type presenter struct {
	addItemUsecase usecase.AddItemUsecase
	addListUsecase usecase.AddListUsecase
}

func NewPresenter() Presenter {
	listRepo := infra.NewListRepository()
	itemRepo := infra.NewItemRepository()
	
	addItemUsecase := usecase.NewAddItemUsecase(
		listRepo,
		itemRepo,
	)
	addListUsecase := usecase.NewAddListUsecase(
		listRepo,
	)

	return &presenter{
		addItemUsecase: addItemUsecase,
		addListUsecase: addListUsecase,
	}
}

func (presenter *presenter) AddItem(
	ctx context.Context,
	req *connect.Request[AddItemRequest],
) (*connect.Response[AddItemResponse], error) {
	itemId, err := presenter.addItemUsecase.Execute(ctx, req.Msg.CoupleId, req.Msg.Title, req.Msg.Description)
	if err != nil {
		fmt.Println("Error in add item presenter")
		fmt.Println(err)
		return nil, err
	}

	res := connect.NewResponse(&AddItemResponse{
		ItemId: itemId,
	})

	return res, nil
}

func (presenter *presenter) AddList(
	ctx context.Context,
	req *connect.Request[AddListRequest],
) (*connect.Response[AddListResponse], error) {
	listId, err := presenter.addListUsecase.Execute(ctx, req.Msg.CoupleId)
	if err != nil {
		fmt.Println("Error in add list presenter")
		fmt.Println(err)
		return nil, err
	}

	res := connect.NewResponse(&AddListResponse{
		ListId: listId,
	})

	return res, nil
}
