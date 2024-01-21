package usecase

import (
	"SweetheartSuite/v2/pkg/User/common"
	"SweetheartSuite/v2/pkg/User/internal/domain/couple"
	"context"
)

type GetCoupleByUserUsecase interface {
	Execute(ctx context.Context, userId string, gender common.Gender) (coupleId string, err error)
}

type getCoupleByUserUsecase struct {
	coupleRepo couple.CoupleIRepository
}

func NewGetCoupleByUserUsecase(coupleRepo couple.CoupleIRepository) GetCoupleByUserUsecase {
	return &getCoupleByUserUsecase{
		coupleRepo: coupleRepo,
	}
}

func (usecase *getCoupleByUserUsecase) Execute(
	ctx context.Context,
	userId string,
	gender common.Gender,
) (coupleId string, err error) {
	coupleModel, err := usecase.coupleRepo.FindByUserId(userId, gender)
	if err != nil {
		return "", err
	}

	return coupleModel.ID(), nil
}
