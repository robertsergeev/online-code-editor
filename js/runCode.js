const output = document.getElementById("output");

function run() {
    let htmlCode = htmlField.getValue();
    let cssCode = cssField.getValue();
    let jsCode = jsField.getValue();

    output.contentDocument.body.innerHTML = `
    ${htmlCode} 
    <style>${cssCode}</style>`;

    output.contentWindow.eval(jsCode);
}

document.onkeyup = () => run();
