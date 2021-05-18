# editor-de-memes
TP 2 - Editor de memes

En este proyecto hemos realizado un editor para generar memes. 

Lo hemos hecho entre: 

María Cecilia Teisaire: https://github.com/CeciTeser

San Ruidiaz: https://github.com/San-rui

María Dolores Garcia: https://github.com/Cabezadenispero

Carina Brandt:  https://github.com/brandt17



Para Ada, en el módulo en el que se evalúa JavaScript.

Hemos desarrollado una aplicación que permite ingresar texto e imagen para generar un meme; utilizando JavaScript para modificar dinámicamente su contenido y sus propiedades.

Dado que el módulo anterior que hemos visto ha sido HTML y CSS, hemos comenzado nuestro proyecto por el armado de diseño y luego nos hemos enfocado en agregar las funcionalidades correspondientes a JavaScript. 

El diseño que debimos seguir es el siguiente que encontrarán aquí: https://frontend-proyecto-meme.adaitw.org/ 

Las funcionalidades que hemos tenido que darle al editor de memes han sido las siguientes:

Funcionalidades
•	Meme
•	Alternar entre paneles
•	Abrir y cerrar panel
•	Descargar imagen
•	Modo claro y modo oscuro

Imagen
•	Agregar imagen con url
•	Cambiar color de fondo
•	Cambiar modo de mezcla de fondo
o	Aclarar
o	Oscurecer
o	Diferencia
o	Luminosidad
o	Multiplicar


•	Cambiar filtros
ETIQUETA	           PROPIEDAD	     MÍNIMO	 MÁXIMO	 INTERVALO	 INICIAL
Brillo	             brightness	       0	      1	      0.1	       1
Opacidad	           opacity	         0	      1	      0.1	       1
Contraste	           contrast	        100%	   1000%	   1%	      100%
Desenfoque	         blur	             0px	    10px	  0.1px	     0px
Escala de grises	   grayscale	       0%	      100%	   1%	       0%
Sepia	               sepia	           0%	      100%	   1%  	     0%
Hue	                 hue-rotation	     0deg	   359deg	  1deg	     0deg
Saturación	         saturation     	 100%	    1000%	   10%	     100%
Negativo	           invert	            0	      100	     0.1	     1
					
•	Restablecer filtros

Texto
•	Editar texto superior
•	Remover texto superior
•	Editar texto inferior
•	Remover texto inferior
•	Cambiar familia de fuente
•	Cambiar tamaño de fuente
•	Cambiar alineación
•	Cambiar color de texto
•	Cambiar color de fondo de texto
•	Fondo transparente
•	Cambiar padding de texto (Espaciado)
•	Cambiar alto de línea de texto (Interlineado)

♿️ Accesibilidad

Básica
•	Los colores tienen un contraste adecuado
•	La página tiene la información meta correspondiente
•	La página tiene una semántica correcta
•	Los íconos y elementos que no presentan texto agregan la información correspondiente por otros medios (etiquetas aria-label)

Avanzada
•	La página puede ser navegada con el teclado correctamente
•	Siempre hay un foco visible
o	Cuando un elemento está oculto (modales, carrito, productos), no debe poder moverse el foco a elementos del mismo
o	Cuando se abre el panel, el foco salta al botón de cierre del mismo
o	Cuando se cierra el panel, el foco salta al botón de apertura del mismo

Estas funcionalidades son todas las que podrás utilizar con este editor de memes. Tanto para modificar dinámicamente la imagen como el texto. Luego al finalizar, puedes descargártelo con el botón de “Descargar meme”(*).

Aparecerá por default el panel lateral de imagen para que, como primer paso, puedas insertar una url de una imagen que tu quieras. Luego podrás modificar todas las funcionalidades listadas anteriormente. Si prefieres comenzar por el texto, no hay problema, solo tienes que seleccionar el botón de “Texto” del menú de navegación. Allí también encontrarás todas las funcionalidades listadas anteriormente para poder modificarlo a tu gusto. 

Hemos comenzado con este proyecto el día 2/5/2021 y lo hemos finalizado el día 18/5/2021, día en el que hemos hecho la primer entrega. Estamos a la espera de corrección, por lo que no lo podemos dar por finalizado de manera completa. Puede que tengamos que hacer algunas modificaciones. 


*En la primer entrega del día 18/5/2021, todavía estamos a la espera de que los profesores nos indiquen cómo debemos poner la funcionalidad del botón de descarga de meme. 


