//Boucle imbriquée

// const bobsFollowers = ['Chadrack', 'Joyce', 'Christy', 'Barckley'];

// const tinasFollowers = ['Danie', 'Joyce', 'Christy'];

// const mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       console.log(mutualFollowers.push( tinasFollowers[i]));
//     }
//   }
// }
// console.log(mutualFollowers);

//Addition de deux nombres

// function additionDeDeuxNombres (premierNombre, secondNombre) {
//     return premierNombre + secondNombre;
// }

// console.log(additionDeDeuxNombres(5, 6));
// console.log(additionDeDeuxNombres(40, 60));

//Compteur dans une boucle

// for (i = 0; i <= 20; i++) {
//     console.log(i);
// }


//Opérateur ternaire 

//  let tableau = ["Chadrack", "Joe", "Gregory", "Deborah", "Ursula", "Fred", "Josué"];

//  let etudiant = "Chadrack";

//  etudiant == "Chadrackj" ? console.log(`Etudiant ${etudiant} retrouvé !`)
//  : console.log('Etudiant introuvable !');

//Trie dans un tableau avec for of

// for (etudiant of tableau) {
//     if (etudiant == "Chadrack") {
//         console.log(`Etudiant ${etudiant} retrouvé !`);
//     } else {
//         console.log('Etudiant introuvable !');
//     }
// }

//

//Fonction pour dire bonjour à chaque étudiant

// let tableau = ["Chadrack", "Joe", "Gregory", "Deborah", "Ursula", "Fred", "Josué"];

// for (i = 0; i <= tableau.length; i++) {
//     console.log(`Bonjour ${tableau[i]}!`);
// }

// let tableau = ["Chadrack", "Joe", "Gregory", "Deborah", "Ursula", "Fred", "Josué"];

// ditBonjour => (nom) return ``;

//Autorisation d'entrer


//Fonction de recherche d'étudiant

// let tableau = ["Chadrack", "Joe", "Gregory", "Deborah", "Ursula", "Fred", "Josué"];


// function fundEtidiant (etudiantRecherche) {
//     for (nomEtudiant of tableau) {
//         if (nomEtudiant == etudiantRecherche) {
//             return `Etudiant ${nomEtudiant} retrouvé !`
//         }
//     } return `Etudiant introuvable !`;
// }

// console.log(fundEtidiant("Fred"));

//Entrer un nombre compris entre....

// function nombreComprisEntre1Et3 (nombre) {
//     if (nombre > 10 && nombre < 20) {
//         return 'Consogne respectée !'
//     } else if (nombre < 10) {
//         return 'Nombre plus petit !'
//     } else{
//         return 'Nombre plus grand !'
//     }
// }

// console.log(nombreComprisEntre1Et3(12));

//Fonction affiche les 10 nombres suivants

// function afficheLesDixNombresSuivants (nombre) {
//     let arret = 10;
//     let compteurInitial = nombre;
//     let compteur = compteurInitial + 1;
//     while (compteur <= nombre + arret) {
//         console.log(compteur++);
//     }
// }

// console.log(afficheLesDixNombresSuivants(19));

//Même algorithme, mais avec for

// function afficheLesDixNombresSuivants (nombre) {
//     let arret = 10;
//     let compteurInitial = nombre;
//     for (compteur = compteurInitial + 1; compteur <= nombre + arret; compteur++) {
//         console.log(compteur);
//     }
// }

// console.log(afficheLesDixNombresSuivants(19));

//Algorithme qui écrit la table de multiplication d'un chiffre enntré

// function tableDeMultiplication (nombreDeDepart) {
//     console.log(`${nombreDeDepart} x 1 = ${nombreDeDepart * 1}`);
//     console.log(`${nombreDeDepart} x 2 = ${nombreDeDepart * 2}`);
//     console.log(`${nombreDeDepart} x 3 = ${nombreDeDepart * 3}`);
//     console.log(`${nombreDeDepart} x 4 = ${nombreDeDepart * 4}`);
//     console.log(`${nombreDeDepart} x 5 = ${nombreDeDepart * 5}`);
//     console.log(`${nombreDeDepart} x 6 = ${nombreDeDepart * 6}`);
//     console.log(`${nombreDeDepart} x 7 = ${nombreDeDepart * 7}`);
//     console.log(`${nombreDeDepart} x 8 = ${nombreDeDepart * 8}`);
//     console.log(`${nombreDeDepart} x 9 = ${nombreDeDepart * 9}`);
// }



// console.log('Table de 5');
// tableDeMultiplication(5);
// console.log('Table de 6');
// tableDeMultiplication(6);
// console.log('Table de 7');
// tableDeMultiplication(7);
// console.log('Table de 8');
// tableDeMultiplication(8);
// console.log('Table de 9');
// tableDeMultiplication(9);

//Calcul de la somme des entiers jusqu'au nombre démandé

// let nombreFinal;

// function calculDeLaSomme (nombre) {

// }

// calculDeLaSomme(5);

// let marqueVoiture = voiture => {
//     switch(voiture) {
//         case 'Toyota':
//         console.log(`Votre voiture une ${voiture} !`);
//         break;
//         case 'Mazda':
//         console.log(`Votre voiture une ${voiture} !`);
//         break;
//         case 'Suzuki':
//         console.log(`Votre voiture une ${voiture} !`);
//         break;
//         case 'Rav4':
//         console.log(`Votre voiture une ${voiture} !`);
//         break;
//         default: console.log('Votre voiture n\'existe pas dans notre base de données !')
//     }
// }

// marqueVoiture('Rav4');

// const tableau = ['Toyota', 'Mazda', 'Suzuki', 'Rav4', 'Lexus'];

// function triage (voitureRecherchee) {
//     for (voiture of tableau) {
//         if(voiture == voitureRecherchee) {
//             return `Votre ${voiture} est retrouvée !`
//         }
//         return 'Votre voiture n\'a pas été retrouvée, désolé !'
//     }
// }

// console.log(triage('Suzuki'));

// let tableau = ["Chadrack", "Joe", "Gregory", "Deborah", "Ursula", "Fred", "Josué"];

// function fundEtidiant (etudiantRecherche) {
//     for (nomEtudiant of tableau) {
//         if (nomEtudiant == etudiantRecherche) {
//             return `Etudiant ${nomEtudiant} retrouvé !`
//         }
//     } return `Etudiant introuvable !`;
// }

// console.log(fundEtidiant("Josué"));

//For 
// const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below

// for(let i = 0; i < vacationSpots.length; i++) {
//   console.log(`I would love to visit ${vacationSpots[i]}`);
// }

// Boucle While avec l'objet Math

// console.log(Math.floor(Math.random() * 2));

// const cards = ['diamond', 'spade', 'heart', 'club'];

// let currentCard;

// while (currentCard !== 'spade') {
//     console.log(currentCard = cards[Math.floor(Math.random() * 4)]);
// }

// console.log(`Aujourd'hui, c'est : mardi.`);
// console.log(`L'heure actuelle est : 10h : 00 : 38`);

// var today = new Date();
// var day = today.getDay();
// console.log(day)
// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
// console.log("Today is : " + daylist[day] + ".");
// var hour = today.getHours();
// var minute = today.getMinutes();    
// var second = today.getSeconds();
// var prepand = (hour >= 12) ? " PM " : " AM ";
// hour = (hour >= 12) ? hour - 12 : hour;
// if (hour === 0 && prepand === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Noon';
//     }
//     else {
//         hour = 12;
//         prepand = ' PM';
//     }
// }
// if (hour === 0 && prepand === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Midnight';
//     }
//     else {
//         hour = 12;
//         prepand = ' AM';
//     }
// }
// console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);

//

// function print_current_page()
// {
// window.print();
// }


// let tableauCancer = [];
// let maladie = "cancer";

// function ajouterPatient (pateint) {
//     if (maladie = "cancer") {
//         tableauCancer.push(pateint);
//     }
// }

// ajouterPatient("Chadrack");

// console.log(tableauCancer.length);

// function factoriel(nombre) {
//     let resultat = 1;
//     for(i = 1; i <= nombre; i++) {
//          resultat = resultat * i;
//     }
//     return resultat;
// }

// console.log(factoriel(4));

//Factoriel avec While

// function factoriel (nombre) {
//     resulat = 1;
//     i = 1;
//     while(i <= nombre) {
//         resulat = resulat * i;
//         i++ ;
//     }
//     return resulat;
// }

// console.log(factoriel(8));

let tableau = [12, 22, 42, 58, 12, 22, 56, 63, 14, 58, 12];
let trouve;
let nbr=0;

for (i = 0; i < tableau.length; i++) {
    if (tableau[i] === 22) {
        trouve=tableau[i];
        nbr+=1;
    }
}

console.log(trouve);
console.log(nbr);

