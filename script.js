

function openSideBar(){
    const sidebar= document.querySelector('.sidebar');
    sidebar.style.display='flex';
}

function closeSideBar(){
    const sidebar= document.querySelector('.sidebar');
    sidebar.style.display='none';
    
}
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



//1. DOMContentLoaded Event: This event is fired when the initial HTML document has been completely loaded and parsed, 
// without waiting for stylesheets, images, and subframes to finish loading. 
// It ensures that the script runs after the HTML is fully loaded.

//2. Variables: testimonialsContainer: Stores a reference to the testimonials container.
// cardWidth: Retrieves the width of a single testimonial card.


// 3. Event Listeners: mouseover: Sets isHovered to true and changes the cursor style to 'grab' when the mouse is over the testimonials container.
// mouseout: Sets isHovered to false and changes the cursor style back to 'auto' when the mouse leaves the testimonials container.
// mousedown: Sets isGrabbed to true and stores the initial mouse position when the user clicks and holds the mouse button.
// mouseup: Sets isGrabbed to false and resets the initial mouse position when the user releases the mouse button.
// mousemove: Adjusts the scroll position when isGrabbed is true (user is dragging).

//4. scrollTestimonials Function: Checks if automatic scrolling is allowed (not hovered and not grabbed).
// Scrolls the container to the next card with a smooth behavior.
// If the end of the container is reached, scrolls back to the beginning.

//5. setInterval: Calls the scrollTestimonials function at regular intervals, enabling automatic scrolling.
// This script provides functionality for both automatic scrolling and manual scrolling (dragging) based on user interaction.