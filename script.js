"use strict";

const previews = {
  acctsy: {
    name: "Acctsy",
    description: "Tecnologia para a rotina contábil.",
    image: "assets/acctsy.jpg",
    alt: "Página pública da Acctsy, plataforma de inteligência financeira",
    index: "01",
  },
  tov: {
    name: "TOV",
    description: "Presença digital e gestão de conteúdo.",
    image: "assets/tov.jpg",
    alt: "Página inicial do escritório Tristão de Oliveira e Valiatti",
    index: "02",
  },
  meridian: {
    name: "Meridian",
    description: "Software construído em colaboração.",
    image: "assets/meridian.jpg",
    alt: "Site público da Meridian, grupo de desenvolvimento de software",
    index: "03",
  },
};

const selector = document.querySelector(".project-selector");
const previewImage = document.querySelector("#preview-image");
const previewLink = document.querySelector("#preview-link");
const previewButtons = [...selector.querySelectorAll("button")];
selector.hidden = false;

function selectProject(button) {
  const project = previews[button.dataset.project];
  if (!project || button.getAttribute("aria-pressed") === "true") return;
  previewButtons.forEach((item) =>
    item.setAttribute("aria-pressed", String(item === button)),
  );
  previewImage.src = project.image;
  previewImage.alt = project.alt;
  previewLink.href = `#${button.dataset.project}`;
  previewLink.setAttribute("aria-label", `Conhecer o projeto ${project.name}`);
  document.querySelector("#preview-name").textContent = project.name;
  document.querySelector("#preview-description").textContent =
    project.description;
  document.querySelector("#preview-counter").textContent =
    `${project.index} / 03`;
  previewLink.classList.remove("switched");
  void previewLink.offsetWidth;
  previewLink.classList.add("switched");
}

previewButtons.forEach((button, index) => {
  button.addEventListener("click", () => selectProject(button));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next =
      event.key === "ArrowRight"
        ? (index + 1) % previewButtons.length
        : (index - 1 + previewButtons.length) % previewButtons.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = previewButtons.length - 1;
    previewButtons[next].focus();
    selectProject(previewButtons[next]);
  });
});

const copyButton = document.querySelector(".copy-email");
let copyTimer;
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    clearTimeout(copyTimer);
    const status = document.querySelector("#copy-status");
    try {
      await navigator.clipboard.writeText("gabrieldealbuquerque1@gmail.com");
      copyButton.textContent = "E-mail copiado";
      status.textContent = "E-mail copiado para a área de transferência.";
    } catch {
      copyButton.textContent = "Selecione o e-mail acima";
      status.textContent =
        "Não foi possível copiar. Selecione o endereço de e-mail acima e copie manualmente.";
    }
    copyTimer = setTimeout(() => {
      copyButton.textContent = "Copiar e-mail";
      status.textContent = "";
    }, 5000);
  });
}
document.querySelector("#year").textContent = new Date().getFullYear();
