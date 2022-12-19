
  $('.header-top__form-tabs').on('click', function(e) {
    e.preventDefault();
    $('.header-top__form-tabs').removeClass('header-top__form-tabs--active');
    $(this).addClass('header-top__form-tabs--active');

    $('.header-top__form-content').removeClass('header-top__form-content--active');
    $($(this).attr('href')).addClass('header-top__form-content--active');
  });