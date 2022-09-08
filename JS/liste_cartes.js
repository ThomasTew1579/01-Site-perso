// evenement page liste cartes=================================================

// animation logo menu---------------------------------------------------------

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

// ---------------------------------------------------------animation logo menu

// animation apparition menu---------------------------------------------------



// ---------------------------------------------------animation apparition menu

// =================================================evenement page liste cartes
