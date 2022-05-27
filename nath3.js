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

/* ------------------pop up */

let s1 = document.querySelector("h2");

let popUp = document.querySelector("#popUp");

s1.addEventListener("click", () => {
  console.log("hello");
});
/* -----------------------------------------------------Appuie BOuton Presentation
 */
g.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";
  document.getElementById("presentation").innerHTML = nouveau2;
  let h2 = titre;
});

/*------------------------------------------------------Appuie Bouton Services*/

g1.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";

  document.getElementById("presentation").innerHTML = nouveau;
  let mainPage = service;
  presentation.classList.add("fixed");
});

pabt.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";
  document.getElementById("presentation").innerHTML = parc;
});

rebt.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";
  document.getElementById("presentation").innerHTML = res;
});

libt.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";
  document.getElementById("presentation").innerHTML = link;
});

contact.addEventListener("click", () => {
  titre.style.color = "rgb(143, 92, 121)";
  document.getElementById("presentation").innerHTML = contact1;
});

/* probleme inner HTML js only presentation */

/* probleme algorithme boutton nav */
