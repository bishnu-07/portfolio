// JavaScript Document
/*********************/

//Check to see if the window is top if not then display button
jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.scrollToTop').fadeIn();
    } else {
        jQuery('.scrollToTop').fadeOut();
    }
    });
    jQuery('.scrollToTop').click(function(){
        jQuery('html, body').animate({scrollTop : 0},700);
    return false;
});
//endScrollToTop



jQuery(document).ready(function() {
    //Sticky Menu
    jQuery('#nav_bg').stickit({scope: StickScope.Document, zIndex: 101});
    jQuery('#nav_media').stickit({scope: StickScope.Document, zIndex: 101});

    //Side Menu
    $('#dismiss, .overlay').on('click', function () {
        $("body").removeClass("nav_open");
        $("#sidebarCollapse").removeClass("nOpen");
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $('#nav_media').removeClass('stick_bg');
    });
    $('#sidebarCollapse, #showhide_mob').on('click', function () {
        $("body").toggleClass("nav_open");
        // $("#sidebarCollapse").toggleClass("nOpen");
        // $('#sidebar').addClass('active');
        // $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $("#sidebarCollapse").on('click', function () {
        $("#sidebarCollapse").toggleClass("nOpen");
        $('#sidebar').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('#nav_media').toggleClass('stick_bg');
    });

    //on Click Sub Menu
    $(".has-submenu > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
            .parent()
            .hasClass("active")
        ) {
            $(".has-submenu").removeClass("active");
            $(this)
            .parent()
            .removeClass("active");
        } else {
            $(".has-submenu").removeClass("active");
            $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
            $(this)
            .parent()
            .addClass("active");
        }
    });
    // 1st child
    $(".has_third_menu").each(function(){
        $(this).append('<span class="tigger_icon"></span>');
    });
    // $('#append_item').each(function() {
    //     //var count = ul;
    //     if( $("#append_item").find("ul")){
    //         $( this ).append('<span>Learn More</span>');
    //     }
    // });

    $(".has_third_menu span").on("click", function(){
        //$(this).siblings("ul").addClass("showinMedia");
        //$(".sidebar-submenu").slideUp(200);
        if (
            $(this).parent().hasClass("active")
        ) {
            $(".has_third_menu").removeClass("active");
            $(this).parent().removeClass("active");
            //$(this).find("ul").removeClass("showinMedia").css({'height': '0px'});
        } else {
            $(".has_third_menu").removeClass("active");
            //$(this).next(".showinMedia").slideDown(200);
            $(this).parent().addClass("active");
            //$(this).siblings("ul").addClass("showinMedia").css({'height': 'auto'});
        }
    });
    // 2nd child

    //endMobile menu

    // Filter MixUp
    var filterList = {
        init: function () {
            jQuery('#teamList').mixItUp({
                selectors: {
                    target: '.testiBox',
                    filter: '.filter'
                },
                load: {
                    //filter: '.favourite'  // if show the First view on particular category
                }
            });
        }
    };
    filterList.init();
    // end Filter
    
})











