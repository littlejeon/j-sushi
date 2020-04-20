const express = require('express');
var router = express.Router();
var LocationService = require("../services/locationService");


router.get('/locations', function(req, res){
  LocationService.getAllLocations(res, function(err, result){
    res.send(result)
  })
})

router.post('/locations', function(req, res){
  LocationService.createLocation(req.body, function(err, result){
    res.send(result)
  })
})

router.put('/locations/item', function(req, res){
  console.log("Hello")
  LocationService.addItemToLocation(req.body, function(err, result){
    console.log(req.body)
    res.send(result)
  })
})

router.put('/locations/:locationItemId', function(req, res){
  LocationService.createOrUpdateLocationItemQty(req.params.locationItemId, req.body, function(err, result){
    res.send(result)
  })
})


module.exports = router;
