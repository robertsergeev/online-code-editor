// HTML
let html = new CodeMirror.fromTextArea(document.getElementById("editor-html"), {
    lineNumbers: true,
    mode: "text/html",
    theme: "dracula",
    autoCloseTags: true,
});

// CSS
let css = new CodeMirror.fromTextArea(document.getElementById("editor-css"), {
    lineNumbers: true,
    mode: "css",
    theme: "dracula",
    autoCloseBrackets: true,
});

css.on("inputRead", function (cm) {
    cm.showHint({ hint: CodeMirror.hint.css, completeSingle: false });
});

// JS
let js = new CodeMirror.fromTextArea(document.getElementById("editor-js"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "dracula",
    autoCloseBrackets: true,
});

js.on("inputRead", function (cm) {
    cm.showHint({ hint: CodeMirror.hint.javascript, completeSingle: false });
});

// CTRL+S
document.onkeydown = function (event) {
    if (event.keyCode == 83 && event.ctrlKey) {
        event.preventDefault();
    }
};
