document.addEventListener("DOMContentLoaded", function() {
  // Back to top button
  var backToTopButton = document.getElementById("back-to-top");

  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  backToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Fade-in animation
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });

  // Hamburger menu
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const mainNav = document.getElementById("main-nav");

  hamburgerMenu.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#main-nav a");

  window.addEventListener("scroll", function() {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Mobile-specific link adjustments
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    const whatsAppLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsAppLinks.forEach(link => {
      const phone = link.href.split('/').pop();
      if (phone) {
        link.href = `whatsapp://send?phone=${phone}`;
        link.removeAttribute('target');
      }
    });
  }
});
