const mongoose = require ('mongoose');
require('dotenv').config()
mongoose.connect(`mongodb://localhost/${process.env.DB_PORT}}`, { useNewUrlParser: true, useUnifiedTopology: true });
const { amenities_seed } = require('./data_seed.js');

const amenitySchema = mongoose.Schema({
  name: String,
  description: String,
  img: String
})

let repoSchema = mongoose.Schema({
  id: Number,
  amenities: [amenitySchema]
});

let Repo = mongoose.model('Amenities', repoSchema);

let retrieve = (filter) => {
  return Repo.find(filter, (err, docs) => err ? err : docs);
}

let remove = (filter) => {
  return Repo.deleteMany(filter, (err) => err);
}

let seeder = () => {
  let repos = amenities_seed();
  for (let item of repos) {
    try {
      const repo = new Repo(item);
      repo.save();
    }
    catch (err) {
      console.log("err: ", err);
    }
  }
}

let close = () => {
  mongoose.connection.close();
}

let initialize =  () => {
  remove({}).then(() => seeder());
}

module.exports.initialize = initialize;
module.exports.close = close;
module.exports.retrieve = retrieve;