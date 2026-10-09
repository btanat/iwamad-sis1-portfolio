document.addEventListener('DOMContentLoaded', () => {

  const themeBtn = document.getElementById('themeToggle');
  const html = document.documentElement;

  themeBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      html.setAttribute('data-theme', 'light');
      themeBtn.textContent = 'Dark mode';
    } else {
      html.setAttribute('data-theme', 'dark');
      themeBtn.textContent = 'Light mode';
    }
  });

  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formStatus = document.getElementById('formStatus');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formStatus.textContent = '';
    formStatus.className = 'status';

    let isValid = true;

    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      isValid = false;
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Message field cannot be empty.';
      isValid = false;
    }

    if (isValid) {
      formStatus.textContent = 'Thank you! Your message has been received.';
      formStatus.classList.add('success');
      form.reset(); 
    }
  });

});