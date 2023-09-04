// Pobierz przycisk i div do zmiennych
const menuButton = document.querySelector('.menu-btn');
const menuDiv = document.querySelector('.menu');


// Dodaj nasłuchiwanie na kliknięcie przycisku
menuButton.addEventListener('click', function () {
  // Użyj toggle() do dodawania i usuwania klasy "active" w jednym kroku
  menuDiv.classList.toggle('active');
  menuButton.classList.toggle('active');
});





// Dodaj nasłuchiwanie na kliknięcie w inny obszar dokumentu
document.addEventListener('click', function (event) {
  // Sprawdź czy kliknięcie nie nastąpiło na elemencie menuButton lub menuDiv
  if (event.target !== menuButton && event.target !== menuDiv) {
    // Jeśli nie, usuń klasę "active" z menuDiv
    menuDiv.classList.remove('active');
    menuButton.classList.remove('active');
  }
});



// Pobierz elementy sekcji intro
var introSections = document.querySelectorAll(".intro");

// Ustal początkową opacity
var initialOpacity = 1;

// Dodaj nasłuchiwanie na zdarzenie scroll
window.addEventListener("scroll", function () {
  // Dla każdej sekcji intro
  introSections.forEach(function (introSection) {
    // Oblicz nową opacity na podstawie pozycji przewijania
    var newOpacity = 1 - (window.scrollY / (window.innerHeight / 2));

    // Ogranicz opacity do przedziału od 0 do 1
    newOpacity = Math.max(0, Math.min(1, newOpacity));

    // Ustaw nową opacity dla danej sekcji intro
    introSection.style.opacity = newOpacity;
  });
});

// ------------
// Pobierz wszystkie linki z menu
const menuLinks = document.querySelectorAll('.menu a');

// Funkcja do sprawdzania, która sekcja jest aktualnie widoczna
function checkSectionVisibility() {
  const scrollPosition = window.scrollY + (window.innerHeight / 2);

  // Iteruj przez sekcje
  menuLinks.forEach((link) => {
    const sectionId = link.getAttribute('href').substring(1); // Pobierz ID sekcji z linku
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      // Sprawdź, czy środek ekranu znajduje się w granicach sekcji
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Usuń klasę "active" z wszystkich linków w menu
        menuLinks.forEach((link) => {
          link.classList.remove('active');
        });

        // Dodaj klasę "active" do odpowiedniego linku w menu
        link.classList.add('active');
      }
    }
  });
}

// Wywołaj funkcję sprawdzającą widoczność sekcji przy załadowaniu strony i przy przewijaniu
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
    // Possibly fall back to event handlers here
  }
});




// add animate to elements

const inViewport = (elem) => {
  let allElements = document.getElementsByClassName(elem);
  let windowHeight = window.innerHeight;
  const elems = () => {
    for (let i = 0; i < allElements.length; i++) { //  loop through the sections
      let viewportOffset = allElements[i]
        .getBoundingClientRect(); //  returns the size of an element and its position relative to the viewport
      let top = viewportOffset.top; //  get the offset top
      if (top < windowHeight) { //  if the top offset is less than the window height
        allElements[i].classList.add('active'); //  add the class
      } else {
        allElements[i].classList.remove('active'); //  remove the class
      }
    }
  }
  elems();
  window.addEventListener('scroll', elems);
}

inViewport('animate'); //  run the function on all section elements








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




