let boton = document.querySelector('#boton');

const imprimir= document.getElementById('eliminar')

let agregarImagen = document.getElementById('agregarImagen')


boton.addEventListener('click', ()=>{
  let contenedor = document.querySelector('#contenido');
  let div = document.createElement('div');
  let p = document.createElement('p');
  let titulo = document.createElement('h3')
  div.innerText = '';
  titulo.innerHTML = 'Coloca tu info';  
  p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore placeat provident possimus distinctio quos autem dolore laboriosam quibusdam quisquam maiores cupiditate adipisci officia, quasi id temporibus dolorem saepe veritatis?';
  contenedor.appendChild(div);
  contenedor.appendChild(titulo);
  contenedor.appendChild(p);
});

imprimir.addEventListener('click', () =>{
  agregarImagen.remove();
})


function printDiv(nombreDiv) {
    var contenido= document.getElementById(nombreDiv).innerHTML;
    var contenidoOriginal= document.body.innerHTML;
    document.body.innerHTML = contenido;
    window.print();
    document.body.innerHTML = contenidoOriginal;
}
function Previsualizar(){


}
