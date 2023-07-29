package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
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
