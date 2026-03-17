document.addEventListener("DOMContentLoaded", function() {

    const mainBtn = document.querySelector(".falseBtn a");
    const scene = document.querySelector(".scene-transition");
    const progress = document.querySelector(".scene-progress");

    if (!mainBtn || !scene || !progress) {
        console.log("Один из элементов не найден");
        return;
    }

    mainBtn.addEventListener("click", function(e) {
        e.preventDefault();

        scene.classList.add("active");

        let width = 0;
        progress.style.width = "0%";

        const interval = setInterval(() => {
            width += 2;
            progress.style.width = width + "%";

            if (width >= 100) {
                clearInterval(interval);

                setTimeout(() => {
                    window.scrollTo(0, 0);

                    scene.classList.remove("active");
                }, 300);
            }
        }, 30);
    });

});