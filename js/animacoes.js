// js/animacoes.js
// Adiciona efeito parallax
document.addEventListener('scroll', function() {
    let parallaxContainer = document.getElementById('parallax-container');
    let parallaxBg = document.querySelector('.parallax-bg');

    if (parallaxContainer && parallaxBg) {
        let scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)'; // Ajuste o valor (0.4) para controlar a intensidade do efeito
    }
});