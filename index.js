/* Declara un array con los números del 1 al 5.
Muestra el array completo usando console.log.*/
let miarray = [1,2,3,4,5];
console.log(miarray);

/* Declara un array con los nombres de tres frutas.
Muestra el segundo elemento del array usando console.log.*/
let arrayfrutas = ["pera","manzana","piña"]
console.log(arrayfrutas[1]);

/* Declara un array con los nombres de tres colores.
Cambia el tercer elemento del array a 'verde'.
Muestra el array modificado usando console.log.*/
let arraycolor = ["rojo","azul","amarillo"]
arraycolor[2] = "verde";
console.log(arraycolor);

/*Declara un array con los nombres de tres animales.
Añade un cuarto animal al final del array.
Muestra el array completo usando console.log.*/
let arrayanimal = ["perro","gato","pato"]
arrayanimal[3] = "ciervo";
console.log(arrayanimal);

/*Declara un objeto persona con las propiedades nombre, edad y ciudad.
Muestra el objeto completo usando console.log.*/
let persona= {
    nombre: "John",
    edad: 20,
    ciudad:  "castro",
}
console.log(persona);

/*Declara un objeto coche con las propiedades marca, modelo y año.
Muestra la propiedad modelo del objeto usando console.log.*/
let auto = {
    marca: "mustang",
    modelo: "GT",
    año: 2019,
}
console.log(auto.modelo);

/*Declara un objeto libro con las propiedades titulo y autor.
Cambia el valor de la propiedad autor a 'George Orwell'.
Muestra el objeto modificado usando console.log.*/
let libro = {
    titlo: "Harry Potter",
    autor: "Brayan Vargas",
}
libro.autor = "jKRowling";
console.log(libro);

/*Declara un objeto pelicula con las propiedades titulo y director.
Añade una nueva propiedad año con el valor 1994.
Muestra el objeto completo usando console.log.*/
let pelicula = {
    titulo: "Oppenheimer",
    director: "Christopher Nolan",
}
pelicula.año = 2023;

console.log(pelicula);


const milista=  [1,2,3,4,5]
console.log(milista[0]);

let numeros = [1,2,3,4,5];
let numeroelim= numeros.pop()
console.log(numeros);
console.log(numeroelim);








//Declara una variable, asigna un valor, cámbialo y muestra ambos valores en la consola.
let  hola = 1;
console.log("valor inicial", hola);
hola = 2;
console.log("valor final",hola);

//Declara dos variables, asígnales valores numéricos, y muestra su suma en la consola.
let valor1 = 10
let valor2 = 20
valor2 = valor1 + valor2;
console.log(valor2);

//Declara una constante con un valor de cadena, e intenta cambiar su valor (debería dar error).
const cadena = "hola"
//cadena = "nos vemos";
console.log(cadena);

//Declara una constante con un valor numérico, multiplica este valor por 2 y muestra el resultado en la consola.
let mult = 2;
mult = mult * 2;
console.log(mult);

//Crea un array de números, añade un número al final, y muestra el array en la consola.
let arraynum = [1,2,3,4,5];
arraynum.push(6);
console.log(arraynum);

//Crea un array de cadenas, elimina el último elemento y muestra el array en la consola.
let arrcadena = ["sal","agua","azucar"]
arrcadena.pop();
console.log(arrcadena);

//Crea un objeto con propiedades de nombre y edad, y muestra ambas propiedades en la consola.
let object = {
    nombre: "John",
    edad: 20,
}
console.log(object);

//Crea un objeto con propiedades de coche (marca, modelo), cambia el modelo y muestra el objeto actualizado en la consola.
let objcoche = {
    marca : "Chevrolet",
    modelo: "Hilux",
}
objcoche.modelo = "spark";
console.log(objcoche);