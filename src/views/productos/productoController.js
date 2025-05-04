export const productoController = async () => {
  try {
    const respuesta = await fetch("http://localhost:3000/api/productos");
    const datos = await respuesta.json();
    console.log(datos.data);

    const tabla = document.querySelector("#tabla");
    const tBody = tabla.querySelector("tbody");

    // Limpiar el contenido anterior si lo hay
    tBody.innerHTML = "";

    datos.data.forEach(({ id, nombre, descripcion, precio }) => {
      const tr = tBody.insertRow();
      const tdNombre = tr.insertCell(0);
      const tdDescripcion = tr.insertCell(1);
      const tdPrecio = tr.insertCell(2);

      tdNombre.textContent = nombre;
      tdDescripcion.textContent = descripcion;
      tdPrecio.textContent = `$${precio}`;

      tr.setAttribute("id", `user_${id}`);
    });

  } catch (error) {
    console.error("Error al cargar productos:", error);
  }



// const tabla = document.querySelector("#tabla");
// datos.data.forEach(element => {
//   const div = document.createElement("div");
//   div.textContent = element.nombre;
//    tabla.append(div);
// });
};

