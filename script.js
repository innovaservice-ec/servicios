document.addEventListener('DOMContentLoaded', function() {
    // Datos de productos de ejemplo
    const products = [
        {
            name: "Router Wi-Fi 6",
            description: "Router de última generación con soporte para Wi-Fi 6",
            price: "$54,99",
            image: "./images/router.jpg"
        },
        {
            name: "Tarjeta Gráfica RTX 3080",
            description: "Potente tarjeta gráfica para gaming y edición",
            price: "$1299,99",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Laptop Ultrabook",
            description: "Laptop ultradelgada con procesador i7 y 16GB RAM",
            price: "$999,99",
            image: "./images/Ultrabook.jpg"
        },
        {
            name: "Disco SSD 1TB",
            description: "Almacenamiento rápido y confiable para tu computadora",
            price: "$74.99",
            image: "./images/SSD.jpg"
        },
        {
            name: "Router TP-Link 6 TL-WR840N",
            description: "Router TP-Link 6 - Ofrece una velocidad de 37.5MB/s",
            price: "$19,99",
            image: "./images/tplink.jpg"
        },
        {
            name: "Tarjeta Gráfica RTX 3080",
            description: "Potente tarjeta gráfica para gaming y edición",
            price: "$999,99",
            image: "./images/RTX-3070.jpg"
        },    
        {
            name: "Laptop Asus Tuf A15",
            description: "Laptop de gaming, CPU AMD Ryzen 7,  8 GB RAM",
            price: "$1499,99",
            image: "./images/Azus.jpg"
        },
        {
            name: "DISCO SOLIDO SSD M.2 - 1TB",
            description: "UNIDAD INTERNA DE ESTADO SOLIDO, PARA PC, LAPTOP",
            price: "$109.99",
            image: "./images/SSD-M.2.jpg"
        }
    ];

    // Cargar productos en la página
    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.querySelector('.thank-you-message');
    
    thankYouMessage.style.display = 'none';
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí normalmente enviarías el formulario a un servidor
        // Por ahora solo mostraremos el mensaje de agradecimiento
        contactForm.reset();
        thankYouMessage.style.display = 'block';
        
        // Desplazarse al mensaje de agradecimiento
        thankYouMessage.scrollIntoView({ behavior: 'smooth' });
    });

    // Efecto de scroll suave para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Actualizar la URL sin recargar la página
            history.pushState(null, null, targetId);
        });
    });
});