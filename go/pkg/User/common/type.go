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

type RequestStatus int

const (
	PENDING RequestStatus = iota + 1
	ACCEPTED
	REJECTED
)

func (r RequestStatus) String() string {
	switch r {
	case PENDING:
		return "PENDING"
	case ACCEPTED:
		return "ACCEPTED"
	case REJECTED:
		return "REJECTED"
	default:
		return "UNKNOWN"
	}
}
