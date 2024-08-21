const output = document.getElementById("output");

function run() {
    let htmlCode = html.getValue();
    let cssCode = css.getValue();
    let jsCode = js.getValue();

    output.contentDocument.body.innerHTML = `
    ${htmlCode} 
    <style>${cssCode}</style>`;

    output.contentWindow.eval(jsCode);
}

document.onkeyup = () => run();
