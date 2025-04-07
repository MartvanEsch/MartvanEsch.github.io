let buttons = document.querySelectorAll('button')
let balance = 50;
let balanceText = document.querySelector('#slots p');
balanceText.innerHTML = `Balance: $${balance}`;
let slotsStatus = document.querySelector('#slots h2');
let slotsImgs = document.querySelectorAll('#slots img');
let loseStatus = ['GEEN MATCH! Nog één keer… of duizend?', 'Mis! Misschien als je betaalt?', 'Nope. Nog een gok?'];
let winStatus = ['JACKPOT! Geniet van je tijdelijke validatie.', 'YES! Een match! Tijd voor oppervlakkige small talk en snelle teleurstelling.'];
let backgroundAudio = document.getElementById('background-audio');

let profileData = [
  {name: 'Anouk', quote: 'Looking for a BF, text me!', age: '23', lengte: '1.73m', gewicht: '65kg', stars: 5},
  {name: 'Ronald', quote: 'Got the money and the passion.', age: '26', lengte: '1.86m', gewicht: '79kg', stars: 4},
  {name: 'Lisalotte', quote: 'I like to read books and drink wine.', age: '39', lengte: '1.66m', gewicht: '59kg', stars: 1},
  {name: 'Ricky', quote: 'You can call me rizzlord!', age: '20', lengte: '1.76m', gewicht: '91kg', stars: 1}
]

backgroundAudio.addEventListener('ended', function() {
  setTimeout(() => {
    backgroundAudio.play();
  }, 5000);
});

// SIGN UP //
buttons[0].addEventListener('click', function() {
  backgroundAudio.volume = 0.5;
  backgroundAudio.play();
  console.log("Sign Up button clicked"); 
  document.getElementById("buttons").style.display = "none";
  document.querySelector("form").style.display = "flex";
})

buttons[2].addEventListener('click', function() {
  console.log("Submit button clicked");
  document.querySelector("form").style.display = "none";
  document.querySelector('#slots').style.display = "flex";
  document.querySelector('header').style.display = "flex";
  let menuButtons = document.querySelectorAll('header nav a')
  console.log(menuButtons)

  menuButtons[0].addEventListener('click', function() {
    console.log("Profile button clicked");
    document.querySelector("form").style.display = "flex";
    document.querySelector("#slots").style.display = "none";
    document.querySelector('form h2').innerHTML = "Profile";
    document.querySelector('form').style.marginBottom = "0px";
    document.querySelector('#shop').style.display = "none";
    
    menuButtons[0].classList.add('active');
    menuButtons[1].classList.remove('active');
    menuButtons[2].classList.remove('active');
  })
  menuButtons[1].addEventListener('click', function() {
    console.log("Home button clicked");
    document.querySelector("#slots").style.display = "flex";
    document.querySelector("form").style.display = "none";
    document.querySelector('#shop').style.display = "none";

    menuButtons[0].classList.remove('active');
    menuButtons[1].classList.add('active');
    menuButtons[2].classList.remove('active');

    slotsStatus.innerHTML = "Nog eens swipen? Ga voor de date!";
    balanceText.innerHTML = `Balance: $${balance}`;
  })
  let itemsForSale = document.querySelectorAll('#shop div div');
  for (let i = 0; i < itemsForSale.length; i++) {
    itemsForSale[i].addEventListener('click', function() {
      let itemPrice = parseFloat(itemsForSale[i].children[1].innerText.replace(/[^\d.]/g, ''));
      balance += itemPrice;

      document.querySelector("#slots").style.display = "flex";
      document.querySelector("form").style.display = "none";
      document.querySelector('#shop').style.display = "none";

      menuButtons[0].classList.remove('active');
      menuButtons[1].classList.add('active');
      menuButtons[2].classList.remove('active');

      slotsStatus.innerHTML = "Ga voor de jackpot!";
      balanceText.innerHTML = `Balance: $${balance}`;
    });
  }

  menuButtons[2].addEventListener('click', function() {
    console.log("Shop button clicked");

    document.querySelector('#shop').style.display = "flex";
    document.querySelector("#slots").style.display = "none";
    document.querySelector("form").style.display = "none";

    menuButtons[0].classList.remove('active');
    menuButtons[1].classList.remove('active');
    menuButtons[2].classList.add('active');
  });
}) 

buttons[3].addEventListener('click', function() {

  document.getElementById('spin-audio').volume = 1
  document.getElementById('spin-audio').play();
  if ( balance < 5) {
    balanceText.innerHTML = `Balance: $${balance}`;
    slotsStatus.innerHTML = "Niet genoeg saldo!";
    return;
  }
  balance -= 5;
  balanceText.innerHTML = `Balance: $${balance}`;

  let combination = [];
  let delay = 0;

  lowerVolume(0, 2900);
  for (let i = 0; i < slotsImgs.length; i++) {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * 4);
      slotsImgs[i].src = `img/foto${randomNum}.jpg`;
      slotsImgs[i].style.transform = "translateY(0)";
      combination.push(randomNum);


      if (combination.length === slotsImgs.length) {
        if (combination[0] === combination[1] && combination[1] === combination[2]) {
          balanceText.innerHTML = `Balance: $${balance}`;
          slotsStatus.innerHTML = winStatus[Math.floor(Math.random() * winStatus.length)];
          document.getElementById('win-audio').play();

          document.querySelector('#profile').style.display = "flex";
          document.querySelector('#profile > img').src = `img/foto${combination[0]}.jpg`;
          document.querySelector('#profile > h2').innerHTML = profileData[combination[0]].name;
          document.querySelector('#age').innerHTML = profileData[combination[0]].age + " jaar";
          document.querySelector('#gewicht').innerHTML = profileData[combination[0]].gewicht;
          document.querySelector('#lengte').innerHTML = profileData[combination[0]].lengte;

          document.querySelector('#profile > p').innerHTML = profileData[combination[0]].quote;
          let stars = profileData[combination[0]].stars;
          let starsElements ='';
          for (let j = 0; j < stars; j++) { 
            starsElements += '<img src="Asset 2.svg" alt="Star">';
          }
          document.querySelector('#stars').innerHTML = starsElements;
        } else {
          slotsStatus.innerHTML = loseStatus[Math.floor(Math.random() * loseStatus.length)];
          document.getElementById('lose-audio').play();
        }
        setTimeout(() => {
          slotsImgs.forEach(img => {
            img.style.transform = "translateY(-100%)";
            slotsStatus.innerHTML = "Ga voor de jackpot!";
          });
        }, 2000);
      }
    }, delay);
    delay += 300;
  }
  console.log(combination);
});

function lowerVolume(delay, wait) {
  setTimeout(() => {
    backgroundAudio.volume = 0.1;
    setTimeout(() => {
      backgroundAudio.volume = 0.5;
    }, wait);
  }, delay);
}












