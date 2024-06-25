
// function mensaje(){
//      return console.log('Hola Mundo')
// }

// function Saludo(nombre) {
// return console.log(`Hola, ${nombre} `);
// }
// Saludo("Juan")

// function doble(numero) {
//     return numero * 2;
// }

// console.log(doble(5));
// console.log(doble(-4));
// console.log(doble(0));

// function calcularPromedio(num1, num2, num3) {
//     let promedio = (num1 + num2 + num3) / 3;
//     return promedio;
// }

// console.log(calcularPromedio(10, 20, 30));
// console.log(calcularPromedio(5, 5, 5)); 
// console.log(calcularPromedio(-10, 0, 10));

// function calcularMayor( num1, num2) {
//     if (num1 > num2){
//         return num1
//     } else {
//         return num2
//     }


// }

// function calcularCuadrado(num){
//     return num * num;
// }

// calcularCuadrado(5);

//Funcion que calcula el indice de Masa corporal (IMC)
// function calcularIMC(peso, altura) {
    //calcular el IMC usando la formula
    // let imc = peso / (altura * altura);
    // return imc;    
// }

//Ejemplo de uso 
// let peso1 = 68;
// let altura1 = 1.75;

// let imc1 = calcularIMC(peso1, altura1);
// console.log(`el IMC es: ${imc1.toFixed(2)}`)

//Funcion recursiva para calcular el factorial de un número
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// function convertirDolaresAReales(valorDolares){
//     const cotizacionDolar = 4.80;
//     return valorDolares * cotizacionDolar;
// }

// Ejemplos de uso:
// console.log(convertirDolaresAReales(10)); // Convertir $10 a reales: 10 * 4.80 = R$48

// function calcularYMostrarMedidas (altura, ancho) {
//     let area= altura * ancho;
//     let perimetro = 2 * (altura * ancho);


//     console.log(`Area de la sala rectangular ${area} metros cuadrados`);
//     console.log(`perimetro de la sala rectangular ${perimetro} metros`);
// }

// Ejemplos de uso:
// calcularYMostrarMedidas(3, 5); // Para una sala con altura de 3 metros y anchura de 5 metros
// calcularYMostrarMedidas(4, 6); // Para una sala con altura de 4 metros y anchura de 6 metros

// function calcularYMostrarMedidas (radio) {
//     const pi = 3.14;

//     let area = pi * radio * radio;
//     let perimetro = 2 * pi * radio;

//     console.log(`el area de la sala circular es ${area.toFixed(2)} metros cuadrados`)
//     console.log(`el perimetro de la sala circular es ${perimetro.toFixed(2)} metros`)
// }
// Ejemplo de uso:
// calcularYMostrarMedidasCirculares(4); // Para una sala circular con radio de 4 metros

//funcion que muestra en pantalla la tabla de multiplicar de un numero dado
// function mostrarTablaDeMultiplicar(numero){
//     console.log(`Tabla de multiplicar del ${numero}:`);
//     for (let i = 1; i <= 10; i++) {
//         let resultado = numero * 1;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }

// }

// Ejemplo de uso:
// mostrarTablaMultiplicar(9); // Muestra la tabla de multiplicar del número 7

//declaracion de una lista llamada generica
// let listaGenerica = [];
//  if (listaGenerica === 0){
// console.log(`muestra ${listaGenerica}`)}

//Crea una lista de lenguajes de programación llamada 
//"lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
//  console.log(lenguajesDeProgramacion)

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

// let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//  console.log(lenguajesDeProgramacion)

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

// let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];

// function mostrarLenguajes() {
// console.log("Lenguajes de programacion");
// for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
//     console.log(lenguajesDeProgramacion[i]);
// }
// }

// mostrarLenguajes;

// Crea una función que muestre en la consola todos los elementos de la lista 
// "lenguagesDeProgramacion en orden inverso.

// let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];

// function mostrarLenguajesInversos() {
// console.log("Lenguajes de programacion inversos");
// for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
//     console.log(lenguajesDeProgramacion[i]);
// }
// }

// mostrarLenguajesInversos;

// Crea una función que calcule el promedio de los elementos en una lista de números.

// function calcularPromedio(lista) {
//     if ( lista.length = 0){
//         return 0;
//     }

//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//     suma += lista[i];
//     }

//     let promedio = suma / lista.length;
//     return promedio;
// }

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// function mostrarNumeros(lista) {
//     if (lista.length = 0){
//         console.log("La lista esta vacia")
//         return 0
//     }

//     let maximo = lista[0];
//     let minimo = lista[0];

//     for ( let i = 0; i < lista.length; i++) {
//         if (lista[i] > maximo) {
//             maximo = lista[i];
//         }
//     if (lista[i] < minimo) {
//         minimo = lista[i];
//     }
// }

// console.log(`Número más grande: ${maximo}`);
// console.log(`Número más pequeño: ${minimo}`);
// }

// Crea una función que devuelva la suma de todos los elementos en una lista.

// function sumaElementos(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++){
//         suma += lista[i];
//     }
//     return suma;
// }

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// function encontrarPosicion(lista, elemento) {
//     return lista.indexOf(elemento);
    
// }

// let numeros = [5, 10, 3, 8, 15];
// let posicion1 = encontrarPosicion(numeros, 8);
// console.log(`La posición de 8 en la lista es: ${posicion1}`); 

// Crea una función que reciba dos listas de números del mismo tamaño y 
// devuelva una nueva lista con la suma de los elementos uno a uno.

// function sumarLista(lista1, lista2) {
//     if (lista1.length == lista2.length){
//         console.log('Las listas no tienen el mismo tamaño')
//         return null;
//     }

//     let resultado = [];

//     for (let i = 0; i < lista1.length; i++) {
//         let suma = lista1[i] + lista2[2];
//         resultado.push(suma);
//     }

//     return resultado;
// }

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// function cuadradoDeCadaNumero(lista) {
//     let listaCuadrados = lista.map( numero => numero * numero);
//     return listaCuadrados;
// }

// Ejemplos de uso:
// let numeros1 = [1, 2, 3, 4, 5];
// let resultado1 = cuadradoDeCadaNumero(numeros1);
// console.log("Cuadrados de cada número:", resultado1);