var numClicks = 0;

$(document).ready(function() {

  $("#generator").on("click", function() {
    numClicks++;
    $(".container").append("<div class='allDiv baseCol'><p>" + numClicks + "</p></div>");

  });


});
