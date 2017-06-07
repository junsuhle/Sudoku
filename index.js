const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
  console.log('Example app listening on port!' + PORT)
})

//"start": "npm-run-all -p watch-css start-js",

