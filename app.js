let age = prompt('¿Cuál es tu edad?');
// Convirtiendo edad a segundos
let ageInSeconds = age*365*24*60*60;
 console.log(ageInSeconds);
// Mostrando edad en la web
document.write('Tu edad es ' + age + ' y en segundos sería ' + ageInSeconds);