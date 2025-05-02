


// Navigation Logic
let current = 1;
let path = "";

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function nextScreen() {
  if (current === 2) {
    if (path === "A") showScreen("screen3A");
    else if (path === "B") showScreen("screen3B");
    current = 3;
  } else if (current === 3) {
    if (path === "A") showScreen("screen4A");
    else if (path === "B") showScreen("screen4B");
    current = 4;
  } else {
    current++;
    showScreen(`screen${current}`);
  }
}

function choosePath(p) {
  path = p;
  nextScreen();
}

// GSAP ScrollTrigger Animation

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: ".scroll-trigger",
    start: "top center",
    onEnter: () => {
      document.querySelector(".scroll-trigger").style.background = "red";
    }
  });
});


const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  const x = -e.offsetX;
  const y = -e.offsetY;

  gsap.to(el, {
    backgroundPositionX: `${x}px`,
    backgroundPositionY: `${y}px`,
    duration: 0.5,
    ease: "power2.out"
  });
});





//--------------------------------------------
// script for xyz...








//--------------------------------------------
// script for xyz...

