package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/item"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

type Item struct {
	ID          string
	Title       string
	Description string
	IsDone      bool
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
		ListID:      item.ListID(),
	}

	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN: "host=db user=postgres password=postgres dbname=sweetheartdb port=5432 sslmode=disable TimeZone=Asia/Shanghai",
	}), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			TablePrefix:   "todo.",
			SingularTable: false,
		},
	})
	if err != nil {
		fmt.Println(err)
		return err
	}

	db.Create(&itemData)

	return nil
}
