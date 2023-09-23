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

	GetItemsByIds(
		ctx context.Context,
		req *connect.Request[GetItemsByIdsRequest],
	) (*connect.Response[GetItemsByIdsResponse], error)

	GetItemsByCouple(
		ctx context.Context,
		req *connect.Request[GetItemsByCoupleRequest],
	)(*connect.Response[GetItemsByCoupleResponse], error)

	UpdateItem(
		ctx context.Context,
		req *connect.Request[UpdateItemRequest],
	)(*connect.Response[UpdateItemResponse], error)

	DeleteItem(
		ctx context.Context,
		req *connect.Request[DeleteItemRequest],
	) (*connect.Response[DeleteItemResponse], error)
}

type presenter struct {
	addItemUsecase usecase.AddItemUsecase
	addListUsecase usecase.AddListUsecase
	getItemsByIdsUsecase usecase.GetItemsByIdsUsecase
	getItemsByCoupleUsecase usecase.GetItemsByCoupleUsecase
	updateItemUsecase usecase.UpdateItemUsecase
	deleteItemUsecase usecase.DeleteItemUsecase
}

func NewPresenter() Presenter {
	db := infra.InitToDoDB()
	
	listRepo := infra.NewListRepository(db)
	itemRepo := infra.NewItemRepository(db)
	getItemsByCouplequery := infra.NewGetItemsByCoupleQuery(db)
	
	addItemUsecase := usecase.NewAddItemUsecase(
		listRepo,
		itemRepo,
	)
	addListUsecase := usecase.NewAddListUsecase(
		listRepo,
	)
	getItemsByIdsUsecase := usecase.NewGetItemsByIdsUsecase(
		itemRepo,
	)
	getItemsByCoupleUsecase := usecase.NewGetItemsUsecase(
		getItemsByCouplequery,
	)
	updateItemUsecase := usecase.NewUpdateItemUsecase(
		itemRepo,
	)
	deleteItemUsecase := usecase.NewDeleteItemUsecase(
		itemRepo,
	)

	return &presenter{
		addItemUsecase: addItemUsecase,
		addListUsecase: addListUsecase,
		getItemsByIdsUsecase: getItemsByIdsUsecase,
		getItemsByCoupleUsecase: getItemsByCoupleUsecase,
		updateItemUsecase: updateItemUsecase,
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

func (presenter *presenter) GetItemsByIds(
	ctx context.Context,
	req *connect.Request[GetItemsByIdsRequest],
) (*connect.Response[GetItemsByIdsResponse], error) {
	fmt.Println("Get items by ids presenter called")
	items, err := presenter.getItemsByIdsUsecase.Execute(ctx, req.Msg.ItemIds)
	if err != nil {
		fmt.Println("Error in get items by ids presenter")
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

	res := connect.NewResponse(&GetItemsByIdsResponse{
		Items: resItems,
	})

	return res, nil
}

func (presenter *presenter) GetItemsByCouple(
	ctx context.Context,
	req *connect.Request[GetItemsByCoupleRequest],
)(*connect.Response[GetItemsByCoupleResponse], error) {
	fmt.Println("Get items by couple presenter called")
	items, err := presenter.getItemsByCoupleUsecase.Execute(ctx, req.Msg.CoupleId)
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

	res := connect.NewResponse(&GetItemsByCoupleResponse{
		Items: resItems,
	})

	return res, nil
}

func (presenter *presenter) UpdateItem(
	ctx context.Context,
	req *connect.Request[UpdateItemRequest],
)(*connect.Response[UpdateItemResponse], error) {
	fmt.Println("Update item presenter called")
	err := presenter.updateItemUsecase.Execute(ctx, req.Msg.ItemId, req.Msg.Title, req.Msg.Description, req.Msg.IsDone)
	if err != nil {
		fmt.Println("Error in update item presenter")
		fmt.Println(err)
		return nil, err
	}

	res := connect.NewResponse(&UpdateItemResponse{})

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
