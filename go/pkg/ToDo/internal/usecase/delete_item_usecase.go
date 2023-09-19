package usecase

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"context"
)

type DeleteItemUsecase interface {
	Execute(ctx context.Context, itemId string) error
}

type deleteItemUsecase struct {
	itemRepo item.ItemIRepository
}

func NewDeleteItemUsecase(itemRepo item.ItemIRepository) DeleteItemUsecase {
	return &deleteItemUsecase{
		itemRepo: itemRepo,
	}
}

func (usecase *deleteItemUsecase) Execute(
	ctx context.Context,
	itemId string,
) error {
	err := usecase.itemRepo.Delete(itemId)
	if err != nil {
		return err
	}

	return nil
}