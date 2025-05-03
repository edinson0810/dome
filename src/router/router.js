import { loadView } from "../helpers/loadView";
import { productoController } from "../views/productos/productoController.js";
import { categoriaController } from "../views/categorias/categoriaController.js";
import { inicioController } from "../views/inicio/inicioController.js";

const routes = {
  inicio: {
    "template": "inicio/index.html",
    controlador: inicioController
  },
  
  productos: {
    "template": "productos/index.html",
    controlador: productoController
  },
  categorias: {
    "template": "controladorcategorias/index.html",
    controlador: categoriaController
  }
};

export const router = (app) => {
  const hash = location.hash.slice(1);
  const { template, controlador } = matchRoute(hash)
  // Llmando la vista
  loadView(app, template);
  // Ejecutar el controldor
  // ?
  
controlador()
}

const matchRoute = (hash) => {
  // if(hash){
  //   return routes["inicio"]
  // }
  for (const route in routes) {
    if (route === hash) {
      return routes[route];
    }
  }
}