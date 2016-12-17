(function (a) {
    function u(b) { "*" == b ? a(".portfolio-items > div").fadeIn(200) : a(".portfolio-items > div").each(function () { a(this).attr("data-filter") == b && a(this).fadeIn(200) }) } var d = a(window).height(), h = a("#headWrapper").outerHeight(), v = a("#footWrapper").outerHeight(), d = d - (h + v); a("#contentWrapper").css("min-height", d); /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? a("html").addClass("touch") : a("html").addClass("no-touch"); a(".login-btn").prepend('<b class="tri hidden"></b>');
    a(".login-btn").click(function (b) { b.preventDefault(); a(".login-box").slideToggle(); a(".login-btn").find(".tri").toggleClass("visible"); a(".close-login").click(function (b) { b.preventDefault(); a(".login-box").slideUp(); a(".login-btn").find(".tri").removeClass("visible") }) }); d = a(".top-nav > ul").html(); a('<a href="" class="menuBtn"><i class="fa fa-bars"></i></a><div class="responsive-nav"></div>').prependTo("body"); a(".responsive-nav").html("<h3>AFFA&T</h3><ul>" + d + "</ul>"); a(".menuBtn").click(function (b) {
        b.preventDefault();
        a(".pageWrapper").toggleClass("colBody"); a(".menuBtn").toggleClass("menuBtn-selected"); a(".pageWrapper").click(function () { a(this).removeClass("colBody"); a(".menuBtn").removeClass("menuBtn-selected") })
    }); d = a(".responsive-nav ul"); d.find("li").each(function () {
        var b = a(this).find("ul"), c = a(this).find(".div-mega"); b.length && a(this).click(function () { b.slideToggle(500); a(".responsive-nav > ul > li").removeClass("selected"); a(this).addClass("selected") }); c.length && a(this).click(function () {
            c.slideToggle(500);
            a(".responsive-nav .div-mega").removeClass("selected"); a(this).addClass("selected")
        })
    }); var d = a(".top-nav > ul"), w = d.width(), h = d.find("li"); d.find("li.selected").index(); var l, m, n, p, q; h.each(function () {
        var b = a(this).find("ul:first"); b.css("max-width", w); a(this).hasClass("selected") && a(this).addClass("current"); if (b.length) {
            a(this).addClass("hasChildren"); var c = 0; a(this).find("> ul > li").each(function () { a(this).css({ transitionDelay: c + "ms" }); c += 50 }); a(this).hover(function () { a(this).addClass("selected") },
            function () { a(this).removeClass("selected") }); a(this).find("ul li ul").length && (b = a(this).find("ul ul"), l = b.outerWidth(), m = a(window).width(), n = b.offset(), p = n.left, q = m - p, q < l && b.css({ left: "auto", right: "100%" }))
        }
    }); if (0 < a(".mega-menu").length) {
        var x = a(".top-nav").offset().left; a(".top-nav > ul > li").each(function () {
            var b = a(this).offset().left + 40; a(this).outerWidth(); var b = b - x, c = a(this).find(".div-mega-section").length, c = 4 < c ? 4 * (a(".div-mega-section").outerWidth() + 20) : (a(".div-mega-section").outerWidth() +
            20) * c; a(this).find(".div-mega").css({ left: -b + "px", width: c + 20 + "px" })
        }); a(".top-nav > ul > li").hover(function () { a(this).find(".div-mega").slideDown(); return !1 }, function () { a(this).find(".div-mega").slideUp(); return !1 })
    } "true" == a(".top-head").attr("data-sticky") && (a(window).on("scroll", function () { 1 < a(window).scrollTop() ? a(".top-head").addClass("sticky") : a(".top-head").removeClass("sticky") }), a("document").ready(function () { 1 < a(window).scrollTop() ? a(".top-head").addClass("sticky") : a(".top-head").removeClass("sticky") }));
    a(".top-search a").click(function () { a(this).parent().find(".search-box").is(":visible") ? (a(".search-box").fadeOut(300), a(this).parent().removeClass("selected")) : (a(".search-box").fadeIn(300), a(this).parent().addClass("selected")); return !1 }); a(document).mouseup(function (b) { if (a(".search-box").is(":visible")) { var c = a(".search-box"); c.is(b.target) || 0 !== c.has(b.target).length || (a(".search-box").fadeOut(300), a(".top-search").removeClass("selected")) } }); var k = a(window).scrollTop(); 1 < k ? a("#to-top").css({ bottom: "10px" }) :
    a("#to-top").css({ bottom: "-100px" }); a(window).on("scroll", function () { k = a(window).scrollTop(); 1 < k ? a("#to-top").css({ opacity: 1, bottom: "10px" }) : a("#to-top").css({ opacity: 0, bottom: "-100px" }) }); a("#to-top").click(function () { a("html, body").animate({ scrollTop: "0px" }, 800); return !1 }); 0 < a(".tp-banner").length && a(".tp-banner").show().revolution({
        delay: 6E3, startheight: 510, startwidth: 1008, hideThumbs: 1E3, navigationType: "none", touchenabled: "on", onHoverStop: "on", navOffsetHorizontal: 0, navOffsetVertical: 0, dottedOverlay: "none",
        fullWidth: "on"
    }); 0 < a(".tp-banner-full").length && a(".tp-banner-full").show().revolution({ delay: 6E3, hideThumbs: 1E3, navigationType: "none", touchenabled: "on", onHoverStop: "on", navOffsetHorizontal: 0, navOffsetVertical: 0, dottedOverlay: "none", fullScreen: "on" }); a(".touch .fx").addClass("animated"); a(".no-touch .portfolio-items > div:odd").each(function () { a(this).addClass("fx").attr("data-animate", "fadeInUp") }); a(".no-touch .portfolio-items > div:even").each(function () {
        a(this).addClass("fx").attr("data-animate",
        "fadeInDown")
    }); a(".no-touch .fx").waypoint(function () { var b = a(this).attr("data-animate"), c = a(this).attr("data-animation-delay"); a(this).addClass("animated " + b).css({ animationDelay: c + "ms" }) }, { offset: "90%", triggerOnce: !0 }); a(".no-touch .level-out").waypoint(function () {
        a(".level-out").each(function () {
            var b = a(this).find(".level-in").attr("data-percent"), c = a.animateNumber.numberStepFactories.append(" %"); a(this).find("span").animateNumber({ number: b, numberStep: c }, 20 * b); a(this).find(".level-in").css("left",
            -b + "%").css("width", b + "%"); a(this).find(".level-in").animate({ left: "0%" }, 20 * b)
        })
    }, { offset: "90%", triggerOnce: !0 }); a(".touch .level-out").each(function () { var b = a(this).find(".level-in").attr("data-percent"), c = a.animateNumber.numberStepFactories.append(" %"); a(this).find("span").animateNumber({ number: b, numberStep: c }, 20 * b); a(this).find(".level-in").css("left", -b + "%").css("width", b + "%"); a(this).find(".level-in").animate({ left: "0%" }, 20 * b) }); a(".no-touch .levels-2").waypoint(function () {
        a(".chart").easyPieChart({
            size: 140,
            scaleLength: 0, lineWidth: 3, barColor: "#888", trackColor: "#e4e4e4", animate: { duration: 2E3, enabled: !0 }, onStep: function (b, c, e) { a(this.el).find(".percent").text(Math.round(e)) }
        })
    }, { offset: "90%", triggerOnce: !0 }); a(".touch .chart").easyPieChart({ size: 140, scaleLength: 0, lineWidth: 3, barColor: "#888", trackColor: "#e4e4e4", animate: { duration: 2E3, enabled: !0 }, onStep: function (b, c, e) { a(this.el).find(".percent").text(Math.round(e)) } }); a(".touch .fun-number").each(function () {
        var b = a(this).text(); a(this).animateNumber({ number: b },
        4E3)
    }); a(".no-touch .staff-1,.no-touch .staff-2,.no-touch .staff-3").waypoint(function () { a(this).find(".fun-number").each(function () { var b = a(this).text(); a(this).animateNumber({ number: b }, 4E3) }) }, { offset: "90%", triggerOnce: !0 }); a(".testimonials-1").slick({
        dots: !1, infinite: !0, speed: 300, slidesToShow: 2, touchMove: !0, slidesToScroll: 1, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }, {
            breakpoint: 480, settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }); a(".testimonials-2").slick({ dots: !1, infinite: !0, speed: 300, slidesToShow: 1, touchMove: !0, slidesToScroll: 1 }); a(".clients").slick({ dots: !1, infinite: !0, speed: 300, slidesToShow: 5, touchMove: !0, slidesToScroll: 5, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }); a(".auto-clients").slick({
        dots: !0, autoplay: !0, arrows: !1, infinite: !0, speed: 300, slidesToShow: 5,
        touchMove: !0, slidesToScroll: 5, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
    }); a(".homeGallery").slick({ dots: !1, infinite: !0, speed: 300, slidesToShow: 3, touchMove: !0, slidesToScroll: 1, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
    a(".portfolioGallery").slick({ dots: !1, infinite: !0, speed: 300, slidesToShow: 4, touchMove: !0, slidesToScroll: 1, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }); a(".twitter-carousel").slick({ dots: !1, infinite: !0, arrows: !1, speed: 300, autoplay: !0, slidesToShow: 1, touchMove: !0, vertical: !0, slidesToScroll: 1 }); a(".portfolio-img-slick").slick({
        dots: !1, infinite: !0, speed: 300,
        slidesToShow: 1, touchMove: !1, slidesToScroll: 1, autoplay: !0
    }); a(".slick-slide,.portfolio-items > div").each(function () {
        var b = a(this); b.index(); var c = b.find(".img-over"); b.hover(function () { c.fadeIn(400).find(".link").removeClass("animated fadeOutUp").addClass("animated fadeInDown"); c.find(".zoom").removeClass("animated fadeOutDown").addClass("animated fadeInUp"); return !1 }, function () {
            c.fadeOut(400).find(".link").removeClass("animated fadeInDown").addClass("animated fadeOutUp"); c.find(".zoom").removeClass("animated fadeInUp").addClass("animated fadeOutDown");
            return !1
        })
    }); a("ul#filters li a").click(function (b) { b.preventDefault(); a("ul#filters .active").removeClass("active"); a(this).parent().addClass("active"); var c = a(this).attr("data-filter").toLowerCase(); a(".portfolio-items > div:visible").each(function (b) { a(this).fadeOut(200, function () { u(c) }) }); return !1 }); a("#shareme").sharrre({
        share: { twitter: !0, facebook: !0, googlePlus: !0 }, template: '<ul><li><a href="#" class="facebook main-bg"><i class="fa fa-facebook"></i></a></li><li><a href="#" class="twitter main-bg"><i class="fa fa-twitter"></i></a></li><li><a href="#" class="googleplus main-bg"><i class="fa fa-google-plus"></i></a></li><li><a class="alter-bg">{total}</a></li></ul>',
        enableHover: !1, enableTracking: !0, url: document.location.href, render: function (b, c) { a(b.element).on("click", ".twitter", function () { b.openPopup("twitter") }); a(b.element).on("click", ".facebook", function () { b.openPopup("facebook") }); a(b.element).on("click", ".googleplus", function () { b.openPopup("googlePlus") }) }
    }); a(".box").each(function () { a(this).find("a.close-box").click(function (b) { var c = a(this).parent(); b.preventDefault(); c.fadeOut("slow", function () { c.remove() }) }) }); a.fn.tabs = function (b) {
        b = a.extend({}, { direction: "" },
        b); "vertical" == b.direction && a(this).addClass("tabs-vertical"); var c = a(this).find(" > ul"); b = c.find("li.active").index(); var e = a(this).find(".tabs-pane"); e.find(".tab-panel").fadeOut(); e.find(".tab-panel").eq(b).fadeIn(); c.find("li").find("a").click(function (b) {
            a(this).parent().hasClass("active") || (b.preventDefault(), b = a(this).parent().index(), c.find("li").removeClass("active"), a(this).parent().addClass("active"), e.find(".tab-panel").fadeOut(0).removeClass("active"), e.find(".tab-panel").eq(b).fadeIn(350).addClass("active"));
            return !1
        })
    }; a.fn.accordion = function (b) {
        b = a.extend({}, { direction: "vertical" }, b); var c = a(this).find("li"), e = c.eq(0), d = c.find("h3"), g = c.find(".accordion-panel"); a(e).addClass("active"); "vertical" == b.direction ? (g.slideUp(), g.eq(0).slideDown(), d.prepend("<u/>")) : "horizontal" == b.direction && a(this).addClass("accordion-horizontal"); c.find("h3").click(function (d) {
            if (a(this).parent().hasClass("active")) return "vertical" == b.direction && (d.preventDefault(), c.removeClass("active"), "vertical" == b.direction && g.slideUp(350)),
            !1; d.preventDefault(); c.removeClass("active"); a(this).parent().addClass("active"); "vertical" == b.direction ? (g.slideUp(350), a(this).next().slideDown(350)) : (c.animate({ width: "40px" }, { duration: 350, queue: !1 }), a(this).parent().animate({ width: "80%" }, { duration: 350, queue: !1 }))
        })
    }; a.fn.tooltip = function () {
        a(this).hover(function () {
            var b = a(this).attr("data-title"), c = a(this).attr("data-position"), d = a(this).offset().top - a(window).scrollTop(), f = a(this).offset().left - a(window).scrollLeft(); a("body").append('<div class="tooltip">' +
            b + "</div>"); var b = a(".tooltip").outerHeight() + 5, g = a(".tooltip").outerWidth() + 5, h = a(window).height() - (d + a(this).outerHeight() + b), k = a(window).width() - (f + a(this).outerWidth() + g); "right" == c ? a(".tooltip").addClass("rit-tip animated fadeInRight").css({ top: d - (a(this).outerHeight() / 2 - (b - 2.5)) + "px", right: k + "px" }) : "bottom" == c ? a(".tooltip").addClass("bot-tip animated fadeInUp").css({ bottom: h + "px", left: f + (a(this).outerWidth() / 2 - (g - 5) / 2) + "px" }) : "left" == c ? a(".tooltip").addClass("lft-tip animated fadeInLeft").css({
                top: d -
                (a(this).outerHeight() / 2 - (b - 2.5)) + "px", left: f - g + "px"
            }) : a(".tooltip").addClass("animated fadeInDown").css({ top: d - b + "px", left: f + (a(this).outerWidth() / 2 - (g - 5) / 2) + "px" })
        }, function () { a(".tooltip").remove() })
    }; d = a(".our-plan").height(); a(".plan-title").css("height", d); a(".list-btn").click(function () { a(".grid-list").addClass("list"); a(".grid-btn").removeClass("selected"); a(this).addClass("selected"); return !1 }); a(".grid-btn").click(function () {
        a(".grid-list").removeClass("list"); a(".list-btn").removeClass("selected");
        a(this).addClass("selected"); return !1
    }); a("#img_01").length && (a("#img_01").elevateZoom({ gallery: "gal1", cursor: "pointer", galleryActiveClass: "active", responsive: !0, loadingIcon: "images/ajax-loader.gif" }), a(".thumbs ul li:first a").addClass("active")); var f = a("#items-num").val(); a(".add-items i.fa-plus").click(function (b) { b.preventDefault(); f++; a("#items-num").attr("value", f) }); a(".add-items i.fa-minus").click(function (b) { b.preventDefault(); 1 < f && (f--, a("#items-num").attr("value", f)) }); a(".remove-item").click(function () { a(this).parent().parent().remove() });
    a(".cart-heading").click(function () { a(this).parent().find(".cart-popup").show() }); a(".cart-icon").mouseleave(function () { a(this).find(".cart-popup").hide() }); 0 < a(".cart-icon").length && (a(".add-cart").each(function () { a(this).click(function () { var b = a("#cart-count b").text(); b++; a("#cart-count b").text(b); a(".cart-popup .mini-cart").show(); a(".cart-popup .empty").hide(); a("html, body").animate({ scrollTop: "0px" }, 1E3); a(".success-box.hidden").fadeIn().delay(2E3).fadeOut(); alert() }) }), "0" == a("#cart-count b").text() ?
    (a(".cart-popup .empty").show(), a(".cart-popup .mini-cart").hide()) : (a(".cart-popup .mini-cart").show(), a(".cart-popup .empty").hide())); a("#tabs").tabs(); a("#tabs2").tabs(); a("#tabs3").tabs({ direction: "vertical" }); a("#tabs4").tabs({ direction: "vertical" }); a("#accordion").accordion(); a("#accordion2").accordion(); a("a.zoom").prettyPhoto({ social_tools: !1 }); a("[data-tooltip^='true']").tooltip(); a("input, textarea").placeholder(); var r = a(".tools").css("right"), t = a("#skinCSS").attr("href"); a(".show-tools").click(function (b) {
        b.preventDefault();
        a(this).parent().css("right") == r ? a(this).parent().animate({ right: "0px" }) : "0px" == a(this).parent().css("right") && a(this).parent().animate({ right: r })
    }); a(".colors li:first a").addClass("selected"); a(".colors a").each(function () { a(this).click(function (b) { b.preventDefault(); t = a(this).attr("data-link"); a(".colors a").removeClass("selected"); a(this).addClass("selected"); a("#skinCSS").attr("href", t) }) }); a(".patterns li:first a").addClass("selected"); a(".patterns li").each(function () {
        var b = a(this).find("a").attr("class");
        a(this).find("a").css("background", 'url("images/patterns/' + b + '.jpg")'); a(this).find("a").click(function (c) { c.preventDefault(); a(".patterns li a").removeClass("selected"); a(this).addClass("selected"); a("body").removeAttr("class").addClass(b) })
    }); 0 < a("#wrap").length && a(window).scroll(function () { a(document).scrollTop(); var b = a("#headWrapper").offset(); a(this).scrollTop() > b.top ? a(".top-head").addClass("sticky") : a(".top-head").removeClass("sticky") }); 0 < a("#vertical-ticker").length && a("#vertical-ticker").totemticker({
        row_height: "110px",
        mousestop: !0, speed: 500
    }); a(window).load(function () { a(".page-loader").fadeOut(); a(".loader-in").delay(350).fadeOut("slow"); a("body").delay(350).removeAttr("style") })
})(jQuery);