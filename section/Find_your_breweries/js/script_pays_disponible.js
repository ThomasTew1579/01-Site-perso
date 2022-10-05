let nombre = 1;
let reponse; 
let reponseToutesPages = [];

let tableauPays = [];
let listePays;

recevoirReponseDispo();

function selectionPays(reponse) {
  for (const indexPays in reponse) {
    tableauPays.push(reponse[indexPays].country.toLowerCase());
  }
  
  listePays = tableauPays.filter(function (a, b) {
    return tableauPays.indexOf(a) == b;
  });
<<<<<<< HEAD
  document.querySelector("#aviable").textContent = listePays.join(" , ");
  console.log(listePays)
  return listePays

=======
  console.log(listePays);
  document.querySelector("#aviable").textContent = listePays.join(" , ");
  return listePays
>>>>>>> 54fb16de9a9fdfe337c2d626cdef4cd96c76933c
  
}


function recevoirReponseDispo() {

  
  const url = "https://api.openbrewerydb.org/breweries?page=" + nombre + "#";
  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();
  requete.onload = function () {
    // verification d'une réponse de l'API
    if (requete.readyState === XMLHttpRequest.DONE) {
      // verification du code de succes de la requete
      if (requete.status === 200) {
        reponse = requete.response;
        // verification de la viabilité de la recherche
        if (reponse.length == 0 && nombre == 1) {
<<<<<<< HEAD
=======
          console.log("rien sur la premiere page");
>>>>>>> 54fb16de9a9fdfe337c2d626cdef4cd96c76933c
        } else {
          // si la reponse est viable, on verifie que la reponse contiens plusieurs page
          if (reponse.length != 20) {
            for (const indexBrasserie in reponse) {
              reponseToutesPages.push(reponse[indexBrasserie]);
            }
            selectionPays(reponseToutesPages);
<<<<<<< HEAD
=======
            // console.log(nombre);
>>>>>>> 54fb16de9a9fdfe337c2d626cdef4cd96c76933c
          } else {
            // si la reponse contiens plusieur page on relance la requette a chaque page pleine ( nombre max de brasserie par page = 20)
            for (const indexBrasserie in reponse) {
              reponseToutesPages.push(reponse[indexBrasserie]);
            }
            nombre++;
            recevoirReponseDispo();
          }
        }
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}


