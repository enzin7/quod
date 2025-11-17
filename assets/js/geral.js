aberto = false;

function abrirSobre() {
  document.getElementById("sobre_rodape").style.display = "block";
  document.body.style.cursor = "pointer";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    aberto = true;
  }, 500);
}

document.body.addEventListener("click", () => {
  if (aberto) {
    document.getElementById("sobre_rodape").style.display = "none";
    document.body.style.cursor = "auto";
    document.body.style.overflow = "visible";

    aberto = false;
  }
});
