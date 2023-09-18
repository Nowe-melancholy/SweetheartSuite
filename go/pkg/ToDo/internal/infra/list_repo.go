package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/list"
	"fmt"
)

type List struct {
	ID       string
	CoupleID string
	Items   []Item `gorm:"foreignKey:ListID"`
}

type listRepository struct {
}

func NewListRepository() list.ListIRepository {
	return &listRepository{}
}

func (repo *listRepository) FindByCoupleID(coupleId string) (*list.List, error) {
	db, err := CreateDBConnection()

	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	var result List
	res := db.First(&result, "couple_id = ?", coupleId)

	if res.Error != nil {
		return nil, res.Error
	}

	list, err := list.NewList(result.ID, result.CoupleID)
	if err != nil {
		return nil, err
	}

	return list, nil
}

func (repo *listRepository) Create(list *list.List) error {
	listData := List{
		ID:       list.ID(),
		CoupleID: list.CoupleID(),
	}

	db, err := CreateDBConnection()

	if err != nil {
		fmt.Println(err)
		return err
	}

	db.Create(&listData)

	return nil
}
