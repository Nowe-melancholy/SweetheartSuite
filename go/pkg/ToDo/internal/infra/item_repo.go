package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"fmt"
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
}

func NewItemRepository() item.ItemIRepository {
	return &itemRepository{}
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

	db, err := CreateDBConnection()

	if err != nil {
		fmt.Println(err)
		return err
	}

	db.Create(&itemData)

	return nil
}

func (repo *itemRepository) Delete(itemId string) error {
	db, err := CreateDBConnection()

	if err != nil {
		fmt.Println(err)
		return err
	}

	var itemData Item

	db.Where("id = ?", itemId).Delete(&itemData)

	return nil
}
