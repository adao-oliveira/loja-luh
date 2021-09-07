(function ($) {
  "use strict";

  $(document).ready(function() {
	
    // Add class to mailto link
    // Needed to separate the disabling of the default action AND copy email to clipboard
    $('a[href^=mailto]').addClass('mailto-link');
  
    var mailto = $('.mailto-link');
    var messageCopy = 'Clique para copiar a chave PIX';
    var messageSuccess = 'Realize o PIX com a chave copiada e em seguida entre em contato através do whatsapp';
    
    mailto.append('<span class="mailto-message"></span>');
    $('.mailto-message').append(messageCopy);
    
    // Disable opening your email client. yuk.
    $('a[href^=mailto]').click(function() {
      return false; 
    })
    
    // On click, get href and remove 'mailto:' from value
    // Store email address in a variable.
    mailto.click(function() {
      var href = $(this).attr('href');
      var email = href.replace('mailto:', '');
      copyToClipboard(email);
      $('.mailto-message').empty().append(messageSuccess);
      setTimeout(function() {
        $('.mailto-message').empty().append(messageCopy);}, 10000); 
    });
    
  });
  
  // Grabbed this from Stack Overflow.
  // Copies the email variable to clipboard
  function copyToClipboard(text) {
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', text);
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
  }

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

