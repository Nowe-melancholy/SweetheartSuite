FROM golang:1.21.3
WORKDIR /app
RUN go install github.com/cosmtrek/air@latest
CMD ["air", "-c", ".air.toml"]