
  $('.header-top__form-tabs').on('click', function(e) {
    e.preventDefault();
    $('.header-top__form-tabs').removeClass('header-top__form-tabs--active');
    $(this).addClass('header-top__form-tabs--active');

    $('.header-top__form-content').removeClass('header-top__form-content--active');
    $($(this).attr('href')).addClass('header-top__form-content--active');
  });

  $('.reviews__slider').slick({
    prevArrow: '<button class="slick-prev"><svg width="19px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"/></svg></button>',
    nextArrow: '<button class="slick-next"><svg width="19px" height="18px" viewBox="0 0 24 24" color="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"/></svg></button>',
  });

  function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}