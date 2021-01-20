const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/41027', { useNewUrlParser: true, useUnifiedTopology: true });
let { amenities_seed } = require('./data_seed.js');

let repoSchema = mongoose.Schema({
  name: String,
  id: Number,
  office_cap: Number,
  desks_cap: Number,
  membership_rate: Number,
  pass_rate: Number,
  room_rate: Number
});

let Repo = mongoose.model('Workspaces', repoSchema);

let retrieve = (filter) => {
  return Repo.find(filter, (err, docs) => err ? err : docs);
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

module.exports.seeder = seeder;
module.exports.retrieve = retrieve;