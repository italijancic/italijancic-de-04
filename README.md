# 🚀 Desafio Entregable: Websockets
Author: Ivan Talijancic

# 📦 Contenido del repositorio
En este repositorio se entrega el código correspondiente a la resolución del desafio entregable de `Websockets`.

## 📋 Consignas
- Configurar nuestor poryecto para que trabaje con `Handlebars` y `Websocket`.

### ✅ Aspectos a incluir
- Configurar el servidor para integrar el motor de plantillas `Hadlebars` e instalar un servidor de `socket.io` al mismo.
- Crear una vista `home.handlebars` la cuál contenga una lista de todos los productos agregados hasta el momento.
- Además, crear una vista `realTimeProducts.handlebars`, la cual vivirá en el endpoint `/realtimeproducts` en nuestro **views router**, ésta contendrá la misma lista de productos, sin embargo, ésta trabajará con `websockets`.
    - Al trabajar con `websockets`, cada vez que creemos un porducto nuevo, o bien cada vez que eliminemos un producto, se debe actualizar automáticamente en dicha vista.
    - Ya que la conezión entre una consulta **HTTP** y **websocket** no está contemplada dentro de la clase. Se recomienda que, para la creación de un nuevo producto, se cree un formulario simple en la vista `realTimeProducts.handlebars` Para que el contenido se envíe desde **websocket** y no **HTTP**. Sin embargo esta no es la mejor solución.
    - Si desea hacer la conexión de sockets emits con HTTP, deberás utilizar el servidor `io` de sockets dentro la petición **POST**. Cómo utilizarias un emit dentro del POST?