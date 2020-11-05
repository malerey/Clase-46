// arrays bidimensionales, matrices 

// const nombres = ["malena", "carola", "agus, la dictadora", "ana"]
// const edades = [33, 25, 22, 32]
// const direcciones = ["pinzon 461", "anzorena 100", "san martin 285", "chacabuco 239"]


// nombres[0]
// edades[0]
// direcciones[0]


// const matriz = [
//   ["malena", "carola", "agus, la dictadora", "ana"], 
//   [33, 25, 22, 32],
//   ["pinzon 461", "anzorena 100", "san martin 285", "chacabuco 239"]
// ]


// for (let i = 0; i < matriz.length; i++) {
//   console.log("empiezan las vueltas del primer for")
//   console.log("estoy en la vuelta", i)
//   console.log(matriz[i])

//   for (let j = 0; j < matriz[i].length; j++) {
//     console.log("estoy en la vuelta", j)
//     console.log("adentro del segundo for")
//     console.log(matriz[i][j])
    
//   }
  
//   console.log("fin de la vuelta", i, "del for de afuera")
// }

// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     // quiero ver en la consola todos los nombres
//     // y direcciones en mayuscula
//     console.log(matriz[i][j])
//   }
// }

// const matriz = [
//   ["malena", "carola", "agus, la dictadora", "ana"], 
//   [33, 25, 22, 32],
//   ["pinzon 461", "anzorena 100", "san martin 285", "chacabuco 239"]
// ]

// const convertirMatrizAMayusculas = (matriz)=> {
//   for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {

//       if (typeof matriz[i][j] === "string") {
//         matriz[i][j] = matriz[i][j].toUpperCase()
//       }
//     }
//   }
//   return matriz
// }

// console.log(convertirMatrizAMayusculas(matriz))


const obtenerNumeroMayorDeMatriz = (matriz) => {
  let contadora = 0
  for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] > contadora) {
              contadora = matriz[i][j];
          }
      }
  }
  return contadora;
  // devuelva el mayor número de dicha matriz.
};

console.log(obtenerNumeroMayorDeMatriz([[ 2, 7, 12, 1 ], [ 8, 23 ], [ 9, 45, 7 ], [ 22, 3, 24, 4 ]])); // 45
