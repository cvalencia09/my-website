document.querySelector('.hamburger').addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('expanded');
      });
      
// Close menu on Escape key
document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          document.querySelector('.nav-links').classList.remove('expanded');
        }
      });
      
// Close menu on outside click
document.addEventListener('click', (event) => {
        const isHamburgerClick = event.target.closest('.hamburger');
        const isNavLinksClick = event.target.closest('.nav-links');
        if (!isHamburgerClick && !isNavLinksClick) {
          document.querySelector('.nav-links').classList.remove('expanded');
        }
});