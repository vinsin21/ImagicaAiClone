let tl = gsap.timeline()


tl.from(".nav img, .nav .nav-links", {
    y: -200,
    opacity: 0,
    delay: 0.3,
    stagger: 0.2
})


gsap.from(".nav .nav-btn", {
    x: 200,
    y: -100,
    opacity: 0,
    delay: 1.5,
    stagger: 1
})

gsap.from(".page1-content h3", {
    opacity: 0.1,
    duration: 0.7,

})


gsap.from(".page1-content h1", {
    y: 200,
    opacity: 0,
    delay: 1

})


gsap.from(".page1-btn", {
    opacity: 0.0,
    duration: 2,
    delay: 1,
    stagger: 1,
})