// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var contactController = require('./controllers/contactController');
var itemController = require('./controllers/itemController');
var locationController = require('./controllers/locationController');
// Contact routes
// router.route('/contacts')
//     .get(contactController.index)
//     .post(contactController.new);
// router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);
// router.route('/items')
//     .get(itemController.index)
//     .post(itemController.new);
// router.route('/items/:item_id')
//     .get(itemController.view)
//     .patch(itemController.update)
//     .put(itemController.update)
//     .delete(itemController.delete);
// router.route('/locations')
//     .get(locationController.index)
//     .post(locationController.new);
// router.route('/locations/:location_id')
//     .get(locationController.view)
//     .patch(locationController.update)
//     .put(locationController.update)
//     .delete(locationController.delete);
// router.route('/locations/createLocationItem/:location_id')
//     .put(locationController.createLocationItem);
// Export API routes
module.exports = router;
