package item

import "errors"

type Item struct {
	id          string
	title       string
	description string
	isDone      bool
	listId      string
}

func (t *Item) ID() string {
	return t.id
}

func (t *Item) Title() string {
	return t.title
}

func (t *Item) Description() string {
	return t.description
}

func (t *Item) IsDone() bool {
	return t.isDone
}

func (t *Item) ListID() string {
	return t.listId
}

func NewItem(id string, title string, description string, listId string) (*Item, error) {
	if id == "" {
		return nil, errors.New("id is required")
	}
	if title == "" {
		return nil, errors.New("title is required")
	}
	if listId == "" {
		return nil, errors.New("listId is required")
	}

	return &Item{
		id:          id,
		title:       title,
		description: description,
		isDone:      false,
		listId:      listId,
	}, nil
}

func (t *Item) EditItem(title string, description string) {
	t.title = title
	t.description = description
}

func (t *Item) MarkAsDone() {
	t.isDone = true
}
