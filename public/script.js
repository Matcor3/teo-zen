// public/script.js

/**
 * SISTEMA PARTICELLE - "WHO AM I?"
 * Teo, qui usiamo HTML5 Canvas. Immagina una tela dove dipingiamo 
 * pixel per pixel.
 */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

// Impostiamo la dimensione del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Gestiamo il ridimensionamento della finestra
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); // Ricalcoliamo tutto se la finestra cambia
});

// Classe Particella: definisce cos'è una "stella"
class Particle {
    constructor(x, y) {
        this.x = Math.random() * canvas.width; // Posizione iniziale casuale
        this.y = Math.random() * canvas.height;
        this.destX = x; // Dove deve arrivare (la forma della scritta)
        this.destY = y;
        this.size = Math.random() * 2 + 1; // Grandezza
        this.speed = Math.random() * 0.05 + 0.02; // Velocità di movimento
        this.friction = Math.random() * 0.9 + 0.1;
    }

    // Calcolo della fisica per muovere la particella verso la destinazione
    update() {
        // Distanza tra posizione attuale e destinazione
        let dx = this.destX - this.x;
        let dy = this.destY - this.y;
        
        // Movimento morbido (easing)
        this.x += dx * this.speed;
        this.y += dy * this.speed;
    }

    // Disegna la particella
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function init() {
    particlesArray = [];
    
    // CALCOLO DINAMICO DEL FONT
    // Se lo schermo è più piccolo di 768px (tablet/mobile), usa font 40px, altrimenti 80px
    let fontSize = window.innerWidth < 768 ? 40 : 80;

    ctx.fillStyle = 'white';
    // Usiamo la variabile fontSize dentro la stringa del font
    ctx.font = `bold ${fontSize}px Verdana`; 
    ctx.textAlign = 'center';
    ctx.fillText('WHO AM I?', canvas.width/2, canvas.height/2);

    // ... (il resto della funzione con getImageData rimane identico) ...
    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < textCoordinates.height; y += 7) {
        for (let x = 0; x < textCoordinates.width; x += 7) {
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                let positionX = x;
                let positionY = y;
                particlesArray.push(new Particle(positionX, positionY));
            }
        }
    }
}

// Ciclo di animazione infinito
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Pulisci la tela
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate); // Richiama se stessa al prossimo frame
}

// Avvia le particelle
init();
animate();


/**
 * LOGICA SCROLL IDENTITÀ
 * Cambia le card visibili in base a quanto scrolli nella sezione #identity-section
 */
const identitySection = document.getElementById('identity-section');
const idCards = [
    document.getElementById('id-1'),
    document.getElementById('id-2'),
    document.getElementById('id-3')
];

window.addEventListener('scroll', () => {
    // Calcoliamo dove si trova la sezione rispetto alla finestra
    const sectionTop = identitySection.getBoundingClientRect().top;
    const sectionHeight = identitySection.offsetHeight;
    const scrollPos = -sectionTop; // Quanto abbiamo scrollato dentro la sezione

    // Logica semplice: dividiamo la sezione in 3 parti
    if (scrollPos < 0) return; // Non siamo ancora arrivati

    const step = sectionHeight / 3;

    // Rimuoviamo la classe active da tutti
    idCards.forEach(card => card.classList.remove('active'));

    // Attiviamo quella giusta
    if (scrollPos < step) {
        idCards[0].classList.add('active'); // Teo Zen
    } else if (scrollPos < step * 2) {
        idCards[1].classList.add('active'); // Matcore
    } else {
        idCards[2].classList.add('active'); // Matteo Corti
    }
});
