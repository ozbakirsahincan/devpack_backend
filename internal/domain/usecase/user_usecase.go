package usecase

import "devpack_backend/internal/domain/entity"

type UserUsecase interface {
	Register(user *entity.User) error
	Login(email, password string) (string, error)
	GetByID(id uint) (*entity.User, error)
}
