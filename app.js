// ********** typing effect ************
const div = document.getElementById("intro");
const text = "Hi, I'm Desiree";

function typing(element, text, i = 0){
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout( () => typing(element, text, i + 1), 150);
    
}

typing(div, text);
// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function() {
    const height = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height

    if (height === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }

});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function() {
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show_link");
    }
    else {
        topLink.classList.remove("show-link");
    }

}); 
// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

// ********** about me section tabs ************
const btns = document.querySelectorAll('.tab-btn');
const aboutMe = document.querySelector('.aboutMe');
const articles = document.querySelectorAll(".content");

aboutMe.addEventListener('click', function(e) {
    //data id has attribute -> could get
    const id = e.target.dataset.id;
    if (id) {
        // remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});


// ********** projects -- swiper************
new Swiper('.card-wrapper', {

    loop: true,
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
  
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1
      },
  
      780: {
        slidesPerView: 2
      },
  
      1024: {
        slidesPerView: 3
      },
    }
  
  });


