// Base de datos de juegos de ejemplo
const games = [
    {
        id: 1,
        title: "Space Runner",
        description: "Vuela a través del espacio evitando asteroides",
        category: "accion",
        emoji: "🚀",
        rating: 4.8
    },
    {
        id: 2,
        title: "Puzzle Master",
        description: "Resuelve desafiantes acertijos lógicos",
        category: "puzzles",
        emoji: "🧩",
        rating: 4.6
    },
    {
        id: 3,
        title: "Speed Racer",
        description: "Compite en emocionantes carreras de velocidad",
        category: "carreras",
        emoji: "🏎️",
        rating: 4.7
    },
    {
        id: 4,
        title: "Quest Adventure",
        description: "Embárcate en una épica aventura de fantasía",
        category: "aventura",
        emoji: "⚔️",
        rating: 4.9
    },
    {
        id: 5,
        title: "Flappy Bird Clone",
        description: "El clásico juego de plataformas",
        category: "accion",
        emoji: "🐦",
        rating: 4.5
    },
    {
        id: 6,
        title: "Sudoku Challenge",
        description: "Desafía tu mente con Sudoku",
        category: "puzzles",
        emoji: "🔢",
        rating: 4.4
    },
    {
        id: 7,
        title: "Drift Kings",
        description: "Domina el arte del drift en la ciudad",
        category: "carreras",
        emoji: "🏁",
        rating: 4.8
    },
    {
        id: 8,
        title: "Treasure Hunt",
        description: "Busca tesoros escondidos en islas misteriosas",
        category: "aventura",
        emoji: "💎",
        rating: 4.7
    },
    {
        id: 9,
        title: "Memory Game",
        description: "Prueba tu memoria con este clásico",
        category: "puzzles",
        emoji: "🧠",
        rating: 4.6
    },
    {
        id: 10,
        title: "The Last of Us II Remastered",
        description: "Sobrevive en un mundo post-apocalíptico lleno de zombies. Mundo abierto épico con gráficos impresionantes.",
        category: "aventura",
        emoji: "🧟",
        rating: 4.9,
        weight: "113.4 GB",
        image: "images/the-last-of-us-2.jpg",
        downloadUrl: "https://gofile.io/d/fKm2WB"
    },
    {
        id: 11,
        title: "Cyberpunk 2077",
        description: "Explora Night City en este épico juego de mundo abierto futurista. Vive una aventura cyberpunk llena de acción, misterio y decisiones que cambian tu destino.",
        category: "futurista",
        emoji: "🤖",
        rating: 4.7,
        weight: "53.8 GB",
        image: "images/cyberpunk-2077.jpg",
        downloadUrl: "https://gofile.io/d/InslV8"
    },
    {
        id: 12,
        title: "Resident Evil 7: Biohazard",
        description: "Sumérgete en un aterrador juego de horror donde la supervivencia es tu único objetivo. Enfrenta horrores indescriptibles en una mansión llena de misterios y peligros.",
        category: "terror",
        emoji: "💩",
        rating: 4.8,
        weight: "62.2 GB",
        image: "images/resident-evil-7.png",
        downloadUrl: "https://gofile.io/d/sOFTi3"
    },
    {
        id: 13,
        title: "Dragon Ball: Sparking! ZERO",
        description: "Vive intensas batallas de lucha en el universo de Dragon Ball. Domina poderosos ataques, transforma tus personajes y derrota a tus rivales en este juego de pelea competitivo.",
        category: "pelea",
        emoji: "🤗",
        rating: 4.9,
        weight: "27.3 GB",
        image: "images/dragon-ball-sparking-zero.png",
        downloadUrl: "https://gofile.io/d/g7jtXk"
    },
    {
        id: 14,
        title: "Resident Evil Village (RE8)",
        description: "Enfrenta horrores en primera persona en este juego de terror inmersivo. Explora un pueblo misterioso lleno de peligros y resuelve acertijos para sobrevivir a la noche mas aterradora.",
        category: "terror",
        emoji: "💩",
        rating: 4.8,
        weight: "79.2 GB",
        image: "images/resident-evil-9.jpg",
        downloadUrl: "https://gofile.io/d/MgwxvP",
        tutorialUrl: "https://youtu.be/kwuB2DtSlKU?si=PQfr7MEiKLkj9L01"
    },
    {
        id: 15,
        title: "Days Gone",
        description: "Sobrevive en un mundo post-apocaliptico infestado de zombies. Monta tu motocicleta, explora vastos paisajes y lucha contra hordas de criaturas en este juego de supervivencia y aventura.",
        category: "supervivencia",
        emoji: "💫",
        rating: 4.7,
        weight: "62.4 GB",
        image: "images/days-gone.png",
        downloadUrl: "https://gofile.io/d/q1cKfc"
    }
];

// Elementos del DOM
const gameGrid = document.getElementById('gameGrid');
const searchInput = document.getElementById('searchInput');
const menuBtn = document.getElementById('menuBtn');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    renderGames(games);
    setupEventListeners();
});

// Renderizar juegos
function renderGames(gamesToRender) {
    gameGrid.innerHTML = '';
    
    if (gamesToRender.length === 0) {
        gameGrid.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-gray-400 text-lg">No se encontraron juegos.</p></div>';
        return;
    }
    
    gamesToRender.forEach((game, index) => {
        const gameCard = createGameCard(game);
        gameCard.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s both`;
        gameGrid.appendChild(gameCard);
    });
}

// Crear tarjeta de juego
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    const imageContent = game.image 
        ? `<img src="${game.image}" alt="${game.title}" class="w-full h-40 object-cover rounded-t-lg">` 
        : `<div class="game-card-image"><span style="font-size: 4rem;">${game.emoji}</span></div>`;
    
    const weightInfo = game.weight ? `<p class="text-xs text-gray-500 mt-1">Peso: ${game.weight}</p>` : '';
    
    const downloadLink = game.downloadUrl ? `href="${game.downloadUrl}" target="_blank"` : 'onclick="downloadGame(\'${game.title}\')"';
    const buttonTag = game.downloadUrl ? 'a' : 'button';
    const buttonAttrs = game.downloadUrl 
        ? `href="${game.downloadUrl}" target="_blank" class="game-card-button" style="display: inline-block; text-decoration: none; text-align: center;"` 
        : `class="game-card-button" onclick="downloadGame(\'${game.title}\')"`;
    
    card.innerHTML = `
        ${imageContent}
        <div class="game-card-content">
            <h3 class="game-card-title">${game.title}</h3>
            <p class="game-card-description">${game.description}</p>
            ${weightInfo}
            <div class="flex justify-between items-center mb-3 mt-3">
                <span class="text-sm text-gray-400">⭐ ${game.rating}</span>
                <span class="text-xs bg-purple-600 bg-opacity-50 px-2 py-1 rounded">${game.category}</span>
            </div>
            <${buttonTag} ${buttonAttrs}>
                Descargar
            </${buttonTag}>
        </div>
    `;
    return card;
}

// Función para descargar (placeholder)
function downloadGame(gameName) {
    alert(`Enlace de descarga para ${gameName} próximamente.\n\nEste juego estará disponible para descargar en breve.`);
}

// Configurar event listeners
function setupEventListeners() {
    // Búsqueda
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = games.filter(game => 
            game.title.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm)
        );
        renderGames(filtered);
    });
    
    // Menú móvil
    menuBtn.addEventListener('click', toggleMobileMenu);
    
    // Filtrar por categoría
    document.querySelectorAll('[data-category]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            const filtered = games.filter(game => game.category === category);
            renderGames(filtered);
        });
    });
}

// Toggle menú móvil
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-menu-open');
}

// Smooth scroll para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Agregar efecto de scroll en header
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});

// Cargar más juegos (simulado)
function loadMoreGames() {
    console.log('Cargando más juegos...');
    // Aquí irían más juegos
}

// Función para filtrar por categoría
function filterByCategory(category) {
    if (category === 'all') {
        renderGames(games);
    } else {
        const filtered = games.filter(game => game.category === category);
        renderGames(filtered);
    }
}

// Exportar funciones para uso global
window.playGame = playGame;
window.filterByCategory = filterByCategory;
