"use strict"

module.exports.activate = () => {
    return {
        extendMarkdownIt(md) {
            const { highlight } = md.options;
            md.options.highlight = (code, lang = '') =>
              lang.match(/\bmermaid\b/i)
                ? `<div class="mermaid">${code}</div>`
                : highlight(code, lang);

            return md;
        }
    }
}

