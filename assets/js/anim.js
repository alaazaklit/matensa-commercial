var startItemWidth = startItemHeight = destinationItemWidth = destinationItemHeight = translateX = translateY = currentScrollPosition = isScrollingDown = 0;
var startItemHeight = 0;
var startItem = destinationRect = htmlTag = startRect = destinationItem = startPositionDocument = destinationPositionDocument = isHomeAnimationActive = onAnim = "";
var triggerScrollPosition = 7; // Trigger animation after scrolling 50px
var animationTimeout;
var lastScrollPosition = 0;
var currentIndex = 1;

var swiper_main = "";
document.addEventListener('DOMContentLoaded', (event) => {
    swiper_main = new Swiper('.swiper-container', {
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
                spaceBetween: 40,
                slidesPerView: 3,
                centeredSlides: true,
            },
        }
    });

    swiper_main.on('slideChange', function () {
        if (swiper_main.activeIndex == 1) {
            doAnim();
        }

    });
});


function onWindowResize() {
    loadAnim();
}

window.addEventListener('resize', onWindowResize);
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        loadAnim();

    }, 10);
});

function preventScroll(event) {
    const isHomeAnimationActive = document.body.classList.contains('home-animation');
    if (isHomeAnimationActive) {
        event.preventDefault();
    }
}



function getElementPositionRelativeToDocument(element) {
    const rect = element.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    };
}
var loadWidth = 1250;
function loadAnim() {

    let windowWidth = window.innerWidth;
    if (windowWidth >= loadWidth) {
        if (document.querySelector('.start')) {
            document.body.classList.add('home-page');
            startItem = document.querySelector('.start');
            destinationItem = document.querySelector('.destination');

            // Get the position and size of the destination item
            destinationRect = destinationItem.getBoundingClientRect();
            startRect = startItem.getBoundingClientRect();

            startItemWidth = `${startRect.width}px`;
            startItemHeight = `${startRect.height}px`;

            startItem.style.width = destinationItemWidth = `${destinationRect.width}px`;
            startItem.style.height = destinationItemHeight = `${destinationRect.height}px`;

            startPositionDocument = getElementPositionRelativeToDocument(startItem);
            destinationPositionDocument = getElementPositionRelativeToDocument(destinationItem);
            // Calculate the transform values to move the start item to the destination item
            translateX = destinationPositionDocument.left - startPositionDocument.left;
            translateY = destinationPositionDocument.top - startPositionDocument.top;

            // Apply the transformation and size change
            startItem.style.transformOrigin = '0 0';
            startItem.style.transform = `translate(${translateX}px, ${translateY}px)`;
            const onScroll = () => { doAnim() };
            window.addEventListener('scroll', onScroll);
        }
    }
}


function doAnim() {
    let windowWidth = window.innerWidth;
    if (windowWidth >= loadWidth) {
        isHomeAnimationActive = document.body.classList.contains('home-animation');
        onAnim = document.body.classList.contains('on-anim');
        htmlTag = document.documentElement;
        const checkItem = document.querySelector('.home-section-2');
        const checkPosition = getElementPositionRelativeToDocument(checkItem);
        triggerScrollPosition = (checkPosition.top * 0.5);
        currentIndex = swiper_main.activeIndex;

        // if () { }

        if (!onAnim) {
            currentScrollPosition = window.scrollY;

            isScrollingDown = currentScrollPosition > lastScrollPosition;

            if (!isHomeAnimationActive && currentScrollPosition >= triggerScrollPosition) {
                // Add the home-animation class to the body

                document.body.classList.add('home-animation');
                startItem.style.width = startItemWidth;
                startItem.style.height = startItemHeight;
                htmlTag.style.overflowY = 'hidden'; // Disable vertical scrollbar
                window.removeEventListener('wheel', preventScroll, { passive: false }); // Disable mouse wheel scrolling
                htmlTag.style.scrollbarGutter = 'stable';
                htmlTag.style.setProperty('--rui-vh', '7.3px');

                // Set a timeout to revert the changes after 3 seconds
                animationTimeout = setTimeout(function () {

                    document.body.classList.remove('on-anim');
                    htmlTag.style.scrollbarGutter = 'auto';
                    htmlTag.style.setProperty('--rui-vh', '7.3px');
                    htmlTag.style.overflowY = ''; // Re-enable vertical scrollbar

                }, 1500);

                scrollToSectionTwo();
            }
            else if ((currentScrollPosition < triggerScrollPosition) && isHomeAnimationActive) {

                if (currentIndex != 1) {
                    swiper_main.slideTo(1);
                }
                if (currentIndex == 1) {
                    // Remove the home-animation class from the body
                    document.body.classList.remove('home-animation');
                    startItem.style.width = destinationItemWidth;
                    startItem.style.height = destinationItemHeight;

                    htmlTag.style.overflowY = ''; // Re-enable vertical scrollbar
                    window.addEventListener('wheel', preventScroll, { passive: false }); // Re-enable mouse wheel scrolling

                    // Revert the transformation and size change after animation timeout
                    clearTimeout(animationTimeout);
                    // startItem.style.transform = `translate(0, 0)`;
                    // startItem.style.width = startItemWidth + `px`; // Initial width
                    // startItem.style.height = startItemHeight + `px`; // Initial height}


                    lastScrollPosition = currentScrollPosition;

                    scrollToMain();
                }
            }
        }
    }
}


let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const checkItem = document.querySelector('.home-section-2');
    const checkPosition = getElementPositionRelativeToDocument(checkItem);
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        console.log("Scrolling Down");
        if (!document.body.classList.contains('home-animation') && (checkPosition.top * 0.5) < document.documentElement.scrollTop) {
            scrollToSectionTwo();
        }
    } else {


        console.log("Scrolling Up");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

function scrollToSectionTwo() {

    document.getElementById("home-section-2").scrollIntoView({ behavior: 'smooth' });
    setTimeout(function () {

        document.getElementById("home-section-2").scrollIntoView({ behavior: 'smooth' });

    }, 200);
    setTimeout(function () {

        document.getElementById("home-section-2").scrollIntoView({ behavior: 'smooth' });

    }, 400);
}

function scrollToMain() {
    document.getElementById("hero-banner").scrollIntoView();
    setTimeout(function () {
        document.getElementById("hero-banner").scrollIntoView();

    }, 200);
    setTimeout(function () {

        document.getElementById("hero-banner").scrollIntoView();

    }, 400);
}
// Usage


