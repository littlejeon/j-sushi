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
  LocationService.addItemToLocation(req.body, function(err, result){
    res.send(result)
  })
})

router.put('/locations/locationItem/:locationItemId', function(req, res){
  LocationService.createOrUpdateLocationItemQty(req.params.locationItemId, req.body, function(err, result){
    res.send(result)
  })
})

router.put('/locations/:locationId', function(req, res){
  LocationService.updateLocation(req.params.locationId, req.body, function(err, result){
    res.send(result)
  })
})

router.delete('/locations/:locationId', function(req, res){
  LocationService.deleteLocation(req.params, function(err, result){
    res.send(result)
  })
})


module.exports = router;
