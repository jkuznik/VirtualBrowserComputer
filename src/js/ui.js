function renderButtons(buttons) {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Reset widoku

  const container = document.createElement("div");
  container.className = "button-container";

  buttons.forEach(btn => {
    const b = document.createElement("button");
    b.textContent = btn.label;
    b.addEventListener("click", btn.onClick);
    container.appendChild(b);
  });

  app.appendChild(container);
}
