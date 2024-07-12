// Common JavaScript for both pages
document.addEventListener('DOMContentLoaded', () => {
  const toolbar = setTimeout(() => {
    const { markmap: O, mm: h } = window;
    const M = new O.Toolbar;
    M.attach(h);
    const re = M.render();
    re.setAttribute('style', 'position:absolute;bottom:20px;right:20px');
    document.body.append(re);
  });

  const createMarkmap = (data) => {
    const { markmap: O, mm: h } = window;
    window.mm = O.create('svg#mindmap', O.deriveOptions(), data);
  };

  if (document.getElementById('mindmap-page1')) {
    createMarkmap({
      content: "Direitos e Garantias Fundamentais",
      //... (rest of the data for page 1)
    });
  } else if (document.getElementById('mindmap-page2')) {
    createMarkmap({
      content: "Poder Executivo",
      //... (rest of the data for page 2)
    });
  }
});
