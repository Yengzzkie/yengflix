/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --light-background: linear-gradient(
    135deg,
    rgb(0, 208, 255),
    rgb(89, 219, 248),
    rgb(174, 234, 248)
  );
  --dark-background: linear-gradient(135deg, rgb(35 35 35), rgb(54 54 54));
  --dropshadow: 1px 1px 2px rgba(162, 162, 162, 0.511);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif, Arial, Helvetica;
  font-weight: 100;
  font-style: normal;
  height: 100%;
  width: 100%;
}

#app {
  background: var(--dark-background);
  height: 100%;
}

header {
  display: flex;
  align-items: center;
  height: 100px;
  background: rgb(29 29 29);
  padding: 0 2rem;

  #hamburger {
    display: none;
  }

  #logo {
    position: relative;
    letter-spacing: 1.2px;
    color: hsl(1, 98%, 62%);
  }

  #logo::after {
    position: absolute;
    background: rgb(29 29 29);
    content: '';
    bottom: 0;
    left: 0;
    transform: translateY(-100%);
    border-radius: 100%;
    width: 100%;
    height: 15%;
  }

  nav {
    margin-left: 10px;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      color: #fff;
      margin-right: 1rem;
      cursor: pointer;
    }
  }

  #input-wrapper {
    position: absolute;
    right: 2%;

    input {
      width: 200px;
      padding: 5px;
    }

    button {
      border: none;
      padding: 5px;
      width: 150px;
      cursor: pointer;
    }
  }
}

#mobile-logo {
  display: none;
}

#previous-page, #next-page {
  position: fixed;
  top: 50%;
  background: #2e2e2e;
  color: #ff4800;
  font-size: 3rem;
  border: none;
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 9999;
  cursor: pointer;
  transition: all .1s linear;
}

#previous-page:hover, #next-page:hover {
  color: hsl(1, 98%, 62%);
  transform: scale(1.4);
}

#previous-page {
  left: 2%;
}

#next-page {
  right: 2%;
}

#page {
  background: #2e2e2e;
  color: #fff;
  text-align: center;
  padding: 10px;
}

#movie-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  justify-content: center;
  gap: 20px;
  height: 100%;
  padding: 1rem 1rem 4rem 1rem;

  #movie-card {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.8s ease;

    #movie-info {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.614);
      color: white;
      width: 100%;
      padding: 10px;
      overflow-x: hidden; /* Hide horizontal scrollbar */
      overflow-y: auto; /* Enable vertical scrollbar */
      transform: translateY(100%);
      transition: transform 0.8s ease;
    }
    
    #movie-info::-webkit-scrollbar {
      display: none; /* Hide scrollbar for WebKit browsers */
    }
    

    h1 {
      color: #fff;
      font-weight: 300;
    }

    img {
      width: 100%;
      transition: filter 0.5s ease;
    }

    button {
      position: absolute;
      bottom: 5%;
      right: 5%;
      background: orange;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      box-shadow: 1px 1px 2px rgba(152, 152, 152, 0.891),
        -1px -1px 2px rgba(255, 255, 255, 0.882);
      transition: transform 0.5s ease;
      cursor: pointer;
      z-index: 999;
    }

    button:hover {
      transform: scale(1.2);
    }

    p {
      visibility: hidden;
    }
  }

  #movie-card:hover {
    transform: scale(1.1);
  }

  #movie-card:hover img {
    filter: blur(3px);
  }

  #movie-card:hover #movie-info {
    transform: translateY(0%);
    height: 100%;

    p {
      margin-top: 3rem;
      visibility: visible;
    }
  }
}

iframe {
  width: 100%;
  height: 700px;
}

footer {
  position: fixed;
  bottom: 0;
  background: #2e2e2e;
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 10px;
  z-index: 9999;
}


@media screen and (max-width: 1024px) {
  header {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    right: 0;
    transform: translateY(-100%);
    background: rgba(29, 29, 29, 0.863);
    backdrop-filter: blur(5px);
    height: auto;
    width: 100vw;
    padding: 1rem 0;
    z-index: 9999;
    transition: transform .3s linear;

    #hamburger {
      display: block;
      position: absolute; /* Change 'fixed' to 'absolute' */
      bottom: -20%;
      right: 5%;
      background: transparent;
      color: white;
      font-size: 1.8rem;
      border: none;
      cursor: pointer;
    }
  
    #logo {
      margin: none;
    }
  
    ul {
      flex-direction: column;

      li {
        margin-bottom: 5px;
      }
    }
  
    #input-wrapper {
      position: unset;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
      margin: 20px;

      input {
        width: 100%;
      }
  
      button {
        width: 150px;
        margin-top: 10px;
      }
    }
  }

  header.active {
    transform: translateX(0);
  }

  #mobile-logo {
    position: relative;
    display: block;
    background: rgb(29 29 29);
    color: hsl(1, 98%, 62%);
    padding: 1rem;
  }

  #mobile-logo::after {
    position: absolute;
    background: rgb(29 29 29);
    content: '';
    bottom: 0;
    left: 0;
    transform: translateY(-100%);
    border-radius: 100%;
    width: 100%;
    height: 15%;
  }

  iframe {
    height: 300px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\n:root {\n  --light-background: linear-gradient(\n    135deg,\n    rgb(0, 208, 255),\n    rgb(89, 219, 248),\n    rgb(174, 234, 248)\n  );\n  --dark-background: linear-gradient(135deg, rgb(35 35 35), rgb(54 54 54));\n  --dropshadow: 1px 1px 2px rgba(162, 162, 162, 0.511);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif, Arial, Helvetica;\n  font-weight: 100;\n  font-style: normal;\n  height: 100%;\n  width: 100%;\n}\n\n#app {\n  background: var(--dark-background);\n  height: 100%;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: rgb(29 29 29);\n  padding: 0 2rem;\n\n  #hamburger {\n    display: none;\n  }\n\n  #logo {\n    position: relative;\n    letter-spacing: 1.2px;\n    color: hsl(1, 98%, 62%);\n  }\n\n  #logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: '';\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  nav {\n    margin-left: 10px;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n\n    li {\n      color: #fff;\n      margin-right: 1rem;\n      cursor: pointer;\n    }\n  }\n\n  #input-wrapper {\n    position: absolute;\n    right: 2%;\n\n    input {\n      width: 200px;\n      padding: 5px;\n    }\n\n    button {\n      border: none;\n      padding: 5px;\n      width: 150px;\n      cursor: pointer;\n    }\n  }\n}\n\n#mobile-logo {\n  display: none;\n}\n\n#previous-page, #next-page {\n  position: fixed;\n  top: 50%;\n  background: #2e2e2e;\n  color: #ff4800;\n  font-size: 3rem;\n  border: none;\n  border-radius: 100%;\n  width: 2.5rem;\n  height: 2.5rem;\n  z-index: 9999;\n  cursor: pointer;\n  transition: all .1s linear;\n}\n\n#previous-page:hover, #next-page:hover {\n  color: hsl(1, 98%, 62%);\n  transform: scale(1.4);\n}\n\n#previous-page {\n  left: 2%;\n}\n\n#next-page {\n  right: 2%;\n}\n\n#page {\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n#movie-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));\n  justify-content: center;\n  gap: 20px;\n  height: 100%;\n  padding: 1rem 1rem 4rem 1rem;\n\n  #movie-card {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    transition: transform 0.8s ease;\n\n    #movie-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, 0.614);\n      color: white;\n      width: 100%;\n      padding: 10px;\n      overflow-x: hidden; /* Hide horizontal scrollbar */\n      overflow-y: auto; /* Enable vertical scrollbar */\n      transform: translateY(100%);\n      transition: transform 0.8s ease;\n    }\n    \n    #movie-info::-webkit-scrollbar {\n      display: none; /* Hide scrollbar for WebKit browsers */\n    }\n    \n\n    h1 {\n      color: #fff;\n      font-weight: 300;\n    }\n\n    img {\n      width: 100%;\n      transition: filter 0.5s ease;\n    }\n\n    button {\n      position: absolute;\n      bottom: 5%;\n      right: 5%;\n      background: orange;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      border: none;\n      box-shadow: 1px 1px 2px rgba(152, 152, 152, 0.891),\n        -1px -1px 2px rgba(255, 255, 255, 0.882);\n      transition: transform 0.5s ease;\n      cursor: pointer;\n      z-index: 999;\n    }\n\n    button:hover {\n      transform: scale(1.2);\n    }\n\n    p {\n      visibility: hidden;\n    }\n  }\n\n  #movie-card:hover {\n    transform: scale(1.1);\n  }\n\n  #movie-card:hover img {\n    filter: blur(3px);\n  }\n\n  #movie-card:hover #movie-info {\n    transform: translateY(0%);\n    height: 100%;\n\n    p {\n      margin-top: 3rem;\n      visibility: visible;\n    }\n  }\n}\n\niframe {\n  width: 100%;\n  height: 700px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  padding: 10px;\n  z-index: 9999;\n}\n\n\n@media screen and (max-width: 1024px) {\n  header {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    top: 0;\n    right: 0;\n    transform: translateY(-100%);\n    background: rgba(29, 29, 29, 0.863);\n    backdrop-filter: blur(5px);\n    height: auto;\n    width: 100vw;\n    padding: 1rem 0;\n    z-index: 9999;\n    transition: transform .3s linear;\n\n    #hamburger {\n      display: block;\n      position: absolute; /* Change 'fixed' to 'absolute' */\n      bottom: -20%;\n      right: 5%;\n      background: transparent;\n      color: white;\n      font-size: 1.8rem;\n      border: none;\n      cursor: pointer;\n    }\n  \n    #logo {\n      margin: none;\n    }\n  \n    ul {\n      flex-direction: column;\n\n      li {\n        margin-bottom: 5px;\n      }\n    }\n  \n    #input-wrapper {\n      position: unset;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 200px;\n      margin: 20px;\n\n      input {\n        width: 100%;\n      }\n  \n      button {\n        width: 150px;\n        margin-top: 10px;\n      }\n    }\n  }\n\n  header.active {\n    transform: translateX(0);\n  }\n\n  #mobile-logo {\n    position: relative;\n    display: block;\n    background: rgb(29 29 29);\n    color: hsl(1, 98%, 62%);\n    padding: 1rem;\n  }\n\n  #mobile-logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: '';\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  iframe {\n    height: 300px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentPage: () => (/* binding */ currentPage),
/* harmony export */   searchMovieInput: () => (/* binding */ searchMovieInput)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayNowPlayingMovies.js */ "./src/modules/displayNowPlayingMovies.js");
/* harmony import */ var _modules_displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayPopularSeries.js */ "./src/modules/displayPopularSeries.js");
/* harmony import */ var _modules_searchMovie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/searchMovie.js */ "./src/modules/searchMovie.js");
/* harmony import */ var _modules_searchSeries_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/searchSeries.js */ "./src/modules/searchSeries.js");
/* harmony import */ var _modules_getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/getNowPlayingMovies.js */ "./src/modules/getNowPlayingMovies.js");







const searchMovieInput = document.getElementById("search-query");
const searchMovieBtn = document.getElementById("search-movie-btn");
const searchSeriesBtn = document.getElementById("search-series-btn");
const homeBtn = document.getElementById("home-btn");
const tvSeriesBtn = document.getElementById("tv-series-btn");
const hamburger = document.getElementById("hamburger");
const nextPage = document.getElementById("next-page");
const previousPage = document.getElementById("previous-page");
const page = document.getElementById('page')
const app = document.getElementById("app");

let currentPage = 1;
page.textContent = `Page ${currentPage} of `;

// NAVIGATION EVENTLISTENERS
homeBtn.addEventListener("click", () => {
  currentPage = 1; // Reset currentPage to 1
  app.innerHTML = "";
  (0,_modules_getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_5__.getNowPlayingMovies)();
  (0,_modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

tvSeriesBtn.addEventListener("click", _modules_displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
searchSeriesBtn.addEventListener("click", _modules_searchSeries_js__WEBPACK_IMPORTED_MODULE_4__["default"]); // eventlistener for searching query for TV Series

// HAMBURGER EVENTLISTENER
hamburger.addEventListener("click", () => { // eventlistener for toggling the hamburger menu
  const header = document.querySelector("header");
  header.classList.toggle("active");
});

// PAGE NAVIGATION EVENTLISTENERS
nextPage.addEventListener("click", () => { // eventlistener for MOVIES result next page
  currentPage++;
  page.textContent = `Page ${currentPage} of `;
  app.innerHTML = "";
  (0,_modules_getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_5__.getNowPlayingMovies)();
  (0,_modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

previousPage.addEventListener("click", () => { // eventlistener for MOVIES result previous page
  if (currentPage > 1) {
    // this condition will prevent the currentPage from going below 1
    currentPage--;
    page.textContent = `Page ${currentPage} of `;
    app.innerHTML = "";
    (0,_modules_getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_5__.getNowPlayingMovies)();
    (0,_modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
});


// SEARCH QUERY EVENTLISTENERS
searchSeriesBtn.addEventListener("click", () => {
  if (searchMovieInput.value === "") {
    alert("Please enter TV show title");
  } else {
    (0,_modules_searchSeries_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }
});


searchMovieBtn.addEventListener("click", () => {
  if (searchMovieInput.value === "") {
    alert("Please enter movie title");
  } else {
    (0,_modules_searchMovie_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
});

(0,_modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); //initilize the list of now playing movies on page load




/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMovies)
/* harmony export */ });
/* harmony import */ var _watchMovie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchMovie.js */ "./src/modules/watchMovie.js");


// this is the main function in displaying the movies may it be the 
// 'Popular' or 'Searched' movies by user
async function displayMovies(movies) {
    try {
      const baseImgURL = "https://image.tmdb.org/t/p/w500/";
  
      // Clear previous content
      app.innerHTML = "";
      const movieContainer = document.createElement('section');
      movieContainer.setAttribute('id', 'movie-container');

      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        const watchBtn = document.createElement("button");
        const movieImage = document.createElement("img");
        const movieInfo = document.createElement('div')
        const movieOverview = document.createElement('p');

        movieInfo.setAttribute('id', 'movie-info');
        movieInfo.innerHTML = `<h1>${movie.title}</h1>`;
        movieOverview.textContent = `${movie.overview}`;
        movieCard.setAttribute('id', 'movie-card')
        watchBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        movieImage.src = `${baseImgURL}${movie.poster_path}`;
  
        watchBtn.addEventListener("click", () => {
          app.innerHTML = "";
          (0,_watchMovie_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movie.title, movie.id);
        });
        
        movieInfo.append(movieOverview);
        movieCard.append(movieImage, watchBtn, movieInfo);
        movieContainer.append(movieCard)
        app.append(movieContainer);
      });
      
    } catch (error) {
      console.error(error);
    }
  }

/***/ }),

/***/ "./src/modules/displayNowPlayingMovies.js":
/*!************************************************!*\
  !*** ./src/modules/displayNowPlayingMovies.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayNowPlayingMovies)
/* harmony export */ });
/* harmony import */ var _getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNowPlayingMovies.js */ "./src/modules/getNowPlayingMovies.js");
/* harmony import */ var _displayMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayMovies.js */ "./src/modules/displayMovies.js");



// this will display the current popular movies on page load and is set as
// default landing page
async function displayNowPlayingMovies() {
  try {
    const nowPlayingMovies = await (0,_getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_0__.getNowPlayingMovies)();
    (0,_displayMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nowPlayingMovies);
  } catch (error) {
    console.error(error);
  }
}


/***/ }),

/***/ "./src/modules/displayPopularSeries.js":
/*!*********************************************!*\
  !*** ./src/modules/displayPopularSeries.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayPopularSeries)
/* harmony export */ });
/* harmony import */ var _getPopularSeries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPopularSeries.js */ "./src/modules/getPopularSeries.js");
/* harmony import */ var _displaySeries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaySeries.js */ "./src/modules/displaySeries.js");



async function displayPopularSeries() {
    try {
      const nowPlayingMovies = await (0,_getPopularSeries_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      (0,_displaySeries_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nowPlayingMovies);
    } catch (error) {
      console.error(error);
    }
  }

/***/ }),

/***/ "./src/modules/displaySeries.js":
/*!**************************************!*\
  !*** ./src/modules/displaySeries.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displaySeries)
/* harmony export */ });
/* harmony import */ var _watchSeries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchSeries.js */ "./src/modules/watchSeries.js");


// i just copied the entire function from displayMovies because
// TV series has different property for the title, instead it uses 'name' and
// i don't know how to change the movie.title to movie.name when querying for
// TV series :)
async function displaySeries(movies) {
    try {
      const baseImgURL = "https://image.tmdb.org/t/p/w500/";
  
      // Clear previous content
      app.innerHTML = "";
      const movieContainer = document.createElement('section');
      movieContainer.setAttribute('id', 'movie-container');

      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        const watchBtn = document.createElement("button");
        const movieImage = document.createElement("img");

        const movieInfo = document.createElement('div')
        const movieOverview = document.createElement('p');

        movieInfo.setAttribute('id', 'movie-info');
        movieInfo.innerHTML = `<h1>${movie.name}</h1>`;
        movieOverview.textContent = `${movie.overview}`;
        movieCard.setAttribute('id', 'movie-card')
        watchBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        movieImage.src = `${baseImgURL}${movie.poster_path}`;
  
        watchBtn.addEventListener("click", () => {
          app.innerHTML = "";
          (0,_watchSeries_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movie.name, movie.id);
        });
        
        movieInfo.append(movieOverview);
        movieCard.append(movieImage, watchBtn, movieInfo);
        movieContainer.append(movieCard)
        app.append(movieContainer);
      });
      
    } catch (error) {
      console.error(error);
    }
  }

/***/ }),

/***/ "./src/modules/getNowPlayingMovies.js":
/*!********************************************!*\
  !*** ./src/modules/getNowPlayingMovies.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNowPlayingMovies: () => (/* binding */ getNowPlayingMovies),
/* harmony export */   options: () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");


const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTkwMGIwZmVhZjZjZjVkMjk0MDc1YjAxNDRkMmZiYSIsInN1YiI6IjY2MTA4NDQ1NWIzNzBkMDE3MDYzMzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r2V8Oru9xaAu4JLQPZw_nqv_lVULwa-ZPfq8ruQHwvg",
    },
  };

async function getNowPlayingMovies() { //fetch now playing movies
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${_index_js__WEBPACK_IMPORTED_MODULE_0__.currentPage}`,
        options
      );
      const data = await response.json();
      console.log(data);
      return data.results;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of an error
    }
  }

  

/***/ }),

/***/ "./src/modules/getPopularSeries.js":
/*!*****************************************!*\
  !*** ./src/modules/getPopularSeries.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPopularSeries)
/* harmony export */ });
/* harmony import */ var _getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNowPlayingMovies.js */ "./src/modules/getNowPlayingMovies.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");



async function getPopularSeries() { //fetch now playing movies
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${_index_js__WEBPACK_IMPORTED_MODULE_1__.currentPage}`,
        _getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_0__.options
        );
        const data = await response.json();
        console.log(data);
        return data.results;
      } catch (error) {
        console.error(error);
        return []; // Return an empty array in case of an error
      }
    }

/***/ }),

/***/ "./src/modules/searchMovie.js":
/*!************************************!*\
  !*** ./src/modules/searchMovie.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchMovie)
/* harmony export */ });
/* harmony import */ var _getNowPlayingMovies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNowPlayingMovies */ "./src/modules/getNowPlayingMovies.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _displayMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayMovies.js */ "./src/modules/displayMovies.js");




async function searchMovie() {
    const searchQuery = _index_js__WEBPACK_IMPORTED_MODULE_1__.searchMovieInput.value;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        _getNowPlayingMovies__WEBPACK_IMPORTED_MODULE_0__.options
      );
      const data = await response.json();
      const searchResults = data.results;
      console.log(searchResults)
      ;(0,_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__["default"])(searchResults);
    } catch (error) {
      console.error(error);
    }
  }

/***/ }),

/***/ "./src/modules/searchSeries.js":
/*!*************************************!*\
  !*** ./src/modules/searchSeries.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchSeries)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNowPlayingMovies.js */ "./src/modules/getNowPlayingMovies.js");
/* harmony import */ var _displaySeries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displaySeries.js */ "./src/modules/displaySeries.js");




async function searchSeries() {
    const searchQuery = _index_js__WEBPACK_IMPORTED_MODULE_0__.searchMovieInput.value;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        _getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__.options
      );
      const data = await response.json();
      const searchResults = data.results;
      console.log(searchResults)
      ;(0,_displaySeries_js__WEBPACK_IMPORTED_MODULE_2__["default"])(searchResults);
    } catch (error) {
      console.error(error);
    }
  }

/***/ }),

/***/ "./src/modules/watchMovie.js":
/*!***********************************!*\
  !*** ./src/modules/watchMovie.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ watchMovie)
/* harmony export */ });
/* harmony import */ var _displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayNowPlayingMovies.js */ "./src/modules/displayNowPlayingMovies.js");


async function watchMovie(movieTitle, movieID) {
  try {
    const movieContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    iframe.src = `https://2embed.org/embed/movie/${movieID}`;
    iframe.setAttribute("allowfullscreen", "true");

    movieContainer.textContent = `Title: ${movieTitle}, ID: ${movieID}`;
    movieContainer.append(backBtn);
    app.append(movieContainer, iframe);

    backBtn.addEventListener("click", () => {
      app.innerHTML = "";
      (0,_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });
  } catch (error) {
    console.error(error);
  }
}


/***/ }),

/***/ "./src/modules/watchSeries.js":
/*!************************************!*\
  !*** ./src/modules/watchSeries.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ watchMovie)
/* harmony export */ });
/* harmony import */ var _displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPopularSeries.js */ "./src/modules/displayPopularSeries.js");


async function watchMovie(movieTitle, movieID) {
    try {
      const movieContainer = document.createElement("div");
      const iframe = document.createElement("iframe");
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back";
      iframe.src = `https://vidsrc.xyz/embed/tv/${movieID}`;
      iframe.setAttribute("allowfullscreen", "true");
  
      movieContainer.textContent = `Title: ${movieTitle}, ID: ${movieID}`;
      movieContainer.append(backBtn);
      app.append(movieContainer, iframe);
  
      backBtn.addEventListener("click", () => {
        app.innerHTML = "";
        (0,_displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); 
      });

    } catch (error) {
      console.error(error);
    }
  };

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLFlBQVksS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLHdCQUF3Qix5QkFBeUIsYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFB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QXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZGlzcGxheVBvcHVsYXJTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZGlzcGxheVNlcmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9nZXROb3dQbGF5aW5nTW92aWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2dldFBvcHVsYXJTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvc2VhcmNoTW92aWUuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvc2VhcmNoU2VyaWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL3dhdGNoTW92aWUuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvd2F0Y2hTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tbGlnaHQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDEzNWRlZyxcbiAgICByZ2IoMCwgMjA4LCAyNTUpLFxuICAgIHJnYig4OSwgMjE5LCAyNDgpLFxuICAgIHJnYigxNzQsIDIzNCwgMjQ4KVxuICApO1xuICAtLWRhcmstYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDM1IDM1IDM1KSwgcmdiKDU0IDU0IDU0KSk7XG4gIC0tZHJvcHNoYWRvdzogMXB4IDFweCAycHggcmdiYSgxNjIsIDE2MiwgMTYyLCAwLjUxMSk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2FwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmFja2dyb3VuZCk7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcbiAgcGFkZGluZzogMCAycmVtO1xuXG4gICNoYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjbG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgICBjb2xvcjogaHNsKDEsIDk4JSwgNjIlKTtcbiAgfVxuXG4gICNsb2dvOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XG4gICAgY29udGVudDogJyc7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUlO1xuICB9XG5cbiAgbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAjaW5wdXQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyJTtcblxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4jbW9iaWxlLWxvZ28ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jcHJldmlvdXMtcGFnZSwgI25leHQtcGFnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XG4gIGNvbG9yOiAjZmY0ODAwO1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHotaW5kZXg6IDk5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XG59XG5cbiNwcmV2aW91cy1wYWdlOmhvdmVyLCAjbmV4dC1wYWdlOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgxLCA5OCUsIDYyJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbn1cblxuI3ByZXZpb3VzLXBhZ2Uge1xuICBsZWZ0OiAyJTtcbn1cblxuI25leHQtcGFnZSB7XG4gIHJpZ2h0OiAyJTtcbn1cblxuI3BhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMmUyZTJlO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jbW92aWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMzAwcHgpKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDFyZW0gNHJlbSAxcmVtO1xuXG4gICNtb3ZpZS1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xuXG4gICAgI21vdmllLWluZm8ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MTQpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXG4gICAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBFbmFibGUgdmVydGljYWwgc2Nyb2xsYmFyICovXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAjbW92aWUtaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSBzY3JvbGxiYXIgZm9yIFdlYktpdCBicm93c2VycyAqL1xuICAgIH1cbiAgICBcblxuICAgIGgxIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDUlO1xuICAgICAgcmlnaHQ6IDUlO1xuICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuODkxKSxcbiAgICAgICAgLTFweCAtMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgyKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuXG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cblxuICAjbW92aWUtY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG5cbiAgI21vdmllLWNhcmQ6aG92ZXIgaW1nIHtcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgfVxuXG4gICNtb3ZpZS1jYXJkOmhvdmVyICNtb3ZpZS1pbmZvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICB9XG59XG5cbmlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjksIDI5LCAyOSwgMC44NjMpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBsaW5lYXI7XG5cbiAgICAjaGFtYnVyZ2VyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBDaGFuZ2UgJ2ZpeGVkJyB0byAnYWJzb2x1dGUnICovXG4gICAgICBib3R0b206IC0yMCU7XG4gICAgICByaWdodDogNSU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgXG4gICAgI2xvZ28ge1xuICAgICAgbWFyZ2luOiBub25lO1xuICAgIH1cbiAgXG4gICAgdWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAjaW5wdXQtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBtYXJnaW46IDIwcHg7XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gIFxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhlYWRlci5hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuXG4gICNtb2JpbGUtbG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XG4gICAgY29sb3I6IGhzbCgxLCA5OCUsIDYyJSk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICNtb2JpbGUtbG9nbzo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgfVxuXG4gIGlmcmFtZSB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFOzs7OztHQUtDO0VBQ0Qsd0VBQXdFO0VBQ3hFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTs7RUFFZjtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU87SUFDUCw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCOztJQUVo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O01BRUE7UUFDRSxZQUFZO1FBQ1osZ0JBQWdCO01BQ2xCO0lBQ0Y7RUFDRjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsT0FBTztJQUNQLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxMzVkZWcsXFxuICAgIHJnYigwLCAyMDgsIDI1NSksXFxuICAgIHJnYig4OSwgMjE5LCAyNDgpLFxcbiAgICByZ2IoMTc0LCAyMzQsIDI0OClcXG4gICk7XFxuICAtLWRhcmstYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDM1IDM1IDM1KSwgcmdiKDU0IDU0IDU0KSk7XFxuICAtLWRyb3BzaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTYyLCAxNjIsIDE2MiwgMC41MTEpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhcHAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuXFxuICAjaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNsb2dvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxuICAgIGNvbG9yOiBoc2woMSwgOTglLCA2MiUpO1xcbiAgfVxcblxcbiAgI2xvZ286OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgbGkge1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gICNpbnB1dC13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMiU7XFxuXFxuICAgIGlucHV0IHtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICB9XFxufVxcblxcbiNtb2JpbGUtbG9nbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJldmlvdXMtcGFnZSwgI25leHQtcGFnZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XFxuICBjb2xvcjogI2ZmNDgwMDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XFxufVxcblxcbiNwcmV2aW91cy1wYWdlOmhvdmVyLCAjbmV4dC1wYWdlOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMSwgOTglLCA2MiUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbn1cXG5cXG4jcHJldmlvdXMtcGFnZSB7XFxuICBsZWZ0OiAyJTtcXG59XFxuXFxuI25leHQtcGFnZSB7XFxuICByaWdodDogMiU7XFxufVxcblxcbiNwYWdlIHtcXG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNtb3ZpZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDMwMHB4KSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSA0cmVtIDFyZW07XFxuXFxuICAjbW92aWUtY2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2U7XFxuXFxuICAgICNtb3ZpZS1pbmZvIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYxNCk7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXFxuICAgICAgb3ZlcmZsb3cteTogYXV0bzsgLyogRW5hYmxlIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAjbW92aWUtaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBXZWJLaXQgYnJvd3NlcnMgKi9cXG4gICAgfVxcbiAgICBcXG5cXG4gICAgaDEge1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuODkxKSxcXG4gICAgICAgIC0xcHggLTFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4Mik7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogOTk5O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbiAgfVxcblxcbiAgI21vdmllLWNhcmQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuXFxuICAjbW92aWUtY2FyZDpob3ZlciBpbWcge1xcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG4gIH1cXG5cXG4gICNtb3ZpZS1jYXJkOmhvdmVyICNtb3ZpZS1pbmZvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBwIHtcXG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuaWZyYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI5LCAyOSwgMjksIDAuODYzKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgbGluZWFyO1xcblxcbiAgICAjaGFtYnVyZ2VyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIENoYW5nZSAnZml4ZWQnIHRvICdhYnNvbHV0ZScgKi9cXG4gICAgICBib3R0b206IC0yMCU7XFxuICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICBcXG4gICAgI2xvZ28ge1xcbiAgICAgIG1hcmdpbjogbm9uZTtcXG4gICAgfVxcbiAgXFxuICAgIHVsIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIFxcbiAgICAjaW5wdXQtd3JhcHBlciB7XFxuICAgICAgcG9zaXRpb246IHVuc2V0O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICBtYXJnaW46IDIwcHg7XFxuXFxuICAgICAgaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgfVxcbiAgXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBoZWFkZXIuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcblxcbiAgI21vYmlsZS1sb2dvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcXG4gICAgY29sb3I6IGhzbCgxLCA5OCUsIDYyJSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAjbW9iaWxlLWxvZ286OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICB9XFxuXFxuICBpZnJhbWUge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBkaXNwbGF5Tm93UGxheWluZ01vdmllcyBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlOb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgZGlzcGxheVBvcHVsYXJTZXJpZXMgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5UG9wdWxhclNlcmllcy5qc1wiO1xuaW1wb3J0IHNlYXJjaE1vdmllIGZyb20gXCIuL21vZHVsZXMvc2VhcmNoTW92aWUuanNcIjtcbmltcG9ydCBzZWFyY2hTZXJpZXMgZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2hTZXJpZXMuanNcIjtcbmltcG9ydCB7IGdldE5vd1BsYXlpbmdNb3ZpZXMgfSBmcm9tIFwiLi9tb2R1bGVzL2dldE5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcblxuY29uc3Qgc2VhcmNoTW92aWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXF1ZXJ5XCIpO1xuY29uc3Qgc2VhcmNoTW92aWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1tb3ZpZS1idG5cIik7XG5jb25zdCBzZWFyY2hTZXJpZXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1zZXJpZXMtYnRuXCIpO1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idG5cIik7XG5jb25zdCB0dlNlcmllc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHYtc2VyaWVzLWJ0blwiKTtcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyXCIpO1xuY29uc3QgbmV4dFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtcGFnZVwiKTtcbmNvbnN0IHByZXZpb3VzUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldmlvdXMtcGFnZVwiKTtcbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZScpXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcblxubGV0IGN1cnJlbnRQYWdlID0gMTtcbnBhZ2UudGV4dENvbnRlbnQgPSBgUGFnZSAke2N1cnJlbnRQYWdlfSBvZiBgO1xuXG4vLyBOQVZJR0FUSU9OIEVWRU5UTElTVEVORVJTXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGN1cnJlbnRQYWdlID0gMTsgLy8gUmVzZXQgY3VycmVudFBhZ2UgdG8gMVxuICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgZ2V0Tm93UGxheWluZ01vdmllcygpO1xuICBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpO1xufSk7XG5cbnR2U2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UG9wdWxhclNlcmllcyk7XG5zZWFyY2hTZXJpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaFNlcmllcyk7IC8vIGV2ZW50bGlzdGVuZXIgZm9yIHNlYXJjaGluZyBxdWVyeSBmb3IgVFYgU2VyaWVzXG5cbi8vIEhBTUJVUkdFUiBFVkVOVExJU1RFTkVSXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgLy8gZXZlbnRsaXN0ZW5lciBmb3IgdG9nZ2xpbmcgdGhlIGhhbWJ1cmdlciBtZW51XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFBBR0UgTkFWSUdBVElPTiBFVkVOVExJU1RFTkVSU1xubmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgLy8gZXZlbnRsaXN0ZW5lciBmb3IgTU9WSUVTIHJlc3VsdCBuZXh0IHBhZ2VcbiAgY3VycmVudFBhZ2UrKztcbiAgcGFnZS50ZXh0Q29udGVudCA9IGBQYWdlICR7Y3VycmVudFBhZ2V9IG9mIGA7XG4gIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICBnZXROb3dQbGF5aW5nTW92aWVzKCk7XG4gIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG59KTtcblxucHJldmlvdXNQYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IC8vIGV2ZW50bGlzdGVuZXIgZm9yIE1PVklFUyByZXN1bHQgcHJldmlvdXMgcGFnZVxuICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgLy8gdGhpcyBjb25kaXRpb24gd2lsbCBwcmV2ZW50IHRoZSBjdXJyZW50UGFnZSBmcm9tIGdvaW5nIGJlbG93IDFcbiAgICBjdXJyZW50UGFnZS0tO1xuICAgIHBhZ2UudGV4dENvbnRlbnQgPSBgUGFnZSAke2N1cnJlbnRQYWdlfSBvZiBgO1xuICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGdldE5vd1BsYXlpbmdNb3ZpZXMoKTtcbiAgICBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpO1xuICB9XG59KTtcblxuXG4vLyBTRUFSQ0ggUVVFUlkgRVZFTlRMSVNURU5FUlNcbnNlYXJjaFNlcmllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoc2VhcmNoTW92aWVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIFRWIHNob3cgdGl0bGVcIik7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoU2VyaWVzKCk7XG4gIH1cbn0pO1xuXG5cbnNlYXJjaE1vdmllQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChzZWFyY2hNb3ZpZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgbW92aWUgdGl0bGVcIik7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoTW92aWUoKTtcbiAgfVxufSk7XG5cbmRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7IC8vaW5pdGlsaXplIHRoZSBsaXN0IG9mIG5vdyBwbGF5aW5nIG1vdmllcyBvbiBwYWdlIGxvYWRcblxuZXhwb3J0IHsgc2VhcmNoTW92aWVJbnB1dCwgY3VycmVudFBhZ2UgfTtcbiIsImltcG9ydCB3YXRjaE1vdmllIGZyb20gJy4vd2F0Y2hNb3ZpZS5qcyc7XG5cbi8vIHRoaXMgaXMgdGhlIG1haW4gZnVuY3Rpb24gaW4gZGlzcGxheWluZyB0aGUgbW92aWVzIG1heSBpdCBiZSB0aGUgXG4vLyAnUG9wdWxhcicgb3IgJ1NlYXJjaGVkJyBtb3ZpZXMgYnkgdXNlclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheU1vdmllcyhtb3ZpZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYmFzZUltZ1VSTCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC9cIjtcbiAgXG4gICAgICAvLyBDbGVhciBwcmV2aW91cyBjb250ZW50XG4gICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgbW92aWVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1jb250YWluZXInKTtcblxuICAgICAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vdmllQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHdhdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgbW92aWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNvbnN0IG1vdmllSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IG1vdmllT3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgbW92aWVJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtaW5mbycpO1xuICAgICAgICBtb3ZpZUluZm8uaW5uZXJIVE1MID0gYDxoMT4ke21vdmllLnRpdGxlfTwvaDE+YDtcbiAgICAgICAgbW92aWVPdmVydmlldy50ZXh0Q29udGVudCA9IGAke21vdmllLm92ZXJ2aWV3fWA7XG4gICAgICAgIG1vdmllQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWNhcmQnKVxuICAgICAgICB3YXRjaEJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbGF5XCI+PC9pPmA7XG4gICAgICAgIG1vdmllSW1hZ2Uuc3JjID0gYCR7YmFzZUltZ1VSTH0ke21vdmllLnBvc3Rlcl9wYXRofWA7XG4gIFxuICAgICAgICB3YXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIHdhdGNoTW92aWUobW92aWUudGl0bGUsIG1vdmllLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtb3ZpZUluZm8uYXBwZW5kKG1vdmllT3ZlcnZpZXcpO1xuICAgICAgICBtb3ZpZUNhcmQuYXBwZW5kKG1vdmllSW1hZ2UsIHdhdGNoQnRuLCBtb3ZpZUluZm8pO1xuICAgICAgICBtb3ZpZUNvbnRhaW5lci5hcHBlbmQobW92aWVDYXJkKVxuICAgICAgICBhcHAuYXBwZW5kKG1vdmllQ29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSIsImltcG9ydCB7IGdldE5vd1BsYXlpbmdNb3ZpZXMgfSBmcm9tIFwiLi9nZXROb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgZGlzcGxheU1vdmllcyBmcm9tIFwiLi9kaXNwbGF5TW92aWVzLmpzXCI7XG5cbi8vIHRoaXMgd2lsbCBkaXNwbGF5IHRoZSBjdXJyZW50IHBvcHVsYXIgbW92aWVzIG9uIHBhZ2UgbG9hZCBhbmQgaXMgc2V0IGFzXG4vLyBkZWZhdWx0IGxhbmRpbmcgcGFnZVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgbm93UGxheWluZ01vdmllcyA9IGF3YWl0IGdldE5vd1BsYXlpbmdNb3ZpZXMoKTtcbiAgICBkaXNwbGF5TW92aWVzKG5vd1BsYXlpbmdNb3ZpZXMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgZ2V0UG9wdWxhclNlcmllcyBmcm9tIFwiLi9nZXRQb3B1bGFyU2VyaWVzLmpzXCI7XG5pbXBvcnQgZGlzcGxheVNlcmllcyBmcm9tIFwiLi9kaXNwbGF5U2VyaWVzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlQb3B1bGFyU2VyaWVzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBub3dQbGF5aW5nTW92aWVzID0gYXdhaXQgZ2V0UG9wdWxhclNlcmllcygpO1xuICAgICAgZGlzcGxheVNlcmllcyhub3dQbGF5aW5nTW92aWVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9IiwiaW1wb3J0IHdhdGNoU2VyaWVzIGZyb20gJy4vd2F0Y2hTZXJpZXMuanMnO1xuXG4vLyBpIGp1c3QgY29waWVkIHRoZSBlbnRpcmUgZnVuY3Rpb24gZnJvbSBkaXNwbGF5TW92aWVzIGJlY2F1c2Vcbi8vIFRWIHNlcmllcyBoYXMgZGlmZmVyZW50IHByb3BlcnR5IGZvciB0aGUgdGl0bGUsIGluc3RlYWQgaXQgdXNlcyAnbmFtZScgYW5kXG4vLyBpIGRvbid0IGtub3cgaG93IHRvIGNoYW5nZSB0aGUgbW92aWUudGl0bGUgdG8gbW92aWUubmFtZSB3aGVuIHF1ZXJ5aW5nIGZvclxuLy8gVFYgc2VyaWVzIDopXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5U2VyaWVzKG1vdmllcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNlSW1nVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwL1wiO1xuICBcbiAgICAgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBtb3ZpZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWNvbnRhaW5lcicpO1xuXG4gICAgICBtb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgICAgY29uc3QgbW92aWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgd2F0Y2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBtb3ZpZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgICBjb25zdCBtb3ZpZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBtb3ZpZU92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIG1vdmllSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWluZm8nKTtcbiAgICAgICAgbW92aWVJbmZvLmlubmVySFRNTCA9IGA8aDE+JHttb3ZpZS5uYW1lfTwvaDE+YDtcbiAgICAgICAgbW92aWVPdmVydmlldy50ZXh0Q29udGVudCA9IGAke21vdmllLm92ZXJ2aWV3fWA7XG4gICAgICAgIG1vdmllQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWNhcmQnKVxuICAgICAgICB3YXRjaEJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbGF5XCI+PC9pPmA7XG4gICAgICAgIG1vdmllSW1hZ2Uuc3JjID0gYCR7YmFzZUltZ1VSTH0ke21vdmllLnBvc3Rlcl9wYXRofWA7XG4gIFxuICAgICAgICB3YXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIHdhdGNoU2VyaWVzKG1vdmllLm5hbWUsIG1vdmllLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtb3ZpZUluZm8uYXBwZW5kKG1vdmllT3ZlcnZpZXcpO1xuICAgICAgICBtb3ZpZUNhcmQuYXBwZW5kKG1vdmllSW1hZ2UsIHdhdGNoQnRuLCBtb3ZpZUluZm8pO1xuICAgICAgICBtb3ZpZUNvbnRhaW5lci5hcHBlbmQobW92aWVDYXJkKVxuICAgICAgICBhcHAuYXBwZW5kKG1vdmllQ29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSIsImltcG9ydCB7IGN1cnJlbnRQYWdlIH0gZnJvbSBcIi4uL2luZGV4LmpzXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOlxuICAgICAgICBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlKOS5leUpoZFdRaU9pSm1PVGt3TUdJd1ptVmhaalpqWmpWa01qazBNRGMxWWpBeE5EUmtNbVppWVNJc0luTjFZaUk2SWpZMk1UQTRORFExTldJek56QmtNREUzTURZek16RmpOU0lzSW5OamIzQmxjeUk2V3lKaGNHbGZjbVZoWkNKZExDSjJaWEp6YVc5dUlqb3hmUS5yMlY4T3J1OXhhQXU0SkxRUFp3X25xdl9sVlVMd2EtWlBmcThydVFId3ZnXCIsXG4gICAgfSxcbiAgfTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Tm93UGxheWluZ01vdmllcygpIHsgLy9mZXRjaCBub3cgcGxheWluZyBtb3ZpZXNcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/bGFuZ3VhZ2U9ZW4tVVMmcGFnZT0ke2N1cnJlbnRQYWdlfWAsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHRzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IGluIGNhc2Ugb2YgYW4gZXJyb3JcbiAgICB9XG4gIH1cblxuICBleHBvcnQgeyBvcHRpb25zLCBnZXROb3dQbGF5aW5nTW92aWVzIH0iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4vZ2V0Tm93UGxheWluZ01vdmllcy5qc1wiO1xuaW1wb3J0IHsgY3VycmVudFBhZ2UgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9wdWxhclNlcmllcygpIHsgLy9mZXRjaCBub3cgcGxheWluZyBtb3ZpZXNcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvdG9wX3JhdGVkP2xhbmd1YWdlPWVuLVVTJnBhZ2U9JHtjdXJyZW50UGFnZX1gLFxuICAgICAgICBvcHRpb25zXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRzO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IGluIGNhc2Ugb2YgYW4gZXJyb3JcbiAgICAgIH1cbiAgICB9IiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuL2dldE5vd1BsYXlpbmdNb3ZpZXNcIjtcbmltcG9ydCB7IHNlYXJjaE1vdmllSW5wdXQgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gXCIuL2Rpc3BsYXlNb3ZpZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoTW92aWUoKSB7XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzZWFyY2hNb3ZpZUlucHV0LnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/cXVlcnk9JHtzZWFyY2hRdWVyeX0maW5jbHVkZV9hZHVsdD1mYWxzZSZsYW5ndWFnZT1lbi1VUyZwYWdlPTFgLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHRzKVxuICAgICAgZGlzcGxheU1vdmllcyhzZWFyY2hSZXN1bHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9IiwiaW1wb3J0IHsgc2VhcmNoTW92aWVJbnB1dCB9IGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi9nZXROb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgZGlzcGxheVNlcmllcyBmcm9tICcuL2Rpc3BsYXlTZXJpZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hTZXJpZXMoKSB7XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzZWFyY2hNb3ZpZUlucHV0LnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvdHY/cXVlcnk9JHtzZWFyY2hRdWVyeX0maW5jbHVkZV9hZHVsdD1mYWxzZSZsYW5ndWFnZT1lbi1VUyZwYWdlPTFgLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHRzKVxuICAgICAgZGlzcGxheVNlcmllcyhzZWFyY2hSZXN1bHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9IiwiaW1wb3J0IGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzIGZyb20gXCIuL2Rpc3BsYXlOb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHdhdGNoTW92aWUobW92aWVUaXRsZSwgbW92aWVJRCkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJhY2tCdG4udGV4dENvbnRlbnQgPSBcIkJhY2tcIjtcbiAgICBpZnJhbWUuc3JjID0gYGh0dHBzOi8vMmVtYmVkLm9yZy9lbWJlZC9tb3ZpZS8ke21vdmllSUR9YDtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIFwidHJ1ZVwiKTtcblxuICAgIG1vdmllQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRpdGxlOiAke21vdmllVGl0bGV9LCBJRDogJHttb3ZpZUlEfWA7XG4gICAgbW92aWVDb250YWluZXIuYXBwZW5kKGJhY2tCdG4pO1xuICAgIGFwcC5hcHBlbmQobW92aWVDb250YWluZXIsIGlmcmFtZSk7XG5cbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBkaXNwbGF5UG9wdWxhclNlcmllcyBmcm9tICcuL2Rpc3BsYXlQb3B1bGFyU2VyaWVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gd2F0Y2hNb3ZpZShtb3ZpZVRpdGxlLCBtb3ZpZUlEKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJhY2tCdG4udGV4dENvbnRlbnQgPSBcIkJhY2tcIjtcbiAgICAgIGlmcmFtZS5zcmMgPSBgaHR0cHM6Ly92aWRzcmMueHl6L2VtYmVkL3R2LyR7bW92aWVJRH1gO1xuICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93ZnVsbHNjcmVlblwiLCBcInRydWVcIik7XG4gIFxuICAgICAgbW92aWVDb250YWluZXIudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7bW92aWVUaXRsZX0sIElEOiAke21vdmllSUR9YDtcbiAgICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZChiYWNrQnRuKTtcbiAgICAgIGFwcC5hcHBlbmQobW92aWVDb250YWluZXIsIGlmcmFtZSk7XG4gIFxuICAgICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZGlzcGxheVBvcHVsYXJTZXJpZXMoKTsgXG4gICAgICB9KTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=