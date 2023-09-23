package item

type ItemIRepository interface {
	GetByIds(ids []string) ([]Item, error)
	Create(item *Item) error
	Update(item *Item) error
	Delete(itemId string) error
}
