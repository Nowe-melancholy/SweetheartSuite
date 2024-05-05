package usecase

import (
	"SweetheartSuite/v2/pkg/User/internal/domain/request"
	"context"
)

type GetRequestByToUserUsecase interface {
	Execute(ctx context.Context, toUserId string) (request *request.Request, err error)
}

type getRequestByToUserUsecase struct {
	requestRepo request.RequestIRepository
}

func NewGetRequestByToUserUsecase(requestRepo request.RequestIRepository) GetRequestByToUserUsecase {
	return &getRequestByToUserUsecase{
		requestRepo: requestRepo,
	}
}

func (usecase *getRequestByToUserUsecase) Execute(
	ctx context.Context,
	toUserId string,
) (request *request.Request, err error) {
	requestModel, err := usecase.requestRepo.FindByToUserId(toUserId)
	if err != nil {
		return nil, err
	}

	return requestModel, nil
}