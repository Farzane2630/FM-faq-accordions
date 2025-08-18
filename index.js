const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => toggleAccordion(accordion));
  accordion.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();

      toggleAccordion(accordion);
    }
  });
});

function toggleAccordion(accordion) {
  accordion.getAttribute("aria-expanded") === "true"
    ? accordion.setAttribute("aria-expanded", "false")
    : accordion.setAttribute("aria-expanded", "true");
}
