import mermaid from 'mermaid';

const mermaidEl = document.querySelector('.mermaid');

if (mermaidEl instanceof HTMLElement) {
  const { theme = 'default', backgroundColor } = mermaidEl.dataset;

  // set the background color if configured
  if (backgroundColor) {
    mermaidEl.style.backgroundColor = backgroundColor;
  }

  // initialize
  mermaid.initialize({
    startOnLoad: true,
    // @ts-ignore
    theme,
  });
}
