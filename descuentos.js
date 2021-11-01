// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const presioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return presioConDescuento;
}

function buttonDiscount() {
  const inputPrice = document.getElementById('InputPrice').value;

  const inputDiscount = document.getElementById('InputDiscount').value;

  const precioConDescuento = calcularPrecioConDescuento(
    inputPrice,
    inputDiscount
  );
  const pResult = document.getElementById('ResultPrice');

  pResult.innerText = 'El precio con descuento son: $ ' + precioConDescuento;
}
