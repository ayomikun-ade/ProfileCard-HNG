document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Get errors
    const errors = {
      name: document.getElementById("error-name"),
      email: document.getElementById("error-email"),
      subject: document.getElementById("error-subject"),
      message: document.getElementById("error-message"),
    };

    let isValid = true;

    // Clear previous errors
    Object.values(errors).forEach((err) => (err.textContent = ""));
    successMsg.textContent = "";

    // Validate name
    if (!name.value.trim()) {
      errors.name.textContent = "Full name is required.";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email.value.trim()) {
      errors.email.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      errors.email.textContent = "Enter a valid email (name@example.com).";
      isValid = false;
    }

    // Validate subject
    if (!subject.value.trim()) {
      errors.subject.textContent = "Subject is required.";
      isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
      errors.message.textContent = "Message is required.";
      isValid = false;
    } else if (message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      successMsg.textContent =
        "Thank you! Your message has been sent successfully.";
      form.reset();
    }
  });
});
