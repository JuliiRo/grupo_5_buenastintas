# MINUTAS

## 08/08/20

Como primer comentario coincidimos en que las reuniones se pactan y salvo que la mayoría no podamos, si la reunión se hace, se resuelve en esa reunión y lo que se resuelve se hace. El que no participe de la reunión no tiene derecho a réplica.
Respecto al proyecto, nuestra e-commerce será una tienda de bebidas.
Como formato Home, pensamos algo similar a la página de Club Bonvivir que tiene como particularidad que no ofrece productos en el home, para la tienda tiene el hipervínculo para ingresar. En cuanto a lo estético como modelo se eligió la página de Jack Daniel’s. Otra idea que surgió fue que antes de ingresar al home el usuario tenga que poner fecha de nacimiento, ya que si es menor de 18 años no puede comprar.
La tienda que tomamos a modo referencia fue también la de Club Bonvivir, pero con la opción de carrito flotante como la que tiene Walmart, que ofrece como ventaja tener el carrito arriba en la barra de navegación, te va diciendo el precio y si te apoyas sobre el carrito te muestra los productos seleccionados. Respecto a la tienda en sí, la idea es tener links directo con los distintos tipos de productos que ofreceremos (vinos, destilados, aperitivos, cervezas, etc) con una opción de filto para que el cliente pueda tener una mejor experiencia.
El carrito en sí, será tomado de referencia el de Walmart que es sencillo y practico.
Como formulario de carga tomamos como referencia el de Market Place de Facebook, que en una sola página permite subir foto, precio, descripción, cantidad, etc del producto.
El registro e ingreso que será tomado de guía será el de playground.
La idea es poder hacer una página sencilla, fácil de entender y con objetivos realizables.
Quedó por definir el nombre del emprendimiento. Si alguno tiene alguna idea por favor sugerirlas en el chat, así Juli que se ofreció a armar el logo, puede realizarlo sin retrasarse.
Revisar trello para el reparto de tareas, lamentablemente de Brian hasta hace unos minutos no tuvimos novedades y es muy complicado asignar tareas si no estuvo presente en la reunión, ya que para hacer la maqueta de la página si no estuvo en la charla es muy difícil que pueda interpretar la idea.
Como mensaje final, les pido por favor que traten de participar de las reuniones que se plantean y que puedan estar al tanto de como va a avanzando el proyecto.
Creo que para el fin de semana que viene tendríamos que realizar otra reunión para poner en común lo que se avanzo y ver si hay que modificar algo antes de presentarlo el lunes.


## 24/08/20

Durante la reunión, conocimos las consignas del segundo sprint y definimos las tareas que nos corresponden a cada uno.
	La división quedó de la siguiente manera:
+	Nico: crea estructura Node + Express y hace la página del Home.
+	Mili: hace las páginas de Tienda, Registro y Login.
+	Juli: hace la página de carrito de compras, detalles de producto y formulario de carga.
Nos juntamos el sábado 29/08 hacer la retrospectiva planteada en el sprint y ver como venimos avanzando con las consignas.

## 08/09/20

Analizamos el nuevo sprint presentado y lo que hicimos en el sprint anterior.
Más alla de algunos detalles a corregir las concluciones del último sprint es que salió bastante bien, faltan corregir algunas cosas:
+ Modificar la ruta que tiene el boton de registro en login (Mili)
+ Cambiar la ícono del menú cuando la página es para celulares, ya que nuestro header es negro y el ícono de la lista desplegable también, y no se ve por el color de fondo (A definir)
+ Acomodar nav-bar de filtro y footer de la tienda (Mili)
+ Acomodar Home que se movieron el banner y las tres cajas de vistas
+ Cambiar etiqueta agregar producto por administrar

Respecto a este sprint, varias de las consignas fueron ya realizadas o están bastante avanzadas.
+ Los puntos 4 y 5 están resueltos.
+ El punto 6 está casi terminado, faltan algunos detalles en el JSON de productos (Nico).
+ Del punto 7 falta solo crear el JSON de usuarios(Mili).

El CRUD fué dividido de esta manera:
+ crear todas las rutas (Nico)
+ /products ya esta creada.
+ /agregarProductos ya esta creada.
+ /products/:id (Mili).
+ / agregar producto (POST) (Mili).
+  /products/:id/edit (GET Y POST) (Nico).
+  /products/:id/delete (POST) (Juli).

## 12/09/20

Durante la reunión comentamos los avances de la semana y lo que nos faltó hacer. Juli por problemas en el internet no pudo estar.
Mili contó que avanzó en:
+ La vista de agregar productos.
+ Arregló los errores de linkeo en las barras de navegación.
+ cambió el boton desplegable del menú cuando la página esta en modo mobile.

Le falta hacer/terminar:
+ Darle estilo a agregar productos.
+ La parte del POST de agregar productos.

Nico pudo avanzar en:
+ Página show/:id/show
+ Corrigió el home
+ Cambió la foto de productos por una generica

Le falta hacer/terminar:
+ Chequear en la base de datos que todos los productos tengan las mismas categorias
+ La pagina /show que muestre todos los productos

Quedó por definir quién va a modificar la tienda para que muestre los productos reales de nuestra base de datos y si llegamos que su filtro funcione.

## 14/09/20

Se hizo una reunión bis de la del sábado para que Juli pueda estar al tanto de lo que charlamos.

Nico Contó que pudo:
+ Armar la tienda de forma dinámica tomando los productos de la DataBase.
+ Cambio la sección de administrador y le puso un show similar al de la tienda, pero con todas las descripciones que tienen los productos.
+ Completo la base de datos de productos.

Mili estuvo trabajando:
+ En el css de agregar producto.
+ Y en el POST de agregar productos.

## 19/09/20

Durante esta reunión charlamos como de como llegamos a la presentación del sprint el lunes.

Mili terminó el css y la ruta post de agregar productos.

Nico ya había terminado con las actividades que le correspondían

Juli terminó la ruta delete con su correspondiente botón y está trabajando en la sub-barra de navegación de la tienda.

Si el lunes nos dan el próximo Sprint el martes 22/09 antes de la clase nos juntamos para analizarlo.

## 23/09/20

Durante la reunión del día de la fecha, charlamos respecto al nuevo sprint. Nos dividimos las consignas de la siguiente manera:

+ Mili venía trabajando el login, por lo cual va aplicarle el multer para la imagen y el encriptado de contraseña (Punto 5) e implementar el recordar la sesión (Punto 7).
+ Juli va a hacer la verificación de la información enviada por el usuario.
+ Nico va a trabajar el punto 8, si el usuario NO está logeado, va poder navegar por el home y por la tienda; si es usuario standard, va a poder acceder al carrito; si es administrador será redirigido al admin.

Por último, Juli no pudo terminar de hacer funcionar el agregar productos, en estos días lo termina de solucionar.


## 26/09/20

En esta reunión estuvimos charlando un poco más respecto de este sprint ya que no estaban tan claras las cosas a hacer.

Juli pudo terminar el agregar productos y ya fue avisado a los profes.

Mili está sin computadora, por lo cual definimos que si para el miércoles no lo pudo resolver, hará un intercambio de tareas con Nico, ya que el punto 8 se aplica una vez que el resto de los puntos del sprint están terminados.

Aprovechamos la reunión para realizar la retrospectiva del sprint anterior.

## 01/10/20

+ Mili terminó sus tareas.
+ Juli esta terminando de resolver lo suyo.
+ Nico está esperando que Juli termine para poder empezar lo suyo.

## 21/10/20

El objetivo de la reunión fue dividirnos el nuevo sprint, las tareas fueron divididas de la siguiente forma:

+ Juli va a crear el esquema y la base de datos, la fecha estipulada es para el sabado 24/10.
+ Nico va a hacer modelos, la fecha de culminación está pensada para el 29/10.
+ Mili se va a encargar de reformular el CRUD de productos y usuarios*

*Mili no pudo instalar los programas necesarios para las bases de datos, por lo cual la idea es poder entregarle con una semana de tiempo para que pueda trabajar sin la DB y luego probarla alguno de los otros dos integrantes en su equipo y ver si funcionan los CRUD correctamente.

El sabado 24/10 nos juntamos nuevamente para ver como viene Juli con el armado de la DB y para hacer la retrospectiva.