// script.js

// Função para carregar o Markmap e a barra de ferramentas dinâmica
function loadMarkmap(elementId, data) {
  const { markmap: Markmap, mm: mm } = window;
  const markmapInstance = Markmap.create(`#${elementId}`, null, mm);
  markmapInstance.setData(data);
}

// Carrega o Markmap na página principal
if (document.getElementById('mindmap')) {
  loadMarkmap('mindmap', {
    "content": "Navegação Markmap",
    "children": [
      {
        "content": "Página Principal",
        "url": "index.html"
      },
      {
        "content": "Página 1: Direitos e Garantias Fundamentais",
        "url": "page1.html"
      },
      {
        "content": "Página 2: Poder Executivo",
        "url": "page2.html"
      }
    ]
  });
}
