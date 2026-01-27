const pool = require('./pool');

const selectCategories = async () => {
    const { rows } = await pool.query('SELECT * FROM categories');
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
    const { rows } = await pool.query('SELECT * FROM items');
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

const insertItem = async (title, description, price, quantity, unit, image_path, category_id) => {
    await pool.query(
        'INSERT INTO items (title, description, price, quantity, unit, image_path, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [title, description, price, quantity, unit, image_path, category_id]
    );
};

const updateItem = async (id, title, description, price, quantity, unit, image_path, category_id) => {
    await pool.query(
        'UPDATE items SET title = $2, description = $3, price = $4, quantity = $5, unit = $6, image_path = $7, category_id = $8 WHERE id = $1',
        [id, title, description, price, quantity, unit, image_path, category_id]
    );
};

const deleteItem = async (id) => {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
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
  deleteItem
};