package user

import (
	"context"
	"database/sql"
)

type DBTX interface {
	ExecContext(ctx context.Context, query string, args ...interface{}) (sql.Result, error)
	PrepareContext(context.Context, string) (*sql.Stmt, error)
	QueryContext(context.Context, string, ...interface{}) (*sql.Rows, error)
	QueryRowContext(context.Context, string, ...interface{}) *sql.Row
}

type repository struct {
	db DBTX
}

func NewRepository(db DBTX) Repository {
	return &repository{db: db}
}

func (r *repository) CreateUser(ctx context.Context, user *User) (*User, error) {
	var lastInsertId int64
	// todo добовление фото пользователя

	query := "INSERT INTO users(username, password, email) VALUES ($1, $2, $3) returning id"
	err := r.db.QueryRowContext(ctx, query, user.Username, user.Password, user.Email).Scan(&lastInsertId)
	if err != nil {
		return &User{}, err
	}

	user.ID = int64(lastInsertId)
	return user, nil
}

func (r *repository) AddUserRole(ctx context.Context, UserID int64, RoleID int64) error {
	query := "INSERT INTO user_role(user_id, role_id) VALUES ($1, $2)"
	err := r.db.QueryRowContext(ctx, query, UserID, RoleID)
	return err.Err()
}

func (r *repository) CreatePsychologistProfile(ctx context.Context, psy *PsychologistProfile) (*PsychologistProfile, error) {
	var lastInsertId int64
	query := "INSERT INTO psychologists(user_id, bio, education, experience) VALUES ($1, $2, $3, $4) returning id"
	err := r.db.QueryRowContext(ctx, query, psy.UserID, psy.Bio, psy.Education, psy.Experience).Scan(&lastInsertId)
	if err != nil {
		return &PsychologistProfile{}, err
	}
	psy.ID = lastInsertId
	return psy, nil
}

func (r *repository) AddPsychologistSpecialization(ctx context.Context, PsychologistID int64, SpecializationID int64) error {
	query := "INSERT INTO psychologist_specializations(psychologist_id, specialization_id) VALUES ($1, $2)"
	err := r.db.QueryRowContext(ctx, query, PsychologistID, SpecializationID)
	if err != nil {
		return nil
	}
	return nil
}

func (r *repository) AddPsychologistApproaches(ctx context.Context, PsychologistID int64, ApproachID int64) error {
	query := "INSERT INTO psychologist_approaches(psychologist_id, approach_id) VALUES ($1, $2)"
	err := r.db.QueryRowContext(ctx, query, PsychologistID, ApproachID)
	if err != nil {
		return nil
	}
	return nil
}
func (r *repository) AddPsychologistTherapyType(ctx context.Context, PsychologistID int64, TherapyTypeID int64, TherapyTypePrices int64) error {
	query := "INSERT INTO psychologist_therapy_types(psychologist_id, therapy_type_id, therapy_type_prices) VALUES ($1, $2, $3)"
	err := r.db.QueryRowContext(ctx, query, PsychologistID, TherapyTypeID, TherapyTypePrices)
	if err != nil {
		return nil
	}
	return nil
}

func (r *repository) UpdateUser(ctx context.Context, user *User) (*User, error) {
	query := "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4"
	_, err := r.db.ExecContext(ctx, query, user.Username, user.Email, user.Password, user.ID)
	if err != nil {
		return &User{}, err
	}
	return user, nil
}

func (r *repository) DeleteUser(ctx context.Context, id int64) error {
	u := User{}
	query := "Delete FROM users WHERE id = $1"
	_, err := r.db.ExecContext(ctx, query, u.ID)

	return err
}

func (r *repository) GetUserByEmail(ctx context.Context, email string) (*User, error) {
	u := User{}
	query := "SELECT id, email, username, password FROM users WHERE email = $1"
	err := r.db.QueryRowContext(ctx, query, email).Scan(&u.ID, &u.Email, &u.Username, &u.Password)
	if err != nil {
		return &User{}, nil
	}

	return &u, nil
}

func (r *repository) GetUserByID(ctx context.Context, id string) (*User, error) {
	u := User{}
	query := "SELECT id, username, email, password FROM users WHERE id = $1"
	err := r.db.QueryRowContext(ctx, query, id).Scan(u.ID, &u.Email, &u.Username, &u.Password)
	if err != nil {
		return &User{}, nil
	}

	return &u, nil
}

func (r *repository) GetAllUsers(ctx context.Context) ([]*User, error) {
	u := User{}
	query := "SELECT * FROM users"
	err := r.db.QueryRowContext(ctx, query).Scan(u.ID, u.Email, u.Username, u.Password)
	if err != nil {
		return nil, err
	}

	return []*User{}, nil
}
