// Dados das redações - VERSÃO SUPER SIMPLES
const redacoes = [
    { id: 1, titulo: "Redação 1 - Por que procedimentos estéticos estão aumentando entre os jovens", descricao: "O início da minha jornada na escrita", arquivo: "imagens/redacao 1.jpg", imagem: "imagens/redacao 1.jpg" },
    { id: 2, titulo: "Redação 2 - Acessibilidade e inclusão de pessoas com deficiência no Brasil", descricao: "Desenvolvendo o pensamento crítico", arquivo: "imagens/redacao 2.jpg", imagem: "imagens/redacao 2.jpg" },
    { id: 3, titulo: "Redação 3 - Principais fatores que influenciam na qualidade de vida e no bem-estar da população", descricao: "Aprendendo a defender minhas ideias", arquivo: "imagens/redacao 3.jpg", imagem: "imagens/redacao 3.jpg" },
    { id: 4, titulo: "Redação 4 - As mudanças climáticas no Brasil e seus desafios", descricao: "Ampliando meus horizontes literários", arquivo: "imagens/redacao 4.jpg", imagem: "imagens/redacao 4.jpg" },
    { id: 5, titulo: "Redação 5 - As consequências do descarte de lixo eletrônico", descricao: "Descobrindo a força da linguagem", arquivo: "imagens/redacao 5.jpg", imagem: "imagens/redacao 5.jpg" },
    { id: 6, titulo: "Redação 6 - O consumo de ultraprocessados e suas consequências para a saúde", descricao: "Reflexões sobre minha evolução", arquivo: "imagens/redacao 6.jpg", imagem: "imagens/redacao 6.jpg" },
    { id: 7, titulo: "Redação 7 - Fatores e efeitos da dependência em jogos de aposta", descricao: "Lidando com temas complexos", arquivo: "imagens/redacao 7.jpg", imagem: "imagens/redacao 7.jpg" },
    { id: 8, titulo: "Redação 8 - A importância do trabalho voluntário no combate à desigualdade social", descricao: "Relacionando leituras e vivências", arquivo: "imagens/redacao 8.jpg", imagem: "imagens/redacao 8.jpg" },
    { id: 9, titulo: "Redação 9 - Adultização Infantil – Consequências da perda irreparável da Infância", descricao: "Desenvolvendo meu estilo único", arquivo: "imagens/redacao 9.jpg", imagem: "imagens/redacao 9.jpg" },
    { id: 10, titulo: "Redação 10 - Caminhos para combater o etarismo nas relações sociais", descricao: "Abordando questões existenciais", arquivo: "imagens/redacao 10.jpg", imagem: "imagens/redacao 10.jpg" },
    { id: 11, titulo: "Redação 11 - A importância da educação financeira para os jovens", descricao: "Exercitando o pensamento crítico", arquivo: "imagens/redacao 11.jpg", imagem: "imagens/redacao 11.jpg" },
    { id: 12, titulo: "Redação 12 - Desafio para a valorização da cultura popular brasileira", descricao: "Preparando-me para o final", arquivo: "imagens/redacao 12.jpg", imagem: "imagens/redacao 12.jpg" },
    { id: 13, titulo: "Redação 13 - Caminhos para a universalização do saneamento básico no Brasil", descricao: "Reunindo conhecimentos adquiridos", arquivo: "imagens/redacao 13.jpg", imagem: "imagens/redacao 13.jpg" },
    { id: 14, titulo: "Redação 14 - O papel do esporte como ferramenta de transformação social", descricao: "Projetando sonhos e planos", arquivo: "imagens/redacao 14.jpg", imagem: "imagens/redacao 14.jpg" },
    { id: 15, titulo: "Redação 15 - Quem sou eu no mundo?", descricao: "Minha última redação do ano", arquivo: "imagens/redacao 15.jpg", imagem: "imagens/redacao 15.jpg" }
];

// Menu Mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Carregar redações - FUNÇÃO ATUALIZADA
function carregarRedacoes() {
    const grid = document.getElementById('redacoesGrid');
    
    redacoes.forEach(redacao => {
        const card = document.createElement('div');
        card.className = 'redacao-card fade-in';
        card.innerHTML = `
            <div class="imagem-redacao">
                <img src="${redacao.imagem}" alt="${redacao.titulo}">
            </div>
            <h3>${redacao.titulo}</h3>
            <p>${redacao.descricao}</p>
            <div class="botoes-redacao">
                <a href="${redacao.arquivo}" target="_blank" class="btn">
                    <i class="fas fa-eye"></i> Ver Redação
                </a>
            </div>
            <br>
            <small style="color: #666; margin-top: 10px; display: block;">
                <i class="fas fa-info-circle"></i> Para voltar: feche a guia da imagem
            </small>
        `;
        grid.appendChild(card);
    });
}

// Busca em tempo real
document.getElementById('search').addEventListener('input', function(e) {
    const termo = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.redacao-card');
    
    cards.forEach(card => {
        const titulo = card.querySelector('h3').textContent.toLowerCase();
        const descricao = card.querySelector('p').textContent.toLowerCase();
        
        if (titulo.includes(termo) || descricao.includes(termo)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Rolagem suave
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Ativar links do menu durante a rolagem
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    carregarRedacoes();
    
    // Adicionar delay para animação
    const cards = document.querySelectorAll('.fade-in');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});