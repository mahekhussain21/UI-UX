// document.addEventListener("DOMContentLoaded", function() {
//     gsap.registerPlugin(ScrollTrigger);


// gsap.to("#sc-2", {
//     scrollTrigger: {
//         trigger: "#sc-2",
//         start: "top top",
//         markers: true,
//         toggleActions: "play reverse play reverse",
//         scrub: 1,
//         end: () => "+=" + document.querySelector("#sc-2").scrollWidth
//     },
//     x: -15000
// });


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
    mousewheel: true,
    grabcursor: true,
    keyboard: true
  });

swiper.on('reachEnd', function(){
    swiper.mousewheel.disable();
});
  
swiper.on('slideChange', function(){
    if(!swiper.isEnd && !swiper.isBeginning) {
        swiper.mousewheel.enable();
    }
});


// let container = document.querySelector("#sc-2");

// gsap.to("#sc-2", {
//     x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
//     ease: "none",
//     scrollTrigger: {
//         trigger: "#sc-2",
//         pin: true,
//         scrub: 1,

//         end: () => "+=" + container.scrollWidth,
//         invalidateOnRefresh: true,
//     }
// });

// gsap.to("#sc-3", {
//     scrollTrigger: {
//         trigger: "#sc-3",
//         start: "top top",
//         end: "bottom bottom",
//         markers: true,
//         toggleActions: "play reverse play reverse",
    
//     },
//     y: 0 // No extreme movement, allowing normal top-to-down scroll
// });


    // gsap.utils.toArray(".story-section").forEach(section => {
    //     if (section.id >= "section10" && section.id <= "section16") {
    //         gsap.fromTo(section, 
    //         { opacity: 0, x: -100 }, 
    //         { opacity: 1, x: 0, 
    //           scrollTrigger: {
    //               trigger: section,
    //               start: "top 80%",
    //               end: "top 20%",
    //               toggleActions: "play reverse play reverse"
    //           }
    //         }
    //         );
    //         console.log("x");
    //     } else {
    //         gsap.fromTo(section, 
    //         { opacity: 0, y: 80 }, 
    //         { opacity: 1, y: 0, 
    //           scrollTrigger: {
    //               trigger: section,
    //               start: "top 80%",
    //               end: "top 20%",
    //               toggleActions: "play reverse play reverse"
    //           }
    //         }
    //         );
    //         console.log("y");

    //     }
    // });

    // Background music
    let bgMusic = new Audio('aladinsong.mp3'); // Replace with actual path
    bgMusic.loop = true;
    bgMusic.volume = 0.4; // Sets the background music volume to 40%
    // bgMusic.play();
    let body = document.querySelector('body');

            body.addEventListener('mousemove', playMusic);
            body.addEventListener('scroll', playMusic);

            function playMusic() {
                const audio = document.getElementById('background-music');
                if (audio.paused) {
                    audio.play();
                }
                document.removeEventListener('mousemove', playMusic);
                document.removeEventListener('scroll', playMusic);
            }


    // Restart button functionality
    document.getElementById("restart-story").addEventListener("click", function() {
        gsap.to(window, {scrollTo: {y: 0, autoKill: false}, duration: 10});
    });
// Adjust opacity based on scroll direction
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let sections = document.querySelectorAll(".story-section");

    sections.forEach(section => {
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            gsap.to(section, { opacity: 1, duration: 0.5 });
        } else {
            // Scrolling up
            gsap.to(section, { opacity: 0.5, duration: 0.5 });
        }
    });

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);



// Zoom in text content on scroll
gsap.utils.toArray(".story-section").forEach(section => {
    gsap.fromTo(section, 
        { scale: 0.8, opacity: 0 }, 
        { 
            scale: 1, 
            opacity: 1, 
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play reverse play reverse",
                scrub: true
            }
        }
    );
});


// Add a "flow" transition effect for each section with a slower movement
gsap.utils.toArray(".story-section").forEach((section, index) => {
    gsap.fromTo(section, 
        { xPercent: index % 2 === 0 ? -100 : 100, opacity: 0 }, 
        { 
            xPercent: 0, 
            opacity: 1, 
            scrollTrigger: {
                trigger: section,
                start: "top 90%", // Adjusted for slower effect
                end: "top 10%", // Adjusted for slower effect
                toggleActions: "play reverse play reverse",
                scrub: 2 // Slower scrub effect
            },
            ease: "power1.inOut" // Softer easing for slower effect
        }
    );
});

// Add "flow" transition effect for swiper sections with slower movement
swiper.on('slideChangeTransitionStart', function() {
    let activeSlide = swiper.slides[swiper.activeIndex];
    gsap.fromTo(activeSlide, 
        { xPercent: -50, opacity: 0 }, 
        { 
            xPercent: 0, 
            opacity: 1, 
            duration: 1.5, // Slower transition duration
            ease: "power1.inOut" // Softer easing for slower effect
        }
    );
});




// // sample

// const text = `The sky above swarg was never dark. The celestial orbs, bound to the great wheels of the heavens, cast their eternal radiance upon the world above, yet their divine touch never graced Pataal Lok, the shadowed realm where the Nameless dwelled, unseen and forgotten.`;

// const textElement = document.getElementById('typewriter-text');
// let index = 0;

// function type() {
//     if (index < text.length) {
//         textElement.innerHTML += text.charAt(index);
//         index++;
//         setTimeout(type, 60); // Speed of typing
//     }
// }

// ScrollTrigger.create({
//     trigger: 'section-1', // Replace with the ID of the section
//     start: 'top 50%', // Adjust start point as neededs
//     onEnter: () => {
//         if (index === 0) { // Ensure typing starts only once
//             type();
//         }
//     }
// });

