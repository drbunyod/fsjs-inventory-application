const db = require('../db/queries');

const get = async (req, res) => {
    const categories = await db.selectCategories();
    const { error } = req.query;
    res.render('categories', { title: 'Categories', categories, error: error || null });
};

const getCreateCategory = (req, res) => {
    res.render('categoriesCreate', { title: 'Create category' });
};

const postCreateCategory = async (req, res) => {
    const { title } = req.body;
    await db.insertCategory(title);
    res.redirect('/categories');
};

const getEditCategory = async (req, res) => {
    const { id } = req.params;
    const category = await db.selectCategoryById(id);
    res.render('categoriesEdit', { title: 'Edit category', category });
};

const postEditCategory = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    await db.updateCategory(id, title);
    res.redirect('/categories');
};

const getDeleteCategory = async (req, res) => {
    const { id } = req.params;
    const count = await db.countCategoryItems(id);
    if (count > 0) {
        res.redirect('/categories?error=delete', )
    } else {
        await db.deleteCategory(id);
        res.redirect('/categories');
    }
};

module.exports = {
    get,
    getCreateCategory,
    postCreateCategory,
    getEditCategory,
    postEditCategory,
    getDeleteCategory
};