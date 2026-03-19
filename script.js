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
        description: "Un innovador juego de puzles en primera persona donde puedes manipular el tiempo y el espacio para resolver acertijos complejos y avanzar en una narrativa intrigante.",
        category: "puzles",
        emoji: "🧩",
        rating: 4.7,
        weight: "15.0 GB",
        image: "images/split-fiction.jpg",
        downloadUrl: "https://gofile.io/d/xJg3jP"
    },
    {
        id: 26,
        title: "Batman: Arkham Knight",
        description: "Conviértete en Batman y protege Gotham City del Espantapájaros y otros villanos. Explora un vasto mundo abierto y utiliza el Batmóvil en este épico final de la saga Arkham.",
        category: "acción",
        emoji: "🦇",
        rating: 4.9,
        weight: "45.0 GB",
        image: "images/batman-arkham-knight.jpg",
        downloadUrl: "https://gofile.io/d/yJg3jP"
    },
    {
        id: 27,
        title: "Resident Evil 3",
        description: "Jill Valentine debe escapar de Raccoon City mientras es perseguida por la imparable arma biológica, Nemesis. Un remake del clásico de terror.",
        category: "terror",
        emoji: "🧟‍♀️",
        rating: 4.7,
        weight: "43.0 GB",
        image: "images/resident-evil-3.jpg",
        downloadUrl: "https://gofile.io/d/zJg3jP"
    },
    {
        id: 28,
        title: "It Takes Two",
        description: "Un juego de aventura cooperativo diseñado exclusivamente para dos jugadores. Embárcate en un viaje mágico y emocional para salvar una relación rota.",
        category: "aventura",
        emoji: "👫",
        rating: 4.9,
        weight: "50.0 GB",
        image: "images/it-takes-two.jpg",
        downloadUrl: "https://gofile.io/d/aKg3jP"
    },
    {
        id: 29,
        title: "Elden Ring",
        description: "Un épico juego de rol de acción en un vasto mundo de fantasía oscura. Lucha contra poderosos enemigos y descubre los secretos de las Tierras Intermedias.",
        category: "rol",
        emoji: "💍",
        rating: 4.9,
        weight: "60.0 GB",
        image: "images/elden-ring.jpg",
        downloadUrl: "https://gofile.io/d/bKg3jP"
    },
    {
        id: 30,
        title: "Hitman: The Undying",
        description: "Conviértete en el Agente 47 y elimina objetivos de alto perfil en este juego de sigilo y asesinato. Utiliza tu ingenio y tus habilidades para completar misiones en todo el mundo.",
        category: "sigilo",
        emoji: "🤵",
        rating: 4.8,
        weight: "70.0 GB",
        image: "images/hitman-the-undying.jpg",
        downloadUrl: "https://gofile.io/d/cKg3jP"
    },
    {
        id: 31,
        title: "Euro Truck Simulator 2",
        description: "Experimenta la vida de un camionero en Europa. Entrega cargas, construye tu propia empresa de transporte y explora un vasto mundo abierto.",
        category: "simulación",
        emoji: "🚚",
        rating: 4.7,
        weight: "5.0 GB",
        image: "images/euro-truck-simulator-2.jpg",
        downloadUrl: "https://gofile.io/d/dKg3jP"
    },
    {
        id: 32,
        title: "Project Zomboid",
        description: "Un juego de supervivencia de zombis en un mundo abierto. Lucha por tu vida, construye refugios, busca recursos y evita ser mordido en este implacable apocalipsis.",
        category: "supervivencia",
        emoji: "🧟‍♂️",
        rating: 4.8,
        weight: "2.0 GB",
        image: "images/project-zomboid.jpg",
        downloadUrl: "https://gofile.io/d/eKg3jP"
    },
    {
        id: 33,
        title: "Dark Souls: Remastered",
        description: "Revive el aclamado clásico que definió el género. Explora un mundo oscuro y desafiante, lucha contra enemigos formidables y descubre la verdad detrás de Lordran.",
        category: "rol",
        emoji: "🔥",
        rating: 4.9,
        weight: "20.0 GB",
        image: "images/dark-souls-remastered.jpg",
        downloadUrl: "https://gofile.io/d/fKg3jP"
    },
    {
        id: 34,
        title: "Horizon Zero Dawn Complete Edition",
        description: "En un futuro post-apocalíptico dominado por máquinas, Aloy, una hábil cazadora, debe descubrir los misterios de su pasado y el destino de la humanidad.",
        category: "rol",
        emoji: "🏹",
        rating: 4.9,
        weight: "60.0 GB",
        image: "images/horizon-zero-dawn.jpg",
        downloadUrl: "https://gofile.io/d/gKg3jP"
    },
    {
        id: 35,
        title: "The Long Dark",
        description: "Un juego de supervivencia en primera persona ambientado en la fría y desolada naturaleza canadiense después de un desastre geomagnético. Lucha contra el frío, el hambre y la vida salvaje.",
        category: "supervivencia",
        emoji: "❄️",
        rating: 4.8,
        weight: "7.0 GB",
        image: "images/the-long-dark.jpg",
        downloadUrl: "https://gofile.io/d/hKg3jP"
    },
    {
        id: 36,
        title: "Dark Souls II: Scholar of the First Sin",
        description: "Adéntrate en el reino de Drangleic y enfréntate a la maldición de los no muertos. Una versión mejorada del desafiante juego de rol de acción.",
        category: "rol",
        emoji: "💀",
        rating: 4.7,
        weight: "23.0 GB",
        image: "images/dark-souls-2.jpg",
        downloadUrl: "https://gofile.io/d/iKg3jP"
    },
    {
        id: 37,
        title: "Dave the Diver",
        description: "Un juego de aventura y gestión de restaurantes donde buceas en el día para pescar y sirves sushi por la noche. Descubre los misterios del Gran Agujero Azul.",
        category: "aventura",
        emoji: "🍣",
        rating: 4.9,
        weight: "10.0 GB",
        image: "images/dave-the-diver.jpg",
        downloadUrl: "https://gofile.io/d/jKg3jP"
    },
    {
        id: 38,
        title: "Lies of P",
        description: "Inspirado en Pinocho, este oscuro cuento de hadas te lleva a la ciudad de Krat, donde las marionetas se han vuelto locas. Lucha contra horribles criaturas y descubre la verdad.",
        category: "rol",
        emoji: "⚙️",
        rating: 4.8,
        weight: "35.0 GB",
        image: "images/lies-of-p.jpg",
        downloadUrl: "https://gofile.io/d/kKg3jP"
    },
    {
        id: 39,
        title: "Brotato",
        description: "Un roguelite de disparos de arena con vista cenital donde juegas como una patata que empuña hasta seis armas a la vez para luchar contra hordas de alienígenas.",
        category: "roguelite",
        emoji: "🥔",
        rating: 4.9,
        weight: "200 MB",
        image: "images/brotato.jpg",
        downloadUrl: "https://gofile.io/d/lKg3jP"
    },
    {
        id: 40,
        title: "7 Days to Die",
        description: "Un juego de supervivencia de mundo abierto que combina elementos de shooter en primera persona, defensa de torres, rol y terror. Lucha por sobrevivir en un mundo post-apocalíptico infestado de zombis.",
        category: "supervivencia",
        emoji: "🧟",
        rating: 4.7,
        weight: "12.0 GB",
        image: "images/7-days-to-die.jpg",
        downloadUrl: "https://gofile.io/d/mKg3jP"
    },
    {
        id: 41,
        title: "The Witcher: Enhanced Edition",
        description: "El inicio de la saga de Geralt de Rivia. Un juego de rol con una historia madura y un sistema de combate único.",
        category: "rol",
        emoji: "⚔️",
        rating: 4.6,
        weight: "15.0 GB",
        image: "images/the-witcher-enhanced-edition.jpg",
        downloadUrl: "https://gofile.io/d/nKg3jP"
    },
    {
        id: 42,
        title: "Hades",
        description: "Un roguelike de acción donde desafías al dios de la muerte mientras te abres paso a golpes fuera del Inframundo. Desbloquea poderosas mejoras y descubre la historia de Zagreus.",
        category: "roguelike",
        emoji: "💀",
        rating: 4.9,
        weight: "15.0 GB",
        image: "images/hades.jpg",
        downloadUrl: "https://gofile.io/d/oKg3jP"
    },
    {
        id: 43,
        title: "Borderlands 3",
        description: "El shooter-looter original regresa con miles de millones de armas y una aventura caótica. Ábrete paso por nuevos mundos y enemigos en este frenético juego de disparos.",
        category: "disparos",
        emoji: "🔫",
        rating: 4.7,
        weight: "75.0 GB",
        image: "images/borderlands-3.jpg",
        downloadUrl: "https://gofile.io/d/pKg3jP"
    },
    {
        id: 44,
        title: "Escape from Duckov",
        description: "Un juego de disparos táctico en primera persona con elementos de rol. Escapa de la ciudad de Duckov, infestada de patos mutantes, en este desafiante juego de supervivencia.",
        category: "disparos",
        emoji: "🦆",
        rating: 4.5,
        weight: "20.0 GB",
        image: "images/escape-from-duckov.jpg",
        downloadUrl: "https://gofile.io/d/qKg3jP"
    },
    {
        id: 45,
        title: "A Story About Farting",
        description: "Una aventura humorística donde el protagonista debe usar sus habilidades de flatulencia para resolver puzles y avanzar en la historia. Un juego único y divertido.",
        category: "aventura",
        emoji: "💨",
        rating: 4.0,
        weight: "500 MB",
        image: "images/a-story-about-farting.jpg",
        downloadUrl: "https://gofile.io/d/rKg3jP"
    },
    {
        id: 46,
        title: "Dredge",
        description: "Un juego de pesca de terror lovecraftiano. Explora un archipiélago de islas remotas, vende tus capturas y mejora tu barco, pero ten cuidado con lo que acecha en las profundidades.",
        category: "terror",
        emoji: "🎣",
        rating: 4.8,
        weight: "2.0 GB",
        image: "images/dredge.jpg",
        downloadUrl: "https://gofile.io/d/sKg3jP"
    },
    {
        id: 47,
        title: "Earn to Die 2",
        description: "Conduce tu camino a través de un apocalipsis zombi. Mejora tu vehículo y aplasta hordas de muertos vivientes en este frenético juego de carreras y supervivencia.",
        category: "carreras",
        emoji: "🚗",
        rating: 4.6,
        weight: "300 MB",
        image: "images/earn-to-die-2.jpg",
        downloadUrl: "https://gofile.io/d/tKg3jP"
    },
    {
        id: 48,
        title: "Grapples Galore",
        description: "Un juego de plataformas de acción con ganchos. Balanceate, salta y lucha a través de niveles desafiantes en este emocionante juego de plataformas.",
        category: "plataformas",
        emoji: " grappling_hook",
        rating: 4.5,
        weight: "1.0 GB",
        image: "images/grapples-galore.jpg",
        downloadUrl: "https://gofile.io/d/uKg3jP"
    },
    {
        id: 49,
        title: "Hide and Seek",
        description: "Un juego de terror multijugador donde un jugador es el cazador y los demás son los supervivientes. Escóndete, corre y sobrevive en este emocionante juego de terror.",
        category: "terror",
        emoji: "👻",
        rating: 4.2,
        weight: "5.0 GB",
        image: "images/hide-and-seek.jpg",
        downloadUrl: "https://gofile.io/d/vKg3jP"
    },
    {
        id: 50,
        title: "Kitchen Wars",
        description: "Un frenético juego de cocina multijugador donde compites contra otros chefs para preparar los platos más deliciosos. ¡Corta, cocina y sirve en este divertido juego de cocina!",
        category: "simulación",
        emoji: "🍳",
        rating: 4.0,
        weight: "2.0 GB",
        image: "images/kitchen-wars.jpg",
        downloadUrl: "https://gofile.io/d/wKg3jP"
    },
    {
        id: 51,
        title: "Elden Ring Nightreign",
        description: "Una expansión no oficial de Elden Ring con nuevos jefes, áreas y equipos. Explora un mundo aún más oscuro y desafiante en esta épica aventura de rol.",
        category: "rol",
        emoji: "🌑",
        rating: 4.9,
        weight: "70.0 GB",
        image: "images/elden-ring-nightreign.jpg",
        downloadUrl: "https://gofile.io/d/xKg3jP"
    },
    {
        id: 52,
        title: "Cult of the Lamb",
        description: "Funda tu propio culto en una tierra de falsos profetas, aventurándote en regiones diversas y misteriosas para construir una leal comunidad de adoradores del bosque y difundir tu Palabra.",
        category: "roguelike",
        emoji: "🐑",
        rating: 4.8,
        weight: "1.5 GB",
        image: "images/cult-of-the-lamb.jpg",
        downloadUrl: "https://gofile.io/d/yKg3jP"
    },
    {
        id: 53,
        title: "Heavy Rain",
        description: "Un thriller psicológico donde tus decisiones afectan la historia. Busca al Asesino del Origami en esta intensa aventura narrativa.",
        category: "aventura",
        emoji: "🌧️",
        rating: 4.7,
        weight: "20.0 GB",
        image: "images/heavy-rain.jpg",
        downloadUrl: "https://gofile.io/d/zKg3jP"
    },
    {
        id: 54,
        title: "State of Decay 2: Juggernaut Edition",
        description: "Un juego de supervivencia de zombis en mundo abierto. Construye tu comunidad, gestiona recursos y lucha contra hordas de muertos vivientes en este desafiante juego de supervivencia.",
        category: "supervivencia",
        emoji: "🧟",
        rating: 4.6,
        weight: "25.0 GB",
        image: "images/state-of-decay-2.jpg",
        downloadUrl: "https://gofile.io/d/aLg3jP"
    },
    {
        id: 55,
        title: "Risk of Rain 2",
        description: "Un roguelike de acción en tercera persona. Lucha contra hordas de monstruos, desbloquea nuevos personajes y objetos, y escapa de un planeta alienígena en este frenético juego de disparos.",
        category: "roguelike",
        emoji: "🌧️",
        rating: 4.9,
        weight: "5.0 GB",
        image: "images/risk-of-rain-2.jpg",
        downloadUrl: "https://gofile.io/d/bLg3jP"
    },
    {
        id: 56,
        title: "Mad Max",
        description: "Conviértete en Mad Max y lucha por sobrevivir en un vasto mundo post-apocalíptico. Conduce vehículos personalizados, lucha contra bandas de merodeadores y busca la paz en este juego de acción y aventura.",
        category: "acción",
        emoji: "🚗",
        rating: 4.7,
        weight: "32.0 GB",
        image: "images/mad-max.jpg",
        downloadUrl: "https://gofile.io/d/cLg3jP"
    },
    {
        id: 57,
        title: "Nine Sols",
        description: "Un juego de plataformas de acción en 2D con un estilo artístico único. Explora un mundo misterioso, lucha contra enemigos desafiantes y descubre los secretos de los Nueve Soles.",
        category: "plataformas",
        emoji: "☀️",
        rating: 4.8,
        weight: "10.0 GB",
        image: "images/nine-sols.jpg",
        downloadUrl: "https://gofile.io/d/dLg3jP"
    },
    {
        id: 58,
        title: "Metro: Last Light Complete Edition",
        description: "Sobrevive en los túneles del metro de Moscú después de un apocalipsis nuclear. Lucha contra mutantes y facciones enemigas en este intenso shooter en primera persona.",
        category: "disparos",
        emoji: "🚇",
        rating: 4.7,
        weight: "10.0 GB",
        image: "images/metro-last-light.jpg",
        downloadUrl: "https://gofile.io/d/eLg3jP"
    },
    {
        id: 59,
        title: "No Rest for the Wicked",
        description: "Un juego de rol de acción oscuro y desafiante. Lucha contra monstruos, explora un mundo gótico y descubre los secretos de la plaga que asola la tierra.",
        category: "rol",
        emoji: "⚔️",
        rating: 4.9,
        weight: "30.0 GB",
        image: "images/no-rest-for-the-wicked.jpg",
        downloadUrl: "https://gofile.io/d/fLg3jP"
    },
    {
        id: 60,
        title: "Thief Simulator",
        description: "Conviértete en un ladrón profesional. Planifica tus robos, entra en casas, roba objetos de valor y escapa sin ser detectado en este juego de simulación.",
        category: "simulación",
        emoji: "💰",
        rating: 4.5,
        weight: "5.0 GB",
        image: "images/thief-simulator.jpg",
        downloadUrl: "https://gofile.io/d/gLg3jP"
    },
    {
        id: 61,
        title: "Prey",
        description: "Despierta a bordo de la Talos I, una estación espacial orbitando la Luna en 2032. Eres el sujeto clave de un experimento que pretende alterar la humanidad para siempre, pero algo ha salido terriblemente mal.",
        category: "disparos",
        emoji: "👽",
        rating: 4.7,
        weight: "45.0 GB",
        image: "images/prey.jpg",
        downloadUrl: "https://gofile.io/d/hLg3jP"
    },
    {
        id: 62,
        title: "The Evil Within 2",
        description: "El detective Sebastian Castellanos debe sumergirse en el mundo de STEM para salvar a su hija. Un juego de terror psicológico con una atmósfera inquietante y enemigos aterradores.",
        category: "terror",
        emoji: "🧠",
        rating: 4.7,
        weight: "40.0 GB",
        image: "images/the-evil-within-2.jpg",
        downloadUrl: "https://gofile.io/d/iLg3jP"
    },
    {
        id: 63,
        title: "Borderlands 2",
        description: "Regresa a Pandora en busca de una nueva cámara llena de tesoros. Juega como uno de los cuatro nuevos buscadores de la cámara y lucha contra el tirano Handsome Jack en este frenético shooter-looter.",
        category: "disparos",
        emoji: "🔫",
        rating: 4.8,
        weight: "13.0 GB",
        image: "images/borderlands-2.jpg",
        downloadUrl: "https://gofile.io/d/jLg3jP"
    },
    {
        id: 64,
        title: "Half-Life 2",
        description: "Gordon Freeman debe luchar contra la ocupación alienígena de la Tierra. Un shooter en primera persona aclamado por la crítica con una historia profunda y una jugabilidad innovadora.",
        category: "disparos",
        emoji: "🔫",
        rating: 4.9,
        weight: "7.0 GB",
        image: "images/half-life-2.jpg",
        downloadUrl: "https://gofile.io/d/kLg3jP"
    },
    {
        id: 65,
        title: "Grounded: Fully Yoked Edition",
        description: "Encogido al tamaño de una hormiga, debes sobrevivir en un patio trasero gigante. Construye bases, fabrica herramientas y lucha contra insectos en este juego de supervivencia cooperativo.",
        category: "supervivencia",
        emoji: "🐜",
        rating: 4.8,
        weight: "10.0 GB",
        image: "images/grounded.jpg",
        downloadUrl: "https://gofile.io/d/lLg3jP"
    },
    {
        id: 66,
        title: "Supermarket Simulator Prologue",
        description: "Experimenta la vida de un gerente de supermercado. Abastece estantes, atiende clientes y gestiona tu negocio en este divertido juego de simulación.",
        category: "simulación",
        emoji: "🛒",
        rating: 4.5,
        weight: "2.0 GB",
        image: "images/supermarket-simulator.jpg",
        downloadUrl: "https://gofile.io/d/mLg3jP"
    },
    {
        id: 67,
        title: "Civilization VI",
        description: "Construye un imperio que resista el paso del tiempo. Lidera tu civilización desde la Edad de Piedra hasta la Era Espacial y domina el mundo a través de la guerra, la diplomacia o la cultura.",
        category: "estrategia",
        emoji: "🌍",
        rating: 4.8,
        weight: "12.0 GB",
        image: "images/civilization-6.jpg",
        downloadUrl: "https://gofile.io/d/nLg3jP"
    },
    {
        id: 68,
        title: "The Wolf Among Us",
        description: "Un juego de aventura gráfica basado en los cómics de Fables. Juega como Bigby Wolf, el sheriff de Fabletown, y resuelve un misterio de asesinato en este oscuro cuento de hadas.",
        category: "aventura",
        emoji: "🐺",
        rating: 4.9,
        weight: "10.0 GB",
        image: "images/the-wolf-among-us.jpg",
        downloadUrl: "https://gofile.io/d/oLg3jP"
    },
    {
        id: 69,
        title: "Ender Lilies: Quietus of the Knights",
        description: "Un oscuro juego de rol de acción en 2D. Explora un reino en ruinas, lucha contra enemigos corrompidos y descubre la verdad detrás de la lluvia mortal.",
        category: "rol",
        emoji: "🌸",
        rating: 4.8,
        weight: "5.0 GB",
        image: "images/ender-lilies.jpg",
        downloadUrl: "https://gofile.io/d/pLg3jP"
    },
    {
        id: 70,
        title: "The Survivalists",
        description: "Un juego de supervivencia y construcción de bases en un mundo generado de forma procedural. Explora islas, fabrica herramientas, construye refugios y entrena monos para ayudarte a sobrevivir.",
        category: "supervivencia",
        emoji: "🐒",
        rating: 4.6,
        weight: "2.0 GB",
        image: "images/the-survivalists.jpg",
        downloadUrl: "https://gofile.io/d/qLg3jP"
    },
    {
        id: 71,
        title: "Soulmask",
        description: "Un juego de rol de acción con elementos de supervivencia. Explora un mundo misterioso, lucha contra criaturas míticas y descubre los secretos de la máscara del alma.",
        category: "rol",
        emoji: "🎭",
        rating: 4.7,
        weight: "25.0 GB",
        image: "images/soulmask.jpg",
        downloadUrl: "https://gofile.io/d/rLg3jP"
    },
    {
        id: 72,
        title: "Cakey's Twisted Bakery",
        description: "Un juego de terror psicológico en primera persona. Explora una panadería abandonada, resuelve puzles y escapa de las horribles criaturas que acechan en la oscuridad.",
        category: "terror",
        emoji: "🍰",
        rating: 4.0,
        weight: "3.0 GB",
        image: "images/cakeys-twisted-bakery.jpg",
        downloadUrl: "https://gofile.io/d/sLg3jP"
    },
    {
        id: 73,
        title: "Stardew Valley",
        description: "Un juego de simulación de vida y agricultura. Crea tu propia granja, cultiva cosechas, cría animales, pesca, explora cuevas y hazte amigo de los habitantes del pueblo.",
        category: "simulación",
        emoji: "🚜",
        rating: 4.9,
        weight: "500 MB",
        image: "images/stardew-valley.jpg",
        downloadUrl: "https://gofile.io/d/tLg3jP"
    },
    {
        id: 74,
        title: "Bloons TD 6",
        description: "Un juego de defensa de torres con monos. Construye torres, mejora tus defensas y explota hordas de globos en este adictivo juego de estrategia.",
        category: "estrategia",
        emoji: "🐒",
        rating: 4.8,
        weight: "1.0 GB",
        image: "images/bloons-td-6.jpg",
        downloadUrl: "https://gofile.io/d/uLg3jP"
    },
    {
        id: 75,
        title: "Killing Floor 2",
        description: "Un frenético shooter cooperativo en primera persona. Lucha contra hordas de Zeds mutantes, mejora tus armas y sobrevive en este sangriento juego de acción.",
        category: "disparos",
        emoji: "🔫",
        rating: 4.7,
        weight: "60.0 GB",
        image: "images/killing-floor-2.jpg",
        downloadUrl: "https://gofile.io/d/vLg3jP"
    },
    {
        id: 76,
        title: "What the Pak?!",
        description: "Un juego de plataformas de puzles con un estilo artístico único. Resuelve puzles, evita trampas y explora un mundo surrealista en este desafiante juego de plataformas.",
        category: "plataformas",
        emoji: "📦",
        rating: 4.5,
        weight: "1.0 GB",
        image: "images/what-the-pak.jpg",
        downloadUrl: "https://gofile.io/d/wLg3jP"
    },
    {
        id: 77,
        title: "Resident Evil: Resistance",
        description: "Un juego multijugador asimétrico ambientado en el universo de Resident Evil. Un Mastermind intenta detener a cuatro supervivientes en una serie de experimentos mortales.",
        category: "terror",
        emoji: "🧟",
        rating: 4.0,
        weight: "20.0 GB",
        image: "images/resident-evil-resistance.jpg",
        downloadUrl: "https://gofile.io/d/xLg3jP"
    },
    {
        id: 78,
        title: "Field of Glory II: Medieval",
        description: "Un juego de estrategia por turnos ambientado en la Edad Media. Lidera tus ejércitos en batallas históricas, gestiona tus recursos y conquista Europa.",
        category: "estrategia",
        emoji: "⚔️",
        rating: 4.6,
        weight: "5.0 GB",
        image: "images/field-of-glory-2-medieval.jpg",
        downloadUrl: "https://gofile.io/d/yLg3jP"
    },
    {
        id: 79,
        title: "Bail X Pit",
        description: "Un juego de plataformas de acción con un estilo artístico retro. Salta, corre y lucha a través de niveles desafiantes en este emocionante juego de plataformas.",
        category: "plataformas",
        emoji: "🤸",
        rating: 4.2,
        weight: "500 MB",
        image: "images/bail-x-pit.jpg",
        downloadUrl: "https://gofile.io/d/zLg3jP"
    },
    {
        id: 80,
        title: "Don't Starve Together",
        description: "Un juego de supervivencia cooperativo en un mundo oscuro y misterioso. Trabaja con tus amigos para recolectar recursos, construir refugios y sobrevivir a las extrañas criaturas que acechan en la oscuridad.",
        category: "supervivencia",
        emoji: "🏕️",
        rating: 4.8,
        weight: "2.0 GB",
        image: "images/dont-starve-together.jpg",
        downloadUrl: "https://gofile.io/d/aMg3jP"
    },
    {
        id: 81,
        title: "Intravenous",
        description: "Un juego de sigilo táctico en primera persona. Infiltrate en bases enemigas, elimina objetivos y escapa sin ser detectado en este desafiante juego de sigilo.",
        category: "sigilo",
        emoji: "🤫",
        rating: 4.7,
        weight: "5.0 GB",
        image: "images/intravenous.jpg",
        downloadUrl: "https://gofile.io/d/bMg3jP"
    },
    {
        id: 82,
        title: "Werewolf Party",
        description: "Un juego de deducción social multijugador donde los jugadores son aldeanos o hombres lobo. Descubre quiénes son los hombres lobo antes de que te eliminen en este divertido juego de fiesta.",
        category: "fiesta",
        emoji: "🐺",
        rating: 4.0,
        weight: "100 MB",
        image: "images/werewolf-party.jpg",
        downloadUrl: "https://gofile.io/d/cMg3jP"
    },
    {
        id: 83,
        title: "Megaloot: Prelude",
        description: "Un roguelike de acción con elementos de construcción de mazos. Lucha contra enemigos, recolecta botín y mejora tu mazo en este desafiante juego de rol.",
        category: "roguelike",
        emoji: "🃏",
        rating: 4.5,
        weight: "500 MB",
        image: "images/megaloot-prelude.jpg",
        downloadUrl: "https://gofile.io/d/dMg3jP"
    },
    {
        id: 84,
        title: "Scheming Through the Zombie Apocalypse: The Beginning",
        description: "Una novela visual de comedia negra ambientada en un apocalipsis zombi. Toma decisiones difíciles, gestiona tus recursos y sobrevive en este divertido y retorcido juego de supervivencia.",
        category: "novela visual",
        emoji: "🧟",
        rating: 4.0,
        weight: "1.0 GB",
        image: "images/scheming-through-the-zombie-apocalypse.jpg",
        downloadUrl: "https://gofile.io/d/eMg3jP"
    }
];

console.log("Games array loaded:", games.length, "games.");

// Función para renderizar los juegos en el catálogo
function renderGames(gameList) {
    console.log("renderGames called with", gameList.length, "games.");
    const gameGrid = document.getElementById('gameGrid');
    if (!gameGrid) {
        console.error("Element with ID 'gameGrid' not found.");
        return;
    }
    gameGrid.innerHTML = ''; // Limpiar el contenido existente

    gameList.forEach(game => {
        const gameCard = `
            <div class="game-card bg-gray-800 rounded-lg shadow-lg overflow-hidden relative group">
                <div class="game-card-image w-full h-48 bg-cover bg-center" style="background-image: url('${game.image}');">
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
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchInput) ||
        game.description.toLowerCase().includes(searchInput) ||
        game.category.toLowerCase().includes(searchInput)
    );
    renderGames(filteredGames);
}

// Inicializar el catálogo de juegos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded fired.");
    renderGames(games);

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', filterGames);
    }
});

// Estilos para el botón de descarga vertical (añadido directamente en JS para prueba, se moverá a CSS)
const style = document.createElement('style');
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
