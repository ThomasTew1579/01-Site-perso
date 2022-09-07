// evenement page liste cartes=================================================

let btnMenu = document.getElementById("menuLogo");
let lineMenuH = document.getElementById("haut");
let lineMenuC = document.getElementById("centre");
let lineMenuB = document.getElementById("bas");
let menu = document.getElementById('menu')

btnMenu.addEventListener("click", () => {
  menu.style.display = "flex"
  console.log(lineMenuH.className);
  
  if (lineMenuH.className == "line") {
      menu.style.display = "none"
      lineMenuH.className = "";
      lineMenuC.className = "";
      lineMenuB.className = "";
    } else {
    lineMenuH.className = "line";
    lineMenuC.className = "line";
    lineMenuB.className = "line";
  }
});

// evenement page liste cartes=================================================
