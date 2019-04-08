const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let logoElem = document.getElementById("logo-img");
logoElem.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImgElem = document.querySelector("#cta-img");
ctaImgElem.setAttribute('src', siteContent["cta"]["img-src"]);

let navElem = document.querySelectorAll("header nav a");

let navArray = Object.values(siteContent.nav);

let i = 0;

navElem.forEach(elem=>{
  elem.textContent = navArray[i];
  i++;
})

document.querySelector(".cta-text h1").setAttribute('style', 'white-space: pre;');
document.querySelector(".cta-text h1").textContent = "DOM\nIS\nAWESOME"
document.querySelector(".cta-text button").textContent = "Get Started"

document.querySelector(".top-content .text-content:first-child h4").textContent = "Features"
document.querySelector(".top-content .text-content:first-child p").textContent = siteContent["main-content"]["features-content"];

document.querySelector(".top-content .text-content:last-child h4").textContent = "About"
document.querySelector(".top-content .text-content:last-child p").textContent = siteContent["main-content"]["about-content"];

document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];

document.querySelectorAll(".bottom-content h4")[0].textContent = "Services";
document.querySelectorAll(".bottom-content h4")[1].textContent = "Product";
document.querySelectorAll(".bottom-content h4")[2].textContent = "Vision";

document.querySelectorAll(".bottom-content p")[0].textContent = siteContent["main-content"]["services-content"];
document.querySelectorAll(".bottom-content p")[1].textContent = siteContent["main-content"]["product-content"];
document.querySelectorAll(".bottom-content p")[2].textContent = siteContent["main-content"]["vision-content"];

document.querySelector(".contact h4").textContent = "Contact"

document.querySelector(".contact p").setAttribute('style', 'white-space: pre');
document.querySelectorAll(".contact p")[0].textContent = "123 Way 456 Street\nSomewhere, USA";
document.querySelectorAll(".contact p")[1].textContent = "1 (888) 888-8888";
document.querySelectorAll(".contact p")[2].textContent = "sales@greatidea.io";

document.querySelector("footer").textContent = "Copyright Great Idea! 2018"

navElem.forEach(elem => {
  elem.setAttribute('style', 'color: green');
})

addMe1 = document.createElement("A");
addMe1.textContent = "Pigmen"
addMe1.setAttribute('style', 'color: green');

addMe2 = document.createElement("A");
addMe2.textContent = "Cheesify"
addMe2.setAttribute('style', 'color: green');

document.querySelector("nav").appendChild(addMe1);
document.querySelector("nav").appendChild(addMe2);

const allH4 = document.querySelectorAll("h4");
allH4.forEach(elem => {
  elem.setAttribute('style', 'font-size: 1.5rem')
})

document.querySelector("footer").setAttribute("style", "background: yellow");

document.querySelector("nav a:last-child").setAttribute("onclick", "clickFunction()");

function clickFunction() {
  document.querySelector("h1").setAttribute("style", "color: orange")
}