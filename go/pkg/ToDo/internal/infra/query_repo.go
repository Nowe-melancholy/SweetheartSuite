package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"SweetheartSuite/v2/pkg/ToDo/internal/usecase/interfaces"
	"context"

	"gorm.io/gorm"
)

type query struct {
	db *gorm.DB
}

func NewGetItemsByCoupleQuery(db *gorm.DB) interfaces.GetItemsByCoupleIQuery {
	return &query{db: db}
}

func (query *query) GetItemsByCoupleId(ctx context.Context, coupeId string) ([]item.Item, error) {
	var list List
	var items []item.Item

	query.db.Preload("Items").Where("couple_id = ?", coupeId).Find(&list)

	for _, itemData := range list.Items {
		item, err := item.NewItem(itemData.ID, itemData.Title, itemData.Description, itemData.ListID)
		if err != nil {
			return nil, err
		}
		items = append(items, *item)
	}

	return items, nil
}
