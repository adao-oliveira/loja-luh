(function ($) {
  "use strict";

  // COPIAR PIX

  window.onload = function() {
    // Pega todos os elementos correspondentes
    var copyTextareaBtn = Array.prototype.slice.
      call(document.querySelectorAll('.js-textareacopybtn'));
    var copyTextarea = Array.prototype.slice.
      call(document.querySelectorAll('.js-copytextarea'));
 
    // Laço para percorrer todos os elementos
    copyTextareaBtn.forEach(function(btn, idx) {
 
      btn.addEventListener("click", function() {
 
        // Copia o conteudo do textarea
        copyTextarea[idx].select();
 
          var msg = document.execCommand('copy') 
            ? 'funcionou' : 'deu erro';
          console.log('Compando para copiar texto ' + msg);
 
      });
 
    });
  }

  const input = document.querySelector("#input");

input.addEventListener("keypress", function(e) {

    if(e.key === ",") {
      e.preventDefault();
  }
  
});

  /* ..............................................
     Fixed Menu
     ................................................. */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".main-header").addClass("fixed-menu");
    } else {
      $(".main-header").removeClass("fixed-menu");
    }
  });

  // close dropdown menu when clicking on an element

  $(document).on('click', function (event) {
    var $clickedOn = $(event.target),
      $collapsableItems = $('.collapse'),
      isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
      isLink = ($clickedOn.closest('a').length == 1),
      isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
    if ((!isToggleButton && isLink) || isOutsideNavbar) {
      $collapsableItems.each(function () {
        $(this).collapse('hide');
      });
    }
  });

  // mascara telefone e bloqueio de letras

  $(document).ready(function () {

    var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 00000-0000';
    },
      spOptions = {
        onkeypress: function (val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
      };
    $("#telefone").mask(SPMaskBehavior, spOptions);
    if (!((SPMaskBehavior >= "0") && (SPMaskBehavior <= "9")));
  })

})(jQuery);

// Exibe ou oculta o botão

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  $("#back-to-top").click(function () {
    $("html, body").animate({
      scrollTop: 0,
    },
      600
    );
    return false;
  });
});

