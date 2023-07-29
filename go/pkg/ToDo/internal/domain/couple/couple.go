package couple

type Couple struct {
	id      string
	manId   string
	womanId string
}

func NewCouple(id, manId, womanId string) *Couple {
	return &Couple{
		id:      id,
		manId:   manId,
		womanId: womanId,
	}
}
