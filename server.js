 
// Inclusion de Mongoose
var mongoose = require('mongoose');
 require('./src/models/profile')
// On se connecte à la base de données

mongoose.connect('mongodb://localhost/blog', function(err) {
  if (err) { throw err; }
});
 
