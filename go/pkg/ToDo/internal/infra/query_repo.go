package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"SweetheartSuite/v2/pkg/ToDo/internal/usecase/interfaces"
	"context"
)

type query struct {
}

func NewGetItemsQuery() interfaces.GetItemsIQuery {
	return &query{}
}

func (query *query) GetItemsByListId(ctx context.Context, listId string) ([]item.Item, error) {
	var items []item.Item

	db, err := CreateDBConnection()

	if err != nil {
		return nil, err
	}

	db.Where("list_id = ?", listId).Find(&items)

	return items, nil
}
