var express = require('express');
var app = express();
var Db = ('./models/user');
var db = require('./models');
var User = Db.User;

app.listen(3000, function() {
  db.sequelize.sync();
});
app.post('/users', function (req, res) {
  User.create({ 
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    bio: req.body.bio,
    email: req.body.email,
  })
    .then(function (user) {
      res.json(user);
    });
});

