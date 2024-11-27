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


// // Exercice4
// /*
//    * -------------------------------------------------------
//    * 1 - Si la variable guessName est égale à "Sphinx", afficher "Vive l'Égypte".
//    *  Sinon, afficher "De toute façon je ne comprends rien aux cartes"
//    * -------------------------------------------------------
// */
// // Voici une variable : ne pas toucher :) 
// const guessName = "Sphinx";

// if (guessName == "Sphinx") {
//     console.log("Vive l'Égypte");
// }
// else {
//     console.log("De toute façon je ne comprends rien aux cartes");  
// }

// /*
//    * -------------------------------------------------------
//    * 2 - Demander à l'utilisateur de saisir un mot de passe (voir la fonction Javascript “prompt”)
//    *  Si ce mot de passe correspond à la variable comparedString, afficher "Bienvenue BG ! 🙌" dans la console
//     Sinon: afficher "C'est NON 🦄".
//    * -------------------------------------------------------
// */
// // Voici une variable : ne pas toucher :) 
// const comparedString = "secret"
// let mdpWriteByUser = prompt("Saisissez un mot de passe");

// if(mdpWriteByUser == comparedString) {
//     console.log("Bienvenue BG ! 🙌");
// }
// else {
//     console.log("C'est NON 🦄");
// }

// /*
//    * -------------------------------------------------------
//    * 3 - Écrire un programme qui demande à l'utilisateur d'entrer son âge (en utilisant “prompt”) et qui affiche ensuite un message en fonction de sa tranche d'âge :
//     Si l'âge est inférieur à 3 : "Hello, Baby 🍼!"
//     Si l'âge est inférieur à 18: "Hi! 👋"
//     Si l'âge est supérieur à 100: "Greetings 🖖"
//     Dans les autres cas: "Wow... 😲"
//    * -------------------------------------------------------
// */
// let ageOfUser = prompt("Saisissez votre age");
// if(ageOfUser < 3) {
//     console.log("Hello, Baby 🍼!"); 
// }
// else if(ageOfUser < 18) {
//     console.log("Hi! 👋"); 
// }
// else if(ageOfUser > 100) {
//     console.log("Greetings 🖖"); 
// }
// else {
//     console.log("Wow... 😲"); 
// }

// /*
//    * -------------------------------------------------------
//    * 4. Écrire un programme qui demande à l'utilisateur son nom et son âge et qui vérifie si le nom est égal à "Bob" et si l'âge est égal à 30.
//    *  Si les deux conditions sont vérifiées, afficher "Welcome", sinon "Go away".
//    * -------------------------------------------------------
// */
// let nameOfUser = prompt("Saissisez votre nom");
// let ageOfUser2 = prompt("Saissisez votre age");

// if(nameOfUser.toLowerCase() == "bob" && ageOfUser2 == 30) {
//     console.log("Welcome");    
// }
// else {
//     console.log("Go away");
    
// }

// /*
//    * -------------------------------------------------------
//    * 5. En Javascript, on peut récupérer la jour de la semaine en cours en utilisant new Date().getDay().
//    *  Cette expression nous nous retourne un nombre entre 0 (dimanche) et 6 (samedi).
//     → Utiliser une structure switch...case pour afficher dans la console le nom du jour de la semaine en fonction du nombre retourné. 
//    * -------------------------------------------------------
// */
// const toDay = new Date().getDay();

// switch (toDay) {
//     case 1:
//         console.log("Lundi");
//         break;
//     case 2:
//         console.log("Mardi");
//         break;
//     case 3:
//         console.log("Mercredi");
//         break;
//     case 4:
//         console.log("Jeudi");
//         break;
//     case 5:
//         console.log("Vendredi");
//         break;
//     case 6:
//         console.log("Samedi");
//         break;
//     case 0:
//         console.log("Dimanche");
//         break;
//     default:
//         break;
// }


// /*
//    * -------------------------------------------------------
//    * 6. Réécrire la condition en utilisant l'opérateur ternaire
//    * -------------------------------------------------------
// */
// // Voici un bout de code. Ne pas toucher !
// const animal = {
//     name: "Lucky",
//     specie: "Cat",
//     color: "Black"
// }

// if(animal.name === 'Lucky') {
//     console.log("Voici un Pôtichat mignon");
// } else {
//     console.log("Argh ! Ce n'est pas mon chat...");
// }

// animal.name === 'Lucky' ?  console.log("Voici un Pôtichat mignon") : console.log("Argh ! Ce n'est pas mon chat...")


// /**
//    * -------------------------------------------------------
//    * 7 - Pour chaque donnée, vérifier si elle est paire. Si oui, afficher sa valeur suivie de "est paire ✅". Sinon, afficher sa valeur suivie de "Impaire ❌"
//    * -------------------------------------------------------
// */
// // Voici un jeu de données : ne pas toucher :) 
// const n1 =  1
// const n2 =  13
// const n3 =  20
// const n4 =  41
// const n5 =  70
// const n6 =  100

// if (n1 % 2 == 0) {
//     console.log(n1 + ' est paire ✅');
// } else {
//     console.log(n1 + ' est impaire');
// }
// if (n2 % 2 == 0) {
//     console.log(n2 + ' est paire ✅');
// } else {
//     console.log(n2 + ' est impaire');
// }
// if (n3 % 2 == 0) {
//     console.log(n3 + ' est paire ✅');
// } else {
//     console.log(n3 + ' est impaire');
// }
// if (n4 % 2 == 0) {
//     console.log(n4 + ' est paire ✅');
// } else {
//     console.log(n4 + ' est impaire');
// }
// if (n5 % 2 == 0) {
//     console.log(n5 + ' est paire ✅');
// } else {
//     console.log(n5 + ' est impaire');
// }
// if (n6 % 2 == 0) {
//     console.log(n6 + ' est paire ✅');
// } else {
//     console.log(n6 + ' est impaire');
// }


// //Exercice5
// /*
//    * -------------------------------------------------------
//    * 1 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de ces 2 paramètres. Afficher le résultat dans la console.
//    * -------------------------------------------------------
// */
// function addKevin(a,b) {
//     let somme = a+b;
//     return somme;
// }
// console.log(addKevin(2,8));

// /*
//    * -------------------------------------------------------
//    * 2 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de :
//    *  → la raçine carrée du premier paramètres
//    *  → le second paramètre à la puissance 7
//    *  Afficher le résultat dans la console.
//    * -------------------------------------------------------
// */
// function calcKevin(a,b) {
//     let somme = Math.sqrt(a) + Math.pow(b,7);
//     return somme;
// }
// console.log(calcKevin(25,2));

// /*
//    * -------------------------------------------------------
//    * 3 - Créer une fonction qui vérifie si l’utilisateur est apte à apprendre du Javascript : 
//     avec prompt, demander successivement à l’utilisateur les deux langages de programmation à apprendre avant de démarrer le JS
//     → S’il répond successivement HTML puis CSS, alors la fonction retourne vrai ; sinon faux.
//     → Si l’exécution de la fonction retourne vrai, alors la console affiche “Bienvenue en JS jeune éphèbe”
//     → Si l’exécution de la fonction retourne faux, alors la console affiche “Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais”
//    * -------------------------------------------------------
// */
// let questionJave1 = prompt("Quel est le premier langage à apprendre avant le JS ?");
// let questionJave2 = prompt("Quel est l'autre langage à apprendre avant le JS ?");

// if(questionJave1.toLocaleLowerCase() == "html" && questionJave2.toLocaleLowerCase() == "css") {
//     console.log("Bienvenue en JS jeune éphèbe");
// }
// else {
//     console.log("Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais");
// }


// //Exercice6
// // Voici un jeu de données : interdiction d'y toucher :) 
// const characterNames = [
//     "63AIS",
//     "A'misandra",
//     "Amimari",
//     "Alika",
//     "54B2",
//     "A'merpact",
//     "Amazora",
//   ];
  
//   /*
//    * -------------------------------------------------------
//    * 1 - Afficher le nombre de personnages dans le tableau 
//    * -------------------------------------------------------
//    */
//   console.log(characterNames.length);
  
  
//   /*
//    * -------------------------------------------------------
//    * 2 - Afficher le nom du premier personnage du tableau
//    * -------------------------------------------------------
//    */
//   console.log(characterNames[0]);
  
  
//   /*
//    * -------------------------------------------------------
//    * 3 - Afficher le nom du dernier personnage (le 7eme)
//    * -------------------------------------------------------
//    */
//   console.log(characterNames[6]);
  
  
//   /*
//    * -------------------------------------------------------
//    * 4 - Afficher le nom du dernier personnage **SANS** 
//    * savoir qu'il est le 7eme
//    * -------------------------------------------------------
//    */
//   console.log(characterNames[characterNames.length-1]);
  
  
//   /*
//    * -------------------------------------------------------
//    * 5 - Afficher les noms de tous les personnages
//    * -------------------------------------------------------
//    */
//  for (let index = 0; index < characterNames.length; index++) {
//     console.log(characterNames[index]);
//  }
  
  
//   /*
//    * -------------------------------------------------------
//    * 6 - Afficher le nom de chaque personnage accompagné du 
//    * nombre de caractères qu'il contient. Ex: Alika (5)
//    * -------------------------------------------------------
//    */
//   for (let index = 0; index < characterNames.length; index++) {
//     console.log(characterNames[index] + " (" + index + ")");
//   }
  
  
//   /*
//    * -------------------------------------------------------
//    * 7 - Afficher le nom de chaque personnage en minuscules
//    * -------------------------------------------------------
//    */
//   for (let index = 0; index < characterNames.length; index++) {
//     console.log(characterNames[index].toLowerCase());
//   }
  
  
  
  
//   /*
//    * -------------------------------------------------------
//    * 8 - Afficher le nombre de personnages dont le nom 
//    * contient la lettre 'a' (minuscule ou majuscule)
//    * -------------------------------------------------------
//    */
//   for (let index = 0; index < characterNames.length; index++) {
//     if(characterNames[index].indexOf("a") > -1 || characterNames[index].indexOf("A") > -1) {
//         console.log(characterNames[index]);
//     }
//   }
  
  
  
//   /*
//    * -------------------------------------------------------
//    * 9 - Créer une fonction `search(needle)` qui renvoie 
//    * les personnages dont le nom contient les lettres 
//    * passées en paramètre.
//    * 
//    * Ex : search('Amim') doit renvoyer 'Amimari'
//    * ------------------------------------------------------- 
//    */
//   function search() {
//     let a = prompt("Que recherchez-vous ?");
//     for (let index = 0; index < characterNames.length; index++) {
//         if(characterNames[index].indexOf(a) > -1) {
//             console.log(characterNames[index]);
//         }
//       }
//   }
//   search();

// //Exercice6 Astro
// // Signes astrologiques fournis sous forme de chaîne de caractères
// const aries = `♈`;
// const taurus = `♉`;
// const gemini = `♊`;
// const cancer = `♋`;
// const leo = `♌`;
// const virgo = `♍`;
// const libra = `♎`;
// const scorpio = `♏`;
// const sagittarius = `♐`;
// const capricorn = `♑`;
// const aquarius = `♒`;
// const pisces = `♓︎`;

// // Ces signes astrologiques peuvent être organisés en éléments de la terre : Terre, Eau, Air, Feu
// const fireSigns = [aries, leo];
// const earthSigns = [taurus, virgo, capricorn, sagittarius];
// const airSigns = [gemini, libra, aquarius];
// const waterSigns = [cancer, scorpio, pisces];



// // Étape 1 : Sagittarius est manquant dans les signes du feu. L'ajouter à la fin du tableau et vérifier le résultat.
// // écrire le code ici
// fireSigns.push(sagittarius);

// // test (à ne pas toucher) : 
// console.log(fireSigns[fireSigns.length - 1] === "♐" ? "Good Answer ✅" : "Wrong Answer ❌");


// // Étape 2 : Sagittarius ne devrait plus faire partie des éléments de la terre. Le retirer et vérifier le résultat.
// // écrire le code ici
// earthSigns.pop();

// // test (à ne pas toucher)
// console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");


// // Étape 3 : initialiser un tableau et le stocker dans une variable nommée "zodiacSigns"
// // écrire le code ici
// let zodiacSigns = [];


// // Étape 4 : fusionner Feu, Terre, Eau et Air dans zodiacSigns (dans cet ordre)
// // écrire le code ici
// zodiacSigns = fireSigns.concat(earthSigns);
// zodiacSigns = zodiacSigns.concat(waterSigns);
// zodiacSigns = zodiacSigns.concat(airSigns);

// // test (à ne pas toucher)
// console.log((zodiacSigns !== null && zodiacSigns.toString() === "♈,♌,♐,♉,♍,♑,♋,♏,♓︎,♊,♎,♒") ? "Good Answer ✅" : "Wrong Answer ❌");

// // Étape 5 : compléter la fonction ci-dessous pour afficher le nombre d'éléments dans le tableau zodiacSigns
// // écrire le code ici
// console.log(zodiacSigns.length);


//Exercice7
// Voici un objet qui représente un Chat : interdit d'y toucher :) 
const billyTheCat = {
    name: "billy",
    color: "black",
    favouriteFoods: ["fish", "chicken"],
    isHungry: true,
    meow: function () {
        return "Meeeeeeeow";
    }
}

/*
 * -------------------------------------------------------
 * 1 - Afficher les valeurs de chacunes des clés
 * -------------------------------------------------------
 */
console.log("name : " + billyTheCat.name);
console.log("color : " + billyTheCat.color);
console.log("favouriteFoods : " + billyTheCat.favouriteFoods);
console.log("isHungry : " + billyTheCat.isHungry);
console.log("meow : " + billyTheCat.meow);



/**
 * -------------------------------------------------------
 * 2 - Grâce à prompt(), afficher la valeur de la clé "color"
 * -------------------------------------------------------
 */
let demand = prompt("Que voulez-vous ?");
console.log(billyTheCat[demand]);



// Voici un tableau d'objets : interdit d'y toucher  :) 
const animals = [
    { name: "kitty", species: "cat", noise: "meow" },
    { name: "skaly", species: "squale", noise: "frrrrrr" },
    { name: "wormy", species: "worm", noise: "????" },
    { name: "Pikatchue", species: "electrick mouse", noise: "pikaaaaa" }
];

/*
 * -------------------------------------------------------
 * 3 - Afficher le dernier élément
 * -------------------------------------------------------
 */
console.log(animals[3]);



/**
 * -------------------------------------------------------
 * 3 - Afficher le dernier élément sans savoir que c'est le 4ème
 * -------------------------------------------------------
 */
console.log(animals[animals.length-1]);


/**
 * -------------------------------------------------------
 * 4 - Supprimer le nom du 2ème animal et l'espèce du 3ème
 * -------------------------------------------------------
 */
delete animals[1].name;
delete animals[2].species;



/**
 * -------------------------------------------------------
 * 5 - Remplacer le nom du premier animal par celui du 4ème (2 façons de faire)
 * -------------------------------------------------------
 */
animals[0].name = animals[3].name;
console.log(animals);



// Voici un objet qui contient (entre autres) une fonction : interdit d'y toucher :) 
const apple = {
    isEaten: false,
    eat: function () {
        return this.isEaten ? "le fruit a déjà été mangé" : this.isEaten = true;
    }
}

/**
 * -------------------------------------------------------
 * 6 - En manipulant l'objet, afficher "le fruit a déjà été mangé"
 * -------------------------------------------------------
 */
apple.eat();
if (apple.isEaten) {
  console.log(apple.eat());
}