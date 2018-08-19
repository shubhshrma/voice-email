
var express = require('express');
var path = require('path');

//Initialize app
var app = express();

app.use(express.static(path.join('/scripts', __dirname, '/node_modules/')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
	res.render('index.html');
})




app.listen(3000, () => console.log('Server started on port 3000'));
