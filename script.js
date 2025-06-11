// Element Selectors (Element Selectors)
const h1 = document.querySelector("h1");
const container = document.querySelector("#container");
const meldingBtn = document.querySelector('#meldingBtn');
const meldingen = document.querySelector('#meldingen');
const backBtn = document.querySelector('#backBtn');
const meldingTekst = document.querySelector('#meldingLijst');
const melding = document.querySelector('#melding h2');
const stressLevelText = document.querySelector('#stressniveau p');
const knop = document.querySelector('button');
const timer = document.querySelector('#timer');

// Animatie: Verberg h1, toon container
function animateIntro() {
    container.style.display = "none";
    setTimeout(() => {
        h1.style.opacity = "0";
        setTimeout(() => {
            h1.style.display = "none";
            container.style.display = "";
            container.style.opacity = "0";
            void container.offsetWidth;
            container.style.opacity = "1";
        }, 1000);
    }, 1000);
}

// Meldingen Logica
const notiArray = [
    {message: "Je hebt nog 5 dagen om je PROJ-verslag in te leveren. Neem je tijd, je bent op de goede weg.", value: 8},
    {message: "Je ADSC-cijfer staat op Brightspace. Neem een kijkje wanneer jij er klaar voor bent.", value: 7},
    {message: "Twee deadlines de komende weken. Neem de tijd, je hoeft het niet allemaal tegelijk te doen.", value: 7},
    {message: "Nog 4 dagen tot je PROJ-presentatie. Je doet het rustig aan, en dat is precies goed.", value: 8},
    {message: "Je resultaat voor ADSC is binnen. Alles op jouw tempo, je vindt het op Brightspace.", value: 7},
    {message: "Voor de komende twee weken staan er twee deadlines. Blijf kalm, je hebt dit onder controle.", value: 6},
];
let gekregenMeldingen = [];
let stressLevel = 0;

// Update de tekst van het stressniveau
function updateStressLevelText() {
    if (stressLevel < 20) {
        stressLevelText.textContent = "Je stressniveau is laag. Goed bezig!";
    } else if (stressLevel < 40) {
        stressLevelText.textContent = "Je stressniveau is gemiddeld. Blijf rustig!";
    } else if (stressLevel < 60) {
        stressLevelText.textContent = "Je stressniveau is hoog. Neem even pauze!";
    } else {
        stressLevelText.textContent = "Je stressniveau is erg hoog. Probeer te ontspannen!";
    }
}

// Update meldingen en stressniveau
function updateMeldingen() {
    let randomNoti = Math.floor(notiArray.length * Math.random());
    if (gekregenMeldingen.includes(randomNoti)) return;

    stressLevel += notiArray[randomNoti].value;
    updateStressLevelText();

    melding.innerHTML = notiArray[randomNoti].message;
    gekregenMeldingen.push(randomNoti);

    meldingTekst.innerHTML = "";
    gekregenMeldingen.forEach(idx => {
        meldingTekst.innerHTML += `<p>${notiArray[idx].message}</p>`;
    });
}

// Timer Logica
let timerInterval;
let tijdOver = 600; // seconden

// Formatteer seconden naar mm:ss
function formatteerTijd(seconden) {
    let min = Math.floor(seconden / 60);
    let sec = seconden % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
}

// Start de timer
function startTimer() {
    clearInterval(timerInterval);
    tijdOver = 600;
    timer.textContent = formatteerTijd(tijdOver);

    timerInterval = setInterval(() => {
        tijdOver--;
        timer.textContent = formatteerTijd(tijdOver);
        if (tijdOver === 0) {
            tijdOver = 10;
            timer.textContent = formatteerTijd(tijdOver);
        }
    }, 1000);
}

// Event Listeners (Gebeurtenissen)
meldingBtn.addEventListener('click', () => {
    meldingen.style.display = "flex";
});

backBtn.addEventListener('click', () => {
    meldingen.style.display = "none";
});

knop.addEventListener('click', startTimer);

// Init (Initialisatie)
animateIntro();
setInterval(updateMeldingen, 5000);