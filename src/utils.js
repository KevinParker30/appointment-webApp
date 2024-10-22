// utils.js
export const scrollToForm = () => {
  const formElement = document.getElementById('appointment-form');
  if (formElement) {
    const headerOffset = document.querySelector('.header').offsetHeight; // Get the height of the header
    const elementPosition = formElement.getBoundingClientRect().top + window.pageYOffset; // Calculate the position
    const offsetPosition = elementPosition - headerOffset; // Adjust for the header height

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth', // Optional: adds smooth scrolling effect
    });
  }
};
 