document.addEventListener("DOMContentLoaded", function () {
    const startItem = document.querySelector('.start');
    const destinationItem = document.querySelector('.destination');
    var startItemWidth = 0;
    var startItemHeight = 0;
    const triggerScrollPosition = 7.3; // Trigger animation after scrolling 50px

    const onScroll = () => {
        const isHomeAnimationActive = document.body.classList.contains('home-animation');
        const onAnim = document.body.classList.contains('on-anim');
        var htmlTag = document.documentElement;

        if (window.scrollY >= triggerScrollPosition && !isHomeAnimationActive && !onAnim) {
            // Add the home-animation class to the body
            document.body.classList.add('home-animation');
            htmlTag.style.scrollbarGutter = 'stable';
            htmlTag.style.setProperty('--rui-vh', '7.3px');
            setTimeout(function () {

                document.body.classList.remove('home-animation');
            }, 3000);
            // Get the position and size of the destination item
            const destinationRect = destinationItem.getBoundingClientRect();
            const startRect = startItem.getBoundingClientRect();

            // Calculate the transform values to move the start item to the destination item
            const translateX = destinationRect.left - startRect.left;
            const translateY = destinationRect.top - startRect.top;

            if (startItemWidth < 50) {
                startItemWidth = startRect.width;
                startItemHeight = startRect.height;
            }

            // Apply the transformation and size change
            startItem.style.transform = `translate(${translateX}px, ${translateY}px)`;
            startItem.style.width = `${destinationRect.width}px`;
            startItem.style.height = `${destinationRect.height}px`;
        } else if (!onAnim && startItemWidth > 50) {

            // Remove the home-animation class from the body
            document.body.classList.remove('home-animation');

            // Revert the transformation and size change
            startItem.style.transform = `translate(0, 0)`;
            startItem.style.width = startItemWidth + `px`; // Initial width
            startItem.style.height = startItemHeight + `px`; // Initial height}


        };
    };
    window.addEventListener('scroll', onScroll);
});



window.addEventListener('wheel', function (event) {
    const isHomeAnimationActive = document.body.classList.contains('home-animation');
    if (isHomeAnimationActive) {
        event.preventDefault();
    }
}, { passive: false });