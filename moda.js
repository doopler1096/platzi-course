const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

//INDICA LA CANTIDAD DE VECES

// const lista1Count = {};

// lista1.map(function (element) {
//   if (lista1Count[element]) {
//     lista1Count[element] += 1;
//   } else {
//     lista1Count[element] = 1;
//   }
// });

// const lista1Array = Object.entries(lista1Count).sort(function (a, b) {
//   return a[1] - b[1];
// });

// const moda = lista1Array[lista1Array.length - 1];

// SOLO INDICA QUE NÚMERO SE REPITE MAS

function moda(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}
