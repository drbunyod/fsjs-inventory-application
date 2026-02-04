const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const categoriesRouter = require('./routes/categoriesRouter');

const app = express();
const port = process.env.PORT || 3000;
app.locals.appName = process.env.APP_NAME;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/categories', categoriesRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Started server on port ${port}`);
});