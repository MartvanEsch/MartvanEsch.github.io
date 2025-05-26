window.contentArr = [
    {
        key: "boxtel_through_my_eyes",
        header: "Boxtel Through My Eyes",
        body: "In Boxtel Through My Eyes kijk ik op mijn eigen manier naar de plekken waar ik ben opgegroeid. Met fotografie, ontwerp en typografie onderzoek ik hoe een dorp vol alledaagse beelden toch barst van karakter en inspiratie. Van oude gebouwen tot lokale graffiti: elk beeld laat mijn interpretatie zien van Boxtel als een gelaagde, creatieve plek — onverwacht rijk aan visuele verhalen.",
        imgArray: ["img/print_&_posters/boxtel_through_my_eyes/poster1.jpg"],
        class: "Print & Posters"
    },
    {
        key: "tedx_lets_make",
        header: "TEDx, Lets Make",
        body: "Voor dit project gaf ik TEDx een nieuwe visuele identiteit, geïnspireerd op de kracht van bouwen — aan ideeën, gemeenschappen en toekomsten. Met een Bauhaus-achtige stijl en vormen die zijn afgeleid van bouwkranen, ontstaat een systeem dat staat voor structuur, beweging en samenwerking. Het concept Let’s Make positioneert TEDx als een plek waar ideeën niet alleen gedeeld worden, maar ook gemaakt — met een heldere visuele taal die zowel strak als betekenisvol is.",
        imgArray: ["img/branding/tedx_lets_make/poster2.png"],
        class: "Branding"
    }, 
    {
        key: "spirit_day",
        header: "Spirit Day",
        body: "Voor Spirit Day ontwierp ik een campagne die de kracht van solidariteit en bewustwording benadrukt. Met een frisse, moderne stijl en krachtige typografie, roept het ontwerp op tot actie en betrokkenheid. De campagne is gericht op het creëren van een visuele impact die de boodschap van inclusiviteit en steun versterkt.",
        imgArray: ["img/print_&_posters/spirit_day/poster3.png"],
        class: "Print & Posters"
    },
    {
        key: "photography",
        header: "Photography",
        body: "In mijn fotografie draait het om compositie, contrast en helderheid. Elk beeld is benaderd als een ontwerp: een balans tussen gevoel en structuur. Van rauwe texturen tot stille momenten — fotografie is voor mij een manier om visueel te denken én te maken.",
        imgArray: [
            "img/misc/photography/DSC00311.webp",
            "img/misc/photography/DSC00319.webp",
            "img/misc/photography/DSC00248.webp",
            "img/misc/photography/DSC00253.webp",
            "img/misc/photography/DSC00158.webp",
            "img/misc/photography/DSC00221.webp",
            "img/misc/photography/DSC00277.webp",
            "img/misc/photography/DSC00269.webp",
            "img/misc/photography/DSC00264.webp",
            "img/misc/photography/DSC00262.webp",
            "img/misc/photography/DSC00257.webp",
        ],
        class: "Misc"
    },
    {
        key: "inspired_by_richard_sapper",
        header: "Inspired by Richard Sapper",
        body: "Deze CD-speler is een ontwerpstudie geïnspireerd op het werk van industrieel ontwerper Richard Sapper. Zijn speelse benadering van functionaliteit en zijn aandacht voor vorm en detail waren het startpunt voor dit ontwerp. Het kleurgebruik is direct afgeleid van Sappers voorkeur voor sterke contrasten en industriële tinten, terwijl het patroon en de vlakverdeling verwijzen naar zijn manier van visueel ritme aanbrengen in alledaagse objecten.",
        imgArray: ["img/creative_projects/inspired_by_richard_sapper/1746024811243.webp"],
        class: "Creative Projects"
    },
    {
        key: "waves_of_war",
        header: "Waves of War",
        body: "Deze installatie neemt je mee in de tijd vlak voor de Tweede Wereldoorlog, vanuit het perspectief van een Duitse soldaat. Het is een bureau vol aanwijzingen: propaganda, kaarten, een radio en andere objecten die de opkomst van het conflict voelbaar maken.",
        imgArray: ["img/creative_projects/waves_of_war/bureau.jpg"],
        class: "Creative Projects"
    }

]

window.contentArr.forEach(item => {
    item.imgArray.forEach(src => {
        const img = new Image();
        img.src = src;
        console.log(`Preloading image: ${src}`);
    });
});
