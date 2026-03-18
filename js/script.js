// Slides logic
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("Slide");

  // Wrap around
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show current slide
  slides[slideIndex].style.display = "block";

  // Update indicator (if you have one)
  const indicator = document.querySelector(".Indicator");
  if (indicator) {
    indicator.style.transform = `translateX(${slideIndex * 100}%)`;
  }
}

// vynl
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


const music = document.getElementById("bgmusic");
const musicBox = document.getElementById("musicBox");
const musicIcon = document.getElementById("musicIcon");

// Play / Pause toggle
musicBox.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicIcon.textContent = "⏸"; // pause icon
  } else {
    music.pause();
    musicIcon.textContent = "▶"; // play icon
  }
});

// Make the box draggable
let isDragging = false;
let offsetX, offsetY;

musicBox.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - musicBox.offsetLeft;
  offsetY = e.clientY - musicBox.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    musicBox.style.left = (e.clientX - offsetX) + "px";
    musicBox.style.top = (e.clientY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

function openLightbox(img) {
  document.getElementById("Lightbox").style.display = "flex";
  document.getElementById("LightboxImage").src = img.src;
}

function closeLightbox() {
  document.getElementById("Lightbox").style.display = "none";
}

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
