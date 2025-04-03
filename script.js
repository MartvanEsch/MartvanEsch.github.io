let carousels = document.querySelectorAll('#carousel *')
console.log(carousels)

const fullscreenBtn = document.getElementById("fullscreen")
fullscreenBtn.addEventListener(`click`,function () {
  document.querySelector("body").requestFullscreen()
  fullscreenBtn.style.display = 'none'
})
  
let combinatieArray = [];
document.querySelector('#testBtn').addEventListener('click', () => {

    console.log('spinning');
    combinatieArray = [];
    document.querySelector('#overlay').classList.add('hidden');
    setTimeout(() => {
      document.querySelector('#popup').classList.add('shown');
      let combinationImg = document.querySelectorAll('#popup img');

      for (let i = 0; i < combinationImg.length; i++) {
        setTimeout(() => {
          toggleCarousels(true)
          let randomPicture = Math.round(Math.random() * 2)
          combinatieArray.push(randomPicture)
          combinationImg[i].src = `img/foto${randomPicture}.jpg`
          combinationImg[i].classList.add('shown')
          console.log(combinatieArray)

          if (combinatieArray.length === 3) {
            let state;
            if (combinatieArrayBoolean(combinatieArray)) {
              console.log('won')
              state = true;
              document.getElementById('notification').classList.add('shown')
              setTimeout(() => {
                document.getElementById('notification').classList.remove('shown');
                document.getElementById('profile').classList.add('shown')
                document.querySelector('#profile img').src = `img/foto${combinatieArray[0]}.jpg`
                setTimeout(() => {
                  document.getElementById('profile').classList.remove('shown')
                }, 5000)
              }, 1000)
            } else {
              state = false;
            }
            toggleCarousels(state)
            setTimeout(() => {
             combinationImg.forEach((img) => {
              img.classList.remove('shown') 
             })
              document.querySelector('#popup').classList.add('hidden')
              document.querySelector('#popup').classList.remove('shown')
            }, 2000)

          }
        }, i*0.85 * 1000 + 500);
      }

    }, 100);
});

function combinatieArrayBoolean(combinatieArray) {
  if (combinatieArray[0] === combinatieArray[1] && combinatieArray[1] === combinatieArray[2]) {
    return true;
  }
  return false;
}

function toggleCarousels(state) { 
  carousels.forEach((carousel) => {
    carousel.classList.toggle('paused', state)
    });
  console.log('carousel paused or started /// STATE: ' + state)
}
