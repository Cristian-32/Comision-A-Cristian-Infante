const contenedor = document.getElementById('contenedor-row');
const btnCrear = document.getElementById('btn-crear');
const modal = new bootstrap.Modal(document.getElementById('modal'));
const btnSubirPublicacion = document.getElementById('btn-subir-publicacion');
const titulo = document.getElementById('titulo');
const publicacion = document.getElementById('publicacion');
const imagenUrl = document.getElementById('imagen-url');
const formulario = document.getElementById('formulario');

let resultado = "";
let opcion = "";
let idFormulario = "";

//console.log(contenedor)

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
        const article = event.target.closest('.col-4') // Busca el elemento más cercano a col-4 
        const idArticle = article.dataset.id

        // Se agrega un switch alert para confirmar la eliminación de la pubilcación
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
                // Se utiliza fetch para implementar la eliminación de la publicación(DELETE)
                fetch(`http://localhost:3000/api/foro/${idArticle}`, { 
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
        idFormulario = idArticle;
        modal.show();      
    }
})    

// Forma para escuchar el evento submit 
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if(opcion === "nuevo"){
        const nuevoForo =  {
            title: titulo.value,
            query: publicacion.value,
            imageUrl: imagenUrl.value,
        };

        // Se utiliza fetch para implementar la creación de la nueva publicación(POST)
        fetch('http://localhost:3000/api/foro', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoForo),
        }).then((res) => {
            if(res.ok){
                alert('Publicación creada satisfactoriamente');
                modal.hide();
                location.reload();
            }
        })
    }

    if(opcion === "editar") {
        const nuevoForo = {
            title: titulo.value,
            query: publicacion.value,
            imageUrl: imagenUrl.value
        };
        fetch(`http://localhost:3000/api/foro/${idFormulario}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoForo)
        }).then(res => {
            if(res.ok){
                alert('Publicación editada satisfactoriamente')
                modal.hide();
                location.reload();
            }
        })
    }

})