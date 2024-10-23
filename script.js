document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;

  // Verificar si el modo oscuro está guardado en localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('darkMode', null);
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });

  // Animaciones al hacer scroll
  const fadeElems = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElems.forEach(elem => observer.observe(elem));

  // Lazy loading de imágenes
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
});
