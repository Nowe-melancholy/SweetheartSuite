package usecase

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"context"
)

type UpdateItemUsecase interface {
	Execute(ctx context.Context, id string, title string, description string, isDone bool) error
}

type updateItemUsecase struct {
	itemRepository item.ItemIRepository
}

func NewUpdateItemUsecase(itemRepository item.ItemIRepository) UpdateItemUsecase {
	return &updateItemUsecase{
		itemRepository: itemRepository,
	}
}

func (usecase *updateItemUsecase) Execute(
	ctx context.Context,
	id string,
	title string,
	description string,
	isDone bool,
) error {
	res, err := usecase.itemRepository.GetByIds([]string{id})
	if err != nil {
		return err
	}
	item := res[0]
	item.EditItem(title, description)

	err = usecase.itemRepository.Update(&item)
	if err != nil {
		return err
	}

	return nil
}