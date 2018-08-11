$(function() {
     $("#toggle-menu").click(function(e) {
	   $(".main-navigation").toggleClass('toggled');
	   e.preventDefault();
    });
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
