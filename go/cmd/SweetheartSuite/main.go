package main

import (
	toDoMigration "SweetheartSuite/v2/pkg/ToDo/migration"
	toDoPresenter "SweetheartSuite/v2/pkg/ToDo/presenter"
	userMigration "SweetheartSuite/v2/pkg/User/migration"
	"fmt"
	"net/http"

	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"

	"SweetheartSuite/v2/pkg/ToDo/presenter/presenterconnect"

	"connectrpc.com/grpcreflect"
)

func main() {
	fmt.Println("Starting Sweetheart Suite...")

	fmt.Println("Initializing todo schema...")
	toDoMigration.Init()

	fmt.Println("Initializing user schema...")
	userMigration.Init()

	fmt.Println("Starting server...")

	todoPresenter := toDoPresenter.NewToDoPresenter()

	mux := http.NewServeMux()
	reflector := grpcreflect.NewStaticReflector(
		"SweetheartSuite.v2.ToDo",
	)
	mux.Handle(grpcreflect.NewHandlerV1(reflector))
	mux.Handle(grpcreflect.NewHandlerV1Alpha(reflector))

	path, handler := presenterconnect.NewToDoHandler(todoPresenter)
	mux.Handle(path, handler)
	http.ListenAndServe(
		"0.0.0.0:8080",
		h2c.NewHandler(mux, &http2.Server{}),
	)

	fmt.Println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
}
