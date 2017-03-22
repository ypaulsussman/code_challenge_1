var numClicks = 0;

$(document).ready(function() {
  $("#generator").on("click", function() {
    makeDiv();
  });

  $(".container").on("click", ".swapper", function(){
    var swapped = $(this).parent();
    changeColor(swapped);
  });

  $(".container").on("click", ".deleter", function(){
    $(this).parent().remove();

  });


});

function makeDiv() {
  numClicks++;
  $(".container").append("<div class='allDiv baseCol'>"+
                          "<p>" + numClicks + "</p>" +
                          "<button class='swapper'>Swap</button>"+
                          "<button class='deleter'>Delete</button>"+
                          "</div>");
}

function changeColor(swapped) {
  swapped.toggleClass('baseCol, swapped');
}
