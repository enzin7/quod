logoGitHub = document.getElementById("logo_github");
logoLinkedin = document.getElementById("logo_linkedin");
logoInstagram = document.getElementById("logo_instagram");

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

function abrirCadastro() {
  if (!aberto) {
    document.getElementById("cadastro").style.display = "flex";
    document.getElementById("login").style.display = "none";

    aberto = true;
  } else if (aberto) {
    document.getElementById("cadastro").style.display = "none";

    aberto = false;
  }
}

function abrirLogin() {
    if (!aberto) {
    document.getElementById("login").style.display = "flex";
    document.getElementById("cadastro").style.display = "none";

    aberto = true;
  } else if (aberto) {
    document.getElementById("login").style.display = "none";

    aberto = false;
  }
}

document.getElementById("main").addEventListener("click", () => {
  if (aberto) {
    document.getElementById("sobre_rodape").style.display = "none";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("lista_menu").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.body.style.cursor = "auto";
    document.body.style.overflow = "visible";

    aberto = false;
  }
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
