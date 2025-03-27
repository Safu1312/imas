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


//js for FAQ


  document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll("[data-accordion-action]");

    faqButtons.forEach(button => {
      button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

        // Close all FAQs first
        document.querySelectorAll(".card-content").forEach(item => {
          item.style.maxHeight = "0px";
          item.style.padding = "0 15px";
        });

        document.querySelectorAll(".action-icon .open").forEach(icon => {
          icon.style.display = "block";
        });

        document.querySelectorAll(".action-icon .close").forEach(icon => {
          icon.style.display = "none";
        });

        // Open the clicked FAQ if it wasn't open
        if (!isOpen) {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding = "10px 15px";
          this.querySelector(".open").style.display = "none";
          this.querySelector(".close").style.display = "block";
        }
      });
    });
  });



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


//Navigation menu 

