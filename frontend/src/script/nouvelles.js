const nouvelles = [
    {
        titre: "Découverte d'une nouvelle exoplanète",
        date: "2025-09-01",
        nbref: 1,
        imgURL: "https://www.planetecampus.com/wp-content/uploads/2014/04/quintana4HR-2-1200.jpg",
        texte: "Une équipe d'astronomes a découvert une exoplanète potentiellement habitable à 12 années-lumière. Baptisée Kepler-452b, elle présente des conditions similaires à celles de la Terre, avec une atmosphère riche en oxygène.",
        resume: "Une exoplanète habitable découverte à 12 années-lumière pourrait abriter la vie."
    },
    {
        titre: "Avancée majeure en intelligence artificielle",
        date: "2025-08-28",
        nbref: 2,
        imgURL: "https://tse1.mm.bing.net/th/id/OIP.r0HQ1Ehr8SnZFrgqU1gEqgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        texte: "Des chercheurs ont développé une IA capable de résoudre des problèmes mathématiques complexes en quelques secondes, surpassant les capacités humaines dans certains domaines.",
        resume: "Une IA révolutionnaire surpasse les humains en résolution de problèmes mathématiques."
    },
    {
        titre: "Record de température battu",
        date: "2025-07-15",
        nbref: 3,
        imgURL: "https://cdn.futura-sciences.com/sources/images/temperature-record-antarctique-1.jpeg",
        texte: "L'Antarctique a enregistré une température record de -50°C, la plus chaude jamais mesurée, suscitant des inquiétudes sur le changement climatique.",
        resume: "L'Antarctique atteint un record de chaleur, inquiétant les climatologues."
    },
    {
        titre: "Lancement d'une mission vers Mars",
        date: "2025-06-20",
        nbref: 4,
        imgURL: "https://th.bing.com/th/id/R.b5c0b3840bceb295edf7395a93cc45e8?rik=L4UsptBCz0hPFw&riu=http%3a%2f%2fspacefellowship.com%2fwp-content%2fuploads%2f2011%2f04%2f20101208_F9-002.jpg&ehk=chopmsWj7Iiq7opa2kgu8cZbbRy2e7evv04Uey7EdVA%3d&risl=&pid=ImgRaw&r=0",
        texte: "La mission Ares-7 a décollé avec succès pour explorer les anciennes rivières martiennes, dans l'espoir de trouver des traces de vie microbienne.",
        resume: "Ares-7, nouvelle mission vers Mars, cherche des traces de vie."
    },
    {
        titre: "Nouveau vaccin universel contre la grippe",
        date: "2025-05-10",
        nbref: 5,
        imgURL: "https://cache.cosmopolitan.fr/data/photo/w2000_ci/1s7/vaccin.jpg",
        texte: "Un vaccin universel contre toutes les souches de la grippe a été testé avec succès, offrant une protection à long terme.",
        resume: "Un vaccin universel contre la grippe testé avec succès."
    },
    {
        titre: "Percée dans l'énergie de fusion",
        date: "2025-04-12",
        nbref: 6,
        imgURL: "https://s2.dmcdn.net/v/UTtUJ1cms3wEt7lCN/x720",
        texte: "Une équipe internationale a réussi à maintenir une réaction de fusion stable pendant 10 minutes, un pas vers une énergie propre illimitée.",
        resume: "La fusion nucléaire stable marque une avancée vers une énergie propre."
    },
    {
        titre: "Découverte d'une cité engloutie",
        date: "2025-03-18",
        nbref: 7,
        imgURL: "https://th.bing.com/th/id/R.dd28848e9723cc4921d39470c0db3d0d?rik=AglwO7enIHA%2bCA&riu=http%3a%2f%2fwww.fredzone.org%2fwp-content%2fuploads%2f2016%2f04%2fcite-engloutie-640x500.jpg&ehk=%2fjcPtQPmU818FJb2rR6FxtlM3J2wJ%2bCB5J0X9tvOy7U%3d&risl=&pid=ImgRaw&r=0",
        texte: "Des archéologues ont localisé une cité antique submergée au large de la Grèce, datant de plus de 3000 ans.",
        resume: "Une cité antique engloutie découverte en Méditerranée."
    },
    {
        titre: "Retour des JO d'hiver en 2026",
        date: "2025-02-25",
        nbref: 8,
        imgURL: "https://www.dauphinordique.com/wp-content/uploads/dauphin/2023/07/dauphin-Nordique-le-ski-Alpin-en-2023-00168.jpg",
        texte: "Les préparatifs pour les Jeux Olympiques d'hiver 2026 battent leur plein, avec des innovations pour réduire l'impact environnemental.",
        resume: "Les JO d'hiver 2026 se préparent avec un accent sur l'écologie."
    },
    {
        titre: "Nouveau record de vitesse pour un train",
        date: "2025-01-30",
        nbref: 9,
        imgURL: "https://tse2.mm.bing.net/th/id/OIP.bkI3Qg2YSB8PkTDTy-U5nQHaEv?w=1656&h=1060&rs=1&pid=ImgDetMain&o=7&rm=3",
        texte: "Un train à sustentation magnétique a atteint 600 km/h, établissant un nouveau record mondial de vitesse terrestre.",
        resume: "Un train maglev bat le record de vitesse à 600 km/h."
    },
    {
        titre: "IA pour prédire les tremblements de terre",
        date: "2024-12-15",
        nbref: 10,
        imgURL: "https://cdn.futura-sciences.com/sources/images/actu/secousses-tremblement-terre.jpg",
        texte: "Une intelligence artificielle a réussi à prédire un séisme avec une précision de 85%, une première dans le domaine.",
        resume: "Une IA prédit les séismes avec une précision inégalée."
    },
    {
        titre: "Découverte d'une nouvelle particule ",
        date: "2025-01-12",
        nbref: 11,
        imgURL: "https://img.freepik.com/photos-premium/particules-subatomiques-interieur-atome-concept-fondamental-physique-represente-dans-image-3drendered_117038-30725.jpg",
        texte: "Des chercheurs du CERN ont identifié une nouvelle particule subatomique qui pourrait révolutionner notre compréhension de la physique quantique.",
        resume: "Nouvelle particule découverte au CERN, bouleverse la physique."
    },
    {
        titre: "Un vaccin contre le cancer du poumon",
        date: "2025-02-03",
        nbref: 12,
        imgURL: "https://i.f1g.fr/media/cms/1200x630_crop/2023/09/12/163e0bea76546b524f6e5af25bf624913d17b71b3147f3e69bffc251d64bfc6d.jpg",
        texte: "Une équipe médicale internationale a mis au point un vaccin expérimental qui a montré une efficacité de 75% contre le cancer du poumon.",
        resume: "Un vaccin expérimental prometteur contre le cancer du poumon."
    },
    {
        titre: "Voiture volante homologuée en Europe",
        date: "2025-03-21",
        nbref: 13,
        imgURL: "https://sf2.autojournal.fr/wp-content/uploads/autojournal/2025/04/1-750x410.jpg",
        texte: "La première voiture volante vient d’obtenir son homologation en Europe, ouvrant la voie à un nouveau mode de transport urbain.",
        resume: "Une voiture volante autorisée en Europe."
    },
    {
        titre: "Un robot humanoïde devient professeur",
        date: "2025-04-02",
        nbref: 14,
        imgURL: "https://c8.alamy.com/compfr/2m5ac2g/professeur-de-robot-d-education-humanoide-devant-une-ecole-de-classe-tableau-de-travail-enseignant-aux-eleves-sur-la-science-et-la-technologie-de-l-intelligence-artificielle-comp-2m5ac2g.jpg",
        texte: "Un robot humanoïde a donné un cours magistral dans une université japonaise, suscitant de nombreuses réactions chez les étudiants.",
        resume: "Un robot humanoïde anime un cours à l’université."
    },
    {
        titre: "Une IA compose une symphonie",
        date: "2025-05-15",
        nbref: 15,
        imgURL: "https://www.brandysound.fr/wp-content/uploads/2023/10/AdobeStock_590734057-min-1024x574.webp",
        texte: "Une IA a composé une symphonie jouée par l’orchestre philharmonique de Berlin, difficile à distinguer de celle d’un humain.",
        resume: "Une IA compose une symphonie jouée à Berlin."
    },
    {
        titre: "Découverte d'une pyramide en Égypte",
        date: "2025-06-11",
        nbref: 16,
        imgURL: "https://tse2.mm.bing.net/th/id/OIP.SM88DL8AuykxJD_GXhPEDAHaHL?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        texte: "Des archéologues ont mis au jour une pyramide jusque-là inconnue grâce à des techniques d’imagerie par satellite.",
        resume: "Une pyramide inconnue découverte en Égypte."
    },
    {
        titre: "Une nouvelle espèce marine découverte",
        date: "2025-07-04",
        nbref: 17,
        imgURL: "https://images.radio-canada.ca/q_auto,w_700/v1/ici-info/16x9/expedition-decouverte-nouvelles-especes-marines-62438.png",
        texte: "Des biologistes marins ont découvert une nouvelle espèce de méduse bioluminescente dans les abysses de l’Atlantique.",
        resume: "Nouvelle espèce marine bioluminescente découverte."
    },
    {
        titre: "Première ville alimentée le solaire",
        date: "2025-08-22",
        nbref: 18,
        imgURL: "https://img.freepik.com/photos-premium/diorama-ville-intelligente-alimentee-par-energie-solaire-creee-technologie-generative-ai_964851-277.jpg",
        texte: "Une ville entière aux Émirats Arabes Unis fonctionne désormais exclusivement grâce à l’énergie solaire.",
        resume: "Une ville devient 100% solaire."
    },
    {
        titre: "Un avion supersonique fait Paris à New York en 2h",
        date: "2025-09-18",
        nbref: 19,
        imgURL: "https://www.neozone.org/blog/wp-content/uploads/2024/08/aeronautique-nasa-x59-avion-supersonique-002-1080x720.jpg",
        texte: "Un vol commercial supersonique a relié Paris à New York en seulement deux heures, marquant le retour des avions ultra-rapides.",
        resume: "Paris-New York en 2h avec un avion supersonique."
    },
    {
        titre: "IA VS médecins",
        date: "2025-10-01",
        nbref: 20,
        imgURL: "https://tse2.mm.bing.net/th/id/OIP.KoBA7PZVxn3gmhWby6EKGwHaDk?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        texte: "Une étude montre qu’une intelligence artificielle spécialisée en radiologie surpasse les médecins dans la détection de cancers précoces.",
        resume: "Une IA surpasse les médecins pour les diagnostics."
    }

];
export default nouvelles;