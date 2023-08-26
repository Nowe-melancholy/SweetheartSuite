package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/todolist"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

type ToDoList struct {
	ID       string
	CoupleID string
}

type toDoListRepository struct {
}

func NewToDoListRepository() todolist.ToDoListIRepository {
	return &toDoListRepository{}
}

func (repo *toDoListRepository) FindByCoupleID(coupleId string) (*todolist.ToDoList, error) {
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
		return nil, err
	}

	var result ToDoList
	res := db.First(&result, "couple_id = ?", coupleId)

	if res.Error != nil {
		return nil, res.Error
	}

	toDoList := todolist.NewToDoList(result.ID, result.CoupleID)

	return toDoList, nil
}
