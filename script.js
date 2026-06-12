console.log("Site carregado!");

document.addEventListener("DOMContentLoaded", function(){

console.log("Bem-vindo ao site de Brincadeiras Antigas!");

});
const topoBtn = document.getElementById("topoBtn");

topoBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.onload = function(){
    console.log("Site carregado com sucesso!");
}
const botaotopo =
document.getElementById("topo");

window.addEventListener("scroll", function(){
    if(window.scrollY >200){
        botaotopo.style.display ="block";
    }else{
        botaotopo.style.display ="none";
    }
});

botaotopo.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});