(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("preact")) : typeof define === "function" && define.amd ? define(["exports", "preact"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Examples = {}, global.preact));
})(this, function(exports2, require$$0) {
  "use strict";
  function _interopDefaultLegacy(e2) {
    return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
  }
  var require$$0__default = /* @__PURE__ */ _interopDefaultLegacy(require$$0);
  var index = "";
  var jsxs$1;
  var jsx$1;
  var r$1 = require$$0__default["default"], _ = 0;
  function e$1(e2, o2, n, t2, l2) {
    var u2, f2, i2 = {};
    for (f2 in o2)
      f2 == "ref" ? u2 = o2[f2] : i2[f2] = o2[f2];
    var p2 = { type: e2, props: i2, key: n, ref: u2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: t2, __self: l2 };
    if (typeof e2 == "function" && (u2 = e2.defaultProps))
      for (f2 in u2)
        i2[f2] === void 0 && (i2[f2] = u2[f2]);
    return r$1.options.vnode && r$1.options.vnode(p2), p2;
  }
  jsx$1 = e$1, jsxs$1 = e$1;
  const jsx = jsx$1;
  const jsxs = jsxs$1;
  var t, u, r, o = 0, i = [], c = require$$0.options.__b, f = require$$0.options.__r, e = require$$0.options.diffed, a = require$$0.options.__c, v = require$$0.options.unmount;
  function m(t2, r2) {
    require$$0.options.__h && require$$0.options.__h(u, t2, o || r2), o = 0;
    var i2 = u.__H || (u.__H = { __: [], __h: [] });
    return t2 >= i2.__.length && i2.__.push({}), i2.__[t2];
  }
  function l(n) {
    return o = 1, p(w, n);
  }
  function p(n, r2, o2) {
    var i2 = m(t++, 2);
    return i2.t = n, i2.__c || (i2.__ = [o2 ? o2(r2) : w(void 0, r2), function(n2) {
      var t2 = i2.t(i2.__[0], n2);
      i2.__[0] !== t2 && (i2.__ = [t2, i2.__[1]], i2.__c.setState({}));
    }], i2.__c = u), i2.__;
  }
  function y(r2, o2) {
    var i2 = m(t++, 3);
    !require$$0.options.__s && k(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__H.__h.push(i2));
  }
  function s(n) {
    return o = 5, A(function() {
      return { current: n };
    }, []);
  }
  function A(n, u2) {
    var r2 = m(t++, 7);
    return k(r2.__H, u2) && (r2.__ = n(), r2.__H = u2, r2.__h = n), r2.__;
  }
  function x() {
    i.forEach(function(t2) {
      if (t2.__P)
        try {
          t2.__H.__h.forEach(g), t2.__H.__h.forEach(j), t2.__H.__h = [];
        } catch (u2) {
          t2.__H.__h = [], require$$0.options.__e(u2, t2.__v);
        }
    }), i = [];
  }
  require$$0.options.__b = function(n) {
    u = null, c && c(n);
  }, require$$0.options.__r = function(n) {
    f && f(n), t = 0;
    var r2 = (u = n.__c).__H;
    r2 && (r2.__h.forEach(g), r2.__h.forEach(j), r2.__h = []);
  }, require$$0.options.diffed = function(t2) {
    e && e(t2);
    var o2 = t2.__c;
    o2 && o2.__H && o2.__H.__h.length && (i.push(o2) !== 1 && r === require$$0.options.requestAnimationFrame || ((r = require$$0.options.requestAnimationFrame) || function(n) {
      var t3, u2 = function() {
        clearTimeout(r2), b && cancelAnimationFrame(t3), setTimeout(n);
      }, r2 = setTimeout(u2, 100);
      b && (t3 = requestAnimationFrame(u2));
    })(x)), u = null;
  }, require$$0.options.__c = function(t2, u2) {
    u2.some(function(t3) {
      try {
        t3.__h.forEach(g), t3.__h = t3.__h.filter(function(n) {
          return !n.__ || j(n);
        });
      } catch (r2) {
        u2.some(function(n) {
          n.__h && (n.__h = []);
        }), u2 = [], require$$0.options.__e(r2, t3.__v);
      }
    }), a && a(t2, u2);
  }, require$$0.options.unmount = function(t2) {
    v && v(t2);
    var u2 = t2.__c;
    if (u2 && u2.__H)
      try {
        u2.__H.__.forEach(g);
      } catch (t3) {
        require$$0.options.__e(t3, u2.__v);
      }
  };
  var b = typeof requestAnimationFrame == "function";
  function g(n) {
    var t2 = u;
    typeof n.__c == "function" && n.__c(), u = t2;
  }
  function j(n) {
    var t2 = u;
    n.__c = n.__(), u = t2;
  }
  function k(n, t2) {
    return !n || n.length !== t2.length || t2.some(function(t3, u2) {
      return t3 !== n[u2];
    });
  }
  function w(n, t2) {
    return typeof t2 == "function" ? t2(n) : t2;
  }
  const container$9 = "_container_1rgjr_1";
  const main$1 = "_main_1rgjr_11";
  const browser = "_browser_1rgjr_20";
  const spacer = "_spacer_1rgjr_27";
  const wheel = "_wheel_1rgjr_41";
  const controls = "_controls_1rgjr_49";
  var styles$a = {
    container: container$9,
    main: main$1,
    browser,
    spacer,
    "separator-ani": "_separator-ani_1rgjr_1",
    wheel,
    controls
  };
  const container$8 = "_container_1ubiw_1";
  const mockContent = "_mockContent_1ubiw_9";
  const mockPara = "_mockPara_1ubiw_15";
  const containerOverlay = "_containerOverlay_1ubiw_33";
  const beforeWindow = "_beforeWindow_1ubiw_43";
  const afterWindow = "_afterWindow_1ubiw_44";
  const window$1 = "_window_1ubiw_59";
  const windowHeader = "_windowHeader_1ubiw_80";
  var styles$9 = {
    container: container$8,
    mockContent,
    mockPara,
    containerOverlay,
    beforeWindow,
    afterWindow,
    window: window$1,
    windowHeader
  };
  var mockImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAB6CAYAAAClZ1HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOXSURBVHgB7d1PK3RtAMfxH92TiIWFiEmKKaUk5UUoK2WhWFhbUEJhiZWNvZCVhWRlowgvwFayUCI2k6JMBudxne5H9+K56zGaXyfn+6mr5s9u+s75c52Zc1VEHwQYVQowIzrYER3siA52RAc7ooMd0cGO6GBHdLAjOtgRHeyIDnZEBzuigx3RwY7oYEd0sCM62BEd7IgOdkQHO6KDHdHBjuhgR3SwIzrYER3siA52RAc7ovvhLi8vlTSJiy6fz2tpaUkbGxt6fX0VSjM1NaW6ujrlcjktLi4qUaKEGRgYCPfLi8fY2Fj0/v4e4WsKhUKUzWajioqK+HPs7e2NkiRxW7qbm5vPx2Frt7W1JXxNJpNRc3Nz2KDEz9va2pQkv5QwIyMjOjs7+3z+/PwsfE1lZaW2t7e1vr6uYrGo6elpJUlFFCXv9q+rq6taW1vTxy5Cm5ubamxsFH6OREYXvL29xd/Yj+MS4WdJbHT4uZingx3RwY7oYEd0sCM62BEd7IgOdkQHO6KDHdHBjuhgR3SwIzrYER3siA52RAc7ooMd0cGO6GBHdLAjOtgRHeyIDnZEBzuigx3RwY7oYEd0sCM62BEd7IgOdkQHO6KDHdHBjuhgR3SwIzrYER3siA52RAc7ooMd0SleflQsHOST6uhCaHt7exoeHtbQ0JAODg6IzyFKqZeXl+gjts8FjcPIZDLRwsJChPJK7YJ0y8vLmp+fj1dZDKsthlUX/7W/v6/+/n6hPFK5ew3fs5WVlc/HfwYX7OzsCOWTyugeHh7i8Te3t7dC+aQyuvr6ejU1Nf31/dbWVqF8Unv2Oj4+/p+v19bWamZmRiif1EY3NzeniYkJVVVVxScTYXR2durk5ETt7e1C+aR+OfXz83NdXV2ppaUljq2mpkYor9RHBz8ug8GO6ErAlMr3EN0X3d/fq6OjQ8fHx0JpiO5/Coe+19fXGhwcVENDg/r6+oTSEN1vd3d32t3djcOKfv/UKYxisajT01PNzs6qu7tbj4+POjw85Cz3G34JsaOjI42OjsYX/3t6euKrFmFXenFxoUKhoFwuF08aT05Oqrq6WigdUyZ/yOfz8S9Mwpbt6elJ2WxWXV1d8a40TByHCWR8H9HBjmM62BEd7IgOdkQHO6KDHdHBjuhgR3SwIzrYER3siA52RAc7ooMd0cGO6GBHdLAjOtgRHeyIDnZEBzuigx3RwY7oYBf+4c//XmH1D1RVnUOH0sVGAAAAAElFTkSuQmCC";
  const Browser = ({
    scrollPosition = 0,
    backgroundColor = "red"
  }) => {
    const transformOffset = scrollPosition * -2;
    return jsxs("div", {
      className: styles$9.container,
      style: {
        backgroundColor
      },
      children: [jsx("div", {
        className: styles$9.mockContent,
        style: {
          transform: `translateY(${transformOffset}%)`
        },
        children: Array(20).fill(null).map((_2, ind) => jsx("div", {
          className: styles$9.mockPara,
          children: jsx("img", {
            src: mockImg
          })
        }, ind))
      }), jsxs("div", {
        className: styles$9.containerOverlay,
        children: [jsx("div", {
          className: styles$9.beforeWindow
        }), jsx("div", {
          className: styles$9.window,
          children: jsxs("div", {
            className: styles$9.windowHeader,
            children: [jsx("span", {}), jsx("span", {}), jsx("span", {})]
          })
        }), jsx("div", {
          className: styles$9.afterWindow
        })]
      })]
    });
  };
  const label = "_label_oy74x_1";
  const container$7 = "_container_oy74x_18";
  var styles$8 = {
    label,
    container: container$7
  };
  const Controls = ({
    children
  }) => jsx("div", {
    className: styles$8.container,
    children
  });
  const SliderInput = ({
    value,
    onChange,
    min,
    max,
    labelText
  }) => {
    const handleInput = (e2) => onChange(+e2.currentTarget.value);
    return jsxs("label", {
      className: styles$8.label,
      children: [jsx("span", {
        children: labelText
      }), jsx("input", {
        type: "range",
        value,
        onInput: handleInput,
        min,
        max
      })]
    });
  };
  const container$6 = "_container_vyfqs_1";
  const aspectRatioContainer = "_aspectRatioContainer_vyfqs_8";
  const colourRing = "_colourRing_vyfqs_28";
  var styles$7 = {
    container: container$6,
    aspectRatioContainer,
    colourRing
  };
  const HSLWheel = ({
    children,
    hue = 0,
    saturation = 100,
    luminosity = 50
  }) => {
    const fill = `conic-gradient(
        from 30deg,
        hsl(0deg, ${saturation}%, ${luminosity}%),
        hsl(60deg, ${saturation}%, ${luminosity}%) 30deg,
        hsl(120deg, ${saturation}%, ${luminosity}%) 90deg,
        hsl(180deg, ${saturation}%, ${luminosity}%) 150deg,
        hsl(240deg, ${saturation}%, ${luminosity}%) 210deg,
        hsl(300deg, ${saturation}%, ${luminosity}%) 270deg,
        hsl(360deg, ${saturation}%, ${luminosity}%) 330deg,
        hsl(0deg, ${saturation}%, ${luminosity}%)
    )`;
    return jsx("div", {
      className: styles$7.container,
      children: jsxs("div", {
        className: styles$7.aspectRatioContainer,
        children: [jsx("div", {
          className: styles$7.colourRing,
          style: {
            transform: `rotate(${-hue}deg)`,
            backgroundImage: fill
          }
        }), children]
      })
    });
  };
  const main = "_main_13net_1";
  var styles$6 = {
    main
  };
  const StaticSwatch = ({
    color
  }) => jsx("div", {
    className: styles$6.main,
    style: {
      backgroundColor: color || "yellow"
    }
  });
  const ExampleScroll = () => {
    const [scrollPosition, setScrollPosition] = l(20);
    const handleChange = (val) => {
      setScrollPosition(val);
    };
    const hue = scrollPosition * 720 / 100;
    const backgroundColor = `hsl(${hue}deg, 100%, 50%)`;
    console.log(backgroundColor);
    return jsxs("div", {
      className: styles$a.container,
      children: [jsxs("div", {
        className: styles$a.main,
        children: [jsx("div", {
          className: styles$a.browser,
          children: jsx(Browser, {
            backgroundColor,
            scrollPosition
          })
        }), jsx("div", {
          className: styles$a.spacer
        }), jsx("div", {
          className: styles$a.wheel,
          children: jsx(HSLWheel, {
            hue: hue + 90,
            children: jsx(StaticSwatch, {
              color: backgroundColor
            })
          })
        })]
      }), jsx("div", {
        className: styles$a.controls,
        children: jsx(Controls, {
          children: jsx(SliderInput, {
            labelText: "Scroll position",
            min: 0,
            max: 100,
            value: scrollPosition,
            onChange: handleChange
          })
        })
      })]
    });
  };
  const container$5 = "_container_hm2ys_1";
  const rgb = "_rgb_hm2ys_8";
  const hsl = "_hsl_hm2ys_13";
  var styles$5 = {
    container: container$5,
    rgb,
    hsl
  };
  const container$4 = "_container_j7z8j_1";
  const canvas$1 = "_canvas_j7z8j_8";
  var styles$4 = {
    container: container$4,
    canvas: canvas$1
  };
  const RGBPicker = () => {
    const [r2, setR] = l(255);
    const [g2, setG] = l(255);
    const [b2, setB] = l(255);
    return jsxs("div", {
      class: styles$4.container,
      children: [jsx("div", {
        class: styles$4.canvas,
        children: jsxs("svg", {
          width: "185",
          height: "176",
          viewBox: "0 0 185 176",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [jsx("circle", {
            cx: "60",
            cy: "60",
            r: "57.5",
            fill: "black",
            stroke: "black",
            "stroke-width": "5"
          }), jsx("circle", {
            cx: "125",
            cy: "60",
            r: "57.5",
            fill: "black",
            stroke: "black",
            "stroke-width": "5"
          }), jsx("circle", {
            cx: "93",
            cy: "116",
            r: "57.5",
            fill: "black",
            stroke: "black",
            "stroke-width": "5"
          }), jsx("g", {
            style: "mix-blend-mode:lighten",
            children: jsx("circle", {
              class: "render-red",
              cx: "60",
              cy: "60",
              r: "55",
              fill: `rgb(${r2}, 0, 0)`
            })
          }), jsx("g", {
            style: "mix-blend-mode:lighten",
            children: jsx("circle", {
              class: "render-green",
              cx: "125",
              cy: "60",
              r: "55",
              fill: `rgb(0, ${g2}, 0)`
            })
          }), jsx("g", {
            style: "mix-blend-mode:lighten",
            children: jsx("circle", {
              class: "render-blue",
              cx: "93",
              cy: "116",
              r: "55",
              fill: `rgb(0, 0, ${b2})`
            })
          })]
        })
      }), jsx("div", {
        className: styles$4.controls,
        children: jsxs(Controls, {
          children: [jsx(SliderInput, {
            labelText: "Red",
            min: 0,
            max: 255,
            value: r2,
            onChange: setR
          }), jsx(SliderInput, {
            labelText: "Green",
            min: 0,
            max: 255,
            value: g2,
            onChange: setG
          }), jsx(SliderInput, {
            labelText: "Blue",
            min: 0,
            max: 255,
            value: b2,
            onChange: setB
          })]
        })
      })]
    });
  };
  const container$3 = "_container_azx1v_1";
  const canvas = "_canvas_azx1v_8";
  const ring = "_ring_azx1v_16";
  const ringLayer = "_ringLayer_azx1v_21";
  const firstLayer = "_firstLayer_azx1v_29";
  const secondLayer = "_secondLayer_azx1v_33";
  const swatch = "_swatch_azx1v_45";
  var styles$3 = {
    container: container$3,
    canvas,
    ring,
    ringLayer,
    firstLayer,
    secondLayer,
    swatch
  };
  const HSLPicker = () => {
    const [h, setH] = l(200);
    const [s$1, setS] = l(100);
    const [l$1, setL] = l(50);
    const [rect, setRect] = l();
    const containerEl = s();
    const [x2, setX] = l(0);
    const [y$1, setY] = l(0);
    y(() => {
      if (!containerEl.current)
        return;
      const onResize = () => setRect(containerEl.current.getBoundingClientRect());
      window.addEventListener("resize", onResize);
      onResize();
      return () => {
        window.removeEventListener("resize", onResize);
      };
    }, [containerEl.current]);
    y(() => {
      if (!rect)
        return;
      const offsetX = rect.width / 2;
      const offsetY = rect.width / 2;
      const r2 = rect.width / 2 * 0.85;
      const radian = Math.PI / 180;
      const x22 = Math.sin(radian * (360 - h)) * -r2 + offsetX;
      const y2 = Math.cos(radian * (360 - h)) * -r2 + offsetY;
      setX(x22);
      setY(y2);
    }, [rect, h]);
    return jsxs("div", {
      class: styles$3.container,
      ref: containerEl,
      children: [jsx("div", {
        class: styles$3.canvas,
        children: jsx(HSLWheel, {
          hue: 0,
          saturation: s$1,
          luminosity: l$1,
          children: jsx("div", {
            className: styles$3.swatch,
            style: {
              top: `${y$1}px`,
              left: `${x2}px`,
              backgroundColor: `hsl(${h}deg, ${s$1}%, ${l$1}%)`
            }
          })
        })
      }), jsx("div", {
        className: styles$3.controls,
        children: jsxs(Controls, {
          children: [jsx(SliderInput, {
            labelText: "Hue",
            min: 0,
            max: 360,
            value: h,
            onChange: setH
          }), jsx(SliderInput, {
            labelText: "Saturation",
            min: 0,
            max: 100,
            value: s$1,
            onChange: setS
          }), jsx(SliderInput, {
            labelText: "Lightness",
            min: 0,
            max: 100,
            value: l$1,
            onChange: setL
          })]
        })
      })]
    });
  };
  const ExampleRGBHSL = () => jsxs("div", {
    className: styles$5.container,
    children: [jsx("div", {
      className: styles$5.rgb,
      children: jsx(RGBPicker, {})
    }), jsx("div", {
      className: styles$5.hsl,
      children: jsx(HSLPicker, {})
    })]
  });
  const container$2 = "_container_1pnfb_1";
  const baseImage = "_baseImage_1pnfb_24";
  const rgbOverlay = "_rgbOverlay_1pnfb_31";
  const hslOverlay = "_hslOverlay_1pnfb_32";
  const vampireOverlay = "_vampireOverlay_1pnfb_33";
  const isVampire = "_isVampire_1pnfb_58";
  var styles$2 = {
    container: container$2,
    baseImage,
    rgbOverlay,
    hslOverlay,
    vampireOverlay,
    isVampire
  };
  const RGBSusan = ({
    red,
    green,
    blue,
    showTeeth
  }) => {
    const overlayColor = `rgb(${red}, ${green}, ${blue})`;
    return jsxs("div", {
      className: `${styles$2.container} ${showTeeth ? styles$2.isVampire : ""}`,
      children: [jsx("div", {
        className: styles$2.baseImage
      }), jsx("div", {
        className: styles$2.rgbOverlay,
        style: {
          backgroundColor: overlayColor
        }
      }), jsx("div", {
        className: styles$2.vampireOverlay
      })]
    });
  };
  const HSLSusan = ({
    hue,
    showTeeth
  }) => {
    return jsxs("div", {
      className: `${styles$2.container} ${showTeeth ? styles$2.isVampire : ""}`,
      children: [jsx("div", {
        className: styles$2.baseImage,
        style: {
          filter: `hue-rotate(${hue}deg)`
        }
      }), jsx("div", {
        className: styles$2.vampireOverlay
      })]
    });
  };
  const Susan = ({
    red,
    green,
    blue,
    hue,
    showTeeth
  }) => {
    if (typeof blue === "undefined" && typeof hue === "undefined")
      return null;
    const mode = typeof blue === "undefined" ? "hsl" : "rgb";
    if (mode === "rgb")
      return jsx(RGBSusan, {
        red,
        green,
        blue,
        showTeeth
      });
    if (mode === "hsl")
      return jsx(HSLSusan, {
        hue,
        showTeeth
      });
    return null;
  };
  const container$1 = "_container_eukpr_1";
  var styles$1 = {
    container: container$1
  };
  const ExampleHueShiftRGB = () => {
    const [r2, setR] = l(0);
    const [g2, setG] = l(0);
    const [b2, setB] = l(0);
    return jsxs("div", {
      className: styles$1.container,
      children: [jsx(Susan, {
        red: r2,
        green: g2,
        blue: b2,
        showTeeth: false
      }), jsx("br", {}), jsx("div", {
        className: styles$1.controls,
        children: jsxs(Controls, {
          children: [jsx(SliderInput, {
            labelText: `Blue: ${b2}`,
            min: 0,
            max: 255,
            value: b2,
            onChange: setB
          }), jsx(SliderInput, {
            labelText: `Red: ${r2}`,
            min: 0,
            max: 255,
            value: r2,
            onChange: setR
          }), jsx(SliderInput, {
            labelText: `Green: ${g2}`,
            min: 0,
            max: 255,
            value: g2,
            onChange: setG
          })]
        })
      })]
    });
  };
  const container = "_container_eukpr_1";
  var styles = {
    container
  };
  const ExampleHueShiftHSL = () => {
    const targetH = -90;
    const [h, setH] = l(0);
    return jsxs("div", {
      className: styles.container,
      children: [jsx(Susan, {
        hue: h,
        showTeeth: Math.abs(h - targetH) < 10
      }), jsx("br", {}), jsx("div", {
        className: styles.controls,
        children: jsx(Controls, {
          children: jsx(SliderInput, {
            labelText: `Hue rotate: ${h < 0 ? "" : "+"}${h} degrees`,
            min: -180,
            max: 180,
            value: h,
            onChange: setH
          })
        })
      })]
    });
  };
  const mountExample = (Element, selector) => {
    require$$0.render(jsx(Element, {}), document.querySelector(selector));
  };
  exports2.ExampleHueShiftHSL = ExampleHueShiftHSL;
  exports2.ExampleHueShiftRGB = ExampleHueShiftRGB;
  exports2.ExampleRGBHSL = ExampleRGBHSL;
  exports2.ExampleScroll = ExampleScroll;
  exports2.mountExample = mountExample;
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2[Symbol.toStringTag] = "Module";
});
