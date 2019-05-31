// Use JavaScript to obtain a reference to the first section with the class of article_header and 
// change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList 
// property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const firstSectionEl = document.querySelector(".article__header");
firstSectionEl.textContent = "Welcome to the Melanie Bond blog";

const allSectionEl = document.querySelectorAll(".article__header");
allSectionEl[0].classList.add("important");

const dashedClassEl = document.querySelector(".dashed");
dashedClassEl.classList.remove("dashed");

const footerSectionEl = document.querySelector(".article__footer");
footerSectionEl.classList.add("goldenrod");