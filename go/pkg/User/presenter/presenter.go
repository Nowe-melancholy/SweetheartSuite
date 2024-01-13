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
	GetUserByMailAddress(
		ctx context.Context,
		req *connect.Request[GetUserByMailAddressRequest],
	)(*connect.Response[GetUserByMailAddressResponse], error)
}

type presenter struct {
	addUserUsecase usecase.AddUserUsecase
	getUserByMailAddressUsecase usecase.GetUserByMailAddressUsecase
}

func NewPresenter() Presenter {
	db := infra.InitUserDB()

	userRepo := infra.NewUserRepository(db)

	addUserUsecase := usecase.NewAddUserUsecase(
		userRepo,
	)

	getUserByMailAddressUsecase := usecase.NewGetUserByMailAddressUsecase(
		userRepo,
	)

	return &presenter{
		addUserUsecase: addUserUsecase,
		getUserByMailAddressUsecase: getUserByMailAddressUsecase,
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
		req.Msg.MailAddress,
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

func (presenter *presenter) GetUserByMailAddress(
	ctx context.Context,
	req *connect.Request[GetUserByMailAddressRequest],
)(*connect.Response[GetUserByMailAddressResponse], error) {
	fmt.Println("Get user by mail address presenter")
	user, err := presenter.getUserByMailAddressUsecase.Execute(
		ctx,
		req.Msg.MailAddress,
	)

	if err != nil {
		fmt.Println("Error in get user by mail address presenter")
		fmt.Println(err)
		return nil, err
	}

	if user == nil {
		res := connect.NewResponse(&GetUserByMailAddressResponse{})
		return res, nil
	}

	res := connect.NewResponse(&GetUserByMailAddressResponse{
		Id: user.ID(),
		Name: user.Name(),
		MailAddress: user.MailAddress(),
		Gender: Gender(user.Gender()),
	})

	return res, nil
}