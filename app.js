const express = require('express');

// Constants
const PORT = process.env.PORT ? process.env.PORT : 3000;
const app_ver = process.env.VER ? process.env.VER : '0.0.1';

// App
const app = express();
app.get('/', function (req, res) {
    res.send('Hello world ver.' + app_ver + '\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);