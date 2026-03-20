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
    },
    {
        id: 2,
        title: "Grand Theft Auto V",
        description: "Explora la vasta metrópolis de Los Santos y el condado de Blaine en una de las experiencias de mundo abierto más aclamadas de todos los tiempos.",
        category: "Mundo abierto",
        emoji: "🚗",
        rating: 4.9,
        weight: "117.1 GB",
        image: "images/gta-v.jpg",
        downloadUrl: "https://tunnel1.dlproxy.uk/download/XAJeWO15O4C19Ai3Jvuqitqg5l1_CCncB25Eaa4Z71JAAM2ppGVMblIY3AWDW8k1fY0JuJ6RuqfNreqTDOqV3ZNpqRZ8J8r9qy-NDNYXkXN9_Rr8S9PgywXbtsE4bjoPzO4TiRoCcYrgouBm-EJqtBSiuPQS94EbAoj-N8Q3KvFXq76S-LEYakmKNBoljh6NR3Lc0-hkX_9MNh5lUr1ITUggstA6bZEtIxRo_Kv9RLmmXfs3T98o9V_v4NT8Ab2ou0JQnMjRkE2s-KqGzKQM7b9Q8lJbvyCj_GgjJsImnRbVyPYSY7I1vM1VRyJuraIkBalhyuVYmjIy99Sifxah5nW8rZQai0uzvrZTpxOETso8jxPSUvTB8l4KoWYaYoGEYHSr5KZpEoe57fL8AQ3ma9bQGEdNPj7iY0WLK5iQsR7oe3-o-vsxVTqHXkwbGVp-MZvuDiZyGPelOEnYoWJ2fe5yfJsxbmdIz6ec9KXSnXVgIMVOMAFjCeWI0d3N4J0IR07s--eir2cZ15inCogQMdS2FSEfL-HkpLeUjGBLeFy6Ha4NXxEKrUoZ4_vsQAZ-VvS3AsbKBRRxSDXsprJZw3N8Ms589Jhr6nmStOERT_lnSZbPP5FSR1NlTMVl6Db9"
    }
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        description: "Sumérgete en la épica historia de Arthur Morgan y la banda de Van der Linde en el salvaje oeste americano.",
        category: "Aventura",
        emoji: "🤠",
        rating: 4.9,
        weight: "113.0 GB",
        image: "images/red-dead-redemption-2.jpg",
        downloadUrl: "https://tunnel1.dlproxy.uk/download/XAJeWO15O4C19Ai3Jvuqitqg5l1_CCncB25Eaa4Z71JAAM2ppGVMblIY3AWDW8k1fY0JuJ6RuqfNreqTDOqV3ZNpqRZ8J8r9qy-NDNYXkXN48_c9sUlXH0zDWwpD9s5TiOuBLvSfqaMWzdFJtGvNfwLmeZPL0ZdINewAwJKbsYysAmMLQVccDEyq65RfT-NjauxCflhKXoUP5r7AFoEIwiKMQ_eLKmJConWUvccYiOlXiH0SHoes0p0Z9qDdjESQDw0fQenKisl-vFx-wgK1oE5jFgFsP0oEQkRoVlKbLjx4fyHoBqj5y4rXESFf-ky__JsisoV_ey3C3L2ECdcKe3N0ABIgzussngaGKUBwD8WXC7bZzbJVnHki9a9USi1la8axauJfvDy9bQx95DrFNL3PoQcr2YokNtdjIgAn2Ruz7MLnePy-M5G_NQfE6ZcwzoHYeYHw24RnRIyaBNdHKlGSpou8is2aISZN1yH4kUrcwaHQM12kb6mug14hIcCOuGBu0_p4W-ob8JXdKdo2A3HuzCB7vgPqfYGsz9eaKH4lWAP2PVcUXPH1mCrtdILWHRVsmUyoXjAqjtYqDZPRER_wyn58sEE8pwKqc3elubeq6r_Vrl04-SOGhT_JsGJU"
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
        console.log("Rendering game:", game.title);
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
