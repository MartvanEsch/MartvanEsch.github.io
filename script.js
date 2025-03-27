let fotoArray = [];
for (let i = 1; i < 30; i++) {
  fotoArray.push(`foto${i}.jpg`);
}

let imgElementLeftArray = document.querySelectorAll('#left img');
let imgElementMiddleArray = document.querySelectorAll('#middle img');
let imgElementRightArray = document.querySelectorAll('#right img');

for (let i = 0; i < imgElementLeftArray.length; i++) {
  imgElementLeftArray[i].src = `./img/${fotoArray[Math.round(Math.random() * fotoArray.length)]}`;
}
for (let i = 0; i < imgElementMiddleArray.length; i++) {
  imgElementMiddleArray[i].src = `./img/${fotoArray[Math.round(Math.random() * fotoArray.length)]}`;
}
for (let i = 0; i < imgElementRightArray.length; i++) {
  imgElementRightArray[i].src = `./img/${fotoArray[Math.round(Math.random() * fotoArray.length)]}`;
}

document.getElementById('dice').addEventListener('click', () => {
  let randomElements = [
    Math.round(Math.random() * imgElementLeftArray.length) + 1,
    Math.round(Math.random() * imgElementMiddleArray.length) + 1,
    Math.round(Math.random() * imgElementRightArray.length) + 1
  ];
  console.log(randomElements)
  document.getElementById('left').scroll({ top: imgElementLeftArray[randomElements[0]].getBoundingClientRect().top, behavior: 'smooth' });
  document.getElementById('middle').scroll({ top: imgElementMiddleArray[randomElements[1]].getBoundingClientRect().top, behavior: 'smooth' });
  document.getElementById('right').scroll({ top: imgElementRightArray[randomElements[2]].getBoundingClientRect().top, behavior: 'smooth' });
  }
);

const fullscreenBtn = document.getElementById("fullscreen")
fullscreenBtn.addEventListener(`click`,function () {
  document.querySelector("body").requestFullscreen()
  fullscreenBtn.style.display = 'none'
})
 
