/**
* Exercice sur les chaines de caractères.
* Trouvez la façon de faire la plus optimal.
* Il peut y avoir plusieur façon de faire.
*/
var tailleString = function (texte) {
  var result = texte.length;
  return result;
}
var remplaceECar = function (texte) {
  var result = texte.replace('e', ' ');
  return result;
}
var concatString = function (texte1, texte2) {
  var result = texte1.concat(texte2);
  return result;
}
var afficherCar5 = function (texte) {
  var result = texte.charAt(4);
  return result;
}
var afficher9Car = function (texte) {
  var result = texte.slice(0, 9);
  return result;
}
var majusculeString = function (texte) {
  var result = texte.toUpperCase();
  return result;
}
var minusculeString = function (texte) {
  var result = texte.toLowerCase();
  return result;
}
var SupprEspaceString = function (texte) {
  var result = texte.trim();
  return result;
}
var IsString = function (texte) {
  var result = typeof(texte) === 'string';
  return result;
}
var AfficherExtensionString = function (texte) {
  var result = texte.substring(texte.lastIndexOf("j"));
  return result;
}
var NombreEspaceString = function (texte) {
  var result = texte.split(' ').length - 1;
  return result;
}
var InverseString = function (texte) {
  var result = texte.split('').reverse().join('');
  return result;
}

/**
* Exercices sur les nombres et les caluls mathématiques
*/
var calculPuissance = function (x, y) {
  var result = Math.pow(x, y);
  return result;
}
var valeurAbsolue = function (nombre) {
  var result = Math.abs(nombre);
  return result;
}
var valeurAbsolueArray = function (array) {
  var result = array.map(Math.abs);
  return result;
}
var sufaceCercle = function (rayon) {
  var result = Math.round(Math.PI * (rayon * rayon));
  return result;
}
var hypothenuse = function (ab, ac) {
  var result = Math.hypot(ab, ac);
  return result;
}
var calculIMC = function (poids, taille) {
  var result = Math.round((poids / (taille * taille)) * 100) / 100;
  return result;
}
