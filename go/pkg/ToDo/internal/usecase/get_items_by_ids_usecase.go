package usecase

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"context"
)

type GetItemsByIdsUsecase interface {
	Execute(ctx context.Context, ids []string) (items []item.Item, err error)
}

type getItemsByIdsUsecase struct {
	itemmRepo item.ItemIRepository
}

func NewGetItemsByIdsUsecase(itemRepo item.ItemIRepository) GetItemsByIdsUsecase {
	return &getItemsByIdsUsecase{
		itemmRepo: itemRepo,
	}
}

func (usecase *getItemsByIdsUsecase) Execute(
	ctx context.Context,
	ids []string,
) (items []item.Item, err error) {
	items, err = usecase.itemmRepo.GetByIds(ids)
	if err != nil {
		return nil, err
	}

	return items, nil
}