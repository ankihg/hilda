'use strict';
module.exports = (mongoose, models) => {

  const treeSchema = new mongoose.Schema({
    id: String,
    imgSrc: String
  });

  models.Toy = mongoose.model('Toy', toySchema);
}
