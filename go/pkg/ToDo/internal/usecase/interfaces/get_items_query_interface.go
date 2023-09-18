package interfaces

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"context"
)

type GetItemsIQuery interface {
	GetItemsByCoupleId(ctx context.Context, coupeId string) ([]item.Item, error)
}