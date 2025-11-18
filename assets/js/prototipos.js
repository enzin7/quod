aberto = false;

function abrirSobre() {
  if (!aberto) {
    document.getElementById("sobre_rodape").style.display = "block";
    document.getElementById("lista_menu").style.display = "none";
    document.body.style.cursor = "pointer";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      aberto = true;
    }, 500);
  }
}

function fecharSobre() {
  if (aberto) {
    document.getElementById("sobre_rodape").style.display = "none";
    document.body.style.cursor = "auto";
    document.body.style.overflow = "visible";

    aberto = false;
  }
}

function abrirMenuHamb() {
  if (!aberto) {
    document.getElementById("lista_menu").style.display = "block";
    document.getElementById("sobre_rodape").style.display = "none";
    document.body.style.cursor = "pointer";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      aberto = true;
    }, 300);
  } else if (aberto) {
    document.getElementById("lista_menu").style.display = "none";

    aberto = false;
  }
}

document.getElementById("main").addEventListener("click", () => {
  if (aberto) {
    document.getElementById("sobre_rodape").style.display = "none";
    document.body.style.cursor = "auto";
    document.body.style.overflow = "visible";

    aberto = false;
  }
});
