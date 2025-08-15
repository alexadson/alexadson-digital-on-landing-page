// Este arquivo contém funcionalidades JavaScript para a landing page.
// Pode lidar com interações, animações ou qualquer conteúdo dinâmico necessário para a página.

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: Rolagem suave para links âncora
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo: Exibir uma mensagem de boas-vindas
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Bem-vindo à Agency Digital On! Vamos crescer juntos.";
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.bottom = '20px';
    welcomeMessage.style.right = '20px';
    welcomeMessage.style.backgroundColor = '#f9c74f';
    welcomeMessage.style.padding = '10px';
    welcomeMessage.style.borderRadius = '5px';
    document.body.appendChild(welcomeMessage);

    // Exemplo: Esconder a mensagem de boas-vindas após 5 segundos
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
    }, 5000);
});