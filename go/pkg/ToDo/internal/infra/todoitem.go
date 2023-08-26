package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todoitem"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

type ToDoItem struct {
	ID          string
	Title       string
	Description string
	IsDone      bool
	ListID      string
}

type toDoItemRepository struct {
}

func NewToDoItemRepository() todoitem.ToDoItemIRepository {
	return &toDoItemRepository{}
}

func (repo *toDoItemRepository) Create(toDoItem *todoitem.ToDoItem) error {
	toDoItemData := ToDoItem{
		ID:          toDoItem.ID(),
		Title:       toDoItem.Title(),
		Description: toDoItem.Description(),
		IsDone:      toDoItem.IsDone(),
		ListID:      toDoItem.ToDoListID(),
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

	db.Create(&toDoItemData)

	return nil
}
