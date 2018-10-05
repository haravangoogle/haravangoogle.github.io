window.onload = function () {
  showModal();
}

function detectIsMobile(plusWidthScreen) {
  if (plusWidthScreen && screen && screen.width)
    return (screen.width <= 699 || navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g) ? true : false);
  else
    return (navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g) ? true : false);
}

$(document).ready(function () {
  $('#backdrop').click(function () {
    hideModal();
  })

  $('#close-modal').click(function () {
    hideModal();
  })

  $("#show-contact-form").click(function () {
    showModal();
  })

  $("#contact-form").submit(function (e) {
    e.preventDefault();
    $("#loading").show();
    var name = $('#name').val();
    var phone = $('#phone').val();
    if (!name && !phone) return;
    else {
      $.post({
        url: 'https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSflkbXmiObI30IWeWOFujtBC7MhcvJ2eOWo7c9l0pe25byKIQ/formResponse',
        data: {
          "entry.1637794751": phone,
          "entry.945640530": name
        },
        headers: {
          // origin: 'haravanhn.github.io'
        },
        success: function () {
          $("#loading").hide();
          $("#modal-body").hide();
          $("#modal-headline").html("Cảm ơn bạn đã để lại thông tin! Haravan sẽ tư vấn cho bạn sớm nhất có thể.");
        },
        error: function () {
          $("#loading").hide();
          alert("Đã có lỗi xảy ra, vui lòng thử lại.");
        }
      })
    }
  })

  $('a.scroll[href*="#"]').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 0
    }, 800);
  });
  $(".video").click(function () {
    $.fancybox({
      'padding': 0,
      'autoScale': false,
      'transitionIn': 'none',
      'transitionOut': 'none',
      'title': this.title,
      'width': 650,
      'height': 360,
      'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
      'type': 'swf',
      'swf': {
        'wmode': 'transparent',
        'allowfullscreen': 'true'
      }
    });
    return false;
  });
  
  /***** MENU ****/
  $("#wrap-header-mobile").append('<span class="background-rgba"></span>');
  $("#showmenu-mobile").click(function (e) {
    e.preventDefault();
    $("#menu-mobile").toggleClass("show");
    $("#click-out-menu").toggleClass("show-menu");
    $('.background-rgba').css({ 'opacity': '1', 'z-index': '49', 'position': 'fixed' });
    $('body').addClass('overflow-hidden');
    $('.tab-content').hide();
    $('#wrap-header-mobile .background-rgba').css('position', 'fixed');
  });
  $('#click-out-menu').click(function () {
    $('#menu-mobile').removeClass("show");
    $(this).removeClass("show-menu");
    $('.background-rgba').css('opacity', '0', 'z-index', '-99999');
    $('#wrap-header-mobile .background-rgba').css('position', 'relative');
    $('body').removeClass('overflow-hidden');
    $('.tab-content').show();
  });
  $(".header_r_mb img:nth-child(1)").click(function () { var l1 = window.open('//www.haravan.com/haraweb', '_parent'); l1.focus(); });
  $(".header_r_mb img:nth-child(2)").click(function () { var l2 = window.open('//www.haravan.com/harapage', '_parent'); l2.focus(); });
  $(".header_r_mb img:nth-child(3)").click(function () { var l3 = window.open('//www.haravan.com/omnichannel', '_parent'); l3.focus(); });
  $('.intel-banner').addClass('hidden');
  $("#footermain a[href='/']").removeAttr("href").css("text-decoration", "none");
})

function showModal() {
  $("#modal-body").show();
  $("#modal-headline").html("Tư Vấn Google Shopping (Chỉ áp dụng cho các website trên nền tảng Haravan)");
  $("#loading").hide();
  $('#backdrop').show(300, function () {
    $('#custom-modal').show(300);
  });
}

function hideModal() {
  $('#custom-modal').hide(300, function () {
    $('#backdrop').hide(300);
  })
}