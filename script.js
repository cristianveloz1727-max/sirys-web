/**
 * Script para inicializar librerías de interactividad y manejar la lógica
 * de mostrar detalles de servicios.
 */

// 1. Datos de cada servicio, sus descripciones y las rutas de imagen.
const serviciosData = {
    "video-vigilancia": {
        titulo: "Video Vigilancia (CCTV) Profesional",
        descripcion: "Implementamos sistemas de Circuito Cerrado de Televisión (CCTV) con tecnología IP de última generación. Monitoreo 24/7, cámaras de alta resolución con visión nocturna y grabación en NVRs seguros, adaptados a las necesidades específicas de tu empresa o residencia.",
        imagenes: [
            "assets/cctv_ejemplo1.jpg", 
            "assets/cctv_ejemplo2.jpg"
        ]
    },
    "control-acceso": {
        titulo: "Sistemas Inteligentes de Control de Acceso",
        descripcion: "Gestiona quién, cuándo y dónde entra a tus instalaciones. Instalamos lectores biométricos (huella/rostro), control por tarjeta, teclados numéricos y software de gestión centralizada para máxima seguridad y auditoría.",
        imagenes: [
            "assets/acceso_ejemplo1.jpg",
            "assets/acceso_ejemplo2.jpg"
        ]
    },
    "radiocomunicacion": {
        titulo: "Soluciones de Radiocomunicación Empresarial",
        descripcion: "Proporcionamos equipos de radiofrecuencia (handies, móviles, repetidores) para una comunicación clara, instantánea y segura, esencial para operaciones logísticas, seguridad privada y flotas de transporte.",
        imagenes: [
            "assets/radio_ejemplo1.jpg"
        ]
    },
    "casa-inteligente": {
        titulo: "Domótica y Automatización del Hogar",
        descripcion: "Convierte tu hogar en una Casa Inteligente con sistemas que controlan iluminación, persianas, temperatura y seguridad mediante voz o aplicación móvil. Ofrecemos integración completa y fácil de usar.",
        imagenes: [
            "assets/domotica_ejemplo1.jpg",
            "assets/domotica_ejemplo2.jpg"
        ]
    },
    "rastreo-gps": {
        titulo: "Rastreo GPS y Telemetría para Flotas",
        descripcion: "Control total de tus activos móviles. Nuestros sistemas GPS ofrecen seguimiento en tiempo real, alertas de geocerca, historial de rutas y telemetría avanzada para optimizar costos y garantizar la seguridad de tu flota.",
        imagenes: [
            "assets/gps_ejemplo1.jpg",
            "assets/gps_ejemplo2.jpg"
        ]
    },
    "mantenimiento": {
        titulo: "Mantenimiento Técnico y Soporte 24/7",
        descripcion: "Asegura la longevidad y el rendimiento de tu inversión con nuestros planes de mantenimiento preventivo y correctivo. Soporte técnico rápido y profesional para todos los sistemas de seguridad y comunicación.",
        imagenes: [
            "assets/mantenimiento_ejemplo1.jpg"
        ]
    }
};

// 2. Lógica para mostrar los detalles del servicio
function mostrarDetalleServicio(serviceKey) {
    const data = serviciosData[serviceKey];
    const detalleContenedor = document.getElementById('detalle-servicio');
    const detalleTitulo = document.getElementById('detalle-titulo');
    const detalleDescripcion = document.getElementById('detalle-descripcion');
    const detalleGaleria = document.getElementById('detalle-galeria');
    
    // Si los datos no existen, salimos
    if (!data) return;

    // Llenar el contenido
    detalleTitulo.textContent = data.titulo;
    detalleDescripcion.textContent = data.descripcion;

    // Limpiar galería anterior e insertar nuevas imágenes
    detalleGaleria.innerHTML = '';
    data.imagenes.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = data.titulo;
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
        img.style.objectFit = 'cover';
        detalleGaleria.appendChild(img);
    });

    // Mostrar el contenedor de detalles
    detalleContenedor.style.display = 'block';

    // Desplazar la ventana para enfocar el detalle
    detalleContenedor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS (Animaciones)
    if (typeof AOS !== 'undefined') {
        AOS.init({ 
            duration: 800, 
            once: true // Las animaciones solo corren la primera vez
        });
    }

    // 3. Manejar el click en las tarjetas de servicio
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        // Hacemos que la tarjeta tenga un estilo de cursor de puntero
        card.style.cursor = 'pointer'; 
        
        card.addEventListener('click', function() {
            // Eliminar clase activa de todas
            serviceCards.forEach(c => c.classList.remove('active-service'));
            
            // Añadir clase activa a la tarjeta clickeada
            this.classList.add('active-service');
            
            const serviceKey = this.getAttribute('data-servicio');
            mostrarDetalleServicio(serviceKey);
        });
    });

    // 4. Manejar el click en el botón de cerrar
    const cerrarBoton = document.getElementById('cerrar-detalle');
    cerrarBoton.addEventListener('click', function() {
        document.getElementById('detalle-servicio').style.display = 'none';
        
        // Remover la clase activa de las tarjetas
        document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active-service'));
    });
});