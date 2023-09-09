package infra

import (
	"SweetheartSuite/v2/pkg/User/common"
	"SweetheartSuite/v2/pkg/User/internal/domain/user"
	"fmt"
)

type User struct {
	ID     string
	Name   string
	Gender common.Gender
}

type userRepository struct {
}

func NewUserRepository() user.UserIRepository {
	return &userRepository{}
}

func (repo *userRepository) Create(user *user.User) error {
	userData := User{
		ID:     user.ID(),
		Name:   user.Name(),
		Gender: user.Gender(),
	}

	db, err := CreateDBConnection()

	if err != nil {
		fmt.Println(err)
		return err
	}

	db.Create(&userData)

	return nil
}
