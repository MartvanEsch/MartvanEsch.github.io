const projectKey = window.location.hash.substring(1);

let contentArr = [
    {
        key: "inspired_by_richard_sapper", header: "Inspired by Richard Sapper", body: "I recently undertook the exciting challenge of reimagining a classic CD player in the iconic style of Richard Sapper. Inspired by Sapper's emphasis on sleek lines, minimalist form, and functional elegance, I approached the redesign with a focus on integrating modern technology seamlessly into a timeless aesthetic. The result is a reinterpretation that honors Sapper's design philosophy while enhancing usability and visual appeal. This project not only allowed me to showcase my skills in industrial design but also provided an opportunity to pay homage to a design legend whose work continues to inspire innovation in the field.", 
        imgArray: ["img/creative_projects/inspired_by_richard_sapper/1746024811243.webp"]
    },
    {
        key: "waves_of_war", header: "Waves of War", body: "I recently undertook the exciting challenge of reimagining a classic CD player in the iconic style of Richard Sapper. Inspired by Sapper's emphasis on sleek lines, minimalist form, and functional elegance, I approached the redesign with a focus on integrating modern technology seamlessly into a timeless aesthetic. The result is a reinterpretation that honors Sapper's design philosophy while enhancing usability and visual appeal. This project not only allowed me to showcase my skills in industrial design but also provided an opportunity to pay homage to a design legend whose work continues to inspire innovation in the field.", 
        imgArray: ["img/creative_projects/inspired_by_richard_sapper/1746024811243.webp"]
    },
    {
        key: "boxtel_through_my_eyes", header: "Boxtel Through My Eyes", body: "I recently undertook the exciting challenge of reimagining a classic CD player in the iconic style of Richard Sapper. Inspired by Sapper's emphasis on sleek lines, minimalist form, and functional elegance, I approached the redesign with a focus on integrating modern technology seamlessly into a timeless aesthetic. The result is a reinterpretation that honors Sapper's design philosophy while enhancing usability and visual appeal. This project not only allowed me to showcase my skills in industrial design but also provided an opportunity to pay homage to a design legend whose work continues to inspire innovation in the field.", 
        imgArray: ["img/creative_projects/inspired_by_richard_sapper/1746024811243.webp"]
    },
    {
        key: "capturing_life", header: "Capturing Life", 
        body: "Photography has always drawn me in because of its unique ability to tell a story through composition and color. I’m fascinated by how the framing of a shot, the balance of elements, and the interplay of light and hue can evoke emotion, suggest a narrative, or capture a fleeting moment in time. For me, each photograph is a chance to explore visual storytelling—transforming everyday scenes into something more expressive and intentional.", 
        imgArray: ["img/misc/photography/DSC00085.webp", "img/misc/photography/DSC00158.webp", "img/misc/photography/DSC00181.webp", "img/misc/photography/DSC00221.webp", "img/misc/photography/DSC00248.webp", "img/misc/photography/DSC00253.webp", "img/misc/photography/DSC00262.webp", "img/misc/photography/DSC00264.webp", "img/misc/photography/DSC00268.webp", "img/misc/photography/DSC00269.webp", "img/misc/photography/DSC00277.webp", "img/misc/photography/DSC00309.webp", "img/misc/photography/DSC00311.webp", "img/misc/photography/DSC00313.webp", "img/misc/photography/DSC00314.webp", "img/misc/photography/DSC00316.webp", "img/misc/photography/DSC00319.webp", "img/misc/photography/DSC00328.webp", "img/misc/photography/DSC00345.webp", "img/misc/photography/DSC00383.webp", "img/misc/photography/DSC00364.webp"]
    }
]

window.addEventListener("hashchange", function () {
    location.reload();
});

for (let i = 0; i < contentArr.length; i++) {
    let currentProject = contentArr[i]
    if (projectKey === currentProject.key) {
        document.querySelector('h1').innerHTML = currentProject.header
        document.querySelector('p').innerHTML = currentProject.body 

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

        console.log(links)
    }
}

