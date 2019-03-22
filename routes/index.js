var express = require('express');
var router = express.Router();
var zoo = require('../models/zooModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// This route will add an animal
router.get('/add/:id/:type/:description', (request, response) => {
    ZooWebData = {
        animal_id: request.params.id,
        animal_type: request.params.type,
        animal_description: request.params.description,
    };
    zoo.create(ZooWebData, (error, results) => {
        if (error) return console.log(error);
        else response.send(results);
    })
});

//This route will get an animal by id
router.get('/get/:id', (request, response) =>{
    zoo.find({animal_id: request.params.id}, (error, results) =>{
        if (error) return console.log(error);
        else response.send(results);
    })
});

//This route will update the description and the type of the animal
router.get('/update/:id', (request, response) =>{
    zoo.findOneAndUpdate({animal_type:"Tiger" ,animal_description: "Not that kind"}, {animal_type:"Dog" ,animal_description: "Very kind Dog"}, (error) =>{
        if (error) return console.log(error);
        else response.send("Animal updated");
    })
});

//This route will delete an animal
router.get('/del/:id', (request, response) =>{
    zoo.deleteOne({animal_id: request.params.id}, (error) => {
        if (error) return console.log(error);
    });
    response.send("Animal Deleted");
});

module.exports = router;
