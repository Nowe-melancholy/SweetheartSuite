package couple

type CoupleIRepository interface {
	Create(couple *Couple) error
	FindByUserId(userId string) (*Couple, error)
}