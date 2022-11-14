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
    activity VARCHAR(100),
    type VARCHAR(20),
    weight_kg REAL,
    weight_lb INTEGER,
    distance_km REAL,
    distance_mi REAL,
    distance_m REAL,
    distance_yd REAL,
    incline INTEGER,
    duration_min REAL,
    sets INTEGER,
    reps INTEGER,
    difficulty INTEGER,
    notes TEXT
);