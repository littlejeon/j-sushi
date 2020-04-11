const express = require('express');
var router = express.Router();
var ItemService = require("../services/itemService");


router.get('/items', function(req, res){
  ItemService.getAllItems(res, function(err, result){
    res.send(result)
  })
})

router.get('/items/:itemId', function(req, res){
  ItemService.getItemById(req.params, function(err, result){
    console.log(result)
    res.send(result)
  })
})

router.post('/items', function(req, res){
  console.log(req.body)
  ItemService.createItem(req.body, function(err, result){
    res.send(result)
  })
})

router.put('/items/:itemId', function(req, res){
  ItemService.deleteItem(req.params, function(err, result){
    console.log("deleted");
    res.send(result)
  })
})

module.exports = router;
