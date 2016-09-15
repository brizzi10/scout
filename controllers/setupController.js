var Shots = require('../models/shotModel');

module.exports = function(app){

  app.get('/api/setupShots', function(req, res){

    var starterShots = [
      {
        playerName: 'Ben',
        xValue: '200',
        yValue: '200',
        result: true
      },
      {
        playerName: 'Ben',
        xValue: '300',
        yValue: '300',
        result: true
      },
      {
        playerName: 'Jerrelle',
        xValue: '400',
        yValue: '400',
        result: false
      }
    ];
    Shots.create(starterShots, function(err, results){
      res.send(results);
    });
  });

}
