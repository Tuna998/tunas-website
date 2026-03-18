const vinyls = document.querySelectorAll(".Vinyl2");
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



// Right-click overlay
document.addEventListener('DOMContentLoaded', function() {
  // Create overlay dynamically if not in HTML
  let overlay = document.getElementById('rightClickOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'rightClickOverlay';
    overlay.innerHTML = '<div class="overlayContent">What are you looking for? Just browse.</div>';
    document.body.appendChild(overlay);
  }

  // Show overlay on right-click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // block default menu
    overlay.classList.add('show');
  }, true); // capture phase ensures it triggers first

  // Hide overlay when clicking anywhere
  overlay.addEventListener('click', function() {
    overlay.classList.remove('show');
  });
});


