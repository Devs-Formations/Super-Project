// =========================================
// script.js — Page d'Etienne (SAARETECH)
// =========================================

// ----- 1. Mettre à jour automatiquement l'année dans le footer -----
document.getElementById("year").textContent = new Date().getFullYear();

// ----- 2. Gestion du formulaire de contact -----
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // empêche le rechargement de la page

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (nom === "" || email === "" || message === "") {
    formFeedback.textContent = "Merci de remplir tous les champs.";
    formFeedback.style.color = "#e06666";
    return;
  }

  // Ici, en situation réelle, on enverrait les données à un serveur
  // (ex: via fetch() vers une API, ou un service comme Formspree).
  // Pour l'instant, on simule simplement une confirmation :
  formFeedback.textContent = `Merci ${nom}, votre message a bien été reçu !`;
  formFeedback.style.color = "#f0c674";

  contactForm.reset();
});

// ----- 3. Mise en surbrillance du lien de navigation actif au scroll -----
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#f0c674";
    }
  });
});