let villeChoisie = "Lyon";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", () => {
  villeChoisie = prompt("Quelle ville souhaitez-vous voir ?");
  recevoirTemperature(villeChoisie);
});

function recevoirTemperature(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=2f621d5e82e4933ebb38e0655ba913a0&units=metric";

  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        let ville = reponse.name;
        document.querySelector("#temperature_label").textContent = temperature;
        document.querySelector("#ville").textContent = ville;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}
