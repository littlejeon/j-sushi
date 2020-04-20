var Location = require("../models/locationModel");
var Item = require("../models/itemModel");


exports.getAllLocations = async (res, cb) => {
  try{
    var result = await Location.find().populate('locationItems.item');
    cb(null, result)
  }catch(err){
    console.log(err)
    throw err
  }
}

exports.createLocation = (res, cb) => {
  location = new Location({
    name: res.name,
    abbr: res.abbr
  });
  location.save(res, (err, result) => {
    if (err) throw err;
    cb(err, result)
  })
}

exports.addItemToLocation = async (res, cb) => {
  var item = await Item.findById(res.itemId)

  Location.findOneAndUpdate({_id: res.locationId}, {
    $push: {
      locationItems: {
        item: item,
        price: res.price,
        quantity: res.quantity
      }
    }
  },
  {new: true})
  .populate('locationItems.item')
  .exec(function (error, result) {
      if (error) {
          cb(error, null)
      } else {
          cb(null, result)
      }
  });

}

exports.createOrUpdateLocationItemQty = async (res, cb) => {
  Location.findOneAndUpdate({locationItems: res.locationItemId}, {
    $set: {
      quantity:res.quantity
    }
  },
  {new: true})
  .populate('locationItems.item')
  .exec(function (error, result) {
      if (error) {
          cb(error, null)
      } else {
          cb(null, result)
      }
  });
}

exports.updateLocationItemPrice = async (locationItemId, res, cb) => {
  Location.findOneAndUpdate({'locationItems._id': locationItemId}, {
    $set: {
      'price':res.price
    }
  },
  {new: true})
  .populate('locationItems.item')
  .exec(function (error, result) {
      if (error) {
          cb(error, null)
      } else {
          cb(null, result)
      }
  });
}
