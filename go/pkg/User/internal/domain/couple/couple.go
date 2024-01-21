package couple

type Couple struct {
	id      string
	manId   string
	womanId string
}

func (c *Couple) ID() string {
	return c.id
}

func (c *Couple) ManId() string {
	return c.manId
}

func (c *Couple) WomanId() string {
	return c.womanId
}


func NewCouple(id string, manId string, womanId string) *Couple {
	return &Couple{
		id:      id,
		manId:   manId,
		womanId: womanId,
	}
}

