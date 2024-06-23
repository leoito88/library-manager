/* Gestión de una Biblioteca

Estás a cargo de desarrollar un pequeño sistema de gestión para una biblioteca utilizando JavaScript. Este sistema debe permitir administrar libros y autores, y realizar algunas operaciones básicas sobre ellos.

Para ello, debes crear un objeto Libro con las propiedades titulo (string), autor (string), añoPublicacion (número) y genero (string). Además, este objeto debe tener un método info que devuelva un string con la información del libro.


Luego, crea un arreglo llamado biblioteca que contenga al menos tres objetos Libro con diferentes datos.

A continuación, implementa una función buscarLibrosPorAutor que reciba como parámetro el nombre de un autor (string) y devuelva un arreglo con los libros escritos por ese autor.

Finalmente, implementa una función añadirLibro que reciba como parámetros los datos de un nuevo libro (titulo, autor, añoPublicacion, genero) y lo añada al arreglo biblioteca.

Tareas a realizar:

    Define el objeto Libro con las propiedades y métodos mencionados.
    Crea el arreglo biblioteca con al menos tres libros.
    Implementa la función buscarLibrosPorAutor.
    Implementa la función añadirLibro.
    Prueba tu código añadiendo un nuevo libro a la biblioteca y luego buscando libros por un autor específico.

Entrega:

Sube tu proyecto a un repositorio en GitHub y comparte el enlace del repositorio. La fecha límite de entrega es el 24 de junio antes de las 9 am.

Recuerda comentar */

document.addEventListener("DOMContentLoaded", () =>{
    buscarLibros()
});

// Parámetros Objeto Libro
function Libro(titulo, autor, añoPublicacion, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.añoPublicacion = añoPublicacion;
    this.genero = genero;
    this.info = function() {
        return `- ${this.titulo} (Autor: ${this.autor}, Año: ${this.añoPublicacion}, Género: ${this.genero})`;
    };
}

// Creamos algunos libros
let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico");
let libro2 = new Libro("Carrie", "Stephen King", 1974, "Novela de terror");
let libro3 = new Libro("1984", "George Orwell", 1949, "Distopía");
let libro4 = new Libro("Crónica de una muerte anunciada", "Gabriel García Márquez", 1981, "Realismo mágico");
let libro5 = new Libro("El amor en los tiempos del cólera", "Gabriel García Márquez", 1985, "Realismo mágico");
let libro6 = new Libro("The Shining", "Stephen King", 1977, "Novela de terror");
let libro7 = new Libro("Harry Potter and the Philosopher’s Stone", "J.K. Rowling", 1997, "Literatura fantástica");
let libro8 = new Libro("It", "Stephen King", 1986, "Novela de terror");
let libro9 = new Libro("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 1998, "Literatura fantástica");


// Agregamos los libros a la biblioteca
let biblioteca = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9];

// Mostramos los libros en la página
let bibliotecaDiv = document.getElementById("biblioteca");
biblioteca.forEach(libro => {
    let libroDiv = document.createElement("div");
    libroDiv.className = "libro";
    libroDiv.textContent = libro.info();
    bibliotecaDiv.appendChild(libroDiv);
});
