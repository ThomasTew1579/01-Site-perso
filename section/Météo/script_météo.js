let villeChoisie = "Lyon";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", () => {
  villeChoisie = prompt("Quelle ville souhaitez-vous voir ?");
  let temperature = recevoirTemperature(villeChoisie);
  afficherTemperature(temperature.ville, temperature.temperature)
});

function recevoirTemperature(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=dc8c9153e8adaad0ec8bf635818c0d42&units=metric";

  let requete = new XMLHttpRequest();//Tu peux aussi utiliser fetch pour les requetes HTTP (plus populaire de nos jour je crois)
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        /* Tout ce traiement je l'aurai bien vu dans une fonction
        * AffichierTemperature(ville,temperature)
        * Le but est de respecter la regle du single responsability
        * Car ici ta fonction recevoirTemperature fait aussi de l'affichage, si un collegue l'utilise il ne s'attend
        * pas a ce que cette fonction modifie le DOM.
        */
        //let reponse = requete.response;
        //let temperature = reponse.main.temp;
        //let ville = reponse.name;
        //document.querySelector("#temperature_label").textContent = temperature;
        //document.querySelector("#ville").textContent = ville;
        return {
          ville: requete.reponse.name,
          temperature: requete.reponse.name.temp
        }
      } else {
        //En cas de probleme tu pourrai analyser la reponse quand meme pour donner du context a l'utilisateur (ex ville introuvable)
        //Ou les 401 ^^
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}

function afficherTemperature(ville, temperature){
  //ton traitement d'affichage
  document.querySelector("#temperature_label").textContent = temperature;
  document.querySelector("#ville").textContent = ville;
}
