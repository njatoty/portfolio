require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes/route');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);
app.use("*", (req, res) => {
  res.render('404', {login: true});
});

const server = require("http").createServer(app);
server.listen(PORT, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});