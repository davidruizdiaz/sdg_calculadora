// Referencias de los elementos se van a usar
const inputV1 = document.getElementById('v1');
const inputV2 = document.getElementById('v2');
const boton = document.querySelector('button');
const p = document.querySelector('p');
// asignación de evento click al botón
boton.addEventListener('click', calcular);
// La función que se va a ejecutar cuando
// se haga click en el botón.
function calcular() {
  const v1 = inputV1.value;
  const v2 = inputV2.value;
  const suma = Number(v1) + Number(v2);
  p.innerText = 'El resultado de la suma es: ' + suma;
}
