const btnLanguage = document.getElementById('btn-language')
btnLanguage.addEventListener('click', () => {
    let currentUrl = window.location.href;

    // Si la URL actual contiene "index_en", cambia a la versión en español
    if (currentUrl.includes('index-es.html')) {
        window.location.href = 'index-en.html';
    }
    // Si la URL actual contiene "index_es", cambia a la versión en inglés
    else if (currentUrl.includes('index-en.html')) {
        window.location.href = 'index-es.html';
    }
});


