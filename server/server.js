const express = require('express');
const bodyParser = require('body-parser');

const pool = require('./modules/pool.js');

const app = express();

const PORT = 5000;
const trollRouter = require('./routes/troll.router.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('server/public'));


app.use('/troll', trollRouter);

app.listen(PORT, () => {
  console.log(`server is up and running at http://localhost:${PORT}`)
})
