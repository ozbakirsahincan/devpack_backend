package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"

	"devpack_backend/config"
)

func main() {
	// .env dosyasını yükle
	if err := godotenv.Load(); err != nil {
		log.Fatal("❌ .env dosyası yüklenemedi")
	}
	fmt.Println("✅ .env dosyası yüklendi. JWT_SECRET =", os.Getenv("JWT_SECRET"))

	// DB bağlantısı
	config.ConnectDatabase()

	// Fiber başlat
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("✅ Fiber + .env çalışıyor!")
	})

	app.Listen(":4000")
}
