// contactModel.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Setup schema
var locationSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    locationItems: {
      type: [
        {
          item: {
            type: Schema.Types.ObjectId,
            ref: "Item"
          },
          price: {
            type: String,
            required: true
          }
        }
      ]
    },
    abbr: String,
    create_date: {
      type: Date,
      default: Date.now
    }
});
// Export Contact model
var Location = module.exports = mongoose.model('location', locationSchema);
module.exports.get = function (callback, limit) {
    Location.find(callback).limit(limit);
}

// var Location = mongoose.model('Location', locationSchema);
// module.exports = Location;
