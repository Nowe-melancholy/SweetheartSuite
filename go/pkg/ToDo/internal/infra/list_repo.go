package infra

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/domain/list"

	"gorm.io/gorm"
)

type List struct {
	ID       string `gorm:"primaryKey"`
	CoupleID string
	Items   []Item `gorm:"foreignKey:ListID"`
}

type listRepository struct {
	db *gorm.DB
}

func NewListRepository(db *gorm.DB) list.ListIRepository {
	return &listRepository{db: db}
}

func (repo *listRepository) FindByCoupleID(coupleId string) (*list.List, error) {
	var result List
	res := repo.db.First(&result, "couple_id = ?", coupleId)

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

	repo.db.Create(&listData)

	return nil
}
