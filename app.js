const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();



require('dotenv').config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

const routes = require('./server/router/user');
app.use('/', routes);

const port = process.env.PORT || 5000; // Port 5000 or environment port locally if not used already

app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})