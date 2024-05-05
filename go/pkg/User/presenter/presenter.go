package presenter

import (
	authPresenter "SweetheartSuite/v2/pkg/Auth/presenter"
	"SweetheartSuite/v2/pkg/User/common"
	"SweetheartSuite/v2/pkg/User/internal/infra"
	"SweetheartSuite/v2/pkg/User/internal/usecase"
	"context"
	"fmt"
	"os"

	"connectrpc.com/connect"
	"github.com/dgrijalva/jwt-go"
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
	GetCouple(
		ctx context.Context,
		req *connect.Request[GetCoupleRequest],
	)(*connect.Response[GetCoupleResponse], error)
	GetRequestByToUserId(
		ctx context.Context,
		req *connect.Request[GetRequestByToUserIdRequest],
	)(*connect.Response[GetRequestByToUserIdResponse], error)
	GetRequestByFromUserId(
		ctx context.Context,
		req *connect.Request[GetRequestByFromUserIdRequest],
	)(*connect.Response[GetRequestByFromUserIdResponse], error)
}

type presenter struct {
	addUserUsecase usecase.AddUserUsecase
	getUserByMailAddressUsecase usecase.GetUserByMailAddressUsecase
	getCoupleByUserUsecase usecase.GetCoupleByUserUsecase
	getRequestByToUserUsecase usecase.GetRequestByToUserUsecase
	getRequestByFromUserUsecase usecase.GetRequestByFromUserUsecase
}

func NewPresenter() Presenter {
	db := infra.InitUserDB()

	userRepo := infra.NewUserRepository(db)
	coupleRepo := infra.NewCoupleRepository(db)
	requestRepo := infra.NewRequestRepository(db)

	addUserUsecase := usecase.NewAddUserUsecase(
		userRepo,
	)

	getUserByMailAddressUsecase := usecase.NewGetUserByMailAddressUsecase(
		userRepo,
	)

	getCoupleByUserUsecase := usecase.NewGetCoupleByUserUsecase(
		coupleRepo,
	)

	getRequestByToUser := usecase.NewGetRequestByToUserUsecase(
		requestRepo,
	)

	getRequestByFromUser := usecase.NewGetRequestByFromUserUsecase(
		requestRepo,
	)

	return &presenter{
		addUserUsecase: addUserUsecase,
		getUserByMailAddressUsecase: getUserByMailAddressUsecase,
		getCoupleByUserUsecase: getCoupleByUserUsecase,
		getRequestByToUserUsecase: getRequestByToUser,
		getRequestByFromUserUsecase: getRequestByFromUser,
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

	// JWTトークン作成
	jwtKey := os.Getenv("JWT_KEY")
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["userId"] = userId
	signedToken, err := token.SignedString([]byte(jwtKey))
	if err != nil {
		fmt.Println("Error in sign JWT token")
		panic(err)
	}
	res.Header().Set("Authorization", "Bearer " + signedToken)

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

	// JWTトークン作成
	jwtKey := os.Getenv("JWT_KEY")
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["userId"] = user.ID()
	signedToken, err := token.SignedString([]byte(jwtKey))
	if err != nil {
		fmt.Println("Error in sign JWT token")
		panic(err)
	}
	res.Header().Set("Authorization", "Bearer " + signedToken)

	return res, nil
}

func (presenter *presenter) GetCouple(
	ctx context.Context,
	req *connect.Request[GetCoupleRequest],
)(*connect.Response[GetCoupleResponse], error) {
	fmt.Println("Get couple presenter")
	userId, err := authPresenter.ValidateJWT(ctx, req.Header().Get("Authorization"))
	if err != nil {
		fmt.Println("Error in get couple presenter")
		fmt.Println(err)
		return nil, err
	}

	coupleId, err := presenter.getCoupleByUserUsecase.Execute(
		ctx,
		userId,
	)

	if err != nil {
		fmt.Println("Error in get couple presenter")
		fmt.Println(err)
		return nil, err
	}
	
	res := connect.NewResponse(&GetCoupleResponse{
		CoupleId: coupleId,
	})

	return res, nil
}

func (presenter *presenter) GetRequestByToUserId(
	ctx context.Context,
	req *connect.Request[GetRequestByToUserIdRequest],
)(*connect.Response[GetRequestByToUserIdResponse], error) {
	fmt.Println("Get request by to user id presenter")
	userId, err := authPresenter.ValidateJWT(ctx, req.Header().Get("Authorization"))
	if err != nil {
		fmt.Println("Error in get request by to user id presenter")
		fmt.Println(err)
		return nil, err
	}

	request, err := presenter.getRequestByToUserUsecase.Execute(
		ctx,
		userId,
	)

	if err != nil {
		fmt.Println("Error in get request by to user id presenter")
		fmt.Println(err)
		return nil, err
	}

	if request == nil {
		res := connect.NewResponse(&GetRequestByToUserIdResponse{})
		return res, nil
	}

	res := connect.NewResponse(&GetRequestByToUserIdResponse{
		Id: request.ID(),
		FromUserId: request.FromUserID(),
		Status: RequestStatus(request.Status()),
	})

	return res, nil
}

func (presenter *presenter) GetRequestByFromUserId(
	ctx context.Context,
	req *connect.Request[GetRequestByFromUserIdRequest],
)(*connect.Response[GetRequestByFromUserIdResponse], error) {
	fmt.Println("Get request by from user id presenter")
	userId, err := authPresenter.ValidateJWT(ctx, req.Header().Get("Authorization"))
	if err != nil {
		fmt.Println("Error in get request by from user id presenter")
		fmt.Println(err)
		return nil, err
	}

	request, err := presenter.getRequestByFromUserUsecase.Execute(
		ctx,
		userId,
	)

	if err != nil {
		fmt.Println("Error in get request by from user id presenter")
		fmt.Println(err)
		return nil, err
	}

	if request == nil {
		res := connect.NewResponse(&GetRequestByFromUserIdResponse{})
		return res, nil
	}

	res := connect.NewResponse(&GetRequestByFromUserIdResponse{
		Id: request.ID(),
		ToUserId: request.ToUserID(),
		Status: RequestStatus(request.Status()),
	})

	return res, nil
}