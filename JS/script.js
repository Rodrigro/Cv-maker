let boton = document.querySelector('#boton');

boton.addEventListener('click', ()=>{
  let contenedor = document.querySelector('#contenido');
  let div = document.createElement('div');
  div.innerText = 'Hola, soy un div';
  contenedor.appendChild(div);
});


function imprimir() {
	window.print();
}

function printDiv(nombreDiv) {
    var contenido= document.getElementById(nombreDiv).innerHTML;
    var contenidoOriginal= document.body.innerHTML;
    document.body.innerHTML = contenido;
    window.print();
    document.body.innerHTML = contenidoOriginal;
}
function Previsualizar(){


}