const presentation = document.querySelector("#gp");
const g = document.querySelector("#prbt");
const titre = document.querySelector("h2");
const g1 = document.querySelector("#sebt");
const service = document.querySelector("#service1")
const imagp = document.querySelector("image1")




g.addEventListener('click', ()=> {
    presentation.classList.add("change");
    titre.style.color='rgb(143, 92, 121)';
    
    
});




g1.addEventListener('click', ()=> {
    service.classList.add("change");
    titre.style.color='rgb(143, 92, 121)';
   
    
    

});

