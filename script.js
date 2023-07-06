// script.js

// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handling
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Perform form validation
  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector('textarea');

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields');
    return;
  }

  // Perform form submission (you can customize this part according to your needs)
  const formData = new FormData(form);
  // Here you can perform an AJAX request to submit the form data to a server

  // Clear form fields after submission
  form.reset();
});
