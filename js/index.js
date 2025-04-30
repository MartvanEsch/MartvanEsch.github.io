
  document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value || document.getElementById('name').getAttribute('value');
    const email = document.getElementById('email').value || document.getElementById('email').getAttribute('value');
    const message = document.getElementById('message').value || document.getElementById('message').getAttribute('value');

    const formData = new FormData();
    formData.append('access_key', 'c4bc257d-630c-4d9f-969f-68832cb93862'); // Replace with your Web3Forms access key
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json().then(data => {
        console.log(data);
        return data;
    });
    
    if (result.success) {
      alert("Message sent successfully!");
      document.getElementById('contact-form').reset();
    } else {
      alert("Something went wrong.");
    }
  });

  let selectedArr = [];
  window.addEventListener('DOMContentLoaded', () => {
    const filterChips = document.querySelectorAll('md-filter-chip');
    const projectCards = document.querySelectorAll('#artwork > *')

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const label = chip.getAttribute('label');
        
        if (selectedArr.includes(label)) {
          selectedArr = selectedArr.filter(item => item !== label);
        } else {
          selectedArr.push(label);
        }

        projectCards.forEach(card => {
          const cardClass = card.getAttribute('class');

          if (selectedArr.includes(cardClass) || selectedArr.length === 0) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        })

        console.log(selectedArr);
      });
    });
  });
  
  
