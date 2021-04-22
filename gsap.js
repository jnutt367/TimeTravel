gsap.from("#cloud", { duration: .5, scale: 0.9, ease: "elastic", y: -10, repeat: -1 })
gsap.from("#cloud2", { duration: 2, scale: 1.1, ease: "back", y: -10, repeat: -1 })
gsap.to("#red-bubble", { duration: 5, scale: 0.6, ease: "bounce", repeat: -1 })
gsap.from("#red-bubble-small", { duration: 5, scale: 0.6, ease: "bounce", repeat: -1 })

gsap.to("#volcano", { x: 5, y: -2, duration: .01, ease: "rough", repeat: -1 })