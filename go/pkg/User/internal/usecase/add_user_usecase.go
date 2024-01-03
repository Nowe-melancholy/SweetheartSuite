package usecase

import (
	"SweetheartSuite/v2/pkg/User/common"
	"SweetheartSuite/v2/pkg/User/internal/domain/user"
	"context"

	"github.com/google/uuid"
)

type AddUserUsecase interface {
	Execute(ctx context.Context, name string, mailAddress string, gender common.Gender) (userId string, err error)
}

type addUserUsecase struct {
	userRepo user.UserIRepository
}

func NewAddUserUsecase(userRepo user.UserIRepository) AddUserUsecase {
	return &addUserUsecase{
		userRepo: userRepo,
	}
}

func (usecase *addUserUsecase) Execute(
	ctx context.Context,
	name string,
	mailAddress string,
	gender common.Gender,
) (userId string, err error) {
	user, err := user.NewUser(uuid.NewString(), name, mailAddress, gender)
	if err != nil {
		return "", err
	}

	err = usecase.userRepo.Create(user)
	if err != nil {
		return "", err
	}

	return user.ID(), nil
}
