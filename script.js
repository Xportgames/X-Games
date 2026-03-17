// Base de datos de juegos
const games = [
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
        downloadUrl: "https://gofile.io/d/ZJWG4n"
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
        downloadUrl: "https://gofile.io/d/ydrhpd"
    },
    {
        id: 18,
        title: "Resident Evil Revelations 2",
        description: "Sumérgete en una aterradora experiencia de terror y supervivencia. Lucha contra hordas de criaturas y descubre los secretos de una isla misteriosa.",
        category: "Terror/supervivencia",
        emoji: "🧟",
        rating: 4.7,
        weight: "18.9 GB",
        image: "images/resident-evil-revelations-2-new.png",
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
    },
    {
        id: 27,
        title: "FIFA 22",
        description: "Experimenta el fútbol en su máxima expresión con FIFA 22. Juega con tus equipos y jugadores favoritos, y compite en los modos más populares.",
        category: "Deportes",
        emoji: "⚽",
        rating: 4.5,
        weight: "57.7 GB",
        image: "images/fifa-22.jpg",
        downloadUrl: "https://gofile.io/d/EDeXpQ"
    },
    {
        id: 28,
        title: "Forza Horizon 5",
        description: "Explora un vibrante mundo abierto en México con carreras ilimitadas y la diversión de conducir cientos de los mejores coches del mundo.",
        category: "Simulación",
        emoji: "🏎️",
        rating: 4.9,
        weight: "171.1 GB",
        image: "images/forza-horizon-5.jpg",
        downloadUrl: "https://tunnel1.dlproxy.uk/download/WrTLulKik3KpjnMuO-0gDohCI1WaybS779E_l6yr1UHGRMFfTkE7B5t5Ys5_N2qu8u6HmpGsrEZKftnkvhgxcvRqn6Pp9kceoiJRSTvPjlW9McV7BJ-xx3usIrf-VTZ9_T7vyRXCDX0mGp_LGc9Nd5PD0vaeFIUe-G5Bhmkay8fEuecVna8DGkS2gcGHKviC1kE5C8XbdTPYaT4GZQSZuUbxfxxm9VXU7628y-HoLWXhBzw8qzwr82cwiw-qpLJ4GZQ_RZZw4eooDEpuj2-nNvweAQybQFOXn7sJx0AAEarg0EX9KbRLTKlQr2hfDfKf_LfVj1cpmEK61hZWnaTrDZB2_oTs7mqO01rlctu50if6Gjj5OP3kKHIGzbJJ0gIDQpyNqBGjb7N2LVhgtYx1svrEwm6995P3cQrvjxTjiPvg8fnsLpPkNPLIcrbtYSxMxz0ei0Cj-gMxXMCQ5dGNnxvNj0DKtUbc-9gp0Yfiql5UqGPiwOs5-YZJQpL9Xpm6T8hdP3ecJQtI6jNA3lRuV1E8tF3mB-f4X9lsEB6lvgTs9iQYWZhdm6dLqr1wm3GxfElJawEB9fqawktDmpCp8yyrOQQ_Re5w7hUR3uiXtSkczUYSR_9n00YjY335YC7L?sig=gmSYVNfwERj-1jTlpyjPhjOzaxJjKNpjCgAVdjenlYY"
    },
    {
        id: 29,
        title: "GTA V",
        description: "Explora la vasta metrópolis de Los Santos y el condado de Blaine en una de las experiencias de mundo abierto más aclamadas. Vive la historia de tres criminales muy diferentes mientras se arriesgan en una serie de atracos peligrosos.",
        category: "Mundo abierto",
        emoji: "🔓",
        rating: 4.9,
        weight: "127.7 GB",
        image: "images/gta-v.png",
        downloadUrl: "https://gofile.io/d/TDabIh"
    },
    {
        id: 30,
        title: "Doom",
        description: "Sumérgete en una experiencia de combate brutal y frenética. Aniquila hordas de demonios con un arsenal devastador en este icónico shooter en primera persona.",
        category: "Disparos/FPS",
        emoji: "🔫",
        rating: 4.9,
        weight: "65.8 GB",
        image: "images/doom.jpg",
        downloadUrl: "https://gofile.io/d/RPbTag"
    },
    {
        id: 31,
        title: "Red Dead Redemption 2",
        description: "Sumérgete en el vasto y despiadado corazón de América. Un épico relato de honor y lealtad en los albores de una nueva era.",
        category: "Aventura",
        emoji: "🤠",
        rating: 4.9,
        weight: "122.1 GB",
        image: "images/rdr2.jpg",
        downloadUrl: "https://gofile.io/d/pdRrzq"
    },
    {
        id: 32,
        title: "Resident Evil 4 Remake",
        description: "Sumérgete en el horror de supervivencia con Leon S. Kennedy en una misión para rescatar a la hija del presidente. Una reimaginación del clásico con gráficos y jugabilidad modernos.",
        category: "Horror",
        emoji: "🧟",
        rating: 4.9,
        weight: "67.4 GB",
        image: "images/re4-remake.jpg",
        downloadUrl: "https://buzzheavier.com/sb3d4wends58"
    },
    {
        id: 33,
        title: "Silent Hill f",
        description: "Sumérgete en una nueva y aterradora historia de Silent Hill ambientada en el Japón de los años 60. Descubre horrores psicológicos y una atmósfera inquietante.",
        category: "Horror",
        emoji: "🌸",
        rating: 4.9,
        weight: "45.6 GB",
        image: "images/silent-hill-f.jpg",
        downloadUrl: "https://buzzheavier.com/sb3d4wends58"
    },
    {
        id: 34,
        title: "Mortal Kombat 11",
        description: "Experimenta la brutalidad de los combates en Mortal Kombat 11. Elige a tus luchadores favoritos y desata combos devastadores en este icónico juego de lucha.",
        category: "Pelea",
        emoji: "🐉",
        rating: 4.9,
        weight: "150.0 GB",
        image: "images/mk11.jpg",
        downloadUrl: "https://tunnel1.dlproxy.uk/download/EWiKZrMPaTbypxhWPBhYijrGt8Hq2Vq0g2NpxYv1er13UPcm6KB_0SymFBQ_dkJ2LTxhNdndwSHk9edhNeoMyoODI_Bh4GNyJE5ZQ--tqVbAEkuG4IVWtUL9-_ulWjXxKAx5ZddHA8N3LqAnvr1C-uNmDw-dIBrhYQNznpp5z2ENiN5YS7DC19OmOS4qp7zBTXHzlAYWgdcDPTzrskVMrorf9DpdvYC_lCco1mw9sgnwl9Ouy7RRVkIkaMgGPmdFCDu__2zkeNfPJn9pfKvKoI8Vmqc0tmXFXHGZ5POO-AIffchRTZ77yLLltLqhuf4ZEP2iSikF7CvXdmqoGu4gC2WermzJ20uHRFFCQ_2qUzESCRwZeVB3O7_tGSVCeUD8h4jBD4sAdvq0JIpv42Id3ENBBPkeWHqoR2VuDbNhcm9mgSW2Qdmv2Yovlit6rQohJ2b2KdZx1D8gY_6QN_LAoPTFyP9Kh5G-Dqht6S8D9qkRpLawOvkL02BuZpOKN04_5NnW4TLqh8rVm3MzqCPofUQbxLV7H-dtu8HmusL9E7P_kJ9_QYH7bzJtDquiJGTGnptSAHHk02jfnTFJ4LS732ZDSb6qSrTJEcbSBWauXfkQOgmzgJQEdGLWQ9z0aU7M?sig=ejf3S8ZFuDAlUYP5mb25enMGwXfD2vjqfxrHZuPnj0k"
    },
    {
        id: 35,
        title: "Forza Horizon 3",
        description: "Explora el vasto y hermoso mundo abierto de Australia en Forza Horizon 3. Compite en emocionantes carreras, realiza acrobacias y personaliza cientos de coches.",
        category: "Simulación",
        emoji: "🏎️",
        rating: 4.8,
        weight: "61.2 GB",
        image: "images/forza-horizon-3.png",
        downloadUrl: "https://orion.dlproxy.uk/download/22caYocy6wa4RiBmhjEtCpl4vToiqPaJibJFkhtXF0DYfbItQdnx5fRsQtFUKtANaOtgZhcHR55-1M6KOh6OIqZRgkM4k9TOZEBWwuQ-YrHnXXyQx8XQRjyoPKx1w2W2G88_O728I8QfZbL70JksIilWHirtjECVkeyj1hrqSfI1f_xuKJCYF3WvQjQ9x-dJ25rg-0UcHfLK6d-aEVfj2D5tqDmQjn1I1B_NstY9xiDCvBMz7hYF1OChNheWg7MbRDQ1cQ_SqONzCqHKZ_GSBCGjAHQFgKFBiJpfmGhPr3bOph-tgUWc1dyFrH8cSURLrrL3SpYouWS9dywRK1G-Pgex0CfFY98NsyQ3jW0ESqq1h-Nt-42WzgnV0RQZ3Cd8d2evLEg9yvhUutL8H-sbN2Smnz-2li1PRmwvA271anFbP3pKfWoX2nly16_fOdt3vdB1FmUBZSAsP-qPsHDEOB_qyVD21dw-ceYu60nGhSHOa99O47NQzBJTpcEQswakMkYKjsl3wkLP_xyhVbA6w0c-zFMAy0KNN9Hy0Sr1isaM6TTUFz-_udFUBLtFlwdjuaSxpg_nqAfxdQhT3w2BHiNc8SKENefhnCL3QITcWW9ARI7snoD83DUJcg6MC7S?sig=T96mvUG4pslMdQaLhnv-VDM7jovFpRFcUxU9RIDq2SE"}
];

// Función para renderizar los juegos
function renderGames(gamesToRender) {
    const gameGrid = document.getElementById('gameGrid');
    gameGrid.innerHTML = ''; // Limpiar la cuadrícula antes de renderizar

    gamesToRender.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="relative group">
                <img src="${game.image}" alt="${game.title}" class="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105">
                    <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-100 transition-opacity duration-300 rounded-lg">
                    <a href="${game.downloadUrl}" target="_blank" class="neon-button">DESCARGAR</a>
                </div>
            </div>
            <div class="mt-4">
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
    });
}

// Renderizar todos los juegos al cargar la página
renderGames(games);

// Función de búsqueda
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.category.toLowerCase().includes(searchTerm)
    );
    renderGames(filteredGames);
});
