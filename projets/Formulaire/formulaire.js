//Change fond au focus sur le champ
const focus = document.getElementsByClassName("input");
for (let i=0;i<focus.length;i++){
    focus[i].addEventListener('focus', (event) => {
        event.target.style.background = 'grey';
    });
}

//Remet fond en blanc lorsqu'on n'est plus sur le champ
const blur = document.getElementsByClassName('input')
for(let i=0;i<blur.length;i++){
    blur[i].addEventListener('blur', (event) => {
        event.target.style.background = 'white';
    });
}


/*Agit sur l'envoi du formulaire et empèche l'envoi si les valeurs ne sont
pas attendues*/
envoyerCommentaire = function (event) {
    event.preventDefault();
    var error = false;
    var nom = document.querySelector("#nom");
    
//Change couleur des bordures pour indiquer les données nécessaires   
    if (nom.value == "") {
        error = true;
        nom.style.borderColor = "red";

    } else {
        nom.style.borderColor = "rgb(118,118,118)";
    }

    var prenom = document.querySelector("#prenom");
    
    if (prenom.value == "") {
        error = true;
        prenom.style.borderColor = "red";

    } else {
        prenom.style.borderColor = "rgb(118,118,118)";
    }
    var email = document.querySelector("#email");
    
    if (email.value == "") {
        error = true;
        email.style.borderColor = "red";

    } else {
        email.style.borderColor = "rgb(118,118,118)";
    }
    var date = document.querySelector("#date");
    if (date.value == "") {
        error = true;
        date.style.borderColor = "red";

    } else {
        date.style.borderColor = "rgb(118,118,118)";
    }


    if (error==false) {
        var commentaires = document.querySelector("#commentaires");
        while (commentaires.firstChild) {
                commentaires.removeChild(commentaires.firstChild);
            }
        
    /*Remplace les éléments du document par un nouveau titre h1 et nouveau texte
    qui vient remplacer l'ensemble et indiquer la validation du formulaire*/

        var remerciement=document.createElement("h1");
        var texteRemerciement = document.createTextNode("Formulaire envoyé. Merci et bonne journée.");

        commentaires.appendChild(remerciement);
        remerciement.appendChild(texteRemerciement);
        
    }

}



