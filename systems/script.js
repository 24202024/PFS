document.addEventListener('DOMContentLoaded', function() {
    const hiddenElement = document.querySelectorAll('.anim-block');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            //    observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    hiddenElement.forEach(element => {
        observer.observe(element);
    });
});
