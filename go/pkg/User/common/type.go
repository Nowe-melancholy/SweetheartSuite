package common

type Gender int

const (
	MAN Gender = iota + 1
	WOMAN
)

func (g Gender) String() string {
	switch g {
	case MAN:
		return "MAN"
	case WOMAN:
		return "WOMAN"
	default:
		return "UNKNOWN"
	}
}
