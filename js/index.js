let contentArr = [
  {
      key: "boxtel_through_my_eyes",
      header: "Boxtel Through My Eyes",
      body: "Boxtel Through My Eyes is a personal visual project that reimagines my hometown, Boxtel, through different artistic styles. Using photography, design, and typography, I explored how places hold stories and inspiration. From historic buildings to local graffiti, each poster captures my view of Boxtel as a layered, expressive, and creative space—a hidden treasure chest of art.",
      imgArray: ["img/print_&_posters/boxtel_through_my_eyes/poster1.jpg"]
  },
  {
      key: "tedx_lets_make",
      header: "TEDx, Lets Make",
      body: "As a multimedia design student, I reimagined the TEDx brand through a bold, Bauhaus-inspired lens, merging modernist abstraction with the raw spirit of construction and ideation. The concept, titled “Let’s Make,” symbolizes TEDx as a space of constant building — of ideas, of communities, of futures. The visual identity is grounded in the use of geometric, abstract forms that subtly reference construction cranes — a metaphor for the mental and cultural scaffolding that TEDx provides. The minimalist color palette and strong typographic structure pay homage to the Bauhaus school’s utilitarian beauty, while motion design elements and layout experiments bring a contemporary edge. This rebrand isn't just aesthetic — it reframes TEDx as a platform in motion, emphasizing progress, collaboration, and the architecture of thought. Every shape, every form, every animation is designed to communicate that powerful ideas aren’t just talked about — they’re built.",
      imgArray: ["img/branding/tedx_lets_make/poster2.png"]
  },
  {
      key: "error",
      header: "Boxtel Through My Eyes",
      body: "I recently undertook the exciting challenge of reimagining a classic CD player in the iconic style of Richard Sapper. Inspired by Sapper's emphasis on sleek lines, minimalist form, and functional elegance, I approached the redesign with a focus on integrating modern technology seamlessly into a timeless aesthetic. The result is a reinterpretation that honors Sapper's design philosophy while enhancing usability and visual appeal. This project not only allowed me to showcase my skills in industrial design but also provided an opportunity to pay homage to a design legend whose work continues to inspire innovation in the field.",
      imgArray: ["img/creative_projects/inspired_by_richard_sapper/1746024811243.webp"]
  },
  {
      key: "capturing_life",
      header: "Capturing Life",
      body: "Photography has always drawn me in because of its unique ability to tell a story through composition and color. I’m fascinated by how the framing of a shot, the balance of elements, and the interplay of light and hue can evoke emotion, suggest a narrative, or capture a fleeting moment in time. For me, each photograph is a chance to explore visual storytelling—transforming everyday scenes into something more expressive and intentional.",
      imgArray: [
          "img/misc/photography/DSC00085.webp",
          "img/misc/photography/DSC00158.webp",]
  }
]
let allImgs = [];
contentArr.forEach(project => {
  project.imgArray.forEach(image => {
    allImgs.push(image)
  })
})
console.log(allImgs)
let hiddenImage = document.getElementById('hiddenImage')
allImgs.forEach(image => {
  hiddenImage.src = image
  console.log('loading image: ' + image)
})

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
