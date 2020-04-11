// contactModel.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Setup schema
var LocationSchema = mongoose.Schema({
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
            type: String
          },
          quantity: {
            type: String
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

module.exports = mongoose.model('Location', LocationSchema);
