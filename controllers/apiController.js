var Shots = require('../models/shotModel');
var bodyParser = require('body-parser');

module.exports = function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.get('/api/shots/:pName', function(req, res){

    Shots.find({ playerName: req.params.pName },
    function(err, shots){
      if (err) throw err

      res.send(shots);
    });

  });

  app.get('/api/shot/:id', function(req, res){
    Shots.findById({_id: req.params.id}, function(err, shot){
      if (err) throw err;

      res.send(shot);
    });
  });

  app.post('/api/shot', function(req, res){

    if(req.body.id){
      Shots.findByIdAndUpdate(req.body.id, {
        playerName: req.body.playerName,
        result: req.body.result,
        xValue: req.body.xValue,
        yValue: req.body.yValue
      }, function(err, shot) {
        if(err) throw err;

        res.send('Success');
      });
    }

    else{

      var newShot = Shots({
        playerName: req.body.playerName,
        xValue: req.body.xValue,
        yValue: req.body.yValue,
        result: req.body.result
      });
      newShot.save(function(err){
        if (err) throw err;
        res.send('Success');
      });

    }
  });

  app.delete('/api/shot', function(req, res){
    Shots.findByIdAndRemove(req.body.id, function(err){
      if (err) throw err;
      res.send('success');
    });
  });

}
