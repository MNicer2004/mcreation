/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_54dkp8j', 'template_uapep5e', '#contact-form', '5oQsosiv4KWBBx6nQ')
    .then(() => {
      // Show sent message
      contactMessage.textContent = 'Message sent successfully ✅';

      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);

      // Clear input fields
      contactForm.reset();
    }, () => {
      // Show error message
      contactMessage.textContent = 'Message not sent (service error) ❌';
    });
};

contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the class
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true, // Animations repeat
});

// Existing reveals
sr.reveal(`.perfil, .contact__form`);
sr.reveal(`.info`, { origin: 'left', delay: 800 });
sr.reveal(`.skills`, { origin: 'left', delay: 1000 });
sr.reveal(`.about`, { origin: 'right', delay: 1200 });
sr.reveal(`.projects__card, .services__card, .experience__card`, { interval: 100 });

// New reveals for gallery content and images:
sr.reveal(`.gallery__content`, { origin: 'bottom', distance: '40px', delay: 300 });
sr.reveal(`.gallery__img`, { scale: 0.85, interval: 100, delay: 400 });



document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stats__number");
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const duration = 1500;        // total animation duration (ms)
    const stepTime = Math.abs(Math.floor(duration / target));
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      counter.textContent = current >= target ? target : current;
      if (current >= target) clearInterval(timer);
    }, stepTime);
  });
});