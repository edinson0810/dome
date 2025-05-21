<<<<<<< HEAD
// import Swal from "sweetalert2";

export const categoriaController =  () => {
    // Declaración de variables
    const form = document.querySelector('form');
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#descripcion');
    const id_categoria = document.querySelector('#id_categoria');
  
    // Declaración de métodos
    const enviar = async (e) => {
        e.preventDefault()
        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            id_categoria: id_categoria.value
        }
        const request = await fetch('http://localhost:3000/api/categorias', {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const response = await request.json();
        if (response.success) {
            form.reset()
             Swal.fire({
                title: 'Muy bien!',
                text: response.message,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            location.hash = "#categorias";
        }else{
            console.log(response);   
            Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
         
        }        
    }

    // Declaración de eventos
    form.addEventListener('submit', enviar)    
=======
export const categoriaController = () => {

  const listar = async () => {
    const request = await fetch('http://localhost:3000/api/categorias');
    const { data } = await request.json();
    const tbody = document.querySelector('tbody');
    // Recorrecmos la respuesta
    data.forEach(({ id, nombre, descripcion }) => {
      // Creamos los elementos
      const tr = document.createElement('tr');
      const tdNombre = document.createElement('td');
      const tdDescripcion = document.createElement('td');
      const tdAcciones = document.createElement('td');
      const div = document.createElement('div');
      const btnEditar = document.createElement('a')
      const btnEliminar = document.createElement('button')
      // Agregamos los textos
      tdNombre.textContent = nombre;
      tdDescripcion.textContent = descripcion;
      btnEditar.textContent = "Editar";
      btnEliminar.textContent = "Eliminar";
      // Agregamos los atributos
      btnEditar.setAttribute("href", `#editarcategoria/${id}`)
      // Creamos la botonera
      div.append(btnEditar, btnEliminar)
      tdAcciones.append(div);
      // Agregamos las columnas a la fila
      tr.append(tdNombre, tdDescripcion, tdAcciones);
      // Agregamos la fila a la tabla
      tbody.append(tr);
    });

  }

  listar()
>>>>>>> eb50d15cb644ae4643a87716f7e9b31aa54bd10f
}