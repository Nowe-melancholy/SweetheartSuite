package request

import (
	"SweetheartSuite/v2/pkg/User/common"
	"SweetheartSuite/v2/pkg/User/internal/domain/user"
	"errors"
)

type Request struct {
	id     string
	fromUserId string
	toUserId string
	status common.RequestStatus
}

func (r *Request) ID() string {
	return r.id
}

func (r *Request) FromUserID() string {
	return r.fromUserId
}

func (r *Request) ToUserID() string {
	return r.toUserId
}

func (r *Request) Status() common.RequestStatus {
	return r.status
}

func NewRequest(id string, fromUser user.User, toUser user.User, status common.RequestStatus) (*Request, error) {
	if id == "" {
		return nil, errors.New("request id cannot be empty")
	}

	if status.String() == "UNKNOWN" {
		return nil, errors.New("status cannot be UNKNOWN")
	}

	if(fromUser.Gender() == toUser.Gender()) {
		return nil, errors.New("fromUser and toUser cannot have the same")
	}

	return &Request{
		id:     id,
		fromUserId: fromUser.ID(),
		toUserId: toUser.ID(),
		status: status,
	}, nil
}