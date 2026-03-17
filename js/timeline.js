document.addEventListener("DOMContentLoaded", function () {

    const stages = document.querySelectorAll('.stage');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    stages.forEach(stage => {
        observer.observe(stage);
    });

});