const { User } = require("../models")

var userController = {
    register: function (req, res){
        
          var newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
          });
      
          User.createUser(newUser, function(err, user){
            console.log(err, user)
            if(err) return res.status(500).json({error: err});
            return res.send(user).end()
          });
         
    },
    login: function(req, res){
      res.json(req.user)
    },
    getCurrentUser: function(req, res){
        res.send(req.user);
    },
    logout: function(req, res){
        req.logout();
        res.send(null)
    }
}

module.exports = userController