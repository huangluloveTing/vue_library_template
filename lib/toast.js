(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-components-geek", [], factory);
	else if(typeof exports === 'object')
		exports["vue-components-geek"] = factory();
	else
		root["vue-components-geek"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/set-timeout");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2).default
var update = add("22f3c954", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2).default
var update = add("416eeb92", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toastItem_vue_vue_type_style_index_0_id_3774f5a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toastItem_vue_vue_type_style_index_0_id_3774f5a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toastItem_vue_vue_type_style_index_0_id_3774f5a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toastItem_vue_vue_type_style_index_0_id_3774f5a9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"toastItem.vue?vue&type=style&index=0&id=3774f5a9&lang=less&scoped=true&"}]);
// Exports
module.exports = exports;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_64c836f6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_64c836f6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_64c836f6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_ref_2_3_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_64c836f6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".toast-container[data-v-64c836f6] {\n  position: fixed;\n  z-index: 9999;\n}\n.toast-container .toast-content[data-v-64c836f6] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n.icon-right[data-v-64c836f6] {\n  margin-right: 5px;\n}\n.toast-position-top[data-v-64c836f6] {\n  left: 50%;\n  top: 30px;\n  transform: translateX(-50%);\n}\n.toast-position-center[data-v-64c836f6] {\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.toast-position-bottom[data-v-64c836f6] {\n  left: 50%;\n  bottom: 30px;\n  transform: translateX(-50%);\n}\n.item-leave-to[data-v-64c836f6] {\n  opacity: 0;\n}\n.item-leave-active[data-v-64c836f6] {\n  transition: all 0.3s ease;\n}\n", "",{"version":3,"sources":["/Users/wenjindu/Desktop/cli/vue-components/src/packages/toast/toast.vue?vue&type=style&index=0&id=64c836f6&lang=less&scoped=true&","/Users/wenjindu/Desktop/cli/vue-components/src/packages/toast/toast.vue"],"names":[],"mappings":"AA4FA;EACI,eAAA;EACA,aAAA;AC3FJ;ADyFA;EAIQ,aAAA;EACA,wBAAA;EACA,mBAAA;AC1FR;AD8FA;EAAa,iBAAA;AC3Fb;AD6FA;EACI,SAAA;EAAU,SAAA;EACV,2BAAA;AC1FJ;AD4FA;EACI,SAAA;EAAU,QAAA;EACV,qCAAA;ACzFJ;AD2FA;EACI,SAAA;EAAU,YAAA;EACV,2BAAA;ACxFJ;AD0FA;EACI,UAAA;ACxFJ;AD0FA;EACI,yBAAA;ACxFJ","file":"toast.vue?vue&type=style&index=0&id=64c836f6&lang=less&scoped=true&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.toast-container {\n    position: fixed;\n    z-index: 9999;\n    .toast-content {\n        display: flex;\n        flex-flow: column nowrap;\n        align-items: center;\n    }\n}\n\n.icon-right {margin-right: 5px;}\n\n.toast-position-top {\n    left: 50%;top: 30px;\n    transform: translateX(-50%);\n}\n.toast-position-center {\n    left: 50%;top: 50%;\n    transform: translate3d(-50% , -50% , 0)\n}\n.toast-position-bottom {\n    left: 50%;bottom: 30px;\n    transform: translateX(-50%);\n}\n.item-leave-to {\n    opacity: 0;\n}\n.item-leave-active {\n    transition: all 0.3s ease;\n}\n\n",".toast-container {\n  position: fixed;\n  z-index: 9999;\n}\n.toast-container .toast-content {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n.icon-right {\n  margin-right: 5px;\n}\n.toast-position-top {\n  left: 50%;\n  top: 30px;\n  transform: translateX(-50%);\n}\n.toast-position-center {\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.toast-position-bottom {\n  left: 50%;\n  bottom: 30px;\n  transform: translateX(-50%);\n}\n.item-leave-to {\n  opacity: 0;\n}\n.item-leave-active {\n  transition: all 0.3s ease;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/toast/toast.vue?vue&type=template&id=64c836f6&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "toast-container",
      class: _vm.toastPostion,
      style: _vm.visible ? "display:block" : "display:none"
    },
    [
      _c(
        "div",
        { staticClass: "toast-content" },
        [
          _vm._l(_vm.toasts, function(item, index) {
            return [
              _c("item", { key: index + "", attrs: { title: item.title } }, [
                item.type == "success"
                  ? _c("i", {
                      staticClass:
                        "icon iconfont icon-pxduoxuanxuanzhong icon-right",
                      attrs: { slot: "header-icon" },
                      slot: "header-icon"
                    })
                  : item.type == "fail"
                  ? _c("i", {
                      staticClass: "icon iconfont icon-chaSVG icon-right",
                      attrs: { slot: "header-icon" },
                      slot: "header-icon"
                    })
                  : item.type == "warn"
                  ? _c("i", {
                      staticClass: "icon iconfont icon-gantanhaoSVG icon-right",
                      attrs: { slot: "header-icon" },
                      slot: "header-icon"
                    })
                  : _vm._e()
              ])
            ]
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/toast/toast.vue?vue&type=template&id=64c836f6&scoped=true&

// EXTERNAL MODULE: external "@babel/runtime-corejs3/core-js-stable/instance/filter"
var filter_ = __webpack_require__(8);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter_);

// EXTERNAL MODULE: external "@babel/runtime-corejs3/core-js-stable/set-timeout"
var set_timeout_ = __webpack_require__(3);
var set_timeout_default = /*#__PURE__*/__webpack_require__.n(set_timeout_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/toast/toastItem.vue?vue&type=template&id=3774f5a9&scoped=true&
var toastItemvue_type_template_id_3774f5a9_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "toast-item" } }, [
    _c(
      "div",
      { staticClass: "toast-item" },
      [
        _vm._t("header-icon"),
        _vm._v(" "),
        _vm._t("toast-title", [_c("span", [_vm._v(_vm._s(_vm.title))])])
      ],
      2
    )
  ])
}
var toastItemvue_type_template_id_3774f5a9_scoped_true_staticRenderFns = []
toastItemvue_type_template_id_3774f5a9_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/packages/toast/toastItem.vue?vue&type=template&id=3774f5a9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/toast/toastItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var toastItemvue_type_script_lang_js_ = ({
  data: function data() {
    return {};
  },
  props: ['title'],
  components: {},
  created: function created() {},
  computed: {},
  mounted: function mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/packages/toast/toastItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_toastItemvue_type_script_lang_js_ = (toastItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/toast/toastItem.vue?vue&type=style&index=0&id=3774f5a9&lang=less&scoped=true&
var toastItemvue_type_style_index_0_id_3774f5a9_lang_less_scoped_true_ = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/toast/toastItem.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  toast_toastItemvue_type_script_lang_js_,
  toastItemvue_type_template_id_3774f5a9_scoped_true_render,
  toastItemvue_type_template_id_3774f5a9_scoped_true_staticRenderFns,
  false,
  null,
  "3774f5a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/toast/toastItem.vue"
/* harmony default export */ var toastItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/toast/toast.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var TOAST_DURATION = 3000; // 所在位置

var TOAST_POSITION_BOTTOM = 'bottom';
var TOAST_POSITION_CENTER = 'center';
var TOAST_POSITION_TOP = 'top';

/* harmony default export */ var toastvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      toasts: [],
      visible: true,
      position: TOAST_POSITION_CENTER,
      duration: TOAST_DURATION
    };
  },
  components: {
    item: toastItem
  },
  created: function created() {},
  computed: {
    toastPostion: function toastPostion() {
      if (this.position == TOAST_POSITION_BOTTOM) {
        return 'toast-position-bottom';
      }

      if (this.position == TOAST_POSITION_CENTER) {
        return 'toast-position-center';
      }

      if (this.position == TOAST_POSITION_TOP) {
        return 'toast-position-top';
      }

      return 'toast-position-center';
    }
  },
  methods: {
    show: function show(type, title, options) {
      var _this = this;

      var toast = this.createToastItemConfig(type, title, options);
      var duration = options ? options.duration || this.duration : this.duration;
      this.toasts.push(toast);
      console.log('show type');
      console.log(duration);

      set_timeout_default()(function () {
        _this.removeToastForKey(toast.key);
      }, duration);
    },
    createToastItemConfig: function createToastItemConfig(type, title, options) {
      var toast = {};
      toast.type = type;
      toast.title = title;
      toast.options = options;
      toast.key = this.createToastItemKey();
      return toast;
    },
    createToastItemKey: function createToastItemKey() {
      var key = new Date().getTime().toString();
      return key;
    },
    removeToastForKey: function removeToastForKey(key) {
      var _context;

      if (key === 'undefined' || key == null) {
        return;
      }

      var newToasts = filter_default()(_context = this.toasts).call(_context, function (toast) {
        return toast.key != key;
      });

      this.toasts = newToasts;
    }
  }
});
// CONCATENATED MODULE: ./src/packages/toast/toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_toastvue_type_script_lang_js_ = (toastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/toast/toast.vue?vue&type=style&index=0&id=64c836f6&lang=less&scoped=true&
var toastvue_type_style_index_0_id_64c836f6_lang_less_scoped_true_ = __webpack_require__(15);

// CONCATENATED MODULE: ./src/packages/toast/toast.vue






/* normalize component */

var toast_component = Object(componentNormalizer["a" /* default */])(
  toast_toastvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "64c836f6",
  null
  
)

/* hot reload */
if (false) { var toast_api; }
toast_component.options.__file = "src/packages/toast/toast.vue"
/* harmony default export */ var toast_toast = (toast_component.exports);
// CONCATENATED MODULE: ./src/packages/toast/index.js


function install(Vue, options) {
  var ToastConstructor = Vue.extend(toast_toast);
  var instance = new ToastConstructor();
  var div = document.createElement('div');
  document.body.appendChild(div);
  instance.$mount(div);

  if (options && options.position) {
    instance.position = options.position;
  }

  if (options && options.duration) {
    instance.duration = options.duration;
  }

  var toast = {
    success: function success(message, duration) {
      instance.show('success', message, {
        duration: duration
      });
    },
    fail: function fail(message, duration) {
      instance.show('fail', message, {
        duration: duration
      });
    },
    warn: function warn(message, duration) {
      instance.show('warn', message, {
        duration: duration
      });
    }
  };
  Vue.prototype.$toast = toast;
}

var Toast = {};
Toast.install = install;
/* harmony default export */ var packages_toast = __webpack_exports__["default"] = ({
  Toast: Toast
});

/***/ })
/******/ ])["default"];
});