import { eliminarcaController } from "./eliminarController";

export const productosController = () => {
  const listar = async () => {
    const request = await fetch('http://localhost:3000/api/productos');

    const requestCategorias = await fetch('http://localhost:3000/api/categorias');
    const { data } = await request.json();
    const { data: categorias } = await requestCategorias.json();
    
   
    const tbody = document.querySelector('tbody');
    // Recorremos la respuesta
    data.forEach(({ id, nombre, descripcion, categoria_id }) => {

      const categoria = categorias.find((element) => element.id === categoria_id);

      // Creamos los elementos
      const tr = document.createElement('tr');
      const tdNombre = document.createElement('td');
      const tdDescripcion = document.createElement('td');
      const tdCategorias = document.createElement('td')
      const tdAcciones = document.createElement('td');
      const div = document.createElement('div');

      const btnEditar = document.createElement('a')
      const btnEliminar = document.createElement('button')
      // Agregamos los textos
      tdNombre.textContent = nombre;
      tdDescripcion.textContent = descripcion;
      tdCategorias.textContent = categoria.nombre;
      btnEditar.textContent = "Editar";
      btnEliminar.textContent = "Eliminar";
      // Agregamos los atributos
      btnEditar.setAttribute("href", `#editarProductos/${id}`);
      // Creamos la botonera
      div.append(btnEditar, btnEliminar)
      tdAcciones.append(div);
      tr.setAttribute("id", `user_${id}`);
      

      btnEliminar.dataset.id = data.id;
      btnEliminar.addEventListener ("click",  async () => {
        
        await eliminarcaController(id);
      })

      // Agregamos las columnas a la fila
      tr.append(tdNombre, tdDescripcion, tdCategorias, tdAcciones);
      // Agregamos la fila a la tabla
      tbody.appendChild(tr);
    });

  }

  listar()
}