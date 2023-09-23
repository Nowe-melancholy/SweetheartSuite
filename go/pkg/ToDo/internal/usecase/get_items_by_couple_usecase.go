package usecase

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"SweetheartSuite/v2/pkg/ToDo/internal/usecase/interfaces"
	"context"
)

type GetItemsByCoupleUsecase interface {
	Execute(ctx context.Context, coupleId string) (items []item.Item, err error)
}

type getItemsByCoupleUsecase struct {
	getItemsByCoupleQuery interfaces.GetItemsByCoupleIQuery
}

func NewGetItemsUsecase(getItemsByCoupleQuery interfaces.GetItemsByCoupleIQuery) GetItemsByCoupleUsecase {
	return &getItemsByCoupleUsecase{
		getItemsByCoupleQuery: getItemsByCoupleQuery,
	}
}

func (usecase *getItemsByCoupleUsecase) Execute(
	ctx context.Context,
	coupleId string,
) (items []item.Item, err error) {
	items, err = usecase.getItemsByCoupleQuery.GetItemsByCoupleId(ctx, coupleId)
	if err != nil {
		return nil, err
	}

	return items, nil
}