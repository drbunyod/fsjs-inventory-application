const pool = require('./pool');

const selectCategories = async () => {
    const { rows } = await pool.query('SELECT * FROM categories ORDER BY id');
    return rows;
};

const selectCategoryById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
    return rows[0];
};

const insertCategory = async (title) => {
    await pool.query('INSERT INTO categories (title) VALUES ($1)', [title]);
};

const updateCategory = async (id, title) => {
    await pool.query('UPDATE categories SET title = $2 WHERE id = $1', [id, title]);
};

const deleteCategory = async (id) => {
    await pool.query('DELETE FROM categories WHERE id = $1', [id]);
};

const selectItems = async () => {
    const { rows } = await pool.query('SELECT * FROM items ORDER BY id');
    return rows;
};

const selectItemById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    return rows[0];
};

const selectItemsByCategory = async (category_id) => {
    const { rows } = await pool.query('SELECT * FROM items WHERE category_id = $1', [category_id]);
    return rows;
};

const insertItem = async (title, description, price, quantity, unit, category_id) => {
    await pool.query(
        'INSERT INTO items (title, description, price, quantity, unit, category_id) VALUES ($1, $2, $3, $4, $5, $6)',
        [title, description, price, quantity, unit, category_id]
    );
};

const updateItem = async (id, title, description, price, quantity, unit, category_id) => {
    await pool.query(
        'UPDATE items SET title = $2, description = $3, price = $4, quantity = $5, unit = $6, category_id = $7 WHERE id = $1',
        [id, title, description, price, quantity, unit, category_id]
    );
};

const deleteItem = async (id) => {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
};

const countCategoryItems = async (category_id) => {
    const { rows } = await pool.query('SELECT COUNT(*) FROM items WHERE category_id = $1', [category_id]);
    return rows[0].count;
};

const selectItemsJoinCategories = async () => {
    const { rows } = await pool.query(
        'SELECT items.id, items.title, items.description, items.price, items.quantity, items.unit, categories.title AS category_title FROM items LEFT JOIN categories ON items.category_id = categories.id ORDER BY category_title, items.id'
    );
    return rows;
};

module.exports = {
  selectCategories,
  selectCategoryById,
  insertCategory,
  updateCategory,
  deleteCategory,
  selectItems,
  selectItemById,
  selectItemsByCategory,
  insertItem,
  updateItem,
  deleteItem,
  countCategoryItems,
  selectItemsJoinCategories
};