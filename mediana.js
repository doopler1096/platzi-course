// const lista1 = [100, 200, 500, 400000000];
// let mediana;
// const mitadLista1 = parseInt(lista1.length / 2);
// if (esPar(lista1.length)) {
//   const elemento1 = lista1[mitadLista1 - 1];
//   const elemento2 = lista1[mitadLista1];
//   const promedioElm1Elm2 = calcMediaAritmetica([elemento1, elemento2]);
//   mediana = promedioElm1Elm2;
// } else {
//   mediana = lista1[mitadLista1];
// }

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valoraAcumulado = 0, nuevoElemento) {
    return valoraAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcMediana(lista) {
  let array = [lista];
  function comparar(a, b) {
    return a - b;
  }
  array.sort(comparar);

  let mediana;

  const mitadLista = parseInt(array.length / 2);

  if (esPar(array.length)) {
    const elemento1 = array[mitadLista - 1];
    const elemento2 = array[mitadLista];
    const promedioElm1Elm2 = calcMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElm1Elm2;
  } else {
    mediana = array[mitadLista];
  }

  return mediana;
}
