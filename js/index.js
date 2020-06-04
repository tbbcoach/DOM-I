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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll("a");
//console.log(navItems);                                      //this is the forEach in the lecture.
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[0].style.color = 'green';
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[1].style.color = 'green';
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[2].style.color = 'green';
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[3].style.color = 'green';
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[4].style.color = 'green';
navItems[5].textContent = siteContent['nav']['nav-item-6'];
navItems[5].style.color = 'green';

// const nav = siteContent['nav'];
// nav.forEach(item => {
//   let navItem = document.createElement('li');
//   navItem.textContent = item;
// });

let headLine = document.querySelector('h1');
//console.log(headLine);
headLine.textContent = siteContent['cta']['h1'];

let button = document.querySelector('button');
console.log(button);
button.textContent = siteContent['cta']['button'];

let headerPic = document.getElementById('cta-img');
headerPic.setAttribute('src', siteContent['cta']['img-src']);

let topHeading = document.querySelectorAll('.top-content .text-content h4');
console.log(topHeading);
topHeading[0].textContent = siteContent['main-content']['features-h4'];
topHeading[1].textContent = siteContent['main-content']['about-h4'];

let topContent = document.querySelectorAll('.top-content .text-content p');
console.log(topContent);
topContent[0].textContent = siteContent['main-content']['features-content'];
topContent[1].textContent = siteContent['main-content']['about-content'];


let snippet = document.getElementById('middle-img');
snippet.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomHeading = document.querySelectorAll('.bottom-content .text-content h4');
console.log(bottomHeading);
bottomHeading[0].textContent = siteContent['main-content']['services-h4'];
bottomHeading[1].textContent = siteContent['main-content']['product-h4'];
bottomHeading[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContent = document.querySelectorAll('.bottom-content .text-content p');
console.log(bottomContent);
bottomContent[0].textContent = siteContent['main-content']['services-content'];
bottomContent[1].textContent = siteContent['main-content']['product-content'];
bottomContent[2].textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];
let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

