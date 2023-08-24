$(document).ready(function(){
    popup = {
        init: function(){
          $('article').click(function(){
            popup.open($(this));
          });
          
          $(document).on('click', '.popup img', function(){
            return false;
          }).on('click', '.popup', function(){
            popup.close();
          })
        },
        open: function($article) {
          $('.review-popup').addClass('pop');
          $popup = $('<div class="popup" />').appendTo($('body'));
          $arti = $article.clone().appendTo($('.popup'));
          // $bg = $('<div class="bg" />').appendTo($('.popup'));
          $('<div class="star"><svg><use xlink:href="#star"></use></svg></div>').appendTo(".popup article > div:nth-of-type(1) > div");
          $('<div class="star"><svg><use xlink:href="#star"></use></svg></div>').appendTo(".popup article > div:nth-of-type(1) > div");
          $('<div class="star"><svg><use xlink:href="#star"></use></svg></div>').appendTo(".popup article > div:nth-of-type(1) > div");
          $('<div class="star"><svg><use xlink:href="#star"></use></svg></div>').appendTo(".popup article > div:nth-of-type(1) > div");
          $('<div class="star"><svg><use xlink:href="#star"></use></svg></div>').appendTo(".popup article > div:nth-of-type(1) > div");
          // $shadow = $('<div class="shadow" />').appendTo($arti);
          // src = $('img', $arti).attr('src');
          // $shadow.css({backgroundImage: 'url(' + src + ')'});
          // $bg.css({backgroundImage: 'url(' + src + ')'});
          setTimeout(function(){
            $('.popup').addClass('pop');
          }, 10);
        },
        close: function(){
          $('.review-popup, .popup').removeClass('pop');
          setTimeout(function(){
            $('.popup').remove()
          }, 100);
        }
      }
      popup.init()
});
