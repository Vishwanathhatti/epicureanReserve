
var testimonial=[
  {name:"Vishwanath Hatti", review:"Epicurean Reserve brings gourmet dining to your doorstep, connecting you with talented chefs for personalized culinary experiences. With its easy-to-use platform and exceptional service, it's the perfect solution for elevating your home dining to new heights.", img:"vish.jpeg",},
  {name:"Atharv Pattanshetti", review:"Epicurean Reserve revolutionizes home dining with its seamless platform connecting food enthusiasts to talented chefs. The result? Unforgettable culinary experiences in the comfort of your own home. A game-changer for foodies seeking convenience without compromising on quality.", img:"testimonial-img/person1.jpg"},
  {name:"Shubham Mishra", review:"Epicurean Reserve offers seamless access to skilled chefs for personalized home dining. With an intuitive interface and flavorful creations, it's the top choice for gourmet experiences from the comfort of home", img:"testimonial-img/person2.jpg"},
  {name:"Aditya Bhoir", review:"Epicurean Reserve delivers culinary excellence with ease, connecting users to skilled chefs for unforgettable dining experiences. Its user-friendly platform simplifies the booking process, while each dish is a masterpiece of flavor and presentation. Perfect for special occasions or everyday indulgence.", img:"testimonial-img/person3.jpg",},
  {name:"Sumit Suryawanshi", review:"Epicurean Reserve: Seamless access to skilled chefs for unforgettable dining experiences. User-friendly platform, gourmet meals at home, perfect for any occasion.", img:"testimonial-img/person4.jpg",},
  {name:"Lord Kira", review:"Epicurean Reserve redefines home dining, seamlessly connecting users with skilled chefs for bespoke culinary experiences. With its intuitive platform and exceptional service, it's the go-to choice for those seeking gourmet meals without leaving the comfort of home", img:"vish.jpeg",},
  {name:"Kishor Nagare", review:"Epicurean Reserve sets a new standard for home dining, seamlessly connecting users with skilled chefs for unforgettable culinary adventures. With its easy-to-use platform and exceptional service, it's the perfect solution for elevating your home dining to new heights.", img:"testimonial-img/person2.jpg",},
  {name:"Shubham Pawar", review:"Epicurean Reserve elevates home dining, offering seamless access to skilled chefs for personalized culinary experiences. With its intuitive platform and exquisite dishes, it's a game-changer for those craving gourmet meals without leaving the comfort of home", img:"testimonial-img/person4.jpg",},
]

var faqs=[
  {question:"Will 'Epicurean Reserve' provide the ingredients for the dishes?", answer:"We will give you the list of ingredients required. However, we don't provide the ingredients."},
  {question:"For how many people can I book Chef for Event?", answer:"You can book Chef for Party for upto 60 adults and 60 children."},
  {question:"Do I get to try the cook before taking the subscription?", answer:"Yes, we offer a paid trial service. Trial fee will be adjusted to your final subscription cost. Upon booking a trial, we'll assign a cook as per your requirements. If you are satisfied with the service, the same cook will be assigned for your monthly subscription. If not satisfied, we'll arrange a second trial with another cook."},
  {question:"What if I am not satisfied with my cook's service?", answer:"We offer one free cook replacement in case you are dissatisfied with your cook's service."},
  {question:"Will my cook clean the utensils?", answer:"Utensil cleaning is not included in the subscription. The cook will only prepare your meals and clean the slab and stove."},
  {question:"Where is this service available?", answer:"Epicurean Reserve is servieable in Solapur & Pune."},
  {question:"Is Epicurian Reserve Hiring cook's?", answer:"We often hire chef's. For seeking job opportunities mail us your CV on epicurean.job@gmail.com"},
]


var chefInfo=[
  {img:"img/chef.png",name:"Vivek Oberoi", ratings:5, served:"20",speciality:"South Indian", expertise:"Multi-Cuisine expert"},
  {img:"img/chef.png",name:"Salman Khan", ratings:5, served:"30",speciality:"North Indian", expertise:"Multi-Cuisine expert"},
  {img:"img/chef.png",name:"Ranbir Kapoor", ratings:4.7, served:"20",speciality:"Continental", expertise:"Multi-Cuisine expert"},
  {img:"img/chef.png",name:"Mahesh Babu", ratings:4.6, served:"30",speciality:"South Indian", expertise:"Multi-Cuisine expert"},
  {img:"img/chef.png",name:"Arjun Kapoor", ratings:4.6, served:"40",speciality:"North Indian", expertise:"Multi-Cuisine expert"},
  {img:"img/chef.png",name:"Ranveer Singh", ratings:4.6, served:"40",speciality:"Chinese", expertise:"Multi-Cuisine expert"},
  {img:"img/chef.png",name:"Amir Khan", ratings:4.6, served:"20",speciality:"Italian", expertise:"Multi-Cuisine expert"},
  {img:"img/chef.png",name:"Anil Kapoor", ratings:4.5, served:"50",speciality:"Continental", expertise:"Multi-Cuisine expert"},
  {img:"img/chef.png",name:"Shahruk Khan", ratings:4.4, served:"40",speciality:"North Indian", expertise:"Multi-Cuisine expert"},
  {img:"img/chef.png",name:"Varun Dhawan", ratings:4.3, served:"20",speciality:"North Indian", expertise:"Multi-Cuisine expert"},
]

var blogPost=[
  {img:"img/chef-post.jpg", title:"The Ultimate Guide to Hiring a Home Chef with Epicurean Reserve", time:"5"},
  {img:"img/chef-post.jpg", title:"Our Mission for 2024", time:"2"},
]

function showBlogPost(){
  var clutter="";
  blogPost.forEach(function(obj){
  clutter+= `<div class="post">
  <img src="${obj.img}">
  <div class="blog-detail"><h1>${obj.title}</h1><div class="blog-post-type"><h4>${obj.time} min</h4></div></div></div>`
  })
  document.querySelector('.blog-post').innerHTML= clutter;
}

function showChef(){
  var clutter="";
  chefInfo.forEach(function(obj){
    clutter+= `
    <div class="swiper-slide">
    <div class="chef-card">
    <div class="card-inset"></div>
    <div class="chef-img">
    <img src="${obj.img}">
    <div class="chefInfo"><div class="chef-info"><h3>${obj.name}</h3> <h3>${obj.ratings}<span style="color: goldenrod;">&#9733</span></h3></div>
    <div class="chef-achivement">
    <div><p>${obj.served}+ Households Served</p><p>${obj.expertise}</p></div><div><p>speciality:</p><p>${obj.speciality}</p></div></div>
     </div></div></div></div> `
  })

  document.querySelector('.chef-container').innerHTML=clutter;
  } 

function showTestinomials(){
  var clutter="";
  testimonial.forEach(function(obj){
        clutter+= `<div class="swiper-slide"><div class="testimonial-card">
        <div class="img"><img src="${obj.img}"></div>
        <div class="ratings"> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
        <div class="review"><p>"${obj.review}"</p></div>
        <div class="name"><h3>${obj.name}</h3></div>
        </div>
        </div>`
  document.querySelector('.cards-container').innerHTML=clutter;
  })
}

function showFaq(){
  let clutter="";
  faqs.forEach(function(obj){
    clutter+= `<div class="inside-faq"><div class="faq-info"><p>${obj.question}</p><i class="fa-solid fa-chevron-down down"></i></div><p class="ans">${obj.answer}</p></div>`;

    document.querySelector('.faqs').innerHTML=clutter;
  })
}


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

showTestinomials();

showFaq();

showChef();

showBlogPost();

//swiper.js
var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 3,
  loop:true,
  spaceBetween: 30,
  allowTouchMove: false,
  speed:1000,
  autoplay:{
      delay:3500,
      pauseOnMouseEnter: true,        // added
      // disableOnInteraction: false,    // added
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    500:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    780: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1140:{
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1580:{
      slidesPerView:4,
      spaceBetween:20,
    },
  },
  
});

// For chef card

var swiper = new Swiper(".my", {
  // slidesPerView: 3,
  loop:true,
  spaceBetween: 30,
  allowTouchMove: false,
  speed:800,
  autoplay:{
      delay:2000,
      pauseOnMouseEnter: true,        // added
      // disableOnInteraction: false,    // added
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    500:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000:{
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300:{
      slidesPerView:4,
      spaceBetween:20,
    },
  },
  
});




document.querySelectorAll('.faq-info').forEach(function (faqInfo) {
    faqInfo.addEventListener('click', function () {
        this.parentNode.classList.toggle('show-answer');
    });
});


