let resultado = ''

fetch('http://localhost:3000/api/foro')
    .then(res => res.json())
    .then(data => {
        data.forEach(foro => {
            resultado +=  `
            <article class="col-4 d-flex justify-content-center" data-id = "${foro.id}">
                <div class="card" style="width: 18rem;">
                    <img src="${foro.imageUrl}">
                    <div class="card-body">
                        <h5 class="card-title">${foro.titulo}</h5>
                        <p class="card-text">${foro.query}</p>
                        <div>
                            <button href="#" class="btn btn" id="btn-editar">Editar</button>
                            <button href="#" class="btn btn" id="btn-eliminar">Eliminar</button>
                        </div> 
                    </div>
                </div>
            </article>`
            
            
            
        });
    })

