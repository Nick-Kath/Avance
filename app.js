const menu = document.querySelector('.marino');
const navegación = document.querySelector('.navegación');
const imagenes = document.querySelectorAll('img');


document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
});


const eventos = () =>{
    menu.addEventListener('click',abrirMenu);

}

const abrirMenu = () =>{
    navegación.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegación.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}

imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src;
})



const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener ('click',()=>{
        navegación.classList.add('ocultar');
        overlay.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegación.classList.add('ocultar')
    }
}