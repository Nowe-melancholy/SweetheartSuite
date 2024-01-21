package usecase

import (
	"SweetheartSuite/v2/pkg/User/internal/domain/couple"
	"context"

	"github.com/google/uuid"
)

type AddCoupleUsecase interface {
	Execute(ctx context.Context, userId string, coupleUserId string) (coupleId string, err error)
}

type addCoupleUsecase struct {
	coupleRepo couple.CoupleIRepository
}

func NewAddCoupleUsecase(coupleRepo couple.CoupleIRepository) AddCoupleUsecase {
	return &addCoupleUsecase{
		coupleRepo: coupleRepo,
	}
}

func (usecase *addCoupleUsecase) Execute(
	ctx context.Context,
	manId string,
	womanId string,
) (coupleId string, err error) {
	couple := couple.NewCouple(uuid.NewString(), manId, womanId)

	err = usecase.coupleRepo.Create(couple)
	if err != nil {
		return "", err
	}

	return couple.ID(), nil
}
