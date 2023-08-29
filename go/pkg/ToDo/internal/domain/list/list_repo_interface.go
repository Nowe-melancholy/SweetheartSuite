package list

type ListIRepository interface {
	FindByCoupleID(coupleId string) (*List, error)
	Create(List *List) error
}
