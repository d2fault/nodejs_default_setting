// [LOAD PACKAGES]
var mongoose    = require('mongoose');

function connect() {
    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function(){
        // CONNECTED TO MONGODB SERVER
        console.log("Connected to mongod server");
    });
    
    // mongodb와 connect
    mongoose.connect('mongodb://localhost/default_setting');
}

module.exports = { mongoose, connect };