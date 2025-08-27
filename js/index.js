// ---------- HERO ----------

// get hero div
const heroDiv = document.querySelector(".hero");

// create div with content from data.js
const heroContent = /*html*/
`<figure>
    <img src="${hero.image}" alt="">
    <figcaption>
        <h1>${hero.headline}</h1>
        <p>${hero.copy}</p>
        <button>
            <img src="${hero.icon}">
            Explore
        </button>
    </figcaption>
</figure>`

// insert content in hero div
heroDiv.insertAdjacentHTML("beforeend", heroContent);



// ---------- SERVICES ----------

// get services div
const servicesDiv = document.querySelector(".services");

// loop through services content and insert data in html div
services.forEach(service =>{
    
    const servicesContent = /*html*/
    `<article class="service">
        <img src="${service.illustration}">
        <h3>${service.headline}</h3>
        <p>${service.text}</p>
        <a href="#">${service.linktext}</a>
    </article>`

    // insert content in services div
    servicesDiv.insertAdjacentHTML("beforeend", servicesContent);

})



// ---------- FACILITIES ----------

// get facilities div
const facilitiesDiv = document.querySelector(".facilities");

// loop through facilities content and insert data in html div

const facilitiesContent = /*html*/
`<h2>${facilities.headline}</h2>

    ${facilities.options.map((option)=>{
        return /*html*/`<div class="facility">
                            <img src="${option.icon}">
                            <h4>${option.headline}</h4>
                            <p>${option.text}</p>
                            <a href="#">Show me more</a>
                        </div>`
    }).join("")}`

// insert content in facilities div
facilitiesDiv.insertAdjacentHTML("beforeend", facilitiesContent);



// ---------- SITES ----------

// get sites div
const sitesDiv = document.querySelector(".sites");

// loop through sites content and insert data in html div

const sitesContent = /*html*/
`<div class="sitesheader">
    <h2>${sites.headline}</h2>
    <p>${sites.text}</p>
    <button>
        <img src="${sites.btnicon}">
        Start
    </button>
</div>

${sites.places.map((place)=>{
    return /*html*/`<div class="sitescontent">
                        <img src="${place.img}">
                        <h4>${place.name}</h4>
                        <p>${place.city}</p>
                        <a href="#">View the Site</a>
                    </div>`
}).join("")}`

// insert content in sites div
sitesDiv.insertAdjacentHTML("beforeend", sitesContent);