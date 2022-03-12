// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  // El charAt agarra la primer letra, luego la manda a toUpperCase que la convierte en mayúscula
  // Luego a esa primer letra del str en mayuscula, la manda sumo a "nombre.slice(1)" que lo que hace es 
  // quitarle "(1)" una letra en este caso(la primera).
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb (n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //2 formas de hacerlo:
  //var resultado =numeros.reduce((acc,ele)=>acc+ele)
  //cb(resultado)
  var suma = numeros.reduce(function(acc, ele){
    return acc + ele
  }, 0)
  cb(suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código: 
  //2 formas de hacerlo:
  //array.forEach(function(ele){
  //  cb(ele)
  //})
  array.forEach(ele=>cb(ele))
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //var nuevoArray = [];
  // for(var k=0;k<array.length;k++){
  //  nuevoArray.push(cb(array[k]))
  //}
  //return nuevoArray;
  var nuevoArray = array.map(function(ele){
    return cb(ele)});
    return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var coincidencias = array.filter(function(ele){
    return ele.charAt(0) === "a";
  })
  return coincidencias;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
