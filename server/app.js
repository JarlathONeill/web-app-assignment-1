const express = require('express');
const app = express();

const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();
//const morgan = require('morgan');
//app.use(morgan('tiny'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended : false}));

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));

app.listen(process.env.PORT, () => console.log('app is running'));







/*
app.get('/', (req, res) => {
    res.status(200);
    res.render('index');
});

app.get('*', (req, res) => {
    res.status(404);
    res.send('<h1>Page not found...</h1>');
});

app.listen(PORT, (err) => {
    if (err)
        return console.log(err);
    console.log(`Express Web Server listening on http://localhost:${PORT}`);
});
*/


