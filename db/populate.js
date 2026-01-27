const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(12,2) NOT NULL DEFAULT 0.00,
    quantity INTEGER NOT NULL DEFAULT 0,
    unit VARCHAR(3) NOT NULL,
    image_path TEXT,
    category_id BIGINT NOT NULL REFERENCES categories(id)
);

INSERT INTO categories (title)
VALUES
    ('Fruits'),
    ('Vegetables');

INSERT INTO items (title, description, price, quantity, unit, category_id)
VALUES
    ('Apple', 'Fresh green apples produced locally.', 15000.00, 100, 'kg', 1),
    ('Pineapple', 'Tropical pineapples imported from China.', 19000.00, 120, 'pcs', 1),
    ('Tomato', 'Juicy tomatoes for salads and meals.', 31000.00, 80, 'kg', 2);
`;

async function main() {
    console.log('Seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URI}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME}`
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('Seeding completed.');
}

main();