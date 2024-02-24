
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

  const cardsContainer = document.querySelector('.testinomial');
  const cardWidth = document.querySelector('.test-card').offsetWidth;
  let intervalId;

  function moveToNextCard() {
    const firstCard = document.querySelector('.test-card:first-child');
    const nextCard = firstCard.nextElementSibling;
    cardsContainer.appendChild(firstCard);
    cardsContainer.style.transition = 'none';
    cardsContainer.style.transform = `translateX(${cardWidth}px)`;

    setTimeout(() => {
      cardsContainer.style.transition = 'transform 0.7s ease';
      cardsContainer.style.transform = 'translateX(0)';
    }, 50);
  }

  function stopInterval() {
    clearInterval(intervalId);
  }

  function startInterval() {
    intervalId = setInterval(moveToNextCard, 5000); // Move to next card every 5 seconds
  }

  startInterval(); // Start interval initially

  cardsContainer.addEventListener('mouseover', stopInterval); // Stop interval on hover
  cardsContainer.addEventListener('mouseout', startInterval); // Resume interval on mouseout



})

