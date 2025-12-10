/**
 * Script para inicializar librerías de interactividad.
 * Se usa document.addEventListener('DOMContentLoaded') para asegurar que
 * el DOM esté completamente cargado antes de ejecutar el script.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa la librería AOS (Animate On Scroll)
    // Esto es necesario para que las animaciones data-aos="fade-up" funcionen.
    if (typeof AOS !== 'undefined') {
        AOS.init({
            // Puedes ajustar la duración de la animación aquí
            duration: 800, 
            // Esto asegura que la animación se repita cada vez que el elemento esté visible
            once: true 
        });
    }
});