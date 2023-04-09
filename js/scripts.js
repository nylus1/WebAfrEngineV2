function navBar() {
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            nav.classList.add('bg-dark', 'shadow');
        } else {
            nav.classList.remove('bg-dark');
            nav.classList.add('transition-025')
        }
    })
}

function addClassToMobileHeadings() {

    const isMobileWidth = window.innerWidth <= 768;
    const h1 = document.getElementsByTagName('h1');

    if (isMobileWidth) {
        for (let i = 0; i < h1.length; i++) {
            h1[i].classList.remove('mt-4');
        }
    }

    window.addEventListener('resize', addClassToMobileHeadings);
}

function popItems() {

    const popElements = document.querySelectorAll(".pop");

    popElements.forEach(element => {
        element.style.opacity = 0;
    });

    function showElementSmoothly(element) {
        let opacity = 0;
        const intervalId = setInterval(function () {
            opacity += 0.05;
            element.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(intervalId);
            }
        }, 20);
    }

    setTimeout(function () {
        popElements.forEach(element => {
            showElementSmoothly(element);
        });
    }, 250);
}
