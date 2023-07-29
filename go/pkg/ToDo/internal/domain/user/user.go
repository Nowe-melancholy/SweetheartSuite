package user

type User struct {
	id     string
	name   string
	gender string
}

func NewUser(id, name, gender string) *User {
	return &User{
		id:     id,
		name:   name,
		gender: gender,
	}
}
