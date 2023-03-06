CREATE TABLE IF NOT EXISTS admin (
    id SERIAL PRIMARY KEY,
    username VARCHAR(250) UNIQUE NOT NULL,
    email VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL
);
INSERT INTO
    admin (
       username,
       email,
       password
    )
Values
    ('username', 'email@example.com',`password`);

