const vinyls = document.querySelectorAll(".Vinyl");
const modal = document.getElementById("Modal");
const modalImg = document.getElementById("ModalImage");
const closeBtn = document.getElementById("Close");

// Click on vinyl → open modal
vinyls.forEach(v => {
  v.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = v.src;
  });
});

// Close modal when clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});