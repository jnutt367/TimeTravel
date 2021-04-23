gsap.registerPlugin(ScrollTrigger)
    //
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#volcano",
        duration: 5,
        markers: true,
        start: "top 70%",
        end: "end 40%",
        toggleActions: "play none reverse reset"
    }
})

.to("#cloud", { duration: 1.9, y: 100, scale: 1.1, ease: "elastic", y: -10, repeat: -1 })
    .to("#terry", { duration: 4, x: 400, y: -650, ease: "elastic" })
    .to("#terry", { duration: 2, x: 777, ease: "power1" })
    .from("#cloud2", { duration: 2, scale: 1.1, ease: "back", y: -10, repeat: -1 })
    .to("#red-bubble", { duration: 2, scale: 0.6, ease: "bounce", repeat: -1 })
    .from("#red-bubble-small", { duration: 1, scale: 0.6, ease: "bounce", repeat: -1 })
    .to("#volcano", { x: 5, y: -2, duration: .01, ease: "rough", repeat: -1 })
    .to("#second-red-bubble-small", { duration: 1.7, scale: 0.6, ease: "bounce", repeat: -1 })
    .to("#second-red-bubble", { duration: 1.1, scale: 1.4, ease: "bounce", repeat: -1 })
    .to("#first-tree", { x: 2, duration: .1, ease: "rough", repeat: -1 })