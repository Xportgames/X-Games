// Base de datos de juegos
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
        downloadUrl: "https://gofile.io/d/n8pbpi"
    },
    {
        id: 12,
        title: "Resident Evil 7: Biohazard",
        description: "Sumérgete en un aterrador juego de horror donde la supervivencia es tu único objetivo. Enfrenta horrores indescriptibles en una mansión llena de misterios y peligros.",
        category: "terror",
        emoji: "🧟",
        rating: 4.8,
        weight: "62.2 GB",
        image: "images/resident-evil-7-final.jpg",
        downloadUrl: "https://gofile.io/d/sOFTi3"
    },
    {
        id: 13,
        title: "Dragon Ball: Sparking! ZERO",
        description: "Vive intensas batallas de lucha en el universo de Dragon Ball. Domina poderosos ataques, transforma tus personajes y derrota a tus rivales en este juego de pelea competitivo.",
        category: "pelea",
        emoji: "🔥",
        rating: 4.9,
        weight: "27.3 GB",
        image: "images/dragon-ball-sparking-zero.png",
        downloadUrl: "https://gofile.io/d/g7jtXk"
    },
    {
        id: 14,
        title: "Resident Evil Requiem",
        description: "Enfrenta horrores en primera persona en este juego de terror inmersivo. Explora un pueblo misterioso lleno de peligros y resuelve acertijos para sobrevivir a la noche mas aterradora.",
        category: "terror",
        emoji: "🏰",
        rating: 4.8,
        weight: "79.2 GB",
        image: "images/resident-evil-requiem-final.jpg",
        downloadUrl: "https://gofile.io/d/MgwxvP",
        tutorialUrl: "https://youtu.be/kwuB2DtSlKU?si=PQfr7REiKLkj9L01"
    },
    {
        id: 15,
        title: "Days Gone",
        description: "Sobrevive en un mundo post-apocaliptico infestado de zombies. Monta tu motocicleta, explora vastos paisajes y lucha contra hordas de criaturas en este juego de supervivencia y aventura.",
        category: "supervivencia",
        emoji: "🏍️",
        rating: 4.7,
        weight: "62.4 GB",
        image: "images/days-gone-remastered.jpg",
        downloadUrl: "https://gofile.io/d/37brJ0"
    },
    {
        id: 16,
        title: "Spider-Man Remastered",
        description: "Conviértete en el amigable vecino Spider-Man en esta épica aventura de mundo abierto. Balancéate por Nueva York, lucha contra villanos icónicos y vive una historia cinematográfica increíble.",
        category: "mundo abierto/pelea",
        emoji: "🕷️",
        rating: 4.9,
        weight: "57.1 GB",
        image: "images/spiderman-new.jpg",
        downloadUrl: "https://gofile.io/d/6AvFzh"
    },
    {
        id: 17,
        title: "The Last of Us Part I",
        description: "Vive la emotiva historia de Joel y Ellie en este remake completo para PC. Sobrevive en un mundo post-apocalíptico donde cada decisión cuenta y la humanidad está al borde de la extinción.",
        category: "supervivencia/aventura",
        emoji: "🌿",
        rating: 4.9,
        weight: "46.7 GB",
        image: "images/the-last-of-us-1-new.jpg",
        downloadUrl: "https://gofile.io/d/AzB5HX"
    },
    {
        id: 18,
        title: "Resident Evil Revelations 2",
        description: "Sumérgete en una aterradora experiencia de terror y supervivencia. Lucha contra hordas de criaturas y descubre los secretos de una isla misteriosa.",
        category: "Terror/supervivencia",
        emoji: "🧟",
        rating: 4.7,
        weight: "18.9 GB",
        image: "images/resident-evil-revelations-2-v2.jpg",
        downloadUrl: "https://gofile.io/d/Yg1rUY"
    },
    {
        id: 19,
        title: "Forza Horizon 4",
        description: "Experimenta la emoción de un festival automovilístico en un mundo abierto dinámico. Compite, explora y colecciona más de 450 coches.",
        category: "Mundo abierto/simulación",
        emoji: "🏎️",
        rating: 4.9,
        weight: "101.6 GB",
        image: "images/forza-horizon-4-v2.jpg",
        downloadUrl: "https://gofile.io/d/hRF2Xq"
    },
    {
        id: 20,
        title: "Cuphead",
        description: "Un juego de acción clásico centrado en batallas contra jefes. Inspirado en los dibujos animados de los años 30.",
        category: "Aventura",
        emoji: "☕",
        rating: 4.9,
        weight: "5.32 GB",
        image: "images/cuphead.jpg",
        downloadUrl: "https://www.mediafire.com/file/mpcuslg4p43tvsr/Cuphead.rar/file"
    },
    {
        id: 21,
        title: "God of War",
        description: "Embárcate en un viaje épico con Kratos y Atreus en el reino nórdico. Una aventura brutal y emotiva llena de mitología y combate.",
        category: "Aventura",
        emoji: "🪓",
        rating: 4.9,
        weight: "37.2 GB",
        image: "images/god-of-war.jpg",
        downloadUrl: "https://gofile.io/d/OUbvV2"
    },
    {
        id: 22,
        title: "BeamNG.drive",
        description: "Un simulador de vehículos dinámico y realista que ofrece posibilidades ilimitadas. Experimenta choques ultra realistas y una física de conducción inigualable.",
        category: "Simulación",
        emoji: "🚗",
        rating: 4.8,
        weight: "52.0 GB",
        image: "images/beamng-drive.png",
        downloadUrl: "https://gofile.io/d/FbSK7l"
    },
    {
        id: 23,
        title: "Marvel's Spider-Man 2",
        description: "Únete a Peter Parker y Miles Morales en una nueva aventura en la ciudad de Nueva York. Domina nuevas habilidades y enfréntate a villanos icónicos.",
        category: "Mundo abierto/Pelea",
        emoji: "🕷️",
        rating: 4.9,
        weight: "101.6 GB",
        image: "images/spiderman-2.jpg",
        downloadUrl: "https://gofile.io/d/YWmH4C"
    },
    {
        id: 24,
        title: "Stray",
        description: "Perdido, solo y separado de su familia, un gato callejero debe desentrañar un antiguo misterio para escapar de una ciberciudad olvidada y encontrar el camino a casa.",
        category: "Futurista",
        emoji: "🐱",
        rating: 4.7,
        weight: "6.8 GB",
        image: "images/stray.jpg",
        downloadUrl: "https://gofile.io/d/FmkF5V"
    },
    {
        id: 25,
        title: "Silent Hill 2",
        description: "Sumérgete en la niebla de Silent Hill en esta obra maestra del horror psicológico. Explora un pueblo desolado y enfrenta tus demonios internos en una búsqueda de la verdad.",
        category: "Horror",
        emoji: "🌫️",
        rating: 4.9,
        weight: "37.9 GB",
        image: "images/silent-hill-2.jpg",
        downloadUrl: "https://gofile.io/d/zgnYBJ"
    },
    {
        id: 26,
        title: "Dragon Ball FighterZ",
        description: "Experimenta batallas épicas con tus personajes favoritos de Dragon Ball. Un juego de lucha 2.5D con gráficos impresionantes y combos espectaculares.",
        category: "Competitivo",
        emoji: "🔥",
        rating: 4.8,
        weight: "5.7 GB",
        image: "images/dragon-ball-fighterz.jpg",
        downloadUrl: "https://www.mediafire.com/file/zv1z0nrkvgt1dle/Dragon_Ball_FighterZ.zip/file"
    }
];

// Elementos del DOM
const gameGrid = document.getElementById('gameGrid');
const searchInput = document.getElementById('searchInput');
const menuBtn = document.getElementById('menuBtn');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    renderGames(games);
    renderGammaMediaGames();
    setupEventListeners();
});

// Renderizar juegos
function renderGames(gamesToRender) {
    if (!gameGrid) return;
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

// Renderizar juegos de gama media/baja
function renderGammaMediaGames() {
    const gammaMediaGrid = document.getElementById('gammaMediaGrid');
    if (!gammaMediaGrid) return;
    
    // Juegos optimizados para gamas media/baja (peso menor a 70GB y categorías ligeras)
    const gammaMediaGames = games.filter(game => {
        if (!game.weight) return false;
        const weightNum = parseFloat(game.weight);
        return weightNum < 70;
    });
    
    gammaMediaGrid.innerHTML = '';
    
    if (gammaMediaGames.length === 0) {
        gammaMediaGrid.innerHTML = '<div class="text-center py-12"><p class="text-gray-400 text-lg">No hay juegos disponibles en esta categoría.</p></div>';
        return;
    }
    
    gammaMediaGames.forEach((game, index) => {
        const gameCard = createGameCard(game);
        gameCard.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s both`;
        gammaMediaGrid.appendChild(gameCard);
    });
}

// Crear tarjeta de juego estilo YouTube
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    const imageContent = game.image 
        ? `<div class="game-card-image"><img src="${game.image}" alt="${game.title}"></div>` 
        : `<div class="game-card-image"><span style="font-size: 4rem;">${game.emoji}</span></div>`;
    
    const weightInfo = game.weight ? `<span class="text-xs text-gray-400"> • ${game.weight}</span>` : '';
    
    const buttonAttrs = game.downloadUrl 
        ? `href="${game.downloadUrl}" target="_blank" class="game-card-button" style="display: inline-block; text-decoration: none; text-align: center; margin-top: 10px;"` 
        : `class="game-card-button" style="margin-top: 10px;" onclick="downloadGame('${game.title}')"`;
    
    const buttonTag = game.downloadUrl ? 'a' : 'button';
    
    card.innerHTML = `
        ${imageContent}
        <div class="game-card-content">
            <div>
                <h3 class="game-card-title">${game.title}</h3>
                <p class="game-card-description">${game.description}</p>
                <div class="flex items-center mt-1">
                    <span class="text-xs text-gray-400">⭐ ${game.rating}</span>
                    <span class="text-xs text-gray-400 ml-2"> • ${game.category}</span>
                    ${weightInfo}
                </div>
            </div>
            <${buttonTag} ${buttonAttrs}>
                Descargar
            </${buttonTag}>
        </div>
    `;
    return card;
}

// Función para descargar
function downloadGame(gameName) {
    alert(`Enlace de descarga para ${gameName} próximamente.`);
}

// Configurar event listeners
function setupEventListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = games.filter(game => 
                game.title.toLowerCase().includes(searchTerm) ||
                game.description.toLowerCase().includes(searchTerm)
            );
            renderGames(filtered);
        });
    }
    
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }
}

// Toggle menú móvil
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('mobile-menu-open');
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Función para filtrar por categoría
function filterByCategory(category) {
    if (category === 'all') {
        renderGames(games);
    } else {
        const filtered = games.filter(game => game.category.toLowerCase().includes(category.toLowerCase()));
        renderGames(filtered);
    }
}

// Exportar funciones
window.filterByCategory = filterByCategory;
window.renderGammaMediaGames = renderGammaMediaGames;
