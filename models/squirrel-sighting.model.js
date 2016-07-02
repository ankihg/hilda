'use strict';
module.exports = (mongoose, models) => {

  models.SquirrelSighting = mongoose.model(
    'SquirrelSighting',
     new mongoose.Schema({
        reporter: String,
        loc: {
          type: [ Number ],
          index: '2d'
        },
        date: {
          type: { Date },
          default: Date.now
        }
      })
    );

}
