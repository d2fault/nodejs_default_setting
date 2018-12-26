var express             = require('express');
var router              = express.Router();

var albumController     = require('./../controllers/albumController.js');
var songController      = require();

router.post('/invoke/createAlbum', albumController.createAlbum);
// router.get();
// router.put();

module.exports = router;