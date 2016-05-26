'use strict';
const mongoose = require('mongoose');
mongoose.connect(require('../config').MLAB_URI);

const models = module.exports =  {};

require('fs').readdirSync('./models').forEach((file) => {
  if (file !== 'index.js') require(__dirname+'/'+file)(mongoose, models);
});
