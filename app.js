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