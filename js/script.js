
$('.btn_menu').on('click', function () {
    $('#nav, .btn_menu, body').toggleClass('is_active');
})

// document.addEventListener('click', function (e) {
//     if (!e.target.closest('#nav') && e.target !== btn_menu) {
//         navbar.classList.remove('is_active');
//         btn_menu.classList.remove('is_active');
//     }
// });

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
            ($(e.target).hasClass('nav')) ||
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
    speed: 300,
    slidesToShow: 3,
    centerPadding: '0px',
    // centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                centerPadding: '20px',
                slidesToShow: 2,
                variableWidth: false,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                centerPadding: '20px',
                slidesToShow: 1,
                variableWidth: false,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
