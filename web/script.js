const contenedor = document.getElementById('contenedor-row')
const btnCrear = document.getElementById('btn-crear')
const modal = new bootstrap.Modal(document.getElementById('modal'))
const btnSubirPublicacion = document.getElementById('btn-subir-publicacion')
const titulo = document.getElementById('titulo')
const descripcion = document.getElementById('descripcion')
const imagenUrl = document.getElementById('imagen-url')

let resultado = ''
let opcion = ''

console.log(contenedor)

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

// Botón para crear nueva publicación utilizando el modal de bootstrap
btnCrear.addEventListener('click', () => {
    option = "nuevo"
    btnSubirPublicacion.textContent = "Publicar"
    modal.show()
    titulo.value = "" // Al cancelar la publicación y hacer una nueva los espacios para ingresar están vacíos
    descripcion.value = ""
    imagenUrl.value = ""
})

// Forma para escuchar el evento eliminar
document.addEventListener('click', (event) => {
    if(event.target.matches('#btn-eliminar')) {
        const article = event.target.closest('.col-4') // Busca el elemento col-4 más cercano a article
        const idArticle = article.dataset.id

        fetch(`http://localhost:3000/api/foro/${idArticle}`, { //Creamos fetch para eliminar la publicación(lo elimina por ID)
            method: 'DELETE'
        }).then(res => {
            if(res.ok){
                article.remove()
            }
        }).catch(err => {
            console.error(err)
        })
    }
})