let tableauNombres = [];
let partie = 'a';

if(partie === 'a') {
    for(i = 10; i <=21; i++) {
        tableauNombres.push(i);
    }
    
    let tableauNombrePaire = [];
    let tableauNombreImpaire = [];
    
    for(let itterateur = 0; itterateur < tableauNombres.length; itterateur++) {
        if(tableauNombres[itterateur] % 2 === 0) {
            tableauNombrePaire.push(tableauNombres[itterateur])        
        } else {
            tableauNombreImpaire.push(tableauNombres[itterateur])
        }
    }

    console.log('Tableau Paire');

    console.log(tableauNombrePaire);

    console.log('Tableau Impaire');

    console.log(tableauNombreImpaire);
    
    let sommeDeNombrePaires = 0;
    let sommeDeNombreImpaires = 0;
    
    for(let itterateur = 0; itterateur < tableauNombrePaire.length; itterateur++) {
        sommeDeNombrePaires = sommeDeNombrePaires + tableauNombrePaire[itterateur];
    }
    console.log(`La somme de 6 premiers nombres paires : ${sommeDeNombrePaires}`);
    
    for(let itterateur = 0; itterateur < tableauNombreImpaire.length; itterateur++) {
        sommeDeNombreImpaires = sommeDeNombreImpaires + tableauNombreImpaire[itterateur];
    }
    console.log(`La somme de 6 premiers nombres impaires : ${sommeDeNombreImpaires}`);
} else {
    console.log('Nombre inconnu !')
}