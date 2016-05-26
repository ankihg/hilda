const express = require('express');
const app = express();

app.use(require('body-parser').json());

const apiRouter = express.Router();
require('./routes')(apiRouter, require('./models'));
app.use(apiRouter);

const PORT = require('./config').PORT;
app.listen(PORT, () => console.log('server speaking on port '+PORT));
