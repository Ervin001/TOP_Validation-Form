const form = document.querySelector('.form');
const email = document.querySelector('.email-input');
const country = document.querySelector('.country-input');
const zip = document.querySelector('.zip');
const password = document.querySelector('password-input');
const confirmPassword = document.querySelector('.confirm-password-input');
const submitBtn = document.querySelector('btn');

form.addEventListener('submit', (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

// Input for Email
email.addEventListener('input', (e) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

// Input for Country
country.addEventListener('input', (e) => {
  if (country.validity.typeMismatch) {
    country.setCustomValidity('Please add country you reside in');
  } else {
    country.setCustomValidity('');
  }
});

// Input for Zip Code
zip.addEventListener('input', (e) => {
  if (zip.validity.typeMismatch) {
    zip.setCustomValidity('Please add you Zip code');
  } else {
    zip.setCustomValidity('');
  }
});

// Input for Password
password.addEventListener('input', (e) => {
  if (password.validity.typeMismatch) {
    password.setCustomValidity('Please enter a password');
  } else {
    password.setCustomValidity('');
  }
});

// Input for Confirm-Password
confirmPassword.addEventListener('input', (e) => {
  if (confirmPassword.validity.typeMismatch) {
    confirmPassword.setCustomValidity('Please enter a password');
  } else {
    confirmPassword.setCustomValidity('');
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an email address.';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an email address.';
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}
