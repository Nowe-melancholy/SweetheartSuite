package list

type List struct {
	id       string
	coupleId string
}

func (t *List) ID() string {
	return t.id
}

func NewList(
	id string,
	coupleId string,
) *List {
	return &List{
		id:       id,
		coupleId: coupleId,
	}
}
