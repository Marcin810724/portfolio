const menuButton = document.querySelector('.menu-btn');
const menuDiv = document.querySelector('.menu');



menuButton.addEventListener('click', function () {
  menuDiv.classList.toggle('active');
  menuButton.classList.toggle('active');
});



document.addEventListener('click', function (event) {
  if (event.target !== menuButton && event.target !== menuDiv) {
    menuDiv.classList.remove('active');
    menuButton.classList.remove('active');
  }
});



const menuLinks = document.querySelectorAll('.menu a');
function checkSectionVisibility() {
  const scrollPosition = window.scrollY + (window.innerHeight / 2);

  // Iteruj przez sekcje
  menuLinks.forEach((link) => {
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        menuLinks.forEach((link) => {
          link.classList.remove('active');
        });
        link.classList.add('active');
      }
    }
  });
}


window.addEventListener('load', checkSectionVisibility);
window.addEventListener('scroll', checkSectionVisibility);


document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {

  }
});




// add animate to elements

const inViewport = (elem) => {
  let allElements = document.getElementsByClassName(elem);
  let windowHeight = window.innerHeight;
  const elems = () => {
    for (let i = 0; i < allElements.length; i++) {
      let viewportOffset = allElements[i]
        .getBoundingClientRect();
      let top = viewportOffset.top;
      if (top < windowHeight) {
        allElements[i].classList.add('active');
      } else {
        allElements[i].classList.remove('active');
      }
    }
  }
  elems();
  window.addEventListener('scroll', elems);
}

inViewport('animate'); //  








$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
    viewed = true;
    $('.value').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
}




window.addEventListener('scroll', function () {
  var bottomCta = document.querySelector('.bottom-cta');
  var scrollPosition = window.scrollY;
  if (scrollPosition > 1) {
    bottomCta.classList.add('active')
  } else {
    bottomCta.classList.remove('active')
  }
});



// Funkcja, która zostanie wywołana po pełnym wczytaniu strony
function onPageLoad() {
  document.body.classList.add('load');
}
window.addEventListener('load', onPageLoad);
