{
  //   let tableauNombres = [];
  // let partie = 'a';

  // function nParite(n, partie) {
  //   if (partie === 'a') {
  //     for (i = 10; i <= 21; i++)
  //       tableauNombres.push(i);

  //     let tableauNombrePaire = [];
  //     let tableauNombreImpaire = [];

  //     for (let itterateur = 0; itterateur < tableauNombres.length; itterateur++) {
  //       tableauNombres[itterateur] % 2 === 0 ? tableauNombrePaire.push(tableauNombres[itterateur])
  //         : tableauNombreImpaire.push(tableauNombres[itterateur])
  //     }

  //     console.log('Tableau Paire');

  //     console.log(tableauNombrePaire);

  //     console.log('Tableau Impaire');

  //     console.log(tableauNombreImpaire);

  //     let sommeDeNombrePaires = 0;
  //     let sommeDeNombreImpaires = 0;

  //     for (let itterateur = 0; itterateur < tableauNombrePaire.length; itterateur++)
  //       sommeDeNombrePaires = sommeDeNombrePaires + tableauNombrePaire[itterateur];
  //     console.log(`La somme de 6 premiers nombres paires : ${sommeDeNombrePaires}`);

  //     for (let itterateur = 0; itterateur < tableauNombreImpaire.length; itterateur++)
  //       sommeDeNombreImpaires = sommeDeNombreImpaires + tableauNombreImpaire[itterateur];
  //     console.log(`La somme de 6 premiers nombres impaires : ${sommeDeNombreImpaires}`);
  //   } else {
  //     console.log('Nombre inconnu !')
  //   }
  //   return nParite;
  // }

  // nParite(6, 'a');
}
{
  // function nParite(n, parite) {
  //   let tableauNombres = [];
  //   if (parite === 'a') {
  //     for (i = 10; i <= 21; i++)
  //       tableauNombres.push(i);

  //     let tableauNombrePaire = [];
  //     let tableauNombreImpaire = [];

  //     for (let itterateur = 0; itterateur < tableauNombres.length; itterateur++) {
  //       tableauNombres[itterateur] % 2 === 0 ? tableauNombrePaire.push(tableauNombres[itterateur])
  //         : tableauNombreImpaire.push(tableauNombres[itterateur])
  //     }

  //     console.log('Tableau Paire');

  //     console.log(tableauNombrePaire);

  //     console.log('Tableau Impaire');

  //     console.log(tableauNombreImpaire);

  //     let sommeDeNombrePaires = 0;
  //     let sommeDeNombreImpaires = 0;

  //     for (let itterateur = 0; itterateur < tableauNombrePaire.length; itterateur++)
  //       sommeDeNombrePaires = sommeDeNombrePaires + tableauNombrePaire[itterateur];
  //     console.log(`La somme de 6 premiers nombres paires : ${sommeDeNombrePaires}`);

  //     for (let itterateur = 0; itterateur < tableauNombreImpaire.length; itterateur++)
  //       sommeDeNombreImpaires = sommeDeNombreImpaires + tableauNombreImpaire[itterateur];
  //     console.log(`La somme de 6 premiers nombres impaires : ${sommeDeNombreImpaires}`);
  //   } else {
  //     console.log('Nombre inconnu !')
  //   }
  //   return n;
  // }


  // nParite(6, 'a')
}

// function produitDeDeuxNombres(a, b) {
//   let produit = a - b;
//   switch (produit) {
//     case produit > 0:
//       console.log(1);
//       break;
//     case produit === 0:
//       console.log(0);
//       break;
//     // case produit < 0:
//     //   console.log(-1);
//     //   break;
//   //   default:
//   //     console.log(0)
//   // }
// }

// produitDeDeuxNombres(8,6)

function productSign(n, m) {
  n = n - m;
  if (n > 0) {
    console.log(n = 1);
  } else if (n === 0) {
    console.log(n = 0);
  } else {
    console.log(n = -1);
  }
  return n
}

productSign(3, 6)