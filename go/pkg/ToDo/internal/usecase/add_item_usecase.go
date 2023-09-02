package usecase

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/list"
	"context"

	"github.com/google/uuid"
)

type AddItemUsecase interface {
	Execute(ctx context.Context, coupleId string, title string, description string) (itemId string, err error)
}

type addItemUsecase struct {
	listRepo list.ListIRepository
	itemRepo item.ItemIRepository
}

func NewAddItemUsecase(listRepo list.ListIRepository, itemRepo item.ItemIRepository) AddItemUsecase {
	return &addItemUsecase{
		listRepo: listRepo,
		itemRepo: itemRepo,
	}
}

func (usecase *addItemUsecase) Execute(
	ctx context.Context,
	coupleId string,
	title string,
	description string,
) (itemId string, err error) {
	list, err := usecase.listRepo.FindByCoupleID(coupleId)
	if err != nil {
		return "", err
	}

	item, err := item.NewItem(uuid.NewString(), title, description, list.ID())
	if err != nil {
		return "", err
	}

	err = usecase.itemRepo.Create(item)
	if err != nil {
		return "", err
	}

	return item.ID(), nil
}
