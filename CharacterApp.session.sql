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
SELECT * FROM characters;

-- @block
CREATE TABLE Actions(
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    bonus_or_dc INT NOT NULL,
    action_range VARCHAR(255) NOT NULL,
    damage INT NOT NULL,
    notes VARCHAR(255) NOT NULL,
    char_id VARCHAR(36) NOT NULL,
    FOREIGN KEY(char_id) REFERENCES Characters(id)
)

-- @block
CREATE TABLE FEATURES(
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    featurte_description TEXT NOT NULL,
    char_id VARCHAR(36) NOT NULL,
    FOREIGN KEY(char_id) REFERENCES Characters(id)
)

-- @block
CREATE TABLE Characters(
    id VARCHAR(36) PRIMARY KEY,
    char_name VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    char_level INT NOT NULL,
    background VARCHAR(255) NOT NULL,

    strength INT NOT NULL,
    dexterity INT NOT NULL,
    constitution INT NOT NULL,
    inteligence INT NOT NULL,
    wisdom INT NOT NULL,
    charisma INT NOT NULL,

    acrobatics INT NOT NULL,
    animal_handling INT NOT NULL,
    arcana INT NOT NULL,
    athletics INT NOT NULL,
    deception INT NOT NULL,
    history INT NOT NULL,
    insight INT NOT NULL,
    intimidation INT NOT NULL,
    investigation INT NOT NULL,
    medicine INT NOT NULL,
    nature INT NOT NULL,
    perception INT NOT NULL,
    performance INT NOT NULL,
    persuation INT NOT NULL,
    religion INT NOT NULL,
    sleight_of_hand INT NOT NULL,
    stealth INT NOT NULL,
    survival INT NOT NULL,

    max_hp INT NOT NULL,
    current_hp INT NOT NULL,
    temp_hp INT NOT NULL,
    hit_dice_type VARCHAR(255) NOT NULL,
    hit_dice_count INT NOT NULL,

    proficiency_bonus INT NOT NULL,
    ac INT NOT NULL,
    speed INT NOT NULL,
    initiative INT NOT NULL,

    deathsave_success INT NOT NULL,
    deathsave_fail INT NOT NULL,

    invantory TEXT NOT NULL,
    proficiencies VARCHAR(255) NOT NULL,
    
    user_id VARCHAR(36) NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);