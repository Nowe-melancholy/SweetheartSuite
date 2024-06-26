package user

import (
	"SweetheartSuite/v2/pkg/User/common"
	"errors"
)

type User struct {
	id     string
	name   string
	mailAddress string
	gender common.Gender
}

func (u *User) ID() string {
	return u.id
}

func (u *User) Name() string {
	return u.name
}

func (u *User) MailAddress() string {
	return u.mailAddress
}

func (u *User) Gender() common.Gender {
	return u.gender
}

func NewUser(id string, name string, mailAddress string, gender common.Gender) (*User, error) {
	if id == "" {
		return nil, errors.New("user id cannot be empty")
	}

	if name == "" {
		return nil, errors.New("name cannot be empty")
	}

	if mailAddress == "" {
		return nil, errors.New("mailAddress cannot be empty")
	}

	if gender.String() == "UNKNOWN" {
		return nil, errors.New("gender cannot be UNKNOWN")
	}

	return &User{
		id:     id,
		name:   name,
		mailAddress: mailAddress,
		gender: gender,
	}, nil
}
