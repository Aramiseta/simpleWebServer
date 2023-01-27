const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  res.setHeader('X-I-Will-Never', 'let you down');
  res.render('index', { message: 'lols'});

});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
