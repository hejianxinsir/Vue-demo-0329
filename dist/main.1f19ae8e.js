// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
console.log('main.js'); //单个插槽的用法

var s1 = new Vue({
  el: '#s1',
  data: {},
  components: {
    'child': {
      template: "<div>\n\t\t\t\t<slot>\n\t\t\t\t\t\u5982\u679C\u7236\u7EC4\u4EF6\u6CA1\u6709\u63D2\u5165\u5185\u5BB9\uFF0C\u6211\u5C31\u4F5C\u4E3A\u9ED8\u8BA4\u5185\u5BB9\u51FA\u73B0\n\t\t\t\t</slot>\n\t\t\t</div>"
    }
  }
}); //...

var s1a = new Vue({
  el: '#s1a',
  data: {},
  components: {
    'child': {
      template: "<div>\n\t\t\t\t<slot>\n\t\t\t\t\t\u5982\u679C\u7236\u7EC4\u4EF6\u6CA1\u6709\u63D2\u5165\u5185\u5BB9\uFF0C\u6211\u4F1A\u4F5C\u4E3A\u9ED8\u8BA4\u5185\u5BB9\u663E\u793A111\n\t\t\t\t</slot>\n\t\t\t</div>"
    }
  }
}); //...

var he1 = new Vue({
  el: '#he1',
  data: {},
  components: {
    'child': {
      template: "\n\t\t\t\t<div>\n\t\t\t\t\t<slot name=\"ppp\"></slot>\n\t\t\t\t\t<slot name=\"header\"></slot>\n\t\t\t\t</div>\n\t\t\t"
    }
  }
}); //...

var s2 = new Vue({
  el: '#s2',
  components: {
    'child': {
      template: "\n\t\t\t\t<div>\n\t\t\t\t\t<slot>\u5982\u679C\u7236\u7EC4\u4EF6\u6CA1\u6709\u63D2\u5165\u7684\u5185\u5BB9\uFF0C\u6211\u5C31\u4F5C\u4E3A\u9ED8\u8BA4\u5185\u5BB9\u663E\u793A</slot>\n\t\t\t\t</div>\n\t\t\t"
    }
  }
}); // 具名插槽

var s3 = new Vue({
  el: '#s3',
  components: {
    'name-component': {
      template: "\n\t\t\t\t<div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<slot name=\"footer\"></slot>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<slot name=\"header\"></slot>\n\t\t\t\t\t</div>\n\t\t\t\t\t<slot></slot>\n\t\t\t\t</div>\n\t\t\t"
    }
  }
}); // 作用域插槽

var s4 = new Vue({
  el: '#s4',
  components: {
    'child': {
      template: "\n\t\t\t\t<div>\n\t\t\t\t\t<slot text=\"\u6211\u662Fslot\u7684\u5185\u5BB9\" name=\"abc\">\n\t\t\t\t\t</slot>\n\t\t\t\t</div>\n\t\t\t"
    }
  }
}); //...

var s5 = new Vue({
  el: '#s5',
  components: {
    'child': {
      template: "\n\t\t\t\t<div>\n\t\t\t\t\t<slot text=\"\u5566\u5566\u5566\u5566\u5566\" xxx=\"as\u6765\u72AFA\u7C7B\u8303\u6587\u4E8Cof\" name=\"slotName\"></slot>\n\t\t\t\t</div>\n\t\t\t"
    }
  }
}); // 访问slot

var s6 = new Vue({
  el: '#s6',
  components: {
    'child': {
      template: "\n\t\t\t\t<div>\n\t\t\t\t\t<slot name=\"header\"></slot>\n\t\t\t\t\t<slot name=\"footer\"></slot>\n\t\t\t\t</div>\n\t\t\t",
      mounted: function mounted() {
        //访问插槽
        var header = this.$slots.header;
        var footer = this.$slots.footer;
        var info = this.$slots.header[0].elm.innerText;
        console.log(footer);
        console.log(header);
        console.log(info);
      }
    }
  }
}); //动态组件的使用

var s7 = new Vue({
  el: '#s7',
  data: {
    thisView: 'comA'
  },
  methods: {
    handleView: function handleView(tag) {
      this.thisView = 'com' + tag;
    }
  },
  components: {
    'comA': {
      template: '<div>我是第一句</div>'
    },
    'comB': {
      template: '<div>我是第二句</div>'
    },
    'comC': {
      template: '<div>我是第三句</div>'
    },
    'comD': {
      template: '<div>我是第四句</div>'
    }
  }
}); //...

var s8 = new Vue({
  el: '#s8',
  data: {
    thisView: 'comA'
  },
  methods: {
    handleView: function handleView(tag) {
      this.thisView = 'com' + tag;
    }
  },
  components: {
    'comA': {
      template: '<div>一一</div>'
    },
    'comB': {
      template: '<div>二二</div>'
    },
    'comC': {
      template: '<div>三三</div>'
    },
    'comD': {
      template: '<div>四四</div>'
    }
  }
}); //父组件传递给子组件

var s9 = new Vue({
  el: '#s9',
  data: {},
  components: {
    'child': {
      props: ['name'],
      template: '<div>我是子组件{{name}}</div>'
    }
  }
}); //子组件传递给父组件 如 this.$emit('change', this.count)

var s10 = new Vue({
  el: '#s10',
  data: {
    n: 100
  },
  methods: {
    changeTotal: function changeTotal(value) {
      this.n = value;
    }
  },
  components: {
    child: {
      data: function data() {
        return {
          count: 100
        };
      },
      template: "\n\t\t\t\t<div>\n\t\t\t\t\t<button @click=\"increase\">+1</button>\n\t\t\t\t\t<button @click=\"decrease\">-1</button>\n\t\t\t\t</div>\n\t\t\t",
      methods: {
        increase: function increase() {
          this.count += 1;
          this.$emit('change', this.count);
        },
        decrease: function decrease() {
          this.count -= 1;
          this.$emit('change', this.count);
        }
      }
    }
  }
}); // 父组件传递数据给子组件

var s11 = new Vue({
  el: '#s11',
  data: {
    styleObj: {
      border: '3px solid blue',
      color: 'red',
      padding: '10px 0',
      'text-align': 'center'
    }
  },
  methods: {
    change: function change(obj) {
      this.styleObj = obj;
    }
  },
  components: {
    'child': {
      data: function data() {
        return {
          childObj: {}
        };
      },
      template: '<div><button @click="changeColor">改样式</button></div>',
      methods: {
        changeColor: function changeColor() {
          this.childObj = {
            border: '3px solid brown',
            color: 'black',
            'text-align': 'center',
            padding: '10px 0'
          };
          this.$emit('action', this.childObj);
        }
      }
    }
  }
});
var s12 = new Vue({
  el: '#s12',
  data: {
    styleObj: {
      'border': '5px solid brown',
      'color': 'black',
      'padding': '20px 0',
      'text-align': 'center'
    }
  },
  methods: {
    change: function change(obj) {
      this.styleObj = obj;
    }
  },
  components: {
    'child': {
      data: function data() {
        return {
          obj: {}
        };
      },
      template: '<div><button @click="changeColor">更改样式</button></div>',
      methods: {
        changeColor: function changeColor() {
          this.obj = {
            'border': '5px solid pink',
            'color': 'gray',
            'padding': '10px 0',
            'text-align': 'center'
          };
          this.$emit('action', this.obj);
        }
      }
    }
  }
}); //非父子组件传递数据

var s13 = new Vue({
  el: '#s13',
  data: {
    bus: new Vue()
  },
  components: {
    'acom': {
      data: function data() {
        return {
          aaa: '我是acom的数据'
        };
      },
      template: '<div><button @click="passb">点我向b传数据</button></div>',
      methods: {
        passb: function passb() {
          this.$root.bus.$emit('xixi', this.aaa);
        }
      }
    },
    'bcom': {
      template: '<div></div>',
      created: function created() {
        this.$root.bus.$on('xixi', function (b) {
          console.log(b);
        });
      }
    }
  }
}); //...

var s14 = new Vue({
  el: '#s14',
  data: {
    bus: new Vue()
  },
  components: {
    'acom': {
      data: function data() {
        return {
          yyy: '我是来自a的数据'
        };
      },
      template: '<div><button @click="passb">点我向b传递数据</button></div>',
      methods: {
        passb: function passb() {
          this.$root.bus.$emit('qoqo', this.yyy);
        }
      }
    },
    'bcom': {
      template: '<div></div>',
      created: function created() {
        this.$root.bus.$on('qoqo', function (w) {
          console.log(w);
        });
      }
    }
  }
}); // 自定义指令 directive 。跟 component 类似。下面做一个打开页面就获取焦点的案例。

/*
directive 存在几个 hooks 函数:
bind: 只调用一次，指令第一次绑定到元素时调用
inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。

update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，
可以忽略不必要的模板更新。

componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。

unbind: 只调用一次，指令与元素解绑时调用。
*/
// 自定义指令

Vue.directive('focus', {
  inserted: function inserted(el) {
    el.focus();
  }
});
var s15 = new Vue({
  el: '#s15',
  data: {}
}); // ...

var s16 = new Vue({
  el: '#s16',
  data: {
    posts: [{
      id: 1,
      title: 'title1'
    }, {
      id: 2,
      title: 'title2'
    }, {
      id: 3,
      title: 'title3'
    }]
  },
  components: {
    'child': {
      props: ['title'],
      template: '<div>{{ title }}</div>'
    }
  }
}); // render 函数的第一个参数

var s17 = new Vue({
  el: '#s17',
  data: {},
  components: {
    'child': {
      // render: function(createElement){
      // 	return createElement('div')
      // }
      // render: function(createElement){
      // 	return createElement({
      // 		template: '<div>我是对象参数</div>'
      // 	})
      // }
      render: function render(createElement) {
        var domfun = function domfun() {
          return {
            template: '<div>我是函数参数，我需要返回一个含有数据的对象</div>'
          };
        };

        return createElement(domfun());
      }
    }
  }
}); // render 函数的第二个参数：可选，是一个对象

var s18 = new Vue({
  el: '#s18',
  components: {
    'child': {
      render: function render(createElement) {
        // return createElement('div', {
        // 	class: {
        // 		foo: true,
        // 		bar: true
        // 	},
        // 	style: {
        // 		color: 'red',
        // 		fontSize: '28px',
        // 		width: '100px',
        // 		height: '100px',
        // 		padding: '20px',
        // 		border: '3px solid blue'
        // 	}
        // })
        return createElement({
          template: '<div>我是一个div</div>'
        }, {
          class: {
            foo: true,
            bar: false
          },
          style: {
            color: 'red'
          },
          attrs: {
            id: 'foo',
            src: 'https://www.baidu.com'
          },
          domProps: {
            innerHTML: '<span>我是span</span>'
          }
        });
      }
    }
  }
}); // render 函数的第三个参数：代表子节点，可选，String Array

var s19 = new Vue({
  el: '#s19',
  components: {
    'child': {
      render: function render(createElement) {
        return createElement('div', [createElement('p', {
          domProps: {
            innerHTML: '<span>我是第一个p标签</span>'
          }
        }), createElement('p', {
          domProps: {
            innerHTML: '<span>我是第二个p标签</span>'
          }
        })]);
      }
    }
  }
}); // $slot 在 render 函数中的应用

Vue.component('child999', {
  render: function render(createElement) {
    var main = this.$slots.default;
    var header = this.$slots.header;
    var footer = this.$slots.footer;
    return createElement('div', [createElement('header', header), createElement('main', main), createElement('footer', footer)]);
  }
});
var s20 = new Vue({
  el: '#s20',
  data: {}
}); // 点击切换图片
// Vue.component('child',{
// 	props: ['show'],
// 	render: function(createElement){
// 		var imgsrc;
// 		if(this.show){
// 			imgsrc = 'img/001.jpg'
// 		}else{
// 			imgsrc = 'img/002.jpg'
// 		}
// 		return createElement('img',{
// 			attrs: {
// 				src: imgsrc	
// 			}
// 		})
// 	}
// })

var s21 = new Vue({
  el: '#s21',
  data: {
    show: true
  },
  methods: {
    switchShow: function switchShow() {
      this.show = !this.show;
    }
  },
  components: {
    'child': {
      props: ['show'],
      render: function render(createElement) {
        var imgsrc;

        if (this.show) {
          imgsrc = 'img/001.jpg';
        } else {
          imgsrc = 'img/002.jpg';
        }

        return createElement('img', {
          attrs: {
            src: imgsrc
          }
        });
      }
    }
  }
}); // input 输入什么就显示什么

var s22 = new Vue({
  el: '#s22',
  data: {
    name: 'jack'
  },
  methods: {
    showName: function showName(value) {
      this.name = value;
    }
  },
  components: {
    'child': {
      props: ['name'],
      render: function render(createElement) {
        var self = this;
        return createElement('input', {
          domProps: {
            value: self.name
          },
          on: {
            input: function input(value) {
              self.$emit('input', event.target.value);
            }
          }
        });
      }
    }
  }
}); // input 输入什么就显示什么，用 v-model 做一遍

var s23 = new Vue({
  el: '#s23',
  data: {
    name: 'jack'
  },
  components: {
    'child': {
      props: ['name'],
      render: function render(createElement) {
        var self = this;
        return createElement('input', {
          domProps: {
            value: self.name
          },
          on: {
            input: function input() {
              self.$emit('input', event.target.value);
            }
          }
        });
      }
    }
  }
}); //...

var s24 = new Vue({
  el: '#s24',
  data: {
    name: 'jack'
  },
  methods: {
    showName: function showName(value) {
      this.name = value;
    }
  },
  components: {
    'child': {
      props: ['name'],
      render: function render(createElement) {
        var self = this;
        return createElement('input', {
          domProps: {
            value: self.name
          },
          on: {
            input: function input() {
              self.$emit('input', event.target.value);
            }
          }
        });
      }
    }
  }
}); //...作用域插槽 render函数

var s25 = new Vue({
  el: '#s25',
  components: {
    'child': {
      render: function render(createElement) {
        return createElement('div', this.$scopedSlots.default({
          text: '我是子组件传递过来的数据',
          msg: 'xxx'
        }));
      }
    }
  }
}); //...

var s26 = new Vue({
  el: '#s26',
  components: {
    'child': {
      render: function render(createElement) {
        return createElement('div', this.$scopedSlots.default({
          text: '我是来自子组件的数据',
          msg: 'ssssssssss'
        }));
      }
    }
  }
}); // 函数化组件
// 当 functional: true 时，表示该组件无状态、无实例

var s27 = new Vue({
  el: '#s27',
  data: {
    info: '我是父组件的info'
  },
  components: {
    props: ['value'],
    'child': {
      functional: true,
      render: function render(createElement, context) {
        return createElement('button', {
          on: {
            click: function click() {
              console.log(context);
              console.log(context.parent);
              console.log(context.props);
              console.log(context.props.value);
              console.log(context.parent.info);
            }
          }
        }, '点我点我点我');
      }
    }
  }
});
},{}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50436" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map