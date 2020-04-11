var Contact = require("../models/contactModel");


exports.getAllContacts = async (res, cb) => {
  try{
    var result = await Contact.find();
    cb(null, result)
  }catch(err){
    console.log(err)
    throw err
  }
}

exports.createContact = async (res, cb) => {
  try{
    contact = await Contact({
      name: res.name,
      email: res.email
    });
    contact.save(res, (err, result) => {
      if(err) throw err;
      cb(err, result);
    })
  }catch(err){
    console.log(err)
    throw err
  }
}
