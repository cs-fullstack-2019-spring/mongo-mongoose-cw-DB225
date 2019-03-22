var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//model for our Zoo Web App
var  ZooWebSchema = new Schema ({
    animal_id: String,
    animal_type: String,
    animal_description: String,
});

module.exports = mongoose.model('zoo', ZooWebSchema);