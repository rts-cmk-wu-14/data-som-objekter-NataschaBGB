//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))


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

heroDiv.insertAdjacentHTML("beforeend", heroContent);


// create elements in services and insert in html
// services.forEach(service =>{
//     // console.log(service.headline)
//     const serviceDiv = document.createElement("div");
//     serviceDiv.classList.add("service");
// })



const servicesContent = /*html*/
`<article class="service">
    ${services.map((service)=>{
        return /*html*/`<p>${service.text}</p>`
    }).join("")}
</article>`;

