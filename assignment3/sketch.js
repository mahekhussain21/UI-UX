// Navigation Logic with Custom Transitions, Ambient Audio, and Interaction SFX
let current = 1;
let path = "";

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  target.classList.add("active");
  gsap.fromTo(target, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.75 });
  playSFX('click');
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

  // Ambient Sound Autoplay (Muted by default, user must interact to unmute)
  ambient.loop = true;
  ambient.volume = 0.2;
  document.body.addEventListener('click', () => {
    if (ambient.paused) ambient.play();
  });

  // Add hover sound to buttons
  document.querySelectorAll("button, input, select").forEach(el => {
    el.addEventListener("mouseover", () => playSFX("hover"));
    el.addEventListener("input", () => playSFX("type"));
  });
});

// Audio SFX System
const sfx = {
  click: new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_7d33e47bb5.mp3"),
  hover: new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_730e003b19.mp3"),
  type: new Audio("https://cdn.pixabay.com/audio/2022/03/02/audio_b2c564191f.mp3")
};

const ambient = new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_1818cc3c07.mp3");

function playSFX(name) {
  if (sfx[name]) {
    sfx[name].currentTime = 0;
    sfx[name].play();
  }
} 
