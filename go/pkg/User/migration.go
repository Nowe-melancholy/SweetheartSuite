package userinfra

import (
	"SweetheartSuite/v2/pkg/User/internal/infra"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

func init() {
	dsn := "postgres:postgres@localhost:5432/sweetheartdb?sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			TablePrefix:   "user.",
			SingularTable: false,
		},
	})
	if err != nil {
		panic(err)
	}

	db.AutoMigrate(&infra.User{}, &infra.Couple{})
}
