$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 80) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
    });

    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("fa-times");
    });

    var typed = new Typed(".typing", {
        strings: ["Front-end Developer", "UI/UX Designer", "Web Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Animação das barras de progresso em Skills
    $(window).on('scroll', function () {
        var skillsSection = $('.skills').offset().top - $(window).height() + 200;
        if ($(window).scrollTop() > skillsSection) {
            $('.progress-bar span').each(function () {
                $(this).css('width', $(this).data('width') + '%');
            });
        }
    });
    $('.progress-bar span').each(function () {
        var width = $(this).data('width') || 50; // Padrão de 50% se não houver data-width
        $(this).css('width', '0').data('width', width);
    });
});
