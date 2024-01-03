package usecase

import (
	"SweetheartSuite/v2/pkg/User/internal/domain/user"
	"context"
)

type GetUserByMailAddressUsecase interface {
	Execute(ctx context.Context, mailAddress string) (user *user.User, err error)
}

type getUserByMailAddressUsecase struct {
	userRepo user.UserIRepository
}

func NewGetUserByMailAddressUsecase(userRepo user.UserIRepository) GetUserByMailAddressUsecase {
	return &getUserByMailAddressUsecase{
		userRepo: userRepo,
	}
}

func (usecase *getUserByMailAddressUsecase) Execute(
	ctx context.Context,
	mailAddress string,
) (user *user.User, err error) {
	user, err = usecase.userRepo.FindByMailAddress(mailAddress)
	if err != nil {
		return nil, err
	}

	return user, nil
}