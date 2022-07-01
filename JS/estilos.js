const colorAzul = document.getElementById("azul")
const colorVerde = document.getElementById("verde")
const colorMarron = document.getElementById("marron")
const color = document.getElementById("color")
const colorTexto = document.getElementById("texto")
const barraLateral = document.querySelector("main");
const barraLateral2 = document.querySelector("aside");

colorAzul.addEventListener("click",() =>{
    barraLateral.classList.remove("marron", "verde")
    barraLateral2.classList.remove("marron", "verde")
    barraLateral.classList.add("azul")
    barraLateral2.classList.add("azul")
})
colorVerde.addEventListener("click",() =>{
    barraLateral.classList.remove("marron", "azul")
    barraLateral2.classList.remove("marron", "azul")
    barraLateral.classList.add("verde")
    barraLateral2.classList.add("verde")
})
colorMarron.addEventListener("click",() =>{
    barraLateral.classList.remove("verde", "verde")
    barraLateral2.classList.remove("verde", "verde")
    barraLateral.classList.add("marron")
    barraLateral2.classList.add("marron")
})

color.addEventListener("input", ()=>{
    const valor = color.value
    barraLateral.style.backgroundColor = valor
    barraLateral2.style.backgroundColor = valor
})

colorTexto.addEventListener("click", ()=>{
    barraLateral2.classList.add("colorBlanco")
})