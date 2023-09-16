package interfaces

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"context"
)

type GetItemsIQuery interface {
	GetItemsByListId(ctx context.Context, listId string) ([]item.Item, error)
}