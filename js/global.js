// js/global.js
// Funções e variáveis globais (se necessário)

// Função auxiliar para adicionar ou remover uma classe de vários elementos
export function toggleClass(elements, className) {
    elements.forEach(element => {
        element.classList.toggle(className);
    });
}