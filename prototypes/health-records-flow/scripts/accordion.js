/**
 * Accessible Single-Open Accordion
 * Implements WCAG 2.1 accordion pattern with keyboard support
 */

document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach((button) => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const contentId = button.getAttribute('aria-controls');
      const content = document.getElementById(contentId);

      // Close all other accordion items (single-open behavior)
      accordionHeaders.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          const otherContentId = otherButton.getAttribute('aria-controls');
          const otherContent = document.getElementById(otherContentId);
          if (otherContent) {
            otherContent.hidden = true;
          }
        }
      });

      // Toggle current item
      if (isExpanded) {
        // Close current item
        button.setAttribute('aria-expanded', 'false');
        content.hidden = true;
      } else {
        // Open current item
        button.setAttribute('aria-expanded', 'true');
        content.hidden = false;
      }
    });

    // Keyboard support: Enter and Space should activate
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });
});
