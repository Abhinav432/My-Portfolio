// Animated typing effect for hero moving text
const movingText = document.querySelector('.moving-text');
const messages = [ " Welcome My Portfolio","ABHINAV","Modern Developer",  "MERN Stack "];
let messageIdx = 0, charIdx = 0, typing = true;

function typeAnimation() {
  if (!movingText) return;
  if (typing) {
    if (charIdx < messages[messageIdx].length) {
      movingText.textContent += messages[messageIdx][charIdx++];
      setTimeout(typeAnimation, 64);
    } else {
      typing = false;
      setTimeout(typeAnimation, 1400);
    }
  } else {
    if (charIdx > 0) {
      movingText.textContent = messages[messageIdx].slice(0, --charIdx);
      setTimeout(typeAnimation, 24);
    } else {
      typing = true;
      messageIdx = (messageIdx + 1) % messages.length;
      setTimeout(typeAnimation, 300);
    }
  }
}
typeAnimation();

// Reveal sections on scroll
const hiddenSections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
},{ threshold: 0.2 });
hiddenSections.forEach(section => sectionObserver.observe(section));

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav .nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

//  navbar animation script ----------

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 50) {
        // Scroll Down -> Hide navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll Up -> Show navbar
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Add this after your existing code

// 3D Image Animation
const heroImage = document.querySelector('.hero-image');
const profileImg = document.querySelector('.profile-img');

heroImage.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = heroImage.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    heroImage.classList.add('moving');
    
    requestAnimationFrame(() => {
        profileImg.style.transform = `
            rotateY(${x * 20}deg)
            rotateX(${y * -20}deg)
            translateZ(10px)
        `;
    });
});

heroImage.addEventListener('mouseleave', () => {
    heroImage.classList.remove('moving');
    profileImg.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
});

// Add tilt effect for mobile devices
window.addEventListener('deviceorientation', (e) => {
    if (e.beta && e.gamma) {
        const tiltX = e.gamma / 45;
        const tiltY = e.beta / 45;
        
        requestAnimationFrame(() => {
            profileImg.style.transform = `
                rotateY(${tiltX * 10}deg)
                rotateX(${tiltY * 10}deg)
                translateZ(10px)
            `;
        });
    }
});

//  form section script ----------

// Add this at the end of your main.js file

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add submission animation
    const btn = contactForm.querySelector('.submit-btn');
    btn.innerHTML = '<span class="loading">Sending...</span>';
    btn.disabled = true;
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
        btn.innerHTML = 'Message Sent!';
        btn.style.background = '#28a745';
        
        // Reset form after 2 seconds
        setTimeout(() => {
            contactForm.reset();
            btn.innerHTML = 'Send Message';
            btn.style.background = '#007bff';
            btn.disabled = false;
        }, 2000);
    }, 1500);
});
