//parallax effect
let sky = document.getElementById('sky');
let lake = document.getElementById('lake');
let sun = document.getElementById('sun');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let mountain3 = document.getElementById('mountain3');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sky.style.top = value * 0.75 + 'px';
    sun.style.top = value * 0.5 + 'px';
    lake.style.top = value * 0.7 + 'px';
    mountain1.style.top = value * 0.7 + 'px';
    mountain2.style.top = value * 0.5 + 'px';
    mountain3.style.top = value * 0.25 + 'px';
})

//hamburger menu (sholace element)

  const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('sl-button[type="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());


//gsaptimeline scroll
const why = gsap.timeline()

why.to('.happy', {
    x: -580,
    duration: 2,
    delay: 0.5,
    ease: "power4.out"
  })

why.from('.above .text', {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    duration: 2
  }, '-=1')


  //anime.js img gallery

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },    
  });

  
