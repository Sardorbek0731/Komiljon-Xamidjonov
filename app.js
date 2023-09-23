const registerBtn = document.getElementById("register");
const formModal = document.getElementById("formModal");
const overlayBg = document.getElementById("overlayBg");
const closeBtn = document.getElementById("closeBtn");

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
