

Visibility.onVisible(function(){
    setTimeout(function() {
      $(".home h1").addClass("animated fadeInDown");
    },400);

    setTimeout(function() {
      $(".home h2").addClass("animated fadeInDown");
    },800);

    setTimeout(function() {
      $(".home h3").addClass("animated fadeInDown");
    },1200);

    setTimeout(function() {
      $(".about h2").addClass("animated fadeInDown");
    },1800);

    setTimeout(function() {
      $(".about p").addClass("animated fadeInDown");
    },2400);
});