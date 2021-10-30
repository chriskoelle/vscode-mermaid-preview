'use strict';

import { commands, workspace } from 'vscode';

/**
 * Wrap Mermaid code in a div with data attributes for configuration
 */
const mermaidIt = (code) => {
  const config = workspace.getConfiguration('mermaidPreview');
  const theme = config.get('theme');
  const backgroundColor = config.get('backgroundColor');

  return `<div class="mermaid" data-theme="${theme}" data-background-color="${backgroundColor}">${code}</div>`;
};

/**
 * Refresh markdown preview if settings are changed
 */
const refreshOnConfigChange = (e) => {
  if (e.affectsConfiguration('mermaidPreview')) {
    console.debug('Memaid Preview Config Update');
    commands.executeCommand('markdown.preview.refresh');
  }
};

export const activate = ({ subscriptions }) => {
  // subscribe to configuration changes
  subscriptions.push(workspace.onDidChangeConfiguration(refreshOnConfigChange));

  return {
    extendMarkdownIt(md) {
      const { highlight } = md.options;
      md.options.highlight = (code, lang = '') =>
        lang.match(/\bmermaid\b/i) ? mermaidIt(code) : highlight(code, lang);
      return md;
    },
  };
};
