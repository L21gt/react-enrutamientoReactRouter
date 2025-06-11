Luis Velasquez  
Carnet 24011341  
Curso React fundamentos  
Tarea Enrutamiento React Router  

# Descripción:
En esta actividad, vamos a implementar un sistema de navegación para una aplicación web de tipo e-commerce utilizando la librería React Router. Esta práctica tiene como objetivo principal familiarizarse con el uso de rutas en React, entendiendo cómo definirlas, cómo navegar entre ellas y cómo renderizar distintos componentes de acuerdo a la URL actual del navegador.

Debes construir la estructura base de una tienda en línea, donde los usuarios puedan navegar entre una sección de listado de productos y un carrito de compras.

# Procedimiento:
1. Utilizando React Router DOM, dentro de App.jsx deberás generar las siguientes rutas:
    * a. /: Se mostrará el listado de productos.
    * b. /finish-shop: Mostrará un resumen de los productos seleccionados.
    * c. *: Se deberá mostrar una página de ruta no encontrada.  

2. Para el listado de productos, se hará el consumo de una API Rest al endpoint para obtener los productos de café (https://api.sampleapis.com/coffee/hot). Deberás crear la vista que muestra el tipo de bebida, la descripción, la cantidad que el usuario desea y el precio de cada producto. Para calcular el precio, deberás agregar aleatoriamente un valor de 100 a 300 a cada producto.

3. El usuario podrá presionar el botón "más" para agregar un producto al carrito de compras. Una vez añadido, podrá visualizar los productos seleccionados en la vista de /finish-shop. Al presionar el botón "más", un número que indica la cantidad de productos en el carrito se incrementará en el icono superior derecho. Por ejemplo, si el usuario ha agregado dos productos, el icono mostrará "2". Tanto al hacer clic en el icono del carrito como en el botón de "finalizar compra", se deberá dirigir al usuario a la vista de /finish-shop.

4. En la vista /finish-shop, mostraremos un resumen de los productos que el usuario ha seleccionado previamente. Para cada producto, se presentará la siguiente información: 
    * Nombre del producto
    * Imagen
    * La cantidad que el usuario ha seleccionado
    * El subtotal (calculado multiplicando la cantidad por el precio unitario del producto)  

    Además, la vista deberá mostrar el total de todos los productos incluidos en el carrito. El botón de "Pagar ahora" no tendrá ninguna funcionalidad implementada para esta tarea.

5. La estructura del proyecto deberá tener la siguiente distribución:
Donde el componente Products es donde se mostrarán todos los productos, el
componente Cart es el componente donde se mostrará el resumen de productos
seleccionados y el componente NotFound es el componente que se mostrará cuando el
usuario ingrese una ruta inválida.