package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/list"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

type List struct {
	ID       string
	CoupleID string
}

type listRepository struct {
}

func NewListRepository() list.ListIRepository {
	return &listRepository{}
}

func (repo *listRepository) FindByCoupleID(coupleId string) (*list.List, error) {
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

	var result List
	res := db.First(&result, "couple_id = ?", coupleId)

	if res.Error != nil {
		return nil, res.Error
	}

	list := list.NewList(result.ID, result.CoupleID)

	return list, nil
}
