package main

import (
	toDoMigration "SweetheartSuite/v2/pkg/ToDo/migration"
	userMigration "SweetheartSuite/v2/pkg/User/migration"
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("Starting Sweetheart Suite...")

	fmt.Println("Initializing todo schema...")
	toDoMigration.Init()

	fmt.Println("Initializing user schema...")
	userMigration.Init()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Println("Request received")

		w.Write([]byte(`
			<!DOCTYPE html>
			<html>
				<head>
					<title>Sweetheart Suite</title>
				</head>
				<body>
					<h1>Welcome to Sweetheart Suite</h1>
				</body>
			</html>
		`))
	})
	http.ListenAndServe(":8080", nil)
}
