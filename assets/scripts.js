// Lightweight JS for menu toggle and small interactions
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if(menuToggle && mainNav){
    menuToggle.addEventListener('click', function(){
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.style.display = expanded ? '' : 'block';
    });
    // hide nav on resize > breakpoint
    window.addEventListener('resize', function(){
      if(window.innerWidth > 800) mainNav.style.display = '';
    });
  }

  // Insert current year in footers
  const y = new Date().getFullYear();
  const y1 = document.getElementById('year');
  const y2 = document.getElementById('year2');
  const y3 = document.getElementById('year3');
  if(y1) y1.textContent = y;
  if(y2) y2.textContent = y;
  if(y3) y3.textContent = y;
});