
var navbar= document.querySelector('#openNav');

var sidebar= document.querySelector('.sidebar');

function openNav(){
  navbar.addEventListener('click',function(){
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'flex';
  } else {
      sidebar.style.display = 'none';
  }
  });

  document.addEventListener("click", function(event) {
    var isClickInsideNavbar = sidebar.contains(event.target);
    var isClickInsideHamburger = navbar.contains(event.target);

    if (!isClickInsideNavbar && !isClickInsideHamburger) {
        sidebar.style.display = 'none';
    }
});

}


openNav();

document.querySelectorAll('.faq-info').forEach(function (faqInfo) {
    faqInfo.addEventListener('click', function () {
        this.parentNode.classList.toggle('show-answer');
    });
});

// This part is done using chat-gpt.

document.addEventListener('DOMContentLoaded', function () {
  // Get the testimonials container and the width of a single card
  const testimonialsContainer = document.getElementById('testimonialsContainer');
  const cardWidth = testimonialsContainer.querySelector('.test-card').offsetWidth;

  // Set the scroll interval (adjust as needed)
  const scrollInterval = 2000;

  // Flags to track hover and grab (drag) states
  let isHovered = false;
  let isGrabbed = false;

  // Variable to store the initial mouse position when dragging starts
  let startX = 0;

  // Event listener for mouseover: Set isHovered to true and change cursor style
  testimonialsContainer.addEventListener('mouseover', () => {
    isHovered = true;
    testimonialsContainer.style.cursor = 'grab';
  });

  // Event listener for mouseout: Set isHovered to false and change cursor style
  testimonialsContainer.addEventListener('mouseout', () => {
    isHovered = false;
    testimonialsContainer.style.cursor = 'auto';
  });

  // Event listener for mousedown: Set isGrabbed to true and store initial mouse position
  testimonialsContainer.addEventListener('mousedown', (e) => {
    isGrabbed = true;
    startX = e.clientX;
  });

  // Event listener for mouseup: Set isGrabbed to false and reset initial mouse position
  testimonialsContainer.addEventListener('mouseup', () => {
    isGrabbed = false;
    startX = 0;
  });

  // Event listener for mousemove: Adjust scroll position when dragging
  testimonialsContainer.addEventListener('mousemove', (e) => {
    if (isGrabbed) {
      const deltaX = e.clientX - startX;
      testimonialsContainer.scrollLeft -= deltaX;
      startX = e.clientX;
    }
  });

  // Function to handle automatic scrolling
  function scrollTestimonials() {
    if (!isHovered && !isGrabbed) {
      testimonialsContainer.scrollTo({
        left: testimonialsContainer.scrollLeft + cardWidth,
        behavior: 'smooth',
      });

      // If reached the end, scroll back to the beginning
      if (testimonialsContainer.scrollLeft >= testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth) {
        testimonialsContainer.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  }

  // Set an interval to call the scrollTestimonials function at the specified interval
  setInterval(scrollTestimonials, scrollInterval);
});


