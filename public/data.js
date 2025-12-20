// public/data.js

const allProjects = [
    // --- FOOD ---
    {
        category: "food", // ETICHETTA IMPORTANTE
        title: "Carbonara",
        image: "images/food-1.jpg", 
        description: "Classica con percorino e guanciale.",
 
    },

    // --- DIY / INVENTIONS ---
    {
        category: "diy", // ETICHETTA IMPORTANTE
        title: "Alimentatore da banco",
        image: "images/diy2.jpg", // Trova un'immagine per questo!
        description: "Alimentatore PC trasformato in alimentatore da banco regolabile.",
    
    },
    {
        category: "diy",
        title: "Portafoglio in pelle",
        image: "images/diy1.jpg",
        description: "Poratafoglio minimalista fatto a mano in pelle",

    },
   
    // --- ART PROJECTS (Galleria) ---
    {
        category: "art",
        title: "All eyes on me",
        image: "images/art1.jpg", 
        description: "Collage di occhi umani."
    },
    {
        category: "art",
        title: "M for Matteo",
        image: "images/art2.jpg",
        description: "Fusione digitale di ritratti e lettere."
    },
    {
        category: "art",
        title: "Grime face",
        image: "images/art3.jpg",
        description: "Grime effect su ritratto digitale."
    },

   // --- CODING PROJECTS ---
    {
        category: "coding",
        title: "Prompt Image Generator", // PROGETTO LOCALE
        image: "images/cod2.jpg", 
        description: "Ti aiuta a creare immagini con AI basate su prompt testuali.",
        url: "projects/prom-ima-gen/index.html" // Questo ricarica la pagina stessa (o metti il link github)
    },
    {
        category: "coding",
        title: "Kaleido Art", // PROGETTO LOCALE
        image: "images/cod1.jpg",
        description: "Un orologio digitale con effetto pioggia verde.",
        url: "projects/kaleido-art/index.html" // <-- LINK RELATIVO (LOCALE)
    },
    {
        category: "coding",
        title: "Reflex trainer", // PROGETTO LOCALE
        image: "images/cod4.jpg",
        description: "Testa i tuoi riflessi con questo semplice gioco interattivo.",
        url: "projects/reflex-trainer/index.html" // <-- LINK RELATIVO (LOCALE)
    },
    {
        category: "coding",
        title: "Scrittura Veloce", // PROGETTO VERCEL
        image: "images/cod3.jpg",
        description: "Dashboard React per monitorare le crypto in tempo reale.",
        url: "https://scrittura-veloce.vercel.app/" // <-- LINK ASSOLUTO (ESTERNO)
    }
];