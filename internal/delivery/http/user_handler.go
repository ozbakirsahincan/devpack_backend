package http

import (
	"devpack_backend/internal/domain/entity"
	"devpack_backend/internal/domain/usecase"
	"github.com/gofiber/fiber/v2"
)

type UserHandler struct {
	UserUC usecase.UserUsecase
}

func NewUserHandler(router fiber.Router, uc usecase.UserUsecase) {
	handler := &UserHandler{UserUC: uc}
	router.Post("/register", handler.Register)
	router.Post("/login", handler.Login)
	router.Get("/me", handler.GetMe)
}

func (h *UserHandler) Register(c *fiber.Ctx) error {
	var req struct {
		Name     string `json:"name"`
		Email    string `json:"email"`
		Password string `json:"password"`
		Role     string `json:"role"`
	}

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Geçersiz veri"})
	}

	user := &entity.User{
		Name:     req.Name,
		Email:    req.Email,
		Password: req.Password,
		Role:     entity.UserRole(req.Role),
	}

	if err := h.UserUC.Register(user); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Kayıt başarısız"})
	}

	return c.JSON(fiber.Map{"message": "Kayıt başarılı"})
}

func (h *UserHandler) Login(c *fiber.Ctx) error {
	var req struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Geçersiz giriş verisi"})
	}

	token, err := h.UserUC.Login(req.Email, req.Password)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": err.Error()})
	}

	return c.JSON(fiber.Map{"token": token})
}

func (h *UserHandler) GetMe(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)

	user, err := h.UserUC.GetByID(userID)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Kullanıcı bulunamadı"})
	}

	user.Password = ""
	return c.JSON(user)
}
