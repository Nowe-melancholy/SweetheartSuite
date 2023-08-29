package migration

import (
	"SweetheartSuite/v2/pkg/ToDo/internal/infra"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

func Init() {
	fmt.Println("Initializing database...")

	fmt.Println("Create todo schema...")
	db0, err := gorm.Open(postgres.New(postgres.Config{
		DSN: "host=db user=postgres password=postgres dbname=sweetheartdb port=5432 sslmode=disable TimeZone=Asia/Shanghai",
	}))
	if err != nil {
		fmt.Println(err)
		panic(err)
	}

	db0.Exec("CREATE SCHEMA IF NOT EXISTS todo;")

	fmt.Println("Migrating todo schema...")

	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN: "host=db user=postgres password=postgres dbname=sweetheartdb port=5432 sslmode=disable TimeZone=Asia/Shanghai",
	}), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			TablePrefix:   "todo.",
			SingularTable: false,
		},
	})
	if err != nil {
		fmt.Println(err)
		panic(err)
	}

	db.AutoMigrate(&infra.Item{}, &infra.List{})

	fmt.Println("Database initialized")
}
