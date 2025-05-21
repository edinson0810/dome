import { loadView } from "../helpers/loadView";
import { productoController } from "../views/productos/productoController.js";
import { categoriasController } from "../views/categorias/categoriascontroller.js";
import { categoriaController } from "../views/categorias/categoriacontroller.js";
<<<<<<< HEAD
import { editarController } from "../views/categorias/editarcontroller.js";
=======
import { inicioController } from "../views/inicio/inicioController.js";
import { categoriasController } from "../views/categorias/categoriasController.js";
>>>>>>> eb50d15cb644ae4643a87716f7e9b31aa54bd10f
import { crearProducto } from "../views/productos/crearProducto.js";
import { editarController } from "../views/categorias/editarController.js";

const routes = {

  
  productos: {
    "template": "productos/index.html",
    controlador: productoController
  },
  crearproductos: {
    "template": "productos/crearProducto.html",
    controlador: crearProducto
  },
<<<<<<< HEAD

categoria:{
"template": "categorias/categoria.html",
controlador: categoriasController
},
  categorias: {
    "template": "categorias/index.html",
    controlador: categoriasController
  },
=======
  categorias: {
    "template": "categorias/index.html",
    controlador: categoriaController
  },

  categoria: {
    "template": "categorias/categoria.html",
    controlador: categoriaController
  },

>>>>>>> eb50d15cb644ae4643a87716f7e9b31aa54bd10f
  "editarcategoria/:id": {
    "template": "categorias/editar.html",
    controlador: editarController
  }

};

export const router = async (app) => {  
  const hash = location.hash.slice(1);
<<<<<<< HEAD
  const [ rutas, params ] = matchRoute(hash)
  // console.log(rutas);
  // console.log(params);
  // return
  // Llamando la vista
  await loadView(app, rutas.template);
=======
  const { template, controlador } = matchRoute(hash);

  // Llmando la vista
  await loadView(app, template)
>>>>>>> eb50d15cb644ae4643a87716f7e9b31aa54bd10f
  // Ejecutar el controldor
  rutas.controlador(params)
}

<<<<<<< HEAD
const matchRoute = (hash) => {  
  const arreglo = hash.split('/') ;  

  for (const route in routes) {
    const b = route.split('/');   
    
    if (b.length !== arreglo.length) continue
    
    const params = {}

    const matched = b.every((parte, i) => {      
      if (parte.startsWith(":")) {   
=======
const matchRoute = (hash) => {
  const arreglo = hash.split('/');

  for (const route in routes) {
    const b = route.split('/');

    if (b.length !== arreglo.length) continue

    const params = {}

    const matched = b.every((parte, i) => {
      if (parte.startsWith(":")) {
>>>>>>> eb50d15cb644ae4643a87716f7e9b31aa54bd10f
        const partName = parte.slice(1);
        const value = arreglo[i];
        params[partName] = value;
        return true
      }
<<<<<<< HEAD
      if (parte === arreglo[i]){
        return true
      }
    }); 

    if (matched) {      
      return [routes[route], params]
    }
  }
  return [null, null]
}
=======
      if (parte === arreglo[i]) {
        return true
      }
    });

    console.log(params);



    if (route === hash) {
      return routes[route];
    }
  }

}
>>>>>>> eb50d15cb644ae4643a87716f7e9b31aa54bd10f
