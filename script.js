/* =========================================
GSAP SETUP
========================================= */

gsap.registerPlugin(ScrollTrigger);

/* =========================================
PAGE LOAD ANIMATION
========================================= */

const introTimeline = gsap.timeline({
defaults: {
ease: "power3.out"
}
});

/*
Small top text
*/

introTimeline.from(".small-text", {
opacity: 0,
y: 20,
duration: 0.8
});

/*
Headline letter animation
*/

introTimeline.from(".hero-title span", {
opacity: 0,
y: 50,
rotateX: -70,
stagger: 0.045,
duration: 0.8
}, "-=0.4");

/*
Description
*/

introTimeline.from(".hero-description", {
opacity: 0,
y: 25,
duration: 0.7
}, "-=0.4");

/*
Statistics appear one by one
*/

introTimeline.from(".stat", {
opacity: 0,
y: 30,
stagger: 0.18,
duration: 0.7
}, "-=0.3");

/*
Main visual appears
*/

introTimeline.from(".main-object", {
opacity: 0,
scale: 0.7,
rotateY: -25,
y: 60,
duration: 1.3,
ease: "power4.out"
}, "-=1");

/*
Scroll indicator
*/

introTimeline.from(".scroll-indicator", {
opacity: 0,
y: 20,
duration: 0.6
}, "-=0.5");

/* =========================================
SCROLL-DRIVEN HERO ANIMATION
========================================= */

/*
The animation is connected directly
to scroll progress.

It does NOT autoplay.
*/

const scrollTimeline = gsap.timeline({
scrollTrigger: {


    trigger: ".hero",

    start: "top top",

    end: "bottom top",

    scrub: 1.5,

    pin: false,

    anticipatePin: 1
}


});

/*
Main object movement
*/

scrollTimeline.to(".main-object", {


x: 180,

y: 170,

scale: 0.55,

rotateY: 35,

rotateZ: 12,

ease: "none"


}, 0);

/*
Glow movement
*/

scrollTimeline.to(".visual-glow", {


x: 120,

y: 120,

scale: 0.6,

opacity: 0.2,

ease: "none"

}, 0);

/*
Hero content moves away slightly
*/

scrollTimeline.to(".hero-content", {


x: -120,

opacity: 0,

ease: "none"


}, 0.15);

/*
Background moves in opposite direction
*/

scrollTimeline.to(".hero-background", {


x: -100,

scale: 1.4,

opacity: 0.2,

ease: "none"


}, 0);

/* =========================================
SCROLL INDICATOR ANIMATION
========================================= */

gsap.to(".scroll-line", {


scaleY: 1.5,

transformOrigin: "top center",

duration: 1,

repeat: -1,

yoyo: true,

ease: "power1.inOut"


});

/* =========================================
OBJECT FLOATING EFFECT
========================================= */

/*
Very small idle movement.

This is only a subtle visual effect.
The main animation remains scroll-driven.
*/

gsap.to(".main-object", {


y: "+=8",

duration: 2.5,

repeat: -1,

yoyo: true,

ease: "sine.inOut"


});

/* =========================================
REFRESH SCROLLTRIGGER
========================================= */

window.addEventListener("load", () => {


ScrollTrigger.refresh();


});

/* =========================================
REDUCE MOTION SUPPORT
========================================= */

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {


gsap.globalTimeline.timeScale(0);

gsap.set(
    [
        ".hero-title span",
        ".small-text",
        ".hero-description",
        ".stat",
        ".main-object",
        ".scroll-indicator"
    ],
    {
        opacity: 1,
        clearProps: "transform"
    }
);
}



