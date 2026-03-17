document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll(".copy-btn").forEach(btn => {

        btn.addEventListener("click", function() {

            const code = this.closest(".code-wrapper")
                              .querySelector("code")
                              .innerText;

            navigator.clipboard.writeText(code);
        });

    });

});