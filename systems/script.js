document.addEventListener('DOMContentLoaded', function() {
    const plate = document.querySelector('.anim-block');
    const arrowUp = document.querySelector('.arrowUp');
    const hiddenElement = document.querySelectorAll('.anim-block');

    function checkPlateVisibility() {
        const rect = plate.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
            arrowUp.style.display = 'block';
        } else {
            arrowUp.style.display = 'none';
        }
    }

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


    window.addEventListener('scroll', checkPlateVisibility);

    arrowUp.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
