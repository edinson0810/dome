// import Swal from "sweetalert2";
export const editarProductos = async (producto) => {
    // Declaración de variables
    const form = document.querySelector('form');
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#descripcion');
    const precio = document.querySelector('#precio');
    const listaCategorias =document.querySelector('#categoria');

    const requestproductos = await fetch(`http://localhost:3000/api/productos/${producto.id}`);
    const { data: productos } = await requestproductos.json();
    const requestCategorias = await fetch('http://localhost:3000/api/categorias');
    const { data: categorias } = await requestCategorias.json();

    categorias.forEach((categoria) => {
        const option = document.createElement('option');
        option.value=categoria.id;
        option.textContent=categoria.nombre;
        listaCategorias.appendChild(option);
    });


    nombre.value = productos.nombre
    descripcion.value = productos.descripcion
    listaCategorias.value = productos.categoria_id
    precio.value = productos.precio


  
    // Declaración de métodos
    const enviar = async (e) => {
        e.preventDefault()
        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            categoria_id: listaCategorias.value,
            precio: precio.value
        }
        const request = await fetch(`http://localhost:3000/api/productos/${producto.id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',

            },
            
        });
        
         const respuesta = await request.json(); 
        console.log(respuesta);

    }
        form.addEventListener('submit', enviar); 

}