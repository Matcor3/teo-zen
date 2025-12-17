// public/data.js

const allProjects = [
    // --- FOOD ---
    {
        category: "food", // ETICHETTA IMPORTANTE
        title: "Carbonara 2.0",
        image: "images/food-1.jpg", 
        description: "Rivisitazione scientifica a 62°C.",
        tags: ["Science", "Pasta"]
    },
    {
        category: "food",
        title: "Sferificazione Oliva",
        image: "images/food-2.jpg",
        description: "Olio EVO incapsulato.",
        tags: ["Molecolare"]
    },

    // --- DIY / INVENTIONS ---
    {
        category: "diy", // ETICHETTA IMPORTANTE
        title: "Smart Mirror",
        image: "images/diy-1.jpg", // Trova un'immagine per questo!
        description: "Specchio con display IoT integrato e riconoscimento facciale.",
        tags: ["Raspberry Pi", "Python", "Woodwork"]
    },
    {
        category: "diy",
        title: "Mechanical Arm",
        image: "images/diy-2.jpg",
        description: "Braccio robotico stampato in 3D controllato via guanto sensoriale.",
        tags: ["3D Print", "Arduino", "C++"]
    },
    {
        category: "diy",
        title: "Retro Console",
        image: "images/diy-3.jpg",
        description: "Console da gioco portatile costruita da zero.",
        tags: ["Electronics", "Gaming"]
    },
    // --- ART PROJECTS (Galleria) ---
    {
        category: "art",
        title: "Digital Soul",
        image: "images/art-1.jpg", 
        description: "Studio sulla fusione tra anatomia umana e circuiti.",
        tags: ["Digital", "Procreate"]
    },
    {
        category: "art",
        title: "Neon Dreams",
        image: "images/art-2.jpg",
        description: "Paesaggi urbani onirici ispirati a Tokyo.",
        tags: ["AI Art", "Midjourney"]
    },
    {
        category: "art",
        title: "Charcoal Faces",
        image: "images/art-3.jpg",
        description: "Ritratti dal vivo, carboncino su carta ruvida.",
        tags: ["Traditional", "Sketch"]
    },

   // --- CODING PROJECTS ---
    {
        category: "coding",
        title: "TeoZen Portfolio",
        image: "images/coding-1.jpg", 
        description: "Il sito che stai navigando. HTML5, CSS3, JS Vanilla.",
        tags: ["Web Design", "Frontend"],
        url: "#" // Questo ricarica la pagina stessa (o metti il link github)
    },
    {
        category: "coding",
        title: "Kaleido Art", // PROGETTO LOCALE
        image: "images/coding-2.jpg",
        description: "Un orologio digitale con effetto pioggia verde.",
        tags: ["JS Vanilla", "Canvas"],
        url: "projects/kaleido-art/index.html" // <-- LINK RELATIVO (LOCALE)
    },
    {
        category: "coding",
        title: "Scrittura Veloce", // PROGETTO VERCEL
        image: "images/coding-3.jpg",
        description: "Dashboard React per monitorare le crypto in tempo reale.",
        tags: ["React", "API"],
        url: "https://scrittura-veloce.vercel.app/" // <-- LINK ASSOLUTO (ESTERNO)
    }
];