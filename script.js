const openLetter = document.getElementById("openLetter");
const cover = document.getElementById("cover");
const letter = document.getElementById("letter");
const letterContent = document.getElementById("letterContent");
const chapters = [...document.querySelectorAll(".chapter")];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("chapterCounter");
const progressBar = document.getElementById("progressBar");
const confetti = document.getElementById("confetti");
const toast = document.getElementById("toast");

let current = 0;

function updateChapter() {
  chapters.forEach((chapter, index) => {
    chapter.classList.toggle("active", index === current);
  });

  prevBtn.disabled = current === 0;
  counter.textContent = `${current + 1} / ${chapters.length}`;
  progressBar.style.width = `${((current + 1) / chapters.length) * 100}%`;

  if (current === chapters.length - 1) {
    nextBtn.innerHTML = "✨ Volver a leer";
  } else {
    nextBtn.innerHTML = "Continuar →";
  }

  const active = chapters[current];
  active.scrollTop = 0;
}

function celebrate() {
  const count = window.innerWidth < 600 ? 75 : 120;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";

    const shapes = ["4px", "50%"];
    piece.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.width = `${5 + Math.random() * 7}px`;
    piece.style.height = `${8 + Math.random() * 12}px`;
    piece.style.animationDuration = `${2.7 + Math.random() * 2.8}s`;
    piece.style.animationDelay = `${Math.random() * .7}s`;
    piece.style.setProperty("--drift", `${-18 + Math.random() * 36}vw`);

    // Variedad visual sin depender de una paleta fija.
    const colors = ["#e6bd72", "#d98aa4", "#a87ab8", "#f5dca9", "#ffffff"];
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];

    confetti.appendChild(piece);

    setTimeout(() => piece.remove(), 6500);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

openLetter.addEventListener("click", () => {
  cover.classList.add("hidden");
  letter.classList.remove("hidden");
  current = 0;
  updateChapter();
  letterContent.focus({ preventScroll: true });
});

nextBtn.addEventListener("click", () => {
  if (current < chapters.length - 1) {
    current += 1;
    updateChapter();

    // El cumpleaños merece un pequeño momento especial.
    if (current === 8) {
      celebrate();
    }
  } else {
    current = 0;
    updateChapter();
    showToast("Volvamos al principio ✨");
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    updateChapter();
  }
});

// Permite usar las flechas del teclado en computadora.
document.addEventListener("keydown", (event) => {
  if (letter.classList.contains("hidden")) return;

  if (event.key === "ArrowRight" || event.key === "Enter") {
    nextBtn.click();
  }

  if (event.key === "ArrowLeft") {
    prevBtn.click();
  }
});

updateChapter();
