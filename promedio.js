function calcMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valoraAcumulado = 0, nuevoElemento) {
    return valoraAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
