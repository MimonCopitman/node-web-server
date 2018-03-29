const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send({
    name: 'Mimon Copitman',
    likes: [
      'Node.Js',
      'laravel',
      'Angular'
    ]
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {content: 'this is from server js file'});
})

app.listen(3000, () => {
  console.log('Server is running');
});