// ===== MENÚ HAMBURGUESA =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// ===== ANIMACIÓN DE BARRAS DE PROGRESO =====
const progressBars = document.querySelectorAll(".progress-bar span");

function fillBars() {
    progressBars.forEach(bar => {
        const target = bar.getAttribute("data-width");
        bar.style.width = target; // se llena hasta el % definido en HTML
    });
}

// Detectar cuando #skills entra en pantalla
const skillsSection = document.getElementById("skills");
let skillsSeen = false;

window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !skillsSeen) {
        fillBars();
        skillsSeen = true;
    }
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== FORMULARIO MENSAJE (Simulado) =====
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Te contactaré pronto.");
    form.reset();
});
// ===== VALIDACIÓN EN TIEMPO REAL =====
const inputs = document.querySelectorAll("#contact-form input, #contact-form textarea");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.validity.valid) {
            input.style.borderColor = "green";
        } else {
            input.style.borderColor = "red";
        }
    });
});

// ===== MENSAJE DE ÉXITO =====
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ ¡Gracias por tu mensaje, Alina lo recibirá pronto!");
    form.reset();
    inputs.forEach(i => i.style.borderColor = "#ccc");
});
