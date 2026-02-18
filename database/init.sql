-- 1. Navigation Items
CREATE TABLE IF NOT EXISTS navigation_items (
    id SERIAL PRIMARY KEY,
    label VARCHAR(100) NOT NULL,
    path VARCHAR(255) NOT NULL,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Work Experience
CREATE TABLE IF NOT EXISTS work_experience (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(150) NOT NULL,
    position VARCHAR(150) NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    skills TEXT[],
    logo_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Projects
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    short_description VARCHAR(255),
    content TEXT,
    image_url VARCHAR(255),
    github_url VARCHAR(255),
    live_url VARCHAR(255),
    tags TEXT[],
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);