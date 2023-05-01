function navBar() {
  var nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      nav.classList.add("bg-dark", "shadow");
    } else {
      nav.classList.remove("bg-dark");
      nav.classList.add("transition-025");
    }
  });
}

// Hotfix para que en formato móvil se muestren bien los titulos

// function addClassToMobileHeadings() {

//     const isMobileWidth = window.innerWidth <= 768;
//     const h1 = document.getElementsByTagName('h1');

//     if (isMobileWidth) {
//         for (let i = 0; i < h1.length; i++) {
//             h1[i].classList.remove('mt-4');
//         }
//     }

//     window.addEventListener('resize', addClassToMobileHeadings);
// }

function popItems() {
  const popElements = document.querySelectorAll(".pop");

  popElements.forEach((element) => {
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
    popElements.forEach((element) => {
      showElementSmoothly(element);
    });
  }, 250);
}

function backToTop() {
  if (window.scrollY != 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("scroll", function () {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

document.getElementById("backToTopBtn").addEventListener("click", function () {
  backToTop();
});


function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right, .zoom-in, .rotate-in, .animate-from-bottom"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      const animations = [
        "fade-in",
        "slide-in-left",
        "slide-in-right",
        "zoom-in",
        "rotate-in",
        "animate-from-bottom",
      ];
      const randomAnimation =
        animations[Math.floor(Math.random() * animations.length)];

      element.classList.add("active", randomAnimation);
    }
  });
}

window.addEventListener("load", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);
