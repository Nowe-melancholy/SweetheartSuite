package item

type ItemIRepository interface {
	Create(item *Item) error
}
