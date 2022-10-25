$(".incontainer").on('mouseenter click', function () {
    $(".ro1").addClass("rot1");
    $(".ro2").addClass("rot2");
    $(".rot1").css("transform", "rotate(15deg)");
    $(".rot2").css("transform", "rotate(-15deg)");
})

$(".incontainer").on('mouseleave', function () {
    $(".rot1").css("transform", "rotate(0deg)");
    $(".rot2").css("transform", "rotate(0deg)");
})
