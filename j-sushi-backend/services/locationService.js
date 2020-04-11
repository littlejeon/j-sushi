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


db.questions.update({
  categoryname: upQstnObj.category,
  levels:
    { $elemMatch:
        { questions:
            {$elemMatch:{questionId: upQstnObj.questionId}}}}}, {$set: {levels.$.questions.$: upQstnObj} }, (err, doc)=>{
  if(err){
      console.log(err);
      return;
  }
  if(doc){
      console.log(doc);
      return;
  }
});
