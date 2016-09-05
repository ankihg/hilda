'use strict';
module.exports = (mongoose, models) => {

  const toySchema = new mongoose.Schema({
    name: String,
    bio: String,
    iconSrc: String,
    imgSrc: String
  });

  models.Toy = mongoose.model('Toy', toySchema);
}
