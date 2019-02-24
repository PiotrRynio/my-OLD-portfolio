// navPage.js has code, which it is used to navigation on this page after click on link (a href). In the future I am going to make shorter code then today's.
const $navPage__navBar = $('.stickyUpperBar');
var activeSection = 'aboutMe';

$(document).ready(function () {
   //after click on link with-# (nav on page)
   $('a[href^="#"]').on('click', function (event) {
      var target = $($(this).attr('href'));

      // check that exist
      if (target.length) {

         // for NOT computer view
         if (($(window).width() < 1000) || (window.innerHeight > window.innerWidth)) {
            const navBarOffset = $navPage__navBar.height();
            const placeFromTop = (target.offset().top - (navBarOffset));
            event.preventDefault();
            $('html, body').animate({
               scrollTop: placeFromTop
            }, 500);
         }

         // for computer view
         else {
            // dis-active section
            $("." + activeSection).css({
               "-webkit-display": "none",
               "-ms-display": "none",
               "display": "none"
            });
            activeSection = '';
            // which section makes active
            var isFlexbox = false;
            if ($(this).attr('href') == "#section-aboutMe") {
               activeSection = 'aboutMe';
            } else if ($(this).attr('href') == "#section-myProjects") {
               activeSection = 'myProjects';
               isFlexbox = true;
            } else if ($(this).attr('href') == "#section-contact") {
               activeSection = 'contactAndFooterContainer';
               isFlexbox = true;
            }
            // make active
            if (isFlexbox) {
               $("." + activeSection).css({
                  "-webkit-display": "flex",
                  "-ms-display": "flex",
                  "display": "flex"
               });
               isFlexbox = false;
            } else {
               $("." + activeSection).css({
                  "-webkit-display": "block",
                  "-ms-display": "block",
                  "display": "block"
               });
            }
         }
         // clese navMenu
         if ($('.navMenu--active').length) {
            activeStickyNavBar();
         }
      }
   });
});

// fix bugs after change of screen
// reset of sections
window.addEventListener('resize', function () {
   if (($(window).width() < 1000) || (window.innerHeight > window.innerWidth)) {
      $('.aboutMe').css({
         "-webkit-display": "block",
         "-ms-display": "block",
         "display": "block"
      });
      $(".myProjects").css({
         "-webkit-display": "flex",
         "-ms-display": "flex",
         "display": "flex"
      });
      $(".contactAndFooterContainer").css({
         "-webkit-display": "flex",
         "-ms-display": "flex",
         "display": "flex"
      });
   } else {
      $('.aboutMe').css({
         "-webkit-display": "none",
         "-ms-display": "none",
         "display": "none"
      });
      $(".myProjects").css({
         "-webkit-display": "none",
         "-ms-display": "none",
         "display": "none"
      });
      $(".contactAndFooterContainer").css({
         "-webkit-display": "none",
         "-ms-display": "none",
         "display": "none"
      });

      if ((activeSection == "contactAndFooterContainer") || (activeSection == "myProjects")) {
         $("." + activeSection).css({
            "-webkit-display": "flex",
            "-ms-display": "flex",
            "display": "flex"
         });
      } else {
         $("." + activeSection).css({
            "-webkit-display": "block",
            "-ms-display": "block",
            "display": "block"
         });

      }
   }
});