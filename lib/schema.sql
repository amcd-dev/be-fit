CREATE TABLE IF NOT EXISTS befit_user (
    id SERIAL PRIMARY KEY,
    uid TEXT,
    age INTEGER,
    weight_kg real,
    weight_lb INTEGER,
    height_cm INTEGER,
    height_ft INTEGER,
    height_ft_in INTEGER
);

CREATE TABLE IF NOT EXISTS strength_activity (
    id SERIAL PRIMARY KEY,
    uid TEXT,
    day VARCHAR(10),
    exercise VARCHAR(100),
    weight_kg REAL,
    weight_lb INTEGER,
    sets INTEGER,
    reps INTEGER,
    difficulty INTEGER,
    notes TEXT
)