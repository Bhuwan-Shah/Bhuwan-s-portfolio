

$(function () {
    $(".about").waypoint(function () {
        $(".about").addClass("animate__animated animate__fadeInUp");
    }, {
        offset: "50%"
    });
    $(".profile2").waypoint(function () {
        $(".profile2").addClass("animate__animated animate__fadeInLeft");
    }, {
        offset: "50%"
    });
    $(".info").waypoint(function () {
        $(".info").addClass("animate__animated animate__fadeInRight");
    }, {
        offset: "50%"
    });
    $(".stat").waypoint(function () {
        $(".stat").addClass("animate__animated animate__fadeIn");
    }, {
        offset: "90%"
    });
    $(".boxes").waypoint(function () {
        $(".boxes").addClass("popTag");
    }, {
        offset: "70%"
    });
    $(".skill_head").waypoint(function () {
        $(".skill_head").addClass("animate__animated animate__fadeInUp");
    }, {
        offset: "70%"
    });
    $(".cards").waypoint(function () {
        $(".cards").addClass("fadeIn_cards");
    }, {
        offset: "80%"
    });

    $(".cards_section").waypoint(function () {

        var $cards = $(".cards");   // ✅ define here

        $cards.each(function (index) {
            var self = $(this);
            setTimeout(function () {
                self.addClass("cards_up");
            }, index * 500);   // 0.5 sec delay
        });

        this.destroy(); // animation sirf ek baar chale

    }, {
        offset: "70%"
    });

    $(".project_cards").waypoint(function () {
        $(".project_cards").addClass("fadeIn_cards");
    }, {
        offset: "50%"
    });

    $(".project_section").waypoint(function () {

        var $cards = $(".project_cards");   // ✅ define here

        $cards.each(function (index) {
            var self = $(this);
            setTimeout(function () {
                self.addClass("cards_up");
            }, index * 300);   // 0.3 sec delay
        });

        this.destroy(); // animation sirf ek baar chale

    }, {
        offset: "60%"
    });

    $(".bottom_tag").waypoint(function () {
        $(".bottom_tag").addClass("animate__animated animate__fadeIn");
    }, {
        offset: "100%"
    });

    $(".service_head").waypoint(function () {
        $(".service_head").addClass("animate__animated animate__fadeInUp");
    }, {
        offset: "80%"
    });

    $(".pricing_cards_animation").waypoint(function () {
        $(".pricing_cards_animation").addClass("fadeIn_cards");
    }, {
        offset: "60%"
    });

    $(".services").waypoint(function () {

        var $cards = $(".pricing_cards_animation");   // ✅ define here

        $cards.each(function (index) {
            var self = $(this);
            setTimeout(function () {
                self.addClass("cards_up");
            }, index * 500);   // 0.5 sec delay
        });

        this.destroy(); // animation sirf ek baar chale

    }, {
        offset: "60%"
    });

    $(".contact_para").waypoint(function(){
        $(".contact_para").addClass("animate__animated animate__fadeInUp");
    },{
        offset: "80%"
    })

    $(".contact_btn").waypoint(function(){
        $(".contact_btn").addClass("animate__animated animate__fadeInUp");
    },{
        offset: "80%"
    })

    $(".add_ons").waypoint(function(){
        $(".add_ons").addClass("animate__animated animate__fadeInUp");
    },{
        offset: "80%"
    })

    $(".add_prices").waypoint(function(){
        $(".add_prices").addClass("animate__animated animate__fadeInUp");
    },{
        offset: "80%"
    })

    $(".project_head").waypoint(function(){
        $(".project_head").addClass("animate__animated animate__fadeInUp");
    },{
        offset: "80%"
    })

    $(".testimonial_head").waypoint(function(){
        $(".testimonial_head").addClass("animate__animated animate__fadeInUp");
    },{
        offset:"80%"
    })

    $(".testimonial_cards").waypoint(function () {
        $(".testimonial_cards").addClass("fadeIn_cards");
    }, {
        offset: "50%"
    });

     $(".reviews").waypoint(function () {

        var $cards = $(".testimonial_cards");   // ✅ define here

        $cards.each(function (index) {
            var self = $(this);
            setTimeout(function () {
                self.addClass("cards_up");
            }, index * 300);   // 0.3 sec delay
        });

        this.destroy(); // animation sirf ek baar chale

    }, {
        offset: "60%"
    });

    $(".testimonial_footer").waypoint(function(){
        $(".testimonial_footer").addClass("animate__animated animate__fadeInUp")
    },{
        offset: "80%"
    })

    $(".star_btn").waypoint(function(){
        $(".star_btn").addClass("animate__animated animate__fadeInUp")
    },{
        offset: "80%"
    })

     $(".contact_head").waypoint(function(){
        $(".contact_head").addClass("animate__animated animate__fadeInUp");
    },{
        offset: "80%"
    })

     $(".contact_info").waypoint(function(){
        $(".contact_info").addClass("animate__animated animate__fadeInLeft");
    },{
        offset: "80%"
    })

    $(".msg_form").waypoint(function(){
        $(".msg_form").addClass("animate__animated animate__fadeInRight");
    },{
        offset: "80%"
    })

    $(".hire_animetion").waypoint(function(){
        $(".hire_animetion").addClass("animate__animated animate__fadeInUp");
    },{
        offset: "90%"
    })
});


