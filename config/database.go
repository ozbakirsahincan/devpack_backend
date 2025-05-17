package config

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	dsn := "host=localhost user=postgres password=postgres dbname=devpack_db port=5432 sslmode=disable TimeZone=UTC"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Veritabanına bağlanılamadı: %v", err)
	}

	sqlDB, err := db.DB()
	if err != nil {
		log.Fatalf("SQL DB nesnesi alınamadı: %v", err)
	}

	if err := sqlDB.Ping(); err != nil {
		log.Fatalf("Veritabanına ping başarısız: %v", err)
	}

	fmt.Println("✅ Veritabanına başarıyla bağlanıldı!")
	DB = db
}
