const form = document.querySelector('.form-control');
const formStatus = document.getElementById('formStatus');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.className = "form-status error";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    formStatus.textContent = "Please enter a valid email address.";
    formStatus.className = "form-status error";
    return;
  }

  formStatus.textContent = "Thank you! Your message has been sent.";
  formStatus.className = "form-status success";

  form.reset();
});
