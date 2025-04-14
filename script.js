document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const steps = [
    {
      title: "1. Autonomous Martian Mining",
      description:
        "Robotic drones and rovers mine rare metals and uranium. Solar and nuclear power support 24/7 automated operations.",
      image: "/images/mars-mining.jpg",
    },
    {
      title: "2. Resource Loading onto Starship",
      description:
        "Refined cargo is loaded into Starship via robotic cranes and autonomous logistics systems.",
      image: "/images/starship-loading.jpg",
    },
    {
      title: "3. Starship Launch from Mars",
      description:
        "Cargo Starship launches from Mars launch tower to orbital transfer station.",
      image: "/images/starship-launch-mars.jpg",
    },
    {
      title: "4. Docking at Mars Orbital Station",
      description:
        "Cargo is transferred to a nuclear propulsion ship awaiting at Mars orbit depot.",
      image: "/images/orbital-transfer.jpg",
    },
    {
      title: "5. Transit to Earth via Fission Engine",
      description:
        "A modular fission-powered transport vehicle initiates the return journey to Earth's orbital zone, providing earlier launch capability at lower development cost.",
      image: "/images/fission-engine.jpg",
    },
    {
      title: "6. Refueling at Mobile Stations",
      description:
        "Nuclear-powered refueling hubs supply energy mid-transit and reposition for future missions.",
      image: "/images/refuel-station.jpg",
    },
    {
      title: "7. Lunar Stopover",
      description:
        "Cargo ship docks at Moon orbit station to exchange materials and fuel before final leg.",
      image: "/images/moon-station.jpg",
    },
    {
      title: "8. Arrival and Descent to Earth",
      description:
        "Cargo is transferred to Earth-return Starship, which lands safely with valuable resources.",
      image: "/images/starship-landing.jpg",
    },
    {
      title: "9. Solar System Expansion",
      description:
        "Infrastructure adapts, expanding toward the asteroid belt with repositioned hubs and mobile nodes.",
      image: "/images/solar-expansion.jpg",
    },
  ];

  const stepsContainer = document.getElementById("steps");

  steps.forEach((step) => {
    const div = document.createElement("div");
    div.className = "story-step";

    div.innerHTML = `
      <img src="${step.image}" alt="${step.title}">
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    `;

    stepsContainer.appendChild(div);

    gsap.fromTo(
      div,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: div,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});
