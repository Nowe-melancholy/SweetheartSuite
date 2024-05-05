package usecase

import (
	"SweetheartSuite/v2/pkg/User/internal/domain/request"
	"context"
)

type GetRequestByFromUserUsecase interface {
	Execute(ctx context.Context, toUserId string) (request *request.Request, err error)
}

type getRequestByFromUserUsecase struct {
	requestRepo request.RequestIRepository
}

func NewGetRequestByFromUserUsecase(requestRepo request.RequestIRepository) GetRequestByFromUserUsecase {
	return &getRequestByFromUserUsecase{
		requestRepo: requestRepo,
	}
}

func (usecase *getRequestByFromUserUsecase) Execute(
	ctx context.Context,
	toUserId string,
) (request *request.Request, err error) {
	requestModel, err := usecase.requestRepo.FindByFromUserId(toUserId)
	if err != nil {
		return nil, err
	}

	return requestModel, nil
}