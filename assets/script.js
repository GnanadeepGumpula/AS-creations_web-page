document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted!");
  });


  const header = document.querySelector('header');
    const heroLogo = document.querySelector('#hero .hero-text img');
    const headerLogo = document.querySelector('.Header-container input[type="image"]');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('visible');
        headerLogo.src = heroLogo.src; // Sync hero image with header
        headerLogo.style.width = '50px'; // Adjust size for header logo
        headerLogo.style.height = '50px';
      } else {
        header.classList.remove('visible');
      }
    });

    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });