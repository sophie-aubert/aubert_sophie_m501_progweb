import { User } from "./User.js";
"use strict"

const placeAfficheage = document.querySelector("main");


const recupDonnees = fetch(`https://randomuser.me/api/?results=20`)
.then((res) => res.json()
.then((recupDonnees) => console.log(recupDonnees)));

const recupDonnee = () => {
fetch(`https://randomuser.me/api/?results=20`)
.then((resultat) => {
    return resultat.json();
})
.then((data) => {
    data.results.forEach((element) => affichePersonne(element));
})
}
recupDonnee();

const affichePersonne = (personne) => {
// ON MODIFIE LE DOM : 
const persoElement = document.createElement("div");
persoElement.classList.add("user");
const childHTML = `
<div class="user" data-present="">
<img src=${personne.picture.thumbnail}>
<div class="user--info">
        <h1>${personne.name.title} ${personne.name.first} ${personne.name.last}</h1>
        <p>${personne.registered.age} years old</p>
        <p>${personne.location.city}, ${personne.location.country}</p>
        <a href=mailto:${personne.email}>
				<span class="mail">✉️</span>
		</a>
</div>`

placeAfficheage.insertAdjacentHTML("afterbegin", childHTML);
// return persoElement;
}
    const present = (estLa) => {
        if (estLa.dataset.present === "true") {
          estLa.dataset.present = "false";
        } else {
          estLa.dataset.present = true;
        }
      };
      
      placeAfficheage.addEventListener("click", (e) => {
          present(e.target);
        })