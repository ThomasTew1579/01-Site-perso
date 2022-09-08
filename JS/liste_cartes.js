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

let carte = document.getElementsByClassName('carte')
let text = carte.querySelector

document.querySelector('.C1').addEventListener("click", () => {
  for(const index in carte){
    if(index < carte.length)
    carte[index].style.flexGrow = "0";
    document.querySelector(".contenu_carte").style.display = "none";
    document.querySelector(".C1").style.flexGrow = 2;
    document.querySelector(".contenu_carte").style.display = "flex";
  };

});

document.querySelector('.C2').addEventListener("click", () => {
  for(const index in carte){
    if(index < carte.length)
    carte[index].style.flexGrow = "0";
    carte[index].style.height = "60px";
    document.querySelector(".C2").style.flexGrow = 2;
    document.querySelector(".contenu_carte").style.display = "flex";
  };
});

document.querySelector('.C3').addEventListener("click", () => {
  for(const index in carte){
    if(index < carte.length)
    carte[index].style.flexGrow = "0";
    document.querySelector(".C3").style.flexGrow = 2;
    document.querySelector(".contenu_carte").style.display = "flex";
  };
});

document.querySelector('.C4').addEventListener("click", () => {
  for(const index in carte){
    if(index < carte.length)
    carte[index].style.flexGrow = "0";
    document.querySelector(".C4").style.flexGrow = 2;
    document.querySelector(".contenu_carte").style.display = "flex";
  };
});



// ----------------------------------------------------annimation carte section

// =================================================evenement page liste cartes
