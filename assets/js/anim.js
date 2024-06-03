// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {

//         var startItemWidth = startItemHeight = destinationItemWidth = destinationItemHeight = 0;
//         var startItemHeight = 0;


//         const startItem = document.querySelector('.start');
//         const destinationItem = document.querySelector('.destination');

//         // Get the position and size of the destination item
//         const destinationRect = destinationItem.getBoundingClientRect();
//         const startRect = startItem.getBoundingClientRect();

//         startItemWidth = `${startRect.width}px`;
//         startItemHeight = `${startRect.height}px`;

//         startItem.style.width = destinationItemWidth = `${destinationRect.width}px`;
//         startItem.style.height = destinationItemHeight = `${destinationRect.height}px`;



//         const startPositionDocument = getElementPositionRelativeToDocument(startItem);
//         const destinationPositionDocument = getElementPositionRelativeToDocument(destinationItem);
//         // Calculate the transform values to move the start item to the destination item
//         const translateX = destinationPositionDocument.left - startPositionDocument.left;
//         const translateY = destinationPositionDocument.top - startPositionDocument.top;

//         // Apply the transformation and size change
//         startItem.style.transformOrigin = '0 0';
//         startItem.style.transform = `translate(${translateX}px, ${translateY}px)`;




//         const triggerScrollPosition = 7; // Trigger animation after scrolling 50px
//         var animationTimeout;
//         var lastScrollPosition = 0;

//         const onScroll = () => {
//             const isHomeAnimationActive = document.body.classList.contains('home-animation');
//             const onAnim = document.body.classList.contains('on-anim');
//             var htmlTag = document.documentElement;

//             if (!onAnim) {
//                 const currentScrollPosition = window.scrollY;

//                 const isScrollingDown = currentScrollPosition > lastScrollPosition;

//                 if (!isHomeAnimationActive && currentScrollPosition >= triggerScrollPosition) {
//                     // Add the home-animation class to the body

//                     document.body.classList.add('home-animation');
//                     startItem.style.width = startItemWidth;
//                     startItem.style.height = startItemHeight;
//                     htmlTag.style.overflowY = 'hidden'; // Disable vertical scrollbar
//                     window.removeEventListener('wheel', preventScroll, { passive: false }); // Disable mouse wheel scrolling
//                     htmlTag.style.scrollbarGutter = 'stable';
//                     htmlTag.style.setProperty('--rui-vh', '7.3px');

//                     // Set a timeout to revert the changes after 3 seconds
//                     animationTimeout = setTimeout(function () {

//                         document.body.classList.remove('on-anim');
//                         htmlTag.style.scrollbarGutter = 'auto';
//                         htmlTag.style.setProperty('--rui-vh', '7.3px');
//                         htmlTag.style.overflowY = ''; // Re-enable vertical scrollbar

//                     }, 1500);











//                     setTimeout(function () {

//                         document.getElementById("home-section-2").scrollIntoView({ behavior: 'smooth' });

//                     }, 200);
//                     setTimeout(function () {

//                         document.getElementById("home-section-2").scrollIntoView({ behavior: 'smooth' });

//                     }, 400);
//                 }
//                 else if (currentScrollPosition < triggerScrollPosition && isHomeAnimationActive) {
//                     // Remove the home-animation class from the body
//                     document.body.classList.remove('home-animation');
//                     startItem.style.width = destinationItemWidth;
//                     startItem.style.height = destinationItemHeight;

//                     htmlTag.style.overflowY = ''; // Re-enable vertical scrollbar
//                     window.addEventListener('wheel', preventScroll, { passive: false }); // Re-enable mouse wheel scrolling

//                     // Revert the transformation and size change after animation timeout
//                     clearTimeout(animationTimeout);
//                     // startItem.style.transform = `translate(0, 0)`;
//                     // startItem.style.width = startItemWidth + `px`; // Initial width
//                     // startItem.style.height = startItemHeight + `px`; // Initial height
//                 }

//                 lastScrollPosition = currentScrollPosition;
//             }
//         };
//         window.addEventListener('scroll', onScroll);
//     }, 10);
// });

// function preventScroll(event) {
//     const isHomeAnimationActive = document.body.classList.contains('home-animation');
//     if (isHomeAnimationActive) {
//         event.preventDefault();
//     }
// }



// function getElementPositionRelativeToDocument(element) {
//     const rect = element.getBoundingClientRect();
//     const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return {
//         top: rect.top + scrollTop,
//         left: rect.left + scrollLeft
//     };
// }

// // Usage


