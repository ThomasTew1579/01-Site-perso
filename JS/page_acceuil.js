

let body                = document.querySelector('body')
let acceuil             = document.getElementById('acceuil')
let acceuilSlideL       = document.getElementById("masqueL");
let acceuilSlideR       = document.getElementById("masqueR");
let entrer              = document.getElementById("entrer");

let contenu             = document.getElementById('contenu')

entrer.addEventListener("click", () => {
  acceuilSlideL.className   = "animationEnterSlide";
  acceuil.className         = "animationEnter";
  acceuilSlideR.className   = "animationEnterSlide";

  setTimeout(() => {
    acceuil.style.display           = "none";
    acceuilSlideL.style.display     = "none";
    acceuilSlideR.style.display     = "none";
    contenu.style.display           = "flex"
  }, 5000);
});

