(function (e) {
    e.ThreeSixty = function (f, k) {
        var b = this, a, g = []; b.$el = e(f); b.el = f; b.$el.data("ThreeSixty", b); b.init = function () { a = e.extend({}, e.ThreeSixty.defaultOptions, k); a.disableSpin && (a.currentFrame = 1, a.endFrame = 1); b.initProgress(); b.loadImages() }; b.resize = function () { }; b.initProgress = function () {
            b.$el.css({ width: a.width + "px", height: a.height + "px", "background-image": "none !important" }); a.styles && b.$el.css(a.styles); b.responsive(); b.$el.find(a.progress).css({ marginTop: a.height / 2 - 15 + "px" }); b.$el.find(a.progress).fadeIn("slow");
            b.$el.find(a.imgList).hide()
        }; b.loadImages = function () { var c, d; c = document.createElement("li"); d = a.zeroBased ? 0 : 1; d = a.imgArray ? a.imgArray[a.loadedImages] : a.domain + a.imagePath + a.filePrefix + b.zeroPad(a.loadedImages + d) + a.ext + (b.browser.isIE() ? "?" + (new Date).getTime() : ""); d = e("<img>").attr("src", d).addClass("previous-image").appendTo(c); g.push(d); b.$el.find(a.imgList).append(c); e(d).load(function () { b.imageLoaded() }) }; b.imageLoaded = function () {
            a.loadedImages += 1; e(a.progress + " span").text(Math.floor(a.loadedImages /
            a.totalFrames * 100) + "%"); a.loadedImages >= a.totalFrames ? (a.disableSpin && g[0].removeClass("previous-image").addClass("current-image"), e(a.progress).fadeOut("slow", function () { e(this).hide(); b.showImages(); b.showNavigation() })) : b.loadImages()
        }; b.showImages = function () { b.$el.find(".txtC").fadeIn(); b.$el.find(a.imgList).fadeIn(); b.ready = !0; a.ready = !0; a.drag && b.initEvents(); b.refresh(); b.initPlugins(); a.onReady(); setTimeout(function () { b.responsive() }, 50) }; b.initPlugins = function () {
            e.each(a.plugins, function (c,
            d) { if ("function" === typeof e[d]) e[d].call(b, b.$el, a); else throw Error(d + " not available."); })
        }; b.showNavigation = function () {
            if (a.navigation && !a.navigation_init) {
                var c, d, f, h; c = e("<div/>").attr("class", "nav_bar"); d = e("<a/>").attr({ href: "#", "class": "nav_bar_next" }).html("next"); f = e("<a/>").attr({ href: "#", "class": "nav_bar_previous" }).html("previous"); h = e("<a/>").attr({ href: "#", "class": "nav_bar_play" }).html("play"); c.append(f); c.append(h); c.append(d); b.$el.prepend(c); d.bind("mousedown touchstart", b.next);
                f.bind("mousedown touchstart", b.previous); h.bind("mousedown touchstart", b.play_stop); a.navigation_init = !0
            }
        }; b.play_stop = function (c) { c.preventDefault(); a.autoplay ? (a.autoplay = !1, e(c.currentTarget).removeClass("nav_bar_stop").addClass("nav_bar_play"), clearInterval(a.play), a.play = null) : (a.autoplay = !0, a.play = setInterval(b.moveToNextFrame, a.playSpeed), e(c.currentTarget).removeClass("nav_bar_play").addClass("nav_bar_stop")) }; b.next = function (c) { c && c.preventDefault(); a.endFrame -= 5; b.refresh() }; b.previous =
        function (c) { c && c.preventDefault(); a.endFrame += 5; b.refresh() }; b.play = function (c) { c = c || a.playSpeed; a.autoplay || (a.autoplay = !0, a.play = setInterval(b.moveToNextFrame, c)) }; b.stop = function () { a.autoplay && (a.autoplay = !1, clearInterval(a.play), a.play = null) }; b.moveToNextFrame = function () { 1 === a.autoplayDirection ? --a.endFrame : a.endFrame += 1; b.refresh() }; b.gotoAndPlay = function (c) {
            if (a.disableWrap) a.endFrame = c, b.refresh(); else {
                var d = Math.ceil(a.endFrame / a.totalFrames); 0 === d && (d = 1); var d = 1 < d ? a.endFrame - (d - 1) * a.totalFrames :
                a.endFrame, e = a.totalFrames - d, f = 0, f = 0 < c - d ? c - d < d + (a.totalFrames - c) ? a.endFrame + (c - d) : a.endFrame - (d + (a.totalFrames - c)) : d - c < e + c ? a.endFrame - (d - c) : a.endFrame + (e + c); d !== c && (a.endFrame = f, b.refresh())
            }
        }; b.initEvents = function () {
            b.$el.bind("mousedown touchstart touchmove touchend mousemove click", function (c) {
                c.preventDefault(); "mousedown" === c.type && 1 === c.which || "touchstart" === c.type ? (a.pointerStartPosX = b.getPointerEvent(c).pageX, a.dragging = !0) : "touchmove" === c.type ? b.trackPointer(c) : "touchend" === c.type && (a.dragging =
                !1)
            }); e(document).bind("mouseup", function (b) { a.dragging = !1; e(this).css("cursor", "none") }); e(window).bind("resize", function (a) { b.responsive() }); e(document).bind("mousemove", function (c) { a.dragging ? (c.preventDefault(), !b.browser.isIE && a.showCursor && b.$el.css("cursor", "url(assets/images/hand_closed.png), auto")) : !b.browser.isIE && a.showCursor && b.$el.css("cursor", "url(assets/images/hand_open.png), auto"); b.trackPointer(c) }); e(window).resize(function () { b.resize() })
        }; b.getPointerEvent = function (a) {
            return a.originalEvent.targetTouches ?
            a.originalEvent.targetTouches[0] : a
        }; b.trackPointer = function (c) {
            a.ready && a.dragging && (a.pointerEndPosX = b.getPointerEvent(c).pageX, a.monitorStartTime < (new Date).getTime() - a.monitorInt && (a.pointerDistance = a.pointerEndPosX - a.pointerStartPosX, a.endFrame = 0 < a.pointerDistance ? a.currentFrame + Math.ceil((a.totalFrames - 1) * a.speedMultiplier * (a.pointerDistance / b.$el.width())) : a.currentFrame + Math.floor((a.totalFrames - 1) * a.speedMultiplier * (a.pointerDistance / b.$el.width())), a.disableWrap && (a.endFrame = Math.min(a.totalFrames -
            (a.zeroBased ? 1 : 0), a.endFrame), a.endFrame = Math.max(a.zeroBased ? 0 : 1, a.endFrame)), b.refresh(), a.monitorStartTime = (new Date).getTime(), a.pointerStartPosX = b.getPointerEvent(c).pageX))
        }; b.refresh = function () { 0 === a.ticker && (a.ticker = setInterval(b.render, Math.round(1E3 / a.framerate))) }; b.render = function () {
            var c; a.currentFrame !== a.endFrame ? (c = a.endFrame < a.currentFrame ? Math.floor(.1 * (a.endFrame - a.currentFrame)) : Math.ceil(.1 * (a.endFrame - a.currentFrame)), b.hidePreviousFrame(), a.currentFrame += c, b.showCurrentFrame(),
            b.$el.trigger("frameIndexChanged", [b.getNormalizedCurrentFrame(), a.totalFrames])) : (window.clearInterval(a.ticker), a.ticker = 0)
        }; b.hidePreviousFrame = function () { g[b.getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image") }; b.showCurrentFrame = function () { g[b.getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image") }; b.getNormalizedCurrentFrame = function () {
            var b, d; a.disableWrap ? (b = Math.min(a.currentFrame, a.totalFrames - (a.zeroBased ? 1 : 0)), d = Math.min(a.endFrame,
            a.totalFrames - (a.zeroBased ? 1 : 0)), b = Math.max(b, a.zeroBased ? 0 : 1), d = Math.max(d, a.zeroBased ? 0 : 1), a.currentFrame = b, a.endFrame = d) : (b = Math.ceil(a.currentFrame % a.totalFrames), 0 > b && (b += a.totalFrames - (a.zeroBased ? 1 : 0))); return b
        }; b.getCurrentFrame = function () { return a.currentFrame }; b.responsive = function () { a.responsive && b.$el.css({ height: b.$el.find(".current-image").first().css("height"), width: "100%" }) }; b.zeroPad = function (b) {
            var d = Math.floor(Math.round(Math.log(a.totalFrames) / Math.LN10 * 1E3) / 1E3) + 1; b = b.toString();
            if (a.zeroPadding) for (; b.length < d;) b = "0" + b; return b
        }; b.browser = {}; b.browser.isIE = function () { var a = -1; "Microsoft Internet Explorer" === navigator.appName && null !== /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1)); return -1 !== a }; b.getConfig = function () { return a }; e.ThreeSixty.defaultOptions = {
            dragging: !1, ready: !1, pointerStartPosX: 0, pointerEndPosX: 0, pointerDistance: 0, monitorStartTime: 0, monitorInt: 10, ticker: 0, speedMultiplier: 7, totalFrames: 180, currentFrame: 0, endFrame: 0, loadedImages: 0,
            framerate: 60, domains: null, domain: "", parallel: !1, queueAmount: 8, idle: 0, filePrefix: "", ext: "png", height: 300, width: 300, styles: {}, navigation: !1, autoplay: !1, autoplayDirection: 1, disableSpin: !1, disableWrap: !1, responsive: !1, zeroPadding: !1, zeroBased: !1, plugins: [], showCursor: !1, drag: !0, onReady: function () { }, imgList: ".threesixty_images", imgArray: null, playSpeed: 100
        }; b.init()
    }; e.fn.ThreeSixty = function (f) { return Object.create(new e.ThreeSixty(this, f)) }
})(jQuery);
"function" !== typeof Object.create && (Object.create = function (e) { function f() { } f.prototype = e; return new f });