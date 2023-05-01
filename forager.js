window.addEventListener('scroll', function () {
    var pagina = document.querySelector('.pagina');
    var paginaNegra = document.querySelector('.pagina-negra');

    if (window.scrollY > pagina.offsetHeight) {
        pagina.classList.remove('oculto');
        paginaNegra.classList.add('oculto');
    } else {
        pagina.classList.add('oculto');
        paginaNegra.classList.remove('oculto');
    }
});
