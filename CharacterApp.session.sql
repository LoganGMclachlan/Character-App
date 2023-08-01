-- @block
CREATE TABLE Users(
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(64) NOT NULL
);

-- @block
CREATE TABLE Chracters(
    id VARCHAR(36) PRIMARY KEY,
    char_name VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    char_level INT NOT NULL,
    class VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    user_id VARCHAR(36),
    FOREIGN KEY(user_id) REFERENCES users(id)
);