jQuery(function ($) {
    $(".faq-question").click(function () {
        $(this).parent().toggleClass("active");
        $(this).parent().siblings().removeClass("active");
        $(this).next().slideToggle();
        $(this).find("i").toggleClass("fa-minus");
        $(this).find("i").toggleClass("fa-plus");
        $(this).parent().siblings().find(".faq-answer").slideUp();
        $(this).parent().siblings().find(".faq-question i").removeClass("fa-minus");
        $(this).parent().siblings().find(".faq-question i").addClass("fa-plus");
    })

    $('.slider-container').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.customer-reviews-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<button type="button" class="slick-prev">&#10094;</button>`,
        nextArrow: `<button type="button" class="slick-next">&#10095;</button>`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})