package infra

import (
	"SweetheartSuite/v2/pkg/User/common"
	"SweetheartSuite/v2/pkg/User/internal/domain/user"

	"gorm.io/gorm"
)

type User struct {
	ID     string
	Name   string
	Gender common.Gender
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) user.UserIRepository {
	return &userRepository{db}
}

func (repo *userRepository) Create(user *user.User) error {
	userData := User{
		ID:     user.ID(),
		Name:   user.Name(),
		Gender: user.Gender(),
	}

	repo.db.Create(&userData)

	return nil
}
