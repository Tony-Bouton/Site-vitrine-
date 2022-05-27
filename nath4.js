let presentation = document.querySelector("#gp");
let g = document.querySelector("#prbt");
let titre = document.querySelector("h2");
let g1 = document.querySelector("#sebt");
let service = document.querySelector("#service1");
let imagp = document.querySelector("image1");
let nouveau = service.innerHTML;
let nouveau2 = presentation.innerHTML;
let parcours = document.querySelector("#parcours");
let pabt = document.querySelector("#pabt");
let parc = document.querySelector("#service2").innerHTML;

let rebt = document.querySelector("#rebt");
let res = document.querySelector("#service4").innerHTML;
let res1 = document.querySelector("#service4");

let libt = document.querySelector("#link");
let link = document.querySelector("#service5").innerHTML;
let link1 = document.querySelector("#service5");

let contact = document.querySelector("#contact");
let contact1 = document.querySelector("#contactb").innerHTML;
let contact2 = document.querySelector("#service5");

let mainPage = document.querySelector("#fixed");

let h2 = document.querySelector("#h2");

let off = document.querySelector(".off");
console.log(off);

/* ------------------pop up */

let s1 = document.querySelector("h2");

let popUp = document.querySelector("#popUp");

let popup1 = document.querySelector(".popup");

let body = document.querySelector("html");

let nav = document.querySelector(".nav");

let curseur = document.querySelector(".curseur");

let curseur1 = document.querySelector(".curseur1");

s1.addEventListener("click", () => {
  console.log("hello");
});

/* -----------------------------------------------------Appuie BOuton Presentation
 */
g.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";
  document.getElementById("presentation").innerHTML = nouveau2;

  document.getElementById("curseur").style.opacity = 1;
  document.getElementById("curseur1").style.opacity = 0;
  document.getElementById("curseur2").style.opacity = 0;
  document.getElementById("curseur3").style.opacity = 0;
  document.getElementById("curseur4").style.opacity = 0;
  document.getElementById("curseur5").style.opacity = 0;
});

/*------------------------------------------------------Appuie Bouton Services*/

g1.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";

  document.getElementById("presentation").innerHTML = nouveau;
  let mainPage = service;
  presentation.classList.add("fixed");

  document.getElementById("curseur").style.opacity = 0;
  document.getElementById("curseur1").style.opacity = 1;
  document.getElementById("curseur2").style.opacity = 0;
  document.getElementById("curseur3").style.opacity = 0;
  document.getElementById("curseur4").style.opacity = 0;
  document.getElementById("curseur5").style.opacity = 0;
});

pabt.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";

  document.getElementById("presentation").innerHTML = parc;

  document.getElementById("curseur").style.opacity = 0;
  document.getElementById("curseur1").style.opacity = 0;
  document.getElementById("curseur2").style.opacity = 1;
  document.getElementById("curseur3").style.opacity = 0;
  document.getElementById("curseur4").style.opacity = 0;
  document.getElementById("curseur5").style.opacity = 0;
});

rebt.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";

  document.getElementById("presentation").innerHTML = res;

  document.getElementById("curseur").style.opacity = 0;
  document.getElementById("curseur1").style.opacity = 0;
  document.getElementById("curseur2").style.opacity = 0;
  document.getElementById("curseur3").style.opacity = 1;
  document.getElementById("curseur4").style.opacity = 0;
  document.getElementById("curseur5").style.opacity = 0;
});

libt.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";

  document.getElementById("presentation").innerHTML = link;

  document.getElementById("curseur").style.opacity = 0;
  document.getElementById("curseur1").style.opacity = 0;
  document.getElementById("curseur2").style.opacity = 0;
  document.getElementById("curseur3").style.opacity = 0;
  document.getElementById("curseur4").style.opacity = 1;
  document.getElementById("curseur5").style.opacity = 0;
});

contact.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";
  document.getElementById("presentation").innerHTML = contact1;
  document.getElementById("curseur").style.opacity = 0;
  document.getElementById("curseur1").style.opacity = 0;
  document.getElementById("curseur2").style.opacity = 0;
  document.getElementById("curseur3").style.opacity = 0;
  document.getElementById("curseur4").style.opacity = 0;
  document.getElementById("curseur5").style.opacity = 1;
});

off.addEventListener("click", () => {
  console.log("hello");
});
