var configValues = require('./config');

module.exports={

  getDbConnectionString: function(){
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds033126.mlab.com:33126/nodescout';
  }
  
}
