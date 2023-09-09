package user

type UserIRepository interface {
	Create(user *User) error
}
