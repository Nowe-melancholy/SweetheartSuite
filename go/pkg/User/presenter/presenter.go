package presenter

import (
	"SweetheartSuite/v2/pkg/User/common"
	"SweetheartSuite/v2/pkg/User/internal/infra"
	"SweetheartSuite/v2/pkg/User/internal/usecase"
	"context"
	"fmt"

	"connectrpc.com/connect"
)

type Presenter interface {
	AddUser(
		ctx context.Context,
		req *connect.Request[AddUserRequest],
	) (*connect.Response[AddUserResponse], error)
}

type presenter struct {
	addUserUsecase usecase.AddUserUsecase
}

func NewPresenter() Presenter {
	db := infra.InitUserDB()

	userRepo := infra.NewUserRepository(db)

	addUserUsecase := usecase.NewAddUserUsecase(
		userRepo,
	)

	return &presenter{
		addUserUsecase: addUserUsecase,
	}
}

func (presenter *presenter) AddUser(
	ctx context.Context,
	req *connect.Request[AddUserRequest],
)(*connect.Response[AddUserResponse], error) {
	fmt.Println("Add user presenter")
	fmt.Println(req.Msg.Gender)
	userId, err := presenter.addUserUsecase.Execute(
		ctx,
		req.Msg.Name,
		common.Gender(req.Msg.Gender),
	)
	if err != nil {
		fmt.Println("Error in add user presenter")
		fmt.Println(err)
		return nil, err
	}

	res := connect.NewResponse(&AddUserResponse{
		UserId: userId,
	})

	return res, nil
}