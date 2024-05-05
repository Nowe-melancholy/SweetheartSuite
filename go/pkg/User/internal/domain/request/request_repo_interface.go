package request

type RequestIRepository interface {
	Create(request *Request) error
	FindByFromUserId(fromUserId string) (*Request, error)
	FindByToUserId(toUserId string) (*Request, error)
}