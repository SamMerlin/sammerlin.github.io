/*!
 * phaser-spine - version 3.0.9 
 * Spine plugin for Phaser.io!
 *
 * OrangeGames
 * Build at 10-07-2017
 * Released under MIT License 
 */

var spine = {
    radDeg: 180 / Math.PI,
    degRad: Math.PI / 180,
    Float32Array: "undefined" == typeof Float32Array ? Array : Float32Array,
    Uint32Array: "undefined" == typeof Uint32Array ? Array : Uint32Array,
    Uint16Array: "undefined" == typeof Uint16Array ? Array : Uint16Array
};
spine.temp = new spine.Float32Array(2), spine.BoneData = function(a, b) {
    this.name = a, this.parent = b
}, spine.BoneData.prototype = {
    length: 0,
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    inheritScale: !0,
    inheritRotation: !0
}, spine.BlendMode = {
    normal: 0,
    additive: 1,
    multiply: 2,
    screen: 3
}, spine.SlotData = function(a, b) {
    this.name = a, this.boneData = b
}, spine.SlotData.prototype = {
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    attachmentName: null,
    blendMode: spine.BlendMode.normal
}, spine.IkConstraintData = function(a) {
    this.name = a, this.bones = []
}, spine.IkConstraintData.prototype = {
    target: null,
    bendDirection: 1,
    mix: 1
}, spine.TransformConstraintData = function(a) {
    this.name = a
}, spine.TransformConstraintData.prototype = {
    bone: null,
    target: null,
    translateMix: 1,
    x: 0,
    y: 0
}, spine.Bone = function(a, b, c) {
    this.data = a, this.skeleton = b, this.parent = c, this.setToSetupPose()
}, spine.Bone.yDown = !1, spine.Bone.prototype = {
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    a: 0,
    b: 0,
    worldX: 0,
    c: 0,
    d: 0,
    worldY: 0,
    worldSignX: 1,
    worldSignY: 1,
    update: function() {
        this.updateWorldTransform(this.x, this.y, this.rotation, this.scaleX, this.scaleY)
    },
    updateWorldTransformWith: function() {
        this.updateWorldTransform(this.x, this.y, this.rotation, this.scaleX, this.scaleY)
    },
    updateWorldTransform: function(a, b, c, d, e) {
        this.appliedRotation = c, this.appliedScaleX = d, this.appliedScaleY = e, c *= spine.degRad;
        var f = Math.cos(c),
            g = Math.sin(c),
            h = f * d,
            i = -g * e,
            j = g * d,
            k = f * e,
            l = this.parent;
        if (!l) {
            var m = this.skeleton;
            return m.flipX && (a = -a, h = -h, i = -i), m.flipY != spine.Bone.yDown && (b = -b, j = -j, k = -k), this.a = h, this.b = i, this.c = j, this.d = k, this.worldX = a, this.worldY = b, this.worldSignX = d < 0 ? -1 : 1, void(this.worldSignY = e < 0 ? -1 : 1)
        }
        var n = l.a,
            o = l.b,
            p = l.c,
            q = l.d;
        if (this.worldX = n * a + o * b + l.worldX, this.worldY = p * a + q * b + l.worldY, this.worldSignX = l.worldSignX * (d < 0 ? -1 : 1), this.worldSignY = l.worldSignY * (e < 0 ? -1 : 1), this.data.inheritRotation && this.data.inheritScale) this.a = n * h + o * j, this.b = n * i + o * k, this.c = p * h + q * j, this.d = p * i + q * k;
        else {
            if (this.data.inheritRotation) {
                n = 1, o = 0, p = 0, q = 1;
                do {
                    c = l.appliedRotation * spine.degRad, f = Math.cos(c), g = Math.sin(c);
                    var r = n * f + o * g;
                    if (o = n * -g + o * f, n = r, r = p * f + q * g, q = p * -g + q * f, p = r, !l.data.inheritRotation) break;
                    l = l.parent
                } while (l);
                this.a = n * h + o * j, this.b = n * i + o * k, this.c = p * h + q * j, this.d = p * i + q * k
            } else if (this.data.inheritScale) {
                n = 1, o = 0, p = 0, q = 1;
                do {
                    c = l.appliedRotation * spine.degRad, f = Math.cos(c), g = Math.sin(c);
                    var s = l.appliedScaleX,
                        t = l.appliedScaleY,
                        u = f * s,
                        v = -g * t,
                        w = g * s,
                        x = f * t,
                        r = n * u + o * w;
                    if (o = n * v + o * x, n = r, r = p * u + q * w, q = p * v + q * x, p = r, s < 0 && (c = -c), f = Math.cos(-c), g = Math.sin(-c), r = n * f + o * g, o = n * -g + o * f, n = r, r = p * f + q * g, q = p * -g + q * f, p = r, !l.data.inheritScale) break;
                    l = l.parent
                } while (l);
                this.a = n * h + o * j, this.b = n * i + o * k, this.c = p * h + q * j, this.d = p * i + q * k
            } else this.a = h, this.b = i, this.c = j, this.d = k;
            this.skeleton.flipX && (this.a = -this.a, this.b = -this.b), this.skeleton.flipY != spine.Bone.yDown && (this.c = -this.c, this.d = -this.d)
        }
    },
    setToSetupPose: function() {
        var a = this.data;
        this.x = a.x, this.y = a.y, this.rotation = a.rotation, this.scaleX = a.scaleX, this.scaleY = a.scaleY
    },
    getWorldRotationX: function() {
        return Math.atan2(this.c, this.a) * spine.radDeg
    },
    getWorldRotationY: function() {
        return Math.atan2(this.d, this.b) * spine.radDeg
    },
    getWorldScaleX: function() {
        return Math.sqrt(this.a * this.a + this.b * this.b) * this.worldSignX
    },
    getWorldScaleY: function() {
        return Math.sqrt(this.c * this.c + this.d * this.d) * this.worldSignY
    },
    worldToLocal: function(a) {
        var b = a[0] - this.worldX,
            c = a[1] - this.worldY,
            d = this.a,
            e = this.b,
            f = this.c,
            g = this.d,
            h = 1 / (d * g - e * f);
        return a[0] = b * g * h - c * e * h, a[1] = c * d * h - b * f * h, a
    },
    localToWorld: function(a) {
        var b = a[0],
            c = a[1];
        return a[0] = b * this.a + c * this.b + this.worldX, a[1] = b * this.c + c * this.d + this.worldY, a
    }
}, spine.Slot = function(a, b) {
    this.data = a, this.bone = b, this.attachmentVertices = new spine.Float32Array, this.setToSetupPose()
}, spine.Slot.prototype = {
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    _attachmentTime: 0,
    attachment: null,
    setAttachment: function(a) {
        this.attachment != a && (this.attachment = a, this._attachmentTime = this.bone.skeleton.time, this.attachmentVertices.length = 0)
    },
    setAttachmentTime: function(a) {
        this._attachmentTime = this.bone.skeleton.time - a
    },
    getAttachmentTime: function() {
        return this.bone.skeleton.time - this._attachmentTime
    },
    setToSetupPose: function() {
        var a = this.data;
        if (this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, a.attachmentName) {
            for (var b = this.bone.skeleton.data.slots, c = 0, d = b.length; c < d; c++)
                if (b[c] == a) {
                    this.attachment = null, this.setAttachment(this.bone.skeleton.getAttachmentBySlotIndex(c, a.attachmentName));
                    break
                }
        } else this.setAttachment(null)
    }
}, spine.IkConstraint = function(a, b) {
    this.data = a, this.mix = a.mix, this.bendDirection = a.bendDirection, this.bones = [];
    for (var c = 0, d = a.bones.length; c < d; c++) this.bones[c] = b.findBone(a.bones[c].name);
    this.target = b.findBone(a.target.name)
}, spine.IkConstraint.prototype = {
    apply: function() {
        this.update()
    },
    update: function() {
        var a = this.target,
            b = this.bones;
        switch (b.length) {
            case 1:
                spine.IkConstraint.apply1(b[0], a.worldX, a.worldY, this.mix);
                break;
            case 2:
                spine.IkConstraint.apply2(b[0], b[1], a.worldX, a.worldY, this.bendDirection, this.mix)
        }
    }
}, spine.IkConstraint.apply1 = function(a, b, c, d) {
    var e = a.parent ? a.parent.getWorldRotationX() : 0,
        f = a.rotation,
        g = Math.atan2(c - a.worldY, b - a.worldX) * spine.radDeg - e;
    a.worldSignX != a.worldSignY != (a.skeleton.flipX != (a.skeleton.flipY != spine.Bone.yDown)) && (g = 360 - g), g > 180 ? g -= 360 : g < -180 && (g += 360), a.updateWorldTransform(a.x, a.y, f + (g - f) * d, a.appliedScaleX, a.appliedScaleY)
}, spine.IkConstraint.apply2 = function(a, b, c, d, e, f) {
    if (0 != f) {
        var g, h, i, j = a.x,
            k = a.y,
            l = a.appliedScaleX,
            m = a.appliedScaleY;
        l < 0 ? (l = -l, g = 180, i = -1) : (g = 0, i = 1), m < 0 && (m = -m, i = -i);
        var n = b.x,
            o = b.y,
            p = b.appliedScaleX,
            q = Math.abs(l - m) <= 1e-4;
        q || 0 == o || (b.worldX = a.a * n + a.worldX, b.worldY = a.c * n + a.worldY, o = 0), p < 0 ? (p = -p, h = 180) : h = 0;
        var r, s, t, u, v = a.parent;
        if (v) {
            var w = v.a,
                x = v.b,
                y = v.c,
                z = v.d,
                A = 1 / (w * z - x * y),
                B = v.worldX,
                C = v.worldY,
                D = c - B,
                E = d - C;
            r = (D * z - E * x) * A - j, s = (E * w - D * y) * A - k, D = b.worldX - B, E = b.worldY - C, t = (D * z - E * x) * A - j, u = (E * w - D * y) * A - k
        } else r = c - j, s = d - k, t = b.worldX - j, u = b.worldY - k;
        var F, G, H = Math.sqrt(t * t + u * u),
            I = b.data.length * p;
        a: if (q) {
            I *= l;
            var J = (r * r + s * s - H * H - I * I) / (2 * H * I);
            J < -1 ? J = -1 : J > 1 && (J = 1), G = Math.acos(J) * e;
            var w = H + I * J,
                K = I * Math.sin(G);
            F = Math.atan2(s * w - r * K, r * w + s * K)
        } else {
            var w = l * I,
                x = m * I,
                L = Math.atan2(s, r),
                M = w * w,
                N = x * x,
                O = H * H,
                P = r * r + s * s,
                Q = N * O + M * P - M * N,
                R = -2 * N * H,
                S = N - M,
                z = R * R - 4 * S * Q;
            if (z >= 0) {
                var T = Math.sqrt(z);
                R < 0 && (T = -T), T = -(R + T) / 2;
                var U = T / S,
                    V = Q / T,
                    W = Math.abs(U) < Math.abs(V) ? U : V;
                if (W * W <= P) {
                    var E = Math.sqrt(P - W * W) * e;
                    F = L - Math.atan2(E, W), G = Math.atan2(E / m, (W - H) / l);
                    break a
                }
            }
            var X = 0,
                Y = Number.MAX_VALUE,
                Z = 0,
                $ = 0,
                _ = 0,
                aa = 0,
                ba = 0,
                ca = 0,
                D = H + w,
                da = D * D;
            da > aa && (_ = 0, aa = da, ba = D), D = H - w, da = D * D, da < Y && (X = Math.PI, Y = da, Z = D);
            var ea = Math.acos(-w * H / (M - N));
            D = w * Math.cos(ea) + H;
            var E = x * Math.sin(ea);
            da = D * D + E * E, da < Y && (X = ea, Y = da, Z = D, $ = E), da > aa && (_ = ea, aa = da, ba = D, ca = E), P <= (Y + aa) / 2 ? (F = L - Math.atan2($ * e, Z), G = X * e) : (F = L - Math.atan2(ca * e, ba), G = _ * e)
        }
        var fa = Math.atan2(o, n) * i;
        F = (F - fa) * spine.radDeg + g, G = (G + fa) * spine.radDeg * i + h, F > 180 ? F -= 360 : F < -180 && (F += 360), G > 180 ? G -= 360 : G < -180 && (G += 360);
        var ga = a.rotation;
        a.updateWorldTransform(j, k, ga + (F - ga) * f, a.appliedScaleX, a.appliedScaleY), ga = b.rotation, b.updateWorldTransform(n, o, ga + (G - ga) * f, b.appliedScaleX, b.appliedScaleY)
    }
}, spine.TransformConstraint = function(a, b) {
    this.data = a, this.translateMix = a.translateMix, this.x = a.x, this.y = a.y, this.bone = b.findBone(a.bone.name), this.target = b.findBone(a.target.name)
}, spine.TransformConstraint.prototype = {
    apply: function() {
        this.update()
    },
    update: function() {
        var a = this.translateMix;
        if (a > 0) {
            var b = spine.temp;
            b[0] = x, b[1] = y, this.target.localToWorld(b);
            var c = this.bone;
            c.worldX += (b[0] - c.worldX) * a, c.worldY += (b[1] - c.worldY) * a
        }
    }
}, spine.Skin = function(a) {
    this.name = a, this.attachments = {}
}, spine.Skin.prototype = {
    addAttachment: function(a, b, c) {
        this.attachments[a + ":" + b] = c
    },
    getAttachment: function(a, b) {
        return this.attachments[a + ":" + b]
    },
    _attachAll: function(a, b) {
        for (var c in b.attachments) {
            var d = c.indexOf(":"),
                e = parseInt(c.substring(0, d)),
                f = c.substring(d + 1),
                g = a.slots[e];
            if (g.attachment && g.attachment.name == f) {
                var h = this.getAttachment(e, f);
                h && g.setAttachment(h)
            }
        }
    }
}, spine.Animation = function(a, b, c) {
    this.name = a, this.timelines = b, this.duration = c
}, spine.Animation.prototype = {
    apply: function(a, b, c, d, e) {
        d && 0 != this.duration && (c %= this.duration, b > 0 && (b %= this.duration));
        for (var f = this.timelines, g = 0, h = f.length; g < h; g++) f[g].apply(a, b, c, e, 1)
    },
    mix: function(a, b, c, d, e, f) {
        d && 0 != this.duration && (c %= this.duration, b > 0 && (b %= this.duration));
        for (var g = this.timelines, h = 0, i = g.length; h < i; h++) g[h].apply(a, b, c, e, f)
    }
}, spine.Animation.binarySearch = function(a, b, c) {
    var d = 0,
        e = Math.floor(a.length / c) - 2;
    if (!e) return c;
    for (var f = e >>> 1;;) {
        if (a[(f + 1) * c] <= b ? d = f + 1 : e = f, d == e) return (d + 1) * c;
        f = d + e >>> 1
    }
}, spine.Animation.binarySearch1 = function(a, b) {
    var c = 0,
        d = a.length - 2;
    if (!d) return 1;
    for (var e = d >>> 1;;) {
        if (a[e + 1] <= b ? c = e + 1 : d = e, c == d) return c + 1;
        e = c + d >>> 1
    }
}, spine.Animation.linearSearch = function(a, b, c) {
    for (var d = 0, e = a.length - c; d <= e; d += c)
        if (a[d] > b) return d;
    return -1
}, spine.Curves = function(a) {
    var b = 19 * (a - 1);
    this.curves = new spine.Float32Array(b), this.curves.length = b
}, spine.Curves.prototype = {
    setLinear: function(a) {
        this.curves[19 * a] = 0
    },
    setStepped: function(a) {
        this.curves[19 * a] = 1
    },
    setCurve: function(a, b, c, d, e) {
        var f = .1,
            g = f * f,
            h = g * f,
            i = 3 * f,
            j = 3 * g,
            k = 6 * g,
            l = 6 * h,
            m = 2 * -b + d,
            n = 2 * -c + e,
            o = 3 * (b - d) + 1,
            p = 3 * (c - e) + 1,
            q = b * i + m * j + o * h,
            r = c * i + n * j + p * h,
            s = m * k + o * l,
            t = n * k + p * l,
            u = o * l,
            v = p * l,
            w = 19 * a,
            x = this.curves;
        x[w++] = 2;
        for (var y = q, z = r, A = w + 19 - 1; w < A; w += 2) x[w] = y, x[w + 1] = z, q += s, r += t, s += u, t += v, y += q, z += r
    },
    getCurvePercent: function(a, b) {
        b = b < 0 ? 0 : b > 1 ? 1 : b;
        var c = this.curves,
            d = 19 * a,
            e = c[d];
        if (0 === e) return b;
        if (1 == e) return 0;
        d++;
        for (var f = 0, g = d, h = d + 19 - 1; d < h; d += 2)
            if (f = c[d], f >= b) {
                var i, j;
                return d == g ? (i = 0, j = 0) : (i = c[d - 2], j = c[d - 1]), j + (c[d + 1] - j) * (b - i) / (f - i)
            }
        var k = c[d - 1];
        return k + (1 - k) * (b - f) / (1 - f)
    }
}, spine.RotateTimeline = function(a) {
    this.curves = new spine.Curves(a), this.frames = new spine.Float32Array(2 * a), this.frames.length = 2 * a
}, spine.RotateTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 2
    },
    setFrame: function(a, b, c) {
        a *= 2, this.frames[a] = b, this.frames[a + 1] = c
    },
    apply: function(a, b, c, d, e) {
        var f = this.frames;
        if (!(c < f[0])) {
            var g = a.bones[this.boneIndex];
            if (c >= f[f.length - 2]) {
                for (var h = g.data.rotation + f[f.length - 1] - g.rotation; h > 180;) h -= 360;
                for (; h < -180;) h += 360;
                return void(g.rotation += h * e)
            }
            var i = spine.Animation.binarySearch(f, c, 2),
                j = f[i - 1],
                k = f[i],
                l = 1 - (c - k) / (f[i - 2] - k);
            l = this.curves.getCurvePercent(i / 2 - 1, l);
            for (var h = f[i + 1] - j; h > 180;) h -= 360;
            for (; h < -180;) h += 360;
            for (h = g.data.rotation + (j + h * l) - g.rotation; h > 180;) h -= 360;
            for (; h < -180;) h += 360;
            g.rotation += h * e
        }
    }
}, spine.TranslateTimeline = function(a) {
    this.curves = new spine.Curves(a), this.frames = new spine.Float32Array(3 * a), this.frames.length = 3 * a
}, spine.TranslateTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 3
    },
    setFrame: function(a, b, c, d) {
        a *= 3, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d
    },
    apply: function(a, b, c, d, e) {
        var f = this.frames;
        if (!(c < f[0])) {
            var g = a.bones[this.boneIndex];
            if (c >= f[f.length - 3]) return g.x += (g.data.x + f[f.length - 2] - g.x) * e, void(g.y += (g.data.y + f[f.length - 1] - g.y) * e);
            var h = spine.Animation.binarySearch(f, c, 3),
                i = f[h - 2],
                j = f[h - 1],
                k = f[h],
                l = 1 - (c - k) / (f[h + -3] - k);
            l = this.curves.getCurvePercent(h / 3 - 1, l), g.x += (g.data.x + i + (f[h + 1] - i) * l - g.x) * e, g.y += (g.data.y + j + (f[h + 2] - j) * l - g.y) * e
        }
    }
}, spine.ScaleTimeline = function(a) {
    this.curves = new spine.Curves(a), this.frames = new spine.Float32Array(3 * a), this.frames.length = 3 * a
}, spine.ScaleTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 3
    },
    setFrame: function(a, b, c, d) {
        a *= 3, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d
    },
    apply: function(a, b, c, d, e) {
        var f = this.frames;
        if (!(c < f[0])) {
            var g = a.bones[this.boneIndex];
            if (c >= f[f.length - 3]) return g.scaleX += (g.data.scaleX * f[f.length - 2] - g.scaleX) * e, void(g.scaleY += (g.data.scaleY * f[f.length - 1] - g.scaleY) * e);
            var h = spine.Animation.binarySearch(f, c, 3),
                i = f[h - 2],
                j = f[h - 1],
                k = f[h],
                l = 1 - (c - k) / (f[h + -3] - k);
            l = this.curves.getCurvePercent(h / 3 - 1, l), g.scaleX += (g.data.scaleX * (i + (f[h + 1] - i) * l) - g.scaleX) * e, g.scaleY += (g.data.scaleY * (j + (f[h + 2] - j) * l) - g.scaleY) * e
        }
    }
}, spine.ColorTimeline = function(a) {
    this.curves = new spine.Curves(a), this.frames = new spine.Float32Array(5 * a), this.frames.length = 5 * a
}, spine.ColorTimeline.prototype = {
    slotIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 5
    },
    setFrame: function(a, b, c, d, e, f) {
        a *= 5, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d, this.frames[a + 3] = e, this.frames[a + 4] = f
    },
    apply: function(a, b, c, d, e) {
        var f = this.frames;
        if (!(c < f[0])) {
            var g, h, i, j;
            if (c >= f[f.length - 5]) {
                var k = f.length - 1;
                g = f[k - 3], h = f[k - 2], i = f[k - 1], j = f[k]
            } else {
                var l = spine.Animation.binarySearch(f, c, 5),
                    m = f[l - 4],
                    n = f[l - 3],
                    o = f[l - 2],
                    p = f[l - 1],
                    q = f[l],
                    r = 1 - (c - q) / (f[l - 5] - q);
                r = this.curves.getCurvePercent(l / 5 - 1, r), g = m + (f[l + 1] - m) * r, h = n + (f[l + 2] - n) * r, i = o + (f[l + 3] - o) * r, j = p + (f[l + 4] - p) * r
            }
            var s = a.slots[this.slotIndex];
            e < 1 ? (s.r += (g - s.r) * e, s.g += (h - s.g) * e, s.b += (i - s.b) * e, s.a += (j - s.a) * e) : (s.r = g, s.g = h, s.b = i, s.a = j)
        }
    }
}, spine.AttachmentTimeline = function(a) {
    this.curves = new spine.Curves(a), this.frames = new spine.Float32Array(a), this.frames.length = a, this.attachmentNames = [], this.attachmentNames.length = a
}, spine.AttachmentTimeline.prototype = {
    slotIndex: 0,
    getFrameCount: function() {
        return this.frames.length
    },
    setFrame: function(a, b, c) {
        this.frames[a] = b, this.attachmentNames[a] = c
    },
    apply: function(a, b, c, d, e) {
        var f = this.frames;
        if (c < f[0]) return void(b > c && this.apply(a, b, Number.MAX_VALUE, null, 0));
        b > c && (b = -1);
        var g = c >= f[f.length - 1] ? f.length - 1 : spine.Animation.binarySearch1(f, c) - 1;
        if (!(f[g] < b)) {
            var h = this.attachmentNames[g];
            a.slots[this.slotIndex].setAttachment(h ? a.getAttachmentBySlotIndex(this.slotIndex, h) : null)
        }
    }
}, spine.EventTimeline = function(a) {
    this.frames = new spine.Float32Array(a), this.frames.length = a, this.events = [], this.events.length = a
}, spine.EventTimeline.prototype = {
    getFrameCount: function() {
        return this.frames.length
    },
    setFrame: function(a, b) {
        this.frames[a] = b.time, this.events[a] = b
    },
    apply: function(a, b, c, d, e) {
        if (d) {
            var f = this.frames,
                g = f.length;
            if (b > c) this.apply(a, b, Number.MAX_VALUE, d, e), b = -1;
            else if (b >= f[g - 1]) return;
            if (!(c < f[0])) {
                var h;
                if (b < f[0]) h = 0;
                else {
                    h = spine.Animation.binarySearch1(f, b);
                    for (var i = f[h]; h > 0 && f[h - 1] == i;) h--
                }
                for (var j = this.events; h < g && c >= f[h]; h++) d[d.length] = j[h]
            }
        }
    }
}, spine.DrawOrderTimeline = function(a) {
    this.frames = new spine.Float32Array(a), this.frames.length = a, this.drawOrders = [], this.drawOrders.length = a
}, spine.DrawOrderTimeline.prototype = {
    getFrameCount: function() {
        return this.frames.length
    },
    setFrame: function(a, b, c) {
        this.frames[a] = b, this.drawOrders[a] = c
    },
    apply: function(a, b, c, d, e) {
        var f = this.frames;
        if (!(c < f[0])) {
            var g;
            g = c >= f[f.length - 1] ? f.length - 1 : spine.Animation.binarySearch1(f, c) - 1;
            var h = a.drawOrder,
                i = a.slots,
                j = this.drawOrders[g];
            if (j)
                for (var k = 0, l = j.length; k < l; k++) h[k] = a.slots[j[k]];
            else
                for (var k = 0, l = i.length; k < l; k++) h[k] = i[k]
        }
    }
}, spine.FfdTimeline = function(a) {
    this.curves = new spine.Curves(a), this.frames = new spine.Float32Array(a), this.frames.length = a, this.frameVertices = [], this.frameVertices.length = a
}, spine.FfdTimeline.prototype = {
    slotIndex: 0,
    attachment: 0,
    getFrameCount: function() {
        return this.frames.length
    },
    setFrame: function(a, b, c) {
        this.frames[a] = b, this.frameVertices[a] = c
    },
    apply: function(a, b, c, d, e) {
        var f = a.slots[this.slotIndex],
            g = f.attachment;
        if (g && (g == this.attachment || g.inheritFFD && g.parentMesh == this.attachment)) {
            var h = this.frames;
            if (!(c < h[0])) {
                var i = this.frameVertices,
                    j = i[0].length,
                    k = f.attachmentVertices;
                if (k.length != j && (f.attachmentVertices = k = new spine.Float32Array(j), e = 1), c >= h[h.length - 1]) {
                    var l = i[h.length - 1];
                    if (e < 1)
                        for (var m = 0; m < j; m++) k[m] += (l[m] - k[m]) * e;
                    else
                        for (var m = 0; m < j; m++) k[m] = l[m]
                } else {
                    var n = spine.Animation.binarySearch1(h, c),
                        o = h[n],
                        p = 1 - (c - o) / (h[n - 1] - o);
                    p = this.curves.getCurvePercent(n - 1, p < 0 ? 0 : p > 1 ? 1 : p);
                    var q = i[n - 1],
                        r = i[n];
                    if (e < 1)
                        for (var m = 0; m < j; m++) {
                            var s = q[m];
                            k[m] += (s + (r[m] - s) * p - k[m]) * e
                        } else
                            for (var m = 0; m < j; m++) {
                                var s = q[m];
                                k[m] = s + (r[m] - s) * p
                            }
                }
            }
        }
    }
}, spine.IkConstraintTimeline = function(a) {
    this.curves = new spine.Curves(a), this.frames = new spine.Float32Array(3 * a), this.frames.length = 3 * a
}, spine.IkConstraintTimeline.prototype = {
    ikConstraintIndex: 0,
    getFrameCount: function() {
        return this.frames.length / 3
    },
    setFrame: function(a, b, c, d) {
        a *= 3, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d
    },
    apply: function(a, b, c, d, e) {
        var f = this.frames;
        if (!(c < f[0])) {
            var g = a.ikConstraints[this.ikConstraintIndex];
            if (c >= f[f.length - 3]) return g.mix += (f[f.length - 2] - g.mix) * e, void(g.bendDirection = f[f.length - 1]);
            var h = spine.Animation.binarySearch(f, c, 3),
                i = f[h + -2],
                j = f[h],
                k = 1 - (c - j) / (f[h + -3] - j);
            k = this.curves.getCurvePercent(h / 3 - 1, k);
            var l = i + (f[h + 1] - i) * k;
            g.mix += (l - g.mix) * e, g.bendDirection = f[h + -1]
        }
    }
}, spine.SkeletonData = function() {
    this.bones = [], this.slots = [], this.skins = [], this.events = [], this.animations = [], this.ikConstraints = [], this.transformConstraints = []
}, spine.SkeletonData.prototype = {
    name: null,
    defaultSkin: null,
    width: 0,
    height: 0,
    version: null,
    hash: null,
    findBone: function(a) {
        for (var b = this.bones, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return b[c];
        return null
    },
    findBoneIndex: function(a) {
        for (var b = this.bones, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return c;
        return -1
    },
    findSlot: function(a) {
        for (var b = this.slots, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return slot[c];
        return null
    },
    findSlotIndex: function(a) {
        for (var b = this.slots, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return c;
        return -1
    },
    findSkin: function(a) {
        for (var b = this.skins, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return b[c];
        return null
    },
    findEvent: function(a) {
        for (var b = this.events, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return b[c];
        return null
    },
    findAnimation: function(a) {
        for (var b = this.animations, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return b[c];
        return null
    },
    findIkConstraint: function(a) {
        for (var b = this.ikConstraints, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return b[c];
        return null
    },
    findTransformConstraints: function(a) {
        for (var b = this.transformConstraints, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return b[c];
        return null
    }
}, spine.Skeleton = function(a) {
    this.data = a, this.bones = [];
    for (var b = 0, c = a.bones.length; b < c; b++) {
        var d = a.bones[b],
            e = d.parent ? this.bones[a.bones.indexOf(d.parent)] : null;
        this.bones[b] = new spine.Bone(d, this, e)
    }
    this.slots = [], this.drawOrder = [];
    for (var b = 0, c = a.slots.length; b < c; b++) {
        var f = a.slots[b],
            g = this.bones[a.bones.indexOf(f.boneData)],
            h = new spine.Slot(f, g);
        this.slots[b] = h, this.drawOrder[b] = h
    }
    this.ikConstraints = [];
    for (var b = 0, c = a.ikConstraints.length; b < c; b++) this.ikConstraints[b] = new spine.IkConstraint(a.ikConstraints[b], this);
    this.transformConstraints = [];
    for (var b = 0, c = a.transformConstraints.length; b < c; b++) this.transformConstraints[b] = new spine.TransformConstraint(a.transformConstraints[b], this);
    this.cache = [], this.updateCache()
}, spine.Skeleton.prototype = {
    x: 0,
    y: 0,
    skin: null,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    time: 0,
    flipX: !1,
    flipY: !1,
    updateCache: function() {
        var a = this.bones,
            b = this.cache,
            c = this.ikConstraints,
            d = this.transformConstraints,
            e = c.length,
            f = d.length;
        b.length = 0;
        for (var g = 0, h = a.length; g < h; g++) {
            var i = a[g];
            b[b.length] = i;
            for (var j = 0; j < e; j++) {
                var k = c[j];
                if (i == k.bones[k.bones.length - 1]) {
                    b[b.length] = k;
                    break
                }
            }
        }
        for (var g = 0; g < f; g++)
            for (var l = d[g], j = b.length - 1; j >= 0; j--) {
                var m = b[j];
                if (m == l.bone || m == l.target) {
                    b.splice(j + 1, 0, l);
                    break
                }
            }
    },
    updateWorldTransform: function() {
        for (var a = this.cache, b = 0, c = a.length; b < c; b++) a[b].update()
    },
    setToSetupPose: function() {
        this.setBonesToSetupPose(), this.setSlotsToSetupPose()
    },
    setBonesToSetupPose: function() {
        for (var a = this.bones, b = 0, c = a.length; b < c; b++) a[b].setToSetupPose();
        for (var d = this.ikConstraints, b = 0, c = d.length; b < c; b++) {
            var e = d[b];
            e.bendDirection = e.data.bendDirection, e.mix = e.data.mix
        }
        for (var f = this.transformConstraints, b = 0, c = f.length; b < c; b++) {
            var e = f[b];
            e.translateMix = e.data.translateMix, e.x = e.data.x, e.y = e.data.y
        }
    },
    setSlotsToSetupPose: function() {
        for (var a = this.slots, b = this.drawOrder, c = 0, d = a.length; c < d; c++) b[c] = a[c], a[c].setToSetupPose(c)
    },
    getRootBone: function() {
        return this.bones.length ? this.bones[0] : null
    },
    findBone: function(a) {
        for (var b = this.bones, c = 0, d = b.length; c < d; c++)
            if (b[c].data.name == a) return b[c];
        return null
    },
    findBoneIndex: function(a) {
        for (var b = this.bones, c = 0, d = b.length; c < d; c++)
            if (b[c].data.name == a) return c;
        return -1
    },
    findSlot: function(a) {
        for (var b = this.slots, c = 0, d = b.length; c < d; c++)
            if (b[c].data.name == a) return b[c];
        return null
    },
    findSlotIndex: function(a) {
        for (var b = this.slots, c = 0, d = b.length; c < d; c++)
            if (b[c].data.name == a) return c;
        return -1
    },
    setSkinByName: function(a) {
        var b = this.data.findSkin(a);
        if (!b) throw "Skin not found: " + a;
        this.setSkin(b)
    },
    setSkin: function(a) {
        if (a)
            if (this.skin) a._attachAll(this, this.skin);
            else
                for (var b = this.slots, c = 0, d = b.length; c < d; c++) {
                    var e = b[c],
                        f = e.data.attachmentName;
                    if (f) {
                        var g = a.getAttachment(c, f);
                        g && e.setAttachment(g)
                    }
                }
        this.skin = a
    },
    getAttachmentBySlotName: function(a, b) {
        return this.getAttachmentBySlotIndex(this.data.findSlotIndex(a), b)
    },
    getAttachmentBySlotIndex: function(a, b) {
        if (this.skin) {
            var c = this.skin.getAttachment(a, b);
            if (c) return c
        }
        return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(a, b) : null
    },
    setAttachment: function(a, b) {
        for (var c = this.slots, d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            if (f.data.name == a) {
                var g = null;
                if (b && (g = this.getAttachmentBySlotIndex(d, b), !g)) throw "Attachment not found: " + b + ", for slot: " + a;
                return void f.setAttachment(g)
            }
        }
        throw "Slot not found: " + a
    },
    findIkConstraint: function(a) {
        for (var b = this.ikConstraints, c = 0, d = b.length; c < d; c++)
            if (b[c].data.name == a) return b[c];
        return null
    },
    findTransformConstraint: function(a) {
        for (var b = this.transformConstraints, c = 0, d = b.length; c < d; c++)
            if (b[c].data.name == a) return b[c];
        return null
    },
    update: function(a) {
        this.time += a
    }
}, spine.EventData = function(a) {
    this.name = a
}, spine.EventData.prototype = {
    intValue: 0,
    floatValue: 0,
    stringValue: null
}, spine.Event = function(a, b) {
    this.time = a, this.data = b
}, spine.Event.prototype = {
    intValue: 0,
    floatValue: 0,
    stringValue: null
}, spine.AttachmentType = {
    region: 0,
    boundingbox: 1,
    mesh: 2,
    weightedmesh: 3,
    linkedmesh: 4,
    weightedlinkedmesh: 5
}, spine.RegionAttachment = function(a) {
    this.name = a, this.offset = new spine.Float32Array(8), this.offset.length = 8, this.uvs = new spine.Float32Array(8), this.uvs.length = 8
}, spine.RegionAttachment.prototype = {
    type: spine.AttachmentType.region,
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    width: 0,
    height: 0,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    path: null,
    rendererObject: null,
    regionOffsetX: 0,
    regionOffsetY: 0,
    regionWidth: 0,
    regionHeight: 0,
    regionOriginalWidth: 0,
    regionOriginalHeight: 0,
    setUVs: function(a, b, c, d, e) {
        var f = this.uvs;
        e ? (f[2] = a, f[3] = d, f[4] = a, f[5] = b, f[6] = c, f[7] = b, f[0] = c, f[1] = d) : (f[0] = a, f[1] = d, f[2] = a, f[3] = b, f[4] = c, f[5] = b, f[6] = c, f[7] = d)
    },
    updateOffset: function() {
        var a = this.width / this.regionOriginalWidth * this.scaleX,
            b = this.height / this.regionOriginalHeight * this.scaleY,
            c = -this.width / 2 * this.scaleX + this.regionOffsetX * a,
            d = -this.height / 2 * this.scaleY + this.regionOffsetY * b,
            e = c + this.regionWidth * a,
            f = d + this.regionHeight * b,
            g = this.rotation * spine.degRad,
            h = Math.cos(g),
            i = Math.sin(g),
            j = c * h + this.x,
            k = c * i,
            l = d * h + this.y,
            m = d * i,
            n = e * h + this.x,
            o = e * i,
            p = f * h + this.y,
            q = f * i,
            r = this.offset;
        r[0] = j - m, r[1] = l + k, r[2] = j - q, r[3] = p + k, r[4] = n - q, r[5] = p + o, r[6] = n - m, r[7] = l + o
    },
    computeVertices: function(a, b, c, d) {
        a += c.worldX, b += c.worldY;
        var e = c.a,
            f = c.b,
            g = c.c,
            h = c.d,
            i = this.offset;
        d[0] = i[0] * e + i[1] * f + a, d[1] = i[0] * g + i[1] * h + b, d[2] = i[2] * e + i[3] * f + a, d[3] = i[2] * g + i[3] * h + b, d[4] = i[4] * e + i[5] * f + a, d[5] = i[4] * g + i[5] * h + b, d[6] = i[6] * e + i[7] * f + a, d[7] = i[6] * g + i[7] * h + b
    }
}, spine.MeshAttachment = function(a) {
    this.name = a
}, spine.MeshAttachment.prototype = {
    type: spine.AttachmentType.mesh,
    vertices: null,
    uvs: null,
    regionUVs: null,
    triangles: null,
    hullLength: 0,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    path: null,
    inheritFFD: !0,
    parentMesh: null,
    rendererObject: null,
    regionU: 0,
    regionV: 0,
    regionU2: 0,
    regionV2: 0,
    regionRotate: !1,
    regionOffsetX: 0,
    regionOffsetY: 0,
    regionWidth: 0,
    regionHeight: 0,
    regionOriginalWidth: 0,
    regionOriginalHeight: 0,
    edges: null,
    width: 0,
    height: 0,
    updateUVs: function() {
        var a = this.regionU2 - this.regionU,
            b = this.regionV2 - this.regionV,
            c = this.regionUVs.length;
        if (this.uvs && this.uvs.length == c || (this.uvs = new spine.Float32Array(c)), this.regionRotate)
            for (var d = 0; d < c; d += 2) this.uvs[d] = this.regionU + this.regionUVs[d + 1] * a, this.uvs[d + 1] = this.regionV + b - this.regionUVs[d] * b;
        else
            for (var d = 0; d < c; d += 2) this.uvs[d] = this.regionU + this.regionUVs[d] * a, this.uvs[d + 1] = this.regionV + this.regionUVs[d + 1] * b
    },
    computeWorldVertices: function(a, b, c, d) {
        var e = c.bone;
        a += e.worldX, b += e.worldY;
        var f = e.a,
            g = e.b,
            h = e.c,
            i = e.d,
            j = this.vertices,
            k = j.length;
        c.attachmentVertices.length == k && (j = c.attachmentVertices);
        for (var l = 0; l < k; l += 2) {
            var m = j[l],
                n = j[l + 1];
            d[l] = m * f + n * g + a, d[l + 1] = m * h + n * i + b
        }
    },
    setParentMesh: function(a) {
        this.parentMesh = a, a && (this.vertices = a.vertices, this.regionUVs = a.regionUVs, this.triangles = a.triangles, this.hullLength = a.hullLength, this.edges = a.edges, this.width = a.width, this.height = a.height)
    }
}, spine.WeightedMeshAttachment = function(a) {
    this.name = a
}, spine.WeightedMeshAttachment.prototype = {
    type: spine.AttachmentType.weightedmesh,
    bones: null,
    weights: null,
    uvs: null,
    regionUVs: null,
    triangles: null,
    hullLength: 0,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    path: null,
    inheritFFD: !0,
    parentMesh: null,
    rendererObject: null,
    regionU: 0,
    regionV: 0,
    regionU2: 0,
    regionV2: 0,
    regionRotate: !1,
    regionOffsetX: 0,
    regionOffsetY: 0,
    regionWidth: 0,
    regionHeight: 0,
    regionOriginalWidth: 0,
    regionOriginalHeight: 0,
    edges: null,
    width: 0,
    height: 0,
    updateUVs: function(a, b, c, d, e) {
        var f = this.regionU2 - this.regionU,
            g = this.regionV2 - this.regionV,
            h = this.regionUVs.length;
        if (this.uvs && this.uvs.length == h || (this.uvs = new spine.Float32Array(h)), this.regionRotate)
            for (var i = 0; i < h; i += 2) this.uvs[i] = this.regionU + this.regionUVs[i + 1] * f, this.uvs[i + 1] = this.regionV + g - this.regionUVs[i] * g;
        else
            for (var i = 0; i < h; i += 2) this.uvs[i] = this.regionU + this.regionUVs[i] * f, this.uvs[i + 1] = this.regionV + this.regionUVs[i + 1] * g
    },
    computeWorldVertices: function(a, b, c, d) {
        var e, f, g, h, i, j, k, l = c.bone.skeleton.bones,
            m = this.weights,
            n = this.bones,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = n.length;
        if (c.attachmentVertices.length)
            for (var t = c.attachmentVertices; p < s; o += 2) {
                for (f = 0, g = 0, e = n[p++] + p; p < e; p++, q += 3, r += 2) h = l[n[p]], i = m[q] + t[r], j = m[q + 1] + t[r + 1], k = m[q + 2], f += (i * h.a + j * h.b + h.worldX) * k, g += (i * h.c + j * h.d + h.worldY) * k;
                d[o] = f + a, d[o + 1] = g + b
            } else
                for (; p < s; o += 2) {
                    for (f = 0, g = 0, e = n[p++] + p; p < e; p++, q += 3) h = l[n[p]], i = m[q], j = m[q + 1], k = m[q + 2], f += (i * h.a + j * h.b + h.worldX) * k, g += (i * h.c + j * h.d + h.worldY) * k;
                    d[o] = f + a, d[o + 1] = g + b
                }
    },
    setParentMesh: function(a) {
        this.parentMesh = a, a && (this.bones = a.bones, this.weights = a.weights, this.regionUVs = a.regionUVs, this.triangles = a.triangles, this.hullLength = a.hullLength, this.edges = a.edges, this.width = a.width, this.height = a.height)
    }
}, spine.BoundingBoxAttachment = function(a) {
    this.name = a, this.vertices = new spine.Float32Array
}, spine.BoundingBoxAttachment.prototype = {
    type: spine.AttachmentType.boundingbox,
    computeWorldVertices: function(a, b, c, d) {
        a += c.worldX, b += c.worldY;
        for (var e = c.a, f = c.b, g = c.c, h = c.d, i = this.vertices, j = 0, k = i.length; j < k; j += 2) {
            var l = i[j],
                m = i[j + 1];
            d[j] = l * e + m * f + a, d[j + 1] = l * g + m * h + b
        }
    }
}, spine.AnimationStateData = function(a) {
    this.skeletonData = a, this.animationToMixTime = {}
}, spine.AnimationStateData.prototype = {
    defaultMix: 0,
    setMixByName: function(a, b, c) {
        var d = this.skeletonData.findAnimation(a);
        if (!d) throw "Animation not found: " + a;
        var e = this.skeletonData.findAnimation(b);
        if (!e) throw "Animation not found: " + b;
        this.setMix(d, e, c)
    },
    setMix: function(a, b, c) {
        this.animationToMixTime[a.name + ":" + b.name] = c
    },
    getMix: function(a, b) {
        var c = a.name + ":" + b.name;
        return this.animationToMixTime.hasOwnProperty(c) ? this.animationToMixTime[c] : this.defaultMix
    }
}, spine.TrackEntry = function() {}, spine.TrackEntry.prototype = {
    next: null,
    previous: null,
    animation: null,
    loop: !1,
    delay: 0,
    time: 0,
    lastTime: -1,
    endTime: 0,
    timeScale: 1,
    mixTime: 0,
    mixDuration: 0,
    mix: 1,
    onStart: null,
    onEnd: null,
    onComplete: null,
    onEvent: null
}, spine.AnimationState = function(a) {
    this.data = a, this.tracks = [], this.events = []
}, spine.AnimationState.prototype = {
    onStart: null,
    onEnd: null,
    onComplete: null,
    onEvent: null,
    timeScale: 1,
    update: function(a) {
        a *= this.timeScale;
        for (var b = 0; b < this.tracks.length; b++) {
            var c = this.tracks[b];
            if (c) {
                if (c.time += a * c.timeScale, c.previous) {
                    var d = a * c.previous.timeScale;
                    c.previous.time += d, c.mixTime += d
                }
                var e = c.next;
                e ? (e.time = c.lastTime - e.delay, e.time >= 0 && this.setCurrent(b, e)) : !c.loop && c.lastTime >= c.endTime && this.clearTrack(b)
            }
        }
    },
    apply: function(a) {
        for (var b = 0; b < this.tracks.length; b++) {
            var c = this.tracks[b];
            if (c) {
                this.events.length = 0;
                var d = c.time,
                    e = c.lastTime,
                    f = c.endTime,
                    g = c.loop;
                !g && d > f && (d = f);
                var h = c.previous;
                if (h) {
                    var i = h.time;
                    !h.loop && i > h.endTime && (i = h.endTime), h.animation.apply(a, i, i, h.loop, null);
                    var j = c.mixTime / c.mixDuration * c.mix;
                    j >= 1 && (j = 1, c.previous = null), c.animation.mix(a, c.lastTime, d, g, this.events, j)
                } else 1 == c.mix ? c.animation.apply(a, c.lastTime, d, g, this.events) : c.animation.mix(a, c.lastTime, d, g, this.events, c.mix);
                for (var k = 0, l = this.events.length; k < l; k++) {
                    var m = this.events[k];
                    c.onEvent && c.onEvent(b, m), this.onEvent && this.onEvent(b, m)
                }
                if (g ? e % f > d % f : e < f && d >= f) {
                    var n = Math.floor(d / f);
                    c.onComplete && c.onComplete(b, n), this.onComplete && this.onComplete(b, n)
                }
                c.lastTime = c.time
            }
        }
    },
    clearTracks: function() {
        for (var a = 0, b = this.tracks.length; a < b; a++) this.clearTrack(a);
        this.tracks.length = 0
    },
    clearTrack: function(a) {
        if (!(a >= this.tracks.length)) {
            var b = this.tracks[a];
            b && (b.onEnd && b.onEnd(a), this.onEnd && this.onEnd(a), this.tracks[a] = null)
        }
    },
    _expandToIndex: function(a) {
        if (a < this.tracks.length) return this.tracks[a];
        for (; a >= this.tracks.length;) this.tracks[this.tracks.length] = null;
        return null
    },
    setCurrent: function(a, b) {
        var c = this._expandToIndex(a);
        if (c) {
            var d = c.previous;
            c.previous = null, c.onEnd && c.onEnd(a), this.onEnd && this.onEnd(a), b.mixDuration = this.data.getMix(c.animation, b.animation), b.mixDuration > 0 && (b.mixTime = 0, d && c.mixTime / c.mixDuration < .5 ? b.previous = d : b.previous = c)
        }
        this.tracks[a] = b, b.onStart && b.onStart(a), this.onStart && this.onStart(a)
    },
    setAnimationByName: function(a, b, c) {
        var d = this.data.skeletonData.findAnimation(b);
        if (!d) throw "Animation not found: " + b;
        return this.setAnimation(a, d, c)
    },
    setAnimation: function(a, b, c) {
        var d = new spine.TrackEntry;
        return d.animation = b, d.loop = c, d.endTime = b.duration, this.setCurrent(a, d), d
    },
    addAnimationByName: function(a, b, c, d) {
        var e = this.data.skeletonData.findAnimation(b);
        if (!e) throw "Animation not found: " + b;
        return this.addAnimation(a, e, c, d)
    },
    addAnimation: function(a, b, c, d) {
        var e = new spine.TrackEntry;
        e.animation = b, e.loop = c, e.endTime = b.duration;
        var f = this._expandToIndex(a);
        if (f) {
            for (; f.next;) f = f.next;
            f.next = e
        } else this.tracks[a] = e;
        return d <= 0 && (f ? d += f.endTime - this.data.getMix(f.animation, b) : d = 0), e.delay = d, e
    },
    getCurrent: function(a) {
        return a >= this.tracks.length ? null : this.tracks[a]
    }
}, spine.SkeletonJson = function(a) {
    this.attachmentLoader = a, this.linkedMeshes = []
}, spine.SkeletonJson.prototype = {
    scale: 1,
    readSkeletonData: function(a, b) {
        var c = new spine.SkeletonData;
        c.name = b;
        var d = a.skeleton;
        d && (c.hash = d.hash, c.version = d.spine, c.width = d.width || 0, c.height = d.height || 0);
        for (var e = a.bones, f = 0, g = e.length; f < g; f++) {
            var h = e[f],
                i = null;
            if (h.parent && (i = c.findBone(h.parent), !i)) throw "Parent bone not found: " + h.parent;
            var j = new spine.BoneData(h.name, i);
            j.length = (h.length || 0) * this.scale, j.x = (h.x || 0) * this.scale, j.y = (h.y || 0) * this.scale, j.rotation = h.rotation || 0, j.scaleX = h.hasOwnProperty("scaleX") ? h.scaleX : 1, j.scaleY = h.hasOwnProperty("scaleY") ? h.scaleY : 1, j.inheritScale = !h.hasOwnProperty("inheritScale") || h.inheritScale, j.inheritRotation = !h.hasOwnProperty("inheritRotation") || h.inheritRotation, c.bones[f] = j
        }
        var k = a.ik;
        if (k)
            for (var f = 0, g = k.length; f < g; f++) {
                for (var l = k[f], m = new spine.IkConstraintData(l.name), e = l.bones, n = 0, o = e.length; n < o; n++) {
                    var p = c.findBone(e[n]);
                    if (!p) throw "IK bone not found: " + e[n];
                    m.bones[n] = p
                }
                if (m.target = c.findBone(l.target), !m.target) throw "Target bone not found: " + l.target;
                m.bendDirection = !l.hasOwnProperty("bendPositive") || l.bendPositive ? 1 : -1, m.mix = l.hasOwnProperty("mix") ? l.mix : 1, c.ikConstraints[f] = m
            }
        var q = a.transform;
        if (q)
            for (var f = 0, g = q.length; f < g; f++) {
                var r = q[f],
                    s = new spine.TransformConstraintData(r.name);
                if (s.bone = c.findBone(r.bone), !s.bone) throw "Bone not found: " + r.bone;
                if (s.target = c.findBone(r.target), !s.target) throw "Target bone not found: " + r.target;
                s.mix = r.hasOwnProperty("translateMix") ? l.translateMix : 1, s.x = (r.x || 0) * this.scale, s.y = (r.y || 0) * this.scale, c.transformConstraints[f] = s
            }
        for (var t = a.slots, f = 0, g = t.length; f < g; f++) {
            var u = t[f],
                j = c.findBone(u.bone);
            if (!j) throw "Slot bone not found: " + u.bone;
            var v = new spine.SlotData(u.name, j),
                w = u.color;
            w && (v.r = this.toColor(w, 0), v.g = this.toColor(w, 1), v.b = this.toColor(w, 2), v.a = this.toColor(w, 3)), v.attachmentName = u.attachment, v.blendMode = spine.BlendMode[u.blend || "normal"], c.slots[f] = v
        }
        var x = a.skins;
        for (var y in x)
            if (x.hasOwnProperty(y)) {
                var z = x[y],
                    A = new spine.Skin(y);
                for (var B in z)
                    if (z.hasOwnProperty(B)) {
                        var C = c.findSlotIndex(B),
                            D = z[B];
                        for (var E in D)
                            if (D.hasOwnProperty(E)) {
                                var F = this.readAttachment(A, C, E, D[E]);
                                F && A.addAttachment(C, E, F);
                            }
                    }
                c.skins[c.skins.length] = A, "default" == A.name && (c.defaultSkin = A)
            }
        for (var f = 0, g = this.linkedMeshes.length; f < g; f++) {
            var G = this.linkedMeshes[f],
                A = G.skin ? c.findSkin(G.skin) : c.defaultSkin;
            if (!A) throw "Skin not found: " + G.skin;
            var i = A.getAttachment(G.slotIndex, G.parent);
            if (!i) throw "Parent mesh not found: " + G.parent;
            G.mesh.setParentMesh(i), G.mesh.updateUVs()
        }
        this.linkedMeshes.length = 0;
        var H = a.events;
        for (var I in H)
            if (H.hasOwnProperty(I)) {
                var J = H[I],
                    K = new spine.EventData(I);
                K.intValue = J.int || 0, K.floatValue = J.float || 0, K.stringValue = J.string || null, c.events[c.events.length] = K
            }
        var L = a.animations;
        for (var M in L) L.hasOwnProperty(M) && this.readAnimation(M, L[M], c);
        return c
    },
    readAttachment: function(a, b, c, d) {
        c = d.name || c;
        var e = d.type || "region";
        "skinnedmesh" == e && (e = "weightedmesh"), e = spine.AttachmentType[e];
        var f = d.path || c,
            g = this.scale;
        switch (e) {
            case spine.AttachmentType.region:
                var h = this.attachmentLoader.newRegionAttachment(a, c, f);
                if (!h) return null;
                h.path = f, h.x = (d.x || 0) * g, h.y = (d.y || 0) * g, h.scaleX = d.hasOwnProperty("scaleX") ? d.scaleX : 1, h.scaleY = d.hasOwnProperty("scaleY") ? d.scaleY : 1, h.rotation = d.rotation || 0, h.width = (d.width || 0) * g, h.height = (d.height || 0) * g;
                var i = d.color;
                return i && (h.r = this.toColor(i, 0), h.g = this.toColor(i, 1), h.b = this.toColor(i, 2), h.a = this.toColor(i, 3)), h.updateOffset(), h;
            case spine.AttachmentType.mesh:
            case spine.AttachmentType.linkedmesh:
                var j = this.attachmentLoader.newMeshAttachment(a, c, f);
                return j ? (j.path = f, i = d.color, i && (j.r = this.toColor(i, 0), j.g = this.toColor(i, 1), j.b = this.toColor(i, 2), j.a = this.toColor(i, 3)), j.width = (d.width || 0) * g, j.height = (d.height || 0) * g, d.parent ? (j.inheritFFD = !d.hasOwnProperty("ffd") || d.ffd, this.linkedMeshes[this.linkedMeshes.length] = {
                    mesh: j,
                    skin: d.skin,
                    slotIndex: b,
                    parent: d.parent
                }) : (j.vertices = this.getFloatArray(d, "vertices", g), j.triangles = this.getUint32Array(d, "triangles"), j.regionUVs = this.getFloatArray(d, "uvs", 1), j.updateUVs(), j.hullLength = 2 * (d.hull || 0), d.edges && (j.edges = this.getUint16Array(d, "edges"))), j) : null;
            case spine.AttachmentType.weightedmesh:
            case spine.AttachmentType.weightedlinkedmesh:
                var j = this.attachmentLoader.newWeightedMeshAttachment(a, c, f);
                if (!j) return null;
                if (j.path = f, i = d.color, i && (j.r = this.toColor(i, 0), j.g = this.toColor(i, 1), j.b = this.toColor(i, 2), j.a = this.toColor(i, 3)), j.width = (d.width || 0) * g, j.height = (d.height || 0) * g, d.parent) j.inheritFFD = !d.hasOwnProperty("ffd") || d.ffd, this.linkedMeshes[this.linkedMeshes.length] = {
                    mesh: j,
                    skin: d.skin,
                    slotIndex: b,
                    parent: d.parent
                };
                else {
                    for (var k = this.getFloatArray(d, "uvs", 1), l = this.getFloatArray(d, "vertices", 1), m = new spine.Float32Array(3 * k.length * 3), n = new spine.Uint32Array(3 * k.length), o = 0, p = 0, q = 0, r = l.length; o < r;) {
                        var s = 0 | l[o++];
                        n[p++] = s;
                        for (var t = o + 4 * s; o < t;) n[p++] = l[o], m[q++] = l[o + 1] * g, m[q++] = l[o + 2] * g, m[q++] = l[o + 3], o += 4
                    }
                    j.bones = n, j.weights = m, j.triangles = this.getUint32Array(d, "triangles"), j.regionUVs = k, j.updateUVs(), j.hullLength = 2 * (d.hull || 0), d.edges && (j.edges = this.getUint16Array(d, "edges"))
                }
                return j;
            case spine.AttachmentType.boundingbox:
                var u = this.attachmentLoader.newBoundingBoxAttachment(a, c),
                    l = d.vertices;
                u.vertices = new spine.Float32Array(l.length);
                for (var o = 0, r = l.length; o < r; o++) u.vertices[o] = l[o] * g;
                return u
        }
        throw "Unknown attachment type: " + e
    },
    readAnimation: function(a, b, c) {
        var d = [],
            e = 0,
            f = b.slots;
        for (var g in f)
            if (f.hasOwnProperty(g)) {
                var h = f[g],
                    i = c.findSlotIndex(g);
                for (var j in h)
                    if (h.hasOwnProperty(j)) {
                        var k = h[j];
                        if ("color" == j) {
                            var l = new spine.ColorTimeline(k.length);
                            l.slotIndex = i;
                            for (var m = 0, n = 0, o = k.length; n < o; n++) {
                                var p = k[n],
                                    q = p.color,
                                    r = this.toColor(q, 0),
                                    s = this.toColor(q, 1),
                                    t = this.toColor(q, 2),
                                    u = this.toColor(q, 3);
                                l.setFrame(m, p.time, r, s, t, u), this.readCurve(l, m, p), m++
                            }
                            d[d.length] = l, e = Math.max(e, l.frames[5 * l.getFrameCount() - 5])
                        } else {
                            if ("attachment" != j) throw "Invalid timeline type for a slot: " + j + " (" + g + ")";
                            var l = new spine.AttachmentTimeline(k.length);
                            l.slotIndex = i;
                            for (var m = 0, n = 0, o = k.length; n < o; n++) {
                                var p = k[n];
                                l.setFrame(m++, p.time, p.name)
                            }
                            d[d.length] = l, e = Math.max(e, l.frames[l.getFrameCount() - 1])
                        }
                    }
            }
        var v = b.bones;
        for (var w in v)
            if (v.hasOwnProperty(w)) {
                var x = c.findBoneIndex(w);
                if (x == -1) throw "Bone not found: " + w;
                var y = v[w];
                for (var j in y)
                    if (y.hasOwnProperty(j)) {
                        var k = y[j];
                        if ("rotate" == j) {
                            var l = new spine.RotateTimeline(k.length);
                            l.boneIndex = x;
                            for (var m = 0, n = 0, o = k.length; n < o; n++) {
                                var p = k[n];
                                l.setFrame(m, p.time, p.angle), this.readCurve(l, m, p), m++
                            }
                            d[d.length] = l, e = Math.max(e, l.frames[2 * l.getFrameCount() - 2])
                        } else {
                            if ("translate" != j && "scale" != j) throw "Invalid timeline type for a bone: " + j + " (" + w + ")";
                            var l, z = 1;
                            "scale" == j ? l = new spine.ScaleTimeline(k.length) : (l = new spine.TranslateTimeline(k.length), z = this.scale), l.boneIndex = x;
                            for (var m = 0, n = 0, o = k.length; n < o; n++) {
                                var p = k[n],
                                    A = (p.x || 0) * z,
                                    B = (p.y || 0) * z;
                                l.setFrame(m, p.time, A, B), this.readCurve(l, m, p), m++
                            }
                            d[d.length] = l, e = Math.max(e, l.frames[3 * l.getFrameCount() - 3])
                        }
                    }
            }
        var C = b.ik;
        for (var D in C)
            if (C.hasOwnProperty(D)) {
                var E = c.findIkConstraint(D),
                    k = C[D],
                    l = new spine.IkConstraintTimeline(k.length);
                l.ikConstraintIndex = c.ikConstraints.indexOf(E);
                for (var m = 0, n = 0, o = k.length; n < o; n++) {
                    var p = k[n],
                        F = p.hasOwnProperty("mix") ? p.mix : 1,
                        G = !p.hasOwnProperty("bendPositive") || p.bendPositive ? 1 : -1;
                    l.setFrame(m, p.time, F, G), this.readCurve(l, m, p), m++
                }
                d[d.length] = l, e = Math.max(e, l.frames[3 * l.getFrameCount() - 3])
            }
        var H = b.ffd;
        for (var I in H) {
            var J = c.findSkin(I),
                h = H[I];
            for (g in h) {
                var i = c.findSlotIndex(g),
                    K = h[g];
                for (var L in K) {
                    var k = K[L],
                        l = new spine.FfdTimeline(k.length),
                        M = J.getAttachment(i, L);
                    if (!M) throw "FFD attachment not found: " + L;
                    l.slotIndex = i, l.attachment = M;
                    var N, O = M.type == spine.AttachmentType.mesh;
                    N = O ? M.vertices.length : M.weights.length / 3 * 2;
                    for (var m = 0, n = 0, o = k.length; n < o; n++) {
                        var P, p = k[n];
                        if (p.vertices) {
                            var Q = p.vertices,
                                P = new spine.Float32Array(N);
                            P.length = N;
                            var R = p.offset || 0,
                                S = Q.length;
                            if (1 == this.scale)
                                for (var T = 0; T < S; T++) P[T + R] = Q[T];
                            else
                                for (var T = 0; T < S; T++) P[T + R] = Q[T] * this.scale;
                            if (O)
                                for (var U = M.vertices, T = 0, S = P.length; T < S; T++) P[T] += U[T]
                        } else O ? P = M.vertices : (P = new spine.Float32Array(N), P.length = N);
                        l.setFrame(m, p.time, P), this.readCurve(l, m, p), m++
                    }
                    d[d.length] = l, e = Math.max(e, l.frames[l.getFrameCount() - 1])
                }
            }
        }
        var V = b.drawOrder;
        if (V || (V = b.draworder), V) {
            for (var l = new spine.DrawOrderTimeline(V.length), W = c.slots.length, m = 0, n = 0, o = V.length; n < o; n++) {
                var X = V[n],
                    Y = null;
                if (X.offsets) {
                    Y = new spine.Uint32Array(W), Y.length = W;
                    for (var T = W - 1; T >= 0; T--) Y[T] = 4294967295;
                    var Z = X.offsets,
                        $ = new spine.Uint32Array(W - Z.length);
                    $.length = W - Z.length;
                    for (var _ = 0, aa = 0, T = 0, S = Z.length; T < S; T++) {
                        var ba = Z[T],
                            i = c.findSlotIndex(ba.slot);
                        if (i == -1) throw "Slot not found: " + ba.slot;
                        for (; _ != i;) $[aa++] = _++;
                        Y[_ + ba.offset] = _++
                    }
                    for (; _ < W;) $[aa++] = _++;
                    for (var T = W - 1; T >= 0; T--) 4294967295 == Y[T] && (Y[T] = $[--aa])
                }
                l.setFrame(m++, X.time, Y)
            }
            d[d.length] = l, e = Math.max(e, l.frames[l.getFrameCount() - 1])
        }
        var ca = b.events;
        if (ca) {
            for (var l = new spine.EventTimeline(ca.length), m = 0, n = 0, o = ca.length; n < o; n++) {
                var da = ca[n],
                    ea = c.findEvent(da.name);
                if (!ea) throw "Event not found: " + da.name;
                var fa = new spine.Event(da.time, ea);
                fa.intValue = da.hasOwnProperty("int") ? da.int : ea.intValue, fa.floatValue = da.hasOwnProperty("float") ? da.float : ea.floatValue, fa.stringValue = da.hasOwnProperty("string") ? da.string : ea.stringValue, l.setFrame(m++, fa)
            }
            d[d.length] = l, e = Math.max(e, l.frames[l.getFrameCount() - 1])
        }
        c.animations[c.animations.length] = new spine.Animation(a, d, e)
    },
    readCurve: function(a, b, c) {
        var d = c.curve;
        d ? "stepped" == d ? a.curves.setStepped(b) : d instanceof Array && a.curves.setCurve(b, d[0], d[1], d[2], d[3]) : a.curves.setLinear(b)
    },
    toColor: function(a, b) {
        if (8 != a.length) throw "Color hexidecimal length must be 8, recieved: " + a;
        return parseInt(a.substring(2 * b, 2 * b + 2), 16) / 255
    },
    getFloatArray: function(a, b, c) {
        var d = a[b],
            e = new spine.Float32Array(d.length),
            f = 0,
            g = d.length;
        if (1 == c)
            for (; f < g; f++) e[f] = d[f];
        else
            for (; f < g; f++) e[f] = d[f] * c;
        return e
    },
    getUint32Array: function(a, b) {
        for (var c = a[b], d = new spine.Uint32Array(c.length), e = 0, f = c.length; e < f; e++) d[e] = 0 | c[e];
        return d
    },
    getUint16Array: function(a, b) {
        for (var c = a[b], d = new spine.Uint16Array(c.length), e = 0, f = c.length; e < f; e++) d[e] = 0 | c[e];
        return d
    }
}, spine.Atlas = function(a, b) {
    this.textureLoader = b, this.pages = [], this.regions = [];
    var c = new spine.AtlasReader(a),
        d = [];
    d.length = 4;
    for (var e = null;;) {
        var f = c.readLine();
        if (null === f) break;
        if (f = c.trim(f), f.length)
            if (e) {
                var g = new spine.AtlasRegion;
                g.name = f, g.page = e, g.rotate = "true" == c.readValue(), c.readTuple(d);
                var h = parseInt(d[0]),
                    i = parseInt(d[1]);
                c.readTuple(d);
                var j = parseInt(d[0]),
                    k = parseInt(d[1]);
                g.u = h / e.width, g.v = i / e.height, g.rotate ? (g.u2 = (h + k) / e.width, g.v2 = (i + j) / e.height) : (g.u2 = (h + j) / e.width, g.v2 = (i + k) / e.height), g.x = h, g.y = i, g.width = Math.abs(j), g.height = Math.abs(k), 4 == c.readTuple(d) && (g.splits = [parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3])], 4 == c.readTuple(d) && (g.pads = [parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3])], c.readTuple(d))), g.originalWidth = parseInt(d[0]), g.originalHeight = parseInt(d[1]), c.readTuple(d), g.offsetX = parseInt(d[0]), g.offsetY = parseInt(d[1]), g.index = parseInt(c.readValue()), this.regions[this.regions.length] = g
            } else {
                e = new spine.AtlasPage, e.name = f, 2 == c.readTuple(d) && (e.width = parseInt(d[0]), e.height = parseInt(d[1]), c.readTuple(d)), e.format = spine.Atlas.Format[d[0]], c.readTuple(d), e.minFilter = spine.Atlas.TextureFilter[d[0]], e.magFilter = spine.Atlas.TextureFilter[d[1]];
                var l = c.readValue();
                e.uWrap = spine.Atlas.TextureWrap.clampToEdge, e.vWrap = spine.Atlas.TextureWrap.clampToEdge, "x" == l ? e.uWrap = spine.Atlas.TextureWrap.repeat : "y" == l ? e.vWrap = spine.Atlas.TextureWrap.repeat : "xy" == l && (e.uWrap = e.vWrap = spine.Atlas.TextureWrap.repeat), b.load(e, f, this), this.pages[this.pages.length] = e
            }
        else e = null
    }
}, spine.Atlas.prototype = {
    findRegion: function(a) {
        for (var b = this.regions, c = 0, d = b.length; c < d; c++)
            if (b[c].name == a) return b[c];
        return null
    },
    dispose: function() {
        for (var a = this.pages, b = 0, c = a.length; b < c; b++) this.textureLoader.unload(a[b].rendererObject)
    },
    updateUVs: function(a) {
        for (var b = this.regions, c = 0, d = b.length; c < d; c++) {
            var e = b[c];
            e.page == a && (e.u = e.x / a.width, e.v = e.y / a.height, e.rotate ? (e.u2 = (e.x + e.height) / a.width, e.v2 = (e.y + e.width) / a.height) : (e.u2 = (e.x + e.width) / a.width, e.v2 = (e.y + e.height) / a.height))
        }
    }
}, spine.Atlas.Format = {
    alpha: 0,
    intensity: 1,
    luminanceAlpha: 2,
    rgb565: 3,
    rgba4444: 4,
    rgb888: 5,
    rgba8888: 6
}, spine.Atlas.TextureFilter = {
    nearest: 0,
    linear: 1,
    mipMap: 2,
    mipMapNearestNearest: 3,
    mipMapLinearNearest: 4,
    mipMapNearestLinear: 5,
    mipMapLinearLinear: 6
}, spine.Atlas.TextureWrap = {
    mirroredRepeat: 0,
    clampToEdge: 1,
    repeat: 2
}, spine.AtlasPage = function() {}, spine.AtlasPage.prototype = {
    name: null,
    format: null,
    minFilter: null,
    magFilter: null,
    uWrap: null,
    vWrap: null,
    rendererObject: null,
    width: 0,
    height: 0
}, spine.AtlasRegion = function() {}, spine.AtlasRegion.prototype = {
    page: null,
    name: null,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    u: 0,
    v: 0,
    u2: 0,
    v2: 0,
    offsetX: 0,
    offsetY: 0,
    originalWidth: 0,
    originalHeight: 0,
    index: 0,
    rotate: !1,
    splits: null,
    pads: null
}, spine.AtlasReader = function(a) {
    this.lines = a.split(/\r\n|\r|\n/)
}, spine.AtlasReader.prototype = {
    index: 0,
    trim: function(a) {
        return a.replace(/^\s+|\s+$/g, "")
    },
    readLine: function() {
        return this.index >= this.lines.length ? null : this.lines[this.index++]
    },
    readValue: function() {
        var a = this.readLine(),
            b = a.indexOf(":");
        if (b == -1) throw "Invalid line: " + a;
        return this.trim(a.substring(b + 1))
    },
    readTuple: function(a) {
        var b = this.readLine(),
            c = b.indexOf(":");
        if (c == -1) throw "Invalid line: " + b;
        for (var d = 0, e = c + 1; d < 3; d++) {
            var f = b.indexOf(",", e);
            if (f == -1) break;
            a[d] = this.trim(b.substr(e, f - e)), e = f + 1
        }
        return a[d] = this.trim(b.substring(e)), d + 1
    }
}, spine.AtlasAttachmentLoader = function(a) {
    this.atlas = a
}, spine.AtlasAttachmentLoader.prototype = {
    newRegionAttachment: function(a, b, c) {
        var d = this.atlas.findRegion(c);
        if (!d) throw "Region not found in atlas: " + c + " (region attachment: " + b + ")";
        var e = new spine.RegionAttachment(b);
        return e.rendererObject = d, e.setUVs(d.u, d.v, d.u2, d.v2, d.rotate), e.regionOffsetX = d.offsetX, e.regionOffsetY = d.offsetY, e.regionWidth = d.width, e.regionHeight = d.height, e.regionOriginalWidth = d.originalWidth, e.regionOriginalHeight = d.originalHeight, e
    },
    newMeshAttachment: function(a, b, c) {
        var d = this.atlas.findRegion(c);
        if (!d) throw "Region not found in atlas: " + c + " (mesh attachment: " + b + ")";
        var e = new spine.MeshAttachment(b);
        return e.rendererObject = d, e.regionU = d.u, e.regionV = d.v, e.regionU2 = d.u2, e.regionV2 = d.v2, e.regionRotate = d.rotate, e.regionOffsetX = d.offsetX, e.regionOffsetY = d.offsetY, e.regionWidth = d.width, e.regionHeight = d.height, e.regionOriginalWidth = d.originalWidth, e.regionOriginalHeight = d.originalHeight, e
    },
    newWeightedMeshAttachment: function(a, b, c) {
        var d = this.atlas.findRegion(c);
        if (!d) throw "Region not found in atlas: " + c + " (weighted mesh attachment: " + b + ")";
        var e = new spine.WeightedMeshAttachment(b);
        return e.rendererObject = d, e.regionU = d.u, e.regionV = d.v, e.regionU2 = d.u2, e.regionV2 = d.v2, e.regionRotate = d.rotate, e.regionOffsetX = d.offsetX, e.regionOffsetY = d.offsetY, e.regionWidth = d.width, e.regionHeight = d.height, e.regionOriginalWidth = d.originalWidth, e.regionOriginalHeight = d.originalHeight, e
    },
    newBoundingBoxAttachment: function(a, b) {
        return new spine.BoundingBoxAttachment(b)
    }
}, spine.SkeletonBounds = function() {
    this.polygonPool = [], this.polygons = [], this.boundingBoxes = []
}, spine.SkeletonBounds.prototype = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
    update: function(a, b) {
        var c = a.slots,
            d = c.length,
            e = a.x,
            f = a.y,
            g = this.boundingBoxes,
            h = this.polygonPool,
            i = this.polygons;
        g.length = 0;
        for (var j = 0, k = i.length; j < k; j++) h[h.length] = i[j];
        i.length = 0;
        for (var j = 0; j < d; j++) {
            var l = c[j],
                m = l.attachment;
            if (m.type == spine.AttachmentType.boundingbox) {
                g[g.length] = m;
                var n, o = h.length;
                o > 0 ? (n = h[o - 1], h.splice(o - 1, 1)) : n = new spine.Float32Array, i[i.length] = n, n.length = m.vertices.length, m.computeWorldVertices(e, f, l.bone, n)
            }
        }
        b && this.aabbCompute()
    },
    aabbCompute: function() {
        for (var a = this.polygons, b = Number.MAX_VALUE, c = Number.MAX_VALUE, d = -Number.MAX_VALUE, e = -Number.MAX_VALUE, f = 0, g = a.length; f < g; f++)
            for (var h = a[f], i = 0, j = h.length; i < j; i += 2) {
                var k = h[i],
                    l = h[i + 1];
                b = Math.min(b, k), c = Math.min(c, l), d = Math.max(d, k), e = Math.max(e, l)
            }
        this.minX = b, this.minY = c, this.maxX = d, this.maxY = e
    },
    aabbContainsPoint: function(a, b) {
        return a >= this.minX && a <= this.maxX && b >= this.minY && b <= this.maxY
    },
    aabbIntersectsSegment: function(a, b, c, d) {
        var e = this.minX,
            f = this.minY,
            g = this.maxX,
            h = this.maxY;
        if (a <= e && c <= e || b <= f && d <= f || a >= g && c >= g || b >= h && d >= h) return !1;
        var i = (d - b) / (c - a),
            j = i * (e - a) + b;
        if (j > f && j < h) return !0;
        if (j = i * (g - a) + b, j > f && j < h) return !0;
        var k = (f - b) / i + a;
        return k > e && k < g || (k = (h - b) / i + a, k > e && k < g)
    },
    aabbIntersectsSkeleton: function(a) {
        return this.minX < a.maxX && this.maxX > a.minX && this.minY < a.maxY && this.maxY > a.minY
    },
    containsPoint: function(a, b) {
        for (var c = this.polygons, d = 0, e = c.length; d < e; d++)
            if (this.polygonContainsPoint(c[d], a, b)) return this.boundingBoxes[d];
        return null
    },
    intersectsSegment: function(a, b, c, d) {
        for (var e = this.polygons, f = 0, g = e.length; f < g; f++)
            if (e[f].intersectsSegment(a, b, c, d)) return this.boundingBoxes[f];
        return null
    },
    polygonContainsPoint: function(a, b, c) {
        for (var d = a.length, e = d - 2, f = !1, g = 0; g < d; g += 2) {
            var h = a[g + 1],
                i = a[e + 1];
            if (h < c && i >= c || i < c && h >= c) {
                var j = a[g];
                j + (c - h) / (i - h) * (a[e] - j) < b && (f = !f)
            }
            e = g
        }
        return f
    },
    polygonIntersectsSegment: function(a, b, c, d, e) {
        for (var f = a.length, g = b - d, h = c - e, i = b * e - c * d, j = a[f - 2], k = a[f - 1], l = 0; l < f; l += 2) {
            var m = a[l],
                n = a[l + 1],
                o = j * n - k * m,
                p = j - m,
                q = k - n,
                r = g * q - h * p,
                s = (i * p - g * o) / r;
            if ((s >= j && s <= m || s >= m && s <= j) && (s >= b && s <= d || s >= d && s <= b)) {
                var t = (i * q - h * o) / r;
                if ((t >= k && t <= n || t >= n && t <= k) && (t >= c && t <= e || t >= e && t <= c)) return !0
            }
            j = m, k = n
        }
        return !1
    },
    getPolygon: function(a) {
        var b = this.boundingBoxes.indexOf(a);
        return b == -1 ? null : this.polygons[b]
    },
    getWidth: function() {
        return this.maxX - this.minX
    },
    getHeight: function() {
        return this.maxY - this.minY
    }
};
var __extends = this && this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
    },
    PhaserSpine;
! function(a) {
    var b = function(b) {
        function c(a, c) {
            var d = b.call(this, a, c) || this;
            return d.addSpineCache(), d.addSpineFactory(), d.addSpineLoader(), d
        }
        return __extends(c, b), c.prototype.addSpineLoader = function() {
            Phaser.Loader.prototype.spine = function(a, b, c) {
                var d = this,
                    e = a + "Atlas",
                    f = {
                        atlas: e,
                        basePath: "" === b.substring(0, b.lastIndexOf("/")) ? "." : b.substring(0, b.lastIndexOf("/")),
                        variants: void 0
                    };
                void 0 === c ? c = [""] : f.variants = c, c.forEach(function(a) {
                    d.onFileComplete.add(function(b, c) {
                        if (c === e) {
                            new spine.Atlas(d.game.cache.getText(c), {
                                load: function(b, c, e) {
                                    d.image(c, f.basePath + "/" + c.substr(0, c.lastIndexOf(".")) + a + ".png")
                                }
                            })
                        }
                    }), d.text(e, b.substr(0, b.lastIndexOf(".")) + a + ".atlas")
                }), this.json(a, b), this.game.cache.addSpine(a, f)
            }
        }, c.prototype.addSpineFactory = function() {
            Phaser.GameObjectFactory.prototype.spine = function(b, c, d, e, f) {
                void 0 === f && (f = this.world);
                var g = new a.Spine(this.game, d, e);
                return g.setToSetupPose(), g.position.x = b, g.position.y = c, f.add(g)
            }, Phaser.GameObjectCreator.prototype.spine = function(b, c, d, e, f) {
                return new a.Spine(this.game, d, e)
            }
        }, c.prototype.addSpineCache = function() {
            Phaser.Cache.prototype.spine = {}, Phaser.Cache.prototype.addSpine = function(a, b) {
                this.spine[a] = b
            }, Phaser.Cache.prototype.getSpine = function(a) {
                return !this.spine.hasOwnProperty(a), this.spine[a]
            }
        }, c
    }(Phaser.Plugin);
    b.RESOLUTION_REGEXP = /@(.+)x/, a.SpinePlugin = b
}(PhaserSpine || (PhaserSpine = {})), Phaser.Rope.prototype.postUpdate = function() {}, spine.Bone.yDown = !0;
var PhaserSpine;
! function(a) {
    var b = function(b) {
        function c(c, d, e) {
            var f = b.call(this, c) || this;
            f.imageScale = 1;
            var g = f.game.cache.getSpine(d);
            void 0 !== e && g.variants.indexOf(e) !== -1 ? f.imageScale = f.getScaleFromVariant(e) : g.variants && g.variants.length >= 1 && (f.imageScale = f.getScaleFromVariant(g.variants[0]));
            var h = new a.SpineTextureLoader(c),
                i = new spine.Atlas(c.cache.getText(g.atlas), h),
                j = new spine.AtlasAttachmentLoader(i),
                k = new spine.SkeletonJson(j);
            if (f.skeletonData = k.readSkeletonData(c.cache.getJSON(d)), !f.skeletonData) throw new Error("Spine data must be preloaded using Loader.spine");
            f.onEvent = new Phaser.Signal, f.onComplete = new Phaser.Signal, f.onEnd = new Phaser.Signal, f.skeleton = new spine.Skeleton(f.skeletonData), f.skeleton.updateWorldTransform(), f.stateData = new spine.AnimationStateData(f.skeletonData), f.state = new spine.AnimationState(f.stateData), f.state.onEvent = f.onEvent.dispatch.bind(f.onEvent), f.state.onComplete = f.onComplete.dispatch.bind(f.onComplete), f.state.onEnd = f.onEnd.dispatch.bind(f.onEnd), f.slotContainers = [];
            for (var l = 0, m = f.skeleton.slots.length; l < m; l++) {
                var n = f.skeleton.slots[l],
                    o = n.attachment,
                    p = new Phaser.Group(c);
                if (f.slotContainers.push(p), f.add(p), o instanceof spine.RegionAttachment) {
                    var q = o.rendererObject.name,
                        r = f.createSprite(n, o);
                    n.currentSprite = r, n.currentSpriteName = q, p.add(r)
                } else {
                    if (!(o instanceof spine.WeightedMeshAttachment)) continue;
                    var s = f.createMesh(n, o);
                    n.currentMesh = s, n.currentMeshName = o.name, p.add(s)
                }
            }
            return f.autoUpdate = !0, f
        }
        return __extends(c, b), Object.defineProperty(c.prototype, "autoUpdate", {
            get: function() {
                return this.updateTransform === a.Spine.prototype.autoUpdateTransform
            },
            set: function(b) {
                this.updateTransform = b ? a.Spine.prototype.autoUpdateTransform : PIXI.DisplayObjectContainer.prototype.updateTransform
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.getScaleFromVariant = function(b) {
            var c = a.SpinePlugin.RESOLUTION_REGEXP.exec(b);
            return c ? parseFloat(c[1]) : 1
        }, c.prototype.setTint = function(a) {
            this.globalTint = a;
            for (var b = this.skeleton.slots, c = 0; c < b.length; c++) {
                var d = b[c];
                d.currentSprite.tint = a
            }
        }, c.prototype.update = function(a) {
            if (void 0 !== a) {
                this.state.update(a), this.state.apply(this.skeleton), this.skeleton.updateWorldTransform();
                for (var b = this.skeleton.drawOrder, c = this.skeleton.slots, d = 0, e = b.length; d < e; d++) void 0 !== b[d].currentSprite && (this.children[d] = b[d].currentSprite.parent);
                for (var d = 0, e = c.length; d < e; d++) {
                    var f = c[d],
                        g = f.attachment,
                        h = this.slotContainers[d];
                    if (g) {
                        var i = g.type;
                        if (i === spine.AttachmentType.region) {
                            if (g.rendererObject && (!f.currentSpriteName || f.currentSpriteName !== g.name)) {
                                var j = g.rendererObject.name;
                                if (void 0 !== f.currentSprite && (f.currentSprite.visible = !1), f.sprites = f.sprites || {}, void 0 !== f.sprites[j]) f.sprites[j].visible = !0;
                                else {
                                    var k = this.createSprite(f, g);
                                    h.add(k)
                                }
                                f.currentSprite = f.sprites[j], f.currentSpriteName = j
                            }
                            var l = f.bone;
                            h.position.x = g.x * l.a + g.y * l.b + l.worldX, h.position.y = g.x * l.c + g.y * l.d + l.worldY, h.scale.x = l.getWorldScaleX(), h.scale.y = l.getWorldScaleY(), h.rotation = (l.getWorldRotationX() - g.rotation) * Math.PI / 180, l.getWorldScaleY() < 0 && (h.scale.y = -h.scale.y), l.getWorldScaleX() < 0 && (h.scale.x = -h.scale.x), (l.getWorldScaleY() < 0 || l.getWorldScaleX() < 0) && (h.rotation = -h.rotation), f.currentSprite.blendMode = f.blendMode, this.globalTint || (f.currentSprite.tint = f.currentSprite.tint = parseInt(Phaser.Color.componentToHex(255 * f.r).substring(0, 2) + Phaser.Color.componentToHex(255 * f.g).substring(0, 2) + Phaser.Color.componentToHex(255 * f.b).substring(0, 2), 16))
                        } else {
                            if (i !== spine.AttachmentType.weightedmesh && i !== spine.AttachmentType.weightedlinkedmesh) {
                                h.visible = !1;
                                continue
                            }
                            if (!f.currentMeshName || f.currentMeshName !== g.name) {
                                var m = g.name;
                                if (void 0 !== f.currentMesh && (f.currentMesh.visible = !1), f.meshes = f.meshes || {}, void 0 !== f.meshes[m]) f.meshes[m].visible = !0;
                                else {
                                    var n = this.createMesh(f, g);
                                    h.add(n)
                                }
                                f.currentMesh = f.meshes[m], f.currentMeshName = m
                            }
                            g.computeWorldVertices(f.bone.skeleton.x, f.bone.skeleton.y, f, f.currentMesh.vertices)
                        }
                        h.visible = !0, h.alpha = f.a
                    } else h.visible = !1
                }
            }
        }, c.prototype.destroy = function(a, c) {
            b.prototype.destroy.call(this, !0, c)
        }, c.prototype.autoUpdateTransform = function() {
            if (c.globalAutoUpdate) {
                this.lastTime = this.lastTime || Date.now();
                var a = .001 * (Date.now() - this.lastTime);
                this.lastTime = Date.now(), this.update(a)
            } else this.lastTime = 0;
            PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
        }, c.prototype.createSprite = function(a, b) {
            var c = b.rendererObject,
                d = c.page.rendererObject,
                e = new PIXI.Rectangle(c.x, c.y, c.rotate ? c.height : c.width, c.rotate ? c.width : c.height),
                f = new PIXI.Texture(d, e),
                g = new Phaser.Sprite(this.game, 0, 0, f),
                h = c.rotate ? .5 * Math.PI : 0;
            if (g.scale.x = c.width / c.originalWidth * b.scaleX / this.imageScale, g.scale.y = c.height / c.originalHeight * b.scaleY / this.imageScale, g.rotation = h, g.anchor.x = (.5 * c.originalWidth - c.offsetX) / c.width, g.anchor.y = 1 - (.5 * c.originalHeight - c.offsetY) / c.height, g.alpha = b.a, c.rotate) {
                var i = g.scale.x;
                g.scale.x = g.scale.y, g.scale.y = i
            }
            return a.sprites = a.sprites || {}, a.sprites[c.name] = g, g
        }, c.prototype.createMesh = function(a, b) {
            var c = b.rendererObject,
                d = c.page.rendererObject,
                e = new PIXI.Texture(d),
                f = new Phaser.Rope(this.game, 0, 0, e);
            return f.drawMode = 1, f.canvasPadding = 1.5, f.vertices = new spine.Float32Array(b.uvs.length), f.uvs = b.uvs, f.indices = b.triangles, f.alpha = b.a, a.meshes = a.meshes || {}, a.meshes[b.name] = f, f
        }, c.prototype.setMixByName = function(a, b, c) {
            this.stateData.setMixByName(a, b, c)
        }, c.prototype.setAnimationByName = function(a, b, c) {
            void 0 === c && (c = !1);
            var d = this.state.data.skeletonData.findAnimation(b);
            return d ? this.state.setAnimation(a, d, c) : null
        }, c.prototype.addAnimationByName = function(a, b, c, d) {
            void 0 === c && (c = !1), void 0 === d && (d = 0);
            var e = this.state.data.skeletonData.findAnimation(b);
            return e ? this.state.addAnimation(a, e, c, d) : null
        }, c.prototype.getCurrentAnimationForTrack = function(a) {
            return this.state.tracks[a].animation.name
        }, c.prototype.setSkinByName = function(a) {
            var b = this.skeleton.data.findSkin(a);
            b && this.skeleton.setSkin(b)
        }, c.prototype.setSkin = function(a) {
            this.skeleton.setSkin(a)
        }, c.prototype.setToSetupPose = function() {
            this.skeleton.setToSetupPose()
        }, c.prototype.createCombinedSkin = function(a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            if (0 !== b.length) {
                for (var d = new spine.Skin(a), e = 0; e < b.length; e++) {
                    var f = b[e],
                        g = this.skeleton.data.findSkin(f);
                    if (!g) return;
                    for (var h in g.attachments) {
                        var i = h.split(":"),
                            j = i[0],
                            k = i[1],
                            l = g.attachments[h];
                        if (void 0 === j || void 0 === k) return;
                        void 0 === d.getAttachment(j, k) && d.addAttachment(j, k, l)
                    }
                }
                return this.skeleton.data.skins.push(d), d
            }
        }, c
    }(Phaser.Group);
    b.globalAutoUpdate = !0, a.Spine = b
}(PhaserSpine || (PhaserSpine = {}));
var PhaserSpine;
! function(a) {
    var b = function() {
        function a(a) {
            this.load = function(a, b, c) {
                var d = this.game.make.image(0, 0, b);
                a.rendererObject = d.texture.baseTexture
            }, this.unload = function(a) {
                a.destroy()
            }, this.game = a
        }
        return a
    }();
    a.SpineTextureLoader = b
}(PhaserSpine || (PhaserSpine = {}));