export const categoriaController = async() => {
  const respuesta = await fetch("http://localhost:3000/api/categorias");
  const datos = await respuesta.json();
  // console.log(datos);
}