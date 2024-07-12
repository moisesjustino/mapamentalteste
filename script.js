(() => {
  const { markmap: Markmap, mm: h } = window,
        Toolbar = new Markmap.Toolbar();
  Toolbar.attach(h);
  const re = Toolbar.render();
  re.setAttribute("style", "position:absolute;bottom:20px;right:20px");
  document.body.append(re);
})();

((i, L, f, o) => {
  const w = i();
  window.mm = w.Markmap.create("svg#mindmap", (L || w.deriveOptions)(o), f);
})(() => window.markmap, null, {
  "content": "Constitutional Rights and Guarantees",
  "children": [
    {
      "content": "Individual and Collective Rights and Duties",
      "children": [
        {
          "content": "Individual Rights - Brief Description",
          "children": [
            {
              "content": "<pre data-lines=\"3,8\"><code> * Clear Definition: Rights that guarantee the individual protection of the citizen.\n * Practical Example: Freedom of expression.\n * Valuable Tip: Always relate individual rights to human dignity.\n * Relevant Jurisprudence: HC 82.424/RS - Freedom of Expression.\n * Exam Question: \"Freedom of expression is an individual right guaranteed by the Constitution. Explain its limitations.\"\n</code></pre>",
              "children": [],
              "payload": { "lines": "3,8" }
            }
          ],
          "payload": { "lines": "2,3" }
        },
        {
          "content": "Collective Duties - Brief Description",
          "children": [
            {
              "content": "<pre data-lines=\"9,12\"><code> * Clear Definition: Obligations of citizens for the benefit of the community.\n * Practical Example: Respect for the environment.\n * Valuable Tip: Know practical examples to contextualize duties.\n</code></pre>",
              "children": [],
              "payload": { "lines": "9,12" }
            }
          ],
          "payload": { "lines": "8,9" }
        }
      ],
      "payload": { "lines": "1,2" }
    },
    {
      "content": "Right to Life, Liberty, Equality, Security and Property",
      "children": [
        {
          "content": "Right to Life - Brief Description",
          "children": [
            {
              "content": "<pre data-lines=\"14,17\"><code> * Clear Definition: Fundamental right to existence.\n * Practical Example: Prohibition of the death penalty.\n * Valuable Tip: Relate to the principles of inviolability.\n</code></pre>",
              "children": [],
              "payload": { "lines": "14,17" }
            }
          ],
          "payload": { "lines": "13,14" }
        },
        {
          "content": "Right to Liberty - Brief Description",
          "children": [
            {
              "content": "<pre data-lines=\"18,21\"><code> * Clear Definition: Right to act according to one's own will, as long as it does not harm others.\n * Practical Example: Freedom of movement.\n * Valuable Tip: Study legal limitations to freedom.\n</code></pre>",
              "children": [],
              "payload": { "lines": "18,21" }
            }
          ],
          "payload": { "lines": "17,18" }
        }
      ],
      "payload": { "lines": "12,13" }
    },
    {
      "content": "Social Rights",
      "children": [
        {
          "content": "Right to Health - Brief Description",
          "children": [
            {
              "content": "<pre data-lines=\"23,26\"><code> * Clear Definition: Right to access public health services.\n * Practical Example: SUS - Unified Health System.\n * Valuable Tip: Know the main public health programs.\n</code></pre>",
              "children": [],
              "payload": { "lines": "23,26" }
            }
          ],
          "payload": { "lines": "22,23" }
        },
        {
          "content": "Right to Education - Brief Description",
          "children": [
            {
              "content": "<pre data-lines=\"27,30\"><code> * Clear Definition: Right to access basic and higher education.\n * Practical Example: Bolsa Família Program.\n * Valuable Tip: Understand educational inclusion policies.\n</code></pre>",
              "children": [],
              "payload": { "lines": "27,30" }
            }
          ],
          "payload": { "lines": "26,27" }
        }
      ],
      "payload": { "lines": "21,22" }
    },
    {
      "content": "Nationality",
      "children": [
        {
          "content": "Acquisition of Nationality - Brief Description",
          "children": [
            {
              "content": "<pre data-lines=\"32,35\"><code> * Clear Definition: Ways to acquire Brazilian nationality.\n * Practical Example: Born in Brazil.\n * Valuable Tip: Study the differences between original and acquired nationality.\n</code></pre>",
              "children": [],
              "payload": { "lines": "32,35" }
            }
          ],
          "payload": { "lines": "31,32" }
        }
      ],
      "payload": { "lines": "30,31" }
    },
    {
      "content": "Citizenship and Political Rights",
      "children": [
        {
          "content": "Political Rights - Brief Description",
          "children": [
            {
              "content": "<pre data-lines=\"37,40\"><code> * Clear Definition: Rights that guarantee the political participation of the citizen.\n * Practical Example: Right to vote.\n * Valuable Tip: Relate to representative democracy.\n</code></pre>",
              "children": [],
              "payload": { "lines": "37,40" }
            }
          ],
          "payload": { "lines": "36,37" }
        }
      ],
      "payload": { "lines": "35,36" }
    }
  ],
  "payload": { "lines": "1,2" }
});
