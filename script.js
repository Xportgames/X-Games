console.log("script.js has started execution.");

// Base de datos de juegos
const games = [
    {
        id: 1,
        title: "Dark Souls III",
        description: "Sumérgete en un universo de fantasía oscura y desafiante. Domina el combate y la magia para sobrevivir en un mundo en ruinas.",
        category: "rol",
        emoji: "🛡️",
        rating: 4.9,
        weight: "25.0 GB",
        image: "images/dark-souls-3.jpg",
        downloadUrl: "https://gofile.io/d/3EwG3R"
    },
    {
        id: 2,
        title: "Resident Evil 2",
        description: "Revive el clásico del survival horror con gráficos modernos y una jugabilidad renovada. Escapa de Raccoon City en medio de un apocalipsis zombi.",
        category: "terror",
        emoji: "🧟",
        rating: 4.8,
        weight: "26.0 GB",
        image: "images/resident-evil-2.jpg",
        downloadUrl: "https://gofile.io/d/TJy63n"
    },
    {
        id: 3,
        title: "Cyberpunk 2077",
        description: "Explora Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Vive una historia de acción y rol en un futuro distópico.",
        category: "rol",
        emoji: "🤖",
        rating: 4.7,
        weight: "70.0 GB",
        image: "images/cyberpunk-2077.jpg",
        downloadUrl: "https://gofile.io/d/wJg3jP"
    },
    {
        id: 4,
        title: "God of War Ragnarök",
        description: "Acompaña a Kratos y Atreus en un viaje épico a través de los Nueve Reinos en busca de respuestas antes de que llegue el Ragnarök.",
        category: "aventura",
        emoji: "🪓",
        rating: 4.9,
        weight: "84.0 GB",
        image: "images/god-of-war-ragnarok.jpg",
        downloadUrl: "https://gofile.io/d/pWk7jY"
    },
    {
        id: 5,
        title: "Hogwarts Legacy",
        description: "Vive la vida de un estudiante en Hogwarts en el siglo XIX. Crea tu propio legado mágico en este juego de rol de mundo abierto.",
        category: "rol",
        emoji: "🧙",
        rating: 4.8,
        weight: "85.0 GB",
        image: "images/hogwarts-legacy.jpg",
        downloadUrl: "https://gofile.io/d/nKj4hR"
    },
    {
        id: 6,
        title: "Forza Horizon 4",
        description: "Compite en el festival Horizon en una Gran Bretaña histórica. Colecciona, modifica y conduce más de 450 coches en un mundo abierto compartido.",
        category: "carreras",
        emoji: "🏎️",
        rating: 4.9,
        weight: "90.0 GB",
        image: "images/forza-horizon-4.jpg",
        downloadUrl: "https://gofile.io/d/mJg3jP"
    },
    {
        id: 7,
        title: "The Witcher 3: Wild Hunt",
        description: "Encarna a Geralt de Rivia, un cazador de monstruos profesional, en busca de la niña de la profecía en un vasto mundo abierto.",
        category: "rol",
        emoji: "🐺",
        rating: 4.9,
        weight: "50.0 GB",
        image: "images/the-witcher-3.jpg",
        downloadUrl: "https://gofile.io/d/aJg3jP"
    },
    {
        id: 8,
        title: "Hollow Knight",
        description: "Explora un vasto reino de insectos y héroes. Un desafiante juego de acción y aventura en 2D con un estilo artístico único.",
        category: "plataformas",
        emoji: "🐞",
        rating: 4.9,
        weight: "9.0 GB",
        image: "images/hollow-knight.jpg",
        downloadUrl: "https://gofile.io/d/sJg3jP"
    },
    {
        id: 9,
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
        id: 10,
        title: "Resident Evil Village",
        description: "Ethan Winters se adentra en un misterioso pueblo en busca de su hija secuestrada. Una nueva pesadilla de survival horror.",
        category: "terror",
        emoji: "🏰",
        rating: 4.8,
        weight: "35.0 GB",
        image: "images/resident-evil-village.jpg",
        downloadUrl: "https://gofile.io/d/fJg3jP"
    },
    {
        id: 11,
        title: "Detroit: Become Human",
        description: "En un futuro cercano, los androides conviven con los humanos. Tus decisiones determinarán el destino de tres androides y el futuro de Detroit.",
        category: "aventura",
        emoji: "🤖",
        rating: 4.9,
        weight: "55.0 GB",
        image: "images/detroit-become-human.jpg",
        downloadUrl: "https://gofile.io/d/cJg3jP"
    },
    {
        id: 12,
        title: "Valheim",
        description: "Un brutal juego de exploración y supervivencia para 1-10 jugadores, ambientado en un purgatorio generado de forma procedural e inspirado en la cultura vikinga.",
        category: "supervivencia",
        emoji: "🔨",
        rating: 4.8,
        weight: "1.0 GB",
        image: "images/valheim.jpg",
        downloadUrl: "https://gofile.io/d/bJg3jP"
    },
    {
        id: 13,
        title: "Forager",
        description: "Un juego de mundo abierto en 2D inspirado en los juegos de exploración, agricultura y creación. ¡Explora, crea, recolecta y gestiona recursos!",
        category: "aventura",
        emoji: "🎒",
        rating: 4.8,
        weight: "200 MB",
        image: "images/forager.jpg",
        downloadUrl: "https://gofile.io/d/xJg3jP"
    },
    {
        id: 14,
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
        id: 15,
        title: "Sekiro: Shadows Die Twice",
        description: "De los creadores de Dark Souls, un juego de acción y aventura ambientado en el Japón de finales del siglo XVI. Conviértete en el \"lobo de un solo brazo\" y rescata a tu maestro.",
        category: "acción",
        emoji: "⚔️",
        rating: 4.9,
        weight: "25.0 GB",
        image: "images/sekiro.jpg",
        downloadUrl: "https://gofile.io/d/yJg3jP"
    },
    {
        id: 16,
        title: "Mafia: Definitive Edition",
        description: "Remake del clásico de 2002. Asciende en las filas de la mafia durante la era de la Prohibición en una historia de crimen organizado.",
        category: "acción",
        emoji: "🎩",
        rating: 4.8,
        weight: "50.0 GB",
        image: "images/mafia-definitive-edition.jpg",
        downloadUrl: "https://gofile.io/d/zJg3jP"
    },
    {
        id: 17,
        title: "Portal 2",
        description: "Un juego de puzles en primera persona aclamado por la crítica. Vuelve a Aperture Science y usa tu pistola de portales para resolver acertijos aún más desafiantes.",
        category: "puzles",
        emoji: "🌀",
        rating: 4.9,
        weight: "12.0 GB",
        image: "images/portal-2.jpg",
        downloadUrl: "https://gofile.io/d/kJg3jP"
    },
    {
        id: 18,
        title: "Injustice 2",
        description: "Los superhéroes y supervillanos de DC se enfrentan en batallas épicas. Personaliza a tus personajes y lucha en este espectacular juego de peleas.",
        category: "pelea",
        emoji: "💥",
        rating: 4.8,
        weight: "52.0 GB",
        image: "images/injustice-2.jpg",
        downloadUrl: "https://gofile.io/d/lJg3jP"
    },
    {
        id: 19,
        title: "Half-Life",
        description: "El legendario shooter en primera persona que revolucionó la industria. Juega como Gordon Freeman y lucha por tu vida en el complejo de investigación Black Mesa.",
        category: "disparos",
        emoji: "🔫",
        rating: 4.9,
        weight: "400 MB",
        image: "images/half-life.jpg",
        downloadUrl: "https://gofile.io/d/qJg3jP"
    },
    {
        id: 20,
        title: "Subnautica",
        description: "Desciende a las profundidades de un mundo alienígena submarino lleno de maravillas y peligros. Crea equipo, pilota submarinos y sobrevive.",
        category: "supervivencia",
        emoji: "🌊",
        rating: 4.9,
        weight: "20.0 GB",
        image: "images/subnautica.jpg",
        downloadUrl: "https://gofile.io/d/rJg3jP"
    },
    {
        id: 21,
        title: "ARK: Survival Evolved",
        description: "Varado en una misteriosa isla prehistórica, debes cazar, recolectar, construir y domar dinosaurios para sobrevivir.",
        category: "supervivencia",
        emoji: "🦖",
        rating: 4.7,
        weight: "60.0 GB",
        image: "images/ark-survival-evolved.jpg",
        downloadUrl: "https://gofile.io/d/tJg3jP"
    },
    {
        id: 22,
        title: "Resident Evil 7",
        description: "El horror vuelve a sus raíces. Experimenta el survival horror en primera persona y adéntrate en una plantación abandonada en la América rural.",
        category: "terror",
        emoji: "🏚️",
        rating: 4.8,
        weight: "24.0 GB",
        image: "images/resident-evil-7.jpg",
        downloadUrl: "https://gofile.io/d/uJg3jP"
    },
    {
        id: 23,
        title: "The First Berserker: Khazan",
        description: "Un futuro juego de rol de acción hardcore. Conviértete en Khazan, el gran general del imperio Pell Los, y véngate de aquellos que te traicionaron.",
        category: "rol",
        emoji: "👹",
        rating: 4.9,
        weight: "N/A",
        image: "images/the-first-berserker-khazan.jpg",
        downloadUrl: "https://gofile.io/d/vJg3jP"
    },
    {
        id: 24,
        title: "Left 4 Dead 2",
        description: "El clásico shooter cooperativo de zombis. Únete a otros tres supervivientes y lucha contra hordas de infectados en el sur de Estados Unidos.",
        category: "disparos",
        emoji: "🧟",
        rating: 4.9,
        weight: "13.0 GB",
        image: "images/left-4-dead-2.jpg",
        downloadUrl: "https://gofile.io/d/wJg3jP"
    },
    {
        id: 25,
        title: "Split Fiction",
        description: "Un innovador juego de puzles en primera persona donde puedes manipular el tiempo y el espacio para resolver acertijos.",
        category: "puzles",
        emoji: "🌀",
        rating: 4.8,
        weight: "5.0 GB",
        image: "images/split-fiction.jpg",
        downloadUrl: "https://gofile.io/d/xJg3jP"
    },
    {
        id: 26,
        title: "Batman: Arkham Knight",
        description: "Conviértete en Batman y enfréntate a los supervillanos de Gotham en el explosivo final de la serie Arkham. Conduce el Batmóvil y protege la ciudad.",
        category: "acción",
        emoji: "🦇",
        rating: 4.8,
        weight: "55.0 GB",
        image: "images/batman-arkham-knight.jpg",
        downloadUrl: "https://gofile.io/d/yJg3jP"
    },
    {
        id: 27,
        title: "Resident Evil 3",
        description: "Jill Valentine es una de las últimas personas que quedan en Raccoon City que ha sido testigo de las atrocidades de Umbrella. Para detenerla, Umbrella desata su arma secreta definitiva: ¡Nemesis!",
        category: "terror",
        emoji: "🧟",
        rating: 4.8,
        weight: "45.0 GB",
        image: "images/resident-evil-3.jpg",
        downloadUrl: "https://gofile.io/d/zJg3jP"
    },
    {
        id: 28,
        title: "It Takes Two",
        description: "Embárcate en la aventura más alocada de tu vida en It Takes Two, un juego de plataformas que combina géneros y que ha sido creado puramente para el cooperativo.",
        category: "aventura",
        emoji: "👫",
        rating: 4.9,
        weight: "50.0 GB",
        image: "images/it-takes-two.jpg",
        downloadUrl: "https://gofile.io/d/kJg3jP"
    },
    {
        id: 29,
        title: "Elden Ring",
        description: "Levántate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.",
        category: "rol",
        emoji: "👑",
        rating: 4.9,
        weight: "60.0 GB",
        image: "images/elden-ring.jpg",
        downloadUrl: "https://gofile.io/d/lJg3jP"
    },
    {
        id: 30,
        title: "Hitman: The Undying",
        description: "Vuelve a ponerte en la piel del Agente 47 y enfréntate a Mark Faba, \"El Inmortal\", en una misión de alto riesgo.",
        category: "acción",
        emoji: "🤵",
        rating: 4.8,
        weight: "65.0 GB",
        image: "images/hitman-the-undying.jpg",
        downloadUrl: "https://gofile.io/d/mJg3jP"
    },
    {
        id: 31,
        title: "Euro Truck Simulator 2",
        description: "Viaja por Europa como el rey de la carretera, un camionero que entrega cargas importantes a través de distancias impresionantes.",
        category: "simulación",
        emoji: "🚚",
        rating: 4.9,
        weight: "12.0 GB",
        image: "images/euro-truck-simulator-2.jpg",
        downloadUrl: "https://gofile.io/d/nJg3jP"
    },
    {
        id: 32,
        title: "Project Zomboid",
        description: "Un sandbox de supervivencia zombi de mundo abierto. ¿Cómo morirás? Sobrevive solo o con amigos.",
        category: "supervivencia",
        emoji: "🧟",
        rating: 4.8,
        weight: "5.0 GB",
        image: "images/project-zomboid.jpg",
        downloadUrl: "https://gofile.io/d/oJg3jP"
    },
    {
        id: 33,
        title: "Dark Souls Remastered",
        description: "Vuelve a Lordran en una impresionante remasterización en alta definición. Prepárate para morir.",
        category: "rol",
        emoji: "🔥",
        rating: 4.9,
        weight: "8.0 GB",
        image: "images/dark-souls-remastered.jpg",
        downloadUrl: "https://gofile.io/d/pJg3jP"
    },
    {
        id: 34,
        title: "Horizon Zero Dawn Complete Edition",
        description: "Experimenta la legendaria misión de Aloy para desvelar los misterios de un mundo dominado por máquinas mortales.",
        category: "rol",
        emoji: "🏹",
        rating: 4.8,
        weight: "100.0 GB",
        image: "images/horizon-zero-dawn.jpg",
        downloadUrl: "https://gofile.io/d/qJg3jP"
    },
    {
        id: 35,
        title: "The Long Dark",
        description: "Un juego de supervivencia en primera persona que te desafía a pensar por ti mismo mientras exploras una vasta y helada naturaleza salvaje.",
        category: "supervivencia",
        emoji: "❄️",
        rating: 4.8,
        weight: "7.0 GB",
        image: "images/the-long-dark.jpg",
        downloadUrl: "https://gofile.io/d/rJg3jP"
    },
    {
        id: 36,
        title: "Dark Souls II: Scholar of the First Sin",
        description: "La edición definitiva de Dark Souls II. Incluye todo el contenido del juego hasta la fecha en un solo paquete y mucho más.",
        category: "rol",
        emoji: "💀",
        rating: 4.8,
        weight: "23.0 GB",
        image: "images/dark-souls-2.jpg",
        downloadUrl: "https://gofile.io/d/sJg3jP"
    },
    {
        id: 37,
        title: "Dave the Diver",
        description: "Explora el misterioso Blue Hole durante el día y dirige un exótico restaurante de sushi por la noche. Una aventura de rol y gestión con un toque de humor.",
        category: "aventura",
        emoji: "🍣",
        rating: 4.9,
        weight: "10.0 GB",
        image: "images/dave-the-diver.jpg",
        downloadUrl: "https://gofile.io/d/tJg3jP"
    }
];

// Función para renderizar los juegos
function renderGames(gamesToRender) {
    console.log("Attempting to render games. Games array:", gamesToRender);
    try {
        console.log("renderGames called with:", gamesToRender);
        const gameGrid = document.getElementById("gameGrid");
        if (!gameGrid) {
            console.error("Error: #gameGrid element not found in the DOM.");
            return;
        }
        gameGrid.innerHTML = ""; // Limpiar la cuadrícula antes de renderizar
        console.log("gameGrid element:", gameGrid);

        gamesToRender.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.className = "game-card";
            gameCard.innerHTML = `
                <div class="relative group">
                    <img src="${game.image}" alt="${game.title}" class="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105">
                </div>
                <div class="mt-4">
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 rounded-lg">
                        <a href="${game.downloadUrl}" target="_blank" class="neon-button-vertical px-4 py-8 text-lg font-bold flex items-center justify-center">DESCARGAR</a>
                    </div>
                    <h3 class="text-xl font-bold text-white">${game.title}</h3>
                    <p class="text-gray-400 text-sm mt-1">${game.description}</p>
                    <div class="flex items-center justify-between mt-3 text-sm text-gray-300">
                        <span class="font-semibold">⭐ ${game.rating}</span>
                        <span class="font-semibold">${game.category}</span>
                        <span class="font-semibold">${game.weight}</span>
                    </div>
                </div>
            `;
            gameGrid.appendChild(gameCard);
            console.log("Game card appended for:", game.title);
        });
    } catch (error) {
        console.error("Error rendering games:", error);
    }
}

// Renderizar todos los juegos al cargar la página
console.log("Games database initialized. Total games:", games.length);
renderGames(games);

// Función de búsqueda
document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.category.toLowerCase().includes(searchTerm)
    );
    renderGames(filteredGames);
});

// Animación del título
const titleElement = document.querySelector(".hero-section h1");
const originalTitle = "X-PortGame";
let animatedTitle = "";
let index = 0;

function animateTitle() {
    if (index < originalTitle.length) {
        animatedTitle += originalTitle[index];
        titleElement.textContent = animatedTitle;
        index++;
        setTimeout(animateTitle, 200); // Ajusta la velocidad de la animación aquí
    } else {
        setTimeout(() => {
            animatedTitle = "";
            index = 0;
            animateTitle();
        }, 2000); // Espera 2 segundos antes de reiniciar la animación
    }
}

animateTitle();
