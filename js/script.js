'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);



/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add("active")
    : header.classList.remove("active");
}

addEventOnElem(window, "scroll", headerActive);



/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);

// Adding load more functionality
let loadmorebtn=document.querySelector('#load-more');
let currentitem=4;

loadmorebtn.onclick = () =>{
  let card=[...document.querySelectorAll('.service .container .service-card')];
  for(var i = currentitem;i < currentitem+4;i++){
    card[i].style.display='inline-block';
  }
  currentitem += 4;
  if(currentitem >= card.length){
    loadmorebtn.style.display = 'none';
  }
}


//Dropdown navigation
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            menu.style.display = "flex";
            menu.style.animation = "fadeIn 0.3s ease-in-out";
        });

        dropdown.addEventListener("mouseleave", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            menu.style.animation = "fadeOut 0.3s ease-in-out";
            setTimeout(() => {
                menu.style.display = "none";
            }, 300); // Match fadeOut duration
        });
    });
});

 
function toggleMenu() {
  const menu = document.querySelector('.secondary-navbar .menu');
  menu.classList.toggle('active');
}


//mobile navigation

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
  });

  // Handle dropdowns on mobile
  dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('.nav-link');
      const menu = dropdown.querySelector('.dropdown-menu');

      link.addEventListener('click', function(e) {
          if (window.innerWidth <= 1024) {
              e.preventDefault();
              dropdown.classList.toggle('active');
              
              // Close other dropdowns
              dropdowns.forEach(otherDropdown => {
                  if (otherDropdown !== dropdown) {
                      otherDropdown.classList.remove('active');
                  }
              });
          }
      });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
          navMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          document.body.classList.remove('menu-open');
      }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
      if (window.innerWidth > 1024) {
          navMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          document.body.classList.remove('menu-open');
          dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
      }
  });
});