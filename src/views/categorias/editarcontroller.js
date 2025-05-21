

export const editarController = async (a) => {
    // declaración de variables
    const form = document.querySelector('form')
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#descripcion');
    // Solicitud a la API
    const request = await fetch(`http://localhost:3000/api/categorias/${a.id}`);
    const {data} = await request.json();
    // Llenado de los campos
    nombre.value = data.nombre;
    descripcion.value = data.descripcion; 
    
    // Métodos
    const actualizar = async (e) => {
        e.preventDefault();
        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value
        }
        const request = await fetch(`http://localhost:3000/api/categorias/${a.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        });  
        const respuesta = await request.json(); 
        console.log(respuesta);
                
        if (respuesta.success) {
           Swal.fire({
                title: 'Muy bien!',
                text: respuesta.message,
                icon: 'success',
                confirmButtonText: 'Cool'
            }) 
            location.hash = "#categorias";
        }
        
    }

    // Eventos
    form.addEventListener('submit', actualizar);    
}