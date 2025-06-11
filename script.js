let h1 = document.querySelector("h1");
let container = document.querySelector("#container");

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

let meldingBtn = document.querySelector('#meldingBtn');
let meldingen = document.querySelector('#meldingen');
meldingBtn.addEventListener('click', () => {
    meldingen.style.display = "flex";
})

let backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click', () => {
    meldingen.style.display = "none";
})

let notiArray = [
    {message: "Je hebt nog 5 dagen om je PROJ-verslag in te leveren. Neem je tijd, je bent op de goede weg.", value: 8},
    {message: "Je ADSC-cijfer staat op Brightspace. Neem een kijkje wanneer jij er klaar voor bent.", value: 7},
    {message: "Twee deadlines de komende weken. Neem de tijd, je hoeft het niet allemaal tegelijk te doen.", value: 7},
    {message: "Nog 4 dagen tot je PROJ-presentatie. Je doet het rustig aan, en dat is precies goed.", value: 8},
    {message: "Je resultaat voor ADSC is binnen. Alles op jouw tempo, je vindt het op Brightspace.", value: 7},
    {message: "Voor de komende twee weken staan er twee deadlines. Blijf kalm, je hebt dit onder controle.", value: 6},
];
let gekregenMeldingen = [];
let meldingTekst = document.querySelector('#meldingLijst');
let melding = document.querySelector('#melding h2');
let stressLevel = 0;
let stressLevelText = document.querySelector('#stressniveau p')
setInterval(() => {
    let randomNoti = Math.floor(notiArray.length * Math.random());
    if (gekregenMeldingen.includes(randomNoti)) {
        return;
    }
    stressLevel += notiArray[randomNoti].value;
    switch (true) {
        case (stressLevel < 20):
            stressLevelText.textContent = "Je stressniveau is laag. Goed bezig!";
            break;
        case (stressLevel < 40):
            stressLevelText.textContent = "Je stressniveau is gemiddeld. Blijf rustig!";
            break;
        case (stressLevel < 60):
            stressLevelText.textContent = "Je stressniveau is hoog. Neem even pauze!";
            break;
        default:
            stressLevelText.textContent = "Je stressniveau is erg hoog. Probeer te ontspannen!";
            break;
    }
    melding.innerHTML = notiArray[randomNoti].message;
    gekregenMeldingen.push(randomNoti);

    meldingTekst.innerHTML = "";
    gekregenMeldingen.forEach((element) => {
        meldingTekst.innerHTML += `<p>${notiArray[element].message}</p>`;
    });
}, 5000)

let knop = document.querySelector('button');
let timerInterval;
let tijdOver = 600; // seconden

knop.addEventListener('click', () => {
    let timer = document.querySelector('#timer');
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
});

function formatteerTijd(seconden) {
    let min = Math.floor(seconden / 60);
    let sec = seconden % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
}