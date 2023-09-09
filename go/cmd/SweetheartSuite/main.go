package main

import (
	todoMigration "SweetheartSuite/v2/pkg/ToDo/migration"
	todoPresenter "SweetheartSuite/v2/pkg/ToDo/presenter"
	userMigration "SweetheartSuite/v2/pkg/User/migration"
	userPresenter "SweetheartSuite/v2/pkg/User/presenter"
	"fmt"
	"net/http"

	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"

	todoConnect "SweetheartSuite/v2/pkg/ToDo/presenter/presenterconnect"
	userConnect "SweetheartSuite/v2/pkg/User/presenter/presenterconnect"

	"connectrpc.com/grpcreflect"
)

func main() {
	fmt.Println("Starting Sweetheart Suite...")

	fmt.Println("Initializing todo schema...")
	todoMigration.Init()

	fmt.Println("Initializing user schema...")
	userMigration.Init()

	fmt.Println("Starting server...")

	todoPresenter := todoPresenter.NewPresenter()
	userPresenter := userPresenter.NewPresenter()

	mux := http.NewServeMux()
	reflector := grpcreflect.NewStaticReflector(
		"SweetheartSuite.v2.ToDo",
		"SweetheartSuite.v2.User",
	)
	mux.Handle(grpcreflect.NewHandlerV1(reflector))
	mux.Handle(grpcreflect.NewHandlerV1Alpha(reflector))

	path, handler := todoConnect.NewToDoHandler(todoPresenter)
	mux.Handle(path, handler)

	path, handler = userConnect.NewUserHandler(userPresenter)
	mux.Handle(path, handler)

	http.ListenAndServe(
		"0.0.0.0:8080",
		h2c.NewHandler(mux, &http2.Server{}),
	)

	fmt.Println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
}
