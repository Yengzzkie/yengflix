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
      position: relative;
      color: #fff;
      margin-right: 1rem;
      cursor: pointer;
    }

    li:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      height: 1px;
      width: 0;
      transition: width .2s linear;
    }

    li:hover::after {
      width: 100%;
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

#hamburger {
  display: none;
}


#mobile-logo {
  display: none;
}

#previous-page-btn, #next-page-btn {
  position: fixed;
  top: 50%;
  background: #ff9225c1;
  color: #fcefea;
  font-size: 2rem;
  border: none;
  padding: 10px 15px;
  z-index: 9999;
  cursor: pointer;
  transition: all .1s linear;
}

#previous-page-btn:hover, #next-page-btn:hover {
  color: hsl(0, 100%, 50%);
  transform: scale(1.2);
}

#previous-page-btn {
  left: 2%;
}

#next-page-btn {
  right: 2%;
}

#page {
  background: #2e2e2e;
  color: #fff;
  text-align: center;
  padding: 10px;
}

#movie-container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
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
      padding: 20px 10px;
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

    #watch-button {
      top: 5%;
      right: 5%;
    }

    #add-to-list-button {
      bottom: 5%;
      right: 5%;
    }

    p {
      visibility: hidden;
    }
  }

  #movie-card:hover {
    transform: scale(1.03);
  }

  #movie-card:hover img {
    filter: blur(3px);
  }

  #movie-card:hover #movie-info {
    transform: translateY(0%);
    height: 100%;

    p {
      margin-top: 1rem;
      visibility: visible;
    }
  }
}

#iframe-container {
  position: relative;
  height: 100%;

  button {
    position: absolute;
    top: 1%;
    right: 2%;
    background: orange;
    color: #fff;
    font-size: 2rem;
    border: none;
    padding: 10px;
    transform: rotate(180deg);
    transition: transform .3s linear;
    cursor: pointer;
  }

  button:hover {
    transform: rotate(180deg) scale(1.1);
    color: red;
  }

  #poster {
    width: 100%;
  }
}

iframe {
  width: 100%;
  height: 600px;
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

  #hamburger {
    display: block;
    position: fixed; /* Change 'fixed' to 'absolute' */
    top: 3%;
    right: 5%;
    background: transparent;
    color: white;
    font-size: 1.8rem;
    border: none;
    cursor: pointer;
    z-index: 99999;
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

  #movie-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 150px));

    #movie-card  {

      button {
        width: 35px;
        height: 35px;
      }
    }
  }

  #movie-info {
     h1 {
      font-size: 1rem;
     }

     p {
      font-size: .8rem;
     }
  }

  #iframe-container {

    button {
      font-size: 1rem;
    }

    iframe {
      height: 300px;
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\n:root {\n  --light-background: linear-gradient(\n    135deg,\n    rgb(0, 208, 255),\n    rgb(89, 219, 248),\n    rgb(174, 234, 248)\n  );\n  --dark-background: linear-gradient(135deg, rgb(35 35 35), rgb(54 54 54));\n  --dropshadow: 1px 1px 2px rgba(162, 162, 162, 0.511);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif, Arial, Helvetica;\n  font-weight: 100;\n  font-style: normal;\n  height: 100%;\n  width: 100%;\n}\n\n#app {\n  background: var(--dark-background);\n  height: 100%;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: rgb(29 29 29);\n  padding: 0 2rem;\n\n  #logo {\n    position: relative;\n    letter-spacing: 1.2px;\n    color: hsl(1, 98%, 62%);\n  }\n\n  #logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: '';\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  nav {\n    margin-left: 10px;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n\n    li {\n      position: relative;\n      color: #fff;\n      margin-right: 1rem;\n      cursor: pointer;\n    }\n\n    li:after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      background: #fff;\n      height: 1px;\n      width: 0;\n      transition: width .2s linear;\n    }\n\n    li:hover::after {\n      width: 100%;\n    }\n  }\n\n  #input-wrapper {\n    position: absolute;\n    right: 2%;\n\n    input {\n      width: 200px;\n      padding: 5px;\n    }\n\n    button {\n      border: none;\n      padding: 5px;\n      width: 150px;\n      cursor: pointer;\n    }\n  }\n}\n\n#hamburger {\n  display: none;\n}\n\n\n#mobile-logo {\n  display: none;\n}\n\n#previous-page-btn, #next-page-btn {\n  position: fixed;\n  top: 50%;\n  background: #ff9225c1;\n  color: #fcefea;\n  font-size: 2rem;\n  border: none;\n  padding: 10px 15px;\n  z-index: 9999;\n  cursor: pointer;\n  transition: all .1s linear;\n}\n\n#previous-page-btn:hover, #next-page-btn:hover {\n  color: hsl(0, 100%, 50%);\n  transform: scale(1.2);\n}\n\n#previous-page-btn {\n  left: 2%;\n}\n\n#next-page-btn {\n  right: 2%;\n}\n\n#page {\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n#movie-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));\n  justify-content: center;\n  gap: 20px;\n  height: 100%;\n  padding: 1rem 1rem 4rem 1rem;\n\n  #movie-card {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    transition: transform 0.8s ease;\n\n    #movie-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, 0.614);\n      color: white;\n      width: 100%;\n      padding: 20px 10px;\n      overflow-x: hidden; /* Hide horizontal scrollbar */\n      overflow-y: auto; /* Enable vertical scrollbar */\n      transform: translateY(100%);\n      transition: transform 0.8s ease;\n    }\n    \n    #movie-info::-webkit-scrollbar {\n      display: none; /* Hide scrollbar for WebKit browsers */\n    }\n    \n\n    h1 {\n      color: #fff;\n      font-weight: 300;\n    }\n\n    img {\n      width: 100%;\n      transition: filter 0.5s ease;\n    }\n\n    button {\n      position: absolute;\n      background: orange;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      border: none;\n      box-shadow: 1px 1px 2px rgba(152, 152, 152, 0.891),\n        -1px -1px 2px rgba(255, 255, 255, 0.882);\n      transition: transform 0.5s ease;\n      cursor: pointer;\n      z-index: 999;\n    }\n\n    button:hover {\n      transform: scale(1.2);\n    }\n\n    #watch-button {\n      top: 5%;\n      right: 5%;\n    }\n\n    #add-to-list-button {\n      bottom: 5%;\n      right: 5%;\n    }\n\n    p {\n      visibility: hidden;\n    }\n  }\n\n  #movie-card:hover {\n    transform: scale(1.03);\n  }\n\n  #movie-card:hover img {\n    filter: blur(3px);\n  }\n\n  #movie-card:hover #movie-info {\n    transform: translateY(0%);\n    height: 100%;\n\n    p {\n      margin-top: 1rem;\n      visibility: visible;\n    }\n  }\n}\n\n#iframe-container {\n  position: relative;\n  height: 100%;\n\n  button {\n    position: absolute;\n    top: 1%;\n    right: 2%;\n    background: orange;\n    color: #fff;\n    font-size: 2rem;\n    border: none;\n    padding: 10px;\n    transform: rotate(180deg);\n    transition: transform .3s linear;\n    cursor: pointer;\n  }\n\n  button:hover {\n    transform: rotate(180deg) scale(1.1);\n    color: red;\n  }\n\n  #poster {\n    width: 100%;\n  }\n}\n\niframe {\n  width: 100%;\n  height: 600px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  padding: 10px;\n  z-index: 9999;\n}\n\n\n@media screen and (max-width: 1024px) {\n  header {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    top: 0;\n    right: 0;\n    transform: translateY(-100%);\n    background: rgba(29, 29, 29, 0.863);\n    backdrop-filter: blur(5px);\n    height: auto;\n    width: 100vw;\n    padding: 1rem 0;\n    z-index: 9999;\n    transition: transform .3s linear;\n  \n    #logo {\n      margin: none;\n    }\n  \n    ul {\n      flex-direction: column;\n\n      li {\n        margin-bottom: 5px;\n      }\n    }\n  \n    #input-wrapper {\n      position: unset;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 200px;\n      margin: 20px;\n\n      input {\n        width: 100%;\n      }\n  \n      button {\n        width: 150px;\n        margin-top: 10px;\n      }\n    }\n  }\n\n  header.active {\n    transform: translateX(0);\n  }\n\n  #hamburger {\n    display: block;\n    position: fixed; /* Change 'fixed' to 'absolute' */\n    top: 3%;\n    right: 5%;\n    background: transparent;\n    color: white;\n    font-size: 1.8rem;\n    border: none;\n    cursor: pointer;\n    z-index: 99999;\n  }\n\n  #mobile-logo {\n    position: relative;\n    display: block;\n    background: rgb(29 29 29);\n    color: hsl(1, 98%, 62%);\n    padding: 1rem;\n  }\n\n  #mobile-logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: '';\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  #movie-container {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 150px));\n\n    #movie-card  {\n\n      button {\n        width: 35px;\n        height: 35px;\n      }\n    }\n  }\n\n  #movie-info {\n     h1 {\n      font-size: 1rem;\n     }\n\n     p {\n      font-size: .8rem;\n     }\n  }\n\n  #iframe-container {\n\n    button {\n      font-size: 1rem;\n    }\n\n    iframe {\n      height: 300px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   searchMovieInput: () => (/* binding */ searchMovieInput)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayNowPlayingMovies.js */ "./src/modules/displayNowPlayingMovies.js");
/* harmony import */ var _modules_displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayPopularSeries.js */ "./src/modules/displayPopularSeries.js");
/* harmony import */ var _modules_searchMovie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/searchMovie.js */ "./src/modules/searchMovie.js");
/* harmony import */ var _modules_searchSeries_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/searchSeries.js */ "./src/modules/searchSeries.js");
/* harmony import */ var _modules_getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/getNowPlayingMovies.js */ "./src/modules/getNowPlayingMovies.js");
/* harmony import */ var _modules_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/displayCurrentPage.js */ "./src/modules/displayCurrentPage.js");








const searchMovieInput = document.getElementById("search-query");
const searchMovieBtn = document.getElementById("search-movie-btn");
const searchSeriesBtn = document.getElementById("search-series-btn");
const homeBtn = document.getElementById("home-btn");
const tvSeriesBtn = document.getElementById("tv-series-btn");
const nowPlayingMoviesBtn = document.getElementById('popular-movies-btn')
const hamburger = document.getElementById("hamburger");
const app = document.getElementById("app");

// NAVIGATION EVENTLISTENERS
homeBtn.addEventListener("click", () => {
  (0,_modules_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_6__.resetCurrentPage)();
  app.innerHTML = "";
  (0,_modules_getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_5__.getNowPlayingMovies)();
  (0,_modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

nowPlayingMoviesBtn.addEventListener('click', _modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
tvSeriesBtn.addEventListener("click", _modules_displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
searchSeriesBtn.addEventListener("click", _modules_searchSeries_js__WEBPACK_IMPORTED_MODULE_4__["default"]); // eventlistener for searching query for TV Series

// HAMBURGER EVENTLISTENER
hamburger.addEventListener("click", () => { // eventlistener for toggling the hamburger menu
  const header = document.querySelector("header");
  header.classList.toggle("active");
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

/***/ "./src/modules/addToMyList.js":
/*!************************************!*\
  !*** ./src/modules/addToMyList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addToMyList)
/* harmony export */ });
function addToMyList({ movie, title, type }) {
    // Retrieve existing list from local storage or initialize an empty array
    const myList = JSON.parse(localStorage.getItem("myList")) || [];

    // Check if movieId is already in the list
    if (!myList.includes(movie)) {
        // If not, add it to the list
        myList.push({title: title, id: movie.id, poster: movie.poster_path, type: type});

        // Save the updated list back to local storage
        localStorage.setItem("myList", JSON.stringify(myList));
        
        alert("Movie added to your list!");
    } else {
        alert("This movie is already in your list!");
    }
}

async function displayMyList(movies) {
    try {
        const myList = JSON.parse(localStorage.getItem("myList"));

        myList.forEach(list => {
            console.log(list)
        });

    } catch (error) {
        console.error(error);
    }
}

displayMyList();

/***/ }),

/***/ "./src/modules/displayCurrentPage.js":
/*!*******************************************!*\
  !*** ./src/modules/displayCurrentPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentPage: () => (/* binding */ currentPage),
/* harmony export */   decrementPage: () => (/* binding */ decrementPage),
/* harmony export */   getCurrentPage: () => (/* binding */ getCurrentPage),
/* harmony export */   incrementPage: () => (/* binding */ incrementPage),
/* harmony export */   resetCurrentPage: () => (/* binding */ resetCurrentPage)
/* harmony export */ });
let currentPage = 1;
const page = document.getElementById('page');
page.textContent = `Page ${currentPage} of `;

function getCurrentPage() {
  return currentPage;
}

function incrementPage() {
  currentPage++;
}

function decrementPage() {
  if (currentPage > 1) {
    currentPage--;
  }
}

function resetCurrentPage() {
    currentPage = 1;
  }




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
/* harmony import */ var _displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayNowPlayingMovies.js */ "./src/modules/displayNowPlayingMovies.js");
/* harmony import */ var _displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayCurrentPage.js */ "./src/modules/displayCurrentPage.js");
/* harmony import */ var _addToMyList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addToMyList.js */ "./src/modules/addToMyList.js");





// this is the main function in displaying the movies may it be the 
// 'Popular' or 'Searched' movies by user
async function displayMovies(movies) {
    try {
      const baseImgURL = "https://image.tmdb.org/t/p/w500/";
  
      // Clear previous content
      app.innerHTML = "";
      const movieContainer = document.createElement('section');
      const previousPageBtn = document.createElement('button');
      const nextPageBtn = document.createElement('button');

      movieContainer.setAttribute('id', 'movie-container');
      previousPageBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
      nextPageBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
      previousPageBtn.setAttribute('id', 'previous-page-btn')
      nextPageBtn.setAttribute('id', 'next-page-btn')

      nextPageBtn.addEventListener("click", () => {
        ;(0,_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_2__.incrementPage)();
        (0,_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      });
  
      previousPageBtn.addEventListener("click", () => {
        (0,_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_2__.decrementPage)();
        (0,_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      });

      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        const watchBtn = document.createElement("button");
        const addToListBtn = document.createElement('button');
        const movieImage = document.createElement("img");
        const movieInfo = document.createElement('div')
        const movieOverview = document.createElement('p');
        const movieReleaseDate = document.createElement('p');
        const movieRating = document.createElement('p');

        movieInfo.setAttribute('id', 'movie-info');
        movieInfo.innerHTML = `<h1>${movie.title}</h1>`;
        movieOverview.textContent = `${movie.overview}`;
        movieRating.innerHTML = `<b>Rating</b> : ${Math.floor(movie.vote_average)} / 10`;
        movieReleaseDate.innerHTML = `<b>Released</b> : ${movie.release_date}`;
        movieImage.src = `${baseImgURL}${movie.poster_path}`;
        movieCard.setAttribute('id', 'movie-card')
        watchBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        watchBtn.setAttribute('id', 'watch-button');
        addToListBtn.textContent = '+'
        addToListBtn.setAttribute('id', 'add-to-list-button');
  
        watchBtn.addEventListener("click", () => {
          app.innerHTML = "";
          (0,_watchMovie_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movie.title, movie.id, movie.backdrop_path);
        });

        addToListBtn.addEventListener("click", () => {
          const itemTitle = movie.title ? movie.title : movie.name; //checks if the element is a "movie" or "tv"
          (0,_addToMyList_js__WEBPACK_IMPORTED_MODULE_3__["default"])({movie, title: itemTitle, type: "movie"}); 
         });
        
        movieInfo.append(movieOverview, movieReleaseDate, movieRating);
        movieCard.append(movieImage, watchBtn, addToListBtn, movieInfo);
        movieContainer.append(movieCard, nextPageBtn, previousPageBtn)
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
/* harmony import */ var _displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayPopularSeries.js */ "./src/modules/displayPopularSeries.js");
/* harmony import */ var _displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayCurrentPage.js */ "./src/modules/displayCurrentPage.js");
/* harmony import */ var _addToMyList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addToMyList.js */ "./src/modules/addToMyList.js");





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
      const previousPageBtn = document.createElement('button');
      const nextPageBtn = document.createElement('button');

      movieContainer.setAttribute('id', 'movie-container');
      previousPageBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
      nextPageBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
      previousPageBtn.setAttribute('id', 'previous-page-btn')
      nextPageBtn.setAttribute('id', 'next-page-btn')

      nextPageBtn.addEventListener("click", () => {
        ;(0,_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_2__.incrementPage)();
        (0,_displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      });
  
      previousPageBtn.addEventListener("click", () => {
        (0,_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_2__.decrementPage)();
        (0,_displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      });

      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        const watchBtn = document.createElement("button");
        const addToListBtn = document.createElement('button');
        const movieImage = document.createElement("img");
        const movieInfo = document.createElement('div')
        const movieOverview = document.createElement('p');
        const movieReleaseDate = document.createElement('p');
        const movieRating = document.createElement('p');

        movieInfo.setAttribute('id', 'movie-info');
        movieInfo.innerHTML = `<h1>${movie.name}</h1>`;
        movieOverview.textContent = `${movie.overview}`;
        movieRating.innerHTML = `<b>Rating</b> : ${Math.floor(movie.vote_average)} / 10`;
        movieReleaseDate.innerHTML = `<b>Released</b> : ${movie.first_air_date}`;
        movieImage.src = `${baseImgURL}${movie.poster_path}`;
        movieCard.setAttribute('id', 'movie-card')
        watchBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        watchBtn.setAttribute('id', 'watch-button');
        addToListBtn.textContent = '+'
        addToListBtn.setAttribute('id', 'add-to-list-button');
        
        watchBtn.addEventListener("click", () => {
          app.innerHTML = "";
          (0,_watchSeries_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movie.name, movie.id, movie.backdrop_path);
        });

        addToListBtn.addEventListener("click", () => {
          const itemTitle = movie.title ? movie.title : movie.name; //checks if the element is a "movie" or "tv"
          (0,_addToMyList_js__WEBPACK_IMPORTED_MODULE_3__["default"])({movie, title: itemTitle, type: "tv"}); 
         });
        
        movieInfo.append(movieOverview, movieReleaseDate, movieRating);
        movieCard.append(movieImage, watchBtn, addToListBtn, movieInfo);
        movieContainer.append(movieCard, nextPageBtn, previousPageBtn)
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
/* harmony import */ var _displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCurrentPage.js */ "./src/modules/displayCurrentPage.js");


const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTkwMGIwZmVhZjZjZjVkMjk0MDc1YjAxNDRkMmZiYSIsInN1YiI6IjY2MTA4NDQ1NWIzNzBkMDE3MDYzMzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r2V8Oru9xaAu4JLQPZw_nqv_lVULwa-ZPfq8ruQHwvg",
  },
};

async function getNowPlayingMovies() {
  let currentPage = (0,_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)();
  const page = document.getElementById("page");
  
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`,
      options
    );
    const data = await response.json();
    console.log(data)
    page.textContent = `Page ${currentPage} of ${data.total_pages}`;
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
/* harmony import */ var _displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayCurrentPage.js */ "./src/modules/displayCurrentPage.js");



async function getPopularSeries() { //fetch now playing movies
  let currentPage = (0,_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentPage)();
  const page = document.getElementById("page");

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${currentPage}`,
        _getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_0__.options
        );
        const data = await response.json();
        console.log(data)
        page.textContent = `Page ${currentPage} of ${data.total_pages}`;
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


async function watchMovie(movieTitle, movieID, posterPath) {
  const titleHeader = document.getElementById("page");
  titleHeader.innerHTML = "";
  const baseImgURL = "https://image.tmdb.org/t/p/original/";

  try {
    const iframeContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    const backBtn = document.createElement("button");
    const poster = document.createElement('img');

    poster.src = `${baseImgURL}${posterPath}`;
    poster.setAttribute('id', 'poster')
    iframeContainer.setAttribute('id', 'iframe-container')
    backBtn.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
    iframe.src = `https://2embed.org/embed/movie/${movieID}`;
    iframe.setAttribute("allowfullscreen", "true");

    titleHeader.textContent = movieTitle;
    iframeContainer.append(iframe, backBtn, poster);
    app.append(iframeContainer);

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
/* harmony export */   "default": () => (/* binding */ watchSeries)
/* harmony export */ });
/* harmony import */ var _displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPopularSeries.js */ "./src/modules/displayPopularSeries.js");


async function watchSeries(movieTitle, movieID, posterPath) {
  const titleHeader = document.getElementById("page");
  titleHeader.innerHTML = "";
  const baseImgURL = "https://image.tmdb.org/t/p/original/";

  try {
    const iframeContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    const backBtn = document.createElement("button");
    const poster = document.createElement('img');

    poster.src = `${baseImgURL}${posterPath}`;
    poster.setAttribute('id', 'poster')
    iframeContainer.setAttribute('id', 'iframe-container')
    backBtn.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
    iframe.src = `https://vidsrc.xyz/embed/tv/${movieID}`;
    iframe.setAttribute("allowfullscreen", "true");

    titleHeader.textContent = movieTitle;
    iframeContainer.append(iframe, backBtn, poster);
    app.append(iframeContainer);
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUMzTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFNBQVMsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLFlBQVksS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSx5QkFBeUIseUJBQXlCLGFBQWEsYUFBYSxPQUFPLEtBQUssc0JBQXNCLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLFlBQVksS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxhQUFhLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsc0JBQXNCLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssd0dBQXdHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sc0JBQXNCLFdBQVcsa0lBQWtJLDZFQUE2RSx5REFBeUQsR0FBRyxPQUFPLDJCQUEyQixjQUFjLGVBQWUsR0FBRyxVQUFVLDJEQUEyRCxxQkFBcUIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsR0FBRyxVQUFVLHVDQUF1QyxpQkFBaUIsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0Isa0JBQWtCLDhCQUE4QixvQkFBb0IsYUFBYSx5QkFBeUIsNEJBQTRCLDhCQUE4QixLQUFLLG9CQUFvQix5QkFBeUIsZ0NBQWdDLGtCQUFrQixnQkFBZ0IsY0FBYyxtQ0FBbUMsMEJBQTBCLGtCQUFrQixrQkFBa0IsS0FBSyxXQUFXLHdCQUF3QixLQUFLLFVBQVUsb0JBQW9CLHVCQUF1QixZQUFZLDJCQUEyQixvQkFBb0IsMkJBQTJCLHdCQUF3QixPQUFPLGtCQUFrQixvQkFBb0IsMkJBQTJCLGtCQUFrQixrQkFBa0Isb0NBQW9DLHlCQUF5QixvQkFBb0IsaUJBQWlCLHFDQUFxQyxPQUFPLHlCQUF5QixvQkFBb0IsT0FBTyxLQUFLLHNCQUFzQix5QkFBeUIsZ0JBQWdCLGVBQWUscUJBQXFCLHFCQUFxQixPQUFPLGdCQUFnQixxQkFBcUIscUJBQXFCLHFCQUFxQix3QkFBd0IsT0FBTyxLQUFLLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRyx3Q0FBd0Msb0JBQW9CLGFBQWEsMEJBQTBCLG1CQUFtQixvQkFBb0IsaUJBQWlCLHVCQUF1QixrQkFBa0Isb0JBQW9CLCtCQUErQixHQUFHLG9EQUFvRCw2QkFBNkIsMEJBQTBCLEdBQUcsd0JBQXdCLGFBQWEsR0FBRyxvQkFBb0IsY0FBYyxHQUFHLFdBQVcsd0JBQXdCLGdCQUFnQix1QkFBdUIsa0JBQWtCLEdBQUcsc0JBQXNCLHVCQUF1QixrQkFBa0Isa0VBQWtFLDRCQUE0QixjQUFjLGlCQUFpQixpQ0FBaUMsbUJBQW1CLHlCQUF5QixvQkFBb0IsOEJBQThCLGtCQUFrQixtQkFBbUIsdUJBQXVCLHNDQUFzQyxxQkFBcUIsMkJBQTJCLGtCQUFrQixnQkFBZ0IsK0NBQStDLHFCQUFxQixvQkFBb0IsMkJBQTJCLDRCQUE0Qix5REFBeUQsbUVBQW1FLHdDQUF3QyxPQUFPLDRDQUE0Qyx1QkFBdUIsK0NBQStDLGtCQUFrQixvQkFBb0IseUJBQXlCLE9BQU8sYUFBYSxvQkFBb0IscUNBQXFDLE9BQU8sZ0JBQWdCLDJCQUEyQiwyQkFBMkIsb0JBQW9CLHFCQUFxQiwyQkFBMkIscUJBQXFCLDhHQUE4Ryx3Q0FBd0Msd0JBQXdCLHFCQUFxQixPQUFPLHNCQUFzQiw4QkFBOEIsT0FBTyx1QkFBdUIsZ0JBQWdCLGtCQUFrQixPQUFPLDZCQUE2QixtQkFBbUIsa0JBQWtCLE9BQU8sV0FBVywyQkFBMkIsT0FBTyxLQUFLLHlCQUF5Qiw2QkFBNkIsS0FBSyw2QkFBNkIsd0JBQXdCLEtBQUsscUNBQXFDLGdDQUFnQyxtQkFBbUIsV0FBVyx5QkFBeUIsNEJBQTRCLE9BQU8sS0FBSyxHQUFHLHVCQUF1Qix1QkFBdUIsaUJBQWlCLGNBQWMseUJBQXlCLGNBQWMsZ0JBQWdCLHlCQUF5QixrQkFBa0Isc0JBQXNCLG1CQUFtQixvQkFBb0IsZ0NBQWdDLHVDQUF1QyxzQkFBc0IsS0FBSyxvQkFBb0IsMkNBQTJDLGlCQUFpQixLQUFLLGVBQWUsa0JBQWtCLEtBQUssR0FBRyxZQUFZLGdCQUFnQixrQkFBa0IsR0FBRyxZQUFZLG9CQUFvQixjQUFjLHdCQUF3QixnQkFBZ0IsdUJBQXVCLGdCQUFnQixrQkFBa0Isa0JBQWtCLEdBQUcsNkNBQTZDLFlBQVksc0JBQXNCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGFBQWEsZUFBZSxtQ0FBbUMsMENBQTBDLGlDQUFpQyxtQkFBbUIsbUJBQW1CLHNCQUFzQixvQkFBb0IsdUNBQXVDLGlCQUFpQixxQkFBcUIsT0FBTyxjQUFjLCtCQUErQixjQUFjLDZCQUE2QixTQUFTLE9BQU8sMEJBQTBCLHdCQUF3QixzQkFBc0IsK0JBQStCLDRCQUE0QixxQkFBcUIscUJBQXFCLGlCQUFpQixzQkFBc0IsU0FBUyxvQkFBb0IsdUJBQXVCLDJCQUEyQixTQUFTLE9BQU8sS0FBSyxxQkFBcUIsK0JBQStCLEtBQUssa0JBQWtCLHFCQUFxQix1QkFBdUIsZ0RBQWdELGdCQUFnQiw4QkFBOEIsbUJBQW1CLHdCQUF3QixtQkFBbUIsc0JBQXNCLHFCQUFxQixLQUFLLG9CQUFvQix5QkFBeUIscUJBQXFCLGdDQUFnQyw4QkFBOEIsb0JBQW9CLEtBQUssMkJBQTJCLHlCQUF5QixnQ0FBZ0Msa0JBQWtCLGdCQUFnQixjQUFjLG1DQUFtQywwQkFBMEIsa0JBQWtCLGtCQUFrQixLQUFLLHdCQUF3QixvRUFBb0Usc0JBQXNCLGtCQUFrQixzQkFBc0IsdUJBQXVCLFNBQVMsT0FBTyxLQUFLLG1CQUFtQixXQUFXLHdCQUF3QixRQUFRLFlBQVkseUJBQXlCLFFBQVEsS0FBSyx5QkFBeUIsZ0JBQWdCLHdCQUF3QixPQUFPLGdCQUFnQixzQkFBc0IsT0FBTyxLQUFLLEdBQUcscUJBQXFCO0FBQ253VTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2phMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzQjtBQUNxRDtBQUNOO0FBQ2xCO0FBQ0U7QUFDa0I7QUFDSjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxnRkFBZ0I7QUFDbEI7QUFDQSxFQUFFLG9GQUFtQjtBQUNyQixFQUFFLCtFQUF1QjtBQUN6QixDQUFDOztBQUVELDhDQUE4QywyRUFBdUI7QUFDckUsc0NBQXNDLHdFQUFvQjtBQUMxRCwwQ0FBMEMsZ0VBQVksR0FBRzs7QUFFekQ7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSSxvRUFBWTtBQUNoQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUksbUVBQVc7QUFDZjtBQUNBLENBQUM7O0FBRUQsK0VBQXVCLElBQUk7O0FBRUM7Ozs7Ozs7Ozs7Ozs7OztBQ3REYix1QkFBdUIsb0JBQW9CO0FBQzFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtFQUFrRTs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBLDJCQUEyQixhQUFhOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV1Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCOUM7QUFDMEI7QUFDSTtBQUM1Qjs7QUFFM0M7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxzRUFBYTtBQUNyQixRQUFRLHVFQUF1QjtBQUMvQixPQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQVEscUVBQWE7QUFDckIsUUFBUSx1RUFBdUI7QUFDL0IsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRCx1Q0FBdUMsZUFBZTtBQUN0RCxtREFBbUQsZ0NBQWdDO0FBQ25GLDBEQUEwRCxtQkFBbUI7QUFDN0UsNEJBQTRCLFdBQVcsRUFBRSxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMERBQVU7QUFDcEIsU0FBUzs7QUFFVDtBQUNBLG9FQUFvRTtBQUNwRSxVQUFVLDJEQUFXLEVBQUUsdUNBQXVDO0FBQzlELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFFK0Q7QUFDaEI7O0FBRS9DO0FBQ0E7QUFDZTtBQUNmO0FBQ0EsbUNBQW1DLDRFQUFtQjtBQUN0RCxJQUFJLDZEQUFhO0FBQ2pCLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnFEO0FBQ047O0FBRWhDO0FBQ2Y7QUFDQSxxQ0FBcUMsZ0VBQWdCO0FBQ3JELE1BQU0sNkRBQWE7QUFDbkIsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjJDO0FBQ2tCO0FBQ1U7QUFDNUI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHNFQUFhO0FBQ3JCLFFBQVEsb0VBQW9CO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0EsUUFBUSxxRUFBYTtBQUNyQixRQUFRLG9FQUFvQjtBQUM1QixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hELHVDQUF1QyxlQUFlO0FBQ3RELG1EQUFtRCxnQ0FBZ0M7QUFDbkYsMERBQTBELHFCQUFxQjtBQUMvRSw0QkFBNEIsV0FBVyxFQUFFLGtCQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyREFBVztBQUNyQixTQUFTOztBQUVUO0FBQ0Esb0VBQW9FO0FBQ3BFLFVBQVUsMkRBQVcsRUFBRSxvQ0FBb0M7QUFDM0QsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUV5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esb0JBQW9CLHNFQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLFlBQVk7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYSxLQUFLLGlCQUFpQjtBQUNsRTtBQUNBLElBQUk7QUFDSjtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUV3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qlc7QUFDTTs7QUFFMUMsb0NBQW9DO0FBQ25ELG9CQUFvQixzRUFBYztBQUNsQzs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLFlBQVk7QUFDckYsUUFBUSw0REFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhLEtBQUssaUJBQWlCO0FBQ3RFO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJnRDtBQUNEO0FBQ0E7O0FBRWhDO0FBQ2Ysd0JBQXdCLHVEQUFnQjtBQUN4QztBQUNBO0FBQ0EsMkRBQTJELFlBQVk7QUFDdkUsUUFBUSx5REFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4REFBYTtBQUNuQixNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCK0M7QUFDSTtBQUNKOztBQUVoQztBQUNmLHdCQUF3Qix1REFBZ0I7QUFDeEM7QUFDQTtBQUNBLHdEQUF3RCxZQUFZO0FBQ3BFLFFBQVEsNERBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQWE7QUFDbkIsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJtRTs7QUFFcEQ7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsV0FBVyxFQUFFLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLHVFQUF1QjtBQUM3QixLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9CNkQ7O0FBRTlDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFdBQVcsRUFBRSxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxRQUFRO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQW9CO0FBQzVCLE9BQU87O0FBRVAsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2FkZFRvTXlMaXN0LmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDdXJyZW50UGFnZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5TW92aWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlOb3dQbGF5aW5nTW92aWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlQb3B1bGFyU2VyaWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZ2V0Tm93UGxheWluZ01vdmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9nZXRQb3B1bGFyU2VyaWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL3NlYXJjaE1vdmllLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL3NlYXJjaFNlcmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy93YXRjaE1vdmllLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL3dhdGNoU2VyaWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWxpZ2h0LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgcmdiKDAsIDIwOCwgMjU1KSxcbiAgICByZ2IoODksIDIxOSwgMjQ4KSxcbiAgICByZ2IoMTc0LCAyMzQsIDI0OClcbiAgKTtcbiAgLS1kYXJrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzNSAzNSAzNSksIHJnYig1NCA1NCA1NCkpO1xuICAtLWRyb3BzaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTYyLCAxNjIsIDE2MiwgMC41MTEpO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNhcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XG4gIHBhZGRpbmc6IDAgMnJlbTtcblxuICAjbG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgICBjb2xvcjogaHNsKDEsIDk4JSwgNjIlKTtcbiAgfVxuXG4gICNsb2dvOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XG4gICAgY29udGVudDogJyc7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUlO1xuICB9XG5cbiAgbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBsaTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjJzIGxpbmVhcjtcbiAgICB9XG5cbiAgICBsaTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgI2lucHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMiU7XG5cbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuI2hhbWJ1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuI21vYmlsZS1sb2dvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3ByZXZpb3VzLXBhZ2UtYnRuLCAjbmV4dC1wYWdlLWJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZjkyMjVjMTtcbiAgY29sb3I6ICNmY2VmZWE7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XG59XG5cbiNwcmV2aW91cy1wYWdlLWJ0bjpob3ZlciwgI25leHQtcGFnZS1idG46aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDEwMCUsIDUwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuI3ByZXZpb3VzLXBhZ2UtYnRuIHtcbiAgbGVmdDogMiU7XG59XG5cbiNuZXh0LXBhZ2UtYnRuIHtcbiAgcmlnaHQ6IDIlO1xufVxuXG4jcGFnZSB7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNtb3ZpZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDMwMHB4KSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDRyZW0gMXJlbTtcblxuICAjbW92aWUtY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZTtcblxuICAgICNtb3ZpZS1pbmZvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE0KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXG4gICAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBFbmFibGUgdmVydGljYWwgc2Nyb2xsYmFyICovXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAjbW92aWUtaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSBzY3JvbGxiYXIgZm9yIFdlYktpdCBicm93c2VycyAqL1xuICAgIH1cbiAgICBcblxuICAgIGgxIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC44OTEpLFxuICAgICAgICAtMXB4IC0xcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODIpO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICB9XG5cbiAgICBidXR0b246aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cblxuICAgICN3YXRjaC1idXR0b24ge1xuICAgICAgdG9wOiA1JTtcbiAgICAgIHJpZ2h0OiA1JTtcbiAgICB9XG5cbiAgICAjYWRkLXRvLWxpc3QtYnV0dG9uIHtcbiAgICAgIGJvdHRvbTogNSU7XG4gICAgICByaWdodDogNSU7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbiAgI21vdmllLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gIH1cblxuICAjbW92aWUtY2FyZDpob3ZlciBpbWcge1xuICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICB9XG5cbiAgI21vdmllLWNhcmQ6aG92ZXIgI21vdmllLWluZm8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cbn1cblxuI2lmcmFtZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcblxuICBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDElO1xuICAgIHJpZ2h0OiAyJTtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBsaW5lYXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDEuMSk7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gICNwb3N0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbmlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjksIDI5LCAyOSwgMC44NjMpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBsaW5lYXI7XG4gIFxuICAgICNsb2dvIHtcbiAgICAgIG1hcmdpbjogbm9uZTtcbiAgICB9XG4gIFxuICAgIHVsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgI2lucHV0LXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHVuc2V0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgbWFyZ2luOiAyMHB4O1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoZWFkZXIuYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cblxuICAjaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIENoYW5nZSAnZml4ZWQnIHRvICdhYnNvbHV0ZScgKi9cbiAgICB0b3A6IDMlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgfVxuXG4gICNtb2JpbGUtbG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XG4gICAgY29sb3I6IGhzbCgxLCA5OCUsIDYyJSk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICNtb2JpbGUtbG9nbzo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgfVxuXG4gICNtb3ZpZS1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDE1MHB4KSk7XG5cbiAgICAjbW92aWUtY2FyZCAge1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNtb3ZpZS1pbmZvIHtcbiAgICAgaDEge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICB9XG5cbiAgICAgcCB7XG4gICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICB9XG4gIH1cblxuICAjaWZyYW1lLWNvbnRhaW5lciB7XG5cbiAgICBidXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIGlmcmFtZSB7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFOzs7OztHQUtDO0VBQ0Qsd0VBQXdFO0VBQ3hFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTs7RUFFZjtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU87SUFDUCw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCOztJQUVoQjtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxTQUFTO01BQ1QsMkJBQTJCO01BQzNCLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsUUFBUTtNQUNSLDRCQUE0QjtJQUM5Qjs7SUFFQTtNQUNFLFdBQVc7SUFDYjtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7O0lBRVQ7TUFDRSxZQUFZO01BQ1osWUFBWTtJQUNkOztJQUVB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bUJBQW1CO01BQ25CLFlBQVk7TUFDWixZQUFZOztNQUVaO1FBQ0UsV0FBVztNQUNiOztNQUVBO1FBQ0UsWUFBWTtRQUNaLGdCQUFnQjtNQUNsQjtJQUNGO0VBQ0Y7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZSxFQUFFLGlDQUFpQztJQUNsRCxPQUFPO0lBQ1AsU0FBUztJQUNULHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsT0FBTztJQUNQLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDZEQUE2RDs7SUFFN0Q7O01BRUU7UUFDRSxXQUFXO1FBQ1gsWUFBWTtNQUNkO0lBQ0Y7RUFDRjs7RUFFQTtLQUNHO01BQ0MsZUFBZTtLQUNoQjs7S0FFQTtNQUNDLGdCQUFnQjtLQUNqQjtFQUNIOztFQUVBOztJQUVFO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGFBQWE7SUFDZjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDEzNWRlZyxcXG4gICAgcmdiKDAsIDIwOCwgMjU1KSxcXG4gICAgcmdiKDg5LCAyMTksIDI0OCksXFxuICAgIHJnYigxNzQsIDIzNCwgMjQ4KVxcbiAgKTtcXG4gIC0tZGFyay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzUgMzUgMzUpLCByZ2IoNTQgNTQgNTQpKTtcXG4gIC0tZHJvcHNoYWRvdzogMXB4IDFweCAycHggcmdiYSgxNjIsIDE2MiwgMTYyLCAwLjUxMSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2FwcCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG5cXG4gICNsb2dvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxuICAgIGNvbG9yOiBoc2woMSwgOTglLCA2MiUpO1xcbiAgfVxcblxcbiAgI2xvZ286OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgbGkge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIGxpOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMnMgbGluZWFyO1xcbiAgICB9XFxuXFxuICAgIGxpOmhvdmVyOjphZnRlciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gICNpbnB1dC13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMiU7XFxuXFxuICAgIGlucHV0IHtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICB9XFxufVxcblxcbiNoYW1idXJnZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuI21vYmlsZS1sb2dvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwcmV2aW91cy1wYWdlLWJ0biwgI25leHQtcGFnZS1idG4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmY5MjI1YzE7XFxuICBjb2xvcjogI2ZjZWZlYTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGxpbmVhcjtcXG59XFxuXFxuI3ByZXZpb3VzLXBhZ2UtYnRuOmhvdmVyLCAjbmV4dC1wYWdlLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogaHNsKDAsIDEwMCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbiNwcmV2aW91cy1wYWdlLWJ0biB7XFxuICBsZWZ0OiAyJTtcXG59XFxuXFxuI25leHQtcGFnZS1idG4ge1xcbiAgcmlnaHQ6IDIlO1xcbn1cXG5cXG4jcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiAjMmUyZTJlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbW92aWUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAzMDBweCkpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gNHJlbSAxcmVtO1xcblxcbiAgI21vdmllLWNhcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xcblxcbiAgICAjbW92aWUtaW5mbyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MTQpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXFxuICAgICAgb3ZlcmZsb3cteTogYXV0bzsgLyogRW5hYmxlIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAjbW92aWUtaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBXZWJLaXQgYnJvd3NlcnMgKi9cXG4gICAgfVxcbiAgICBcXG5cXG4gICAgaDEge1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuODkxKSxcXG4gICAgICAgIC0xcHggLTFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4Mik7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogOTk5O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB9XFxuXFxuICAgICN3YXRjaC1idXR0b24ge1xcbiAgICAgIHRvcDogNSU7XFxuICAgICAgcmlnaHQ6IDUlO1xcbiAgICB9XFxuXFxuICAgICNhZGQtdG8tbGlzdC1idXR0b24ge1xcbiAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgcmlnaHQ6IDUlO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbiAgfVxcblxcbiAgI21vdmllLWNhcmQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgfVxcblxcbiAgI21vdmllLWNhcmQ6aG92ZXIgaW1nIHtcXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XFxuICB9XFxuXFxuICAjbW92aWUtY2FyZDpob3ZlciAjbW92aWUtaW5mbyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgcCB7XFxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB9XFxuICB9XFxufVxcblxcbiNpZnJhbWUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxJTtcXG4gICAgcmlnaHQ6IDIlO1xcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBsaW5lYXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgc2NhbGUoMS4xKTtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG5cXG4gICNwb3N0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuaWZyYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI5LCAyOSwgMjksIDAuODYzKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgbGluZWFyO1xcbiAgXFxuICAgICNsb2dvIHtcXG4gICAgICBtYXJnaW46IG5vbmU7XFxuICAgIH1cXG4gIFxcbiAgICB1bCB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICBsaSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICBcXG4gICAgI2lucHV0LXdyYXBwZXIge1xcbiAgICAgIHBvc2l0aW9uOiB1bnNldDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgbWFyZ2luOiAyMHB4O1xcblxcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIH1cXG4gIFxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgaGVhZGVyLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG5cXG4gICNoYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBDaGFuZ2UgJ2ZpeGVkJyB0byAnYWJzb2x1dGUnICovXFxuICAgIHRvcDogMyU7XFxuICAgIHJpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiA5OTk5OTtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbG9nbyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XFxuICAgIGNvbG9yOiBoc2woMSwgOTglLCA2MiUpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgI21vYmlsZS1sb2dvOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgfVxcblxcbiAgI21vdmllLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDE1MHB4KSk7XFxuXFxuICAgICNtb3ZpZS1jYXJkICB7XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgI21vdmllLWluZm8ge1xcbiAgICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgIH1cXG5cXG4gICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgICB9XFxuICB9XFxuXFxuICAjaWZyYW1lLWNvbnRhaW5lciB7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIGlmcmFtZSB7XFxuICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBkaXNwbGF5Tm93UGxheWluZ01vdmllcyBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlOb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgZGlzcGxheVBvcHVsYXJTZXJpZXMgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5UG9wdWxhclNlcmllcy5qc1wiO1xuaW1wb3J0IHNlYXJjaE1vdmllIGZyb20gXCIuL21vZHVsZXMvc2VhcmNoTW92aWUuanNcIjtcbmltcG9ydCBzZWFyY2hTZXJpZXMgZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2hTZXJpZXMuanNcIjtcbmltcG9ydCB7IGdldE5vd1BsYXlpbmdNb3ZpZXMgfSBmcm9tIFwiLi9tb2R1bGVzL2dldE5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcbmltcG9ydCB7IHJlc2V0Q3VycmVudFBhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlDdXJyZW50UGFnZS5qc1wiO1xuXG5jb25zdCBzZWFyY2hNb3ZpZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtcXVlcnlcIik7XG5jb25zdCBzZWFyY2hNb3ZpZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLW1vdmllLWJ0blwiKTtcbmNvbnN0IHNlYXJjaFNlcmllc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXNlcmllcy1idG5cIik7XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ0blwiKTtcbmNvbnN0IHR2U2VyaWVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0di1zZXJpZXMtYnRuXCIpO1xuY29uc3Qgbm93UGxheWluZ01vdmllc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1bGFyLW1vdmllcy1idG4nKVxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJcIik7XG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcblxuLy8gTkFWSUdBVElPTiBFVkVOVExJU1RFTkVSU1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldEN1cnJlbnRQYWdlKCk7XG4gIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICBnZXROb3dQbGF5aW5nTW92aWVzKCk7XG4gIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG59KTtcblxubm93UGxheWluZ01vdmllc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKTtcbnR2U2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UG9wdWxhclNlcmllcyk7XG5zZWFyY2hTZXJpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaFNlcmllcyk7IC8vIGV2ZW50bGlzdGVuZXIgZm9yIHNlYXJjaGluZyBxdWVyeSBmb3IgVFYgU2VyaWVzXG5cbi8vIEhBTUJVUkdFUiBFVkVOVExJU1RFTkVSXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgLy8gZXZlbnRsaXN0ZW5lciBmb3IgdG9nZ2xpbmcgdGhlIGhhbWJ1cmdlciBtZW51XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFNFQVJDSCBRVUVSWSBFVkVOVExJU1RFTkVSU1xuc2VhcmNoU2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChzZWFyY2hNb3ZpZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgVFYgc2hvdyB0aXRsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hTZXJpZXMoKTtcbiAgfVxufSk7XG5cbnNlYXJjaE1vdmllQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChzZWFyY2hNb3ZpZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgbW92aWUgdGl0bGVcIik7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoTW92aWUoKTtcbiAgfVxufSk7XG5cbmRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7IC8vaW5pdGlsaXplIHRoZSBsaXN0IG9mIG5vdyBwbGF5aW5nIG1vdmllcyBvbiBwYWdlIGxvYWRcblxuZXhwb3J0IHsgc2VhcmNoTW92aWVJbnB1dCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9NeUxpc3QoeyBtb3ZpZSwgdGl0bGUsIHR5cGUgfSkge1xuICAgIC8vIFJldHJpZXZlIGV4aXN0aW5nIGxpc3QgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIGluaXRpYWxpemUgYW4gZW1wdHkgYXJyYXlcbiAgICBjb25zdCBteUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlMaXN0XCIpKSB8fCBbXTtcblxuICAgIC8vIENoZWNrIGlmIG1vdmllSWQgaXMgYWxyZWFkeSBpbiB0aGUgbGlzdFxuICAgIGlmICghbXlMaXN0LmluY2x1ZGVzKG1vdmllKSkge1xuICAgICAgICAvLyBJZiBub3QsIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgICBteUxpc3QucHVzaCh7dGl0bGU6IHRpdGxlLCBpZDogbW92aWUuaWQsIHBvc3RlcjogbW92aWUucG9zdGVyX3BhdGgsIHR5cGU6IHR5cGV9KTtcblxuICAgICAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIGxpc3QgYmFjayB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG15TGlzdCkpO1xuICAgICAgICBcbiAgICAgICAgYWxlcnQoXCJNb3ZpZSBhZGRlZCB0byB5b3VyIGxpc3QhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiVGhpcyBtb3ZpZSBpcyBhbHJlYWR5IGluIHlvdXIgbGlzdCFcIik7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5TXlMaXN0KG1vdmllcykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG15TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUxpc3RcIikpO1xuXG4gICAgICAgIG15TGlzdC5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdClcbiAgICAgICAgfSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59XG5cbmRpc3BsYXlNeUxpc3QoKTsiLCJsZXQgY3VycmVudFBhZ2UgPSAxO1xuY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG5wYWdlLnRleHRDb250ZW50ID0gYFBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgYDtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XG4gIHJldHVybiBjdXJyZW50UGFnZTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50UGFnZSgpIHtcbiAgY3VycmVudFBhZ2UrKztcbn1cblxuZnVuY3Rpb24gZGVjcmVtZW50UGFnZSgpIHtcbiAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xuICAgIGN1cnJlbnRQYWdlLS07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRDdXJyZW50UGFnZSgpIHtcbiAgICBjdXJyZW50UGFnZSA9IDE7XG4gIH1cblxuZXhwb3J0IHsgY3VycmVudFBhZ2UsIGdldEN1cnJlbnRQYWdlLCBpbmNyZW1lbnRQYWdlLCBkZWNyZW1lbnRQYWdlLCByZXNldEN1cnJlbnRQYWdlIH07XG4iLCJpbXBvcnQgd2F0Y2hNb3ZpZSBmcm9tICcuL3dhdGNoTW92aWUuanMnO1xuaW1wb3J0IGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzIGZyb20gJy4vZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMuanMnO1xuaW1wb3J0IHsgaW5jcmVtZW50UGFnZSwgZGVjcmVtZW50UGFnZSB9IGZyb20gJy4vZGlzcGxheUN1cnJlbnRQYWdlLmpzJztcbmltcG9ydCBhZGRUb015TGlzdCBmcm9tICcuL2FkZFRvTXlMaXN0LmpzJztcblxuLy8gdGhpcyBpcyB0aGUgbWFpbiBmdW5jdGlvbiBpbiBkaXNwbGF5aW5nIHRoZSBtb3ZpZXMgbWF5IGl0IGJlIHRoZSBcbi8vICdQb3B1bGFyJyBvciAnU2VhcmNoZWQnIG1vdmllcyBieSB1c2VyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5TW92aWVzKG1vdmllcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNlSW1nVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwL1wiO1xuICBcbiAgICAgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBjb25zdCBwcmV2aW91c1BhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IG5leHRQYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgIG1vdmllQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtY29udGFpbmVyJyk7XG4gICAgICBwcmV2aW91c1BhZ2VCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPidcbiAgICAgIG5leHRQYWdlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JztcbiAgICAgIHByZXZpb3VzUGFnZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXZpb3VzLXBhZ2UtYnRuJylcbiAgICAgIG5leHRQYWdlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dC1wYWdlLWJ0bicpXG5cbiAgICAgIG5leHRQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGluY3JlbWVudFBhZ2UoKTtcbiAgICAgICAgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMoKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHByZXZpb3VzUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZWNyZW1lbnRQYWdlKCk7XG4gICAgICAgIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG4gICAgICB9KTtcblxuICAgICAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vdmllQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHdhdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgYWRkVG9MaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG1vdmllSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBjb25zdCBtb3ZpZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBtb3ZpZU92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBtb3ZpZVJlbGVhc2VEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBtb3ZpZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1pbmZvJyk7XG4gICAgICAgIG1vdmllSW5mby5pbm5lckhUTUwgPSBgPGgxPiR7bW92aWUudGl0bGV9PC9oMT5gO1xuICAgICAgICBtb3ZpZU92ZXJ2aWV3LnRleHRDb250ZW50ID0gYCR7bW92aWUub3ZlcnZpZXd9YDtcbiAgICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYDxiPlJhdGluZzwvYj4gOiAke01hdGguZmxvb3IobW92aWUudm90ZV9hdmVyYWdlKX0gLyAxMGA7XG4gICAgICAgIG1vdmllUmVsZWFzZURhdGUuaW5uZXJIVE1MID0gYDxiPlJlbGVhc2VkPC9iPiA6ICR7bW92aWUucmVsZWFzZV9kYXRlfWA7XG4gICAgICAgIG1vdmllSW1hZ2Uuc3JjID0gYCR7YmFzZUltZ1VSTH0ke21vdmllLnBvc3Rlcl9wYXRofWA7XG4gICAgICAgIG1vdmllQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWNhcmQnKVxuICAgICAgICB3YXRjaEJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbGF5XCI+PC9pPmA7XG4gICAgICAgIHdhdGNoQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2F0Y2gtYnV0dG9uJyk7XG4gICAgICAgIGFkZFRvTGlzdEJ0bi50ZXh0Q29udGVudCA9ICcrJ1xuICAgICAgICBhZGRUb0xpc3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdG8tbGlzdC1idXR0b24nKTtcbiAgXG4gICAgICAgIHdhdGNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgYXBwLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgd2F0Y2hNb3ZpZShtb3ZpZS50aXRsZSwgbW92aWUuaWQsIG1vdmllLmJhY2tkcm9wX3BhdGgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhZGRUb0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBtb3ZpZS50aXRsZSA/IG1vdmllLnRpdGxlIDogbW92aWUubmFtZTsgLy9jaGVja3MgaWYgdGhlIGVsZW1lbnQgaXMgYSBcIm1vdmllXCIgb3IgXCJ0dlwiXG4gICAgICAgICAgYWRkVG9NeUxpc3Qoe21vdmllLCB0aXRsZTogaXRlbVRpdGxlLCB0eXBlOiBcIm1vdmllXCJ9KTsgXG4gICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG1vdmllSW5mby5hcHBlbmQobW92aWVPdmVydmlldywgbW92aWVSZWxlYXNlRGF0ZSwgbW92aWVSYXRpbmcpO1xuICAgICAgICBtb3ZpZUNhcmQuYXBwZW5kKG1vdmllSW1hZ2UsIHdhdGNoQnRuLCBhZGRUb0xpc3RCdG4sIG1vdmllSW5mbyk7XG4gICAgICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZChtb3ZpZUNhcmQsIG5leHRQYWdlQnRuLCBwcmV2aW91c1BhZ2VCdG4pXG4gICAgICAgIGFwcC5hcHBlbmQobW92aWVDb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9IiwiaW1wb3J0IHsgZ2V0Tm93UGxheWluZ01vdmllcyB9IGZyb20gXCIuL2dldE5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gXCIuL2Rpc3BsYXlNb3ZpZXMuanNcIjtcblxuLy8gdGhpcyB3aWxsIGRpc3BsYXkgdGhlIGN1cnJlbnQgcG9wdWxhciBtb3ZpZXMgb24gcGFnZSBsb2FkIGFuZCBpcyBzZXQgYXNcbi8vIGRlZmF1bHQgbGFuZGluZyBwYWdlXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBub3dQbGF5aW5nTW92aWVzID0gYXdhaXQgZ2V0Tm93UGxheWluZ01vdmllcygpO1xuICAgIGRpc3BsYXlNb3ZpZXMobm93UGxheWluZ01vdmllcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRQb3B1bGFyU2VyaWVzIGZyb20gXCIuL2dldFBvcHVsYXJTZXJpZXMuanNcIjtcbmltcG9ydCBkaXNwbGF5U2VyaWVzIGZyb20gXCIuL2Rpc3BsYXlTZXJpZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheVBvcHVsYXJTZXJpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5vd1BsYXlpbmdNb3ZpZXMgPSBhd2FpdCBnZXRQb3B1bGFyU2VyaWVzKCk7XG4gICAgICBkaXNwbGF5U2VyaWVzKG5vd1BsYXlpbmdNb3ZpZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgd2F0Y2hTZXJpZXMgZnJvbSAnLi93YXRjaFNlcmllcy5qcyc7XG5pbXBvcnQgZGlzcGxheVBvcHVsYXJTZXJpZXMgZnJvbSAnLi9kaXNwbGF5UG9wdWxhclNlcmllcy5qcyc7XG5pbXBvcnQgeyBpbmNyZW1lbnRQYWdlLCBkZWNyZW1lbnRQYWdlIH0gZnJvbSAnLi9kaXNwbGF5Q3VycmVudFBhZ2UuanMnO1xuaW1wb3J0IGFkZFRvTXlMaXN0IGZyb20gJy4vYWRkVG9NeUxpc3QuanMnO1xuXG4vLyBpIGp1c3QgY29waWVkIHRoZSBlbnRpcmUgZnVuY3Rpb24gZnJvbSBkaXNwbGF5TW92aWVzIGJlY2F1c2Vcbi8vIFRWIHNlcmllcyBoYXMgZGlmZmVyZW50IHByb3BlcnR5IGZvciB0aGUgdGl0bGUsIGluc3RlYWQgaXQgdXNlcyAnbmFtZScgYW5kXG4vLyBpIGRvbid0IGtub3cgaG93IHRvIGNoYW5nZSB0aGUgbW92aWUudGl0bGUgdG8gbW92aWUubmFtZSB3aGVuIHF1ZXJ5aW5nIGZvclxuLy8gVFYgc2VyaWVzIDopXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5U2VyaWVzKG1vdmllcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNlSW1nVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwL1wiO1xuICBcbiAgICAgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBjb25zdCBwcmV2aW91c1BhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IG5leHRQYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgIG1vdmllQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtY29udGFpbmVyJyk7XG4gICAgICBwcmV2aW91c1BhZ2VCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPidcbiAgICAgIG5leHRQYWdlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JztcbiAgICAgIHByZXZpb3VzUGFnZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXZpb3VzLXBhZ2UtYnRuJylcbiAgICAgIG5leHRQYWdlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dC1wYWdlLWJ0bicpXG5cbiAgICAgIG5leHRQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGluY3JlbWVudFBhZ2UoKTtcbiAgICAgICAgZGlzcGxheVBvcHVsYXJTZXJpZXMoKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHByZXZpb3VzUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZWNyZW1lbnRQYWdlKCk7XG4gICAgICAgIGRpc3BsYXlQb3B1bGFyU2VyaWVzKCk7XG4gICAgICB9KTtcblxuICAgICAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vdmllQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHdhdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgYWRkVG9MaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG1vdmllSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBjb25zdCBtb3ZpZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBtb3ZpZU92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBtb3ZpZVJlbGVhc2VEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBtb3ZpZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1pbmZvJyk7XG4gICAgICAgIG1vdmllSW5mby5pbm5lckhUTUwgPSBgPGgxPiR7bW92aWUubmFtZX08L2gxPmA7XG4gICAgICAgIG1vdmllT3ZlcnZpZXcudGV4dENvbnRlbnQgPSBgJHttb3ZpZS5vdmVydmlld31gO1xuICAgICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSBgPGI+UmF0aW5nPC9iPiA6ICR7TWF0aC5mbG9vcihtb3ZpZS52b3RlX2F2ZXJhZ2UpfSAvIDEwYDtcbiAgICAgICAgbW92aWVSZWxlYXNlRGF0ZS5pbm5lckhUTUwgPSBgPGI+UmVsZWFzZWQ8L2I+IDogJHttb3ZpZS5maXJzdF9haXJfZGF0ZX1gO1xuICAgICAgICBtb3ZpZUltYWdlLnNyYyA9IGAke2Jhc2VJbWdVUkx9JHttb3ZpZS5wb3N0ZXJfcGF0aH1gO1xuICAgICAgICBtb3ZpZUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1jYXJkJylcbiAgICAgICAgd2F0Y2hCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGxheVwiPjwvaT5gO1xuICAgICAgICB3YXRjaEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dhdGNoLWJ1dHRvbicpO1xuICAgICAgICBhZGRUb0xpc3RCdG4udGV4dENvbnRlbnQgPSAnKydcbiAgICAgICAgYWRkVG9MaXN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRvLWxpc3QtYnV0dG9uJyk7XG4gICAgICAgIFxuICAgICAgICB3YXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIHdhdGNoU2VyaWVzKG1vdmllLm5hbWUsIG1vdmllLmlkLCBtb3ZpZS5iYWNrZHJvcF9wYXRoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkVG9MaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gbW92aWUudGl0bGUgPyBtb3ZpZS50aXRsZSA6IG1vdmllLm5hbWU7IC8vY2hlY2tzIGlmIHRoZSBlbGVtZW50IGlzIGEgXCJtb3ZpZVwiIG9yIFwidHZcIlxuICAgICAgICAgIGFkZFRvTXlMaXN0KHttb3ZpZSwgdGl0bGU6IGl0ZW1UaXRsZSwgdHlwZTogXCJ0dlwifSk7IFxuICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtb3ZpZUluZm8uYXBwZW5kKG1vdmllT3ZlcnZpZXcsIG1vdmllUmVsZWFzZURhdGUsIG1vdmllUmF0aW5nKTtcbiAgICAgICAgbW92aWVDYXJkLmFwcGVuZChtb3ZpZUltYWdlLCB3YXRjaEJ0biwgYWRkVG9MaXN0QnRuLCBtb3ZpZUluZm8pO1xuICAgICAgICBtb3ZpZUNvbnRhaW5lci5hcHBlbmQobW92aWVDYXJkLCBuZXh0UGFnZUJ0biwgcHJldmlvdXNQYWdlQnRuKVxuICAgICAgICBhcHAuYXBwZW5kKG1vdmllQ29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSIsImltcG9ydCB7IGdldEN1cnJlbnRQYWdlIH0gZnJvbSBcIi4vZGlzcGxheUN1cnJlbnRQYWdlLmpzXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIG1ldGhvZDogXCJHRVRcIixcbiAgaGVhZGVyczoge1xuICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgQXV0aG9yaXphdGlvbjpcbiAgICAgIFwiQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SmhkV1FpT2lKbU9Ua3dNR0l3Wm1WaFpqWmpaalZrTWprME1EYzFZakF4TkRSa01tWmlZU0lzSW5OMVlpSTZJalkyTVRBNE5EUTFOV0l6TnpCa01ERTNNRFl6TXpGak5TSXNJbk5qYjNCbGN5STZXeUpoY0dsZmNtVmhaQ0pkTENKMlpYSnphVzl1SWpveGZRLnIyVjhPcnU5eGFBdTRKTFFQWndfbnF2X2xWVUx3YS1aUGZxOHJ1UUh3dmdcIixcbiAgfSxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE5vd1BsYXlpbmdNb3ZpZXMoKSB7XG4gIGxldCBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRQYWdlKCk7XG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VcIik7XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9ub3dfcGxheWluZz9sYW5ndWFnZT1lbi1VUyZwYWdlPSR7Y3VycmVudFBhZ2V9YCxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBwYWdlLnRleHRDb250ZW50ID0gYFBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgJHtkYXRhLnRvdGFsX3BhZ2VzfWA7XG4gICAgcmV0dXJuIGRhdGEucmVzdWx0cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gW107IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpbiBjYXNlIG9mIGFuIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IHsgb3B0aW9ucywgZ2V0Tm93UGxheWluZ01vdmllcyB9O1xuIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuL2dldE5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRQYWdlIH0gZnJvbSBcIi4vZGlzcGxheUN1cnJlbnRQYWdlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFBvcHVsYXJTZXJpZXMoKSB7IC8vZmV0Y2ggbm93IHBsYXlpbmcgbW92aWVzXG4gIGxldCBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRQYWdlKCk7XG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VcIik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHYvdG9wX3JhdGVkP2xhbmd1YWdlPWVuLVVTJnBhZ2U9JHtjdXJyZW50UGFnZX1gLFxuICAgICAgICBvcHRpb25zXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHBhZ2UudGV4dENvbnRlbnQgPSBgUGFnZSAke2N1cnJlbnRQYWdlfSBvZiAke2RhdGEudG90YWxfcGFnZXN9YDtcbiAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0cztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpbiBjYXNlIG9mIGFuIGVycm9yXG4gICAgICB9XG4gICAgfSIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi9nZXROb3dQbGF5aW5nTW92aWVzXCI7XG5pbXBvcnQgeyBzZWFyY2hNb3ZpZUlucHV0IH0gZnJvbSBcIi4uL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlzcGxheU1vdmllcyBmcm9tIFwiLi9kaXNwbGF5TW92aWVzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaE1vdmllKCkge1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc2VhcmNoTW92aWVJbnB1dC52YWx1ZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP3F1ZXJ5PSR7c2VhcmNoUXVlcnl9JmluY2x1ZGVfYWR1bHQ9ZmFsc2UmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xYCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0cylcbiAgICAgIGRpc3BsYXlNb3ZpZXMoc2VhcmNoUmVzdWx0cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSIsImltcG9ydCB7IHNlYXJjaE1vdmllSW5wdXQgfSBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4vZ2V0Tm93UGxheWluZ01vdmllcy5qc1wiO1xuaW1wb3J0IGRpc3BsYXlTZXJpZXMgZnJvbSAnLi9kaXNwbGF5U2VyaWVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoU2VyaWVzKCkge1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc2VhcmNoTW92aWVJbnB1dC52YWx1ZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL3R2P3F1ZXJ5PSR7c2VhcmNoUXVlcnl9JmluY2x1ZGVfYWR1bHQ9ZmFsc2UmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xYCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0cylcbiAgICAgIGRpc3BsYXlTZXJpZXMoc2VhcmNoUmVzdWx0cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSIsImltcG9ydCBkaXNwbGF5Tm93UGxheWluZ01vdmllcyBmcm9tIFwiLi9kaXNwbGF5Tm93UGxheWluZ01vdmllcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB3YXRjaE1vdmllKG1vdmllVGl0bGUsIG1vdmllSUQsIHBvc3RlclBhdGgpIHtcbiAgY29uc3QgdGl0bGVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VcIik7XG4gIHRpdGxlSGVhZGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGJhc2VJbWdVUkwgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsL1wiO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgaWZyYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHBvc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgcG9zdGVyLnNyYyA9IGAke2Jhc2VJbWdVUkx9JHtwb3N0ZXJQYXRofWA7XG4gICAgcG9zdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9zdGVyJylcbiAgICBpZnJhbWVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdpZnJhbWUtY29udGFpbmVyJylcbiAgICBiYWNrQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXJpZ2h0LWZyb20tYnJhY2tldFwiPjwvaT4nO1xuICAgIGlmcmFtZS5zcmMgPSBgaHR0cHM6Ly8yZW1iZWQub3JnL2VtYmVkL21vdmllLyR7bW92aWVJRH1gO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwgXCJ0cnVlXCIpO1xuXG4gICAgdGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBtb3ZpZVRpdGxlO1xuICAgIGlmcmFtZUNvbnRhaW5lci5hcHBlbmQoaWZyYW1lLCBiYWNrQnRuLCBwb3N0ZXIpO1xuICAgIGFwcC5hcHBlbmQoaWZyYW1lQ29udGFpbmVyKTtcblxuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMoKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufVxuIiwiaW1wb3J0IGRpc3BsYXlQb3B1bGFyU2VyaWVzIGZyb20gJy4vZGlzcGxheVBvcHVsYXJTZXJpZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB3YXRjaFNlcmllcyhtb3ZpZVRpdGxlLCBtb3ZpZUlELCBwb3N0ZXJQYXRoKSB7XG4gIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuICB0aXRsZUhlYWRlci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBiYXNlSW1nVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIjtcblxuICB0cnkge1xuICAgIGNvbnN0IGlmcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwb3N0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHBvc3Rlci5zcmMgPSBgJHtiYXNlSW1nVVJMfSR7cG9zdGVyUGF0aH1gO1xuICAgIHBvc3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bvc3RlcicpXG4gICAgaWZyYW1lQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaWZyYW1lLWNvbnRhaW5lcicpXG4gICAgYmFja0J0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1yaWdodC1mcm9tLWJyYWNrZXRcIj48L2k+JztcbiAgICBpZnJhbWUuc3JjID0gYGh0dHBzOi8vdmlkc3JjLnh5ei9lbWJlZC90di8ke21vdmllSUR9YDtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIFwidHJ1ZVwiKTtcblxuICAgIHRpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gbW92aWVUaXRsZTtcbiAgICBpZnJhbWVDb250YWluZXIuYXBwZW5kKGlmcmFtZSwgYmFja0J0biwgcG9zdGVyKTtcbiAgICBhcHAuYXBwZW5kKGlmcmFtZUNvbnRhaW5lcik7XG4gIFxuICAgICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZGlzcGxheVBvcHVsYXJTZXJpZXMoKTsgXG4gICAgICB9KTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=