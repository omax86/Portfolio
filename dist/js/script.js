const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const menuItem = document.querySelectorAll('.menu__item');
const menuOverlay = document.querySelectorAll('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

menuOverlay.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});



$(document).ready(function(){

    // Smooth scroll and page up

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('#pageup').fadeIn();
        } else {
            $('#pageup').fadeOut();
        }
    });

    // Connect form to email

    $('form').submit(function(e) {
        e.preventDefault();
        // if (!$(this).valid()) {
        //     return;
        // }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    // Modal #thanks close

    $('.modal__close').on('click', function() {
        $('.overlay, #order').fadeOut('slow');
    });
});