var nav = document.querySelector(".nav");
var view = document.getElementById('view');
const myNavHeight = nav.getBoundingClientRect().height;
const openingHeight = (view.getBoundingClientRect().height * 0.95);
console.log(openingHeight);
console.log(view.getBoundingClientRect());

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= myNavHeight && document.body.scrollTop < openingHeight || document.documentElement.scrollTop >= myNavHeight && document.documentElement.scrollTop < openingHeight) {
    nav.classList.add("active-menu");
  } else if (document.body.scrollTop >= openingHeight || document.documentElement.scrollTop >= openingHeight) {
    nav.classList.add("active-menu");
  } else {
    nav.classList.remove("active-menu");
  } 
};

