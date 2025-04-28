import { loadVeim } from "../helpers/loadVeim";

import { productosController} from "../views/productos/productoscontroller";

import { categoriasController } from "../views/categorias/categoriacontroller";

const routes = {
    productos: {
        "template": "?",
        controlador : productosController,
    },
    categorias: {
        "template": "?",
        controlador: categoriasController,
    },
}


export const router = (app) => {
const hash = location.hash.slice(1);
matchRoute(hash)
loadVeim(app, hash)

   
}
const matchRoute = (hash) => {
    for ( const route in routes) {
       if (route === hash) {
        return route;
       }
    }
}



