window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    macros: {
      bra: ["\\left \\langle #1 \\right \\vert", 1],
      ket: ["\\left \\vert #1 \\right \\rangle", 1],
      braket: ["\\left \\langle #1 \\mid #2 \\right \\rangle", 2],
      dd: ["\\frac{d #1}{d #2}", 2],
      pd: ["\\frac{\\partial #1}{\\partial #2}", 2],
      tr: "\\operatorname{Tr}",
      M: "\\mathcal{M}",
      R: "\\mathbb{R}",
      C: "\\mathbb{C}",
      F: "\\mathbb{F}",
      Z: "\\mathbb{Z}",
      Ham: "\\mathcal{H}"
    }
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex|md-nav__link"
  }
};

// 새로고침 없이 페이지를 이동해도 수식을 다시 그려주는 핵심 코드
document$.subscribe(() => {
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})