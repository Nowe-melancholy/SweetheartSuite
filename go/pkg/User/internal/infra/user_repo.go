package infra

import (
	"SweetheartSuite/v2/pkg/User/common"
	"SweetheartSuite/v2/pkg/User/internal/domain/user"
	"errors"

	"gorm.io/gorm"
)

type User struct {
	ID     string
	Name   string
	MailAddress string
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
		MailAddress: user.MailAddress(),
		Gender: user.Gender(),
	}

	repo.db.Create(&userData)

	return nil
}

func (repo *userRepository) FindByMailAddress(mailAddress string) (*user.User, error) {
	var userData User
	var result = repo.db.Where("mail_address = ?", mailAddress).First(&userData)
	
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return nil, nil
	}

	var userModel, err = user.NewUser(userData.ID, userData.Name, userData.MailAddress, userData.Gender)
	if err != nil {
		return nil, err
	}

	return userModel, nil
}
