
//BOUCLE CREATIONS DE MES SECTIONS

var numCase=0;
var compteur=1

data.forEach(function(element){
    
    document.querySelector('.liste-analogies').innerHTML=`${document.querySelector('.liste-analogies').innerHTML}<section class=\"sec\" id=\"section${numCase}\"><h2>Si j’étais <span>${element["analogie"]}</span>,<br> je serais</h2><h3><span>${element["valeurAnalogie"]}</span></h3>\n<img alt="" class=\"images images${numCase}\" src="${element["img"]}"> \n<p class=\"text\">${element["text"]}</p>\n</section>`

    numCase++
    compteur++
})
            
/* Afficher dans la console les caractères entrés */
            document.addEventListener('keyup',function(analogie) {
    console.log('Touche relâchée sur le champ "analogie"');
    document.querySelector('#analogie').value;
        console.log(document.querySelector('#analogie').value)
});

/*Afficher et fermer les mentions légales*/
function afficherPopup() {
    var popup = document.getElementById("mentionsLegalesPopup");
    popup.style.display = "block";
  }

  // Fonction pour fermer le pop-up
  function fermerPopup() {
    var popup = document.getElementById("mentionsLegalesPopup");
    popup.style.display = "none";
  }

  // Ajouter des écouteurs d'événements pour le bouton et le bouton de fermeture
  document.getElementById("mentionsLegalesBtn").addEventListener("click", afficherPopup);
  document.getElementById("fermerPopupBtn").addEventListener("click", fermerPopup);



/*API*/
document.querySelector("#send").addEventListener("click", function (e) {
  e.preventDefault();


  var analogieValue = document.querySelector("#analogie").value;
  var valeuranalogieValue = document.querySelector("#valeurAnalogie").value;
  var detailValue = document.querySelector("#texte").value;
  var valeurImage = document.querySelector('#photo').value


  document.querySelector('#nouvelleAnalogie').innerHTML +=

  '<section><p class="si-jetais"><h2>Si j’étais ' + analogieValue + ', je serais </h2></p><p><h3>' + valeuranalogieValue + '</h3></p><img class="img" src="' + valeurImage + '"><p class="text">' + detailValue + '</p></section>';
  fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=laure.missie&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + analogieValue + ", je serais " + valeuranalogieValue + "Parce que " + detailValue)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data)
        if (data.status == "success") {
          document.querySelector("#confirmation").innerHTML = "Bien reçu !";
        } else {
          document.querySelector("#confirmation").innerHTML = "Erreur";
        }
      })
    });
});

/* Pop up Mentions légales*/

/* Fetch
let urlvisite = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=philippe.gambette@u-pem.fr&message=Test";

  fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=laure.missie&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + "Parce que " + document.querySelector("#text").value)
    .then(function (response) {
      response.json().then(function (data) {
        if (data.status == "success") {
          document.querySelector("#message").innerHTML = "Bien reçu!";
        } else {
          document.querySelector("#message").innerHTML = "Erreur";
        }
      });
    });*/
 
            /*fetch('data.json').then(function(response){
                response.json().then(function(data){
                    console.log(data);
                    numCase = 0;
                    // Ajoutez ici d’autres instructions utilisant la variable data 
                })
            })*/
//Création de la liste
/*var liste = document.querySelector(".liste-analogies");
            var numCase = 0;
            data.forEach(function (data) {
                liste.innerHTML += '<section id=""+ data.id+""><h2 class= "si-jetais"> Si j’étais ' + data.analogie + ', je serais ' + data.valeurAnalogie + '<img class="url image-cliquable" src="' + data.img + '"><p class="text">' + data.text + '</p></h2></section>'
                console.log("Si j'étais " + data.analogie + "(Case " + numCase + ")");
                numCase = numCase + 1
            })*/

// Création du pop-up img + mentions légales
            /*document.querySelectorAll(".image-cliquable").forEach(function (element) {
                element.addEventListener('click', function (e) {

                    document.querySelector(".popup").classList.add('popup-visible');
                    document.querySelector(".popup").classList.remove('popup-invisible');

                    console.log(e.target.getAttribute('src'));

                    document.querySelector(".popup-visible img").setAttribute('src', e.target.getAttribute('src'));
                })
            })

            document.querySelector(".popup").addEventListener('click', function (e) {
                document.querySelector(".popup").classList.add('popup-invisible');
                document.querySelector(".popup").classList.remove('popup-visible');

            })*/
