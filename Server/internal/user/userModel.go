package user

import "context"

// User Model
type User struct {
	ID           int64  `json:"id"`
	Username     string `json:"username"`
	Email        string `json:"email"`
	Password     string `json:"password"`
	Banned       bool   `json:"banned"`
	Verification bool   `json:"verification"`
	Description  string `json:"description"`
}

// Create user
type CreateUserReq struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	RoleID   int64  `json:"role_id"`
}
type CreateUserRes struct {
	ID       int64  `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

// Role model
type Role struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

// Create Role
type CreateRole struct {
	UserID int64 `json:"user_id"`
	RoleID int64 `json:"role_id"`
}

// Psychologist model
type PsychologistProfile struct {
	ID         int64  `json:"id"`
	UserID     int64  `json:"user_id"`
	Bio        string `json:"bio"`
	Education  string `json:"education"`
	Experience string `json:"experience"`
}

// Create PsychologistProfile
type CreatePsychologistProfileReq struct {
	UserID            int64  `json:"user_id"`
	Bio               string `json:"bio"`
	Education         string `json:"education"`
	Experience        string `json:"experience"`
	SpecializationID  int64  `json:"specialization_id"`
	ApproachID        int64  `json:"approach_id"`
	TherapyTypeID     int64  `json:"therapy_type_id"`
	TherapyTypePrices int64  `json:"therapy_type_prices"`
}

type CreatePsychologistProfileRes struct {
	ID         int64  `json:"id"`
	Bio        string `json:"bio"`
	Education  string `json:"education"`
	Experience string `json:"experience"`
}

// Auth
type LoginUserReq struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
type LoginUserRes struct {
	ID          string `json:"id"`
	Username    string `json:"username"`
	accessToken string
}

type UpdateUserReq struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
type UpdateUserRes struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

type DeleteUserReq struct {
	ID int64 `json:"id"`
}

type GetUserByIDReq struct {
	ID string `json:"id"`
}
type GetUserByIDRes struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

type Repository interface {
	CreateUser(ctx context.Context, user *User) (*User, error)

	AddUserRole(ctx context.Context, UserID int64, RoleID int64) error

	CreatePsychologistProfile(ctx context.Context, psy *PsychologistProfile) (*PsychologistProfile, error)
	AddPsychologistSpecialization(ctx context.Context, PsychologistID int64, SpecializationID int64) error
	AddPsychologistApproaches(ctx context.Context, PsychologistID int64, ApproachID int64) error
	AddPsychologistTherapyType(ctx context.Context, PsychologistID int64, TherapyTypeID int64, TherapyTypePrices int64) error

	UpdateUser(ctx context.Context, user *User) (*User, error)
	DeleteUser(ctx context.Context, id int64) error

	GetAllUsers(ctx context.Context) ([]*User, error)
	GetUserByEmail(ctx context.Context, email string) (*User, error)
	GetUserByID(ctx context.Context, id string) (*User, error)
}

type Service interface {
	CreateUser(ctx context.Context, req *CreateUserReq) (*CreateUserRes, error)
	CreatePsychologistProfile(ctx context.Context, req *CreatePsychologistProfileReq) (*CreatePsychologistProfileRes, error)

	Login(ctx context.Context, req *LoginUserReq) (*LoginUserRes, error)
	UpdateUser(ctx context.Context, req *UpdateUserReq) (*UpdateUserRes, error)
	DeleteUser(ctx context.Context, id int64) error
	GetAllUsers(ctx context.Context) ([]*User, error)
}
