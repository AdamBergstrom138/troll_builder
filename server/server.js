const express = require('express');
const bodyParser = require('body-parser');

const pool = require('./modules/pool.js');

const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('server/public'));

// app.get()

// app.post()

// app.delete()

// app.put()

app.listen(PORT, () => {
  console.log(`server is up and running at http://localhost:${PORT}`)
})
