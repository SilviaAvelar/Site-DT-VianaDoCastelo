// Função para carregar o cabeçalho e manipular a opacidade do menu
async function loadHeader() {
    const response = await fetch('/src/header.html');
    const data = await response.text();
    document.getElementById('header').innerHTML = data;

    // Agora que o cabeçalho foi carregado, execute o código para controlar a opacidade
    const nav = document.querySelector('nav');
    const currentPage = window.location.pathname;

    // Verifica se a página foi carregada corretamente
    if (nav) {
        if (currentPage === '/src/index.html' || currentPage === '/') { // Verifica se é a página inicial
            nav.classList.remove('nav-opaque'); // Remove a classe para a opacidade normal
            nav.style.backgroundColor = 'rgba(121, 215, 190, 0.1)'; // Define a cor transparente
        } else {
            nav.classList.add('nav-opaque'); // Adiciona a classe para a opacidade normal
            nav.style.backgroundColor = ''; // Remove o estilo backgroundColor inline
        }
    } else {
        console.error('Elemento <nav> não encontrado após carregar o cabeçalho.');
    }


    // Adiciona classe 'active' ao menu quando clicado (opcional)
    const menuItems = document.querySelectorAll('nav .menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remover 'active' de todos os itens
            menuItems.forEach(item => item.classList.remove('active'));

            // Adicionar 'active' ao item clicado
            this.classList.add('active');
        });
    });
}

loadHeader(); // Chama a função para carregar o cabeçalho

// Adiciona efeito parallax
document.addEventListener('scroll', function() {
    let parallaxContainer = document.getElementById('parallax-container');
    let parallaxBg = document.querySelector('.parallax-bg');

    if (parallaxContainer && parallaxBg) {
        let scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)'; // Ajuste o valor (0.4) para controlar a intensidade do efeito
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav .menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});