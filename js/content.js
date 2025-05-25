// Inserts the content of the project page based on the URL hash
const projectKey = window.location.hash.substring(1);
let contentArr = [
    {
        key: "boxtel_through_my_eyes",
        header: "Boxtel Through My Eyes",
        body: "In Boxtel Through My Eyes kijk ik op mijn eigen manier naar de plekken waar ik ben opgegroeid. Met fotografie, ontwerp en typografie onderzoek ik hoe een dorp vol alledaagse beelden toch barst van karakter en inspiratie. Van oude gebouwen tot lokale graffiti: elk beeld laat mijn interpretatie zien van Boxtel als een gelaagde, creatieve plek — onverwacht rijk aan visuele verhalen.",
        imgArray: ["img/print_&_posters/boxtel_through_my_eyes/poster1.jpg"]
    },
    {
        key: "tedx_lets_make",
        header: "TEDx, Lets Make",
        body: "Voor dit project gaf ik TEDx een nieuwe visuele identiteit, geïnspireerd op de kracht van bouwen — aan ideeën, gemeenschappen en toekomsten. Met een Bauhaus-achtige stijl en vormen die zijn afgeleid van bouwkranen, ontstaat een systeem dat staat voor structuur, beweging en samenwerking. Het concept Let’s Make positioneert TEDx als een plek waar ideeën niet alleen gedeeld worden, maar ook gemaakt — met een heldere visuele taal die zowel strak als betekenisvol is.",
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
            "img/misc/photography/DSC00248.webp",
            "img/misc/photography/DSC00253.webp",
            "img/misc/photography/DSC00264.webp",
            "img/misc/photography/DSC00257.webp",
            "img/misc/photography/DSC00277.webp",
            "img/misc/photography/DSC00319.webp",
            "img/misc/photography/DSC00221.webp",
            "img/misc/photography/DSC00269.webp"
        ]
    }
]
let allImgs = [];
for (let i = 0; i < contentArr.length; i++) {
    let currentProject = contentArr[i]

    currentProject.imgArray.forEach(image => {
        allImgs.push(image)
    })
    console.log(allImgs)
    if (projectKey === currentProject.key) {
        document.querySelector('h1').innerHTML = currentProject.header
        document.querySelector('p').innerHTML = currentProject.body 

        console.log(currentProject)
        let links = document.querySelectorAll('a')
        const isLastProject = i === contentArr.length - 1;
        const isFirstProject = i === 0;
        if (isLastProject) {
            links[1].style.display = 'none';
            console.log('last project');
        } else {
            links[1].href = `project.html#${contentArr[i + 1].key}`;
        }
        if (isFirstProject) {
            links[0].style.display = 'none';
            console.log('first project');
        } else {
            links[0].href = `project.html#${contentArr[i - 1].key}`;
        }

        currentProject.imgArray.forEach(image => {
            let imgElement = document.createElement('img')
            imgElement.src = image

            document.querySelector('#images').append(imgElement)
        });
    }
}

// Loads the right settings from the query params
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

// Updates the settings object
settingsButtons.forEach(button => {
    button.addEventListener('change', () => { 
        settings.dutch = settingsButtons[0].selected;
        settings.light = settingsButtons[1].selected;
        updateSettings(settings);
      })
    });

// Apply the settings to the page
function updateSettings(settings) {
  if (settings.light === true) { // Enable light mode
    document.documentElement.setAttribute('data-mode', 'light');
  } else {
    document.documentElement.removeAttribute('data-mode');
  }

  let searchParams = new URLSearchParams();
  searchParams.set('light', settings.light);
  searchParams.set('dutch', settings.dutch);
  updateLinks(searchParams);
}

// Updates the state of the buttons based on the settings object
function updateButtons(settingsButtons, settings) {
    settingsButtons.forEach((button, index) => {
        if (index === 0) {
            button.selected = settings.dutch;
        } else if (index === 1) {
            button.selected = settings.light;
        }
    });
}

// Updates the links in the page based on the settings object
function updateLinks(searchParams) {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const url = new URL(link.href, window.location.origin);
      url.search = searchParams.toString();
      link.href = url.toString();
    });
  }

// Reloads the content when the hash in the URL changes
window.addEventListener('hashchange', () => {
    location.reload();
});

  