const express = require('express');

// Constants
const PORT = process.env.PORT ? process.env.PORT : 3000;
const app_ver = process.env.VER ? process.env.VER : '0.0.1';
const app_name = process.env.APP_NAME ? process.env.APP_NAME : 'myapp';

// App
const app = express();
app.get('/', function (req, res) {
    res.send('Hello world (' + app_name + ') ver.' + app_ver + '\n');
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);