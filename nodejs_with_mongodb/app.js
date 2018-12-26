// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('./database/connection');

// [SET ROUTING FILES]
var albumRouter = require('./routes/album');
var songRouter = require('./routes/song');

// [DB CONNECTION: /database/connection.js]
mongoose.connect();

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
app.use('/album', albumRouter);

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});

module.exports = app;