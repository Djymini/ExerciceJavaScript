// //Exercice1
// /*
//    * -------------------------------------------------------
//    * 1 - Afficher dans la console "J'aime peindre" sur une première ligne puis "J'aimerais devenir peintre" sur une autre ligne
//    * -------------------------------------------------------
// */
// console.log("J'aime peindre");
// console.log("J'aimerais devenir peintre");

// /*
//    * -------------------------------------------------------
//    * 2 - Afficher la même chose mais sur une seule ligne
//    * -------------------------------------------------------
// */
// console.log("J'aime peindre " + "J'aimerais devenir peintre");

// /**
//    * -------------------------------------------------------
//    * 3 - Ajouter ensuite un warning dans la console "Mais cela demande beaucoup d'efforts"
//    * -------------------------------------------------------
// */
// console.warn("Mais cela demande beaucoup d'efforts");

// /*
//    * -------------------------------------------------------
//    * 4 - Enfin, ajouter une erreur "Je n'ai pas assez de temps car j'ai déjà un métier, 3 passions, une femme et 4 enfants et je dois dormir la nuit"
//    * -------------------------------------------------------
// */
// console.error("Je n'ai pas assez de temps car j'ai déjà un métier, 3 passions, une femme et 4 enfants et je dois dormir la nuit");

// /*
//   * -------------------------------------------------------
//   * 5 - Afficher le nombre 42 grâce à 3 suites d'opérations différentes.
//   * Uniquement grâce à jeu de données ci-dessus. 
//   * Toutes les données doivent être utilisées une fois et ne peuvent être utilisées qu'une seule fois.
//   * 
//   * Ex : 
//   * const set1 = (number1 - number2) * number3
//   * const set2 = (number4 + number5) / number6
//   * const set2 = (number7 - number9) * number9 + number 10
//   * -------------------------------------------------------
// */
// // Voici un jeu de 10 données. Ne pas y toucher :) 
// const number1 = 99;
// const number2 = 50;
// const number3 = 1;
// const number4 = 7;
// const number5 = 3;
// const number6 = 10;
// const number7 = 8;
// const number8 = 2;
// const number9 = 1;
// const number10 = 4;

// // const set1 = 50 - 8;
// const set1 = (number1/number5)+number7+number3;
// const set2 = number2-(number4 +number9);
// const set3 = number10*number6 + number8;

// console.log(
//    set1,
//    set2,
//    set3
// );

// /*
//    * -------------------------------------------------------
//    * 6 - Afficher le reste de la division de 6 par 2, de 14 par 4 et de 99 par 3
//    * -------------------------------------------------------
// */
// console.log(
//     6%2, 
//     14%4,
//     99%3
// );


// //Exercice2
// /*
//    * -------------------------------------------------------
//    * 1 - Renommer les variables correctement
//    * -------------------------------------------------------
// */

// let firstName = "Bruno";

// let description = "Salut je m'appelle Bruno et voici ma description";

// const job = "Analyste financier au Yémen";

// let age = 23;

// let livingCity = "Bordeaux";

// let numberList = "Une liste de nombres";

// const bondName = "le prénom du plus grand agent secret de tous les temps";


//Exercice 3
/*
   * -------------------------------------------------------
   * 1 - Afficher le type de chacune des variables dans la console
   * -------------------------------------------------------
*/
const firstname = "Michel";
const lastname = "Polnareff";
let age = 123;
const isUserLoggedIn = false;
const account = undefined;
let account2;
const myVar = null;
const user = {
    firstname: "Michel",
    lastname: "Polnareff",
    email: "mich-mich@pol.com"
}
const colors = ['red', 'blue', 'green'];
const onSayHello = function sayHello() {
    return 'Hello';
}
console.log("firstname type is : " +typeof firstname);
console.log("lastname type is : " +typeof lastname);
console.log("age type is : " +typeof age);
console.log("isUserLoggedIn type is : " +typeof isUserLoggedIn);
console.log("account type is : " +typeof account);
console.log("account2 type is : " +typeof account2);
console.log("myVar type is : " +typeof myVar);
console.log("user type is : " +typeof user);
console.log("colors type is : " +typeof colors);
console.log("onSayHello type is : " +typeof onSayHello);
