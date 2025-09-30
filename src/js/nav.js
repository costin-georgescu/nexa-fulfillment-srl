// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
  CShamburgerMenu.classList.toggle('cs-active');
  CSnavbarMenu.classList.toggle('cs-active');
  CSbody.classList.toggle('cs-open');
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector('#cs-expanded');
  const csExpanded = csUL.getAttribute('aria-expanded');

  if (csExpanded === 'false') {
    csUL.setAttribute('aria-expanded', 'true');
  } else {
    csUL.setAttribute('aria-expanded', 'false');
  }
}

// Smooth scrolling for navigation links with hash targets
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    // Close mobile menu if open
    const CSnavbarMenu = document.querySelector('#cs-navigation');
    const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
    if (CSnavbarMenu.classList.contains('cs-active')) {
      CSnavbarMenu.classList.remove('cs-active');
      CShamburgerMenu.classList.remove('cs-active');
      document.body.classList.remove('cs-open');
    }

    // Scroll to the target element
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll('#cs-navigation .cs-dropdown')
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle('cs-active');
  };
  item.addEventListener('click', onClick);
}
