const express = require('express');
const router = express.Router();
const userController  = require('../controller/UserController');
/* GET home page */


router.route('/')

.get((req, res, next) => {
    res.render('login');
})
.post((req, res, next) => {
    userController.validateUser(req, res, function(err, data){
        if(err){
                res.status(401).json({'message' : 'invalid user/password'});
         } else {
              res.status(200).json({'success' : true});
        }
    })
})
.put((req, res, next) => {
    let { body } = req;
})
.delete((req, res, next) => {
    let { body } = req;
});



module.exports = router;