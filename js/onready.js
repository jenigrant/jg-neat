$(document)
    .ready(function() {

      // fix main menu to page on passing
      $('.main.menu').visibility({
        type: 'fixed'
      });

      // lazy load images
      $('.image').visibility({
        type: 'image',
        transition: 'vertical flip in',
        duration: 500
      });
   });
  