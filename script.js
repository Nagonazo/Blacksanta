
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text").forEach((text, i) => {
  gsap.to(text, {
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out"
  });
});
