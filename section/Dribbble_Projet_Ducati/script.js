
let moto = document.querySelector("#moto");
let numero = document.querySelector("#numero");

let disp = document.querySelector("#Displacement");
let HP = document.querySelector("#Horse_Power");
let Torq = document.querySelector("#Torque");
let Dry = document.querySelector("#Dry_Weight");
let Seat = document.querySelector("#Seat_Height");
let Safe = document.querySelector("#Safety");

let btn_right = document.querySelector(".fa-chevron-right");
let btn_left = document.querySelector(".fa-chevron-left");
let color = document.querySelectorAll(".color")

let M797 = {
  titre:            "797",
  image:            "images/1.png",
  color:            "color1",
  Displacement:     "803 cc",
  Horse_Power:      "73 hp (54 kW)",
  Torque:           "67 Nm (49.0 lb-ft)",
  Dry_Weight:       "175 Kg (386 lb)",
  Seat_Height:      "805 mm (31.69 in)",
  Safety:           "ABS"
};

let M821 = {
  titre:            "821",
  image:            "images/2.png",
  color:            "color2",
  Displacement:     "821 cc",
  Horse_Power:      "109 hp (80 kW)",
  Torque:           "86 Nm (63  lb-ft)",
  Dry_Weight:       "180.5 Kg (398 lb)",
  Seat_Height:      "805 mm (31.69 in)",
  Safety:           "ABS"
};

let M7972 = {
  titre:            "797",
  image:            "images/3.png",
  color:            "color3",
  Displacement:     "803 cc",
  Horse_Power:      "73 hp (54 kW)",
  Torque:           "67 Nm (49.0 lb-ft)",
  Dry_Weight:       "175 Kg (386 lb)",
  Seat_Height:      "805 mm (31.69 in)",
  Safety:           "ABS"
};



let listeMoto = [M797, M821 , M7972];

index = 0;


btn_right.addEventListener("click", () => {
    next("+");
});

btn_left.addEventListener("click", () => {
    next("-");
});

function next(signe) {
    moto.style.opacity = "0";
    numero.style.opacity = "0";
    numero.className = " ";
    if(signe == "+"){
        index++
        if (index >= listeMoto.length ) {
            index = 0;}
        disparition("right");
        apparition(index,"right");
        changerTexte(index)
        return
    } 
    if(signe == "-") {
        index--
        if (index < 0) {
            index = listeMoto.length - 1;}
            disparition("left");
            apparition(index,"left");
            changerTexte(index)
            return 
    }
        
}
    
function disparition(sens) {
    moto.className = "disparition_"+sens;
    numero.className = "disparition_titre_" + sens;
}

function apparition(indexMoto, sens) {
    setTimeout( () => {
        numero.textContent = listeMoto[indexMoto].titre;
        moto.src = listeMoto[indexMoto].image;
        moto.className = "apparition_"+sens;
        numero.className = "apparition_titre_" + sens;
    },500)
}      

function changerTexte(indexMoto) {
    disp.textContent = listeMoto[indexMoto].Displacement;
    HP.textContent = listeMoto[indexMoto].Horse_Power;
    Torq.textContent = listeMoto[indexMoto].Torque;
    Dry.textContent = listeMoto[indexMoto].Dry_Weight ;
    Seat.textContent = listeMoto[indexMoto].Seat_Height ;
    Safe.textContent = listeMoto[indexMoto].Safety ;

    for(const index in color){
        if(index <= index.length +1){
            color[index].classList.remove ("select");
        }
    }
    color[indexMoto].classList.add ("select");
}

color[0].addEventListener("click", () =>{
    disparition("right");
    apparition(0, "right");
    changerTexte(0);
})

color[1].addEventListener("click", () =>{
    disparition("right");
    apparition(1, "right");
    changerTexte(1);
})

color[2].addEventListener("click", () =>{
    disparition("right");
    apparition(2, "right");
    changerTexte(2);
})


let menu = document.querySelector(".fa-bars")
let liens = document.querySelector("#liens")

menu.addEventListener("click", () => {
    if (liens.style.display == "flex"){
        liens.style.display = "none";
    } else {
        liens.style.display = "flex";
}});