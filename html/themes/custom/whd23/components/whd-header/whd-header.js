(function (Drupal) {
  'use strict';
  let processed = false;

  Drupal.behaviors.whdHeader = {
    attach: function (context, settings) {
      // If this code already ran, don't run it again.
      if (processed === true) {
        return;
      }

      // Find our toggle button.
      var mainNav = document.querySelector('.main-nav');
      var mainNavToggle = document.querySelector('.main-nav__toggle');
      var mainNavContents = document.querySelector('.main-nav__contents');
      var mainNavLinks = document.querySelectorAll('.main-nav__contents a');

      // Helper function becsause we use it more than once.
      function closeNav(ev) {
        mainNav.classList.remove('is--expanded');
        mainNavToggle.setAttribute('aria-expanded', String(false));
        mainNavContents.setAttribute('aria-hidden', String(true));
      }

      // Assign event listener to allow toggling.
      mainNavToggle.addEventListener('click', function (ev) {
        // Manage state of our toggle button.
        var pressed = mainNavToggle.getAttribute('aria-expanded') === 'true';
        mainNavToggle.setAttribute('aria-expanded', String(!pressed));

        // Toggle display of main-nav
        mainNav.classList.toggle('is--expanded');
        mainNavContents.setAttribute('aria-hidden', String(pressed));
      });

      // Clicking a link should shut the nav.
      mainNavLinks.forEach((el) => {
        el.addEventListener('click', closeNav);
      });

      // Shut nav when it loses focus.
      mainNav.addEventListener('focusout', (ev) => {
        if (!mainNav.contains(ev.relatedTarget)) {
          closeNav();
        }
      });

      // Prevent future runs from adding event listeners.
      processed = true;
    },
  };
})(Drupal);
