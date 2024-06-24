# Gestor de Biblioteca
## Link del Proyecto
https://leoito88.github.io/library-manager/

## Consigna del trabajo
Estás a cargo de desarrollar un pequeño sistema de gestión para una biblioteca utilizando JavaScript. Este sistema debe permitir administrar libros y autores, y realizar algunas operaciones básicas sobre ellos.
Para ello, debes crear un objeto Libro con las propiedades titulo (string), autor (string), añoPublicacion (número) y genero (string). Además, este objeto debe tener un método info que devuelva un string con la información del libro.
Luego, crea un arreglo llamado biblioteca que contenga al menos tres objetos Libro con diferentes datos.
A continuación, implementa una función buscarLibrosPorAutor que reciba como parámetro el nombre de un autor (string) y devuelva un arreglo con los libros escritos por ese autor.
Finalmente, implementa una función añadirLibro que reciba como parámetros los datos de un nuevo libro (titulo, autor, añoPublicacion, genero) y lo añada al arreglo biblioteca.
Tareas a realizar:

    - Define el objeto Libro con las propiedades y métodos mencionados.
    - Crea el arreglo biblioteca con al menos tres libros.
    - Implementa la función buscarLibrosPorAutor.
    - Implementa la función añadirLibro.
    - Prueba tu código añadiendo un nuevo libro a la biblioteca y luego buscando libros por un autor específico.

## Imágenes del proyecto
![image](https://github.com/leoito88/library-manager/assets/59623841/8dc55082-e3a2-4124-9447-d98f639b70c2)

La página está compuesta de 3 partes:
- Biblioteca con los libros disponibles
- Buscador de libros por autor
- Formulario para agregar libros

### Buscador de libros por autor
Cuando Se empieza a buscar algún autor aparece en dicha sección los libros del mismo.
![image](https://github.com/leoito88/library-manager/assets/59623841/1987fb2d-b546-4c4b-a430-ee2930c50658)

Cuando dejamos en blanco el campo nos aparece un mensaje que nos pide ingresar un autor:
![image](https://github.com/leoito88/library-manager/assets/59623841/2dd426b8-e21c-40dc-8ff3-1b9d77585d41)

También podemos buscar los libros por autor desde la consola con el comando buscarLibrosPorAutor():
![image](https://github.com/leoito88/library-manager/assets/59623841/d26f4b7c-ceb0-4b47-a655-ce88922ae899)


### Formulario para agregar libros:
Cuando agregamos un libro nuevo en el formulario aparecerá abajo de todos los libros disponibles

![image](https://github.com/leoito88/library-manager/assets/59623841/58717eb6-50e6-4a0a-9c78-a39993141cd0)
![image](https://github.com/leoito88/library-manager/assets/59623841/87999faf-5270-4233-b8f9-8852c00cb6f4)

También podemos añadir los libros desde consola con el comando añadirLibro(titulo, autor, añoPublicacion, genero), y luego llamando la función biblioteca para ver todos los libros en el array:
![image](https://github.com/leoito88/library-manager/assets/59623841/a38d1030-77cf-43c4-9316-9448f9b58f03)

