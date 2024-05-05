package infra

import (
	"SweetheartSuite/v2/pkg/User/common"
	"SweetheartSuite/v2/pkg/User/internal/domain/request"
	"SweetheartSuite/v2/pkg/User/internal/domain/user"
	"errors"

	"gorm.io/gorm"
)

type Request struct {
	ID         string
	FromUserID string
	FromUser   User `gorm:"foreignKey:FromUserID"`
	ToUserID   string
	ToUser     User `gorm:"foreignKey:ToUserID"`
	Status     common.RequestStatus
}

type requestRepository struct {
	db *gorm.DB
}

func NewRequestRepository(db *gorm.DB) request.RequestIRepository {
	return &requestRepository{db}
}

func (repo *requestRepository) Create(request *request.Request) error {
	requestData := Request{
		ID:         request.ID(),
		FromUserID: request.FromUserID(),
		ToUserID:   request.ToUserID(),
		Status:     request.Status(),
	}

	repo.db.Create(&requestData)

	return nil
}

func (repo *requestRepository) FindByFromUserId(fromUserId string) (*request.Request, error) {
	var requestData Request
	var result = repo.db.Where("from_user_id = ?", fromUserId).First(&requestData)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return nil, nil
	}

	repo.db.Where("id = ?", requestData.FromUserID).First(&requestData.FromUser)
	repo.db.Where("id = ?", requestData.ToUserID).First(&requestData.ToUser)

	fromUser, error := user.NewUser(requestData.FromUser.ID, requestData.FromUser.Name, requestData.FromUser.MailAddress, requestData.FromUser.Gender)
	if error != nil {
		return nil, error
	}

	toUser, error := user.NewUser(requestData.ToUser.ID, requestData.ToUser.Name, requestData.ToUser.MailAddress, requestData.ToUser.Gender)
	if error != nil {
		return nil, error
	}

	requestModel, error := request.NewRequest(requestData.ID, *fromUser, *toUser, requestData.Status)
	if error != nil {
		return nil, error
	}

	return requestModel, nil
}

func (repo *requestRepository) FindByToUserId(toUserId string) (*request.Request, error) {
	var requestData Request
	var result = repo.db.Where("to_user_id = ?", toUserId).First(&requestData)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return nil, nil
	}

	repo.db.Where("id = ?", requestData.FromUserID).First(&requestData.FromUser)
	repo.db.Where("id = ?", requestData.ToUserID).First(&requestData.ToUser)

	fromUser, error := user.NewUser(requestData.FromUser.ID, requestData.FromUser.Name, requestData.FromUser.MailAddress, requestData.FromUser.Gender)
	if error != nil {
		return nil, error
	}

	toUser, error := user.NewUser(requestData.ToUser.ID, requestData.ToUser.Name, requestData.ToUser.MailAddress, requestData.ToUser.Gender)
	if error != nil {
		return nil, error
	}

	requestModel, error := request.NewRequest(requestData.ID, *fromUser, *toUser, requestData.Status)
	if error != nil {
		return nil, error
	}

	return requestModel, nil
}
