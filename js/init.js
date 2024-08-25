// HTML
let htmlField = new CodeMirror.fromTextArea(
    document.getElementById("editor-html"),
    {
        lineNumbers: true,
        mode: "text/html",
        theme: "dracula",
        autoCloseTags: true,
    }
);

// CSS
let cssField = new CodeMirror.fromTextArea(
    document.getElementById("editor-css"),
    {
        lineNumbers: true,
        mode: "css",
        theme: "dracula",
        autoCloseBrackets: true,
    }
);

cssField.on("inputRead", function (cm) {
    cm.showHint({ hint: CodeMirror.hint.css, completeSingle: false });
});

// JS
let jsField = new CodeMirror.fromTextArea(
    document.getElementById("editor-js"),
    {
        lineNumbers: true,
        mode: "javascript",
        theme: "dracula",
        autoCloseBrackets: true,
    }
);

jsField.on("inputRead", function (cm) {
    cm.showHint({ hint: CodeMirror.hint.javascript, completeSingle: false });
});
