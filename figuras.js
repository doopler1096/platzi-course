//calculo cuadrado
console.group('Cuadrados');

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//Calculo triangulo
console.group('triangulos');

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Calculo de círculos
console.group('Círculos');

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// funciones con HTML cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById('InputCuadrado').value;
  const perimetro = perimetroCuadrado(input);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('InputCuadrado').value;
  const area = areaCuadrado(input);
  alert(area);
}

// funciones con HTML triangulo

function calcularAlturaTriangulo() {
  const inputLado1 = document.getElementById('InputTriangulo1').value;
  const inputLado2 = document.getElementById('InputTriangulo2').value;
  const inputBase = document.getElementById('InputTriangulobase').value;
  const altura = Math.sqrt(inputLado1 * inputLado2 - inputBase ** 2 / 4);
  if (inputLado1 !== inputLado2) {
    alert('Los triangulos isoseles deben tener el mismo largo en sus lados');
  } else alert(altura);
}
