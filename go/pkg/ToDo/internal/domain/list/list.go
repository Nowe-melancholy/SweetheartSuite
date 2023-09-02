package list

import "errors"

type List struct {
	id       string
	coupleId string
}

func (t *List) ID() string {
	return t.id
}

func (t *List) CoupleID() string {
	return t.coupleId
}

func NewList(
	id string,
	coupleId string,
) (*List, error) {
	if id == "" || coupleId == "" {
		return nil, errors.New("Invalid parameters")
	}

	return &List{
		id:       id,
		coupleId: coupleId,
	}, nil
}
