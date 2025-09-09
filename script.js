// EFEITO DE FADE-IN AO ROLAR A PÁGINA

// Seleciona todos os elementos que queremos animar
const sections = document.querySelectorAll('section');

// Cria um "observador" que vai verificar quando um elemento entra na tela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Se o elemento estiver visível na tela...
        if (entry.isIntersecting) {
            // Adiciona a classe 'visible' para ativar a animação do CSS
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            // Para de observar o elemento para a animação não repetir
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
});

// Aplica o estilo inicial (invisível) e começa a observar cada seção
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// LÓGICA DO MENU SANDUÍCHE (NOVO CÓDIGO AQUI)
const mobileMenuButton = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list-mobile'); // Seleciona a lista de navegação

mobileMenuButton.addEventListener('click', () => {
    // Alterna a classe 'active' no botão do menu (para mudar o ícone)
    mobileMenuButton.classList.toggle('active');
    // Alterna a classe 'active' na lista de navegação (para mostrar/esconder o menu)
    navList.classList.toggle('active');
    // Alterna a classe 'no-scroll' no body para evitar a rolagem do fundo quando o menu estiver aberto
    document.body.classList.toggle('no-scroll');
});

// Fechar o menu ao clicar em um link (para uma melhor UX)
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuButton.classList.remove('active');
        navList.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});