package usecase

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"SweetheartSuite/v2/pkg/ToDo/internal/usecase/interfaces"
	"context"
)

type GetItemsUsecase interface {
	Execute(ctx context.Context, coupleId string) (items []item.Item, err error)
}

type getItemsUsecase struct {
	getItemsQuery interfaces.GetItemsIQuery
}

func NewGetItemsUsecase(getItemsQuery interfaces.GetItemsIQuery) GetItemsUsecase {
	return &getItemsUsecase{
		getItemsQuery: getItemsQuery,
	}
}

func (usecase *getItemsUsecase) Execute(
	ctx context.Context,
	coupleId string,
) (items []item.Item, err error) {
	items, err = usecase.getItemsQuery.GetItemsByCoupleId(ctx, coupleId)
	if err != nil {
		return nil, err
	}

	return items, nil
}