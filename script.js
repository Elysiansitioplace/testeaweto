let box = document.querySelector('.fundo');
let busca = document.querySelector('.lupa');
let closee = document.querySelector('.fechar');
busca.addEventListener('click', ()=>{
box.classList.add('abrir');
});
closee.addEventListener('click', ()=>{
box.classList.remove('abrir')
})

const fundo1 = document.querySelector('.fundo-raçao');
const clique1 = document.querySelector('.clique-raçao');
const fechar = document.querySelector('.fechar-menu1');

clique1.addEventListener("click", ()=>{
fundo1.classList.add("ativar-raçao")
}) 

fechar.addEventListener("click", ()=>{
fundo1.classList.remove("ativar-raçao")
}) 

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



  