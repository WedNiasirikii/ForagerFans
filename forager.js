
document.addEventListener('DOMContentLoaded', () => {
    const btnLanguage = document.querySelector('#btn-language');
    btnLanguage.addEventListener('click', cambiarIdioma);
});

// Definir la función cambiarIdioma
function cambiarIdioma() {
    // Obtener el botón de cambiar idioma
    const btnLanguage = document.getElementById('btn-language');

    // Agregar un evento de clic al botón
    btnLanguage.addEventListener('click', () => {
        // Obtener la URL actual de la página
        const currentUrl = window.location.href;

        // Si la URL actual contiene "index_en", cambia a la versión en español
        if (currentUrl.includes('index_ingles.html')) {
            window.location.href = 'index.html';
        }
        // Si la URL actual contiene "index_es", cambia a la versión en inglés
        else if (currentUrl.includes('index')) {
            window.location.href = 'index_ingles.html';
        }
    });

}

