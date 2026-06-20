// Highlights the chip matching whichever category section is currently in view,
// so the sticky chip bar reflects scroll position instead of staying static.
const sections = document.querySelectorAll('.category-section');
const chips = document.querySelectorAll('.chip');

const setActiveChip = (category) => {
  chips.forEach((chip) => {
    chip.classList.toggle('is-active', chip.dataset.category === category);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveChip(entry.target.dataset.category);
      }
    });
  },
  { rootMargin: '-50% 0px -50% 0px' } // triggers when a section crosses the vertical center
);

sections.forEach((section) => observer.observe(section));
