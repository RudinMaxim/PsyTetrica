package user

import (
	"context"
	"strconv"
	"time"

	utils "example.com/m/util"
	"github.com/golang-jwt/jwt/v5"
)

type service struct {
	Repository
	timeout time.Duration
}

const (
	secretKey = "652adc550ce5535f76f85b52d87f87ab"
)

func NewService(repository Repository) Service {
	return &service{
		repository,
		time.Duration(2) * time.Second,
	}
}

func (s *service) CreateUser(c context.Context, req *CreateUserReq) (*CreateUserRes, error) {
	ctx, cancel := context.WithTimeout(c, s.timeout)
	defer cancel()

	hashedPassword, err := utils.HashPassword(req.Password)
	if err != nil {
		return nil, err
	}

	u := &User{
		Username: req.Username,
		Email:    req.Email,
		Password: hashedPassword,
	}

	r, err := s.Repository.CreateUser(ctx, u)
	if err != nil {
		return nil, err
	}

	res := &CreateUserRes{
		ID:       strconv.Itoa(int(r.ID)),
		Username: r.Username,
		Email:    r.Email,
	}

	return res, nil
}

type MyJWTClaims struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	jwt.RegisteredClaims
}

func (s *service) Login(c context.Context, req *LoginUserReq) (*LoginUserRes, error) {
	ctx, cancel := context.WithTimeout(c, s.timeout)
	defer cancel()

	u, err := s.Repository.GetUserByEmail(ctx, req.Email)
	if err != nil {
		return &LoginUserRes{}, err
	}

	err = utils.CheckPassword(req.Password, u.Password)
	if err != nil {
		return &LoginUserRes{}, err
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, MyJWTClaims{
		ID:       strconv.Itoa(int(u.ID)),
		Username: u.Username,
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    strconv.Itoa(int(u.ID)),
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
		},
	})

	ss, err := token.SignedString([]byte(secretKey))
	if err != nil {
		return &LoginUserRes{}, err
	}

	return &LoginUserRes{accessToken: ss, Username: u.Username, ID: strconv.Itoa(int(u.ID))}, nil
}

func (s *service) UpdateUser(ctx context.Context, req *UpdateUserReq) (*UpdateUserRes, error) {

	// получить пользователя по ID
	user, err := s.Repository.GetUserByID(ctx, req.ID)
	if err != nil {
		return nil, err
	}

	// обновить данные
	user.Username = req.Username
	user.Email = req.Email

	if req.Password != "" {
		hashedPassword, err := utils.HashPassword(req.Password)
		if err != nil {
			return nil, err
		}

		user.Password = hashedPassword
	}

	// сохранить изменения
	updatedUser, err := s.Repository.UpdateUser(ctx, user)
	if err != nil {
		return nil, err
	}

	// сформировать ответ
	res := &UpdateUserRes{
		ID:       strconv.Itoa(int(updatedUser.ID)),
		Username: updatedUser.Username,
		Email:    updatedUser.Email,
	}

	return res, nil
}

func (s *service) DeleteUser(ctx context.Context, id int64) error {
	err := s.Repository.DeleteUser(ctx, id)
	if err != nil {
		return err
	}
	return nil
}

func (s *service) GetAllUsers(ctx context.Context) ([]*User, error) {
	return s.Repository.GetAllUsers(ctx)
}
