let carousels = document.querySelectorAll('#carousel *')
console.log(carousels)

const fullscreenBtn = document.getElementById("fullscreen")
fullscreenBtn.addEventListener(`click`,function () {
  document.querySelector("body").requestFullscreen()
  fullscreenBtn.style.display = 'none'
})
  
document.addEventListener('keydown', (e) => {
  console.log(e.code);

  if (e.code === 'Space') {
    console.log('spinning');

    document.querySelector('#overlay').classList.add('hidden');
    setTimeout(() => {
      document.querySelector('#popup').classList.add('shown');
      let combinationImg = document.querySelectorAll('#popup img');
      carousels.forEach((carousel) => {
        carousel.classList.add('paused')
      });

      for (let i = 0; i < combinationImg.length; i++) {
        setTimeout(() => {
          combinationImg[i].src = 'img/foto.jpg'
          combinationImg[i].classList.add('shown')
        }, i*2 * 1000 + 1000);
      }

    }, 100);
  }
});
