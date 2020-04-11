var Item = require("../models/itemModel");


exports.getAllItems = async (res, cb) => {
  try{
    var result = await Item.find();
    cb(null, result)
  }catch(err){
    console.log(err)
    throw err
  }
}

// exports.getItemById = async (res, cb) => {
//   try{
//     var result = await Item.findById(res.itemId);
//     cb(null, result)
//   }catch(err){
//     console.log(err)
//     throw err
//   }
// }

exports.getItemById = (res, cb) => {
  Item.findById(res.itemId, function(err, result){
    if (err) throw err;
    cb(err, result)
  })
}

exports.createItem = (res, cb) => {
  item = new Item({
    name: res.name,
    abbr: res.abbr
  });
  item.save(res, (err, result) => {
    if (err) throw err;
    cb(err, result)
  })
}

exports.deleteItem = (res, cb) => {
  Item.findByIdAndDelete(res.itemId, function(err, result){
    if (err) throw err;
    cb(err, result)
  })
}
