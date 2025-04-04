let buttons = document.querySelectorAll('button')
let balance = 50;
let balanceText = document.querySelector('#slots p');
balanceText.innerHTML = `Balance: $${balance}`;
let slotsImgs = document.querySelectorAll('#slots img');

// SIGN UP //
buttons[0].addEventListener('click', function() {
  console.log("Sign Up button clicked");
  document.getElementById("buttons").style.display = "none";
  document.querySelector("form").style.display = "flex";
})

buttons[2].addEventListener('click', function() {
  console.log("Submit button clicked");
  document.querySelector("form").style.display = "none";
  document.querySelector('#slots').style.display = "flex";
}) 

console.log(buttons)

buttons[3].addEventListener('click', function() {
  console.log("Spin");
  balance -= 5;
  balanceText.innerHTML = `Balance: $${balance}`;

  let combination = [];
  let delay = 0;

  for (let i = 0; i < slotsImgs.length; i++) {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * 3);
      slotsImgs[i].src = `img/foto${randomNum}.jpg`;
      slotsImgs[i].style.transform = "translateY(0)";
      combination.push(randomNum);
    }, delay);
    delay += 300; // Add 100ms delay for each image
  }
});










