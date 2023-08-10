var timeLine = gsap.timeline();

timeLine
  .from(".hero-text-box", {
    duration: 4,
    scale: 0.7,
    ease: "Expo.easeInOut",
    opacity: 0,
  })
  .from(
    ".hero-img-box",
    {
      duration: 2,
      x: -110,
      ease: "easeInOut",
    },
    "-=2"
  )
  .from(
    ".section-recipes",
    {
      duration: 2.5,
      x: 100,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "3"
  );
