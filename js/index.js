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