package usecase

import (
	"devpack_backend/config"
	"devpack_backend/internal/domain/entity"
	"devpack_backend/internal/domain/repository"
	"devpack_backend/internal/domain/usecase"

	"golang.org/x/crypto/bcrypt"
)

type userUsecase struct {
	repo repository.UserRepository
}

func NewUserUsecase(r repository.UserRepository) usecase.UserUsecase {
	return &userUsecase{repo: r}
}

func (uc *userUsecase) Register(user *entity.User) error {
	// Şifreyi hashle
	hashed, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	user.Password = string(hashed)

	// DB’ye kaydet
	return uc.repo.Save(user)
}

func (uc *userUsecase) Login(email, password string) (string, error) {
	user, err := uc.repo.FindByEmail(email)
	if err != nil {
		return "", err
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return "", err
	}

	// Token oluştur
	token, err := config.GenerateJWT(user.ID, string(user.Role))
	if err != nil {
		return "", err
	}

	return token, nil
}

func (uc *userUsecase) GetByID(id uint) (*entity.User, error) {
	user, err := uc.repo.FindByID(id)
	if err != nil {
		return nil, err
	}

	// Şifreyi göndermiyoruz
	user.Password = ""
	return user, nil
}
