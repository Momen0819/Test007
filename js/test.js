$(document).ready(function() {

    // trigger nice scroll

    $("body").niceScroll({
        cursorcolor:"#594a42",
        cursorwidth:"8px"
    });

    // fixed navbar

    $(window).on("scroll", function() {

        if ( $(window).scrollTop() >= 150 ) {

            $(".navbar3").addClass("navbar-fixed");


        } else {

            $(".navbar3").removeClass("navbar-fixed");

        }

    });

    // responsive navbar

    $(".menu-toggle-btn").on("click", function() {

        $(".navbar3 .links").toggleClass("display");

    });

    // button to top

    $(".fa-chevron-up").on("click", function() {
        $("html").animate({
            scrollTop:0
        },800)
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 400) {

            $(".fa-chevron-up").fadeIn();

        }else {
            $(".fa-chevron-up").fadeOut();
        }

    });

    // trigger js tilt 

    $(".js-tilt").tilt({
        scale: 1.2,
        glare: true,
        maxGlare: 0.5,
    });


    $(".from-left1").hover(function() {

        $(this).find("span").eq(0).animate(
            {

                width: "100%",
        
            }, 500)


    }, function() {

        $(this).find("span").eq(0).animate(
            {
                
                    width: "5px",

            }, 500)

    });

    // section feautres

    $(".from-left2").hover(function() {

        $(this).find("span").eq(0).animate(
            {

                width: "100%",
        
            }, 500)

        $(".from-left2 i").css({
            color:"#fff",
            border:"8px solid #fff",
        }); 
        
        $(".from-left2 h4").css({
            color: "#fff",
        });

    }, function() {

        $(this).find("span").eq(0).animate(
            {
                
                    width: "2px",

            }, 500)

        $(".from-left2 i").css({
            color:"#594a42",
            border:"8px solid #594a42",
        }); 
        
        $(".from-left2 h4").css({
            color: "#594a42",
        });

    });
    

    // num3

    $(".from-left3").hover(function() {

    $(this).find("span").eq(0).animate(
        {

            width: "100%",
    
        }, 500)

    $(".from-left3 i").css({
        color:"#fff",
        border:"8px solid #fff",
    }); 
    
    $(".from-left3 h4").css({
        color: "#fff",
    });

    }, function() {

        $(this).find("span").eq(0).animate(
            {
                
                    width: "2px",

            }, 500)

        $(".from-left3 i").css({
            color:"#594a42",
            border:"8px solid #594a42",
        }); 
        
        $(".from-left3 h4").css({
            color: "#594a42",
        });

    });   

    // num4

    $(".from-left4").hover(function() {

    $(this).find("span").eq(0).animate(
        {

            width: "100%",
    
        }, 500)

    $(".from-left4 i").css({
        color:"#fff",
        border:"8px solid #fff",
    }); 
    
    $(".from-left4 h4").css({
        color: "#fff",
    });

    }, function() {

        $(this).find("span").eq(0).animate(
            {
                
                    width: "2px",

            }, 500)

        $(".from-left4 i").css({
            color:"#594a42",
            border:"8px solid #594a42",
        }); 
        
        $(".from-left4 h4").css({
            color: "#594a42",
        });

    });  
    
    // num5

    $(".from-left5").hover(function() {

    $(this).find("span").eq(0).animate(
        {

            width: "100%",
    
        }, 500)

    $(".from-left5 i").css({
        color:"#fff",
        border:"8px solid #fff",
    }); 
    
    $(".from-left5 h4").css({
        color: "#fff",
    });

    }, function() {

        $(this).find("span").eq(0).animate(
            {
                
                    width: "2px",

            }, 500)

        $(".from-left5 i").css({
            color:"#594a42",
            border:"8px solid #594a42",
        }); 
        
        $(".from-left5 h4").css({
            color: "#594a42",
        });

    });    
    
    // filling custom 

    $(".opinion").on("click", function() {

        $(".opinions").toggleClass("display2");

    });


     // nav toggler

    var navToggler = $(".nav-toggler"),
        aSide = $(".aside");

    navToggler.on("click", function() {

        aSide.toggleClass("open");
        $(this).toggleClass("btntoggle")
    })

    // type js
    var typed = new Typed(".type", {
        strings: ["DEVELOPERS ",
                "DESIGNERS",
                "MARKETERS ",
                "PHOTOGRAPHERS",
                ],
        typeSpeed: 100,
        backSpeed: 30,
        loop:true
    });

    // search btn

    $('#close-btn').click(function() {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    
    $('.buttons-effect').click(function() {
        $('#search-overlay').fadeIn();
    });

});
