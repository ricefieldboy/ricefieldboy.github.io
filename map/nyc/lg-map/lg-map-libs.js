/*! LGMaps v3.1.0, 2017-07-09 */ 
! function(t) {
    var e, r, i = "hasOwnProperty",
        n = function() {},
        a = function(t, e) {
            return t - e
        },
        s = {
            n: {}
        },
        o = function(t, i) {
            var n, s = r,
                l = Array.prototype.slice.call(arguments, 2),
                h = o.listeners(t),
                u = 0,
                c = [],
                f = {},
                p = [],
                d = e;
            e = t, r = 0;
            for (var g = 0, v = h.length; g < v; g++) "zIndex" in h[g] && (c.push(h[g].zIndex), h[g].zIndex < 0 && (f[h[g].zIndex] = h[g]));
            for (c.sort(a); c[u] < 0;)
                if (n = f[c[u++]], p.push(n.apply(i, l)), r) return r = s, p;
            for (g = 0; g < v; g++)
                if ("zIndex" in (n = h[g]))
                    if (n.zIndex == c[u]) {
                        if (p.push(n.apply(i, l)), r) break;
                        do {
                            if (u++, (n = f[c[u]]) && p.push(n.apply(i, l)), r) break
                        } while (n)
                    } else f[n.zIndex] = n;
                        else if (p.push(n.apply(i, l)), r) break;
                        return r = s, e = d, p.length ? p : null
                    };
            o.listeners = function(t) {
                var e, r, i, n, a, o, l, h, u = t.split(/[\.\/]/),
                    c = s,
                    f = [c],
                    p = [];
                for (n = 0, a = u.length; n < a; n++) {
                    for (h = [], o = 0, l = f.length; o < l; o++)
                        for (r = [(c = f[o].n)[u[n]], c["*"]], i = 2; i--;)(e = r[i]) && (h.push(e), p = p.concat(e.f || []));
                    f = h
                }
                return p
            }, o.on = function(t, e) {
                for (var r = t.split(/[\.\/]/), i = s, a = 0, o = r.length; a < o; a++) !(i = i.n)[r[a]] && (i[r[a]] = {
                    n: {}
                }), i = i[r[a]];
                for (i.f = i.f || [], a = 0, o = i.f.length; a < o; a++)
                    if (i.f[a] == e) return n;
                return i.f.push(e),
                    function(t) {
                    +t == +t && (e.zIndex = +t)
                }
            }, o.stop = function() {
                r = 1
            }, o.nt = function(t) {
                return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
            }, o.off = o.unbind = function(t, e) {
                var r, n, a, o, l, h, u, c = t.split(/[\.\/]/),
                    f = [s];
                for (o = 0, l = c.length; o < l; o++)
                    for (h = 0; h < f.length; h += a.length - 2) {
                        if (a = [h, 1], r = f[h].n, "*" != c[o]) r[c[o]] && a.push(r[c[o]]);
                        else
                            for (n in r) r[i](n) && a.push(r[n]);
                        f.splice.apply(f, a)
                    }
                for (o = 0, l = f.length; o < l; o++)
                    for (r = f[o]; r.n;) {
                        if (e) {
                            if (r.f) {
                                for (h = 0, u = r.f.length; h < u; h++)
                                    if (r.f[h] == e) {
                                        r.f.splice(h, 1);
                                        break
                                    }!r.f.length && delete r.f
                            }
                            for (n in r.n)
                                if (r.n[i](n) && r.n[n].f) {
                                    var p = r.n[n].f;
                                    for (h = 0, u = p.length; h < u; h++)
                                        if (p[h] == e) {
                                            p.splice(h, 1);
                                            break
                                        }!p.length && delete r.n[n].f
                                }
                        } else {
                            delete r.f;
                            for (n in r.n) r.n[i](n) && r.n[n].f && delete r.n[n].f
                        }
                        r = r.n
                    }
            }, o.once = function(t, e) {
                var r = function() {
                    var i = e.apply(this, arguments);
                    return o.unbind(t, r), i
                };
                return o.on(t, r)
            }, o.version = "0.3.4", o.toString = function() {
                return "You are running Eve 0.3.4"
            }, "undefined" != typeof module && module.exports ? module.exports = o : "undefined" != typeof define ? define("eve", [], function() {
                return o
            }) : t.eve = o
        }(this),
        function() {
            function t(e) {
                if (t.is(e, "function")) return y ? e() : eve.on("raphael.DOMload", e);
                if (t.is(e, G)) return t._engine.create[S](t, e.splice(0, 3 + t.is(e[0], O))).add(e);
                var r = Array.prototype.slice.call(arguments, 0);
                if (t.is(r[r.length - 1], "function")) {
                    var i = r.pop();
                    return y ? i.call(t._engine.create[S](t, r)) : eve.on("raphael.DOMload", function() {
                        i.call(t._engine.create[S](t, r))
                    })
                }
                return t._engine.create[S](t, arguments)
            }

            function e(t) {
                if (Object(t) !== t) return t;
                var r = new t.constructor;
                for (var i in t) t[w](i) && (r[i] = e(t[i]));
                return r
            }

            function r(t, e) {
                for (var r = 0, i = t.length; r < i; r++)
                    if (t[r] === e) return t.push(t.splice(r, 1)[0])
            }

            function i(t, e, i) {
                function n() {
                    var a = Array.prototype.slice.call(arguments, 0),
                        s = a.join("␀"),
                        o = n.cache = n.cache || {},
                        l = n.count = n.count || [];
                    return o[w](s) ? (r(l, s), i ? i(o[s]) : o[s]) : (l.length >= 1e3 && delete o[l.shift()], l.push(s), o[s] = t[S](e, a), i ? i(o[s]) : o[s])
                }
                return n
            }

            function n() {
                return this.hex
            }

            function a(t, e) {
                for (var r = [], i = 0, n = t.length; n - 2 * !e > i; i += 2) {
                    var a = [{
                        x: +t[i - 2],
                        y: +t[i - 1]
                    }, {
                        x: +t[i],
                        y: +t[i + 1]
                    }, {
                        x: +t[i + 2],
                        y: +t[i + 3]
                    }, {
                        x: +t[i + 4],
                        y: +t[i + 5]
                    }];
                    e ? i ? n - 4 == i ? a[3] = {
                        x: +t[0],
                        y: +t[1]
                    } : n - 2 == i && (a[2] = {
                        x: +t[0],
                        y: +t[1]
                    }, a[3] = {
                        x: +t[2],
                        y: +t[3]
                    }) : a[0] = {
                        x: +t[n - 2],
                        y: +t[n - 1]
                    } : n - 4 == i ? a[3] = a[2] : i || (a[0] = {
                        x: +t[i],
                        y: +t[i + 1]
                    }), r.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
                }
                return r
            }

            function s(t, e, r, i, n) {
                return t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) - 3 * e + 3 * r
            }

            function o(t, e, r, i, n, a, o, l, h) {
                null == h && (h = 1);
                for (var u = (h = h > 1 ? 1 : h < 0 ? 0 : h) / 2, c = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, d = 0; d < 12; d++) {
                    var g = u * c[d] + u,
                        v = s(g, t, r, n, o),
                        x = s(g, e, i, a, l),
                        y = v * v + x * x;
                    p += f[d] * P.sqrt(y)
                }
                return u * p
            }

            function l(t, e, r, i, n, a, s, l, h) {
                if (!(h < 0 || o(t, e, r, i, n, a, s, l) < h)) {
                    var u, c = .5,
                        f = 1 - c;
                    for (u = o(t, e, r, i, n, a, s, l, f); q(u - h) > .01;) c /= 2, u = o(t, e, r, i, n, a, s, l, f += (u < h ? 1 : -1) * c);
                    return f
                }
            }

            function h(t, e, r, i, n, a, s, o) {
                if (!(I(t, r) < j(n, s) || j(t, r) > I(n, s) || I(e, i) < j(a, o) || j(e, i) > I(a, o))) {
                    var l = (t * i - e * r) * (n - s) - (t - r) * (n * o - a * s),
                        h = (t * i - e * r) * (a - o) - (e - i) * (n * o - a * s),
                        u = (t - r) * (a - o) - (e - i) * (n - s);
                    if (u) {
                        var c = l / u,
                            f = h / u,
                            p = +c.toFixed(2),
                            d = +f.toFixed(2);
                        if (!(p < +j(t, r).toFixed(2) || p > +I(t, r).toFixed(2) || p < +j(n, s).toFixed(2) || p > +I(n, s).toFixed(2) || d < +j(e, i).toFixed(2) || d > +I(e, i).toFixed(2) || d < +j(a, o).toFixed(2) || d > +I(a, o).toFixed(2))) return {
                            x: c,
                            y: f
                        }
                    }
                }
            }

            function u(e, r, i) {
                var n = t.bezierBBox(e),
                    a = t.bezierBBox(r);
                if (!t.isBBoxIntersect(n, a)) return i ? 0 : [];
                for (var s = ~~(o.apply(0, e) / 5), l = ~~(o.apply(0, r) / 5), u = [], c = [], f = {}, p = i ? 0 : [], d = 0; d < s + 1; d++) {
                    var g = t.findDotsAtSegment.apply(t, e.concat(d / s));
                    u.push({
                        x: g.x,
                        y: g.y,
                        t: d / s
                    })
                }
                for (d = 0; d < l + 1; d++) g = t.findDotsAtSegment.apply(t, r.concat(d / l)), c.push({
                    x: g.x,
                    y: g.y,
                    t: d / l
                });
                for (d = 0; d < s; d++)
                    for (var v = 0; v < l; v++) {
                        var x = u[d],
                            y = u[d + 1],
                            m = c[v],
                            b = c[v + 1],
                            _ = q(y.x - x.x) < .001 ? "y" : "x",
                            w = q(b.x - m.x) < .001 ? "y" : "x",
                            k = h(x.x, x.y, y.x, y.y, m.x, m.y, b.x, b.y);
                        if (k) {
                            if (f[k.x.toFixed(4)] == k.y.toFixed(4)) continue;
                            f[k.x.toFixed(4)] = k.y.toFixed(4);
                            var C = x.t + q((k[_] - x[_]) / (y[_] - x[_])) * (y.t - x.t),
                                B = m.t + q((k[w] - m[w]) / (b[w] - m[w])) * (b.t - m.t);
                            C >= 0 && C <= 1 && B >= 0 && B <= 1 && (i ? p++ : p.push({
                                x: k.x,
                                y: k.y,
                                t1: C,
                                t2: B
                            }))
                        }
                    }
                return p
            }

            function c(e, r, i) {
                e = t._path2curve(e), r = t._path2curve(r);
                for (var n, a, s, o, l, h, c, f, p, d, g = i ? 0 : [], v = 0, x = e.length; v < x; v++) {
                    var y = e[v];
                    if ("M" == y[0]) n = l = y[1], a = h = y[2];
                    else {
                        "C" == y[0] ? (n = (p = [n, a].concat(y.slice(1)))[6], a = p[7]) : (p = [n, a, n, a, l, h, l, h], n = l, a = h);
                        for (var m = 0, b = r.length; m < b; m++) {
                            var _ = r[m];
                            if ("M" == _[0]) s = c = _[1], o = f = _[2];
                            else {
                                "C" == _[0] ? (s = (d = [s, o].concat(_.slice(1)))[6], o = d[7]) : (d = [s, o, s, o, c, f, c, f], s = c, o = f);
                                var w = u(p, d, i);
                                if (i) g += w;
                                else {
                                    for (var k = 0, C = w.length; k < C; k++) w[k].segment1 = v, w[k].segment2 = m, w[k].bez1 = p, w[k].bez2 = d;
                                    g = g.concat(w)
                                }
                            }
                        }
                    }
                }
                return g
            }

            function f(t, e, r, i, n, a) {
                null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +n, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
            }

            function p() {
                return this.x + z + this.y + z + this.width + " × " + this.height
            }

            function d(t, e, r, i, n, a) {
                function s(t) {
                    return ((u * t + h) * t + l) * t
                }

                function o(t, e) {
                    var r, i, n, a, o, c;
                    for (n = t, c = 0; c < 8; c++) {
                        if (a = s(n) - t, q(a) < e) return n;
                        if (o = (3 * u * n + 2 * h) * n + l, q(o) < 1e-6) break;
                        n -= a / o
                    }
                    if (r = 0, i = 1, (n = t) < r) return r;
                    if (n > i) return i;
                    for (; r < i;) {
                        if (a = s(n), q(a - t) < e) return n;
                        t > a ? r = n : i = n, n = (i - r) / 2 + r
                    }
                    return n
                }
                var l = 3 * e,
                    h = 3 * (i - e) - l,
                    u = 1 - l - h,
                    c = 3 * r,
                    f = 3 * (n - r) - c,
                    p = 1 - c - f;
                return function(t, e) {
                    var r = o(t, e);
                    return ((p * r + f) * r + c) * r
                }(t, 1 / (200 * a))
            }

            function g(t, e) {
                var r = [],
                    i = {};
                if (this.ms = e, this.times = 1, t) {
                    for (var n in t) t[w](n) && (i[U(n)] = t[n], r.push(U(n)));
                    r.sort(it)
                }
                this.anim = i, this.top = r[r.length - 1], this.percents = r
            }

            function v(e, r, i, n, a, s) {
                i = U(i);
                var o, l, h, u, c, p, g = e.ms,
                    v = {},
                    x = {},
                    y = {};
                if (n)
                    for (_ = 0, k = Kt.length; _ < k; _++) {
                        var m = Kt[_];
                        if (m.el.id == r.id && m.anim == e) {
                            m.percent != i ? (Kt.splice(_, 1), h = 1) : l = m, r.attr(m.totalOrigin);
                            break
                        }
                    } else n = +x;
                for (var _ = 0, k = e.percents.length; _ < k; _++) {
                    if (e.percents[_] == i || e.percents[_] > n * e.top) {
                        i = e.percents[_], c = e.percents[_ - 1] || 0, g = g / e.top * (i - c), u = e.percents[_ + 1], o = e.anim[i];
                        break
                    }
                    n && r.attr(e.anim[e.percents[_]])
                }
                if (o) {
                    if (l) l.initstatus = n, l.start = new Date - l.ms * n;
                    else {
                        for (var C in o)
                            if (o[w](C) && (J[w](C) || r.paper.customAttributes[w](C))) switch (v[C] = r.attr(C), null == v[C] && (v[C] = Q[C]), x[C] = o[C], J[C]) {
                                case O:
                                    y[C] = (x[C] - v[C]) / g;
                                    break;
                                case "colour":
                                    v[C] = t.getRGB(v[C]);
                                    var B = t.getRGB(x[C]);
                                    y[C] = {
                                        r: (B.r - v[C].r) / g,
                                        g: (B.g - v[C].g) / g,
                                        b: (B.b - v[C].b) / g
                                    };
                                    break;
                                case "path":
                                    var S = At(v[C], x[C]),
                                        A = S[1];
                                    for (v[C] = S[0], y[C] = [], _ = 0, k = v[C].length; _ < k; _++) {
                                        y[C][_] = [0];
                                        for (var N = 1, z = v[C][_].length; N < z; N++) y[C][_][N] = (A[_][N] - v[C][_][N]) / g
                                    }
                                    break;
                                case "transform":
                                    var E = r._,
                                        R = Et(E[C], x[C]);
                                    if (R)
                                        for (v[C] = R.from, x[C] = R.to, y[C] = [], y[C].real = !0, _ = 0, k = v[C].length; _ < k; _++)
                                            for (y[C][_] = [v[C][_][0]], N = 1, z = v[C][_].length; N < z; N++) y[C][_][N] = (x[C][_][N] - v[C][_][N]) / g;
                                    else {
                                        var F = r.matrix || new f,
                                            P = {
                                                _: {
                                                    transform: E.transform
                                                },
                                                getBBox: function() {
                                                    return r.getBBox(1)
                                                }
                                            };
                                        v[C] = [F.a, F.b, F.c, F.d, F.e, F.f], Lt(P, x[C]), x[C] = P._.transform, y[C] = [(P.matrix.a - F.a) / g, (P.matrix.b - F.b) / g, (P.matrix.c - F.c) / g, (P.matrix.d - F.d) / g, (P.matrix.e - F.e) / g, (P.matrix.f - F.f) / g]
                                    }
                                    break;
                                case "csv":
                                    var I = L(o[C])[M](b),
                                        j = L(v[C])[M](b);
                                    if ("clip-rect" == C)
                                        for (v[C] = j, y[C] = [], _ = j.length; _--;) y[C][_] = (I[_] - v[C][_]) / g;
                                    x[C] = I;
                                    break;
                                default:
                                    for (I = [][T](o[C]), j = [][T](v[C]), y[C] = [], _ = r.paper.customAttributes[C].length; _--;) y[C][_] = ((I[_] || 0) - (j[_] || 0)) / g
                    }
                        var q = o.easing,
                            D = t.easing_formulas[q];
                        if (!D)
                            if ((D = L(q).match(H)) && 5 == D.length) {
                                var V = D;
                                D = function(t) {
                                    return d(t, +V[1], +V[2], +V[3], +V[4], g)
                                }
                            } else D = at;
                        if (p = o.start || e.start || +new Date, m = {
                            anim: e,
                            percent: i,
                            timestamp: p,
                            start: p + (e.del || 0),
                            status: 0,
                            initstatus: n || 0,
                            stop: !1,
                            ms: g,
                            easing: D,
                            from: v,
                            diff: y,
                            to: x,
                            el: r,
                            callback: o.callback,
                            prev: c,
                            next: u,
                            repeat: s || e.times,
                            origin: r.attr(),
                            totalOrigin: a
                        }, Kt.push(m), n && !l && !h && (m.stop = !0, m.start = new Date - g * n, 1 == Kt.length)) return ee();
                        h && (m.start = new Date - m.ms * n), 1 == Kt.length && te(ee)
                    }
                    eve("raphael.anim.start." + r.id, r, e)
                }
            }

            function x(t) {
                for (var e = 0; e < Kt.length; e++) Kt[e].el.paper == t && Kt.splice(e--, 1)
            }
            t.version = "2.1.0", t.eve = eve;
            var y, m, b = /[, ]+/,
                _ = {
                    circle: 1,
                    rect: 1,
                    path: 1,
                    ellipse: 1,
                    text: 1,
                    image: 1
                },
                w = "hasOwnProperty",
                k = {
                    doc: document,
                    win: window
                },
                C = {
                    was: Object.prototype[w].call(k.win, "Raphael"),
                    is: k.win.Raphael
                },
                B = function() {
                    this.ca = this.customAttributes = {}
                },
                S = "apply",
                T = "concat",
                A = "createTouch" in k.doc,
                N = "",
                z = " ",
                L = String,
                M = "split",
                E = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [M](z),
                R = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                },
                F = L.prototype.toLowerCase,
                P = Math,
                I = P.max,
                j = P.min,
                q = P.abs,
                D = P.pow,
                V = P.PI,
                O = "number",
                G = "array",
                Y = Object.prototype.toString,
                W = (t._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, {
                    NaN: 1,
                    Infinity: 1,
                    "-Infinity": 1
                }),
                H = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                X = P.round,
                U = parseFloat,
                $ = parseInt,
                Z = L.prototype.toUpperCase,
                Q = t._availableAttrs = {
                    "arrow-end": "none",
                    "arrow-start": "none",
                    blur: 0,
                    "clip-rect": "0 0 1e9 1e9",
                    cursor: "default",
                    cx: 0,
                    cy: 0,
                    fill: "#fff",
                    "fill-opacity": 1,
                    font: '10px "Arial"',
                    "font-family": '"Arial"',
                    "font-size": "10",
                    "font-style": "normal",
                    "font-weight": 400,
                    gradient: 0,
                    height: 0,
                    href: "http://raphaeljs.com/",
                    "letter-spacing": 0,
                    opacity: 1,
                    path: "M0,0",
                    r: 0,
                    rx: 0,
                    ry: 0,
                    src: "",
                    stroke: "#000",
                    "stroke-dasharray": "",
                    "stroke-linecap": "butt",
                    "stroke-linejoin": "butt",
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 1,
                    "stroke-width": 1,
                    target: "_blank",
                    "text-anchor": "middle",
                    title: "Raphael",
                    transform: "",
                    width: 0,
                    x: 0,
                    y: 0
                },
                J = t._availableAnimAttrs = {
                    blur: O,
                    "clip-rect": "csv",
                    cx: O,
                    cy: O,
                    fill: "colour",
                    "fill-opacity": O,
                    "font-size": O,
                    height: O,
                    opacity: O,
                    path: "path",
                    r: O,
                    rx: O,
                    ry: O,
                    stroke: "colour",
                    "stroke-opacity": O,
                    "stroke-width": O,
                    transform: "transform",
                    width: O,
                    x: O,
                    y: O
                },
                K = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                tt = {
                    hs: 1,
                    rg: 1
                },
                et = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                rt = (t._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
                it = function(t, e) {
                    return U(t) - U(e)
                },
                nt = function() {},
                at = function(t) {
                    return t
                },
                st = t._rectPath = function(t, e, r, i, n) {
                    return n ? [
                        ["M", t + n, e],
                        ["l", r - 2 * n, 0],
                        ["a", n, n, 0, 0, 1, n, n],
                        ["l", 0, i - 2 * n],
                        ["a", n, n, 0, 0, 1, -n, n],
                        ["l", 2 * n - r, 0],
                        ["a", n, n, 0, 0, 1, -n, -n],
                        ["l", 0, 2 * n - i],
                        ["a", n, n, 0, 0, 1, n, -n],
                        ["z"]
                    ] : [
                        ["M", t, e],
                        ["l", r, 0],
                        ["l", 0, i],
                        ["l", -r, 0],
                        ["z"]
                    ]
                },
                ot = function(t, e, r, i) {
                    return null == i && (i = r), [
                        ["M", t, e],
                        ["m", 0, -i],
                        ["a", r, i, 0, 1, 1, 0, 2 * i],
                        ["a", r, i, 0, 1, 1, 0, -2 * i],
                        ["z"]
                    ]
                },
                lt = t._getPath = {
                    path: function(t) {
                        return t.attr("path")
                    },
                    circle: function(t) {
                        var e = t.attrs;
                        return ot(e.cx, e.cy, e.r)
                    },
                    ellipse: function(t) {
                        var e = t.attrs;
                        return ot(e.cx, e.cy, e.rx, e.ry)
                    },
                    rect: function(t) {
                        var e = t.attrs;
                        return st(e.x, e.y, e.width, e.height, e.r)
                    },
                    image: function(t) {
                        var e = t.attrs;
                        return st(e.x, e.y, e.width, e.height)
                    },
                    text: function(t) {
                        var e = t._getBBox();
                        return st(e.x, e.y, e.width, e.height)
                    }
                },
                ht = t.mapPath = function(t, e) {
                    if (!e) return t;
                    var r, i, n, a, s, o, l;
                    for (n = 0, s = (t = At(t)).length; n < s; n++)
                        for (a = 1, o = (l = t[n]).length; a < o; a += 2) r = e.x(l[a], l[a + 1]), i = e.y(l[a], l[a + 1]), l[a] = r, l[a + 1] = i;
                    return t
                };
            if (t._g = k, t.type = k.win.SVGAngle || k.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == t.type) {
                var ut, ct = k.doc.createElement("div");
                if (ct.innerHTML = '<v:shape adj="1"/>', ut = ct.firstChild, ut.style.behavior = "url(#default#VML)", !ut || "object" != typeof ut.adj) return t.type = N;
                ct = null
            }
            t.svg = !(t.vml = "VML" == t.type), t._Paper = B, t.fn = m = B.prototype = t.prototype, t._id = 0, t._oid = 0, t.is = function(t, e) {
                return e = F.call(e), "finite" == e ? !W[w](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || Y.call(t).slice(8, -1).toLowerCase() == e
            }, t.angle = function(e, r, i, n, a, s) {
                if (null == a) {
                    var o = e - i,
                        l = r - n;
                    return o || l ? (180 + 180 * P.atan2(-l, -o) / V + 360) % 360 : 0
                }
                return t.angle(e, r, a, s) - t.angle(i, n, a, s)
            }, t.rad = function(t) {
                return t % 360 * V / 180
            }, t.deg = function(t) {
                return 180 * t / V % 360
            }, t.snapTo = function(e, r, i) {
                if (i = t.is(i, "finite") ? i : 10, t.is(e, G)) {
                    for (var n = e.length; n--;)
                        if (q(e[n] - r) <= i) return e[n]
                } else {
                    var a = r % (e = +e);
                    if (a < i) return r - a;
                    if (a > e - i) return r - a + e
                }
                return r
            };
            t.createUUID = function(t, e) {
                return function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e).toUpperCase()
                }
            }(0, function(t) {
                var e = 16 * P.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16)
            });
            t.setWindow = function(e) {
                eve("raphael.setWindow", t, k.win, e), k.win = e, k.doc = k.win.document, t._engine.initWin && t._engine.initWin(k.win)
            };
            var ft = function(e) {
                if (t.vml) {
                    var r;
                    try {
                        var n = new ActiveXObject("htmlfile");
                        n.write("<body>"), n.close(), r = n.body
                    } catch (t) {
                        r = createPopup().document.body
                    }
                    var a = r.createTextRange();
                    ft = i(function(t) {
                        try {
                            r.style.color = L(t).replace(/^\s+|\s+$/g, N);
                            var e = a.queryCommandValue("ForeColor");
                            return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6)
                        } catch (t) {
                            return "none"
                        }
                    })
                } else {
                    var s = k.doc.createElement("i");
                    s.title = "Raphaël Colour Picker", s.style.display = "none", k.doc.body.appendChild(s), ft = i(function(t) {
                        return s.style.color = t, k.doc.defaultView.getComputedStyle(s, N).getPropertyValue("color")
                    })
                }
                return ft(e)
            },
                pt = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                dt = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                gt = function() {
                    return this.hex
                },
                vt = function(e, r, i) {
                    if (null == r && t.is(e, "object") && "r" in e && "g" in e && "b" in e && (i = e.b, r = e.g, e = e.r), null == r && t.is(e, "string")) {
                        var n = t.getRGB(e);
                        e = n.r, r = n.g, i = n.b
                    }
                    return (e > 1 || r > 1 || i > 1) && (e /= 255, r /= 255, i /= 255), [e, r, i]
                },
                xt = function(e, r, i, n) {
                    var a = {
                        r: e *= 255,
                        g: r *= 255,
                        b: i *= 255,
                        hex: t.rgb(e, r, i),
                        toString: gt
                    };
                    return t.is(n, "finite") && (a.opacity = n), a
                };
            t.color = function(e) {
                var r;
                return t.is(e, "object") && "h" in e && "s" in e && "b" in e ? (r = t.hsb2rgb(e), e.r = r.r, e.g = r.g, e.b = r.b, e.hex = r.hex) : t.is(e, "object") && "h" in e && "s" in e && "l" in e ? (r = t.hsl2rgb(e), e.r = r.r, e.g = r.g, e.b = r.b, e.hex = r.hex) : (t.is(e, "string") && (e = t.getRGB(e)), t.is(e, "object") && "r" in e && "g" in e && "b" in e ? (r = t.rgb2hsl(e), e.h = r.h, e.s = r.s, e.l = r.l, r = t.rgb2hsb(e), e.v = r.b) : (e = {
                    hex: "none"
                }).r = e.g = e.b = e.h = e.s = e.v = e.l = -1), e.toString = gt, e
            }, t.hsb2rgb = function(t, e, r, i) {
                this.is(t, "object") && "h" in t && "s" in t && "b" in t && (r = t.b, e = t.s, i = (t = t.h).o);
                var n, a, s, o, l;
                return t = (t *= 360) % 360 / 60, l = r * e, o = l * (1 - q(t % 2 - 1)), n = a = s = r - l, t = ~~t, n += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], xt(n, a, s, i)
            }, t.hsl2rgb = function(t, e, r, i) {
                this.is(t, "object") && "h" in t && "s" in t && "l" in t && (r = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || r > 1) && (t /= 360, e /= 100, r /= 100);
                var n, a, s, o, l;
                return t = (t *= 360) % 360 / 60, l = 2 * e * (r < .5 ? r : 1 - r), o = l * (1 - q(t % 2 - 1)), n = a = s = r - l / 2, t = ~~t, n += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], xt(n, a, s, i)
            }, t.rgb2hsb = function(t, e, r) {
                t = (r = vt(t, e, r))[0], e = r[1], r = r[2];
                var i, n, a, s;
                return a = I(t, e, r), s = a - j(t, e, r), i = 0 == s ? null : a == t ? (e - r) / s : a == e ? (r - t) / s + 2 : (t - e) / s + 4, i = (i + 360) % 6 * 60 / 360, n = 0 == s ? 0 : s / a, {
                    h: i,
                    s: n,
                    b: a,
                    toString: pt
                }
            }, t.rgb2hsl = function(t, e, r) {
                t = (r = vt(t, e, r))[0], e = r[1], r = r[2];
                var i, n, a, s, o, l;
                return s = I(t, e, r), o = j(t, e, r), l = s - o, i = 0 == l ? null : s == t ? (e - r) / l : s == e ? (r - t) / l + 2 : (t - e) / l + 4, i = (i + 360) % 6 * 60 / 360, a = (s + o) / 2, n = 0 == l ? 0 : a < .5 ? l / (2 * a) : l / (2 - 2 * a), {
                    h: i,
                    s: n,
                    l: a,
                    toString: dt
                }
            }, t._path2string = function() {
                return this.join(",").replace(/,?([achlmqrstvxz]),?/gi, "$1")
            };
            t._preload = function(t, e) {
                var r = k.doc.createElement("img");
                r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
                    e.call(this), this.onload = null, k.doc.body.removeChild(this)
                }, r.onerror = function() {
                    k.doc.body.removeChild(this)
                }, k.doc.body.appendChild(r), r.src = t
            };
            t.getRGB = i(function(e) {
                if (!e || (e = L(e)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: n
                };
                if ("none" == e) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: n
                };
                !(tt[w](e.toLowerCase().substring(0, 2)) || "#" == e.charAt()) && (e = ft(e));
                var r, i, a, s, o, l, h = e.match(/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i);
                return h ? (h[2] && (a = $(h[2].substring(5), 16), i = $(h[2].substring(3, 5), 16), r = $(h[2].substring(1, 3), 16)), h[3] && (a = $((o = h[3].charAt(3)) + o, 16), i = $((o = h[3].charAt(2)) + o, 16), r = $((o = h[3].charAt(1)) + o, 16)), h[4] && (l = h[4][M](K), r = U(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = U(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), a = U(l[2]), "%" == l[2].slice(-1) && (a *= 2.55), "rgba" == h[1].toLowerCase().slice(0, 4) && (s = U(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100)), h[5] ? (l = h[5][M](K), r = U(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = U(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), a = U(l[2]), "%" == l[2].slice(-1) && (a *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (r /= 360), "hsba" == h[1].toLowerCase().slice(0, 4) && (s = U(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), t.hsb2rgb(r, i, a, s)) : h[6] ? (l = h[6][M](K), r = U(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = U(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), a = U(l[2]), "%" == l[2].slice(-1) && (a *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (r /= 360), "hsla" == h[1].toLowerCase().slice(0, 4) && (s = U(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), t.hsl2rgb(r, i, a, s)) : (h = {
                    r: r,
                    g: i,
                    b: a,
                    toString: n
                }, h.hex = "#" + (16777216 | a | i << 8 | r << 16).toString(16).slice(1), t.is(s, "finite") && (h.opacity = s), h)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: n
                }
            }, t), t.hsb = i(function(e, r, i) {
                return t.hsb2rgb(e, r, i).hex
            }), t.hsl = i(function(e, r, i) {
                return t.hsl2rgb(e, r, i).hex
            }), t.rgb = i(function(t, e, r) {
                return "#" + (16777216 | r | e << 8 | t << 16).toString(16).slice(1)
            }), t.getColor = function(t) {
                var e = this.getColor.start = this.getColor.start || {
                    h: 0,
                    s: 1,
                    b: t || .75
                },
                    r = this.hsb2rgb(e.h, e.s, e.b);
                return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
                    h: 0,
                    s: 1,
                    b: e.b
                })), r.hex
            }, t.getColor.reset = function() {
                delete this.start
            }, t.parsePathString = function(e) {
                if (!e) return null;
                var r = yt(e);
                if (r.arr) return bt(r.arr);
                var i = {
                    a: 7,
                    c: 6,
                    h: 1,
                    l: 2,
                    m: 2,
                    r: 4,
                    q: 4,
                    s: 4,
                    t: 2,
                    v: 1,
                    z: 0
                },
                    n = [];
                return t.is(e, G) && t.is(e[0], G) && (n = bt(e)), n.length || L(e).replace(/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, function(t, e, r) {
                    var a = [],
                        s = e.toLowerCase();
                    if (r.replace(et, function(t, e) {
                        e && a.push(+e)
                    }), "m" == s && a.length > 2 && (n.push([e][T](a.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) n.push([e][T](a));
                    else
                        for (; a.length >= i[s] && (n.push([e][T](a.splice(0, i[s]))), i[s]););
                }), n.toString = t._path2string, r.arr = bt(n), n
            }, t.parseTransformString = i(function(e) {
                if (!e) return null;
                var r = [];
                return t.is(e, G) && t.is(e[0], G) && (r = bt(e)), r.length || L(e).replace(/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, function(t, e, i) {
                    var n = [];
                    F.call(e);
                    i.replace(et, function(t, e) {
                        e && n.push(+e)
                    }), r.push([e][T](n))
                }), r.toString = t._path2string, r
            });
            var yt = function(t) {
                var e = yt.ps = yt.ps || {};
                return e[t] ? e[t].sleep = 100 : e[t] = {
                    sleep: 100
                }, setTimeout(function() {
                    for (var r in e) e[w](r) && r != t && !--e[r].sleep && delete e[r]
                }), e[t]
            };
            t.findDotsAtSegment = function(t, e, r, i, n, a, s, o, l) {
                var h = 1 - l,
                    u = D(h, 3),
                    c = D(h, 2),
                    f = l * l,
                    p = f * l,
                    d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * s,
                    g = u * e + 3 * c * l * i + 3 * h * l * l * a + p * o,
                    v = t + 2 * l * (r - t) + f * (n - 2 * r + t),
                    x = e + 2 * l * (i - e) + f * (a - 2 * i + e),
                    y = r + 2 * l * (n - r) + f * (s - 2 * n + r),
                    m = i + 2 * l * (a - i) + f * (o - 2 * a + i),
                    b = h * t + l * r,
                    _ = h * e + l * i,
                    w = h * n + l * s,
                    k = h * a + l * o,
                    C = 90 - 180 * P.atan2(v - y, x - m) / V;
                return (v > y || x < m) && (C += 180), {
                    x: d,
                    y: g,
                    m: {
                        x: v,
                        y: x
                    },
                    n: {
                        x: y,
                        y: m
                    },
                    start: {
                        x: b,
                        y: _
                    },
                    end: {
                        x: w,
                        y: k
                    },
                    alpha: C
                }
            }, t.bezierBBox = function(e, r, i, n, a, s, o, l) {
                t.is(e, "array") || (e = [e, r, i, n, a, s, o, l]);
                var h = Tt.apply(null, e);
                return {
                    x: h.min.x,
                    y: h.min.y,
                    x2: h.max.x,
                    y2: h.max.y,
                    width: h.max.x - h.min.x,
                    height: h.max.y - h.min.y
                }
            }, t.isPointInsideBBox = function(t, e, r) {
                return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2
            }, t.isBBoxIntersect = function(e, r) {
                var i = t.isPointInsideBBox;
                return i(r, e.x, e.y) || i(r, e.x2, e.y) || i(r, e.x, e.y2) || i(r, e.x2, e.y2) || i(e, r.x, r.y) || i(e, r.x2, r.y) || i(e, r.x, r.y2) || i(e, r.x2, r.y2) || (e.x < r.x2 && e.x > r.x || r.x < e.x2 && r.x > e.x) && (e.y < r.y2 && e.y > r.y || r.y < e.y2 && r.y > e.y)
            }, t.pathIntersection = function(t, e) {
                return c(t, e)
            }, t.pathIntersectionNumber = function(t, e) {
                return c(t, e, 1)
            }, t.isPointInsidePath = function(e, r, i) {
                var n = t.pathBBox(e);
                return t.isPointInsideBBox(n, r, i) && c(e, [
                    ["M", r, i],
                    ["H", n.x2 + 10]
                ], 1) % 2 == 1
            }, t._removedFactory = function(t) {
                return function() {
                    eve("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t)
                }
            };
            var mt = t.pathBBox = function(t) {
                var r = yt(t);
                if (r.bbox) return r.bbox;
                if (!t) return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    x2: 0,
                    y2: 0
                };
                for (var i, n = 0, a = 0, s = [], o = [], l = 0, h = (t = At(t)).length; l < h; l++)
                    if ("M" == (i = t[l])[0]) n = i[1], a = i[2], s.push(n), o.push(a);
                    else {
                        var u = Tt(n, a, i[1], i[2], i[3], i[4], i[5], i[6]);
                        s = s[T](u.min.x, u.max.x), o = o[T](u.min.y, u.max.y), n = i[5], a = i[6]
                    }
                var c = j[S](0, s),
                    f = j[S](0, o),
                    p = I[S](0, s),
                    d = I[S](0, o),
                    g = {
                        x: c,
                        y: f,
                        x2: p,
                        y2: d,
                        width: p - c,
                        height: d - f
                    };
                return r.bbox = e(g), g
            },
                bt = function(r) {
                    var i = e(r);
                    return i.toString = t._path2string, i
                },
                _t = t._pathToRelative = function(e) {
                    var r = yt(e);
                    if (r.rel) return bt(r.rel);
                    t.is(e, G) && t.is(e && e[0], G) || (e = t.parsePathString(e));
                    var i = [],
                        n = 0,
                        a = 0,
                        s = 0,
                        o = 0,
                        l = 0;
                    "M" == e[0][0] && (s = n = e[0][1], o = a = e[0][2], l++, i.push(["M", n, a]));
                    for (var h = l, u = e.length; h < u; h++) {
                        var c = i[h] = [],
                            f = e[h];
                        if (f[0] != F.call(f[0])) switch (c[0] = F.call(f[0]), c[0]) {
                            case "a":
                                c[1] = f[1], c[2] = f[2], c[3] = f[3], c[4] = f[4], c[5] = f[5], c[6] = +(f[6] - n).toFixed(3), c[7] = +(f[7] - a).toFixed(3);
                                break;
                            case "v":
                                c[1] = +(f[1] - a).toFixed(3);
                                break;
                            case "m":
                                s = f[1], o = f[2];
                            default:
                                for (var p = 1, d = f.length; p < d; p++) c[p] = +(f[p] - (p % 2 ? n : a)).toFixed(3)
                                                                                   } else {
                                                                                       c = i[h] = [], "m" == f[0] && (s = f[1] + n, o = f[2] + a);
                                                                                       for (var g = 0, v = f.length; g < v; g++) i[h][g] = f[g]
                                                                                   }
                        var x = i[h].length;
                        switch (i[h][0]) {
                            case "z":
                                n = s, a = o;
                                break;
                            case "h":
                                n += +i[h][x - 1];
                                break;
                            case "v":
                                a += +i[h][x - 1];
                                break;
                            default:
                                n += +i[h][x - 2], a += +i[h][x - 1]
                                       }
                    }
                    return i.toString = t._path2string, r.rel = bt(i), i
                },
                wt = t._pathToAbsolute = function(e) {
                    var r = yt(e);
                    if (r.abs) return bt(r.abs);
                    if (t.is(e, G) && t.is(e && e[0], G) || (e = t.parsePathString(e)), !e || !e.length) return [
                        ["M", 0, 0]
                    ];
                    var i = [],
                        n = 0,
                        s = 0,
                        o = 0,
                        l = 0,
                        h = 0;
                    "M" == e[0][0] && (o = n = +e[0][1], l = s = +e[0][2], h++, i[0] = ["M", n, s]);
                    for (var u, c, f = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), p = h, d = e.length; p < d; p++) {
                        if (i.push(u = []), (c = e[p])[0] != Z.call(c[0])) switch (u[0] = Z.call(c[0]), u[0]) {
                            case "A":
                                u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +(c[6] + n), u[7] = +(c[7] + s);
                                break;
                            case "V":
                                u[1] = +c[1] + s;
                                break;
                            case "H":
                                u[1] = +c[1] + n;
                                break;
                            case "R":
                                for (var g = [n, s][T](c.slice(1)), v = 2, x = g.length; v < x; v++) g[v] = +g[v] + n, g[++v] = +g[v] + s;
                                i.pop(), i = i[T](a(g, f));
                                break;
                            case "M":
                                o = +c[1] + n, l = +c[2] + s;
                            default:
                                for (v = 1, x = c.length; v < x; v++) u[v] = +c[v] + (v % 2 ? n : s)
                                                                                                            } else if ("R" == c[0]) g = [n, s][T](c.slice(1)), i.pop(), i = i[T](a(g, f)), u = ["R"][T](c.slice(-2));
                        else
                            for (var y = 0, m = c.length; y < m; y++) u[y] = c[y];
                        switch (u[0]) {
                            case "Z":
                                n = o, s = l;
                                break;
                            case "H":
                                n = u[1];
                                break;
                            case "V":
                                s = u[1];
                                break;
                            case "M":
                                o = u[u.length - 2], l = u[u.length - 1];
                            default:
                                n = u[u.length - 2], s = u[u.length - 1]
                                    }
                    }
                    return i.toString = t._path2string, r.abs = bt(i), i
                },
                kt = function(t, e, r, i) {
                    return [t, e, r, i, r, i]
                },
                Ct = function(t, e, r, i, n, a) {
                    return [1 / 3 * t + 2 / 3 * r, 1 / 3 * e + 2 / 3 * i, 1 / 3 * n + 2 / 3 * r, 1 / 3 * a + 2 / 3 * i, n, a]
                },
                Bt = function(t, e, r, n, a, s, o, l, h, u) {
                    var c, f = 120 * V / 180,
                        p = V / 180 * (+a || 0),
                        d = [],
                        g = i(function(t, e, r) {
                            return {
                                x: t * P.cos(r) - e * P.sin(r),
                                y: t * P.sin(r) + e * P.cos(r)
                            }
                        });
                    if (u) C = u[0], B = u[1], w = u[2], k = u[3];
                    else {
                        t = (c = g(t, e, -p)).x, e = c.y, l = (c = g(l, h, -p)).x, h = c.y;
                        P.cos(V / 180 * a), P.sin(V / 180 * a);
                        var v = (t - l) / 2,
                            x = (e - h) / 2,
                            y = v * v / (r * r) + x * x / (n * n);
                        y > 1 && (r *= y = P.sqrt(y), n *= y);
                        var m = r * r,
                            b = n * n,
                            _ = (s == o ? -1 : 1) * P.sqrt(q((m * b - m * x * x - b * v * v) / (m * x * x + b * v * v))),
                            w = _ * r * x / n + (t + l) / 2,
                            k = _ * -n * v / r + (e + h) / 2,
                            C = P.asin(((e - k) / n).toFixed(9)),
                            B = P.asin(((h - k) / n).toFixed(9));
                        C = t < w ? V - C : C, B = l < w ? V - B : B, C < 0 && (C = 2 * V + C), B < 0 && (B = 2 * V + B), o && C > B && (C -= 2 * V), !o && B > C && (B -= 2 * V)
                    }
                    var S = B - C;
                    if (q(S) > f) {
                        var A = B,
                            N = l,
                            z = h;
                        B = C + f * (o && B > C ? 1 : -1), l = w + r * P.cos(B), h = k + n * P.sin(B), d = Bt(l, h, r, n, a, 0, o, N, z, [B, A, w, k])
                    }
                    S = B - C;
                    var L = P.cos(C),
                        E = P.sin(C),
                        R = P.cos(B),
                        F = P.sin(B),
                        I = P.tan(S / 4),
                        j = 4 / 3 * r * I,
                        D = 4 / 3 * n * I,
                        O = [t, e],
                        G = [t + j * E, e - D * L],
                        Y = [l + j * F, h - D * R],
                        W = [l, h];
                    if (G[0] = 2 * O[0] - G[0], G[1] = 2 * O[1] - G[1], u) return [G, Y, W][T](d);
                    for (var H = [], X = 0, U = (d = [G, Y, W][T](d).join()[M](",")).length; X < U; X++) H[X] = X % 2 ? g(d[X - 1], d[X], p).y : g(d[X], d[X + 1], p).x;
                    return H
                },
                St = function(t, e, r, i, n, a, s, o, l) {
                    var h = 1 - l;
                    return {
                        x: D(h, 3) * t + 3 * D(h, 2) * l * r + 3 * h * l * l * n + D(l, 3) * s,
                        y: D(h, 3) * e + 3 * D(h, 2) * l * i + 3 * h * l * l * a + D(l, 3) * o
                    }
                },
                Tt = i(function(t, e, r, i, n, a, s, o) {
                    var l, h = n - 2 * r + t - (s - 2 * n + r),
                        u = 2 * (r - t) - 2 * (n - r),
                        c = t - r,
                        f = (-u + P.sqrt(u * u - 4 * h * c)) / 2 / h,
                        p = (-u - P.sqrt(u * u - 4 * h * c)) / 2 / h,
                        d = [e, o],
                        g = [t, s];
                    return q(f) > "1e12" && (f = .5), q(p) > "1e12" && (p = .5), f > 0 && f < 1 && (l = St(t, e, r, i, n, a, s, o, f), g.push(l.x), d.push(l.y)), p > 0 && p < 1 && (l = St(t, e, r, i, n, a, s, o, p), g.push(l.x), d.push(l.y)), h = a - 2 * i + e - (o - 2 * a + i), u = 2 * (i - e) - 2 * (a - i), c = e - i, f = (-u + P.sqrt(u * u - 4 * h * c)) / 2 / h, p = (-u - P.sqrt(u * u - 4 * h * c)) / 2 / h, q(f) > "1e12" && (f = .5), q(p) > "1e12" && (p = .5), f > 0 && f < 1 && (l = St(t, e, r, i, n, a, s, o, f), g.push(l.x), d.push(l.y)), p > 0 && p < 1 && (l = St(t, e, r, i, n, a, s, o, p), g.push(l.x), d.push(l.y)), {
                        min: {
                            x: j[S](0, g),
                            y: j[S](0, d)
                        },
                        max: {
                            x: I[S](0, g),
                            y: I[S](0, d)
                        }
                    }
                }),
                At = t._path2curve = i(function(t, e) {
                    var r = !e && yt(t);
                    if (!e && r.curve) return bt(r.curve);
                    for (var i = wt(t), n = e && wt(e), a = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, s = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, o = (function(t, e) {
                        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                        switch (!(t[0] in {
                            T: 1,
                            Q: 1
                        }) && (e.qx = e.qy = null), t[0]) {
                            case "M":
                                e.X = t[1], e.Y = t[2];
                                break;
                            case "A":
                                t = ["C"][T](Bt[S](0, [e.x, e.y][T](t.slice(1))));
                                break;
                            case "S":
                                t = ["C", e.x + (e.x - (e.bx || e.x)), e.y + (e.y - (e.by || e.y))][T](t.slice(1));
                                break;
                            case "T":
                                e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"][T](Ct(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                break;
                            case "Q":
                                e.qx = t[1], e.qy = t[2], t = ["C"][T](Ct(e.x, e.y, t[1], t[2], t[3], t[4]));
                                break;
                            case "L":
                                t = ["C"][T](kt(e.x, e.y, t[1], t[2]));
                                break;
                            case "H":
                                t = ["C"][T](kt(e.x, e.y, t[1], e.y));
                                break;
                            case "V":
                                t = ["C"][T](kt(e.x, e.y, e.x, t[1]));
                                break;
                            case "Z":
                                t = ["C"][T](kt(e.x, e.y, e.X, e.Y))
                                                        }
                        return t
                    }), l = function(t, e) {
                        if (t[e].length > 7) {
                            t[e].shift();
                            for (var r = t[e]; r.length;) t.splice(e++, 0, ["C"][T](r.splice(0, 6)));
                            t.splice(e, 1), c = I(i.length, n && n.length || 0)
                        }
                    }, h = function(t, e, r, a, s) {
                        t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", a.x, a.y]), r.bx = 0, r.by = 0, r.x = t[s][1], r.y = t[s][2], c = I(i.length, n && n.length || 0))
                    }, u = 0, c = I(i.length, n && n.length || 0); u < c; u++) {
                        i[u] = o(i[u], a), l(i, u), n && (n[u] = o(n[u], s)), n && l(n, u), h(i, n, a, s, u), h(n, i, s, a, u);
                        var f = i[u],
                            p = n && n[u],
                            d = f.length,
                            g = n && p.length;
                        a.x = f[d - 2], a.y = f[d - 1], a.bx = U(f[d - 4]) || a.x, a.by = U(f[d - 3]) || a.y, s.bx = n && (U(p[g - 4]) || s.x), s.by = n && (U(p[g - 3]) || s.y), s.x = n && p[g - 2], s.y = n && p[g - 1]
                    }
                    return n || (r.curve = bt(i)), n ? [i, n] : i
                }, null, bt),
                Nt = (t._parseDots = i(function(e) {
                    for (var r = [], i = 0, n = e.length; i < n; i++) {
                        var a = {},
                            s = e[i].match(/^([^:]*):?([\d\.]*)/);
                        if (a.color = t.getRGB(s[1]), a.color.error) return null;
                        a.color = a.color.hex, s[2] && (a.offset = s[2] + "%"), r.push(a)
                    }
                    for (i = 1, n = r.length - 1; i < n; i++)
                        if (!r[i].offset) {
                            for (var o = U(r[i - 1].offset || 0), l = 0, h = i + 1; h < n; h++)
                                if (r[h].offset) {
                                    l = r[h].offset;
                                    break
                                }
                            l || (l = 100, h = n);
                            for (var u = ((l = U(l)) - o) / (h - i + 1); i < h; i++) o += u, r[i].offset = o + "%"
                        }
                    return r
                }), t._tear = function(t, e) {
                    t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
                }),
                zt = (t._tofront = function(t, e) {
                    e.top !== t && (Nt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
                }, t._toback = function(t, e) {
                    e.bottom !== t && (Nt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
                }, t._insertafter = function(t, e, r) {
                    Nt(t, r), e == r.top && (r.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
                }, t._insertbefore = function(t, e, r) {
                    Nt(t, r), e == r.bottom && (r.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
                }, t.toMatrix = function(t, e) {
                    var r = mt(t),
                        i = {
                            _: {
                                transform: N
                            },
                            getBBox: function() {
                                return r
                            }
                        };
                    return Lt(i, e), i.matrix
                }),
                Lt = (t.transformPath = function(t, e) {
                    return ht(t, zt(t, e))
                }, t._extractTransform = function(e, r) {
                    if (null == r) return e._.transform;
                    r = L(r).replace(/\.{3}|\u2026/g, e._.transform || N);
                    var i = t.parseTransformString(r),
                        n = 0,
                        a = 0,
                        s = 0,
                        o = 1,
                        l = 1,
                        h = e._,
                        u = new f;
                    if (h.transform = i || [], i)
                        for (var c = 0, p = i.length; c < p; c++) {
                            var d, g, v, x, y, m = i[c],
                                b = m.length,
                                _ = L(m[0]).toLowerCase(),
                                w = m[0] != _,
                                k = w ? u.invert() : 0;
                            "t" == _ && 3 == b ? w ? (d = k.x(0, 0), g = k.y(0, 0), v = k.x(m[1], m[2]), x = k.y(m[1], m[2]), u.translate(v - d, x - g)) : u.translate(m[1], m[2]) : "r" == _ ? 2 == b ? (y = y || e.getBBox(1), u.rotate(m[1], y.x + y.width / 2, y.y + y.height / 2), n += m[1]) : 4 == b && (w ? (v = k.x(m[2], m[3]), x = k.y(m[2], m[3]), u.rotate(m[1], v, x)) : u.rotate(m[1], m[2], m[3]), n += m[1]) : "s" == _ ? 2 == b || 3 == b ? (y = y || e.getBBox(1), u.scale(m[1], m[b - 1], y.x + y.width / 2, y.y + y.height / 2), o *= m[1], l *= m[b - 1]) : 5 == b && (w ? (v = k.x(m[3], m[4]), x = k.y(m[3], m[4]), u.scale(m[1], m[2], v, x)) : u.scale(m[1], m[2], m[3], m[4]), o *= m[1], l *= m[2]) : "m" == _ && 7 == b && u.add(m[1], m[2], m[3], m[4], m[5], m[6]), h.dirtyT = 1, e.matrix = u
                        }
                    e.matrix = u, h.sx = o, h.sy = l, h.deg = n, h.dx = a = u.e, h.dy = s = u.f, 1 == o && 1 == l && !n && h.bbox ? (h.bbox.x += +a, h.bbox.y += +s) : h.dirtyT = 1
                }),
                Mt = function(t) {
                    var e = t[0];
                    switch (e.toLowerCase()) {
                        case "t":
                            return [e, 0, 0];
                        case "m":
                            return [e, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                        case "s":
                            return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                                           }
                },
                Et = t._equaliseTransform = function(e, r) {
                    r = L(r).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], r = t.parseTransformString(r) || [];
                    for (var i, n, a, s, o = I(e.length, r.length), l = [], h = [], u = 0; u < o; u++) {
                        if (a = e[u] || Mt(r[u]), s = r[u] || Mt(a), a[0] != s[0] || "r" == a[0].toLowerCase() && (a[2] != s[2] || a[3] != s[3]) || "s" == a[0].toLowerCase() && (a[3] != s[3] || a[4] != s[4])) return;
                        for (l[u] = [], h[u] = [], i = 0, n = I(a.length, s.length); i < n; i++) i in a && (l[u][i] = a[i]), i in s && (h[u][i] = s[i])
                    }
                    return {
                        from: l,
                        to: h
                    }
                };
            t._getContainer = function(e, r, i, n) {
                var a;
                if (null != (a = null != n || t.is(e, "object") ? e : k.doc.getElementById(e))) return a.tagName ? null == r ? {
                    container: a,
                    width: a.style.pixelWidth || a.offsetWidth,
                    height: a.style.pixelHeight || a.offsetHeight
                } : {
                    container: a,
                    width: r,
                    height: i
                } : {
                    container: 1,
                    x: e,
                    y: r,
                    width: i,
                    height: n
                }
            }, t.pathToRelative = _t, t._engine = {}, t.path2curve = At, t.matrix = function(t, e, r, i, n, a) {
                return new f(t, e, r, i, n, a)
            },
                function(e) {
                function r(t) {
                    return t[0] * t[0] + t[1] * t[1]
                }

                function i(t) {
                    var e = P.sqrt(r(t));
                    t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                }
                e.add = function(t, e, r, i, n, a) {
                    var s, o, l, h, u = [
                        [],
                        [],
                        []
                    ],
                        c = [
                            [this.a, this.c, this.e],
                            [this.b, this.d, this.f],
                            [0, 0, 1]
                        ],
                        p = [
                            [t, r, n],
                            [e, i, a],
                            [0, 0, 1]
                        ];
                    for (t && t instanceof f && (p = [
                        [t.a, t.c, t.e],
                        [t.b, t.d, t.f],
                        [0, 0, 1]
                    ]), s = 0; s < 3; s++)
                        for (o = 0; o < 3; o++) {
                            for (h = 0, l = 0; l < 3; l++) h += c[s][l] * p[l][o];
                            u[s][o] = h
                        }
                    this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2]
                }, e.invert = function() {
                    var t = this,
                        e = t.a * t.d - t.b * t.c;
                    return new f(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                }, e.clone = function() {
                    return new f(this.a, this.b, this.c, this.d, this.e, this.f)
                }, e.translate = function(t, e) {
                    this.add(1, 0, 0, 1, t, e)
                }, e.scale = function(t, e, r, i) {
                    null == e && (e = t), (r || i) && this.add(1, 0, 0, 1, r, i), this.add(t, 0, 0, e, 0, 0), (r || i) && this.add(1, 0, 0, 1, -r, -i)
                }, e.rotate = function(e, r, i) {
                    e = t.rad(e), r = r || 0, i = i || 0;
                    var n = +P.cos(e).toFixed(9),
                        a = +P.sin(e).toFixed(9);
                    this.add(n, a, -a, n, r, i), this.add(1, 0, 0, 1, -r, -i)
                }, e.x = function(t, e) {
                    return t * this.a + e * this.c + this.e
                }, e.y = function(t, e) {
                    return t * this.b + e * this.d + this.f
                }, e.get = function(t) {
                    return +this[L.fromCharCode(97 + t)].toFixed(4)
                }, e.toString = function() {
                    return t.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                }, e.toFilter = function() {
                    return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                }, e.offset = function() {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, e.split = function() {
                    var e = {};
                    e.dx = this.e, e.dy = this.f;
                    var n = [
                        [this.a, this.c],
                        [this.b, this.d]
                    ];
                    e.scalex = P.sqrt(r(n[0])), i(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = P.sqrt(r(n[1])), i(n[1]), e.shear /= e.scaley;
                    var a = -n[0][1],
                        s = n[1][1];
                    return s < 0 ? (e.rotate = t.deg(P.acos(s)), a < 0 && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(P.asin(a)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
                }, e.toTransformString = function(t) {
                    var e = t || this[M]();
                    return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : N) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : N) + (e.rotate ? "r" + [e.rotate, 0, 0] : N)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                }
            }(f.prototype);
            var Rt = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
            "Apple Computer, Inc." == navigator.vendor && (Rt && Rt[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Rt && Rt[1] < 8 ? m.safari = function() {
                var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
                    stroke: "none"
                });
                setTimeout(function() {
                    t.remove()
                })
            } : m.safari = nt;
            for (var Ft = function() {
                this.returnValue = !1
            }, Pt = function() {
                return this.originalEvent.preventDefault()
            }, It = function() {
                this.cancelBubble = !0
            }, jt = function() {
                return this.originalEvent.stopPropagation()
            }, qt = function() {
                return k.doc.addEventListener ? function(t, e, r, i) {
                    var n = A && R[e] ? R[e] : e,
                        a = function(n) {
                            var a = k.doc.documentElement.scrollTop || k.doc.body.scrollTop,
                                s = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft,
                                o = n.clientX + s,
                                l = n.clientY + a;
                            if (A && R[w](e))
                                for (var h = 0, u = n.targetTouches && n.targetTouches.length; h < u; h++)
                                    if (n.targetTouches[h].target == t) {
                                        var c = n;
                                        (n = n.targetTouches[h]).originalEvent = c, n.preventDefault = Pt, n.stopPropagation = jt;
                                        break
                                    }
                            return r.call(i, n, o, l)
                        };
                    return t.addEventListener(n, a, !1),
                        function() {
                        return t.removeEventListener(n, a, !1), !0
                    }
                } : k.doc.attachEvent ? function(t, e, r, i) {
                    var n = function(t) {
                        t = t || k.win.event;
                        var e = k.doc.documentElement.scrollTop || k.doc.body.scrollTop,
                            n = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft,
                            a = t.clientX + n,
                            s = t.clientY + e;
                        return t.preventDefault = t.preventDefault || Ft, t.stopPropagation = t.stopPropagation || It, r.call(i, t, a, s)
                    };
                    return t.attachEvent("on" + e, n),
                        function() {
                        return t.detachEvent("on" + e, n), !0
                    }
                } : void 0
            }(), Dt = [], Vt = function(t) {
                for (var e, r = t.clientX, i = t.clientY, n = k.doc.documentElement.scrollTop || k.doc.body.scrollTop, a = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft, s = Dt.length; s--;) {
                    if (e = Dt[s], A) {
                        for (var o, l = t.touches.length; l--;)
                            if ((o = t.touches[l]).identifier == e.el._drag.id) {
                                r = o.clientX, i = o.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                break
                            }
                    } else t.preventDefault();
                    var h, u = e.el.node,
                        c = u.nextSibling,
                        f = u.parentNode,
                        p = u.style.display;
                    k.win.opera && f.removeChild(u), u.style.display = "none", h = e.el.paper.getElementByPoint(r, i), u.style.display = p, k.win.opera && (c ? f.insertBefore(u, c) : f.appendChild(u)), h && eve("raphael.drag.over." + e.el.id, e.el, h), r += a, i += n, eve("raphael.drag.move." + e.el.id, e.move_scope || e.el, r - e.el._drag.x, i - e.el._drag.y, r, i, t)
                }
            }, Ot = function(e) {
                t.unmousemove(Vt).unmouseup(Ot);
                for (var r, i = Dt.length; i--;)(r = Dt[i]).el._drag = {}, eve("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, e);
                Dt = []
            }, Gt = t.el = {}, Yt = E.length; Yt--;) ! function(e) {
                t[e] = Gt[e] = function(r, i) {
                    return t.is(r, "function") && (this.events = this.events || [], this.events.push({
                        name: e,
                        f: r,
                        unbind: qt(this.shape || this.node || k.doc, e, r, i || this)
                    })), this
                }, t["un" + e] = Gt["un" + e] = function(t) {
                    for (var r = this.events || [], i = r.length; i--;)
                        if (r[i].name == e && r[i].f == t) return r[i].unbind(), r.splice(i, 1), !r.length && delete this.events, this;
                    return this
                }
            }(E[Yt]);
            Gt.data = function(e, r) {
                var i = rt[this.id] = rt[this.id] || {};
                if (1 == arguments.length) {
                    if (t.is(e, "object")) {
                        for (var n in e) e[w](n) && this.data(n, e[n]);
                        return this
                    }
                    return eve("raphael.data.get." + this.id, this, i[e], e), i[e]
                }
                return i[e] = r, eve("raphael.data.set." + this.id, this, r, e), this
            }, Gt.removeData = function(t) {
                return null == t ? rt[this.id] = {} : rt[this.id] && delete rt[this.id][t], this
            }, Gt.hover = function(t, e, r, i) {
                return this.mouseover(t, r).mouseout(e, i || r)
            }, Gt.unhover = function(t, e) {
                return this.unmouseover(t).unmouseout(e)
            };
            var Wt = [];
            Gt.drag = function(e, r, i, n, a, s) {
                function o(o) {
                    (o.originalEvent || o).preventDefault();
                    var l = k.doc.documentElement.scrollTop || k.doc.body.scrollTop,
                        h = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft;
                    this._drag.x = o.clientX + h, this._drag.y = o.clientY + l, this._drag.id = o.identifier, !Dt.length && t.mousemove(Vt).mouseup(Ot), Dt.push({
                        el: this,
                        move_scope: n,
                        start_scope: a,
                        end_scope: s
                    }), r && eve.on("raphael.drag.start." + this.id, r), e && eve.on("raphael.drag.move." + this.id, e), i && eve.on("raphael.drag.end." + this.id, i), eve("raphael.drag.start." + this.id, a || n || this, o.clientX + h, o.clientY + l, o)
                }
                return this._drag = {}, Wt.push({
                    el: this,
                    start: o
                }), this.mousedown(o), this
            }, Gt.onDragOver = function(t) {
                t ? eve.on("raphael.drag.over." + this.id, t) : eve.unbind("raphael.drag.over." + this.id)
            }, Gt.undrag = function() {
                for (var e = Wt.length; e--;) Wt[e].el == this && (this.unmousedown(Wt[e].start), Wt.splice(e, 1), eve.unbind("raphael.drag.*." + this.id));
                !Wt.length && t.unmousemove(Vt).unmouseup(Ot)
            }, m.circle = function(e, r, i) {
                var n = t._engine.circle(this, e || 0, r || 0, i || 0);
                return this.__set__ && this.__set__.push(n), n
            }, m.rect = function(e, r, i, n, a) {
                var s = t._engine.rect(this, e || 0, r || 0, i || 0, n || 0, a || 0);
                return this.__set__ && this.__set__.push(s), s
            }, m.ellipse = function(e, r, i, n) {
                var a = t._engine.ellipse(this, e || 0, r || 0, i || 0, n || 0);
                return this.__set__ && this.__set__.push(a), a
            }, m.path = function(e) {
                e && !t.is(e, "string") && !t.is(e[0], G) && (e += N);
                var r = t._engine.path(t.format[S](t, arguments), this);
                return this.__set__ && this.__set__.push(r), r
            }, m.image = function(e, r, i, n, a) {
                var s = t._engine.image(this, e || "about:blank", r || 0, i || 0, n || 0, a || 0);
                return this.__set__ && this.__set__.push(s), s
            }, m.text = function(e, r, i) {
                var n = t._engine.text(this, e || 0, r || 0, L(i));
                return this.__set__ && this.__set__.push(n), n
            }, m.set = function(e) {
                !t.is(e, "array") && (e = Array.prototype.splice.call(arguments, 0, arguments.length));
                var r = new ie(e);
                return this.__set__ && this.__set__.push(r), r
            }, m.setStart = function(t) {
                this.__set__ = t || this.set()
            }, m.setFinish = function(t) {
                var e = this.__set__;
                return delete this.__set__, e
            }, m.setSize = function(e, r) {
                return t._engine.setSize.call(this, e, r)
            }, m.setViewBox = function(e, r, i, n, a) {
                return t._engine.setViewBox.call(this, e, r, i, n, a)
            }, m.top = m.bottom = null, m.raphael = t;
            var Ht = function(t) {
                var e = t.getBoundingClientRect(),
                    r = t.ownerDocument,
                    i = r.body,
                    n = r.documentElement,
                    a = n.clientTop || i.clientTop || 0,
                    s = n.clientLeft || i.clientLeft || 0;
                return {
                    y: e.top + (k.win.pageYOffset || n.scrollTop || i.scrollTop) - a,
                    x: e.left + (k.win.pageXOffset || n.scrollLeft || i.scrollLeft) - s
                }
            };
            m.getElementByPoint = function(t, e) {
                var r = this,
                    i = r.canvas,
                    n = k.doc.elementFromPoint(t, e);
                if (k.win.opera && "svg" == n.tagName) {
                    var a = Ht(i),
                        s = i.createSVGRect();
                    s.x = t - a.x, s.y = e - a.y, s.width = s.height = 1;
                    var o = i.getIntersectionList(s, null);
                    o.length && (n = o[o.length - 1])
                }
                if (!n) return null;
                for (; n.parentNode && n != i.parentNode && !n.raphael;) n = n.parentNode;
                return n == r.canvas.parentNode && (n = i), n = n && n.raphael ? r.getById(n.raphaelid) : null
            }, m.getById = function(t) {
                for (var e = this.bottom; e;) {
                    if (e.id == t) return e;
                    e = e.next
                }
                return null
            }, m.forEach = function(t, e) {
                for (var r = this.bottom; r;) {
                    if (!1 === t.call(e, r)) return this;
                    r = r.next
                }
                return this
            }, m.getElementsByPoint = function(t, e) {
                var r = this.set();
                return this.forEach(function(i) {
                    i.isPointInside(t, e) && r.push(i)
                }), r
            }, Gt.isPointInside = function(e, r) {
                var i = this.realPath = this.realPath || lt[this.type](this);
                return t.isPointInsidePath(i, e, r)
            }, Gt.getBBox = function(t) {
                if (this.removed) return {};
                var e = this._;
                return t ? (!e.dirty && e.bboxwt || (this.realPath = lt[this.type](this), e.bboxwt = mt(this.realPath), e.bboxwt.toString = p, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = lt[this.type](this)), e.bbox = mt(ht(this.realPath, this.matrix)), e.bbox.toString = p, e.dirty = e.dirtyT = 0), e.bbox)
            }, Gt.clone = function() {
                if (this.removed) return null;
                var t = this.paper[this.type]().attr(this.attr());
                return this.__set__ && this.__set__.push(t), t
            }, Gt.glow = function(t) {
                if ("text" == this.type) return null;
                var e = {
                    width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1),
                    fill: t.fill || !1,
                    opacity: t.opacity || .5,
                    offsetx: t.offsetx || 0,
                    offsety: t.offsety || 0,
                    color: t.color || "#000"
                },
                    r = e.width / 2,
                    i = this.paper,
                    n = i.set(),
                    a = this.realPath || lt[this.type](this);
                a = this.matrix ? ht(a, this.matrix) : a;
                for (var s = 1; s < r + 1; s++) n.push(i.path(a).attr({
                    stroke: e.color,
                    fill: e.fill ? e.color : "none",
                    "stroke-linejoin": "round",
                    "stroke-linecap": "round",
                    "stroke-width": +(e.width / r * s).toFixed(3),
                    opacity: +(e.opacity / r).toFixed(3)
                }));
                return n.insertBefore(this).translate(e.offsetx, e.offsety)
            };
            var Xt = function(e, r, i, n, a, s, h, u, c) {
                return null == c ? o(e, r, i, n, a, s, h, u) : t.findDotsAtSegment(e, r, i, n, a, s, h, u, l(e, r, i, n, a, s, h, u, c))
            },
                Ut = function(e, r) {
                    return function(i, n, a) {
                        for (var s, o, l, h, u, c = "", f = {}, p = 0, d = 0, g = (i = At(i)).length; d < g; d++) {
                            if ("M" == (l = i[d])[0]) s = +l[1], o = +l[2];
                            else {
                                if (h = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6]), p + h > n) {
                                    if (r && !f.start) {
                                        if (u = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p), c += ["C" + u.start.x, u.start.y, u.m.x, u.m.y, u.x, u.y], a) return c;
                                        f.start = c, c = ["M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, l[5], l[6]].join(), p += h, s = +l[5], o = +l[6];
                                        continue
                                    }
                                    if (!e && !r) return u = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p), {
                                        x: u.x,
                                        y: u.y,
                                        alpha: u.alpha
                                    }
                                }
                                p += h, s = +l[5], o = +l[6]
                            }
                            c += l.shift() + l
                        }
                        return f.end = c, (u = e ? p : r ? f : t.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1)).alpha && (u = {
                            x: u.x,
                            y: u.y,
                            alpha: u.alpha
                        }), u
                    }
                },
                $t = Ut(1),
                Zt = Ut(),
                Qt = Ut(0, 1);
            t.getTotalLength = $t, t.getPointAtLength = Zt, t.getSubpath = function(t, e, r) {
                if (this.getTotalLength(t) - r < 1e-6) return Qt(t, e).end;
                var i = Qt(t, r, 1);
                return e ? Qt(i, e).end : i
            }, Gt.getTotalLength = function() {
                if ("path" == this.type) return this.node.getTotalLength ? this.node.getTotalLength() : $t(this.attrs.path)
            }, Gt.getPointAtLength = function(t) {
                if ("path" == this.type) return Zt(this.attrs.path, t)
            }, Gt.getSubpath = function(e, r) {
                if ("path" == this.type) return t.getSubpath(this.attrs.path, e, r)
            };
            var Jt = t.easing_formulas = {
                linear: function(t) {
                    return t
                },
                "<": function(t) {
                    return D(t, 1.7)
                },
                ">": function(t) {
                    return D(t, .48)
                },
                "<>": function(t) {
                    var e = .48 - t / 1.04,
                        r = P.sqrt(.1734 + e * e),
                        i = r - e,
                        n = -r - e,
                        a = D(q(i), 1 / 3) * (i < 0 ? -1 : 1) + D(q(n), 1 / 3) * (n < 0 ? -1 : 1) + .5;
                    return 3 * (1 - a) * a * a + a * a * a
                },
                backIn: function(t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                backOut: function(t) {
                    var e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                },
                elastic: function(t) {
                    return t == !!t ? t : D(2, -10 * t) * P.sin(2 * V * (t - .075) / .3) + 1
                },
                bounce: function(t) {
                    var e = 7.5625,
                        r = 2.75;
                    return t < 1 / r ? e * t * t : t < 2 / r ? e * (t -= 1.5 / r) * t + .75 : t < 2.5 / r ? e * (t -= 2.25 / r) * t + .9375 : e * (t -= 2.625 / r) * t + .984375
                }
            };
            Jt.easeIn = Jt["ease-in"] = Jt["<"], Jt.easeOut = Jt["ease-out"] = Jt[">"], Jt.easeInOut = Jt["ease-in-out"] = Jt["<>"], Jt["back-in"] = Jt.backIn, Jt["back-out"] = Jt.backOut;
            var Kt = [],
                te = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 16)
                },
                ee = function() {
                    for (var e = +new Date, r = 0; r < Kt.length; r++) {
                        var i = Kt[r];
                        if (!i.el.removed && !i.paused) {
                            var n, a, s = e - i.start,
                                o = i.ms,
                                l = i.easing,
                                h = i.from,
                                u = i.diff,
                                c = i.to,
                                f = (i.t, i.el),
                                p = {},
                                d = {};
                            if (i.initstatus ? (s = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * o, i.status = i.initstatus, delete i.initstatus, i.stop && Kt.splice(r--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (s / o)) / i.anim.top, !(s < 0))
                                if (s < o) {
                                    var g = l(s / o);
                                    for (var x in h)
                                        if (h[w](x)) {
                                            switch (J[x]) {
                                                case O:
                                                    n = +h[x] + g * o * u[x];
                                                    break;
                                                case "colour":
                                                    n = "rgb(" + [re(X(h[x].r + g * o * u[x].r)), re(X(h[x].g + g * o * u[x].g)), re(X(h[x].b + g * o * u[x].b))].join(",") + ")";
                                                    break;
                                                case "path":
                                                    n = [];
                                                    for (var y = 0, m = h[x].length; y < m; y++) {
                                                        n[y] = [h[x][y][0]];
                                                        for (var b = 1, _ = h[x][y].length; b < _; b++) n[y][b] = +h[x][y][b] + g * o * u[x][y][b];
                                                        n[y] = n[y].join(z)
                                                    }
                                                    n = n.join(z);
                                                    break;
                                                case "transform":
                                                    if (u[x].real)
                                                        for (n = [], y = 0, m = h[x].length; y < m; y++)
                                                            for (n[y] = [h[x][y][0]], b = 1, _ = h[x][y].length; b < _; b++) n[y][b] = h[x][y][b] + g * o * u[x][y][b];
                                                    else {
                                                        var k = function(t) {
                                                            return +h[x][t] + g * o * u[x][t]
                                                        };
                                                        n = [
                                                            ["m", k(0), k(1), k(2), k(3), k(4), k(5)]
                                                        ]
                                                    }
                                                    break;
                                                case "csv":
                                                    if ("clip-rect" == x)
                                                        for (n = [], y = 4; y--;) n[y] = +h[x][y] + g * o * u[x][y];
                                                    break;
                                                default:
                                                    var C = [][T](h[x]);
                                                    for (n = [], y = f.paper.customAttributes[x].length; y--;) n[y] = +C[y] + g * o * u[x][y]
                                                        }
                                            p[x] = n
                                        }
                                    f.attr(p),
                                        function(t, e, r) {
                                        setTimeout(function() {
                                            eve("raphael.anim.frame." + t, e, r)
                                        })
                                    }(f.id, f, i.anim)
                                } else {
                                    if (function(e, r, i) {
                                        setTimeout(function() {
                                            eve("raphael.anim.frame." + r.id, r, i), eve("raphael.anim.finish." + r.id, r, i), t.is(e, "function") && e.call(r)
                                        })
                                    }(i.callback, f, i.anim), f.attr(c), Kt.splice(r--, 1), i.repeat > 1 && !i.next) {
                                        for (a in c) c[w](a) && (d[a] = i.totalOrigin[a]);
                                        i.el.attr(d), v(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1)
                                    }
                                    i.next && !i.stop && v(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat)
                                }
                        }
                    }
                    t.svg && f && f.paper && f.paper.safari(), Kt.length && te(ee)
                },
                re = function(t) {
                    return t > 255 ? 255 : t < 0 ? 0 : t
                };
            Gt.animateWith = function(e, r, i, n, a, s) {
                var o = this;
                if (o.removed) return s && s.call(o), o;
                var l = i instanceof g ? i : t.animation(i, n, a, s);
                v(l, o, l.percents[0], null, o.attr());
                for (var h = 0, u = Kt.length; h < u; h++)
                    if (Kt[h].anim == r && Kt[h].el == e) {
                        Kt[u - 1].start = Kt[h].start;
                        break
                    }
                return o
            }, Gt.onAnimation = function(t) {
                return t ? eve.on("raphael.anim.frame." + this.id, t) : eve.unbind("raphael.anim.frame." + this.id), this
            }, g.prototype.delay = function(t) {
                var e = new g(this.anim, this.ms);
                return e.times = this.times, e.del = +t || 0, e
            }, g.prototype.repeat = function(t) {
                var e = new g(this.anim, this.ms);
                return e.del = this.del, e.times = P.floor(I(t, 0)) || 1, e
            }, t.animation = function(e, r, i, n) {
                if (e instanceof g) return e;
                !t.is(i, "function") && i || (n = n || i || null, i = null), e = Object(e), r = +r || 0;
                var a, s, o = {};
                for (s in e) e[w](s) && U(s) != s && U(s) + "%" != s && (a = !0, o[s] = e[s]);
                return a ? (i && (o.easing = i), n && (o.callback = n), new g({
                    100: o
                }, r)) : new g(e, r)
            }, Gt.animate = function(e, r, i, n) {
                var a = this;
                if (a.removed) return n && n.call(a), a;
                var s = e instanceof g ? e : t.animation(e, r, i, n);
                return v(s, a, s.percents[0], null, a.attr()), a
            }, Gt.setTime = function(t, e) {
                return t && null != e && this.status(t, j(e, t.ms) / t.ms), this
            }, Gt.status = function(t, e) {
                var r, i, n = [],
                    a = 0;
                if (null != e) return v(t, this, -1, j(e, 1)), this;
                for (r = Kt.length; a < r; a++)
                    if ((i = Kt[a]).el.id == this.id && (!t || i.anim == t)) {
                        if (t) return i.status;
                        n.push({
                            anim: i.anim,
                            status: i.status
                        })
                    }
                return t ? 0 : n
            }, Gt.pause = function(t) {
                for (var e = 0; e < Kt.length; e++) Kt[e].el.id != this.id || t && Kt[e].anim != t || !1 !== eve("raphael.anim.pause." + this.id, this, Kt[e].anim) && (Kt[e].paused = !0);
                return this
            }, Gt.resume = function(t) {
                for (var e = 0; e < Kt.length; e++)
                    if (Kt[e].el.id == this.id && (!t || Kt[e].anim == t)) {
                        var r = Kt[e];
                        !1 !== eve("raphael.anim.resume." + this.id, this, r.anim) && (delete r.paused, this.status(r.anim, r.status))
                    }
                return this
            }, Gt.stop = function(t) {
                for (var e = 0; e < Kt.length; e++) Kt[e].el.id != this.id || t && Kt[e].anim != t || !1 !== eve("raphael.anim.stop." + this.id, this, Kt[e].anim) && Kt.splice(e--, 1);
                return this
            }, eve.on("raphael.remove", x), eve.on("raphael.clear", x), Gt.toString = function() {
                return "Raphaël’s object"
            };
            var ie = function(t) {
                if (this.items = [], this.length = 0, this.type = "set", t)
                    for (var e = 0, r = t.length; e < r; e++) !t[e] || t[e].constructor != Gt.constructor && t[e].constructor != ie || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
            },
                ne = ie.prototype;
            ne.push = function() {
                for (var t, e, r = 0, i = arguments.length; r < i; r++) !(t = arguments[r]) || t.constructor != Gt.constructor && t.constructor != ie || (this[e = this.items.length] = this.items[e] = t, this.length++);
                return this
            }, ne.pop = function() {
                return this.length && delete this[this.length--], this.items.pop()
            }, ne.forEach = function(t, e) {
                for (var r = 0, i = this.items.length; r < i; r++)
                    if (!1 === t.call(e, this.items[r], r)) return this;
                return this
            };
            for (var ae in Gt) Gt[w](ae) && (ne[ae] = function(t) {
                return function() {
                    var e = arguments;
                    return this.forEach(function(r) {
                        r[t][S](r, e)
                    })
                }
            }(ae));
            ne.attr = function(e, r) {
                if (e && t.is(e, G) && t.is(e[0], "object"))
                    for (var i = 0, n = e.length; i < n; i++) this.items[i].attr(e[i]);
                else
                    for (var a = 0, s = this.items.length; a < s; a++) this.items[a].attr(e, r);
                return this
            }, ne.clear = function() {
                for (; this.length;) this.pop()
            }, ne.splice = function(t, e, r) {
                t = t < 0 ? I(this.length + t, 0) : t, e = I(0, j(this.length - t, e));
                var i, n = [],
                    a = [],
                    s = [];
                for (i = 2; i < arguments.length; i++) s.push(arguments[i]);
                for (i = 0; i < e; i++) a.push(this[t + i]);
                for (; i < this.length - t; i++) n.push(this[t + i]);
                var o = s.length;
                for (i = 0; i < o + n.length; i++) this.items[t + i] = this[t + i] = i < o ? s[i] : n[i - o];
                for (i = this.items.length = this.length -= e - o; this[i];) delete this[i++];
                return new ie(a)
            }, ne.exclude = function(t) {
                for (var e = 0, r = this.length; e < r; e++)
                    if (this[e] == t) return this.splice(e, 1), !0
            }, ne.animate = function(e, r, i, n) {
                (t.is(i, "function") || !i) && (n = i || null);
                var a, s, o = this.items.length,
                    l = o,
                    h = this;
                if (!o) return this;
                n && (s = function() {
                    !--o && n.call(h)
                }), i = t.is(i, "string") ? i : s;
                var u = t.animation(e, r, i, s);
                for (a = this.items[--l].animate(u); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(a, u, u);
                return this
            }, ne.insertAfter = function(t) {
                for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                return this
            }, ne.getBBox = function() {
                for (var t = [], e = [], r = [], i = [], n = this.items.length; n--;)
                    if (!this.items[n].removed) {
                        var a = this.items[n].getBBox();
                        t.push(a.x), e.push(a.y), r.push(a.x + a.width), i.push(a.y + a.height)
                    }
                return t = j[S](0, t), e = j[S](0, e), r = I[S](0, r), i = I[S](0, i), {
                    x: t,
                    y: e,
                    x2: r,
                    y2: i,
                    width: r - t,
                    height: i - e
                }
            }, ne.clone = function(t) {
                t = new ie;
                for (var e = 0, r = this.items.length; e < r; e++) t.push(this.items[e].clone());
                return t
            }, ne.toString = function() {
                return "Raphaël‘s set"
            }, t.registerFont = function(t) {
                if (!t.face) return t;
                this.fonts = this.fonts || {};
                var e = {
                    w: t.w,
                    face: {},
                    glyphs: {}
                },
                    r = t.face["font-family"];
                for (var i in t.face) t.face[w](i) && (e.face[i] = t.face[i]);
                if (this.fonts[r] ? this.fonts[r].push(e) : this.fonts[r] = [e], !t.svg) {
                    e.face["units-per-em"] = $(t.face["units-per-em"], 10);
                    for (var n in t.glyphs)
                        if (t.glyphs[w](n)) {
                            var a = t.glyphs[n];
                            if (e.glyphs[n] = {
                                w: a.w,
                                k: {},
                                d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function(t) {
                                    return {
                                        l: "L",
                                        c: "C",
                                        x: "z",
                                        t: "m",
                                        r: "l",
                                        v: "c"
                                    }[t] || "M"
                                }) + "z"
                            }, a.k)
                                for (var s in a.k) a[w](s) && (e.glyphs[n].k[s] = a.k[s])
                        }
                }
                return t
            }, m.getFont = function(e, r, i, n) {
                if (n = n || "normal", i = i || "normal", r = +r || {
                    normal: 400,
                    bold: 700,
                    lighter: 300,
                    bolder: 800
                }[r] || 400, t.fonts) {
                    var a = t.fonts[e];
                    if (!a) {
                        var s = new RegExp("(^|\\s)" + e.replace(/[^\w\d\s+!~.:_-]/g, N) + "(\\s|$)", "i");
                        for (var o in t.fonts)
                            if (t.fonts[w](o) && s.test(o)) {
                                a = t.fonts[o];
                                break
                            }
                    }
                    var l;
                    if (a)
                        for (var h = 0, u = a.length; h < u && ((l = a[h]).face["font-weight"] != r || l.face["font-style"] != i && l.face["font-style"] || l.face["font-stretch"] != n); h++);
                    return l
                }
            }, m.print = function(e, r, i, n, a, s, o) {
                s = s || "middle", o = I(j(o || 0, 1), -1);
                var l, h = L(i)[M](N),
                    u = 0,
                    c = 0,
                    f = N;
                if (t.is(n, i) && (n = this.getFont(n)), n) {
                    l = (a || 16) / n.face["units-per-em"];
                    for (var p = n.face.bbox[M](b), d = +p[0], g = p[3] - p[1], v = 0, x = +p[1] + ("baseline" == s ? g + +n.face.descent : g / 2), y = 0, m = h.length; y < m; y++) {
                        if ("\n" == h[y]) u = 0, w = 0, c = 0, v += g;
                        else {
                            var _ = c && n.glyphs[h[y - 1]] || {},
                                w = n.glyphs[h[y]];
                            u += c ? (_.w || n.w) + (_.k && _.k[h[y]] || 0) + n.w * o : 0, c = 1
                        }
                        w && w.d && (f += t.transformPath(w.d, ["t", u * l, v * l, "s", l, l, d, x, "t", (e - d) / l, (r - x) / l]))
                    }
                }
                return this.path(f).attr({
                    fill: "#000",
                    stroke: "none"
                })
            }, m.add = function(e) {
                if (t.is(e, "array"))
                    for (var r, i = this.set(), n = 0, a = e.length; n < a; n++) r = e[n] || {}, _[w](r.type) && i.push(this[r.type]().attr(r));
                return i
            }, t.format = function(e, r) {
                var i = t.is(r, G) ? [0][T](r) : arguments;
                return e && t.is(e, "string") && i.length - 1 && (e = e.replace(/\{(\d+)\}/g, function(t, e) {
                    return null == i[++e] ? N : i[e]
                })), e || N
            }, t.fullfill = function() {
                var t = function(t, e, r) {
                    var i = r;
                    return e.replace(/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, e, r, n, a) {
                        e = e || n, i && (e in i && (i = i[e]), "function" == typeof i && a && (i = i()))
                    }), i = (null == i || i == r ? t : i) + ""
                };
                return function(e, r) {
                    return String(e).replace(/\{([^\}]+)\}/g, function(e, i) {
                        return t(e, i, r)
                    })
                }
            }(), t.ninja = function() {
                return C.was ? k.win.Raphael = C.is : delete Raphael, t
            }, t.st = ne,
                function(e, r, i) {
                function n() {
                    /in/.test(e.readyState) ? setTimeout(n, 9) : t.eve("raphael.DOMload")
                }
                null == e.readyState && e.addEventListener && (e.addEventListener("DOMContentLoaded", i = function() {
                    e.removeEventListener("DOMContentLoaded", i, !1), e.readyState = "complete"
                }, !1), e.readyState = "loading"), n()
            }(document), C.was ? k.win.Raphael = t : Raphael = t, eve.on("raphael.DOMload", function() {
                y = !0
            })
        }(), window.Raphael.svg && function(t) {
            var e = "hasOwnProperty",
                r = String,
                i = parseFloat,
                n = parseInt,
                a = Math,
                s = a.max,
                o = a.abs,
                l = a.pow,
                h = t.eve,
                u = "",
                c = " ",
                f = "http://www.w3.org/1999/xlink",
                p = {
                    block: "M5,0 0,2.5 5,5z",
                    classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                    diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                    open: "M6,1 1,3.5 6,6",
                    oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                },
                d = {};
            t.toString = function() {
                return "Your browser supports SVG.\nYou are running Raphaël " + this.version
            };
            var g = function(i, n) {
                if (n) {
                    "string" == typeof i && (i = g(i));
                    for (var a in n) n[e](a) && ("xlink:" == a.substring(0, 6) ? i.setAttributeNS(f, a.substring(6), r(n[a])) : i.setAttribute(a, r(n[a])))
                } else(i = t._g.doc.createElementNS("http://www.w3.org/2000/svg", i)).style && (i.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return i
            },
                v = function(e, n) {
                    var h = "linear",
                        c = e.id + n,
                        f = .5,
                        p = .5,
                        d = e.node,
                        v = e.paper,
                        x = d.style,
                        y = t._g.doc.getElementById(c);
                    if (!y) {
                        if (n = r(n).replace(t._radial_gradient, function(t, e, r) {
                            if (h = "radial", e && r) {
                                f = i(e);
                                var n = 2 * ((p = i(r)) > .5) - 1;
                                l(f - .5, 2) + l(p - .5, 2) > .25 && (p = a.sqrt(.25 - l(f - .5, 2)) * n + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * n)
                            }
                            return u
                        }), n = n.split(/\s*\-\s*/), "linear" == h) {
                            var m = n.shift();
                            if (m = -i(m), isNaN(m)) return null;
                            var b = [0, 0, a.cos(t.rad(m)), a.sin(t.rad(m))],
                                _ = 1 / (s(o(b[2]), o(b[3])) || 1);
                            b[2] *= _, b[3] *= _, b[2] < 0 && (b[0] = -b[2], b[2] = 0), b[3] < 0 && (b[1] = -b[3], b[3] = 0)
                        }
                        var w = t._parseDots(n);
                        if (!w) return null;
                        if (c = c.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && c != e.gradient.id && (v.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) {
                            y = g(h + "Gradient", {
                                id: c
                            }), e.gradient = y, g(y, "radial" == h ? {
                                fx: f,
                                fy: p
                            } : {
                                x1: b[0],
                                y1: b[1],
                                x2: b[2],
                                y2: b[3],
                                gradientTransform: e.matrix.invert()
                            }), v.defs.appendChild(y);
                            for (var k = 0, C = w.length; k < C; k++) y.appendChild(g("stop", {
                                offset: w[k].offset ? w[k].offset : k ? "100%" : "0%",
                                "stop-color": w[k].color || "#fff"
                            }))
                        }
                    }
                    return g(d, {
                        fill: "url(#" + c + ")",
                        opacity: 1,
                        "fill-opacity": 1
                    }), x.fill = u, x.opacity = 1, x.fillOpacity = 1, 1
                },
                x = function(t) {
                    var e = t.getBBox(1);
                    g(t.pattern, {
                        patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                    })
                },
                y = function(i, n, a) {
                    if ("path" == i.type) {
                        for (var s, o, l, h, c, f = r(n).toLowerCase().split("-"), v = i.paper, x = a ? "end" : "start", y = i.node, m = i.attrs, b = m["stroke-width"], _ = f.length, w = "classic", k = 3, C = 3, B = 5; _--;) switch (f[_]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                w = f[_];
                                break;
                            case "wide":
                                C = 5;
                                break;
                            case "narrow":
                                C = 2;
                                break;
                            case "long":
                                k = 5;
                                break;
                            case "short":
                                k = 2
                    }
                        if ("open" == w ? (k += 2, C += 2, B += 2, l = 1, h = a ? 4 : 1, c = {
                            fill: "none",
                            stroke: m.stroke
                        }) : (h = l = k / 2, c = {
                            fill: m.stroke,
                            stroke: "none"
                        }), i._.arrows ? a ? (i._.arrows.endPath && d[i._.arrows.endPath]--, i._.arrows.endMarker && d[i._.arrows.endMarker]--) : (i._.arrows.startPath && d[i._.arrows.startPath]--, i._.arrows.startMarker && d[i._.arrows.startMarker]--) : i._.arrows = {}, "none" != w) {
                            var S = "raphael-marker-" + w,
                                T = "raphael-marker-" + x + w + k + C;
                            t._g.doc.getElementById(S) ? d[S]++ : (v.defs.appendChild(g(g("path"), {
                                "stroke-linecap": "round",
                                d: p[w],
                                id: S
                            })), d[S] = 1);
                            var A, N = t._g.doc.getElementById(T);
                            N ? (d[T]++, A = N.getElementsByTagName("use")[0]) : (N = g(g("marker"), {
                                id: T,
                                markerHeight: C,
                                markerWidth: k,
                                orient: "auto",
                                refX: h,
                                refY: C / 2
                            }), A = g(g("use"), {
                                "xlink:href": "#" + S,
                                transform: (a ? "rotate(180 " + k / 2 + " " + C / 2 + ") " : u) + "scale(" + k / B + "," + C / B + ")",
                                "stroke-width": (1 / ((k / B + C / B) / 2)).toFixed(4)
                            }), N.appendChild(A), v.defs.appendChild(N), d[T] = 1), g(A, c);
                            var z = l * ("diamond" != w && "oval" != w);
                            a ? (s = i._.arrows.startdx * b || 0, o = t.getTotalLength(m.path) - z * b) : (s = z * b, o = t.getTotalLength(m.path) - (i._.arrows.enddx * b || 0)), (c = {})["marker-" + x] = "url(#" + T + ")", (o || s) && (c.d = Raphael.getSubpath(m.path, s, o)), g(y, c), i._.arrows[x + "Path"] = S, i._.arrows[x + "Marker"] = T, i._.arrows[x + "dx"] = z, i._.arrows[x + "Type"] = w, i._.arrows[x + "String"] = n
                        } else a ? (s = i._.arrows.startdx * b || 0, o = t.getTotalLength(m.path) - s) : (s = 0, o = t.getTotalLength(m.path) - (i._.arrows.enddx * b || 0)), i._.arrows[x + "Path"] && g(y, {
                            d: Raphael.getSubpath(m.path, s, o)
                        }), delete i._.arrows[x + "Path"], delete i._.arrows[x + "Marker"], delete i._.arrows[x + "dx"], delete i._.arrows[x + "Type"], delete i._.arrows[x + "String"];
                        for (c in d)
                            if (d[e](c) && !d[c]) {
                                var L = t._g.doc.getElementById(c);
                                L && L.parentNode.removeChild(L)
                            }
                    }
                },
                m = {
                    "": [0],
                    none: [0],
                    "-": [3, 1],
                    ".": [1, 1],
                    "-.": [3, 1, 1, 1],
                    "-..": [3, 1, 1, 1, 1, 1],
                    ". ": [1, 3],
                    "- ": [4, 3],
                    "--": [8, 3],
                    "- .": [4, 3, 1, 3],
                    "--.": [8, 3, 1, 3],
                    "--..": [8, 3, 1, 3, 1, 3]
                },
                b = function(t, e, i) {
                    if (e = m[r(e).toLowerCase()]) {
                        for (var n = t.attrs["stroke-width"] || "1", a = {
                            round: n,
                            square: n,
                            butt: 0
                        }[t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, s = [], o = e.length; o--;) s[o] = e[o] * n + (o % 2 ? 1 : -1) * a;
                        g(t.node, {
                            "stroke-dasharray": s.join(",")
                        })
                    }
                },
                _ = function(i, a) {
                    var l = i.node,
                        h = i.attrs,
                        c = l.style.visibility;
                    l.style.visibility = "hidden";
                    for (var p in a)
                        if (a[e](p)) {
                            if (!t._availableAttrs[e](p)) continue;
                            var d = a[p];
                            switch (h[p] = d, p) {
                                case "blur":
                                    i.blur(d);
                                    break;
                                case "href":
                                case "title":
                                case "target":
                                    var m = l.parentNode;
                                    if ("a" != m.tagName.toLowerCase()) {
                                        var _ = g("a");
                                        m.insertBefore(_, l), _.appendChild(l), m = _
                                    }
                                    "target" == p ? m.setAttributeNS(f, "show", "blank" == d ? "new" : d) : m.setAttributeNS(f, p, d);
                                    break;
                                case "cursor":
                                    l.style.cursor = d;
                                    break;
                                case "transform":
                                    i.transform(d);
                                    break;
                                case "arrow-start":
                                    y(i, d);
                                    break;
                                case "arrow-end":
                                    y(i, d, 1);
                                    break;
                                case "clip-rect":
                                    var k = r(d).split(/[, ]+/);
                                    if (4 == k.length) {
                                        i.clip && i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);
                                        var C = g("clipPath"),
                                            B = g("rect");
                                        C.id = t.createUUID(), g(B, {
                                            x: k[0],
                                            y: k[1],
                                            width: k[2],
                                            height: k[3]
                                        }), C.appendChild(B), i.paper.defs.appendChild(C), g(l, {
                                            "clip-path": "url(#" + C.id + ")"
                                        }), i.clip = B
                                    }
                                    if (!d) {
                                        var S = l.getAttribute("clip-path");
                                        if (S) {
                                            var T = t._g.doc.getElementById(S.replace(/(^url\(#|\)$)/g, u));
                                            T && T.parentNode.removeChild(T), g(l, {
                                                "clip-path": u
                                            }), delete i.clip
                                        }
                                    }
                                    break;
                                case "path":
                                    "path" == i.type && (g(l, {
                                        d: d ? h.path = t._pathToAbsolute(d) : "M0,0"
                                    }), i._.dirty = 1, i._.arrows && ("startString" in i._.arrows && y(i, i._.arrows.startString), "endString" in i._.arrows && y(i, i._.arrows.endString, 1)));
                                    break;
                                case "width":
                                    if (l.setAttribute(p, d), i._.dirty = 1, !h.fx) break;
                                    p = "x", d = h.x;
                                case "x":
                                    h.fx && (d = -h.x - (h.width || 0));
                                case "rx":
                                    if ("rx" == p && "rect" == i.type) break;
                                case "cx":
                                    l.setAttribute(p, d), i.pattern && x(i), i._.dirty = 1;
                                    break;
                                case "height":
                                    if (l.setAttribute(p, d), i._.dirty = 1, !h.fy) break;
                                    p = "y", d = h.y;
                                case "y":
                                    h.fy && (d = -h.y - (h.height || 0));
                                case "ry":
                                    if ("ry" == p && "rect" == i.type) break;
                                case "cy":
                                    l.setAttribute(p, d), i.pattern && x(i), i._.dirty = 1;
                                    break;
                                case "r":
                                    "rect" == i.type ? g(l, {
                                        rx: d,
                                        ry: d
                                    }) : l.setAttribute(p, d), i._.dirty = 1;
                                    break;
                                case "src":
                                    "image" == i.type && l.setAttributeNS(f, "href", d);
                                    break;
                                case "stroke-width":
                                    1 == i._.sx && 1 == i._.sy || (d /= s(o(i._.sx), o(i._.sy)) || 1), i.paper._vbSize && (d *= i.paper._vbSize), l.setAttribute(p, d), h["stroke-dasharray"] && b(i, h["stroke-dasharray"], a), i._.arrows && ("startString" in i._.arrows && y(i, i._.arrows.startString), "endString" in i._.arrows && y(i, i._.arrows.endString, 1));
                                    break;
                                case "stroke-dasharray":
                                    b(i, d, a);
                                    break;
                                case "fill":
                                    var A = r(d).match(t._ISURL);
                                    if (A) {
                                        C = g("pattern");
                                        var N = g("image");
                                        C.id = t.createUUID(), g(C, {
                                            x: 0,
                                            y: 0,
                                            patternUnits: "userSpaceOnUse",
                                            height: 1,
                                            width: 1
                                        }), g(N, {
                                            x: 0,
                                            y: 0,
                                            "xlink:href": A[1]
                                        }), C.appendChild(N),
                                            function(e) {
                                            t._preload(A[1], function() {
                                                var t = this.offsetWidth,
                                                    r = this.offsetHeight;
                                                g(e, {
                                                    width: t,
                                                    height: r
                                                }), g(N, {
                                                    width: t,
                                                    height: r
                                                }), i.paper.safari()
                                            })
                                        }(C), i.paper.defs.appendChild(C), g(l, {
                                            fill: "url(#" + C.id + ")"
                                        }), i.pattern = C, i.pattern && x(i);
                                        break
                                    }
                                    var z = t.getRGB(d);
                                    if (z.error) {
                                        if (("circle" == i.type || "ellipse" == i.type || "r" != r(d).charAt()) && v(i, d)) {
                                            if ("opacity" in h || "fill-opacity" in h) {
                                                var L = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u));
                                                if (L) {
                                                    var M = L.getElementsByTagName("stop");
                                                    g(M[M.length - 1], {
                                                        "stop-opacity": ("opacity" in h ? h.opacity : 1) * ("fill-opacity" in h ? h["fill-opacity"] : 1)
                                                    })
                                                }
                                            }
                                            h.gradient = d, h.fill = "none";
                                            break
                                        }
                                    } else delete a.gradient, delete h.gradient, !t.is(h.opacity, "undefined") && t.is(a.opacity, "undefined") && g(l, {
                                        opacity: h.opacity
                                    }), !t.is(h["fill-opacity"], "undefined") && t.is(a["fill-opacity"], "undefined") && g(l, {
                                        "fill-opacity": h["fill-opacity"]
                                    });
                                    z[e]("opacity") && g(l, {
                                        "fill-opacity": z.opacity > 1 ? z.opacity / 100 : z.opacity
                                    });
                                case "stroke":
                                    z = t.getRGB(d), l.setAttribute(p, z.hex), "stroke" == p && z[e]("opacity") && g(l, {
                                        "stroke-opacity": z.opacity > 1 ? z.opacity / 100 : z.opacity
                                    }), "stroke" == p && i._.arrows && ("startString" in i._.arrows && y(i, i._.arrows.startString), "endString" in i._.arrows && y(i, i._.arrows.endString, 1));
                                    break;
                                case "gradient":
                                    ("circle" == i.type || "ellipse" == i.type || "r" != r(d).charAt()) && v(i, d);
                                    break;
                                case "opacity":
                                    h.gradient && !h[e]("stroke-opacity") && g(l, {
                                        "stroke-opacity": d > 1 ? d / 100 : d
                                    });
                                case "fill-opacity":
                                    if (h.gradient) {
                                        (L = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u))) && (M = L.getElementsByTagName("stop"), g(M[M.length - 1], {
                                            "stop-opacity": d
                                        }));
                                        break
                                    }
                                default:
                                    "font-size" == p && (d = n(d, 10) + "px");
                                    var E = p.replace(/(\-.)/g, function(t) {
                                        return t.substring(1).toUpperCase()
                                    });
                                    l.style[E] = d, i._.dirty = 1, l.setAttribute(p, d)
                                               }
                        }
                    w(i, a), l.style.visibility = c
                },
                w = function(i, a) {
                    if ("text" == i.type && (a[e]("text") || a[e]("font") || a[e]("font-size") || a[e]("x") || a[e]("y"))) {
                        var s = i.attrs,
                            o = i.node,
                            l = o.firstChild ? n(t._g.doc.defaultView.getComputedStyle(o.firstChild, u).getPropertyValue("font-size"), 10) : 10;
                        if (a[e]("text")) {
                            for (s.text = a.text; o.firstChild;) o.removeChild(o.firstChild);
                            for (var h, c = r(a.text).split("\n"), f = [], p = 0, d = c.length; p < d; p++) h = g("tspan"), p && g(h, {
                                dy: 1.2 * l,
                                x: s.x
                            }), h.appendChild(t._g.doc.createTextNode(c[p])), o.appendChild(h), f[p] = h
                        } else
                            for (p = 0, d = (f = o.getElementsByTagName("tspan")).length; p < d; p++) p ? g(f[p], {
                                dy: 1.2 * l,
                                x: s.x
                            }) : g(f[0], {
                                dy: 0
                            });
                        g(o, {
                            x: s.x,
                            y: s.y
                        }), i._.dirty = 1;
                        var v = i._getBBox(),
                            x = s.y - (v.y + v.height / 2);
                        x && t.is(x, "finite") && g(f[0], {
                            dy: x
                        })
                    }
                },
                k = function(e, r) {
                    this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = r, this.attrs = this.attrs || {}, this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        deg: 0,
                        dx: 0,
                        dy: 0,
                        dirty: 1
                    }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null
                },
                C = t.el;
            k.prototype = C, C.constructor = k, t._engine.path = function(t, e) {
                var r = g("path");
                e.canvas && e.canvas.appendChild(r);
                var i = new k(r, e);
                return i.type = "path", _(i, {
                    fill: "none",
                    stroke: "#000",
                    path: t
                }), i
            }, C.rotate = function(t, e, n) {
                if (this.removed) return this;
                if ((t = r(t).split(/[, ]+/)).length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) {
                    var a = this.getBBox(1);
                    e = a.x + a.width / 2, n = a.y + a.height / 2
                }
                return this.transform(this._.transform.concat([
                    ["r", t, e, n]
                ])), this
            }, C.scale = function(t, e, n, a) {
                if (this.removed) return this;
                if ((t = r(t).split(/[, ]+/)).length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3])), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1);
                return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([
                    ["s", t, e, n, a]
                ])), this
            }, C.translate = function(t, e) {
                return this.removed ? this : ((t = r(t).split(/[, ]+/)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
                    ["t", t, e]
                ])), this)
            }, C.transform = function(r) {
                var i = this._;
                if (null == r) return i.transform;
                if (t._extractTransform(this, r), this.clip && g(this.clip, {
                    transform: this.matrix.invert()
                }), this.pattern && x(this), this.node && g(this.node, {
                    transform: this.matrix
                }), 1 != i.sx || 1 != i.sy) {
                    var n = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
                    this.attr({
                        "stroke-width": n
                    })
                }
                return this
            }, C.hide = function() {
                return !this.removed && this.paper.safari(this.node.style.display = "none"), this
            }, C.show = function() {
                return !this.removed && this.paper.safari(this.node.style.display = ""), this
            }, C.remove = function() {
                if (!this.removed && this.node.parentNode) {
                    var e = this.paper;
                    e.__set__ && e.__set__.exclude(this), h.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), t._tear(this, e), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                    for (var r in this) this[r] = "function" == typeof this[r] ? t._removedFactory(r) : null;
                    this.removed = !0
                }
            }, C._getBBox = function() {
                if ("none" == this.node.style.display) {
                    this.show();
                    var t = !0
                    }
                var e = {};
                try {
                    e = this.node.getBBox()
                } catch (t) {} finally {
                    e = e || {}
                }
                return t && this.hide(), e
            }, C.attr = function(r, i) {
                if (this.removed) return this;
                if (null == r) {
                    var n = {};
                    for (var a in this.attrs) this.attrs[e](a) && (n[a] = this.attrs[a]);
                    return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n
                }
                if (null == i && t.is(r, "string")) {
                    if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    if ("transform" == r) return this._.transform;
                    for (var s = r.split(/[, ]+/), o = {}, l = 0, u = s.length; l < u; l++)(r = s[l]) in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r];
                    return u - 1 ? o : o[s[0]]
                }
                if (null == i && t.is(r, "array")) {
                    for (o = {}, l = 0, u = r.length; l < u; l++) o[r[l]] = this.attr(r[l]);
                    return o
                }
                if (null != i) {
                    var c = {};
                    c[r] = i
                } else null != r && t.is(r, "object") && (c = r);
                for (var f in c) h("raphael.attr." + f + "." + this.id, this, c[f]);
                for (f in this.paper.customAttributes)
                    if (this.paper.customAttributes[e](f) && c[e](f) && t.is(this.paper.customAttributes[f], "function")) {
                        var p = this.paper.customAttributes[f].apply(this, [].concat(c[f]));
                        this.attrs[f] = c[f];
                        for (var d in p) p[e](d) && (c[d] = p[d])
                    }
                return _(this, c), this
            }, C.toFront = function() {
                if (this.removed) return this;
                "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                var e = this.paper;
                return e.top != this && t._tofront(this, e), this
            }, C.toBack = function() {
                if (this.removed) return this;
                var e = this.node.parentNode;
                "a" == e.tagName.toLowerCase() ? e.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : e.firstChild != this.node && e.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper);
                this.paper;
                return this
            }, C.insertAfter = function(e) {
                if (this.removed) return this;
                var r = e.node || e[e.length - 1].node;
                return r.nextSibling ? r.parentNode.insertBefore(this.node, r.nextSibling) : r.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this
            }, C.insertBefore = function(e) {
                if (this.removed) return this;
                var r = e.node || e[0].node;
                return r.parentNode.insertBefore(this.node, r), t._insertbefore(this, e, this.paper), this
            }, C.blur = function(e) {
                var r = this;
                if (0 != +e) {
                    var i = g("filter"),
                        n = g("feGaussianBlur");
                    r.attrs.blur = e, i.id = t.createUUID(), g(n, {
                        stdDeviation: +e || 1.5
                    }), i.appendChild(n), r.paper.defs.appendChild(i), r._blur = i, g(r.node, {
                        filter: "url(#" + i.id + ")"
                    })
                } else r._blur && (r._blur.parentNode.removeChild(r._blur), delete r._blur, delete r.attrs.blur), r.node.removeAttribute("filter")
            }, t._engine.circle = function(t, e, r, i) {
                var n = g("circle");
                t.canvas && t.canvas.appendChild(n);
                var a = new k(n, t);
                return a.attrs = {
                    cx: e,
                    cy: r,
                    r: i,
                    fill: "none",
                    stroke: "#000"
                }, a.type = "circle", g(n, a.attrs), a
            }, t._engine.rect = function(t, e, r, i, n, a) {
                var s = g("rect");
                t.canvas && t.canvas.appendChild(s);
                var o = new k(s, t);
                return o.attrs = {
                    x: e,
                    y: r,
                    width: i,
                    height: n,
                    r: a || 0,
                    rx: a || 0,
                    ry: a || 0,
                    fill: "none",
                    stroke: "#000"
                }, o.type = "rect", g(s, o.attrs), o
            }, t._engine.ellipse = function(t, e, r, i, n) {
                var a = g("ellipse");
                t.canvas && t.canvas.appendChild(a);
                var s = new k(a, t);
                return s.attrs = {
                    cx: e,
                    cy: r,
                    rx: i,
                    ry: n,
                    fill: "none",
                    stroke: "#000"
                }, s.type = "ellipse", g(a, s.attrs), s
            }, t._engine.image = function(t, e, r, i, n, a) {
                var s = g("image");
                g(s, {
                    x: r,
                    y: i,
                    width: n,
                    height: a,
                    preserveAspectRatio: "none"
                }), s.setAttributeNS(f, "href", e), t.canvas && t.canvas.appendChild(s);
                var o = new k(s, t);
                return o.attrs = {
                    x: r,
                    y: i,
                    width: n,
                    height: a,
                    src: e
                }, o.type = "image", o
            }, t._engine.text = function(e, r, i, n) {
                var a = g("text");
                e.canvas && e.canvas.appendChild(a);
                var s = new k(a, e);
                return s.attrs = {
                    x: r,
                    y: i,
                    "text-anchor": "middle",
                    text: n,
                    font: t._availableAttrs.font,
                    stroke: "none",
                    fill: "#000"
                }, s.type = "text", _(s, s.attrs), s
            }, t._engine.setSize = function(t, e) {
                return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
            }, t._engine.create = function() {
                var e = t._getContainer.apply(0, arguments),
                    r = e && e.container,
                    i = e.x,
                    n = e.y,
                    a = e.width,
                    s = e.height;
                if (!r) throw new Error("SVG container not found.");
                var o, l = g("svg"),
                    h = "overflow:hidden;";
                return i = i || 0, n = n || 0, a = a || 512, s = s || 342, g(l, {
                    height: s,
                    version: 1.1,
                    width: a,
                    xmlns: "http://www.w3.org/2000/svg"
                }), 1 == r ? (l.style.cssText = h + "position:absolute;left:" + i + "px;top:" + n + "px", t._g.doc.body.appendChild(l), o = 1) : (l.style.cssText = h + "position:relative", r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l)), r = new t._Paper, r.width = a, r.height = s, r.canvas = l, r.clear(), r._left = r._top = 0, o && (r.renderfix = function() {}), r.renderfix(), r
            }, t._engine.setViewBox = function(t, e, r, i, n) {
                h("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                var a, o, l = s(r / this.width, i / this.height),
                    u = this.top,
                    f = n ? "meet" : "xMinYMin";
                for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, a = "0 0 " + this.width + c + this.height) : (this._vbSize = l, a = t + c + e + c + r + c + i), g(this.canvas, {
                    viewBox: a,
                    preserveAspectRatio: f
                }); l && u;) o = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1, u.attr({
                    "stroke-width": o
                }), u._.dirty = 1, u._.dirtyT = 1, u = u.prev;
                return this._viewBox = [t, e, r, i, !!n], this
            }, t.prototype.renderfix = function() {
                var t, e = this.canvas,
                    r = e.style;
                try {
                    t = e.getScreenCTM() || e.createSVGMatrix()
                } catch (r) {
                    t = e.createSVGMatrix()
                }
                var i = -t.e % 1,
                    n = -t.f % 1;
                (i || n) && (i && (this._left = (this._left + i) % 1, r.left = this._left + "px"), n && (this._top = (this._top + n) % 1, r.top = this._top + "px"))
            }, t.prototype.clear = function() {
                t.eve("raphael.clear", this);
                for (var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);
                this.bottom = this.top = null, (this.desc = g("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = g("defs"))
            }, t.prototype.remove = function() {
                h("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null
            };
            var B = t.st;
            for (var S in C) C[e](S) && !B[e](S) && (B[S] = function(t) {
                return function() {
                    var e = arguments;
                    return this.forEach(function(r) {
                        r[t].apply(r, e)
                    })
                }
            }(S))
        }(window.Raphael), window.Raphael.vml && function(t) {
            var e = "hasOwnProperty",
                r = String,
                i = parseFloat,
                n = Math,
                a = n.round,
                s = n.max,
                o = n.min,
                l = n.abs,
                h = t.eve,
                u = " ",
                c = "",
                f = {
                    M: "m",
                    L: "l",
                    C: "c",
                    Z: "x",
                    m: "t",
                    l: "r",
                    c: "v",
                    z: "x"
                },
                p = "position:absolute;left:0;top:0;width:1px;height:1px",
                d = 21600,
                g = {
                    path: 1,
                    rect: 1,
                    image: 1
                },
                v = {
                    circle: 1,
                    ellipse: 1
                },
                x = function(e) {
                    var i = /[ahqstv]/gi,
                        n = t._pathToAbsolute;
                    if (r(e).match(i) && (n = t._path2curve), i = /[clmz]/g, n == t._pathToAbsolute && !r(e).match(i)) {
                        var s = r(e).replace(/([clmz]),?([^clmz]*)/gi, function(t, e, r) {
                            var i = [],
                                n = "m" == e.toLowerCase(),
                                s = f[e];
                            return r.replace(/-?[^,\s-]+/g, function(t) {
                                n && 2 == i.length && (s += i + f["m" == e ? "l" : "L"], i = []), i.push(a(t * d))
                            }), s + i
                        });
                        return s
                    }
                    var o, l, h = n(e);
                    s = [];
                    for (var p = 0, g = h.length; p < g; p++) {
                        o = h[p], "z" == (l = h[p][0].toLowerCase()) && (l = "x");
                        for (var v = 1, x = o.length; v < x; v++) l += a(o[v] * d) + (v != x - 1 ? "," : c);
                        s.push(l)
                    }
                    return s.join(u)
                },
                y = function(e, r, i) {
                    var n = t.matrix();
                    return n.rotate(-e, .5, .5), {
                        dx: n.x(r, i),
                        dy: n.y(r, i)
                    }
                },
                m = function(t, e, r, i, n, a) {
                    var s = t._,
                        o = t.matrix,
                        h = s.fillpos,
                        c = t.node,
                        f = c.style,
                        p = 1,
                        g = "",
                        v = d / e,
                        x = d / r;
                    if (f.visibility = "hidden", e && r) {
                        if (c.coordsize = l(v) + u + l(x), f.rotation = a * (e * r < 0 ? -1 : 1), a) {
                            var m = y(a, i, n);
                            i = m.dx, n = m.dy
                        }
                        if (e < 0 && (g += "x"), r < 0 && (g += " y") && (p = -1), f.flip = g, c.coordorigin = i * -v + u + n * -x, h || s.fillsize) {
                            var b = c.getElementsByTagName("fill");
                            b = b && b[0], c.removeChild(b), h && (m = y(a, o.x(h[0], h[1]), o.y(h[0], h[1])), b.position = m.dx * p + u + m.dy * p), s.fillsize && (b.size = s.fillsize[0] * l(e) + u + s.fillsize[1] * l(r)), c.appendChild(b)
                        }
                        f.visibility = "visible"
                    }
                };
            t.toString = function() {
                return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
            };
            var b = function(t, e, i) {
                for (var n = r(e).toLowerCase().split("-"), a = i ? "end" : "start", s = n.length, o = "classic", l = "medium", h = "medium"; s--;) switch (n[s]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        o = n[s];
                        break;
                    case "wide":
                    case "narrow":
                        h = n[s];
                        break;
                    case "long":
                    case "short":
                        l = n[s]
                }
                var u = t.node.getElementsByTagName("stroke")[0];
                u[a + "arrow"] = o, u[a + "arrowlength"] = l, u[a + "arrowwidth"] = h
            },
                _ = function(n, l) {
                    n.attrs = n.attrs || {};
                    var h = n.node,
                        f = n.attrs,
                        p = h.style,
                        y = g[n.type] && (l.x != f.x || l.y != f.y || l.width != f.width || l.height != f.height || l.cx != f.cx || l.cy != f.cy || l.rx != f.rx || l.ry != f.ry || l.r != f.r),
                        _ = v[n.type] && (f.cx != l.cx || f.cy != l.cy || f.r != l.r || f.rx != l.rx || f.ry != l.ry),
                        k = n;
                    for (var C in l) l[e](C) && (f[C] = l[C]);
                    if (y && (f.path = t._getPath[n.type](n), n._.dirty = 1), l.href && (h.href = l.href), l.title && (h.title = l.title), l.target && (h.target = l.target), l.cursor && (p.cursor = l.cursor), "blur" in l && n.blur(l.blur), (l.path && "path" == n.type || y) && (h.path = x(~r(f.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(f.path) : f.path), "image" == n.type && (n._.fillpos = [f.x, f.y], n._.fillsize = [f.width, f.height], m(n, 1, 1, 0, 0, 0))), "transform" in l && n.transform(l.transform), _) {
                        var S = +f.cx,
                            T = +f.cy,
                            A = +f.rx || +f.r || 0,
                            N = +f.ry || +f.r || 0;
                        h.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((S - A) * d), a((T - N) * d), a((S + A) * d), a((T + N) * d), a(S * d))
                    }
                    if ("clip-rect" in l) {
                        var z = r(l["clip-rect"]).split(/[, ]+/);
                        if (4 == z.length) {
                            z[2] = +z[2] + +z[0], z[3] = +z[3] + +z[1];
                            var L = h.clipRect || t._g.doc.createElement("div"),
                                M = L.style;
                            M.clip = t.format("rect({1}px {2}px {3}px {0}px)", z), h.clipRect || (M.position = "absolute", M.top = 0, M.left = 0, M.width = n.paper.width + "px", M.height = n.paper.height + "px", h.parentNode.insertBefore(L, h), L.appendChild(h), h.clipRect = L)
                        }
                        l["clip-rect"] || h.clipRect && (h.clipRect.style.clip = "auto")
                    }
                    if (n.textpath) {
                        var E = n.textpath.style;
                        l.font && (E.font = l.font), l["font-family"] && (E.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, c) + '"'), l["font-size"] && (E.fontSize = l["font-size"]), l["font-weight"] && (E.fontWeight = l["font-weight"]), l["font-style"] && (E.fontStyle = l["font-style"])
                    }
                    if ("arrow-start" in l && b(k, l["arrow-start"]), "arrow-end" in l && b(k, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
                        var R = h.getElementsByTagName("fill");
                        if (!(R = R && R[0]) && (R = B("fill")), "image" == n.type && l.src && (R.src = l.src), l.fill && (R.on = !0), null != R.on && "none" != l.fill && null !== l.fill || (R.on = !1), R.on && l.fill) {
                            var F = r(l.fill).match(t._ISURL);
                            if (F) {
                                R.parentNode == h && h.removeChild(R), R.rotate = !0, R.src = F[1], R.type = "tile";
                                var P = n.getBBox(1);
                                R.position = P.x + u + P.y, n._.fillpos = [P.x, P.y], t._preload(F[1], function() {
                                    n._.fillsize = [this.offsetWidth, this.offsetHeight]
                                })
                            } else R.color = t.getRGB(l.fill).hex, R.src = c, R.type = "solid", t.getRGB(l.fill).error && (k.type in {
                                circle: 1,
                                ellipse: 1
                            } || "r" != r(l.fill).charAt()) && w(k, l.fill, R) && (f.fill = "none", f.gradient = l.fill, R.rotate = !1)
                        }
                        if ("fill-opacity" in l || "opacity" in l) {
                            var I = ((+f["fill-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
                            I = o(s(I, 0), 1), R.opacity = I, R.src && (R.color = "none")
                        }
                        h.appendChild(R);
                        var j = h.getElementsByTagName("stroke") && h.getElementsByTagName("stroke")[0],
                            q = !1;
                        !j && (q = j = B("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (j.on = !0), ("none" == l.stroke || null === l.stroke || null == j.on || 0 == l.stroke || 0 == l["stroke-width"]) && (j.on = !1);
                        var D = t.getRGB(l.stroke);
                        j.on && l.stroke && (j.color = D.hex), I = ((+f["stroke-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+D.o + 1 || 2) - 1);
                        var V = .75 * (i(l["stroke-width"]) || 1);
                        if (I = o(s(I, 0), 1), null == l["stroke-width"] && (V = f["stroke-width"]), l["stroke-width"] && (j.weight = V), V && V < 1 && (I *= V) && (j.weight = 1), j.opacity = I, l["stroke-linejoin"] && (j.joinstyle = l["stroke-linejoin"] || "miter"), j.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (j.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) {
                            var O = {
                                "-": "shortdash",
                                ".": "shortdot",
                                "-.": "shortdashdot",
                                "-..": "shortdashdotdot",
                                ". ": "dot",
                                "- ": "dash",
                                "--": "longdash",
                                "- .": "dashdot",
                                "--.": "longdashdot",
                                "--..": "longdashdotdot"
                            };
                            j.dashstyle = O[e](l["stroke-dasharray"]) ? O[l["stroke-dasharray"]] : c
                        }
                        q && h.appendChild(j)
                    }
                    if ("text" == k.type) {
                        k.paper.canvas.style.display = c;
                        var G = k.paper.span,
                            Y = f.font && f.font.match(/\d+(?:\.\d*)?(?=px)/);
                        p = G.style, f.font && (p.font = f.font), f["font-family"] && (p.fontFamily = f["font-family"]), f["font-weight"] && (p.fontWeight = f["font-weight"]), f["font-style"] && (p.fontStyle = f["font-style"]), Y = i(f["font-size"] || Y && Y[0]) || 10, p.fontSize = 100 * Y + "px", k.textpath.string && (G.innerHTML = r(k.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                        var W = G.getBoundingClientRect();
                        k.W = f.w = (W.right - W.left) / 100, k.H = f.h = (W.bottom - W.top) / 100, k.X = f.x, k.Y = f.y + k.H / 2, ("x" in l || "y" in l) && (k.path.v = t.format("m{0},{1}l{2},{1}", a(f.x * d), a(f.y * d), a(f.x * d) + 1));
                        for (var H = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], X = 0, U = H.length; X < U; X++)
                            if (H[X] in l) {
                                k._.dirty = 1;
                                break
                            }
                        switch (f["text-anchor"]) {
                            case "start":
                                k.textpath.style["v-text-align"] = "left", k.bbx = k.W / 2;
                                break;
                            case "end":
                                k.textpath.style["v-text-align"] = "right", k.bbx = -k.W / 2;
                                break;
                            default:
                                k.textpath.style["v-text-align"] = "center", k.bbx = 0
                                                }
                        k.textpath.style["v-text-kern"] = !0
                    }
                },
                w = function(e, a, s) {
                    e.attrs = e.attrs || {};
                    e.attrs;
                    var o = Math.pow,
                        l = "linear",
                        h = ".5 .5";
                    if (e.attrs.gradient = a, a = r(a).replace(t._radial_gradient, function(t, e, r) {
                        return l = "radial", e && r && (e = i(e), r = i(r), o(e - .5, 2) + o(r - .5, 2) > .25 && (r = n.sqrt(.25 - o(e - .5, 2)) * (2 * (r > .5) - 1) + .5), h = e + u + r), c
                    }), a = a.split(/\s*\-\s*/), "linear" == l) {
                        var f = a.shift();
                        if (f = -i(f), isNaN(f)) return null
                    }
                    var p = t._parseDots(a);
                    if (!p) return null;
                    if (e = e.shape || e.node, p.length) {
                        e.removeChild(s), s.on = !0, s.method = "none", s.color = p[0].color, s.color2 = p[p.length - 1].color;
                        for (var d = [], g = 0, v = p.length; g < v; g++) p[g].offset && d.push(p[g].offset + u + p[g].color);
                        s.colors = d.length ? d.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = h, s.angle = 0) : (s.type = "gradient", s.angle = (270 - f) % 360), e.appendChild(s)
                    }
                    return 1
                },
                k = function(e, r) {
                    this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = r, this.matrix = t.matrix(), this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        dx: 0,
                        dy: 0,
                        deg: 0,
                        dirty: 1,
                        dirtyT: 1
                    }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null
                },
                C = t.el;
            k.prototype = C, C.constructor = k, C.transform = function(e) {
                if (null == e) return this._.transform;
                var i, n = this.paper._viewBoxShift,
                    a = n ? "s" + [n.scale, n.scale] + "-1-1t" + [n.dx, n.dy] : c;
                n && (i = e = r(e).replace(/\.{3}|\u2026/g, this._.transform || c)), t._extractTransform(this, a + e);
                var s, o = this.matrix.clone(),
                    l = this.skew,
                    h = this.node,
                    f = ~r(this.attrs.fill).indexOf("-"),
                    p = !r(this.attrs.fill).indexOf("url(");
                if (o.translate(-.5, -.5), p || f || "image" == this.type)
                    if (l.matrix = "1 0 0 1", l.offset = "0 0", s = o.split(), f && s.noRotation || !s.isSimple) {
                        h.style.filter = o.toFilter();
                        var g = this.getBBox(),
                            v = this.getBBox(1),
                            x = g.x - v.x,
                            y = g.y - v.y;
                        h.coordorigin = x * -d + u + y * -d, m(this, 1, 1, x, y, 0)
                    } else h.style.filter = c, m(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate);
                else h.style.filter = c, l.matrix = r(o), l.offset = o.offset();
                return i && (this._.transform = i), this
            }, C.rotate = function(t, e, n) {
                if (this.removed) return this;
                if (null != t) {
                    if ((t = r(t).split(/[, ]+/)).length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) {
                        var a = this.getBBox(1);
                        e = a.x + a.width / 2, n = a.y + a.height / 2
                    }
                    return this._.dirtyT = 1, this.transform(this._.transform.concat([
                        ["r", t, e, n]
                    ])), this
                }
            }, C.translate = function(t, e) {
                return this.removed ? this : ((t = r(t).split(/[, ]+/)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
                    ["t", t, e]
                ])), this)
            }, C.scale = function(t, e, n, a) {
                if (this.removed) return this;
                if ((t = r(t).split(/[, ]+/)).length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3]), isNaN(n) && (n = null), isNaN(a) && (a = null)), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1);
                return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([
                    ["s", t, e, n, a]
                ])), this._.dirtyT = 1, this
            }, C.hide = function() {
                return !this.removed && (this.node.style.display = "none"), this
            }, C.show = function() {
                return !this.removed && (this.node.style.display = c), this
            }, C._getBBox = function() {
                return this.removed ? {} : {
                    x: this.X + (this.bbx || 0) - this.W / 2,
                    y: this.Y - this.H,
                    width: this.W,
                    height: this.H
                }
            }, C.remove = function() {
                if (!this.removed && this.node.parentNode) {
                    this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                    for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                    this.removed = !0
                }
            }, C.attr = function(r, i) {
                if (this.removed) return this;
                if (null == r) {
                    var n = {};
                    for (var a in this.attrs) this.attrs[e](a) && (n[a] = this.attrs[a]);
                    return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n
                }
                if (null == i && t.is(r, "string")) {
                    if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    for (var s = r.split(/[, ]+/), o = {}, l = 0, u = s.length; l < u; l++)(r = s[l]) in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r];
                    return u - 1 ? o : o[s[0]]
                }
                if (this.attrs && null == i && t.is(r, "array")) {
                    for (o = {}, l = 0, u = r.length; l < u; l++) o[r[l]] = this.attr(r[l]);
                    return o
                }
                var c;
                null != i && ((c = {})[r] = i), null == i && t.is(r, "object") && (c = r);
                for (var f in c) h("raphael.attr." + f + "." + this.id, this, c[f]);
                if (c) {
                    for (f in this.paper.customAttributes)
                        if (this.paper.customAttributes[e](f) && c[e](f) && t.is(this.paper.customAttributes[f], "function")) {
                            var p = this.paper.customAttributes[f].apply(this, [].concat(c[f]));
                            this.attrs[f] = c[f];
                            for (var d in p) p[e](d) && (c[d] = p[d])
                        }
                    c.text && "text" == this.type && (this.textpath.string = c.text), _(this, c)
                }
                return this
            }, C.toFront = function() {
                return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this
            }, C.toBack = function() {
                return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this)
            }, C.insertAfter = function(e) {
                return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this)
            }, C.insertBefore = function(e) {
                return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this)
            }, C.blur = function(e) {
                var r = this.node.runtimeStyle,
                    i = r.filter;
                i = i.replace(/ progid:\S+Blur\([^\)]+\)/g, c), 0 != +e ? (this.attrs.blur = e, r.filter = i + u + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+e || 1.5) + ")", r.margin = t.format("-{0}px 0 0 -{0}px", a(+e || 1.5))) : (r.filter = i, r.margin = 0, delete this.attrs.blur)
            }, t._engine.path = function(t, e) {
                var r = B("shape");
                r.style.cssText = p, r.coordsize = d + u + d, r.coordorigin = e.coordorigin;
                var i = new k(r, e),
                    n = {
                        fill: "none",
                        stroke: "#000"
                    };
                t && (n.path = t), i.type = "path", i.path = [], i.Path = c, _(i, n), e.canvas.appendChild(r);
                var a = B("skew");
                return a.on = !0, r.appendChild(a), i.skew = a, i.transform(c), i
            }, t._engine.rect = function(e, r, i, n, a, s) {
                var o = t._rectPath(r, i, n, a, s),
                    l = e.path(o),
                    h = l.attrs;
                return l.X = h.x = r, l.Y = h.y = i, l.W = h.width = n, l.H = h.height = a, h.r = s, h.path = o, l.type = "rect", l
            }, t._engine.ellipse = function(t, e, r, i, n) {
                var a = t.path();
                a.attrs;
                return a.X = e - i, a.Y = r - n, a.W = 2 * i, a.H = 2 * n, a.type = "ellipse", _(a, {
                    cx: e,
                    cy: r,
                    rx: i,
                    ry: n
                }), a
            }, t._engine.circle = function(t, e, r, i) {
                var n = t.path();
                n.attrs;
                return n.X = e - i, n.Y = r - i, n.W = n.H = 2 * i, n.type = "circle", _(n, {
                    cx: e,
                    cy: r,
                    r: i
                }), n
            }, t._engine.image = function(e, r, i, n, a, s) {
                var o = t._rectPath(i, n, a, s),
                    l = e.path(o).attr({
                        stroke: "none"
                    }),
                    h = l.attrs,
                    u = l.node,
                    c = u.getElementsByTagName("fill")[0];
                return h.src = r, l.X = h.x = i, l.Y = h.y = n, l.W = h.width = a, l.H = h.height = s, h.path = o, l.type = "image", c.parentNode == u && u.removeChild(c), c.rotate = !0, c.src = r, c.type = "tile", l._.fillpos = [i, n], l._.fillsize = [a, s], u.appendChild(c), m(l, 1, 1, 0, 0, 0), l
            }, t._engine.text = function(e, i, n, s) {
                var o = B("shape"),
                    l = B("path"),
                    h = B("textpath");
                i = i || 0, n = n || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", a(i * d), a(n * d), a(i * d) + 1), l.textpathok = !0, h.string = r(s), h.on = !0, o.style.cssText = p, o.coordsize = d + u + d, o.coordorigin = "0 0";
                var f = new k(o, e),
                    g = {
                        fill: "#000",
                        stroke: "none",
                        font: t._availableAttrs.font,
                        text: s
                    };
                f.shape = o, f.path = l, f.textpath = h, f.type = "text", f.attrs.text = r(s), f.attrs.x = i, f.attrs.y = n, f.attrs.w = 1, f.attrs.h = 1, _(f, g), o.appendChild(h), o.appendChild(l), e.canvas.appendChild(o);
                var v = B("skew");
                return v.on = !0, o.appendChild(v), f.skew = v, f.transform(c), f
            }, t._engine.setSize = function(e, r) {
                var i = this.canvas.style;
                return this.width = e, this.height = r, e == +e && (e += "px"), r == +r && (r += "px"), i.width = e, i.height = r, i.clip = "rect(0 " + e + " " + r + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this
            }, t._engine.setViewBox = function(e, r, i, n, a) {
                t.eve("raphael.setViewBox", this, this._viewBox, [e, r, i, n, a]);
                var o, l, h = this.width,
                    u = this.height,
                    c = 1 / s(i / h, n / u);
                return a && (l = h / i, i * (o = u / n) < h && (e -= (h - i * o) / 2 / o), n * l < u && (r -= (u - n * l) / 2 / l)), this._viewBox = [e, r, i, n, !!a], this._viewBoxShift = {
                    dx: -e,
                    dy: -r,
                    scale: c
                }, this.forEach(function(t) {
                    t.transform("...")
                }), this
            };
            var B;
            t._engine.initWin = function(t) {
                var e = t.document;
                e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                try {
                    !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), B = function(t) {
                        return e.createElement("<rvml:" + t + ' class="rvml">')
                    }
                } catch (t) {
                    B = function(t) {
                        return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                    }
                }
            }, t._engine.initWin(t._g.win), t._engine.create = function() {
                var e = t._getContainer.apply(0, arguments),
                    r = e.container,
                    i = e.height,
                    n = e.width,
                    a = e.x,
                    s = e.y;
                if (!r) throw new Error("VML container not found.");
                var o = new t._Paper,
                    l = o.canvas = t._g.doc.createElement("div"),
                    h = l.style;
                return a = a || 0, s = s || 0, n = n || 512, i = i || 342, o.width = n, o.height = i, n == +n && (n += "px"), i == +i && (i += "px"), o.coordsize = 216e5 + u + 216e5, o.coordorigin = "0 0", o.span = t._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(o.span), h.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", n, i), 1 == r ? (t._g.doc.body.appendChild(l), h.left = a + "px", h.top = s + "px", h.position = "absolute") : r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l), o.renderfix = function() {}, o
            }, t.prototype.clear = function() {
                t.eve("raphael.clear", this), this.canvas.innerHTML = c, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
            }, t.prototype.remove = function() {
                t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                return !0
            };
            var S = t.st;
            for (var T in C) C[e](T) && !S[e](T) && (S[T] = function(t) {
                return function() {
                    var e = arguments;
                    return this.forEach(function(r) {
                        r[t].apply(r, e)
                    })
                }
            }(T))
        }(window.Raphael),
            function() {
            window.ScaleRaphael = function(t, e, r) {
                var i = document.getElementById(t);
                i.style.position || (i.style.position = "relative"), i.style.width = e + "px", i.style.height = r + "px", i.style.overflow = "hidden";
                var n, a = "vmlgroup-" + t;
                "VML" == Raphael.type ? (i.innerHTML = "<rvml:group style='position : absolute; width: 1000px; height: 1000px; top: 0px; left: 0px' coordsize='1000,1000' class='rvml' id='" + a + "'></rvml:group>", n = document.getElementById(a)) : (i.innerHTML = "<div id='" + a + "'></div>", n = document.getElementById(a));
                var s, o = new Raphael(n, e, r);
                return "SVG" == Raphael.type ? o.canvas.setAttribute("viewBox", "0 0 " + e + " " + r) : s = i.getElementsByTagName("div")[0], o.changeSize = function(t, a, l, h) {
                    h = !h;
                    var u = t / e,
                        c = a / r,
                        f = u < c ? u : c,
                        p = parseInt(r * f),
                        d = parseInt(e * f);
                    if ("VML" == Raphael.type) {
                        var g = document.getElementsByTagName("textpath");
                        for (var v in g) {
                            var x = g[v];
                            if (x.style) {
                                if (!x._fontSize) {
                                    var y = x.style.font.split("px");
                                    x._fontSize = 14, x._font = y[1]
                                }
                                x.style.font = x._fontSize * f + "px" + x._font
                            }
                        }
                        var m;
                        m = d < p ? 1e3 * d / e : 1e3 * p / r, m = parseInt(m), n.style.width = m + "px", n.style.height = m + "px", h && (n.style.left = parseInt((t - d) / 2) + "px", n.style.top = parseInt((a - p) / 2) + "px"), s.style.overflow = "visible"
                    }
                    h && (d = t, p = a), i.style.width = d + "px", i.style.height = p + "px", o.setSize(d, p), l && (i.style.position = "absolute", i.style.left = parseInt((t - d) / 2) + "px", i.style.top = parseInt((a - p) / 2) + "px")
                }, o.scaleAll = function(t) {
                    o.changeSize(e * t, r * t)
                }, o.changeSize(e, r), o.w = e, o.h = r, o
            }
        }();