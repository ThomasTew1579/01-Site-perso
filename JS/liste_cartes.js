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
    menu.style.animationDuration = "1s";
    menu.style.animationName = "disparition_menu";
    setTimeout( () => { menu.style.display = "none"},1000)
  }else{
    menu.style.opacity ="0%"
    menu.style.animationName = "apparition_menu";
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

// --------------------------------------------------------------animation menu

// annimation carte section----------------------------------------------------
// on peut faire plus simple en jQuery avec addClass et removeClass------------

let contenuCarte = document.getElementsByClassName("contenu_carte");
console.log(contenuCarte);
let carte = document.getElementsByClassName("carte")
console.log(carte[0].style.display)

document.querySelector('.C1').addEventListener("click", () => {
  for (const index in contenuCarte) {
    if (index <= 3) {
      carte[index].style.flexGrow = 0;                             
      carte[0].style.flexGrow = 1;                              
      contenuCarte[index]["style"]["display"] = "none";             
      contenuCarte[0]["style"]["display"] = "flex";             
      contenuCarte[index]["style"]["opacity"] = "0";             
      contenuCarte[0]["style"]["opacity"] = "100%";             
    }
  };
  
});

document.querySelector('.C2').addEventListener("click", () => {
  for(const index in carte){
    if (index <= 3) {
      carte[index].style.flexGrow = 0;
      carte[1].style.flexGrow = 1;
      contenuCarte[index]["style"]["display"] = "none";
      contenuCarte[1]["style"]["display"] = "flex";
      contenuCarte[index]["style"]["opacity"] = "0";
      contenuCarte[1]["style"]["opacity"] = "100%"; 
    }
  };
});

document.querySelector('.C3').addEventListener("click", () => {
  for(const index in carte){
    if (index <= 3) {
      carte[index].style.flexGrow = 0;
      carte[2].style.flexGrow = 1;
      contenuCarte[index]["style"]["display"] = "none";
      contenuCarte[2]["style"]["display"] = "flex";
      contenuCarte[index]["style"]["opacity"] = "0";
      contenuCarte[2]["style"]["opacity"] = "100%"; 
    }
  };
});

document.querySelector('.C4').addEventListener("click", () => {
  for(const index in carte){
    if (index <= 3) {
      carte[index].style.flexGrow = 0;
      carte[3].style.flexGrow = 1;
      contenuCarte[index]["style"]["display"] = "none";
      contenuCarte[3]["style"]["display"] = "flex";
      contenuCarte[index]["style"]["opacity"] = "0";
      contenuCarte[3]["style"]["opacity"] = "100%"; 
    }
  };
});



// ----------------------------------------------------annimation carte section

// =================================================evenement page liste cartes
