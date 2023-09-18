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

func (query *query) GetItemsByCoupleId(ctx context.Context, coupeId string) ([]item.Item, error) {
	var list List
	var items []item.Item

	db, err := CreateDBConnection()

	if err != nil {
		return nil, err
	}

	db.Preload("Items").Where("couple_id = ?", coupeId).Find(&list)

	for _, itemData := range list.Items {
		item, err := item.NewItem(itemData.ID, itemData.Title, itemData.Description, itemData.ListID)
		if err != nil {
			return nil, err
		}
		items = append(items, *item)
	}

	return items, nil
}
