const btn_menu = document.querySelector('#btn_menu');
const navbar = document.querySelector('#nav');

btn_menu.onclick = () => {
    navbar.classList.toggle('is_active');
    btn_menu.classList.toggle('is_active');
};

document.addEventListener('click', function (e) {
    if (!e.target.closest('#nav') && e.target !== btn_menu) {
        navbar.classList.remove('is_active');
        btn_menu.classList.remove('is_active');
    }
});

function hideModals() {
    $('.modal').removeClass('is_active').fadeOut();
    $('body, .header .nav, .btn_menu').removeClass('is_active');
};

$(function () {
    function showModal(id) {
        $(id).addClass('is_active').fadeIn(300);
        $(id).addClass('is_active');
    }

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal-close').on('click', () => {
        hideModals();
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).hasClass('btnModal')) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('nav__link')) ||
            ($(e.target).hasClass('btn_menu')) ||
            ($(e.target).hasClass('modal-content'))
        )) {
            hideModals();
        }
    });
});

$('.products-slider').slick({
    arrows: true,
    infinite: false,
    dots: true,
    speed: 600,
    slidesToShow: 3,
    centerPadding: '0px',
    // centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: "unslick",
        },
    ]
});
