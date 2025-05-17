import { loadView } from "../helpers/loadView";
import { productoController } from "../views/productos/productoController.js";
import { categoriaController } from "../views/categorias/categoriacontroller.js";
import { inicioController } from "../views/inicio/inicioController.js";
import { crearProducto } from "../views/productos/crearProducto.js";
import { editarController } from "../views/categorias/editarController.js";

const routes = {

  inicio: {
    "template": "inicio/index.html",
    controlador: inicioController
  },
  productos: {
    "template": "productos/index.html",
    controlador: productoController
  },
  crearproductos: {
    "template": "productos/crearProducto.html",
    controlador: crearProducto
  },


  categorias: {
    "template": "categorias/index.html",
    controlador: categoriaController
  },

  "editarcategoria/:id": {
    "template": "categorias/editar.html",
    controlador: editarController
  }
};

export const router = async (app) => {
  const hash = location.hash.slice(1);
  const { template, controlador } = matchRoute(hash);

  // Llmando la vista
  await loadView(app, template)
  // Ejecutar el controldor
  // ?

  controlador()
}

const matchRoute = (hash) => {
  const arreglo = hash.split('/');

  for (const route in routes) {
    const b = route.split('/');

    if (b.length !== arreglo.length) continue

    const params = {}

    const matched = b.every((parte, i) => {
      if (parte.startsWith(":")) {
        const partName = parte.slice(1);
        const value = arreglo[i];
        params[partName] = value;
        return true
      }
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