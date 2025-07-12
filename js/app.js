const menu = document.querySelector('.marino');
const navegación = document.querySelector('.navegación');
const imagenes = document.querySelectorAll('img');
const btnMarino = document.querySelectorAll('.marino');
const btnDulce = document.querySelectorAll('.dulce');
const contenedorTipos = document.querySelector('.tipos');


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


const observer = new IntersectionObserver ((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            observer.unobserve(imagen);
        }
    });
})


imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src;
    observer.observe(imagen);
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

const tipos = () =>{
    let  tiposArreglo = [];
    const tipos = document.querySelectorAll('.tipo');

    tipos.forEach(tipo=> tiposArreglo = [...tiposArreglo,tipo])

    const marinos = tiposArreglo.filter(marino => marino.getAttribute('data-tipo') === 'marino');
    const dulces = tiposArreglo.filter(dulce => dulce.getAttribute('data-tipo') === 'dulce');


    mostrarTipos(marinos,dulces);
}

const mostrarTipos = (marinos, dulces) =>{
    btnMarino.addEventListener('click', ()=> {
        limpiarHtml(contenedorTipos);
        marinos.forEach(marino=> contenedorTipos.appendChild(marino));
    })
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}