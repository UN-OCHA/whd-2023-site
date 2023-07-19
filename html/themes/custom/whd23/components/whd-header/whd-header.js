(function (Drupal) {
  'use strict';
  Drupal.behaviors.whdHeader = {
    attach: function (context, settings) {
      // Find our toggle button.
      var mainNav = document.querySelector('.main-nav');
      var mainNavToggle = document.querySelector('.main-nav button[aria-expanded]');
      var mainNavContents = document.querySelector('.main-nav__contents');
      var mainNavLinks = document.querySelector('.main-nav__contents a');

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
      mainNavLinks.addEventListener('click', function (ev) {
        mainNav.classList.remove('is--expanded');
        mainNavToggle.setAttribute('aria-expanded', String(false));
        mainNavContents.setAttribute('aria-hidden', String(true));
      });
    }
  };
})(Drupal);
