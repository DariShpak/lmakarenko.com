document.addEventListener("DOMContentLoaded", function() {
  const lines = document.querySelectorAll('.horizontal-line');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Зупиняємо спостереження після активації анімації
      }
    });
  }, {
    threshold: 0.1 // Відсоток видимості елемента для активації анімації
  });

  lines.forEach(line => {
    observer.observe(line);
  });
});