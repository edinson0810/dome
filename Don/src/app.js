import './main.css'

import "./componentes/header.js"

import { loadVeim } from './helpers/loadVeim.js';
import { router } from './router/router.js';




window.addEventListener("hashchange", () => {
    router(app);
});