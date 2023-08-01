-- @block
CREATE TABLE Users(
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(64) NOT NULL
);

-- @block
SELECT * FROM users;

-- @block
INSERT INTO users VALUES (
    "1f2beadc-2285-459a-97f1-cbfbc8688939",
    "testUsername",
    "testUser@email.com",
    "d74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1"
);

-- @block
CREATE TABLE Chracters(
    id VARCHAR(36) PRIMARY KEY,
    char_name VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    char_level INT NOT NULL,
    user_id VARCHAR(36),
    FOREIGN KEY(user_id) REFERENCES users(id)
);