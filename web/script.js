const contenedor = document.getElementById('contenedor-row')
const btnCrear = document.getElementById('btn-crear')
const modal = new bootstrap.Modal(document.getElementById('modal'))
const btnSubirPublicacion = document.getElementById('btn-subir-publicacion')
const titulo = document.getElementById('titulo')
const publicacion = document.getElementById('publicacion')
const imagenUrl = document.getElementById('imagen-url')

let resultado = ""
let opcion = ""

//console.log(contenedor)

fetch('http://localhost:3000/api/foro')
    .then(res => res.json())
    .then(data => {
        data.forEach(foro => {
            resultado +=  `
            <article class="col-4 d-flex justify-content-center" data-id = "${foro.id}">
                <div class="card" style="width: 18rem;">
                    <img src="${foro.imageUrl}">
                    <div class="card-body">
                        <h5 class="card-title">${foro.title}</h5>
                        <p class="card-text">${foro.query}</p>
                        <div>
                            <button class="btn btn" id="btn-editar">Editar</button>
                            <button class="btn btn" id="btn-eliminar">Eliminar</button>
                        </div> 
                    </div>
                </div>
            </article>`
            
            contenedor.innerHTML = resultado
        });
    })

// Botón para abrir el modal de una nueva publicación
btnCrear.addEventListener('click', () => {
    opcion = "nuevo"
    btnSubirPublicacion.textContent = "Publicar"
    modal.show()
    titulo.value = "" // Al cancelar la publicación y hacer una nueva los espacios para ingresar están vacíos
    publicacion.value = ""
    imagenUrl.value = ""
})

// Forma para escuchar el evento eliminar
document.addEventListener('click', (event) => {
    if(event.target.matches('#btn-eliminar')) {
        const article = event.target.closest('.col-4') // Busca el elemento col-4 más cercano a article
        const idArticle = article.dataset.id

        // Se agrega con el fetch un switch alert para confirmar la eliminación de la pucbilcación
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No vas a poder revertir ésta decisión",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Si, eliminar'
        }).then((result)=>{
            if(result.isConfirmed){
                fetch(`http://localhost:3000/api/foro/${idArticle}`, { //Creamos fetch para eliminar la publicación(lo elimina por ID)
                    method: 'DELETE'
                }).then(res => {
                    if(res.ok){
                        article.remove()
                    }
                }).catch(err => {
                    console.error(err)
                })
                Swal.fire(
                    'Eliminada!',
                    'La publicación fue eliminada.',
                    'aprobado'
                )
            }
        })

        
    }
})

// Forma para escuchar el botón editar
document.addEventListener('click', (event) => {
    if(event.target.matches('#btn-editar')) {
        const article = event.target.closest('.col-4') // Busca el elemento col-4 más cercano a article
        const idArticle = article.dataset.id
        const editarImagenUrl = article.children[0].children[0].src; // Recupera los datos del formulario(imagen,titulo y publicación)
        const editarTitulo = article.children[0].children[1].children[0].textContent;
        const editarPublicacion = article.children[0].children[1].children[1].textContent;

        imagenUrl.value = editarImagenUrl;
        titulo.value = editarTitulo;
        publicacion.value = editarPublicacion;
        opcion = "editar";
        btnSubirPublicacion.textContent = "Editar";
        modal.show();

        

    
        
    }
})    