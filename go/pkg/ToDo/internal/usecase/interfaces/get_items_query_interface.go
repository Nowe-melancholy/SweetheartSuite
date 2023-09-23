package interfaces

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"context"
)

type GetItemsByCoupleIQuery interface {
	GetItemsByCoupleId(ctx context.Context, coupeId string) ([]item.Item, error)
}