
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

    let params = new URLSearchParams(window.location.search);
    let settingsButtons = document.querySelectorAll('#settings md-switch');
    let settings = {}
    if (params) {
        settings = {
            'dutch': params.get('dutch') === 'true',
            'light': params.get('light') === 'true'
        }
    } else {
        settings = {
            'dutch': settingsButtons[0].selected,
            'light': settingsButtons[1].selected
          }
    }
    updateSettings(settings) // Update the color mode
    updateButtons(settingsButtons, settings) // Update the state of the buttons

    settingsButtons.forEach(button => {
      button.addEventListener('change', () => {
        settings.dutch = settingsButtons[0].selected;
        settings.light = settingsButtons[1].selected;
        updateSettings(settings);
      })
    })
  });

function updateSettings(settings) {
  if (settings.light) { // Enable light mode
    document.documentElement.setAttribute('data-mode', 'light');
    console.log('light mode enabled')
  } else {
    document.documentElement.removeAttribute('data-mode');
    console.log('light mode disabled')
  }

  let searchParams = new URLSearchParams();
  searchParams.set('light', settings.light);
  searchParams.set('dutch', settings.dutch);
  updateLinks(searchParams);
}

function updateLinks(searchParams) {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    const url = new URL(link.href);
    url.search = searchParams.toString();
    link.href = url.toString();
  });
}

function updateButtons(settingsButtons, settings) {
  settingsButtons.forEach((button, index) => {
      if (index === 0) {
          button.selected = settings.dutch;
      } else if (index === 1) {
          button.selected = settings.light;
      }
  });
}
