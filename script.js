const form = document.querySelector("form");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Reset status
  formStatus.textContent = "";
  formStatus.className = "form-status";

  // Validate Name
  if (name === "") {
    formStatus.textContent = "Please enter your name.";
    formStatus.classList.add("error");
    e.preventDefault();
    return;
  }

  // Validate Email
  if (!emailPattern.test(email)) {
    formStatus.textContent = "Please enter a valid email address.";
    formStatus.classList.add("error");
    e.preventDefault();
    return;
  }

  // Validate Message
  if (message === "") {
    formStatus.textContent = "Please enter your message.";
    formStatus.classList.add("error");
    e.preventDefault();
    return;
  }

  // Show "Sending..." message
  formStatus.textContent = "Sending...";
  formStatus.classList.add("success");

  // Delay 1 second, then show "Thank you" message
  setTimeout(() => {
    formStatus.textContent = "Thank you! Your message has been sent.";
  }, 1000);
  
});
