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

exports.createOrUpdateLocationItem = async (res, cb) => {
    var item = await Item.findById(res.itemId)

    Location.findOneAndUpdate({_id: res.locationId}, {
      $elemMatch: {
        locationItems: {
          item: item
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

exports.updateLocation = async (locationId, res, cb) => {
  Location.findOneAndUpdate({_id: locationId}, {
    $set: {
      name:res.name,
      abbr:res.abbr
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

exports.createOrUpdateLocationItemQty = async (locationItemId, res, cb) => {
  Location.findOneAndUpdate({'locationItems._id': locationItemId}, {
    $set: {
      'locationItems.$.quantity':res.quantity
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

exports.deleteLocation = (res, cb) => {
  Location.findByIdAndDelete(res.locationId, function(err, result){
    if (err) throw err;
    cb(err, result._id)
  })
}
