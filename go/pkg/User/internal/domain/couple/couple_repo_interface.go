package couple

import (
	"SweetheartSuite/v2/pkg/User/common"
)

type CoupleIRepository interface {
	Create(couple *Couple) error
	FindByUserId(userId string, gender common.Gender) (*Couple, error)
}