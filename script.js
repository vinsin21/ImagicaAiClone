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


gsap.from(".page2-content h1", {
    opacity: 0,
    scale: 0.3,
    y: -120,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page2-content",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 20%",
        scrub: 3
    }
})


gsap.from(".page3-content h1", {
    y: 50,
    color: "transparent",
    duratioin: 0.5,
    scrollTrigger: {
        trigger: ".page3-content",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 40%",
        scrub: 2
    }

})


gsap.from(".left-list img", {
    opacity: 0,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: ".page3-content",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 3
    }
})

gsap.from(".right-list img", {
    opacity: 0,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: ".page3-content",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 3,

    }
})