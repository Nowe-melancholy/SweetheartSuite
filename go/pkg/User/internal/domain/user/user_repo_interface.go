package user

type UserIRepository interface {
	Create(user *User) error
	FindByMailAddress(mailAddress string) (*User, error)
}
