const dotenv =require('dotenv')
 
dotenv.config();
// Inclusion de Mongoose
var mongoose = require('mongoose');
 require('./src/models/profile')
// On se connecte à la base de données

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true } ,function(err) {
  if (err) { throw err; }
});
 
