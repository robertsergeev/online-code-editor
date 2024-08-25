document.querySelectorAll(".editor h2").forEach((h2) => {
    h2.addEventListener("click", () => {
        document.querySelectorAll(".editor").forEach((editor) => {
            if (editor.contains(h2)) {
                editor.classList.add("active");
            } else {
                editor.classList.remove("active");
            }
        });
    });
});
