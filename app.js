const registerBtn = document.getElementById("register");
const formModal = document.getElementById("formModal");
const overlayBg = document.getElementById("overlayBg");
const closeBtn = document.getElementById("closeBtn");
const registerForm = document.getElementById("registerForm");
const minUserImage = document.getElementById("min-user-image");

const closeModal = () => {
  formModal.classList.add("d-none");
  overlayBg.classList.add("d-none");
  document.body.style.overflow = "auto";
};

registerBtn.onclick = () => {
  formModal.classList.remove("d-none");
  overlayBg.classList.remove("d-none");
  document.body.style.overflow = "hidden";
};

overlayBg.onclick = closeModal;
closeBtn.onclick = closeModal;

registerForm.onsubmit = (e) => {
  e.preventDefault();

  window.location.href = "finalStep.html";
};

let width = screen.width;
if (width <= 480) {
  minUserImage.src = "./img/3.png";
}
