
 export const scrollToForm = () => {
   const formElement = document.getElementById('appointment-form');
   if (formElement) {
     formElement.scrollIntoView({ behavior: 'smooth' });
   }
 };