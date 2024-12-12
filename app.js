const items = document.querySelectorAll('.informacoes .item');
const informacoes = document.getElementById('informacoes');

// Improved IntersectionObserver approach with optional threshold:
const options = {
  root: null, // Observe relative to viewport (default)
  threshold: 0.5 // Element is considered visible when 50% or more is in view
};

let observer;

function handleVisibilityChange(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.transform = 'translateX(0)';
          item.style.opacity = '1';
        }, index * 200);
      });

      // Optionally, disconnect observer to avoid redundant checks:
      if (observer) {
        observer.unobserve(informacoes); // Disconnect when fully visible
      }
    }
  });
}

// Create and start observer:
observer = new IntersectionObserver(handleVisibilityChange, options);
observer.observe(informacoes);