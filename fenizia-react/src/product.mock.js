const productList = [
  {
    id: 1,
    product: {
      type: "book",
      title: "Postales del Este",
      author: "Reyes Monforte",
      price: 19.85,
      rating: 9,
      cover: "https://imagessl0.casadellibro.com/a/l/t1/90/9788401023590.jpg",
      description:
        "Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.",
      newRelease: true,
      bestSeller: false,
      genre: "historia",
    },
  },
  {
    id: 2,
    product: {
      type: "book",
      title: "The Crazy Haacks 8",
      author: "The Crazy Haacks",
      price: 17,
      rating: 8.5,
      cover: "https://imagessl8.casadellibro.com/a/l/t1/98/9788418038198.jpg",
      description:
        "¿Que pasaría si THE CRAZY HAACKS dejásemos de ser... CRAZY? ¡SERÍA EL FIN DE LA LOCURA Y LA DIVERSIÓN! Una poción está poniendo en peligro nuestra identidad y deberemos viajar a la INDIA para lograr el antídoto de LA PÓCIMA ETERNA.",
      newRelease: true,
      bestSeller: false,
      genre: "infantil",
    },
  },
  {
    id: 3,
    product: {
      type: "book",
      title: "El infinito en un junco",
      author: "Irene Vallejo",
      price: 23.7,
      rating: 7.5,
      cover: "https://imagessl0.casadellibro.com/a/l/t5/90/9788417860790.jpg",
      description:
        "Este es un libro sobre la historia de los libros. Un recorrido por la vida de ese fascinante artefacto que inventamos para que las palabras pudieran viajar en el espacio y en el tiempo.",
      newRelease: true,
      bestSeller: false,
      genre: "historia",
    },
  },
  {
    id: 4,
    product: {
      type: "book",
      title: "El mensaje de Pandora",
      author: "Javier Serra",
      price: 15.1,
      rating: 5,
      cover: "https://imagessl2.casadellibro.com/a/l/t1/32/9788408232032.jpg",
      description:
        "El día que Arys cumplió dieciocho años recibió esta extraña carta. Le llegó desde Atenas envuelta en papel de estraza con el apremio de que debía leerla de inmediato.",
      newRelease: true,
      bestSeller: true,
      genre: "thriller",
    },
  },
  {
    id: 5,
    product: {
      type: "book",
      title: "El mentiroso",
      author: "Mikel Santiago",
      price: 18.85,
      rating: 7.8,
      cover: "https://imagessl9.casadellibro.com/a/l/t1/49/9788466667449.jpg",
      description:
        "Hay novelas imposibles de abandonar una vez leídas las primeras páginas. Historias que reinventan el suspense y hacen dudar al lector cada vez que termina un capítulo.",
      newRelease: true,
      bestSeller: false,
      genre: "thriller",
    },
  },
  {
    id: 6,
    product: {
      type: "book",
      title: "Loba negra",
      author: "Juan Gómez-Jurado",
      price: 14.85,
      rating: 7.5,
      cover: "https://imagessl7.casadellibro.com/a/l/t1/97/9788466666497.jpg",
      description:
        "Antonia Scott no tiene miedo a nada. Solo a sí misma. Pero hay alguien más peligroso que ella. Alguien que podría vencerla.",
      newRelease: true,
      bestSeller: false,
      genre: "thriller",
    },
  },
  {
    id: 7,
    product: {
      type: "book",
      title: "Sidi",
      author: "Arturo Pérez-Reverte",
      price: 11.25,
      rating: 6.3,
      cover: "https://imagessl3.casadellibro.com/a/l/t1/73/9788420435473.jpg",
      description:
        "No tenía patria ni rey, sólo un puñado de hombres fieles. No tenían hambre de gloria, sólo hambre. Así nace un mito. Así se cuenta una leyenda.",
      newRelease: true,
      bestSeller: true,
      genre: "thriller",
    },
  },
  {
    id: 8,
    product: {
      type: "book",
      title: "Mil besos prohibidos",
      author: "Sonsoles Onega",
      price: 20.95,
      rating: 8.4,
      cover: "https://imagessl0.casadellibro.com/a/l/t5/30/9788408227830.jpg",
      description:
        "A veces las casualidades se hacen cómplices de los deseos. Costanza y Mauro llevaban media vida esperándose hasta que un encuentro imprevisto en la Gran Vía de Madrid volvió a unir sus destinos.",
      newRelease: false,
      bestSeller: false,
      genre: "romantico",
    },
  },
  {
    id: 9,
    product: {
      type: "book",
      title: "La Biblia de MasterChef",
      author: "Varios",
      price: 24.95,
      rating: 8,
      cover: "https://imagessl5.casadellibro.com/a/l/t1/95/9788467058895.jpg",
      description:
        "La guía más completa de cocina, con todas las técnicas, trucos, utensilios y las recetas más emblemáticas del famoso programa de TVE MasterChef.",
      newRelease: true,
      bestSeller: true,
      genre: "cocina",
    },
  },
  {
    id: 10,
    product: {
      type: "book",
      title: "El Principito",
      author: "Antoine de Saint-Exupéry",
      price: 11.95,
      rating: 9.8,
      cover: "https://imagessl8.casadellibro.com/a/l/t1/98/9788498381498.jpg",
      description:
        "Un aviador se encuentra perdido en el desierto del Sahara, después de haber tenido una avería en su avión. Entonces aparece un pequeño príncipe... El principito vive en un pequeño planeta, el asteroide B 612, en el que hay tres volcanes.",
      newRelease: false,
      bestSeller: true,
      genre: "infantil",
    },
  },
  {
    id: 11,
    product: {
      type: "book",
      title: "El hombre en busca de sentido",
      author: "Viktor Frankl",
      price: 12.5,
      rating: 8.5,
      cover: "https://imagessl6.casadellibro.com/a/l/t1/26/9788425432026.jpg",
      description:
        "El hombre en busca de sentido es un libro escrito por el psiquiatra austriaco Viktor Emil Frankl, publicado en Alemania en 1946. En inglés se editó con los títulos From Death-Camp to Existentialism en 1959 y Man´s Search for Meaning en 1962. ",
      newRelease: false,
      bestSeller: true,
      genre: "ensayo",
    },
  },
  {
    id: 12,
    product: {
      type: "book",
      title: "Yo, Júlia",
      author: "Santiago Posteguillo",
      price: 14.95,
      rating: 6.3,
      cover: "https://imagessl9.casadellibro.com/a/l/t5/09/9788408197409.jpg",
      description:
        "192d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más grande: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado.",
      newRelease: false,
      bestSeller: false,
      genre: "historia",
    },
  },
  {
    id: 13,
    product: {
      type: "book",
      title: "1984",
      author: "George Orwell",
      price: 9.95,
      rating: 9.5,
      cover: "https://imagessl4.casadellibro.com/a/l/t5/44/9788499890944.jpg",
      description:
        "'No creo que la sociedad que he descrito en 1984 necesariamente llegue a ser una realidad, pero sí creo que puede llegar a existir algo parecido', escribía Orwell despues de publicar su novela. Corría el año 1948, y la realidad se ha encargado de convertir esa pieza -entonces de ciencia ficción- en un manifiesto de la realidad.",
      newRelease: false,
      bestSeller: true,
      genre: "thriller",
    },
  },
  {
    id: 14,
    product: {
      type: "book",
      title: "Harry Potter y el prisionero de Azkaban",
      author: "J.K. Rowling",
      price: 17.95,
      rating: 7.5,
      cover: "https://imagessl0.casadellibro.com/a/l/t5/90/9788478885190.jpg",
      description:
        "Harry Potter y el prisionero deAzkaban es la tercera novela de la ya clásica serie fantástica de la autora británica J.K. Rowling. «Bienvenido al autobús noctámbulo, transporte de emergencia para el brujo abandonado a su suerte. Levante la varita, suba a bordo y lo llevaremos a donde quiera.»",
      newRelease: false,
      bestSeller: true,
      genre: "infantil",
    },
  },
  {
    id: 15,
    product: {
      type: "book",
      title: "Open: Memorias",
      author: "Andre Agassi",
      price: 14.95,
      rating: 7.5,
      cover: "https://imagessl1.casadellibro.com/a/l/t1/61/9788416634361.jpg",
      description:
        "Siendo un bebé, le pusieron una raqueta de juguete en la mano. Desde entonces, Agassi no ha hecho otra cosa que golpear pelotas de tenis. Su padre, obsesionado en convertirlo en un astro del deporte, construyó una máquina (el dragón) que disparaba 2.500 pelotas al día contra el pequeño Andre.",
      newRelease: false,
      bestSeller: false,
      genre: "ensayo",
    },
  },
];

export default productList;
