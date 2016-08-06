'use strict';
module.exports = (mongoose, models) => {

  const treeSchema = new mongoose.Schema({
    cityID: String,
    imgSrc: String
  });

  models.Tree = mongoose.model('Tree', treeSchema);
}
