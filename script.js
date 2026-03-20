console.log("script.js has started execution.");

// Base de datos de juegos
const games = [
    {
        id: 1,
        title: "Forza Horizon 5",
        description: "Compite en el festival Horizon en México. Explora un vasto mundo abierto con paisajes impresionantes y cientos de los mejores coches del mundo.",
        category: "simulación",
        emoji: "🏎️",
        rating: 4.9,
        weight: "166.0 GB",
        image: "images/forza-horizon-5.jpg",
        downloadUrl: "https://tunnel1.dlproxy.uk/download/WrTLulKik3KpjnMuO-0gDohCI1WaybS779E_l6yr1UHGRMFfTkE7B5t5Ys5_N2qu8u6HmpGsrEZKftnkvhgxcvRqn6Pp9kceoiJRSTvPjlW9McV7BJ-xx3usIrf-VTZ9_T7vyRXCDX0mGp_LGc9Nd5PD0vaeFIUe-G5Bhmkay8fEuecVna8DGkS2gcGHKviC1kE5C8XbdTPYaT4GZQSZuUbxfxxm9VXU7628y-HoLWXhBzw8qzwr82cwiw-qpLJ4GZQ_RZZw4eooDEpuj2-nNvweAQybUFOXn7sJx0AAEarg0EX9KbRLTKlQr2hfDfKf_LfVj1cpmEK61hZWnaTrDZB2_oTs7mqO01rlctu50if6Gjj5OP3kKHIGzbJJ0gIDQpyNqBGjb7N2LVhgtYx1sjvDDb7R7WsMiOC7bxM-sx50pz1xhFamAw0d0J5V4PYeqODIoQGHDaijl5SgEz3KhRKaWIEEn2MXCOH9EHpcsqyc0wQP5umXyUTIZ9Fs0VMLGAxMsKAa-XrueRFygouO8rWIeBxh4i_E6idMzl7S4Fq_igP6dSHg91eMEiQ06clE_dSFMIY6HoRTFgZViiIo08noo_iXXugtxzzRLA7SvPflDcYzikDYIZRr-cDw8xyc"
    }
];

console.log("Games array loaded:", games.length, "games.");

// Función para renderizar los juegos en el catálogo
function renderGames(gameList) {
    console.log("renderGames called with", gameList.length, "games.");
    const gameGrid = document.getElementById(\'gameGrid\');
    if (!gameGrid) {
        console.error("Element with ID \'gameGrid\' not found.");
        return;
    }
    gameGrid.innerHTML = \'\'; // Limpiar el contenido existente

    gameList.forEach(game => {
        const gameCard = `
            <div class="game-card bg-gray-800 rounded-lg shadow-lg overflow-hidden relative group">
                <div class="game-card-image w-full h-48 bg-cover bg-center" style="background-image: url(\'${game.image}\');">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href="${game.downloadUrl}" target="_blank" class="neon-button-vertical text-white text-lg font-bold py-3 px-6 rounded-lg text-center">
                            Descargar
                        </a>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="text-xl font-bold mb-2 text-white">${game.title} ${game.emoji}</h3>
                    <p class="text-gray-400 text-sm mb-2">${game.description}</p>
                    <div class="flex justify-between items-center text-gray-500 text-xs">
                        <span>⭐ ${game.rating}</span>
                        <span>${game.category}</span>
                        <span>${game.weight}</span>
                    </div>
                </div>
            </div>
        `;
        gameGrid.innerHTML += gameCard;
    });
    console.log("Games rendered.");
}

// Función para filtrar juegos
function filterGames() {
    const searchInput = document.getElementById(\'searchInput\').value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchInput) ||
        game.description.toLowerCase().includes(searchInput) ||
        game.category.toLowerCase().includes(searchInput)
    );
    renderGames(filteredGames);
}

// Inicializar el catálogo de juegos al cargar la página
document.addEventListener(\'DOMContentLoaded\', () => {
    console.log("DOMContentLoaded fired.");
    renderGames(games);

    const searchInput = document.getElementById(\'searchInput\');
    if (searchInput) {
        searchInput.addEventListener(\'keyup\', filterGames);
    }
});

// Estilos para el botón de descarga vertical (añadido directamente en JS para prueba, se moverá a CSS)
const style = document.createElement(\'style\');
style.innerHTML = `
.neon-button-vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px; /* Ancho delgado */
    height: 180px; /* Altura grande */
    border: 2px solid #00d4ff; /* Borde neón azul */
    box-shadow: 0 0 10px #00d4ff, inset 0 0 10px rgba(0, 212, 255, 0.2);
    background: linear-gradient(180deg, #0066cc 0%, #0099ff 100%); /* Gradiente vertical */
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    text-decoration: none;
    position: absolute; /* Posicionamiento absoluto para centrar */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: 0; /* Inicialmente oculto */
}

.game-card:hover .neon-button-vertical {
    opacity: 1; /* Visible al pasar el ratón */
}
`;
document.head.appendChild(style);
