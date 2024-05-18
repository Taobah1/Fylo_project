// Function to validate email
function validateEmail(emailValue) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(emailValue);
}

// Function to handle form submission
function handleFormSubmission(form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = form.querySelector(".email");
    const errorMessage = form.querySelector(".error-message");
    const emailValue = emailInput.value;

    if (!validateEmail(emailValue)) {
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.style.visibility = "visible";
    } else {
      errorMessage.style.visibility = "hidden";
      // Further processing can be added here
      alert("Form submitted successfully!");
    }
  });
}

// Initialize form validation for all forms with the class 'emailForm'
const forms = document.querySelectorAll(".form");
forms.forEach(handleFormSubmission);
