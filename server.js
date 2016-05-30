const express = require('express');
const app = express();

app.use(require('body-parser').json());
app.use(require('morgan')());

// server
const apiRouter = express.Router();
require('./routes')(apiRouter, require('./models'));
app.use(apiRouter);

// client
const clientRouter = express.Router();
clientRouter.use(express.static('./build'));
app.use(clientRouter);


//listen
const PORT = require('./config').PORT;
app.listen(PORT, () => console.log('server speaking on port '+PORT));
