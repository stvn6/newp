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
