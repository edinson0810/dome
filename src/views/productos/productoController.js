export const productoController = async () => {
  try {
    const respuesta = await fetch("http://localhost:3000/api/productos");
    const datos = await respuesta.json();
<<<<<<< HEAD
    // console.log(datos.data);




=======
>>>>>>> eb50d15cb644ae4643a87716f7e9b31aa54bd10f
    const tabla = document.querySelector("#tabla");
    const tBody = tabla.querySelector("tbody");
    // console.log(tBody);


    // Limpiar el contenido anterior si lo hay
    tBody.innerHTML = "";

    datos.data.forEach(({ id, nombre, descripcion, precio }) => {
      const tr = tBody.insertRow();
      const tdNombre = tr.insertCell(0);
      const tdDescripcion = tr.insertCell(1);
      const tdPrecio = tr.insertCell(2);

      tdNombre.textContent = nombre;
      tdDescripcion.textContent = descripcion;
      tdPrecio.textContent = `${precio}`;

      tr.setAttribute("id", `user_${id}`);
    });

  } catch (error) {
    console.error("Error al cargar productos:", error);
  }




};

