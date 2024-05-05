package migration

import (
	"SweetheartSuite/v2/pkg/User/internal/infra"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

func Init() {
	fmt.Println("Initializing database...")

	fmt.Println("Create user schema...")
	db0, err := gorm.Open(postgres.New(postgres.Config{
		DSN: "host=db user=postgres password=postgres dbname=sweetheartdb port=5432 sslmode=disable TimeZone=Asia/Shanghai",
	}))
	if err != nil {
		fmt.Println(err)
		panic(err)
	}

	db0.Exec("CREATE SCHEMA IF NOT EXISTS \"user\";")

	fmt.Println("Migrating user schema...")

	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN: "host=db user=postgres password=postgres dbname=sweetheartdb port=5432 sslmode=disable TimeZone=Asia/Shanghai",
	}), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			TablePrefix:   "user.",
			SingularTable: false,
		},
	})
	if err != nil {
		fmt.Println(err)
		panic(err)
	}

	db.AutoMigrate(&infra.User{}, &infra.Couple{}, &infra.Request{})

	fmt.Println("Database initialized")
}
