const get = (req, res) => {
    res.render('index', { title: 'Home'});
};

module.exports = {
    get
};