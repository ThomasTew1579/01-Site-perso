
let card                = document.querySelector(".card");
let canette             = document.querySelector("#canette");
let texte               = document.querySelector("#texte");
let titre               = document.querySelector("#titre");
let decrpition          = document.querySelector("#decrpition");
let btn_next            = document.querySelector("#btn_next");

let Zero_Sugar = {
    background            : "linear-gradient(64.5deg, #292929 2.1%, #1C1C1C 100.55%)",
    image                 : "images/1.png",
    titre                 : "Zero Sugar",
    decrpition_texte      : "Coca-Cola Zero Sugar Real Coke taste with zero calories. It's possible!",
    texte_color           : "#FFFFFF"
}

let Vanilla = {
    background            : "linear-gradient(66.37deg, #ECE1C9 2.16%, #9F8C5C 103.37%)",
    image                 : "images/2.png",
    titre                 : "Vanilla",
    decrpition_texte      : "Great taste of Coca-Cola with refreshingly smooth balance of vanilla flavor.",
    texte_color           : "#000"
};

let Cherry = {
    background            : "linear-gradient(66.37deg, #8F355A 2.16%, #5E2438 41.61%, #2C1316 103.37%)",
    image                 : "images/3.png",
    titre                 : "Cherry",
    decrpition_texte      : "Great taste of Coca-Cola with a sweet, smooth cherry flavor.",
    texte_color           : "#FFFFFF"
};

let Orange_Vanilla = {
    background            : " linear-gradient(66.37deg, #F0AE54 2.16%, #8B481E 103.37%)",
    image                 : "images/4.png",
    titre                 : "Orange Vanilla",
    decrpition_texte      : "Newest flavor to join the Coke family with a new twist on delicious.",
    texte_color           : "#FFFFFF"
};


let listeCanette = [Zero_Sugar, Vanilla, Cherry, Orange_Vanilla ]
index = 0;

btn_next.addEventListener("click", () => { next()});

function next (){
    if (index >= listeCanette.length-1){
        index = 0;
    } else {
        index++
    }
    disparition()

    setTimeout( () => {
        changerTexte(listeCanette[index]);
        changerImage(listeCanette[index])
        apparition(listeCanette[index])
    } , 400 );
}

function changerTexte (canette_actuel){
    texte.style.color = canette_actuel.texte_color;
    titre.textContent = canette_actuel.titre;
    decrpition.textContent = canette_actuel.decrpition_texte;
}

function changerImage (canette_actuel){
    canette.src = canette_actuel.image;
    card.style.background = canette_actuel.background;
}

function disparition() {
    texte.className = "disparition_texte";
    canette.className = "disparition_canette";
}

function apparition(canette_actuel){
    texte.className = "apparition_texte";
    canette.className = "apparition_canette";
}