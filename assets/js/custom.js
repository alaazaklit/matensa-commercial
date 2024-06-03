
//////////RATING//////////
window.addEventListener('load', function () {
    document.body.classList.add('load-page');
    setTimeout(function () {
        const clientsListLoad = document.querySelector('.load-ban-clients');
        clientsListLoad.classList.add('active');
        setTimeout(function () { triggerAnimation() }, 3000);
    }, 1000);
});


document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll('.trans');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the target is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ActiveItem');
                observer.unobserve(entry.target); // Optional: Remove observer after class is added
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    targets.forEach(target => {
        observer.observe(target);
    });
});

function triggerAnimation() {
    const clientsList = document.querySelector('.ban-clients.active');
    clientsList.classList.add('removeItems');
    setTimeout(function () {
        const clientsList2 = document.querySelector('.ban-clients');
        clientsList2.classList.remove('removeItems');
        clientsList2.classList.remove('active');

    }, 1000);


    setTimeout(function () {
        const clientsList3 = document.querySelector('.ban-clients.hide');
        clientsList3.classList.add('active');
        clientsList3.classList.remove('hide');
        clientsList.classList.add('hide');
    }, 1100);


}
document.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: false,
        loop: false,
        spaceBetween: 0,
        initialSlide: 1,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 4,
                slidesPerView: 3,
                centeredSlides: true,
            },
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper-container-3', {
        slidesPerView: 1,
        centeredSlides: false,
        loop: false,
        spaceBetween: 10,
        initialSlide: 0,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-swiper-testimonoals',
            prevEl: '.swiper-button-prev-swiper-testimonoals',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                centeredSlides: false,
            },
            600: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Select all swiper containers
    const swiperContainers = document.querySelectorAll('.swiper-container-2');

    swiperContainers.forEach((container, index) => {

        // Assign an ID to each swiper container if it doesn't have one
        if (!container.id) {

            container.id = `swiper-container-2-${index}`;
        }



        // Initialize Swiper for the current container
        new Swiper(`#${container.id}`, {
            slidesPerView: 1,
            centeredSlides: true,
            loop: false,
            spaceBetween: 0,
            initialSlide: 0,
            effect: 'fade',
            fadeEffect: {
                crossFade: true // Enables cross fade between slides
            },
            pagination: {
                el: `.swiper-pagination-${index}`,
                clickable: true,
            },
            navigation: {
                nextEl: `.swiper-button-next-${container.id}`,
                prevEl: `.swiper-button-prev-${container.id}`,
            },
            breakpoints: {
                // when window width is <= 768px
                768: {
                    slidesPerView: 1,
                    centeredSlides: false,
                },
            }
        });

        // Optionally, you can also dynamically add unique classes for pagination and navigation elements
        // This assumes that your HTML structure allows for this, or you dynamically create these elements in JavaScript
        const pagination = container.querySelector('.swiper-pagination');
        if (pagination) pagination.classList.add(`swiper-pagination-${container.id}`);

        const nextButton = container.querySelector('.swiper-button-next');
        if (nextButton) nextButton.classList.add(`swiper-button-next-${container.id}`);

        const prevButton = container.querySelector('.swiper-button-prev');
        if (prevButton) prevButton.classList.add(`swiper-button-prev-${container.id}`);
    });
});




function goToSlide(containerId, ind) {
    const container = document.querySelector(containerId);
    var tabCont = container.getAttribute('data-tabs');
    var elements = document.querySelectorAll(tabCont + ' a');
    // Iterate through each element and remove the class
    elements.forEach(function (element) {
        element.classList.remove('active');
    });
    elements[ind].classList.add('active');
    container.swiper.slideTo(ind);
}


//////////RATING//////////

document.addEventListener('DOMContentLoaded', function () {

    const ratingElement = document.querySelector('.rating');
    const ratingValue = parseFloat(ratingElement.getAttribute('data-rating'));
    const stars = ratingElement.querySelectorAll('.star');

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (i < Math.floor(ratingValue)) {
            star.classList.add('full');
        } else if (i === Math.floor(ratingValue)) {
            const decimalPart = ratingValue - i;
            star.classList.add('full');
            if (decimalPart > 0.25 && decimalPart < 0.75) {

                star.classList.remove('full');
                star.classList.add('half');
            } else if (decimalPart >= 0.75) {
                star.classList.add('full');
            }
        }
    }
});

function showMenu() {
    const header = document.querySelector('body');
    if (header.classList.contains('menu-active')) {
        //console.log('Header has the class "active".');
        header.classList.remove('menu-active');
    } else {
        header.classList.add('menu-active');
    }
}

