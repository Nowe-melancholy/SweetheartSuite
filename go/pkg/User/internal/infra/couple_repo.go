package infra

import (
	"SweetheartSuite/v2/pkg/User/internal/domain/couple"
	"errors"

	"gorm.io/gorm"
)

type Couple struct {
	ID      string
	ManId   string
	WomanId string
}

type coupleRepository struct {
	db *gorm.DB
}

func NewCoupleRepository(db *gorm.DB) couple.CoupleIRepository {
	return &coupleRepository{db}
}

func (repo *coupleRepository) Create(couple *couple.Couple) error {
	coupleData := Couple{
		ID:      couple.ID(),
		ManId:   couple.ManId(),
		WomanId: couple.WomanId(),
	}

	repo.db.Create(&coupleData)

	return nil
}

func (repo *coupleRepository) FindByUserId(userId string) (*couple.Couple, error) {
	var coupleData Couple
	var result = repo.db.Where("man_id = ?", userId).Or("woman_id = ?", userId).First(&coupleData)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return nil, nil
	}

	var coupleModel = couple.NewCouple(coupleData.ID, coupleData.ManId, coupleData.WomanId)
	return coupleModel, nil
}
