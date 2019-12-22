
$(function () {
    "use strict";

    function gridGallery() {
        if ($(".gallery-items").length) {
            var $grid = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three"
            });
            $grid.imagesLoaded(function () {
                $grid.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function (b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                $grid.isotope({
                    filter: c
                });
                $(".gallery-filters a").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
            });
        }
    }

    function hoverdirInit() {
        $(".hde .gallery-item").each(function () {
            $(this).hoverdir();
        });
    }

    gridGallery();
    hoverdirInit();

});


