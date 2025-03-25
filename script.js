console.log('linked');
setTimeout(function() {
  document.querySelector('body').classList.add('visible');
}, 100);

let filterCheckboxes = document.querySelectorAll('input[type=checkbox]')
console.log(filterCheckboxes)
filterCheckboxes.forEach(element => {
  element.addEventListener('change', (element) => {
   let label = document.querySelector(`label[for="${element.target.id}"]`)
   let checked = element.target.checked
   label.classList.toggle('checked')
  })
});

let workCards = document.querySelectorAll('#work article')
workCards.forEach(card => {
  card.addEventListener('click', (event) =>{
    card.children[0].children[0].children[0].classList.toggle('rotated')
    card.children[1].classList.toggle('hiddenDetails')
  })
})