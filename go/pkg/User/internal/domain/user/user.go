package user

import (
	"SweetheartSuite/v2/pkg/User/common"
	"errors"
)

type User struct {
	id     string
	name   string
	gender common.Gender
}

func (u *User) ID() string {
	return u.id
}

func (u *User) Name() string {
	return u.name
}

func (u *User) Gender() common.Gender {
	return u.gender
}

func NewUser(id string, name string, gender common.Gender) (*User, error) {
	if id == "" {
		return nil, errors.New("id cannot be empty")
	}

	if name == "" {
		return nil, errors.New("name cannot be empty")
	}

	return &User{
		id:     id,
		name:   name,
		gender: gender,
	}, nil
}
