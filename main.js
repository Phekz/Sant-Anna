// Menu Mobile Toggle
const mobileBtn = document.getElementById("mobile-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Fechar menu mobile ao clicar em um link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Formulário de Agendamento
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Aqui você pode adicionar lógica para enviar os dados para um servidor
  // ou integrar com WhatsApp API

  alert(
    "Solicitação enviada! Entraremos em contato pelo WhatsApp para confirmar o horário."
  );

  // Limpar formulário após envio
  bookingForm.reset();
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 80; // Altura do header fixo
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Adicionar classe ativa ao header ao scrollar
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(18, 18, 18, 0.98)";
  } else {
    header.style.backgroundColor = "rgba(18, 18, 18, 0.9)";
  }
});
