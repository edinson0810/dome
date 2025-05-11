
import './main.css';
import { router } from './router/router';
const app = document.querySelector("#app");
const header = document.querySelector("#header");
const div = document.createElement("div");
const productos = document.createElement("a");
const categorias = document.createElement("a");
const logo = document.createElement("a");
logo.textContent = "Inicio";
productos.textContent = "Productos";
categorias.textContent = "Categorias";
logo.setAttribute("href", "#inicio")
productos.setAttribute("href", '#productos')
categorias.setAttribute("href", '#categorias')
header.classList.add('container', 'header')
div.classList.add('menu')
logo.classList.add("menu__link")
productos.classList.add('menu__link')
categorias.classList.add('menu__link')
div.append(productos, categorias);
header.append(logo, div);

window.addEventListener('hashchange', () => {
  router(app);
});

window.addEventListener('DOMContentLoaded', () => {
  router(app)
});




