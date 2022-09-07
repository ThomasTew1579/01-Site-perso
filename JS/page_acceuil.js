
// evenement page acceuil======================================================

let acceuilSlideL       = document.getElementById("masqueL");
let acceuilSlideR       = document.getElementById("masqueR");
let entrer              = document.getElementById("entrer");


entrer.addEventListener("click", () => {
  
  acceuilSlideR.className = "animationFermeture";
  setTimeout(() => {
    window.location.replace("section/Liste_Carte.html");
  }, 2500);
});

// evenement page acceuil======================================================

