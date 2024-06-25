<!-- HTML -->

1. Para comenzar un proyecto con HTML usamos ! para establecer los atributos principales

    - Para agregar la hoja de estilos debemos añadir la etiqueta <link> y buscar la dirección

2. Podemos añadir a nuestras etiquetas HTML clases o IDs. Estas tendrán dos finalidades diferentes. 

    Clases (class):

        - Podemos usar una misma clase en múltiples etiquetas.

        - Eso permite que varias etiquetas compartan el mismo estilo

        - Si hay una clase llamada (Botón) puedes aplicarla a todos los botones que quieres que se vean igual

    IDs (id):

        - Cada ID debe de ser único dentro de una página.

        - Esto significa que un ID solo debe usarse en una única etiqueta.

        - Si tienes un ID llamado "cabecera", debe aplicarse solo a un elemento específico de la página

<!-- CSS -->

1. Para dar estilos a nuestras etiquetas HTML las llamaremos de la siguiente manera. 

    Clases (class)

    - Cuando una etiqueta tiene una clase llamada "boton":

        ejemplo: <button class="boton">Botón</button>

    La llamaremos de la siguiente manera:

    ".boton"

    IDs (id)

    - Cuando tenemos una etiqueta con un id

        ejemplo: <button id="boton">Botón</button>

    La llamaremos de la siguiente manera: 

    #boton



<!-- JavaScript -->

1. En JavaScript nos encontraremos con variables. Estas variables podrán ser:

    - var, let, const.

Cada una es diferente a la otra, por ejemplo:

    1. 'var' 

        Ámbito (Scope):

            - El ámbito 'var' es global si se declara fuera de una función o local a la función en la que se declara.

            - No tiene un ámbito de bloque, es decir, no está limitado a las llaves `{}` en bucles o condiciones. 

        Re-declaración y Re-asignación:

            - Puedes re-declarar y re-asignar una variable declarada con 'var' sin problemas

        Hoisting:

            -   Las declaraciones de var son "elevadas" (hoisted) al principio de su contexto (función o global), aunque su asignación no lo es.

        console.log(a); // undefined
        var a = 10;
        console.log(a); // 10

    2. 'let'

        Ámbito (Scope):


