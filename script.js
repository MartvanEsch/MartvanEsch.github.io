console.log('linked');
setTimeout(function () {
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
  card.addEventListener('click', (event) => {
    card.children[0].children[0].children[0].classList.toggle('rotated')
    card.children[1].classList.toggle('hiddenDetails')
  })
})

document.querySelector('#workBtn').addEventListener('click', () => {
  let workSection = document.querySelector('#work'); // Ensure this ID exists
  if (workSection) {
    let workSectionTop = workSection.offsetTop; // Get the top position of the section
    console.log(workSectionTop);

    window.scrollTo({
      top: workSectionTop * 0.95, // Scroll to the top of the section
      left: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }
});
