let param = new URLSearchParams(location.search);
let projet = param.get('projet');




// Les informations des projets 

let titre_projet=document.querySelector(".titre_projet"); 
titre_projet.innerHTML+=PROJETS[projet]["titre"]; 

let categorie=document.querySelector(".categorie_projet");
categorie.innerHTML+=PROJETS[projet]["categorie"];

let type=document.querySelector(".type_projet");
type.innerHTML+=PROJETS[projet]["type"];

let duree=document.querySelector(".duree_projet");
duree.innerHTML+=PROJETS[projet]["duree"];

let equipe=document.querySelector(".equipe_projet");
equipe.innerHTML+=PROJETS[projet]["equipe"];

let annee=document.querySelector(".annee_projet");
annee.innerHTML+=PROJETS[projet]["annee"];

let contexte=document.querySelector(".contexte");
contexte.innerHTML+=PROJETS[projet]["contexte"];

document.querySelector(".image_projet").innerHTML+=`<img src="img/${projet}.png">`;
// document.querySelector(".pdf").innerHTML=`<a class="pdf" href="pdf/${projet}.pdf"> Voir plus </a>`;
document.querySelector(".pdf").innerHTML=PROJETS[projet]["plus"];

document.querySelector('.prec').innerHTML=`<a class="bouton" href="infos.html?projet=${PROJETS[projet]["lien_prec"]}"> Projet Précédent </a>`;
document.querySelector('.suiv').innerHTML=`<a class="bouton" href="infos.html?projet=${PROJETS[projet]["lien_suiv"]}"> Projet suivant </a>`;
document.querySelector("header>div").innerHTML=`<a href="projet.html#${PROJETS[projet]["retour"]}"> Retour </a>`;




// fetch context

    // document.querySelector(".contexte").innerHTML+=
    // `<div class="button" onclick="charger(this, '${projet}','context')">
        
    //         Contexte
        
    // </div>`;


    //     function charger(obj, nproj, context)
    //     {
            
    //       // fetch envoie une requête vers le serveur pour récupérer le fichier HTML
    //       fetch("contexte/"+nproj+"_"+context+".html")
    //       .then((reponse) => reponse.text())                                              // Le serveur renvoie le fichier dans une réponse
    //       .then((contenu) => {
    //         let div = document.createElement("div");
    //         div.className = "explications";
    //         div.innerHTML = contenu;
    //         obj.after(div);
    //        // document.querySelector(".sae_ac>div").innerHTML = contenu
    //     });    // On insère le contenu la div .resultat
    //     }

