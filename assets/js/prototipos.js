logoGitHub = document.getElementById("logo_github");
logoLinkedin = document.getElementById("logo_linkedin");
logoInstagram = document.getElementById("logo_instagram");
olhoSenhaC = document.getElementById("olho_senha_cadastro");
inputSenhaC = document.getElementById("input_senha_cadastro");
olhoSenhaL = document.getElementById("olho_senha_login");
inputSenhaL = document.getElementById("input_senha_login");
const main = document.getElementById("main");

aberto = false;

function abrirSobre() {
  if (!aberto) {
    irAoMeio();

    document.getElementById("about").style.display = "flex";
    document.getElementById("lista_menu").style.display = "none";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "none";

    document.body.style.overflow = "hidden";
    document.getElementById("blur").classList.add("active");

    aberto = true;
  }
}

function abrirMenuHamb() {
  if (!aberto) {
    document.getElementById("lista_menu").style.display = "flex";
    document.getElementById("about").style.display = "none";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "none";

    aberto = true;
  } else if (aberto) {
    document.getElementById("lista_menu").style.display = "none";

    aberto = false;
  }
}

function abrirCadastro() {
  if (!aberto) {
    irAoMeio();

    document.getElementById("cadastro").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("lista_menu").style.display = "none";

    document.body.style.overflow = "hidden";
    document.getElementById("blur").classList.add("active");

    aberto = true;
  } else if (aberto) {
    document.getElementById("cadastro").style.display = "none";

    aberto = false;
  }
}

function abrirLogin() {
  if (!aberto) {
    irAoMeio();

    document.getElementById("login").style.display = "flex";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("lista_menu").style.display = "none";

    document.body.style.overflow = "hidden";
    document.getElementById("blur").classList.add("active");

    aberto = true;
  } else if (aberto) {
    document.getElementById("login").style.display = "none";

    aberto = false;
  }
}

function irAoMeio() {
  const meio = main.offsetTop + main.offsetHeight / 2 - window.innerHeight / 2;
  window.scrollTo({ top: meio, behavior: "smooth" });
}

function galeriaDescubra() {
  const descubraGaleria = document.getElementById("galeria_descubra");
  const comeco = descubraGaleria.offsetTop - 70;
  window.scrollTo({ top: comeco, behavior: "smooth" });
}

document.getElementById("blur").addEventListener("click", () => {
  if (aberto) {
    document.getElementById("about").style.display = "none";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("lista_menu").style.display = "none";

    document.body.style.overflow = "auto";
    document.getElementById("blur").classList.remove("active");
    document.getElementById("blur").classList.remove("menu");

    aberto = false;
  }
});

main.addEventListener("click", () => {
  document.getElementById("lista_menu").style.display = "none";
});

logoGitHub.addEventListener("mouseenter", () => {
  gitImage = document.getElementById("logo_github_imagem");
  gitImage.src = "./assets/img/logo-github-hover.png";
  gitImage.style.height = "2.25rem";
  gitImage.style.paddingRight = "0.2rem";
});

logoGitHub.addEventListener("mouseleave", () => {
  gitImage = document.getElementById("logo_github_imagem");
  gitImage.src = "./assets/img/logo-github.png";
  gitImage.style.height = "1.9rem";
  gitImage.style.paddingRight = "0.3rem";
});

logoLinkedin.addEventListener("mouseenter", () => {
  linkedinImage = document.getElementById("logo_linkedin_imagem");
  linkedinImage.src = "./assets/img/logo-linkedin-hover.png";
  linkedinImage.style.height = "3.1rem";
  linkedinImage.style.margin = "-1rem";
  linkedinImage.style.paddingRight = "0.8rem";
});

logoLinkedin.addEventListener("mouseleave", () => {
  linkedinImage = document.getElementById("logo_linkedin_imagem");
  linkedinImage.src = "./assets/img/logo-linkedin.png";
  linkedinImage.style.height = "1.9rem";
  linkedinImage.style.margin = "0";
  linkedinImage.style.marginBottom = "0.4rem";
  linkedinImage.style.paddingRight = "0.3rem";
});

logoInstagram.addEventListener("mouseenter", () => {
  InstagramImage = document.getElementById("logo_instagram_imagem");
  InstagramImage.src = "./assets/img/logo-instagram-hover.png";
  InstagramImage.style.height = "2.2rem";
  InstagramImage.style.marginRight = "-0.4rem";
});

logoInstagram.addEventListener("mouseleave", () => {
  InstagramImage = document.getElementById("logo_instagram_imagem");
  InstagramImage.src = "./assets/img/logo-instagram.png";
  InstagramImage.style.height = "1.9rem";
  InstagramImage.style.marginRight = "-0.2rem";
});

function mostrarSenhaCadastro() {
  if (inputSenhaC.type == "password") {
    olhoSenhaC.src = "./assets/img/olho-aberto.png";
    inputSenhaC.type = "text";
  } else if (inputSenhaC.type == "text") {
    olhoSenhaC.src = "./assets/img/olho-fechado.png";
    inputSenhaC.type = "password";
  }
}

function mostrarSenhaLogin() {
  if (inputSenhaL.type == "password") {
    olhoSenhaL.src = "./assets/img/olho-aberto.png";
    inputSenhaL.type = "text";
  } else if (inputSenhaL.type == "text") {
    olhoSenhaL.src = "./assets/img/olho-fechado.png";
    inputSenhaL.type = "password";
  }
}

function inicio() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
