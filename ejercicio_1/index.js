// Vanilla JavaScript

// recuperamos todos los botones
const button = document.querySelectorAll('button')

buttons.forEach(button => {
// al hacer click en el botón tenemos que ejecutar una función
button.addEventListener('click', function() {
    // recuperar la id del atributo del HTML
    const id = button.getAttribute('data-id')
    
    // llamar a un servicio para actualizar si me gusta
    // toggleLike(id)

    if (button.classList.contains('liked')) {
        this.classList.remove('liked')
        button.innerText = 'Me gusta'
    } else {
        button.classList.add('liked')
        button.innerText = 'Quitar me gusta'
    }
})
})