!function () {
    function e(a) { e.dir = "dir" in e ? e.dir : "/css/layerpage/laypage.css"; new d(a); e.dir && !g[h]("laypagecss") && d.use(e.dir, "laypagecss") } e.v = "1.3"; var g = document, h = "getElementById", k = 0, d = function (a) { (this.config = a || {}).item = k++; this.render(!0) }; d.on = function (a, b, c) { a.attachEvent ? a.attachEvent("on" + b, function () { c.call(a, window.even) }) : a.addEventListener(b, c, !1); return d }; d.getpath = function () { var a = document.scripts, a = a[a.length - 1].src; return a.substring(0, a.lastIndexOf("/") + 1) }(); d.use = function (a,
    b) { var c = g.createElement("link"); c.type = "text/css"; c.rel = "stylesheet"; c.href = e.dir; b && (c.id = b); g.getElementsByTagName("head")[0].appendChild(c) }; d.prototype.type = function () { var a = this.config; if ("object" === typeof a.cont) return void 0 === a.cont.length ? 2 : 3 }; d.prototype.view = function () {
        var a = this.config, b = [], c, d, f; a.pages |= 0; a.curr = a.curr | 0 || 1; a.groups = "groups" in a ? a.groups | 0 : 5; a.first = "first" in a ? a.first : "&#x9996;&#x9801;"; a.last = "last" in a ? a.last : "&#x5C3E;&#x9801;"; a.prev = "prev" in a ? a.prev : "&#x4E0A;&#x4E00;&#x9801;";
        a.next = "next" in a ? a.next : "&#x4E0B;&#x4E00;&#x9801;"; if (1 >= a.pages) return ""; a.groups > a.pages && (a.groups = a.pages); c = Math.ceil((a.curr + (1 < a.groups && a.groups !== a.pages ? 1 : 0)) / (0 === a.groups ? 1 : a.groups)); 1 < a.curr && a.prev && b.push('<a href="javascript:;" class="laypage_prev" data-page="' + (a.curr - 1) + '">' + a.prev + "</a>"); 1 < c && a.first && 0 !== a.groups && b.push('<a href="javascript:;" class="laypage_first" data-page="1"  title="&#x9996;&#x9801;">' + a.first + "</a><span>&#x2026;</span>"); d = Math.floor((a.groups - 1) / 2); f =
        1 < c ? a.curr - d : 1; c = 1 < c ? function () { var b = a.curr + (a.groups - d - 1); return b > a.pages ? a.pages : b }() : a.groups; for (c - f < a.groups - 1 && (f = c - a.groups + 1) ; f <= c; f++) f === a.curr ? b.push('<span class="laypage_curr" ' + (/^#/.test(a.skin) ? 'style="background-color:' + a.skin + '"' : "") + ">" + f + "</span>") : b.push('<a href="javascript:;" data-page="' + f + '">' + f + "</a>"); a.pages > a.groups && c < a.pages && a.last && 0 !== a.groups && b.push('<span>&#x2026;</span><a href="javascript:;" class="laypage_last" title="&#x5C3E;&#x9801;"  data-page="' + a.pages +
        '">' + a.last + "</a>"); f = !a.prev && 0 === a.groups; (a.curr !== a.pages && a.next || f) && b.push(f && a.curr === a.pages ? '<span class="page_nomore" title="&#x5DF2;&#x6CA1;&#x6709;&#x66F4;&#x591A;">' + a.next + "</span>" : '<a href="javascript:;" class="laypage_next" data-page="' + (a.curr + 1) + '">' + a.next + "</a>"); return '<div name="laypage' + e.v + '"  class="laypage_main laypageskin_' + (a.skin ? function (a) { return /^#/.test(a) ? "molv" : a }(a.skin) : "default") + '" id="laypage_' + this.config.item + '">' + b.join("") + (a.skip ? '<span class="laypage_total"><label>&#x5230;&#x7B2C;</label><input type="number" min="1" onkeyup="this.value=this.value.replace(/\\D/, \'\');" class="laypage_skip"><label>&#x9875;</label><button type="button" class="laypage_btn">&#x786e;&#x5b9a;</button></span>' :
        "") + "</div>"
    }; d.prototype.jump = function (a) { if (a) { var b = this, c = b.config, e = a.children, f = a.getElementsByTagName("button")[0], g = a.getElementsByTagName("input")[0]; a = 0; for (var h = e.length; a < h; a++) if ("a" === e[a].nodeName.toLowerCase()) d.on(e[a], "click", function () { var a = this.getAttribute("data-page") | 0; c.curr = a; b.render() }); if (f) d.on(f, "click", function () { var a = g.value.replace(/\s|\D/g, "") | 0; a && a <= c.pages && (c.curr = a, b.render()) }) } }; d.prototype.render = function (a) {
        var b = this.config, c = this.type(), d = this.view();
        2 === c ? b.cont.innerHTML = d : 3 === c ? b.cont.html(d) : g[h](b.cont).innerHTML = d; b.jump && b.jump(b, a); this.jump(g[h]("laypage_" + b.item)); b.hash && !a && (location.hash = "!" + b.hash + "=" + b.curr)
    }; "function" === typeof define ? define(function () { return e }) : "undefined" != typeof exports ? module.exports = e : window.laypage = e
}();