$('.block-left').on('click', function (e) {
    $(this).toggleClass("active");
    $(this).children('.block-left > span, .hidden-content').toggleClass("active");
    e.preventDefault();
});