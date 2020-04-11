// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    abbr: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', ItemSchema);

// Export Contact model
// var Item = module.exports = mongoose.model('item', itemSchema);
// module.exports.get = function (callback, limit) {
//     Item.find(callback).limit(limit);
// }

// var Item = mongoose.model('Item', itemSchema);
// module.exports = Item;
