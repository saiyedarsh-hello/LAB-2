// Optional enhancement: Smooth scroll and visual feedback
document.addEventListener("DOMContentLoaded", () => {
  // Listen for hash change to ensure target section is smoothly scrolled to
  window.addEventListener("hashchange", () => {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
