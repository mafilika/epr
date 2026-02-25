// Fade In Animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function(entries, observer){
entries.forEach(entry => {
if(!entry.isIntersecting) return;
entry.target.classList.add('show');
observer.unobserve(entry.target);
});
}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});

// WhatsApp Form
const form = document.getElementById("whatsappForm");
if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let message = document.getElementById("message").value;

let whatsappMessage = `Hello EPR Projects,%0AName: ${name}%0APhone: ${phone}%0AProject: ${message}`;

window.open(`https://wa.me/27645552542?text=${whatsappMessage}`, "_blank");
});
}

// Lightbox
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
img.addEventListener('click', () => {
lightbox.style.display = "flex";
lightboxImg.src = img.src;
});
});

if(lightbox){
lightbox.addEventListener('click', () => {
lightbox.style.display = "none";
});
  }
