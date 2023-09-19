package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"

	"gorm.io/gorm"
)

type Item struct {
	ID          string
	Title       string
	Description string
	IsDone      bool
	DoneDate	string
	ListID      string
}

type itemRepository struct {
	db *gorm.DB
}

func NewItemRepository(db *gorm.DB) item.ItemIRepository {
	return &itemRepository{db: db}
}

func (repo *itemRepository) Create(item *item.Item) error {
	itemData := Item{
		ID:          item.ID(),
		Title:       item.Title(),
		Description: item.Description(),
		IsDone:      item.IsDone(),
		DoneDate:    item.DoneDate(),
		ListID:      item.ListID(),
	}

	repo.db.Create(&itemData)

	return nil
}

func (repo *itemRepository) Delete(itemId string) error {
	var itemData Item

	repo.db.Where("id = ?", itemId).Delete(&itemData)

	return nil
}
