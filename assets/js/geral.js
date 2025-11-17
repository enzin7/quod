aberto = false;

function abrirSobre() {
  document.getElementById("sobre_rodape").style.display = "block";
  document.body.style.cursor = "pointer";

  setTimeout(() => {
    aberto = true;
  }, 500);
}

document.body.addEventListener("click", () => {
  if (aberto) {
    document.getElementById("sobre_rodape").style.display = "none";
    document.body.style.cursor = "auto";
    aberto = false;
  }
});
