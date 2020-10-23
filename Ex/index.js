var hbs = require('hbs');
const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, '../dianamic/views');
// app.use(express.static(staticPath));

app.set('view engine', 'hbs');
app.set('views',staticPath)
hbs.registerPartials(path.join(__dirname, '../dianamic/Partials'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/services', (req, res) => {
    res.render('services',{
        name: 'Prinsh'
    });
});
app.get('/client', (req, res) => {
    res.render('client');
});
app.get('*',(req, res) =>{
    res.render('404');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});