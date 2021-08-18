$(document).ready(function () {
  // слайдер для фото
  $('.slider-photo').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,

    prevArrow: $(".slider-arrow-left"),
    nextArrow: $(".slider-arrow-right"),
  });

  //реализуем переключение между членами команды
  $(".team-card").on("mouseenter", function (e) {
    let teamIndex;

    e.preventDefault();
    $(".team-card").removeClass("active");
    $(this).addClass("active");
    teamIndex = $(this).index(".team-card");
    console.log(teamIndex);

    $(".team-title-js").removeClass("active");
    $(".team-title-js").eq(teamIndex).addClass("active");
  });
});
