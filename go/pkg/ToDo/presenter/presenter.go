package presenter

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/infra"
	"SweetheartSuite/v2/pkg/ToDo/internal/usecase"
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

	GetItems(
		ctx context.Context,
		req *connect.Request[GetItemsRequest],
	)(*connect.Response[GetItemsResponse], error)

	DeleteItem(
		ctx context.Context,
		req *connect.Request[DeleteItemRequest],
	) (*connect.Response[DeleteItemResponse], error)
}

type presenter struct {
	addItemUsecase usecase.AddItemUsecase
	addListUsecase usecase.AddListUsecase
	getItemsUsecase usecase.GetItemsUsecase
	deleteItemUsecase usecase.DeleteItemUsecase
}

func NewPresenter() Presenter {
	listRepo := infra.NewListRepository()
	itemRepo := infra.NewItemRepository()
	getItemsquery := infra.NewGetItemsQuery()
	
	addItemUsecase := usecase.NewAddItemUsecase(
		listRepo,
		itemRepo,
	)
	addListUsecase := usecase.NewAddListUsecase(
		listRepo,
	)
	getItemsUsecase := usecase.NewGetItemsUsecase(
		getItemsquery,
	)

	deleteItemUsecase := usecase.NewDeleteItemUsecase(
		itemRepo,
	)

	return &presenter{
		addItemUsecase: addItemUsecase,
		addListUsecase: addListUsecase,
		getItemsUsecase: getItemsUsecase,
		deleteItemUsecase: deleteItemUsecase,
	}
}

func (presenter *presenter) AddItem(
	ctx context.Context,
	req *connect.Request[AddItemRequest],
) (*connect.Response[AddItemResponse], error) {
	fmt.Println("Add item presenter called")
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
	fmt.Println("Add list presenter called")
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

func (presenter *presenter) GetItems(
	ctx context.Context,
	req *connect.Request[GetItemsRequest],
)(*connect.Response[GetItemsResponse], error) {
	fmt.Println("Get items presenter called")
	items, err := presenter.getItemsUsecase.Execute(ctx, req.Msg.CoupleId)
	if err != nil {
		fmt.Println("Error in get items presenter")
		fmt.Println(err)
		return nil, err
	}

	resItems := make([]*Item, len(items))
	for i, item := range items {
		resItems[i] = &Item{
			ItemId: item.ID(),
			Title: item.Title(),
			Description: item.Description(),
			IsDone: item.IsDone(),
			DoneDate: item.DoneDate(),
		}
	}

	res := connect.NewResponse(&GetItemsResponse{
		Items: resItems,
	})

	return res, nil
}

func (presenter *presenter) DeleteItem(
	ctx context.Context,
	req *connect.Request[DeleteItemRequest],
) (*connect.Response[DeleteItemResponse], error) {
	fmt.Println("Delete item presenter called")
	err := presenter.deleteItemUsecase.Execute(ctx, req.Msg.ItemId)
	if err != nil {
		fmt.Println("Error in delete item presenter")
		fmt.Println(err)
		return nil, err
	}

	res := connect.NewResponse(&DeleteItemResponse{})

	return res, nil
}
