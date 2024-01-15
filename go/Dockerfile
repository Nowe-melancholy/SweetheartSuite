# ビルドステージ
FROM golang:1.20 AS build

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

# ソースコードをコピーします。
COPY . ./

# ビルドします。CGOを無効にし、Goの静的バイナリを作成します。
RUN CGO_ENABLED=0 go build -o /SweetheartSuite ./pkg/main.go


# 実行ステージ
FROM alpine:3.14

WORKDIR /

# ビルドステージからバイナリをコピーします。
COPY --from=build /SweetheartSuite /SweetheartSuite
COPY --from=build /app/.env ./

# バイナリを実行します。
CMD ["/SweetheartSuite"]
