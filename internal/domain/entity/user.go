package entity

type UserRole string

const (
	Admin         UserRole = "admin"
	Dispatcher    UserRole = "dispatcher"
	PrivatKunde   UserRole = "privat_kunde"
	GeschaftKunde UserRole = "geschaft_kunde"
)

type User struct {
	ID       uint     `json:"id"`
	Name     string   `json:"name"`
	Email    string   `json:"email"`
	Password string   `json:"password"`
	Role     UserRole `json:"role"`
}
