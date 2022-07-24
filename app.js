
const express = require('express');
const app = express();

const dotenv = require('dotenv')
dotenv.config()

const port = process.env.APP_PORT;
const router = require('./router/categories');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.use(express.json());
app.use(router);
app.use(express.static('images'))
app.use('/', express.static('assets'))

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});