// evenement page liste cartes=================================================

// animation menu--------------------------------------------------------------

let btnMenu = document.getElementById("menuLogo");

let lineMenuH = document.getElementById("haut");
let lineMenuC = document.getElementById("centre");
let lineMenuB = document.getElementById("bas");

let menu = document.getElementById('menu')

btnMenu.addEventListener("click", () => {
  
  if(menu.style.display == "flex"){
    menu.style.opacity ="100%"
    menu.style.animationName = "disparition_menu";
    menu.style.animationDuration = "0.5s";
    setTimeout( () => { menu.style.display = "none"},500)
  }else{
    menu.style.opacity ="0%"
    menu.style.animationName = "apparition_menu";
    menu.style.animationDuration = "0.5s";
    menu.style.display = "flex"
  }
  
  if (lineMenuH.className == "line") {
    
    lineMenuH.className = "";
    lineMenuC.className = "";
    lineMenuB.className = "";
    
  } else {
    lineMenuH.className = "line";
    lineMenuC.className = "line";
    lineMenuB.className = "line";
  }
});

let presentationMenu = document.querySelector(".S1")
let experienceMenu = document.querySelector(".S2");
let formationMenu = document.querySelector(".S3");
let logicielsMenu = document.querySelector(".S4");
let retourPresentation = document.querySelector(".retour_presentation")



presentationMenu.addEventListener("click", () => {
  AfficherCartePresentation()
  if (lineMenuH.className == "line") {
    lineMenuH.className = "";
    lineMenuC.className = "";
    lineMenuB.className = "";
  } else {
    lineMenuH.className = "line";
    lineMenuC.className = "line";
    lineMenuB.className = "line";
  }
});

retourPresentation.addEventListener("click", () => {
  AfficherCartePresentation()
});


function AfficherCartePresentation (){
  for(const index in section){
    if(index <= section.length-1){
      section[index].style.display="none";
    }
  }
  menu.style.opacity = "100%";
  menu.style.animationDuration = "1s";
  menu.style.animationName = "disparition_menu";
  listeCarte.style.animationName = "apparition";
  listeCarte.style.display="flex";
  retourPresentation.style.display="none"
  setTimeout(() => {
    menu.style.display = "none";
  }, 1000);
  
}

experienceMenu.addEventListener("click", () => {
  for (const index in section) {
    if (index <= section.length - 1) {
      section[index].style.display = "none";
    }
  };
  menu.style.opacity = "100%";
  menu.style.animationDuration = "1s";
  menu.style.animationName = "disparition_menu";
  listeCarte.style.animationDuration = "1s";
  listeCarte.style.animationName = "disparition";
  listeCarte.style.display = "none";
  setTimeout(() => {
    menu.style.display = "none";
    section[0].style.display = "flex";
    retourPresentation.style.display="flex"
  }, 1000);

  if (lineMenuH.className == "line") {
    lineMenuH.className = "";
    lineMenuC.className = "";
    lineMenuB.className = "";
  } else {
    lineMenuH.className = "line";
    lineMenuC.className = "line";
    lineMenuB.className = "line";
  }
});

formationMenu.addEventListener("click", () => {
  for (const index in section) {
    if (index <= section.length-1) {
      section[index].style.display = "none";
    }
  };
  menu.style.opacity = "100%";
  menu.style.animationDuration = "1s";
  menu.style.animationName = "disparition_menu";
  listeCarte.style.animationDuration = "1s";
  listeCarte.style.animationName = "disparition";
  listeCarte.style.display = "none";
  setTimeout(() => {
    menu.style.display = "none";
    section[2].style.display = "flex";
    retourPresentation.style.display="flex"

  }, 1000);

  if (lineMenuH.className == "line") {
    lineMenuH.className = "";
    lineMenuC.className = "";
    lineMenuB.className = "";
  } else {
    lineMenuH.className = "line";
    lineMenuC.className = "line";
    lineMenuB.className = "line";
  }
});

logicielsMenu.addEventListener("click", () => {
  for (const index in section) {
    if (index <= section.length - 1) {
      section[index].style.display = "none";
    }
  };
  menu.style.opacity = "100%";
  menu.style.animationDuration = "1s";
  menu.style.animationName = "disparition_menu";
  listeCarte.style.animationDuration = "1s";
  listeCarte.style.animationName = "disparition";
  listeCarte.style.display = "none";
  setTimeout(() => {
    menu.style.display = "none";
    section[1].style.display = "flex";
    retourPresentation.style.display="flex"

  }, 1000);

  if (lineMenuH.className == "line") {
    lineMenuH.className = "";
    lineMenuC.className = "";
    lineMenuB.className = "";
  } else {
    lineMenuH.className = "line";
    lineMenuC.className = "line";
    lineMenuB.className = "line";
  }
});


// --------------------------------------------------------------animation menu

// annimation carte section----------------------------------------------------

let contenuCarte      = document.getElementsByClassName("contenu_carte");
let carte             = document.getElementsByClassName("carte")
let listeCarte        = document.querySelector(".liste_cartes");
let section           = document.getElementsByClassName("section");

document.querySelector('.C2').addEventListener("click", () => {
  for(const index in carte){
    if (index <= carte.length - 1) {
      carte[index].classList.remove("activeCarte");
      carte[index].classList.remove("background");
      carte[0].classList.add("activeCarte");
      carte[0].classList.add("background");

      contenuCarte[index].classList.remove("activeContenu");
      contenuCarte[0].classList.add("activeContenu");
    }
  };
});

contenuCarte[0].addEventListener("click", () => {
  listeCarte.style.animationDuration="1s"
  listeCarte.style.animationName ="disparition"
  setTimeout( () => { 
    listeCarte.style.display ="none";
    section[0].style.display ="flex"
    retourPresentation.style.display="flex"
},1000)
})

document.querySelector('.C3').addEventListener("click", () => {
  for(const index in carte){
    if (index <= carte.length - 1) {
      carte[index].classList.remove("background");
      carte[index].classList.remove("activeCarte");
      carte[1].classList.add("activeCarte");
      carte[1].classList.add("background");

      contenuCarte[index].classList.remove("activeContenu");
      contenuCarte[1].classList.add("activeContenu");
    }
  };
});

contenuCarte[1].addEventListener("click", () => {
  listeCarte.style.animationDuration = "1s";
  listeCarte.style.animationName = "disparition";
  setTimeout(() => {
    listeCarte.style.display = "none";
    section[1].style.display = "flex";
    retourPresentation.style.display="flex"
  }, 1000);
});

document.querySelector('.C4').addEventListener("click", () => {
  for(const index in carte){
    if (index <= carte.length - 1) {
      carte[index].classList.remove("background");
      carte[index].classList.remove("activeCarte");
      carte[2].classList.add("activeCarte");
      carte[2].classList.add("background");

      contenuCarte[index].classList.remove("activeContenu");
      contenuCarte[2].classList.add("activeContenu");
    }
  };
});

contenuCarte[2].addEventListener("click", () => {
  listeCarte.style.animationDuration = "1s";
  listeCarte.style.animationName = "disparition";
  setTimeout(() => {
    listeCarte.style.display = "none";
    section[2].style.display = "flex";
    retourPresentation.style.display="flex"
  }, 1000);
});

document.querySelector('.C1').addEventListener("click", () => {
  for (const index in contenuCarte) {
    if (index <= carte.length - 1) {
      carte[index].classList.remove("background");
      carte[index].classList.remove("activeCarte");
      carte[3].classList.add("activeCarte");
      carte[3].classList.add("background");

      contenuCarte[index].classList.remove("activeContenu");
      contenuCarte[3].classList.add("activeContenu");
    }
  };
  
});



// ----------------------------------------------------annimation carte section

// =================================================evenement page liste cartes


//Animation galerie ============================================================



let decalageSlide = 0;
var decalage = 0;


function gallerySlide (signe, nomSlider) {
    let image = document.querySelectorAll("#"+nomSlider+" .image_galerie");
    let slider = document.querySelector("#"+nomSlider);
    let largeurImage = image[0].width + 20;
    decalage = largeurImage

    if (!signe) {
        decalageSlide = decalageSlide + decalage;
        if(decalageSlide > 0){
            decalageSlide = decalage - image.length * decalage;
        }
    } else {
        decalageSlide = decalageSlide - decalage;
        if (decalageSlide <= image.length * -decalage) {
          decalageSlide = 0;
        }
    };
    
    slider.style.transform ="translateX("+decalageSlide+"px)";

};

function regarderVideo (adresse){
    let player = document.createElement("div");
    player.className = "player_video";
    player.innerHTML =
      '<iframe width="100%" height="70%" src="https://www.youtube.com/embed/' +
      adresse +
      '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><i class="fa-solid fa-x" onclick="fermerVideo()"></i>';
      document.body.prepend(player)
}

function fermerVideo (){
    let player = document.querySelector(".player_video");
    player.remove();
}






//============================================================Animation galerie 