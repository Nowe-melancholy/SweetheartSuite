package usecase

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/list"
	"context"

	"github.com/google/uuid"
)

type AddListUsecase interface {
	Execute(ctx context.Context, coupleId string) (listId string, err error)
}

type addListUsecase struct {
	listRepo list.ListIRepository
}

func NewAddListUsecase(listRepo list.ListIRepository) AddListUsecase {
	return &addListUsecase{
		listRepo: listRepo,
	}
}

func (usecase *addListUsecase) Execute(
	ctx context.Context,
	coupleId string,
) (listId string, err error) {
	list, err := list.NewList(uuid.NewString(), coupleId)
	if err != nil {
		return "", err
	}

	err = usecase.listRepo.Create(list)
	if err != nil {
		return "", err
	}

	return list.ID(), nil
}
