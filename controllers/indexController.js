const db = require('../db/queries');

const get = async (req, res) => {
    const items = await db.selectItemsJoinCategories();
    res.render('index', { title: 'Items', items });
};

const getCreateItem = async (req, res) => {
    const categories = await db.selectCategories();
    res.render('itemsCreate', { title: 'Create item', categories: categories });
};

const postCreateItem = async (req, res) => {
    const { title, description, price, quantity, unit, category } = req.body;
    await db.insertItem(title, description, price, quantity, unit, category);
    res.redirect('/');
};

const getEditItem = async (req, res) => {
    const { id } = req.params;
    const item = await db.selectItemById(id);
    const categories = await db.selectCategories();
    res.render('itemsEdit', { title: 'Edit item', item, categories });
};

const postEditItem = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, quantity, unit, category } = req.body;
    await db.updateItem(id, title, description, price, quantity, unit, category);
    res.redirect('/');
};

const getDeleteItem = async (req, res) => {
    const { id } = req.params;
    await db.deleteItem(id);
    res.redirect('/');
};

module.exports = {
    get,
    getCreateItem,
    postCreateItem,
    getEditItem,
    postEditItem,
    getDeleteItem
};