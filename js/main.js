jQuery(document).ready(function($) {
    $("[data-toggle='tooltip']").tooltip();

    var carousels = $(".carousel");

    $(".carousel-control").on("click", function(evt) {
        evt.preventDefault();

        carousels.carousel($(this).data("slide"));
    });
});
