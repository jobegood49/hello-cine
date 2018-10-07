const User = require('../models/User');


class userController {
   static validateUser(req, res, cb){
       const body = req.body;
       User.find({user : body.user, password : body.password}, function (err, data) {
        if(err){
          cb(err, null);
        }
        else if(data.length > 0){
          cb(null, data);
        }
        else {
          cb(new Error('username password doesnt match'), data);
        }
      });
   }
}

module.exports = userController;