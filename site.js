$(function() {
  $("#toggle-menu").click(function(e) {
	   $(".main-navigation").toggleClass('toggled');
	   e.preventDefault();
  });
});

var expandValmennukset = function(e) {
  $("#expandable-valmennukset").attr("style", "display:block");
  $("#expand-valmennukset").attr("style", "display:none;");
};

$("#expand-valmennukset").click(expandValmennukset);
$("#menu-valmennukset").click(expandValmennukset);

$("#collapse-valmennukset").click(function(e) {
  $("#expandable-valmennukset").attr("style", "display:none");
  $("#expand-valmennukset").attr("style", "");
  $(document).scrollTop( $("#valmennukset").offset().top );
});

var expandValmentajasi = function(e) {
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

$("#contactForm").submit(function(e) {
        // prevent default submit behaviour
        e.preventDefault();
        // serialize total form data
        var postData = $(this).serializeArray();

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
         }).fail(function() {
            alert("error");
         }).always(function() {
            $("#submit").val('submit');
        });
    });
