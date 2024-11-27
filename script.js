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


// //Exercice 3
// /*
//    * -------------------------------------------------------
//    * 1 - Afficher le type de chacune des variables dans la console
//    * -------------------------------------------------------
// */
// const firstname = "Michel";
// const lastname = "Polnareff";
// let age = 123;
// const isUserLoggedIn = false;
// const account = undefined;
// let account2;
// const myVar = null;
// const user = {
//     firstname: "Michel",
//     lastname: "Polnareff",
//     email: "mich-mich@pol.com"
// }
// const colors = ['red', 'blue', 'green'];
// const onSayHello = function sayHello() {
//     return 'Hello';
// }
// console.log("firstname type is : " +typeof firstname);
// console.log("lastname type is : " +typeof lastname);
// console.log("age type is : " +typeof age);
// console.log("isUserLoggedIn type is : " +typeof isUserLoggedIn);
// console.log("account type is : " +typeof account);
// console.log("account2 type is : " +typeof account2);
// console.log("myVar type is : " +typeof myVar);
// console.log("user type is : " +typeof user);
// console.log("colors type is : " +typeof colors);
// console.log("onSayHello type is : " +typeof onSayHello);


// Exercice4
/*
   * -------------------------------------------------------
   * 1 - Si la variable guessName est égale à "Sphinx", afficher "Vive l'Égypte".
   *  Sinon, afficher "De toute façon je ne comprends rien aux cartes"
   * -------------------------------------------------------
*/
// Voici une variable : ne pas toucher :) 
const guessName = "Sphinx";

if (guessName == "Sphinx") {
    console.log("Vive l'Égypte");
}
else {
    console.log("De toute façon je ne comprends rien aux cartes");  
}

/*
   * -------------------------------------------------------
   * 2 - Demander à l'utilisateur de saisir un mot de passe (voir la fonction Javascript “prompt”)
   *  Si ce mot de passe correspond à la variable comparedString, afficher "Bienvenue BG ! 🙌" dans la console
    Sinon: afficher "C'est NON 🦄".
   * -------------------------------------------------------
*/
// Voici une variable : ne pas toucher :) 
const comparedString = "secret"
let mdpWriteByUser = prompt("Saisissez un mot de passe");

if(mdpWriteByUser == comparedString) {
    console.log("Bienvenue BG ! 🙌");
}
else {
    console.log("C'est NON 🦄");
}

/*
   * -------------------------------------------------------
   * 3 - Écrire un programme qui demande à l'utilisateur d'entrer son âge (en utilisant “prompt”) et qui affiche ensuite un message en fonction de sa tranche d'âge :
    Si l'âge est inférieur à 3 : "Hello, Baby 🍼!"
    Si l'âge est inférieur à 18: "Hi! 👋"
    Si l'âge est supérieur à 100: "Greetings 🖖"
    Dans les autres cas: "Wow... 😲"
   * -------------------------------------------------------
*/
let ageOfUser = prompt("Saisissez votre age");
if(ageOfUser < 3) {
    console.log("Hello, Baby 🍼!"); 
}
else if(ageOfUser < 18) {
    console.log("Hi! 👋"); 
}
else if(ageOfUser > 100) {
    console.log("Greetings 🖖"); 
}
else {
    console.log("Wow... 😲"); 
}

/*
   * -------------------------------------------------------
   * 4. Écrire un programme qui demande à l'utilisateur son nom et son âge et qui vérifie si le nom est égal à "Bob" et si l'âge est égal à 30.
   *  Si les deux conditions sont vérifiées, afficher "Welcome", sinon "Go away".
   * -------------------------------------------------------
*/
let nameOfUser = prompt("Saissisez votre nom");
let ageOfUser2 = prompt("Saissisez votre age");

if(nameOfUser.toLowerCase() == "bob" && ageOfUser2 == 30) {
    console.log("Welcome");    
}
else {
    console.log("Go away");
    
}

/*
   * -------------------------------------------------------
   * 5. En Javascript, on peut récupérer la jour de la semaine en cours en utilisant new Date().getDay().
   *  Cette expression nous nous retourne un nombre entre 0 (dimanche) et 6 (samedi).
    → Utiliser une structure switch...case pour afficher dans la console le nom du jour de la semaine en fonction du nombre retourné. 
   * -------------------------------------------------------
*/
const toDay = new Date().getDay();

switch (toDay) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 0:
        console.log("Dimanche");
        break;
    default:
        break;
}


/*
   * -------------------------------------------------------
   * 6. Réécrire la condition en utilisant l'opérateur ternaire
   * -------------------------------------------------------
*/
// Voici un bout de code. Ne pas toucher !
const animal = {
    name: "Lucky",
    specie: "Cat",
    color: "Black"
}

if(animal.name === 'Lucky') {
    console.log("Voici un Pôtichat mignon");
} else {
    console.log("Argh ! Ce n'est pas mon chat...");
}

animal.name === 'Lucky' ?  console.log("Voici un Pôtichat mignon") : console.log("Argh ! Ce n'est pas mon chat...")


/**
   * -------------------------------------------------------
   * 7 - Pour chaque donnée, vérifier si elle est paire. Si oui, afficher sa valeur suivie de "est paire ✅". Sinon, afficher sa valeur suivie de "Impaire ❌"
   * -------------------------------------------------------
*/
// Voici un jeu de données : ne pas toucher :) 
const n1 =  1
const n2 =  13
const n3 =  20
const n4 =  41
const n5 =  70
const n6 =  100

if (n1 % 2 == 0) {
    console.log(n1 + ' est paire ✅');
} else {
    console.log(n1 + ' est impaire');
}
if (n2 % 2 == 0) {
    console.log(n2 + ' est paire ✅');
} else {
    console.log(n2 + ' est impaire');
}
if (n3 % 2 == 0) {
    console.log(n3 + ' est paire ✅');
} else {
    console.log(n3 + ' est impaire');
}
if (n4 % 2 == 0) {
    console.log(n4 + ' est paire ✅');
} else {
    console.log(n4 + ' est impaire');
}
if (n5 % 2 == 0) {
    console.log(n5 + ' est paire ✅');
} else {
    console.log(n5 + ' est impaire');
}
if (n6 % 2 == 0) {
    console.log(n6 + ' est paire ✅');
} else {
    console.log(n6 + ' est impaire');
}