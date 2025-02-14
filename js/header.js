// js/header.js
import { toggleClass } from './global.js';

async function loadHeader() {
    try {
        const response = await fetch('/src/header.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        document.getElementById('header').innerHTML = data;

        // Chama a função para controlar a opacidade após carregar o cabeçalho
        controlarOpacidadeDoMenu();
        ativarMenuItems(); // Chama a função para ativar os itens do menu
        
    } catch (error) {
        console.error('Falha ao carregar o cabeçalho:', error);
    }
}

function controlarOpacidadeDoMenu() {
    const nav = document.querySelector('nav');
    const currentPage = window.location.pathname;

    if (nav) {
        if (currentPage === '/src/index.html' || currentPage === '/') {
            nav.classList.remove('nav-opaque');
            nav.style.backgroundColor = 'rgba(121, 215, 190, 0.1)';
        } else {
            nav.classList.add('nav-opaque');
            nav.style.backgroundColor = '';
        }
    } else {
        console.error('Elemento <nav> não encontrado após carregar o cabeçalho.');
    }
}

function ativarMenuItems() {
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

// Menu responsivo (mover para header.js)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav .menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});

