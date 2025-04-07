let buttons = document.querySelectorAll('button')
let balance = 50;
let balanceText = document.querySelector('#slots p');
balanceText.innerHTML = `Balance: $${balance}`;
let slotsStatus = document.querySelector('#slots h2');
let slotsImgs = document.querySelectorAll('#slots img');
let loseStatus = ['GEEN MATCH! Nog één keer… of duizend?', 'Mis! Misschien als je betaalt?', 'Nope. Nog een gok?'];
let winStatus = ['JACKPOT! Geniet van je tijdelijke validatie.', 'YES! Een match! Tijd voor oppervlakkige small talk en snelle teleurstelling.'];
let backgroundAudio = document.getElementById('background-audio');

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

    slotsStatus.innerHTML = "Ga voor de jackpot!";
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
      let randomNum = Math.floor(Math.random() * 5);
      slotsImgs[i].src = `img/foto${randomNum}.jpg`;
      slotsImgs[i].style.transform = "translateY(0)";
      combination.push(randomNum);


      if (combination.length === slotsImgs.length) {
        if (combination[0] === combination[1] && combination[1] === combination[2]) {
          balanceText.innerHTML = `Balance: $${balance}`;
          slotsStatus.innerHTML = winStatus[Math.floor(Math.random() * winStatus.length)];
          document.getElementById('win-audio').play();

          
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
});

function lowerVolume(delay, wait) {
  setTimeout(() => {
    backgroundAudio.volume = 0.1;
    setTimeout(() => {
      backgroundAudio.volume = 0.5;
    }, wait);
  }, delay);
}












