$(document).ready(function() {
  var menu = $("header>nav>ul");
  var menuToggle = $("h1");
  var signUp = $(".sign-up");

  $(menuToggle).on("click", function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(":hidden")) {
        menu.removeAttr("style");
      }
    });
  });
});








