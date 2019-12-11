const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  pseudo : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
  contenu : String,
  date : { type : Date, default : Date.now }
});
 
// Création du Model pour les commentaires
var userModel = mongoose.model('commentaires', userSchema);
 
// On crée une instance du Model
var monCommentaire = new userModel({ pseudo : 'Sissi' });
monCommentaire.contenut = 'Salut je suis connecté à la bdd !';
 
// On le sauvegarde dans MongoDB !
monCommentaire.save(function (err) {
  if (err) { throw err; }
  console.log('Commentaire ajouté avec succès !');
  // On se déconnecte de MongoDB maintenant
  mongoose.connection.close();
});

module.exports = userModel