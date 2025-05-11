import { loadView } from "../helpers/loadView";
import { productoController } from "../views/productos/productoController.js";
import { categoriaController } from "../views/categorias/categoriacontroller.js";
import { inicioController } from "../views/inicio/inicioController.js";
import { crearProducto } from "../views/productos/crearProducto.js";

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
  }
};

export const router = async (app) => {
  const hash = location.hash.slice(1);
  const { template, controlador } = matchRoute(hash)
  // Llmando la vista
  await loadView(app, template);
  // Ejecutar el controldor
  // ?

  controlador()
}

const matchRoute = (hash) => {
  for (const route in routes) {
    if (route === hash) {
      return routes[route];
    }
  }
}
