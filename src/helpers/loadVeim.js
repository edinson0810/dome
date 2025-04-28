 export const loadVeim = async (elemento, hash) => {
  const response = await fetch(`./src/views/${hash}/index.html`);
const html = await response.text();
app.innerHTML = html;
    
}