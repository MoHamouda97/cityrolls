$(document).ready(function () {
    // show/hide cart items
    $('body').on('mouseenter', '#js_cart_menu', function () {
        $('#js_cart_details').addClass('cart-hover');
    }).on('mouseleave', '#js_cart_menu', function () {
        $('#js_cart_details').removeClass('cart-hover');
    });

    // toggle active class
    /*$('body').on('click', '#js_tabs li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });*/

    // show/hide map
    $('body').on('click', '#js_open_map', function () {
        $('#gmap_footer').slideToggle();
    });
});