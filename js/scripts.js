

//Default function
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   
   testWebP(function (support) {
   
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }else{
   document.querySelector('body').classList.add('no-webp');
   }
   });
//end

//Burger menu
$('.burger__menu').on('click', function (e) {
   e.preventDefault();
   $('.header-menu').toggleClass('menu-active');
   $('body').toggleClass('block');
})

$(document).ready(function () {
   $('.review-slider').slick({
      arrows: false,
      slidesToShow: 2,
/*       autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1, */
   });
});
