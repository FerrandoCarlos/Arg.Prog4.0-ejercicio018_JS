/**
 * Dado un array de números, filtrar y crear uno nuevo con los números enteros positivos, mayores a 10, menores a 1000 y divisibles por 5.
 * Mostrar los datos del array resultante en una lista.
 */
//Array con datos a filtrar
const numbers = [1000,5,55,105,1,9,33,44,101,150,130,12,9,-10,8,81,195,19];
//Se captura el ul id list
const listElement = document.getElementById('list');

const filterNumbers = numbers.filter(number => number > 10 && number < 1000 && number % 5 === 0);

filterNumbers.forEach(number => {
    listElement.insertAdjacentHTML('beforeend',
    `<li>${number}</li>`);
});