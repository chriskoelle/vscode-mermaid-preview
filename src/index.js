"use strict"
const {commands, workspace} = require('vscode');

module.exports.activate = ({subscriptions}) => {
  const mp = workspace.getConfiguration('mermaidPreview');
  let theme = mp.get('theme');

  /**
   * Re-render Markdown if the Mermaid theme is changed
   */
  subscriptions.push(
    workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('mermaidPreview')) {
        theme = workspace.getConfiguration('mermaidPreview').get('theme')
        commands.executeCommand('markdown.preview.refresh');
      }
    })
  )

  /**
   * Wrap code in Mermaid div and inject the theme
   */
  const mermaidIt = (code) =>
  `<div class="mermaid">
  %%{init:{'theme':'${theme}'}}%%
  ${code}
  </div>`;

  return {
    extendMarkdownIt(md) {
      const {
        highlight
      } = md.options;
      md.options.highlight = (code, lang = '') =>
        lang.match(/\bmermaid\b/i)
          ? mermaidIt(code)
          : highlight(code, lang);
      return md;
    }
  };
};
