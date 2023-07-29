package couple

import (
	"github.com/google/uuid"
)

type Couple struct {
	id      string
	manId   string
	womanId string
}

func (c *Couple) ID() string {
	return c.id
}

func NewCouple(manId string, womanId string) *Couple {
	return &Couple{
		id:      uuid.New().String(),
		manId:   manId,
		womanId: womanId,
	}
}
