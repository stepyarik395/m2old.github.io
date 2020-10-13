
$('.mobile-header-menu').hide();

$('#burg').on('click',function(){
  $('.mobile-header-menu').slideToggle();
})








$('.photos-container').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button class="slick-arrow slick-prev"><img src="img/combined-shape.png"></button>',
  nextArrow: '<button class ="slick-arrow slick-next"><img src="img/combined-shape_2.png"></button>',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },


    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.slider-box').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button class="slick-arrow slick-prev"><img src="img/combined-shape.png"></button>',
  nextArrow: '<button class ="slick-arrow slick-next"><img src="img/combined-shape_2.png"></button>',
  responsive: [

    {
      breakpoint:768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//$('.mass').one('click', function () {
  //$('.mass').css('position','absolute');
  //$('.red-block').fadeIn(1000);
//});




$(document).ready(function(){
    $("#mobile").add("#desktop").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});




$('.main-content8__button').click(function(){
  $('.main-content8').css('filter','blur(5px)');
  $('.wrapper-overrlay').fadeIn();
  $('.wrapper-overrlay').addClass('disabled');
});

$('.close-popup').click(function(){
  $('.wrapper-overrlay').fadeOut();
  $('.main-content8').css('filter','none');
});




$(document).ready(function() {

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#form").trigger("reset");
    });
    return false;
  });
  
});





$('.main-content7-butt').on('click', function() { window.location = 'job-vacancy.html'; });


