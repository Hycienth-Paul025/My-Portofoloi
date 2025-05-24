let navLinks = document.querySelectorAll("li a");

navLinks.forEach((links) => {
  links.addEventListener("click", () => {
    removeActive();
    links.classList.add("active");
  });
});

function removeActive() {
  navLinks.forEach((links) => {
    links.classList.remove("active");
  });
}

// whenever any of the nav links is clicked, the nav lists is removed

navLinks.forEach((links) => {
  links.addEventListener("click", () => {
    navLists.classList.remove("show-nav-menu");
  });
});

// show nav links when you clicked on the toggle icon

const navDisplay = document.querySelector(".hamburger");

let navLists = document.querySelector(".nav-links");

navDisplay.addEventListener("click", () => {
  navLists.classList.add("show-nav-menu");
});

// remove nav links when you clicked on the close icon

const navClose = document.querySelector(".close");

navClose.addEventListener("click", () => {
  navLists.classList.remove("show-nav-menu");
});

// Add class shadow to nav bar when scrollling down

const navEl = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navEl.classList.add("nav-shadow");
  } else {
    navEl.classList.remove("nav-shadow");
  }
});

//Add active class for each section when scrolled on

window.addEventListener("scroll", () => {
  const sectionsEl = document.querySelectorAll("section[id]");
  const scrollDown = window.scrollY;

  sectionsEl.forEach((current) => {
    const sectHeight = current.offsetHeight;
    const sectTop = current.offsetTop - 60;
    const sectId = current.getAttribute("id");

    let sectClass = document.querySelector(
      ".nav-links a[href*= " + sectId + "]"
    );

    if (scrollDown > sectTop && scrollDown <= sectTop + sectHeight) {
      sectClass.classList.add("active");
    } else {
      sectClass.classList.remove("active");
    }
  });
});

//Display scrollup button when you scroll up to 350 viewport height
const scrollUpBtn = document.getElementById("scrollup");

function showScroll() {
  if (window.scrollY >= 350) {
    scrollUpBtn.classList.add("active-scroll");
  } else {
    scrollUpBtn.classList.remove("active-scroll");
  }
}
window.addEventListener("scroll", showScroll);

//Footer Year
const current = new Date();
let yearEL = document.getElementById("time");
yearEL.textContent = current.getFullYear();
