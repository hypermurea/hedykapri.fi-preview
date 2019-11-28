$(document).ready(function(){
  $('.carousel-container').slick({
    arrows: true,
    appendArrows: $("#nosto2"),
    variableWidth: false,
    swipe: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
  });
});

$(function() {
  $("#toggle-menu").click(function(e) {
	   $(".main-navigation").toggleClass('toggled');
	   e.preventDefault();
  });
});

var expandValmennukset = function(e) {
  $(".main-navigation").removeClass('toggled');
  $("#expandable-valmennukset").attr("style", "display:block");
  $("#expand-valmennukset").attr("style", "display:none;");
};

$('#menu-otayhteytta').click(function(e) {
  $(".main-navigation").removeClass('toggled');
});

$("#expand-valmennukset").click(expandValmennukset);
$("#menu-valmennukset").click(expandValmennukset);

$("#collapse-valmennukset").click(function(e) {
  $("#expandable-valmennukset").attr("style", "display:none");
  $("#expand-valmennukset").attr("style", "");
  $(document).scrollTop( $("#valmennukset").offset().top );
});

var expandValmentajasi = function(e) {
  $(".main-navigation").removeClass('toggled');
  $("#expandable-valmentajasi").attr("style", "display:block");
  $("#expand-valmentajasi").attr("style", "display:none;");
};

$("#expand-valmentajasi").click(expandValmentajasi);
$("#menu-valmentajasi").click(expandValmentajasi);

$("#collapse-valmentajasi").click(function(e) {
  $("#expandable-valmentajasi").attr("style", "display:none;");
  $("#expand-valmentajasi").attr("style", "");
  $(document).scrollTop( $("#valmentajasi").offset().top );
});

var expandProbono = function(e) {
  $(".main-navigation").removeClass('toggled');
  $("#expandable-pro_bono_coaching").attr("style", "display:block");
  $("#expand-pro_bono_coaching").attr("style", "display:none;");
};

$("#expand-pro_bono_coaching").click(expandProbono);
$("#menu-pro_bono_coaching").click(expandProbono);

$("#collapse-pro_bono_coaching").click(function(e) {
  $("#expandable-pro_bono_coaching").attr("style", "display:none;");
  $("#expand-pro_bono_coaching").attr("style", "");
  $(document).scrollTop( $("#pro_bono_coaching").offset().top );
});



$("#contactForm").submit(function(e) {
        // prevent default submit behaviour
        e.preventDefault();
        // serialize total form data
        var postData = $(this).serializeArray();

        var error = false;
        for(var i = 0; i < postData.length; i ++) {
          if(postData[i].value === "") {
            error = true;
            console.log('error: ' + postData[i].name)
            $("#" + postData[i].name).addClass('error');
            //$("input[name='" + postData[i].name + "']").addClass('error');
          } else {
            $("#" + postData[i].name).removeClass('error');
            //$("input[name='" + postData[i].name + "']").removeClass('error');
          }
        }

        if(error) {
          return;
        }

        // get form action url
        var formActionURL = $(this).attr("action");
        // $("#submit").val('please wait...');
        // JQuery ajax method , for post we can directly use $.post({}); this is shortcut method for sending post request
        $.ajax({
            url: formActionURL,
            type: "POST",
            data: postData,
         }).done(function(data) {
            alert("Kiitos yhteydenotosta!");
            $("#contactForm").find("input[type=text], textarea").val("");
         }).fail(function() {
            alert("error");
         }).always(function() {
            $("#submit").val('submit');
        });
    });
