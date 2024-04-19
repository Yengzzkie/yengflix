/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/intro.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/intro.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:700,900);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

#modal {
  position: fixed;
  left: 50%;
  background: radial-gradient(#fff, #aaa);
  background-position: center;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  /* padding-top: 40vh; */
  transform: translate(-50%, 0%) scale(1.3);
}

.txt {
  position: absolute;
  top: 50%;
  left: 50%;
  /* text-align: center; */
  font-family: "Roboto";
  font-size: 12vmin;
  font-weight: 700;
  color: #e90418;
  animation: netflix_style 3.5s;
  border: none;
  white-space: nowrap;
  text-shadow: 10px 10px 20px #aaa;
  transform: translate(-50%, -50%);
}

@keyframes netflix_style {
  0% {
    text-shadow: 30px 30px 5px #aaa;
    color: #f3f3f3;
    transform: translate(-50%, -50%) scale(1.4, 1.4);
  }
  10% {
    text-shadow: 10px 15px 5px #aaa;
    color: #f3f3f3;
    transform: translate(-50%, -50%) scale(1.4, 1.4);
  }
  15% {
    color: #f3f3f3;
  }
  20% {
    color: #e90418;
    text-shadow: none;
    transform: translate(-50%, -50%) scale(1.1, 1.1);
  }
  75% {
    opacity: 1;
  }
  80% {
    opacity: 0;
    color: #e90418;
    transform: translate(-50%, -50%) scale(0.85, 0.9);
  }

  100% {
    background: transparent;
    opacity: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/intro.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;EACZ;;AAEF;EACE,eAAe;EACf,SAAS;EACT,uCAAuC;EACvC,2BAA2B;EAC3B,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,wBAAwB;EACxB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,gCAAgC;EAChC,gCAAgC;AAClC;;AAEA;EACE;IACE,+BAA+B;IAC/B,cAAc;IACd,gDAAgD;EAClD;EACA;IACE,+BAA+B;IAC/B,cAAc;IACd,gDAAgD;EAClD;EACA;IACE,cAAc;EAChB;EACA;IACE,cAAc;IACd,iBAAiB;IACjB,gDAAgD;EAClD;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV,cAAc;IACd,iDAAiD;EACnD;;EAEA;IACE,uBAAuB;IACvB,UAAU;EACZ;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Roboto:700,900\");\n\nbody {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n#modal {\n  position: fixed;\n  left: 50%;\n  background: radial-gradient(#fff, #aaa);\n  background-position: center;\n  overflow: hidden;\n  height: 100vh;\n  width: 100vw;\n  /* padding-top: 40vh; */\n  transform: translate(-50%, 0%) scale(1.3);\n}\n\n.txt {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  /* text-align: center; */\n  font-family: \"Roboto\";\n  font-size: 12vmin;\n  font-weight: 700;\n  color: #e90418;\n  animation: netflix_style 3.5s;\n  border: none;\n  white-space: nowrap;\n  text-shadow: 10px 10px 20px #aaa;\n  transform: translate(-50%, -50%);\n}\n\n@keyframes netflix_style {\n  0% {\n    text-shadow: 30px 30px 5px #aaa;\n    color: #f3f3f3;\n    transform: translate(-50%, -50%) scale(1.4, 1.4);\n  }\n  10% {\n    text-shadow: 10px 15px 5px #aaa;\n    color: #f3f3f3;\n    transform: translate(-50%, -50%) scale(1.4, 1.4);\n  }\n  15% {\n    color: #f3f3f3;\n  }\n  20% {\n    color: #e90418;\n    text-shadow: none;\n    transform: translate(-50%, -50%) scale(1.1, 1.1);\n  }\n  75% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 0;\n    color: #e90418;\n    transform: translate(-50%, -50%) scale(0.85, 0.9);\n  }\n\n  100% {\n    background: transparent;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  --red-background: hsl(0, 100%, 50%);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: auto;
}

body {
  font-family: "Poppins", sans-serif, Arial, Helvetica;
  font-weight: 100;
  font-style: normal;
  height: 100%;
  min-height: 100vh;
  width: 100%;
}

#app {
  background: var(--dark-background);
  height: 100%;
  min-height: 100vh;

  h2 {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: 100%;
    margin: auto;
  }
}

header {
  display: flex;
  align-items: center;
  background: rgb(29 29 29);
  font-weight: 300;
  height: 100px;
  padding: 0 2rem;

  #logo {
    position: relative;
    letter-spacing: 1.2px;
    color: var(--red-background);
  }

  #logo::after {
    position: absolute;
    background: rgb(29 29 29);
    content: "";
    bottom: 0;
    left: 0;
    transform: translateY(-100%);
    border-radius: 100%;
    width: 100%;
    height: 15%;
  }

  nav {
    width: 100%;
    margin-left: 10px;
    padding: 0 1rem;
  }

  ul {
    display: flex;
    list-style: none;

    #search {
      display: none;
    }

    li {
      position: relative;
      color: #fff;
      margin-right: 1rem;
      cursor: pointer;
    }

    li:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      height: 1px;
      width: 0;
      transition: width 0.2s linear;
    }

    li:hover::after {
      width: 100%;
    }
  }

  #input-wrapper {
    position: absolute;
    display: flex;
    right: 2%;

    div {
      position: relative;
      height: auto;
      width: auto;

      input {
        border: none;
        border-radius: 5px;
        width: 200px;
        padding: 5px;
        margin-right: 5px;
      }

      input:not(:placeholder-shown):valid ~ span {
        visibility: visible;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        position: absolute;
        background: rgba(158, 158, 158, 0.556);
        color: #fff;
        font-size: 0.5rem;
        text-align: center;
        right: 8%;
        top: 50%;
        border-radius: 50%;
        height: 15px;
        width: 15px;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }

    button {
      border: none;
      border-radius: 5px;
      padding: 5px;
      width: 150px;
      margin-right: 5px;
      cursor: pointer;
    }

    button:hover,
    button:active {
      color: #fff;
      background: var(--red-background);
    }
  }
}

#hamburger {
  display: none;
}

#mobile-logo {
  display: none;
}

#previous-page-btn,
#next-page-btn {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: #c2c2c2aa;
  color: #fff;
  font-size: 2rem;
  border: none;
  padding: 10px 8px;
  z-index: 9999;
  cursor: pointer;
  transition: all 0.1s linear;
}

#previous-page-btn:hover,
#next-page-btn:hover {
  background: #d6d6d6c8;
  color: var(--red-background);
  transform: translateY(-50%);
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
    border: 3px solid #fff;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.8s ease;

    #movie-info {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.614);
      color: #fff;
      width: 100%;
      padding: 20px 10px;
      overflow-x: hidden; /* Hide horizontal scrollbar */
      overflow-y: auto; /* Enable vertical scrollbar */
      transform: translateY(100%);
      transition: transform 0.8s ease;

      i {
        color: var(--red-background);
      }
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

    #button-wrapper {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 2%;
      right: 2%;
      z-index: 9999;

      button {
        background: orange;
        color: rgba(50, 50, 50, 0.881);
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: none;
        margin: 5px;
        box-shadow: 1px 1px 2px rgba(152, 152, 152, 0.891),
          -1px -1px 2px rgba(255, 255, 255, 0.882);
        transition: transform 0.5s ease;
        cursor: pointer;
        z-index: 999;
      }

      button:hover {
        color: var(--red-background);
        transform: scale(1.2);
      }

      #watch-button {
        top: 5%;
        right: 5%;
      }

      #add-to-list-button {
        top: 15%;
        right: 5%;
      }

      #delete-from-list {
        top: 15%;
        right: 5%;
      }
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
    width: auto;
    padding: 10px;
    transition: transform 0.3s linear;
    cursor: pointer;
  }

  .server-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 2%;
    right: 2%;

    button {
      position: unset;
      font-size: 1rem;
      margin-bottom: 5px;
    }
  }

  button:hover {
    transform: scale(1.1);
    color: var(--red-background);
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
    bottom: 0;
    left: 0;
    border-top: 3px solid #fff;
    border-radius: 5px 5px 0 0;
    height: 60px;
    width: 100vw;
    padding: 1rem 0;
    z-index: 99999;
    transition: height 0.3s linear;

    #logo {
      display: none;
      margin: none;
    }

    ul {
      justify-content: space-evenly;
      align-items: center;
      width: 100%;

      #search {
        display: flex;
      }

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;

        span {
          color: #bebebe;
          font-size: 0.7rem;
        }

        i:hover {
          color: var(--red-background);
        }
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
    background: linear-gradient(
      rgb(29, 29, 29),
      rgba(29, 29, 29, 0.95),
      rgba(29, 29, 29, 0.85),
      rgba(29, 29, 29, 0.65)
    );
    backdrop-filter: blur(5px);
    height: 250px;
  }

  #hamburger {
    display: block;
    position: fixed;
    top: 3%;
    right: 5%;
    background: transparent;
    color: white;
    font-size: 1.8rem;
    border: none;
    cursor: pointer;
    z-index: 999999;
  }

  #mobile-logo {
    position: relative;
    display: block;
    background: rgb(29 29 29);
    color: var(--red-background);
    padding: 1rem;
  }

  #mobile-logo::after {
    position: absolute;
    background: rgb(29 29 29);
    content: "";
    bottom: 0;
    left: 0;
    transform: translateY(-100%);
    border-radius: 100%;
    width: 100%;
    height: 15%;
  }

  #movie-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 150px));

    #movie-card {
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
      font-size: 0.8rem;

      i {
        color: var(--red-background);
      }
    }
  }

  #iframe-container {
    
    & .server-wrapper {
      button {
        font-size: .5rem;
      }
  
    }
    
    iframe {
      height: 300px;
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\n:root {\n  --light-background: linear-gradient(\n    135deg,\n    rgb(0, 208, 255),\n    rgb(89, 219, 248),\n    rgb(174, 234, 248)\n  );\n  --dark-background: linear-gradient(135deg, rgb(35 35 35), rgb(54 54 54));\n  --dropshadow: 1px 1px 2px rgba(162, 162, 162, 0.511);\n  --red-background: hsl(0, 100%, 50%);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: auto;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif, Arial, Helvetica;\n  font-weight: 100;\n  font-style: normal;\n  height: 100%;\n  min-height: 100vh;\n  width: 100%;\n}\n\n#app {\n  background: var(--dark-background);\n  height: 100%;\n  min-height: 100vh;\n\n  h2 {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #fff;\n    width: 100%;\n    margin: auto;\n  }\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  background: rgb(29 29 29);\n  font-weight: 300;\n  height: 100px;\n  padding: 0 2rem;\n\n  #logo {\n    position: relative;\n    letter-spacing: 1.2px;\n    color: var(--red-background);\n  }\n\n  #logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: \"\";\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  nav {\n    width: 100%;\n    margin-left: 10px;\n    padding: 0 1rem;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n\n    #search {\n      display: none;\n    }\n\n    li {\n      position: relative;\n      color: #fff;\n      margin-right: 1rem;\n      cursor: pointer;\n    }\n\n    li:after {\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      background: #fff;\n      height: 1px;\n      width: 0;\n      transition: width 0.2s linear;\n    }\n\n    li:hover::after {\n      width: 100%;\n    }\n  }\n\n  #input-wrapper {\n    position: absolute;\n    display: flex;\n    right: 2%;\n\n    div {\n      position: relative;\n      height: auto;\n      width: auto;\n\n      input {\n        border: none;\n        border-radius: 5px;\n        width: 200px;\n        padding: 5px;\n        margin-right: 5px;\n      }\n\n      input:not(:placeholder-shown):valid ~ span {\n        visibility: visible;\n      }\n\n      span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        visibility: hidden;\n        position: absolute;\n        background: rgba(158, 158, 158, 0.556);\n        color: #fff;\n        font-size: 0.5rem;\n        text-align: center;\n        right: 8%;\n        top: 50%;\n        border-radius: 50%;\n        height: 15px;\n        width: 15px;\n        transform: translateY(-50%);\n        cursor: pointer;\n      }\n    }\n\n    button {\n      border: none;\n      border-radius: 5px;\n      padding: 5px;\n      width: 150px;\n      margin-right: 5px;\n      cursor: pointer;\n    }\n\n    button:hover,\n    button:active {\n      color: #fff;\n      background: var(--red-background);\n    }\n  }\n}\n\n#hamburger {\n  display: none;\n}\n\n#mobile-logo {\n  display: none;\n}\n\n#previous-page-btn,\n#next-page-btn {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  background: #c2c2c2aa;\n  color: #fff;\n  font-size: 2rem;\n  border: none;\n  padding: 10px 8px;\n  z-index: 9999;\n  cursor: pointer;\n  transition: all 0.1s linear;\n}\n\n#previous-page-btn:hover,\n#next-page-btn:hover {\n  background: #d6d6d6c8;\n  color: var(--red-background);\n  transform: translateY(-50%);\n}\n\n#previous-page-btn {\n  left: 2%;\n}\n\n#next-page-btn {\n  right: 2%;\n}\n\n#page {\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n#movie-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));\n  justify-content: center;\n  gap: 20px;\n  height: 100%;\n  padding: 1rem 1rem 4rem 1rem;\n\n  #movie-card {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    border: 3px solid #fff;\n    border-radius: 15px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    transition: transform 0.8s ease;\n\n    #movie-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, 0.614);\n      color: #fff;\n      width: 100%;\n      padding: 20px 10px;\n      overflow-x: hidden; /* Hide horizontal scrollbar */\n      overflow-y: auto; /* Enable vertical scrollbar */\n      transform: translateY(100%);\n      transition: transform 0.8s ease;\n\n      i {\n        color: var(--red-background);\n      }\n    }\n\n    #movie-info::-webkit-scrollbar {\n      display: none; /* Hide scrollbar for WebKit browsers */\n    }\n\n    h1 {\n      color: #fff;\n      font-weight: 300;\n    }\n\n    img {\n      width: 100%;\n      transition: filter 0.5s ease;\n    }\n\n    #button-wrapper {\n      position: absolute;\n      display: flex;\n      flex-direction: column;\n      top: 2%;\n      right: 2%;\n      z-index: 9999;\n\n      button {\n        background: orange;\n        color: rgba(50, 50, 50, 0.881);\n        width: 35px;\n        height: 35px;\n        border-radius: 50%;\n        border: none;\n        margin: 5px;\n        box-shadow: 1px 1px 2px rgba(152, 152, 152, 0.891),\n          -1px -1px 2px rgba(255, 255, 255, 0.882);\n        transition: transform 0.5s ease;\n        cursor: pointer;\n        z-index: 999;\n      }\n\n      button:hover {\n        color: var(--red-background);\n        transform: scale(1.2);\n      }\n\n      #watch-button {\n        top: 5%;\n        right: 5%;\n      }\n\n      #add-to-list-button {\n        top: 15%;\n        right: 5%;\n      }\n\n      #delete-from-list {\n        top: 15%;\n        right: 5%;\n      }\n    }\n\n    p {\n      visibility: hidden;\n    }\n  }\n\n  #movie-card:hover {\n    transform: scale(1.03);\n  }\n\n  #movie-card:hover img {\n    filter: blur(3px);\n  }\n\n  #movie-card:hover #movie-info {\n    transform: translateY(0%);\n    height: 100%;\n\n    p {\n      margin-top: 1rem;\n      visibility: visible;\n    }\n  }\n}\n\n#iframe-container {\n  position: relative;\n  height: 100%;\n\n  button {\n    position: absolute;\n    top: 1%;\n    right: 2%;\n    background: orange;\n    color: #fff;\n    font-size: 2rem;\n    border: none;\n    width: auto;\n    padding: 10px;\n    transition: transform 0.3s linear;\n    cursor: pointer;\n  }\n\n  .server-wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    top: 2%;\n    right: 2%;\n\n    button {\n      position: unset;\n      font-size: 1rem;\n      margin-bottom: 5px;\n    }\n  }\n\n  button:hover {\n    transform: scale(1.1);\n    color: var(--red-background);\n  }\n\n  #poster {\n    width: 100%;\n  }\n}\n\niframe {\n  width: 100%;\n  height: 600px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  padding: 10px;\n  z-index: 9999;\n}\n\n@media screen and (max-width: 1024px) {\n  header {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    bottom: 0;\n    left: 0;\n    border-top: 3px solid #fff;\n    border-radius: 5px 5px 0 0;\n    height: 60px;\n    width: 100vw;\n    padding: 1rem 0;\n    z-index: 99999;\n    transition: height 0.3s linear;\n\n    #logo {\n      display: none;\n      margin: none;\n    }\n\n    ul {\n      justify-content: space-evenly;\n      align-items: center;\n      width: 100%;\n\n      #search {\n        display: flex;\n      }\n\n      li {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-bottom: 25px;\n\n        span {\n          color: #bebebe;\n          font-size: 0.7rem;\n        }\n\n        i:hover {\n          color: var(--red-background);\n        }\n      }\n    }\n\n    #input-wrapper {\n      position: unset;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 200px;\n      margin: 20px;\n\n      input {\n        width: 100%;\n      }\n\n      button {\n        width: 150px;\n        margin-top: 10px;\n      }\n    }\n  }\n\n  header.active {\n    background: linear-gradient(\n      rgb(29, 29, 29),\n      rgba(29, 29, 29, 0.95),\n      rgba(29, 29, 29, 0.85),\n      rgba(29, 29, 29, 0.65)\n    );\n    backdrop-filter: blur(5px);\n    height: 250px;\n  }\n\n  #hamburger {\n    display: block;\n    position: fixed;\n    top: 3%;\n    right: 5%;\n    background: transparent;\n    color: white;\n    font-size: 1.8rem;\n    border: none;\n    cursor: pointer;\n    z-index: 999999;\n  }\n\n  #mobile-logo {\n    position: relative;\n    display: block;\n    background: rgb(29 29 29);\n    color: var(--red-background);\n    padding: 1rem;\n  }\n\n  #mobile-logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: \"\";\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  #movie-container {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 150px));\n\n    #movie-card {\n      button {\n        width: 35px;\n        height: 35px;\n      }\n    }\n  }\n\n  #movie-info {\n    h1 {\n      font-size: 1rem;\n    }\n\n    p {\n      font-size: 0.8rem;\n\n      i {\n        color: var(--red-background);\n      }\n    }\n  }\n\n  #iframe-container {\n    \n    & .server-wrapper {\n      button {\n        font-size: .5rem;\n      }\n  \n    }\n    \n    iframe {\n      height: 300px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/intro.css":
/*!***********************!*\
  !*** ./src/intro.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_intro_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./intro.css */ "./node_modules/css-loader/dist/cjs.js!./src/intro.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_intro_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_intro_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_intro_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_intro_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _modules_displayMyList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/displayMyList.js */ "./src/modules/displayMyList.js");
/* harmony import */ var _modules_intro_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/intro.js */ "./src/modules/intro.js");










const searchMovieInput = document.getElementById('search-query');
const searchMovieBtn = document.getElementById('search-movie-btn');
const searchSeriesBtn = document.getElementById('search-series-btn');
const homeBtn = document.getElementById('home-btn');
const tvSeriesBtn = document.getElementById('tv-series-btn');
const myListBtn = document.getElementById('my-list');
const nowPlayingMoviesBtn = document.getElementById('popular-movies-btn');
const hamburger = document.getElementById('hamburger');
const search = document.getElementById('search');
const header = document.querySelector('header');
const clearField = document.getElementById('clear-field');
const logo = document.getElementById('mobile-logo')
const app = document.getElementById('app');

// NAVIGATION EVENTLISTENERS
homeBtn.addEventListener('click', () => {
  (0,_modules_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_6__.resetCurrentPage)();
  app.innerHTML = '';
  (0,_modules_getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_5__.getNowPlayingMovies)();
  (0,_modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

logo.addEventListener('click', () => {
  (0,_modules_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_6__.resetCurrentPage)();
  app.innerHTML = '';
  (0,_modules_getNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_5__.getNowPlayingMovies)();
  (0,_modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})

nowPlayingMoviesBtn.addEventListener('click', _modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
tvSeriesBtn.addEventListener('click', _modules_displayPopularSeries_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
myListBtn.addEventListener('click', _modules_displayMyList_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
searchSeriesBtn.addEventListener('click', _modules_searchSeries_js__WEBPACK_IMPORTED_MODULE_4__["default"]); // eventlistener for searching query for TV Series

// HAMBURGER EVENTLISTENER
search.addEventListener('click', () => { // eventlistener for toggling the hamburger menu
  header.classList.toggle('active');
});

// SEARCH QUERY EVENTLISTENERS
searchSeriesBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter TV show title');
  } else {
    (0,_modules_searchSeries_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    header.classList.toggle('active')
  }
});

searchMovieBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter movie title');
  } else {
    (0,_modules_searchMovie_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    header.classList.toggle('active')
  }
});

clearField.addEventListener('click', () => {
  searchMovieInput.value = '';
})

;(0,_modules_intro_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // initilize the list of now playing movies on page load




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
  const myList = JSON.parse(localStorage.getItem('myList')) || [];

  // Check if movieId is already in the list
  if (!myList.includes(movie)) {
    // If not, add it to the list
    myList.push({
      title,
      id: movie.id,
      overview: movie.overview,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      poster: movie.poster_path,
      type,
    });

    // Save the updated list back to local storage
    localStorage.setItem('myList', JSON.stringify(myList));

    alert('Movie added to your list!');
  } else {
    alert('This movie is already in your list!');
  }
}


/***/ }),

/***/ "./src/modules/deleteFromMyList.js":
/*!*****************************************!*\
  !*** ./src/modules/deleteFromMyList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteFromMyList)
/* harmony export */ });
/* harmony import */ var _displayMyList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayMyList.js */ "./src/modules/displayMyList.js");


function deleteFromMyList(index) {
  const myList = JSON.parse(localStorage.getItem('myList')) || [];

  myList.splice(index, 1);

  localStorage.setItem('myList', JSON.stringify(myList)); // Corrected: Passing myList instead of 'myList'
  (0,_displayMyList_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


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
  window.scrollTo(0, 0); //scrolls the page to top when next button is clicked
  
  try {
    const baseImgURL = 'https://image.tmdb.org/t/p/w500/';

    // Clear previous content
    app.innerHTML = '';
    const movieContainer = document.createElement('section');
    const previousPageBtn = document.createElement('button');
    const nextPageBtn = document.createElement('button');

    movieContainer.setAttribute('id', 'movie-container');
    previousPageBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    nextPageBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    previousPageBtn.setAttribute('id', 'previous-page-btn');
    nextPageBtn.setAttribute('id', 'next-page-btn');

    nextPageBtn.addEventListener('click', () => {
      (0,_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_2__.incrementPage)();
      (0,_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    previousPageBtn.addEventListener('click', () => {
      (0,_displayCurrentPage_js__WEBPACK_IMPORTED_MODULE_2__.decrementPage)();
      (0,_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    movies.forEach((movie) => {
      const movieCard = document.createElement('div');
      const btnWrapper = document.createElement('div');
      const watchBtn = document.createElement('button');
      const addToListBtn = document.createElement('button');
      const movieImage = document.createElement('img');
      const movieInfo = document.createElement('div');
      const movieOverview = document.createElement('p');
      const movieReleaseDate = document.createElement('p');
      const movieRating = document.createElement('p');

      movieInfo.setAttribute('id', 'movie-info');
      movieInfo.innerHTML = `<h1>${movie.title}</h1>`;
      movieOverview.textContent = `${movie.overview}`;
      movieRating.innerHTML = `<i class="fa-solid fa-star"></i>  :  ${Math.floor(movie.vote_average)} / 10`;
      movieReleaseDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i>  :  ${movie.release_date}`;
      movieImage.src = `${baseImgURL}${movie.poster_path}`;
      movieCard.setAttribute('id', 'movie-card');
      btnWrapper.setAttribute('id', 'button-wrapper');
      watchBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      watchBtn.setAttribute('id', 'watch-button');
      addToListBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
      addToListBtn.setAttribute('id', 'add-to-list-button');

      watchBtn.addEventListener('click', () => {
        app.innerHTML = '';
        window.scrollTo(0, 0);
        (0,_watchMovie_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movie.title, movie.id, movie.backdrop_path);
      });

      addToListBtn.addEventListener('click', () => {
        const title = movie.title ? movie.title : movie.name; // checks if the element is a "movie" or "tv"
        (0,_addToMyList_js__WEBPACK_IMPORTED_MODULE_3__["default"])({ movie, title, type: 'movie' });
      });

      movieInfo.append(movieOverview, movieReleaseDate, movieRating);
      btnWrapper.append(watchBtn, addToListBtn);
      movieCard.append(movieImage, btnWrapper, movieInfo);
      movieContainer.append(movieCard, nextPageBtn, previousPageBtn);
      app.append(movieContainer);
    });
  } catch (error) {
    console.error(error);
  }
}


/***/ }),

/***/ "./src/modules/displayMyList.js":
/*!**************************************!*\
  !*** ./src/modules/displayMyList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMyList)
/* harmony export */ });
/* harmony import */ var _watchMovie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchMovie.js */ "./src/modules/watchMovie.js");
/* harmony import */ var _watchSeries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchSeries.js */ "./src/modules/watchSeries.js");
/* harmony import */ var _deleteFromMyList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteFromMyList.js */ "./src/modules/deleteFromMyList.js");




async function displayMyList() {
  try {
    const myList = JSON.parse(localStorage.getItem('myList')) || [];
    const baseImgURL = 'https://image.tmdb.org/t/p/w500/';

    app.innerHTML = '';
    const movieContainer = document.createElement('section');
    movieContainer.setAttribute('id', 'movie-container');

    if (myList.length === 0) {
      const emptyText = document.createElement('h2');
      emptyText.innerHTML = 'Your list is empty <i class="fa-solid fa-broom"></i>';
      app.append(emptyText);
    }

    myList.forEach((movie, index) => {
      const movieCard = document.createElement('div');
      const btnWrapper = document.createElement('div');
      const watchBtn = document.createElement('button');
      const deleteFromListBtn = document.createElement('button');
      const movieImage = document.createElement('img');
      const movieInfo = document.createElement('div');
      const movieOverview = document.createElement('p');
      const movieReleaseDate = document.createElement('p');
      const movieRating = document.createElement('p');

      movieInfo.setAttribute('id', 'movie-info');
      movieInfo.innerHTML = `<h1>${movie.title}</h1>`;
      movieOverview.textContent = `${movie.overview}`;
      movieRating.innerHTML = `<i class="fa-solid fa-star"></i>  :  ${Math.floor(movie.vote_average)} / 10`;
      movieReleaseDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i>  :  ${movie.release_date}`;
      movieImage.src = `${baseImgURL}${movie.poster}`;
      movieCard.setAttribute('id', 'movie-card');
      btnWrapper.setAttribute('id', 'button-wrapper');
      watchBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      watchBtn.setAttribute('id', 'watch-button');
      deleteFromListBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
      deleteFromListBtn.setAttribute('id', 'delete-from-list');


      watchBtn.addEventListener('click', () => {
        app.innerHTML = '';
        movie.type === 'movie' ? (0,_watchMovie_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movie.title, movie.id, movie.backdrop_path) : (0,_watchSeries_js__WEBPACK_IMPORTED_MODULE_1__["default"])(movie.name, movie.id, movie.backdrop_path);
      });

      deleteFromListBtn.addEventListener('click', () => {
        (0,_deleteFromMyList_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index);
      });

      movieInfo.append(movieOverview, movieReleaseDate, movieRating);
      btnWrapper.append(watchBtn, deleteFromListBtn);
      movieCard.append(movieImage, movieInfo, btnWrapper);
      movieContainer.append(movieCard);
      app.append(movieContainer);
    });
  } catch (error) {
    console.error(error);
  }
}

displayMyList(); // initialize my list contents


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
  window.scrollTo(0, 0); //scrolls the page to top when next button is clicked

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
        const btnWrapper = document.createElement("div");
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
        movieRating.innerHTML = `<i class="fa-solid fa-star"></i>  :  ${Math.floor(movie.vote_average)} / 10`;
        movieReleaseDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i>  :  ${movie.first_air_date}`;
        movieImage.src = `${baseImgURL}${movie.poster_path}`;
        movieCard.setAttribute('id', 'movie-card')
        btnWrapper.setAttribute('id', 'button-wrapper');
        watchBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        watchBtn.setAttribute('id', 'watch-button');
        addToListBtn.innerHTML = '<i class="fa-solid fa-heart"></i>'
        addToListBtn.setAttribute('id', 'add-to-list-button');
        
        watchBtn.addEventListener("click", () => {
          app.innerHTML = "";
          window.scrollTo(0, 0);
          (0,_watchSeries_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movie.name, movie.id, movie.backdrop_path);
        });

        addToListBtn.addEventListener("click", () => {
          const itemTitle = movie.title ? movie.title : movie.name; //checks if the element is a "movie" or "tv"
          (0,_addToMyList_js__WEBPACK_IMPORTED_MODULE_3__["default"])({movie, title: itemTitle, type: "tv"}); 
         });
        
        movieInfo.append(movieOverview, movieReleaseDate, movieRating);
        btnWrapper.append(watchBtn, addToListBtn);
        movieCard.append(movieImage, btnWrapper, movieInfo);
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

/***/ "./src/modules/intro.js":
/*!******************************!*\
  !*** ./src/modules/intro.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ intro)
/* harmony export */ });
/* harmony import */ var _intro_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../intro.css */ "./src/intro.css");


function intro() {
    const modal = document.getElementById('modal');

    const logoText = document.createElement('div');
    logoText.className = 'txt';
    logoText.textContent = 'YENGFLIX';

    modal.append(logoText);
    modal.showModal();

    setTimeout(() => {
        modal.close()
    } ,3000)
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
  let server = 'https://vidsrc.xyz/embed/movie/';

  try {
    const iframeContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    const backBtn = document.createElement("button");
    const poster = document.createElement('img');
    const serverWrapper = document.createElement('div');
    const server1 = document.createElement('button');
    const server2 = document.createElement('button');

    server1.textContent = 'Server 1';
    server1.className = 'server1';
    server2.textContent = 'Server 2';
    server2.className = 'server2';
    serverWrapper.className = 'server-wrapper';
    poster.src = `${baseImgURL}${posterPath}`;
    poster.setAttribute('id', 'poster')
    iframeContainer.setAttribute('id', 'iframe-container')
    backBtn.innerHTML = '<i class="fa-solid fa-left-long"></i>';
    iframe.src = `${server}${movieID}`;
    iframe.setAttribute("allowfullscreen", "true");

    titleHeader.textContent = movieTitle;
    serverWrapper.append(backBtn, server1, server2);
    iframeContainer.append(iframe, poster, serverWrapper);
    app.append(iframeContainer);

    server1.addEventListener('click', () => {
      server = 'https://vidsrc.xyz/embed/movie/';
      iframe.src = `${server}${movieID}`;
    })

    server2.addEventListener('click', () => {
      server = 'https://2embed.org/embed/movie/';
      iframe.src = `${server}${movieID}`;
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxLQUFLLFlBQVksV0FBVyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLHlCQUF5Qix5QkFBeUIsYUFBYSxjQUFjLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLFlBQVksS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1B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Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9pbnRyby5jc3MiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvaW50cm8uY3NzPzNlOTQiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9hZGRUb015TGlzdC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kZWxldGVGcm9tTXlMaXN0LmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDdXJyZW50UGFnZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5TW92aWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNeUxpc3QuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZGlzcGxheVBvcHVsYXJTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZGlzcGxheVNlcmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9nZXROb3dQbGF5aW5nTW92aWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2dldFBvcHVsYXJTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvaW50cm8uanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvc2VhcmNoTW92aWUuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvc2VhcmNoU2VyaWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL3dhdGNoTW92aWUuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvd2F0Y2hTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NzAwLDkwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4jbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNmZmYsICNhYWEpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgLyogcGFkZGluZy10b3A6IDQwdmg7ICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxLjMpO1xufVxuXG4udHh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDEydm1pbjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNlOTA0MTg7XG4gIGFuaW1hdGlvbjogbmV0ZmxpeF9zdHlsZSAzLjVzO1xuICBib3JkZXI6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMjBweCAjYWFhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQGtleWZyYW1lcyBuZXRmbGl4X3N0eWxlIHtcbiAgMCUge1xuICAgIHRleHQtc2hhZG93OiAzMHB4IDMwcHggNXB4ICNhYWE7XG4gICAgY29sb3I6ICNmM2YzZjM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS40LCAxLjQpO1xuICB9XG4gIDEwJSB7XG4gICAgdGV4dC1zaGFkb3c6IDEwcHggMTVweCA1cHggI2FhYTtcbiAgICBjb2xvcjogI2YzZjNmMztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjQsIDEuNCk7XG4gIH1cbiAgMTUlIHtcbiAgICBjb2xvcjogI2YzZjNmMztcbiAgfVxuICAyMCUge1xuICAgIGNvbG9yOiAjZTkwNDE4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMSwgMS4xKTtcbiAgfVxuICA3NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGNvbG9yOiAjZTkwNDE4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuODUsIDAuOSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbnRyby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7RUFDWjs7QUFFRjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUNBQXVDO0VBQ3ZDLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGdEQUFnRDtFQUNsRDtFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxnREFBZ0Q7RUFDbEQ7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0RBQWdEO0VBQ2xEO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsaURBQWlEO0VBQ25EOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjcwMCw5MDBcXFwiKTtcXG5cXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiNtb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoI2ZmZiwgI2FhYSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIC8qIHBhZGRpbmctdG9wOiA0MHZoOyAqL1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEuMyk7XFxufVxcblxcbi50eHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBmb250LXNpemU6IDEydm1pbjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2U5MDQxODtcXG4gIGFuaW1hdGlvbjogbmV0ZmxpeF9zdHlsZSAzLjVzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMjBweCAjYWFhO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbkBrZXlmcmFtZXMgbmV0ZmxpeF9zdHlsZSB7XFxuICAwJSB7XFxuICAgIHRleHQtc2hhZG93OiAzMHB4IDMwcHggNXB4ICNhYWE7XFxuICAgIGNvbG9yOiAjZjNmM2YzO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjQsIDEuNCk7XFxuICB9XFxuICAxMCUge1xcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAxNXB4IDVweCAjYWFhO1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS40LCAxLjQpO1xcbiAgfVxcbiAgMTUlIHtcXG4gICAgY29sb3I6ICNmM2YzZjM7XFxuICB9XFxuICAyMCUge1xcbiAgICBjb2xvcjogI2U5MDQxODtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMSwgMS4xKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjb2xvcjogI2U5MDQxODtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC44NSwgMC45KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tbGlnaHQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDEzNWRlZyxcbiAgICByZ2IoMCwgMjA4LCAyNTUpLFxuICAgIHJnYig4OSwgMjE5LCAyNDgpLFxuICAgIHJnYigxNzQsIDIzNCwgMjQ4KVxuICApO1xuICAtLWRhcmstYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDM1IDM1IDM1KSwgcmdiKDU0IDU0IDU0KSk7XG4gIC0tZHJvcHNoYWRvdzogMXB4IDFweCAycHggcmdiYSgxNjIsIDE2MiwgMTYyLCAwLjUxMSk7XG4gIC0tcmVkLWJhY2tncm91bmQ6IGhzbCgwLCAxMDAlLCA1MCUpO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5odG1sIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDAgMnJlbTtcblxuICAjbG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xuICB9XG5cbiAgI2xvZ286OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgfVxuXG4gIG5hdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5cbiAgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICNzZWFyY2gge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBsaTphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgd2lkdGg6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGxpbmVhcjtcbiAgICB9XG5cbiAgICBsaTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgI2lucHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHJpZ2h0OiAyJTtcblxuICAgIGRpdiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogYXV0bztcblxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuXG4gICAgICBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKTp2YWxpZCB+IHNwYW4ge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuNTU2KTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHJpZ2h0OiA4JTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGJ1dHRvbjpob3ZlcixcbiAgICBidXR0b246YWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxufVxuXG4jaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI21vYmlsZS1sb2dvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3ByZXZpb3VzLXBhZ2UtYnRuLFxuI25leHQtcGFnZS1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6ICNjMmMyYzJhYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgei1pbmRleDogOTk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG59XG5cbiNwcmV2aW91cy1wYWdlLWJ0bjpob3ZlcixcbiNuZXh0LXBhZ2UtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q2ZDZkNmM4O1xuICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNwcmV2aW91cy1wYWdlLWJ0biB7XG4gIGxlZnQ6IDIlO1xufVxuXG4jbmV4dC1wYWdlLWJ0biB7XG4gIHJpZ2h0OiAyJTtcbn1cblxuI3BhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMmUyZTJlO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jbW92aWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAzMDBweCkpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSA0cmVtIDFyZW07XG5cbiAgI21vdmllLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xuXG4gICAgI21vdmllLWluZm8ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MTQpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xuICAgICAgb3ZlcmZsb3cteTogYXV0bzsgLyogRW5hYmxlIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZTtcblxuICAgICAgaSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgI21vdmllLWluZm86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBXZWJLaXQgYnJvd3NlcnMgKi9cbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNXMgZWFzZTtcbiAgICB9XG5cbiAgICAjYnV0dG9uLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB0b3A6IDIlO1xuICAgICAgcmlnaHQ6IDIlO1xuICAgICAgei1pbmRleDogOTk5OTtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgICAgICBjb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjg4MSk7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjg5MSksXG4gICAgICAgICAgLTFweCAtMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgyKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgIH1cblxuICAgICAgI3dhdGNoLWJ1dHRvbiB7XG4gICAgICAgIHRvcDogNSU7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgIH1cblxuICAgICAgI2FkZC10by1saXN0LWJ1dHRvbiB7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICByaWdodDogNSU7XG4gICAgICB9XG5cbiAgICAgICNkZWxldGUtZnJvbS1saXN0IHtcbiAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cblxuICAjbW92aWUtY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgfVxuXG4gICNtb3ZpZS1jYXJkOmhvdmVyIGltZyB7XG4gICAgZmlsdGVyOiBibHVyKDNweCk7XG4gIH1cblxuICAjbW92aWUtY2FyZDpob3ZlciAjbW92aWUtaW5mbyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgfVxufVxuXG4jaWZyYW1lLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMSU7XG4gICAgcmlnaHQ6IDIlO1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgbGluZWFyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5zZXJ2ZXItd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0b3A6IDIlO1xuICAgIHJpZ2h0OiAyJTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG5cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gICNwb3N0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbmlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBsaW5lYXI7XG5cbiAgICAjbG9nbyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgbWFyZ2luOiBub25lO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAjc2VhcmNoIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjYmViZWJlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICNpbnB1dC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIG1hcmdpbjogMjBweDtcblxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhlYWRlci5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHJnYigyOSwgMjksIDI5KSxcbiAgICAgIHJnYmEoMjksIDI5LCAyOSwgMC45NSksXG4gICAgICByZ2JhKDI5LCAyOSwgMjksIDAuODUpLFxuICAgICAgcmdiYSgyOSwgMjksIDI5LCAwLjY1KVxuICAgICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4gICNoYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDMlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gIH1cblxuICAjbW9iaWxlLWxvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICNtb2JpbGUtbG9nbzo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUlO1xuICB9XG5cbiAgI21vdmllLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMTUwcHgpKTtcblxuICAgICNtb3ZpZS1jYXJkIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI21vdmllLWluZm8ge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjaWZyYW1lLWNvbnRhaW5lciB7XG4gICAgXG4gICAgJiAuc2VydmVyLXdyYXBwZXIge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAuNXJlbTtcbiAgICAgIH1cbiAgXG4gICAgfVxuICAgIFxuICAgIGlmcmFtZSB7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFOzs7OztHQUtDO0VBQ0Qsd0VBQXdFO0VBQ3hFLG9EQUFvRDtFQUNwRCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIs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SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsNkRBQTZEOztJQUU3RDtNQUNFO1FBQ0UsV0FBVztRQUNYLFlBQVk7TUFDZDtJQUNGO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxpQkFBaUI7O01BRWpCO1FBQ0UsNEJBQTRCO01BQzlCO0lBQ0Y7RUFDRjs7RUFFQTs7SUFFRTtNQUNFO1FBQ0UsZ0JBQWdCO01BQ2xCOztJQUVGOztJQUVBO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWxpZ2h0LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTM1ZGVnLFxcbiAgICByZ2IoMCwgMjA4LCAyNTUpLFxcbiAgICByZ2IoODksIDIxOSwgMjQ4KSxcXG4gICAgcmdiKDE3NCwgMjM0LCAyNDgpXFxuICApO1xcbiAgLS1kYXJrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzNSAzNSAzNSksIHJnYig1NCA1NCA1NCkpO1xcbiAgLS1kcm9wc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE2MiwgMTYyLCAxNjIsIDAuNTExKTtcXG4gIC0tcmVkLWJhY2tncm91bmQ6IGhzbCgwLCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhcHAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuXFxuICAjbG9nbyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgI2xvZ286OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgI3NlYXJjaCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBsaSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgbGk6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgbGluZWFyO1xcbiAgICB9XFxuXFxuICAgIGxpOmhvdmVyOjphZnRlciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gICNpbnB1dC13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICByaWdodDogMiU7XFxuXFxuICAgIGRpdiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB3aWR0aDogYXV0bztcXG5cXG4gICAgICBpbnB1dCB7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6dmFsaWQgfiBzcGFuIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgfVxcblxcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC41NTYpO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHJpZ2h0OiA4JTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgd2lkdGg6IDE1cHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBidXR0b246aG92ZXIsXFxuICAgIGJ1dHRvbjphY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jaGFtYnVyZ2VyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNtb2JpbGUtbG9nbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJldmlvdXMtcGFnZS1idG4sXFxuI25leHQtcGFnZS1idG4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiAjYzJjMmMyYWE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcXG59XFxuXFxuI3ByZXZpb3VzLXBhZ2UtYnRuOmhvdmVyLFxcbiNuZXh0LXBhZ2UtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkNmQ2ZDZjODtcXG4gIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbiNwcmV2aW91cy1wYWdlLWJ0biB7XFxuICBsZWZ0OiAyJTtcXG59XFxuXFxuI25leHQtcGFnZS1idG4ge1xcbiAgcmlnaHQ6IDIlO1xcbn1cXG5cXG4jcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiAjMmUyZTJlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbW92aWUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAzMDBweCkpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gNHJlbSAxcmVtO1xcblxcbiAgI21vdmllLWNhcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xcblxcbiAgICAjbW92aWUtaW5mbyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MTQpO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEhpZGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIgKi9cXG4gICAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBFbmFibGUgdmVydGljYWwgc2Nyb2xsYmFyICovXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2U7XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjbW92aWUtaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBXZWJLaXQgYnJvd3NlcnMgKi9cXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgI2J1dHRvbi13cmFwcGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHRvcDogMiU7XFxuICAgICAgcmlnaHQ6IDIlO1xcbiAgICAgIHotaW5kZXg6IDk5OTk7XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuODgxKTtcXG4gICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuODkxKSxcXG4gICAgICAgICAgLTFweCAtMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgyKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB6LWluZGV4OiA5OTk7XFxuICAgICAgfVxcblxcbiAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgIH1cXG5cXG4gICAgICAjd2F0Y2gtYnV0dG9uIHtcXG4gICAgICAgIHRvcDogNSU7XFxuICAgICAgICByaWdodDogNSU7XFxuICAgICAgfVxcblxcbiAgICAgICNhZGQtdG8tbGlzdC1idXR0b24ge1xcbiAgICAgICAgdG9wOiAxNSU7XFxuICAgICAgICByaWdodDogNSU7XFxuICAgICAgfVxcblxcbiAgICAgICNkZWxldGUtZnJvbS1saXN0IHtcXG4gICAgICAgIHRvcDogMTUlO1xcbiAgICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG4gIH1cXG5cXG4gICNtb3ZpZS1jYXJkOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gIH1cXG5cXG4gICNtb3ZpZS1jYXJkOmhvdmVyIGltZyB7XFxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgfVxcblxcbiAgI21vdmllLWNhcmQ6aG92ZXIgI21vdmllLWluZm8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIHAge1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jaWZyYW1lLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMSU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBsaW5lYXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5zZXJ2ZXItd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdG9wOiAyJTtcXG4gICAgcmlnaHQ6IDIlO1xcblxcbiAgICBidXR0b24ge1xcbiAgICAgIHBvc2l0aW9uOiB1bnNldDtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XFxuICB9XFxuXFxuICAjcG9zdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbmlmcmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjMmUyZTJlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIHotaW5kZXg6IDk5OTk5O1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBsaW5lYXI7XFxuXFxuICAgICNsb2dvIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIG1hcmdpbjogbm9uZTtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAjc2VhcmNoIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgfVxcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgY29sb3I6ICNiZWJlYmU7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaTpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICNpbnB1dC13cmFwcGVyIHtcXG4gICAgICBwb3NpdGlvbjogdW5zZXQ7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgIG1hcmdpbjogMjBweDtcXG5cXG4gICAgICBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICB9XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBoZWFkZXIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHJnYigyOSwgMjksIDI5KSxcXG4gICAgICByZ2JhKDI5LCAyOSwgMjksIDAuOTUpLFxcbiAgICAgIHJnYmEoMjksIDI5LCAyOSwgMC44NSksXFxuICAgICAgcmdiYSgyOSwgMjksIDI5LCAwLjY1KVxcbiAgICApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gICNoYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDMlO1xcbiAgICByaWdodDogNSU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogOTk5OTk5O1xcbiAgfVxcblxcbiAgI21vYmlsZS1sb2dvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbG9nbzo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gIH1cXG5cXG4gICNtb3ZpZS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxNTBweCkpO1xcblxcbiAgICAjbW92aWUtY2FyZCB7XFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgI21vdmllLWluZm8ge1xcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcblxcbiAgICAgIGkge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICNpZnJhbWUtY29udGFpbmVyIHtcXG4gICAgXFxuICAgICYgLnNlcnZlci13cmFwcGVyIHtcXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAuNXJlbTtcXG4gICAgICB9XFxuICBcXG4gICAgfVxcbiAgICBcXG4gICAgaWZyYW1lIHtcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ludHJvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW50cm8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBkaXNwbGF5Tm93UGxheWluZ01vdmllcyBmcm9tICcuL21vZHVsZXMvZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMuanMnO1xuaW1wb3J0IGRpc3BsYXlQb3B1bGFyU2VyaWVzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5UG9wdWxhclNlcmllcy5qcyc7XG5pbXBvcnQgc2VhcmNoTW92aWUgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaE1vdmllLmpzJztcbmltcG9ydCBzZWFyY2hTZXJpZXMgZnJvbSAnLi9tb2R1bGVzL3NlYXJjaFNlcmllcy5qcyc7XG5pbXBvcnQgeyBnZXROb3dQbGF5aW5nTW92aWVzIH0gZnJvbSAnLi9tb2R1bGVzL2dldE5vd1BsYXlpbmdNb3ZpZXMuanMnO1xuaW1wb3J0IHsgcmVzZXRDdXJyZW50UGFnZSB9IGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5Q3VycmVudFBhZ2UuanMnO1xuaW1wb3J0IGRpc3BsYXlNeUxpc3QgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlNeUxpc3QuanMnO1xuaW1wb3J0IGludHJvIGZyb20gJy4vbW9kdWxlcy9pbnRyby5qcyc7XG5cbmNvbnN0IHNlYXJjaE1vdmllSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXF1ZXJ5Jyk7XG5jb25zdCBzZWFyY2hNb3ZpZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtbW92aWUtYnRuJyk7XG5jb25zdCBzZWFyY2hTZXJpZXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXNlcmllcy1idG4nKTtcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKTtcbmNvbnN0IHR2U2VyaWVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R2LXNlcmllcy1idG4nKTtcbmNvbnN0IG15TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1saXN0Jyk7XG5jb25zdCBub3dQbGF5aW5nTW92aWVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVsYXItbW92aWVzLWJ0bicpO1xuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBjbGVhckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWZpZWxkJyk7XG5jb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1sb2dvJylcbmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuLy8gTkFWSUdBVElPTiBFVkVOVExJU1RFTkVSU1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVzZXRDdXJyZW50UGFnZSgpO1xuICBhcHAuaW5uZXJIVE1MID0gJyc7XG4gIGdldE5vd1BsYXlpbmdNb3ZpZXMoKTtcbiAgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMoKTtcbn0pO1xuXG5sb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZXNldEN1cnJlbnRQYWdlKCk7XG4gIGFwcC5pbm5lckhUTUwgPSAnJztcbiAgZ2V0Tm93UGxheWluZ01vdmllcygpO1xuICBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpO1xufSlcblxubm93UGxheWluZ01vdmllc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKTtcbnR2U2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVBvcHVsYXJTZXJpZXMpO1xubXlMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU15TGlzdCk7XG5zZWFyY2hTZXJpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hTZXJpZXMpOyAvLyBldmVudGxpc3RlbmVyIGZvciBzZWFyY2hpbmcgcXVlcnkgZm9yIFRWIFNlcmllc1xuXG4vLyBIQU1CVVJHRVIgRVZFTlRMSVNURU5FUlxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvLyBldmVudGxpc3RlbmVyIGZvciB0b2dnbGluZyB0aGUgaGFtYnVyZ2VyIG1lbnVcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xufSk7XG5cbi8vIFNFQVJDSCBRVUVSWSBFVkVOVExJU1RFTkVSU1xuc2VhcmNoU2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoc2VhcmNoTW92aWVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydCgnUGxlYXNlIGVudGVyIFRWIHNob3cgdGl0bGUnKTtcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hTZXJpZXMoKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgfVxufSk7XG5cbnNlYXJjaE1vdmllQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoc2VhcmNoTW92aWVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydCgnUGxlYXNlIGVudGVyIG1vdmllIHRpdGxlJyk7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoTW92aWUoKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgfVxufSk7XG5cbmNsZWFyRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNlYXJjaE1vdmllSW5wdXQudmFsdWUgPSAnJztcbn0pXG5cbmludHJvKCk7XG5kaXNwbGF5Tm93UGxheWluZ01vdmllcygpOyAvLyBpbml0aWxpemUgdGhlIGxpc3Qgb2Ygbm93IHBsYXlpbmcgbW92aWVzIG9uIHBhZ2UgbG9hZFxuXG5leHBvcnQgeyBzZWFyY2hNb3ZpZUlucHV0IH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb015TGlzdCh7IG1vdmllLCB0aXRsZSwgdHlwZSB9KSB7XG4gIC8vIFJldHJpZXZlIGV4aXN0aW5nIGxpc3QgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIGluaXRpYWxpemUgYW4gZW1wdHkgYXJyYXlcbiAgY29uc3QgbXlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlMaXN0JykpIHx8IFtdO1xuXG4gIC8vIENoZWNrIGlmIG1vdmllSWQgaXMgYWxyZWFkeSBpbiB0aGUgbGlzdFxuICBpZiAoIW15TGlzdC5pbmNsdWRlcyhtb3ZpZSkpIHtcbiAgICAvLyBJZiBub3QsIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgIG15TGlzdC5wdXNoKHtcbiAgICAgIHRpdGxlLFxuICAgICAgaWQ6IG1vdmllLmlkLFxuICAgICAgb3ZlcnZpZXc6IG1vdmllLm92ZXJ2aWV3LFxuICAgICAgcmVsZWFzZV9kYXRlOiBtb3ZpZS5yZWxlYXNlX2RhdGUsXG4gICAgICB2b3RlX2F2ZXJhZ2U6IG1vdmllLnZvdGVfYXZlcmFnZSxcbiAgICAgIHBvc3RlcjogbW92aWUucG9zdGVyX3BhdGgsXG4gICAgICB0eXBlLFxuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBsaXN0IGJhY2sgdG8gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUxpc3QnLCBKU09OLnN0cmluZ2lmeShteUxpc3QpKTtcblxuICAgIGFsZXJ0KCdNb3ZpZSBhZGRlZCB0byB5b3VyIGxpc3QhJyk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1RoaXMgbW92aWUgaXMgYWxyZWFkeSBpbiB5b3VyIGxpc3QhJyk7XG4gIH1cbn1cbiIsImltcG9ydCBkaXNwbGF5TXlMaXN0IGZyb20gJy4vZGlzcGxheU15TGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUZyb21NeUxpc3QoaW5kZXgpIHtcbiAgY29uc3QgbXlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlMaXN0JykpIHx8IFtdO1xuXG4gIG15TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUxpc3QnLCBKU09OLnN0cmluZ2lmeShteUxpc3QpKTsgLy8gQ29ycmVjdGVkOiBQYXNzaW5nIG15TGlzdCBpbnN0ZWFkIG9mICdteUxpc3QnXG4gIGRpc3BsYXlNeUxpc3QoKTtcbn1cbiIsImxldCBjdXJyZW50UGFnZSA9IDE7XG5jb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcbnBhZ2UudGV4dENvbnRlbnQgPSBgUGFnZSAke2N1cnJlbnRQYWdlfSBvZiBgO1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcbiAgcmV0dXJuIGN1cnJlbnRQYWdlO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRQYWdlKCkge1xuICBjdXJyZW50UGFnZSsrO1xufVxuXG5mdW5jdGlvbiBkZWNyZW1lbnRQYWdlKCkge1xuICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgY3VycmVudFBhZ2UtLTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldEN1cnJlbnRQYWdlKCkge1xuICBjdXJyZW50UGFnZSA9IDE7XG59XG5cbmV4cG9ydCB7XG4gY3VycmVudFBhZ2UsIGdldEN1cnJlbnRQYWdlLCBpbmNyZW1lbnRQYWdlLCBkZWNyZW1lbnRQYWdlLCByZXNldEN1cnJlbnRQYWdlIFxufTtcbiIsImltcG9ydCB3YXRjaE1vdmllIGZyb20gJy4vd2F0Y2hNb3ZpZS5qcyc7XG5pbXBvcnQgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMgZnJvbSAnLi9kaXNwbGF5Tm93UGxheWluZ01vdmllcy5qcyc7XG5pbXBvcnQgeyBpbmNyZW1lbnRQYWdlLCBkZWNyZW1lbnRQYWdlIH0gZnJvbSAnLi9kaXNwbGF5Q3VycmVudFBhZ2UuanMnO1xuaW1wb3J0IGFkZFRvTXlMaXN0IGZyb20gJy4vYWRkVG9NeUxpc3QuanMnO1xuXG4vLyB0aGlzIGlzIHRoZSBtYWluIGZ1bmN0aW9uIGluIGRpc3BsYXlpbmcgdGhlIG1vdmllcyBtYXkgaXQgYmUgdGhlXG4vLyAnUG9wdWxhcicgb3IgJ1NlYXJjaGVkJyBtb3ZpZXMgYnkgdXNlclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheU1vdmllcyhtb3ZpZXMpIHtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApOyAvL3Njcm9sbHMgdGhlIHBhZ2UgdG8gdG9wIHdoZW4gbmV4dCBidXR0b24gaXMgY2xpY2tlZFxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBiYXNlSW1nVVJMID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJztcblxuICAgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICBhcHAuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgcHJldmlvdXNQYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmV4dFBhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG1vdmllQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtY29udGFpbmVyJyk7XG4gICAgcHJldmlvdXNQYWdlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4nO1xuICAgIG5leHRQYWdlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JztcbiAgICBwcmV2aW91c1BhZ2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2aW91cy1wYWdlLWJ0bicpO1xuICAgIG5leHRQYWdlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dC1wYWdlLWJ0bicpO1xuXG4gICAgbmV4dFBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpbmNyZW1lbnRQYWdlKCk7XG4gICAgICBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpO1xuICAgIH0pO1xuXG4gICAgcHJldmlvdXNQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGVjcmVtZW50UGFnZSgpO1xuICAgICAgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMoKTtcbiAgICB9KTtcblxuICAgIG1vdmllcy5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgICAgY29uc3QgbW92aWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBidG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB3YXRjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgYWRkVG9MaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBtb3ZpZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBjb25zdCBtb3ZpZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IG1vdmllT3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBtb3ZpZVJlbGVhc2VEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3QgbW92aWVSYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgIG1vdmllSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWluZm8nKTtcbiAgICAgIG1vdmllSW5mby5pbm5lckhUTUwgPSBgPGgxPiR7bW92aWUudGl0bGV9PC9oMT5gO1xuICAgICAgbW92aWVPdmVydmlldy50ZXh0Q29udGVudCA9IGAke21vdmllLm92ZXJ2aWV3fWA7XG4gICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPiAgOiAgJHtNYXRoLmZsb29yKG1vdmllLnZvdGVfYXZlcmFnZSl9IC8gMTBgO1xuICAgICAgbW92aWVSZWxlYXNlRGF0ZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYWxlbmRhci1kYXlzXCI+PC9pPiAgOiAgJHttb3ZpZS5yZWxlYXNlX2RhdGV9YDtcbiAgICAgIG1vdmllSW1hZ2Uuc3JjID0gYCR7YmFzZUltZ1VSTH0ke21vdmllLnBvc3Rlcl9wYXRofWA7XG4gICAgICBtb3ZpZUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1jYXJkJyk7XG4gICAgICBidG5XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uLXdyYXBwZXInKTtcbiAgICAgIHdhdGNoQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsYXlcIj48L2k+JztcbiAgICAgIHdhdGNoQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2F0Y2gtYnV0dG9uJyk7XG4gICAgICBhZGRUb0xpc3RCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtaGVhcnRcIj48L2k+JztcbiAgICAgIGFkZFRvTGlzdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10by1saXN0LWJ1dHRvbicpO1xuXG4gICAgICB3YXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYXBwLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIHdhdGNoTW92aWUobW92aWUudGl0bGUsIG1vdmllLmlkLCBtb3ZpZS5iYWNrZHJvcF9wYXRoKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRUb0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbW92aWUudGl0bGUgPyBtb3ZpZS50aXRsZSA6IG1vdmllLm5hbWU7IC8vIGNoZWNrcyBpZiB0aGUgZWxlbWVudCBpcyBhIFwibW92aWVcIiBvciBcInR2XCJcbiAgICAgICAgYWRkVG9NeUxpc3QoeyBtb3ZpZSwgdGl0bGUsIHR5cGU6ICdtb3ZpZScgfSk7XG4gICAgICB9KTtcblxuICAgICAgbW92aWVJbmZvLmFwcGVuZChtb3ZpZU92ZXJ2aWV3LCBtb3ZpZVJlbGVhc2VEYXRlLCBtb3ZpZVJhdGluZyk7XG4gICAgICBidG5XcmFwcGVyLmFwcGVuZCh3YXRjaEJ0biwgYWRkVG9MaXN0QnRuKTtcbiAgICAgIG1vdmllQ2FyZC5hcHBlbmQobW92aWVJbWFnZSwgYnRuV3JhcHBlciwgbW92aWVJbmZvKTtcbiAgICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZChtb3ZpZUNhcmQsIG5leHRQYWdlQnRuLCBwcmV2aW91c1BhZ2VCdG4pO1xuICAgICAgYXBwLmFwcGVuZChtb3ZpZUNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCB3YXRjaE1vdmllIGZyb20gJy4vd2F0Y2hNb3ZpZS5qcyc7XG5pbXBvcnQgd2F0Y2hTZXJpZXMgZnJvbSAnLi93YXRjaFNlcmllcy5qcyc7XG5pbXBvcnQgZGVsZXRlRnJvbU15TGlzdCBmcm9tICcuL2RlbGV0ZUZyb21NeUxpc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5TXlMaXN0KCkge1xuICB0cnkge1xuICAgIGNvbnN0IG15TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TGlzdCcpKSB8fCBbXTtcbiAgICBjb25zdCBiYXNlSW1nVVJMID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJztcblxuICAgIGFwcC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBtb3ZpZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBtb3ZpZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKG15TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVtcHR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBlbXB0eVRleHQuaW5uZXJIVE1MID0gJ1lvdXIgbGlzdCBpcyBlbXB0eSA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJyb29tXCI+PC9pPic7XG4gICAgICBhcHAuYXBwZW5kKGVtcHR5VGV4dCk7XG4gICAgfVxuXG4gICAgbXlMaXN0LmZvckVhY2goKG1vdmllLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbW92aWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBidG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB3YXRjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgZGVsZXRlRnJvbUxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IG1vdmllSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGNvbnN0IG1vdmllSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgbW92aWVPdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IG1vdmllUmVsZWFzZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgbW92aWVJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtaW5mbycpO1xuICAgICAgbW92aWVJbmZvLmlubmVySFRNTCA9IGA8aDE+JHttb3ZpZS50aXRsZX08L2gxPmA7XG4gICAgICBtb3ZpZU92ZXJ2aWV3LnRleHRDb250ZW50ID0gYCR7bW92aWUub3ZlcnZpZXd9YDtcbiAgICAgIG1vdmllUmF0aW5nLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXJcIj48L2k+ICA6ICAke01hdGguZmxvb3IobW92aWUudm90ZV9hdmVyYWdlKX0gLyAxMGA7XG4gICAgICBtb3ZpZVJlbGVhc2VEYXRlLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLWRheXNcIj48L2k+ICA6ICAke21vdmllLnJlbGVhc2VfZGF0ZX1gO1xuICAgICAgbW92aWVJbWFnZS5zcmMgPSBgJHtiYXNlSW1nVVJMfSR7bW92aWUucG9zdGVyfWA7XG4gICAgICBtb3ZpZUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1jYXJkJyk7XG4gICAgICBidG5XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uLXdyYXBwZXInKTtcbiAgICAgIHdhdGNoQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsYXlcIj48L2k+JztcbiAgICAgIHdhdGNoQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2F0Y2gtYnV0dG9uJyk7XG4gICAgICBkZWxldGVGcm9tTGlzdEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW5cIj48L2k+JztcbiAgICAgIGRlbGV0ZUZyb21MaXN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlLWZyb20tbGlzdCcpO1xuXG5cbiAgICAgIHdhdGNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhcHAuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIG1vdmllLnR5cGUgPT09ICdtb3ZpZScgPyB3YXRjaE1vdmllKG1vdmllLnRpdGxlLCBtb3ZpZS5pZCwgbW92aWUuYmFja2Ryb3BfcGF0aCkgOiB3YXRjaFNlcmllcyhtb3ZpZS5uYW1lLCBtb3ZpZS5pZCwgbW92aWUuYmFja2Ryb3BfcGF0aCk7XG4gICAgICB9KTtcblxuICAgICAgZGVsZXRlRnJvbUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZUZyb21NeUxpc3QoaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIG1vdmllSW5mby5hcHBlbmQobW92aWVPdmVydmlldywgbW92aWVSZWxlYXNlRGF0ZSwgbW92aWVSYXRpbmcpO1xuICAgICAgYnRuV3JhcHBlci5hcHBlbmQod2F0Y2hCdG4sIGRlbGV0ZUZyb21MaXN0QnRuKTtcbiAgICAgIG1vdmllQ2FyZC5hcHBlbmQobW92aWVJbWFnZSwgbW92aWVJbmZvLCBidG5XcmFwcGVyKTtcbiAgICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZChtb3ZpZUNhcmQpO1xuICAgICAgYXBwLmFwcGVuZChtb3ZpZUNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cblxuZGlzcGxheU15TGlzdCgpOyAvLyBpbml0aWFsaXplIG15IGxpc3QgY29udGVudHNcbiIsImltcG9ydCB7IGdldE5vd1BsYXlpbmdNb3ZpZXMgfSBmcm9tIFwiLi9nZXROb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgZGlzcGxheU1vdmllcyBmcm9tIFwiLi9kaXNwbGF5TW92aWVzLmpzXCI7XG5cbi8vIHRoaXMgd2lsbCBkaXNwbGF5IHRoZSBjdXJyZW50IHBvcHVsYXIgbW92aWVzIG9uIHBhZ2UgbG9hZCBhbmQgaXMgc2V0IGFzXG4vLyBkZWZhdWx0IGxhbmRpbmcgcGFnZVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgbm93UGxheWluZ01vdmllcyA9IGF3YWl0IGdldE5vd1BsYXlpbmdNb3ZpZXMoKTtcbiAgICBkaXNwbGF5TW92aWVzKG5vd1BsYXlpbmdNb3ZpZXMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgZ2V0UG9wdWxhclNlcmllcyBmcm9tIFwiLi9nZXRQb3B1bGFyU2VyaWVzLmpzXCI7XG5pbXBvcnQgZGlzcGxheVNlcmllcyBmcm9tIFwiLi9kaXNwbGF5U2VyaWVzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlQb3B1bGFyU2VyaWVzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBub3dQbGF5aW5nTW92aWVzID0gYXdhaXQgZ2V0UG9wdWxhclNlcmllcygpO1xuICAgICAgZGlzcGxheVNlcmllcyhub3dQbGF5aW5nTW92aWVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9IiwiaW1wb3J0IHdhdGNoU2VyaWVzIGZyb20gJy4vd2F0Y2hTZXJpZXMuanMnO1xuaW1wb3J0IGRpc3BsYXlQb3B1bGFyU2VyaWVzIGZyb20gJy4vZGlzcGxheVBvcHVsYXJTZXJpZXMuanMnO1xuaW1wb3J0IHsgaW5jcmVtZW50UGFnZSwgZGVjcmVtZW50UGFnZSB9IGZyb20gJy4vZGlzcGxheUN1cnJlbnRQYWdlLmpzJztcbmltcG9ydCBhZGRUb015TGlzdCBmcm9tICcuL2FkZFRvTXlMaXN0LmpzJztcblxuLy8gaSBqdXN0IGNvcGllZCB0aGUgZW50aXJlIGZ1bmN0aW9uIGZyb20gZGlzcGxheU1vdmllcyBiZWNhdXNlXG4vLyBUViBzZXJpZXMgaGFzIGRpZmZlcmVudCBwcm9wZXJ0eSBmb3IgdGhlIHRpdGxlLCBpbnN0ZWFkIGl0IHVzZXMgJ25hbWUnIGFuZFxuLy8gaSBkb24ndCBrbm93IGhvdyB0byBjaGFuZ2UgdGhlIG1vdmllLnRpdGxlIHRvIG1vdmllLm5hbWUgd2hlbiBxdWVyeWluZyBmb3Jcbi8vIFRWIHNlcmllcyA6KVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheVNlcmllcyhtb3ZpZXMpIHtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApOyAvL3Njcm9sbHMgdGhlIHBhZ2UgdG8gdG9wIHdoZW4gbmV4dCBidXR0b24gaXMgY2xpY2tlZFxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJhc2VJbWdVUkwgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvXCI7XG4gIFxuICAgICAgLy8gQ2xlYXIgcHJldmlvdXMgY29udGVudFxuICAgICAgYXBwLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBtb3ZpZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgIGNvbnN0IHByZXZpb3VzUGFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgbmV4dFBhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgbW92aWVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1jb250YWluZXInKTtcbiAgICAgIHByZXZpb3VzUGFnZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGV2cm9uLWxlZnRcIj48L2k+J1xuICAgICAgbmV4dFBhZ2VCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4nO1xuICAgICAgcHJldmlvdXNQYWdlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJldmlvdXMtcGFnZS1idG4nKVxuICAgICAgbmV4dFBhZ2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXh0LXBhZ2UtYnRuJylcblxuICAgICAgbmV4dFBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaW5jcmVtZW50UGFnZSgpO1xuICAgICAgICBkaXNwbGF5UG9wdWxhclNlcmllcygpO1xuICAgICAgfSk7XG4gIFxuICAgICAgcHJldmlvdXNQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRlY3JlbWVudFBhZ2UoKTtcbiAgICAgICAgZGlzcGxheVBvcHVsYXJTZXJpZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgICBtb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgICAgY29uc3QgbW92aWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHdhdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgYWRkVG9MaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG1vdmllSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBjb25zdCBtb3ZpZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBtb3ZpZU92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBtb3ZpZVJlbGVhc2VEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBtb3ZpZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1pbmZvJyk7XG4gICAgICAgIG1vdmllSW5mby5pbm5lckhUTUwgPSBgPGgxPiR7bW92aWUubmFtZX08L2gxPmA7XG4gICAgICAgIG1vdmllT3ZlcnZpZXcudGV4dENvbnRlbnQgPSBgJHttb3ZpZS5vdmVydmlld31gO1xuICAgICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPiAgOiAgJHtNYXRoLmZsb29yKG1vdmllLnZvdGVfYXZlcmFnZSl9IC8gMTBgO1xuICAgICAgICBtb3ZpZVJlbGVhc2VEYXRlLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLWRheXNcIj48L2k+ICA6ICAke21vdmllLmZpcnN0X2Fpcl9kYXRlfWA7XG4gICAgICAgIG1vdmllSW1hZ2Uuc3JjID0gYCR7YmFzZUltZ1VSTH0ke21vdmllLnBvc3Rlcl9wYXRofWA7XG4gICAgICAgIG1vdmllQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWNhcmQnKVxuICAgICAgICBidG5XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uLXdyYXBwZXInKTtcbiAgICAgICAgd2F0Y2hCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGxheVwiPjwvaT5gO1xuICAgICAgICB3YXRjaEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dhdGNoLWJ1dHRvbicpO1xuICAgICAgICBhZGRUb0xpc3RCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtaGVhcnRcIj48L2k+J1xuICAgICAgICBhZGRUb0xpc3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdG8tbGlzdC1idXR0b24nKTtcbiAgICAgICAgXG4gICAgICAgIHdhdGNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgYXBwLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgIHdhdGNoU2VyaWVzKG1vdmllLm5hbWUsIG1vdmllLmlkLCBtb3ZpZS5iYWNrZHJvcF9wYXRoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkVG9MaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gbW92aWUudGl0bGUgPyBtb3ZpZS50aXRsZSA6IG1vdmllLm5hbWU7IC8vY2hlY2tzIGlmIHRoZSBlbGVtZW50IGlzIGEgXCJtb3ZpZVwiIG9yIFwidHZcIlxuICAgICAgICAgIGFkZFRvTXlMaXN0KHttb3ZpZSwgdGl0bGU6IGl0ZW1UaXRsZSwgdHlwZTogXCJ0dlwifSk7IFxuICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtb3ZpZUluZm8uYXBwZW5kKG1vdmllT3ZlcnZpZXcsIG1vdmllUmVsZWFzZURhdGUsIG1vdmllUmF0aW5nKTtcbiAgICAgICAgYnRuV3JhcHBlci5hcHBlbmQod2F0Y2hCdG4sIGFkZFRvTGlzdEJ0bik7XG4gICAgICAgIG1vdmllQ2FyZC5hcHBlbmQobW92aWVJbWFnZSwgYnRuV3JhcHBlciwgbW92aWVJbmZvKTtcbiAgICAgICAgbW92aWVDb250YWluZXIuYXBwZW5kKG1vdmllQ2FyZCwgbmV4dFBhZ2VCdG4sIHByZXZpb3VzUGFnZUJ0bilcbiAgICAgICAgYXBwLmFwcGVuZChtb3ZpZUNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlDdXJyZW50UGFnZS5qc1wiO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBtZXRob2Q6IFwiR0VUXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIEF1dGhvcml6YXRpb246XG4gICAgICBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlKOS5leUpoZFdRaU9pSm1PVGt3TUdJd1ptVmhaalpqWmpWa01qazBNRGMxWWpBeE5EUmtNbVppWVNJc0luTjFZaUk2SWpZMk1UQTRORFExTldJek56QmtNREUzTURZek16RmpOU0lzSW5OamIzQmxjeUk2V3lKaGNHbGZjbVZoWkNKZExDSjJaWEp6YVc5dUlqb3hmUS5yMlY4T3J1OXhhQXU0SkxRUFp3X25xdl9sVlVMd2EtWlBmcThydVFId3ZnXCIsXG4gIH0sXG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXROb3dQbGF5aW5nTW92aWVzKCkge1xuICBsZXQgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50UGFnZSgpO1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuICBcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/bGFuZ3VhZ2U9ZW4tVVMmcGFnZT0ke2N1cnJlbnRQYWdlfWAsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcGFnZS50ZXh0Q29udGVudCA9IGBQYWdlICR7Y3VycmVudFBhZ2V9IG9mICR7ZGF0YS50b3RhbF9wYWdlc31gO1xuICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBhbiBlcnJvclxuICB9XG59XG5cbmV4cG9ydCB7IG9wdGlvbnMsIGdldE5vd1BsYXlpbmdNb3ZpZXMgfTtcbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi9nZXROb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50UGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlDdXJyZW50UGFnZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRQb3B1bGFyU2VyaWVzKCkgeyAvL2ZldGNoIG5vdyBwbGF5aW5nIG1vdmllc1xuICBsZXQgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50UGFnZSgpO1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2L3RvcF9yYXRlZD9sYW5ndWFnZT1lbi1VUyZwYWdlPSR7Y3VycmVudFBhZ2V9YCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBwYWdlLnRleHRDb250ZW50ID0gYFBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgJHtkYXRhLnRvdGFsX3BhZ2VzfWA7XG4gICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBhbiBlcnJvclxuICAgICAgfVxuICAgIH0iLCJpbXBvcnQgJy4uL2ludHJvLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludHJvKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG5cbiAgICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ29UZXh0LmNsYXNzTmFtZSA9ICd0eHQnO1xuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gJ1lFTkdGTElYJztcblxuICAgIG1vZGFsLmFwcGVuZChsb2dvVGV4dCk7XG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xvc2UoKVxuICAgIH0gLDMwMDApXG59IiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuL2dldE5vd1BsYXlpbmdNb3ZpZXNcIjtcbmltcG9ydCB7IHNlYXJjaE1vdmllSW5wdXQgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gXCIuL2Rpc3BsYXlNb3ZpZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoTW92aWUoKSB7XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzZWFyY2hNb3ZpZUlucHV0LnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/cXVlcnk9JHtzZWFyY2hRdWVyeX0maW5jbHVkZV9hZHVsdD1mYWxzZSZsYW5ndWFnZT1lbi1VUyZwYWdlPTFgLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHRzKVxuICAgICAgZGlzcGxheU1vdmllcyhzZWFyY2hSZXN1bHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9IiwiaW1wb3J0IHsgc2VhcmNoTW92aWVJbnB1dCB9IGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi9nZXROb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgZGlzcGxheVNlcmllcyBmcm9tICcuL2Rpc3BsYXlTZXJpZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hTZXJpZXMoKSB7XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzZWFyY2hNb3ZpZUlucHV0LnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvdHY/cXVlcnk9JHtzZWFyY2hRdWVyeX0maW5jbHVkZV9hZHVsdD1mYWxzZSZsYW5ndWFnZT1lbi1VUyZwYWdlPTFgLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHRzKVxuICAgICAgZGlzcGxheVNlcmllcyhzZWFyY2hSZXN1bHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9IiwiaW1wb3J0IGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzIGZyb20gXCIuL2Rpc3BsYXlOb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHdhdGNoTW92aWUobW92aWVUaXRsZSwgbW92aWVJRCwgcG9zdGVyUGF0aCkge1xuICBjb25zdCB0aXRsZUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZVwiKTtcbiAgdGl0bGVIZWFkZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgYmFzZUltZ1VSTCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvXCI7XG4gIGxldCBzZXJ2ZXIgPSAnaHR0cHM6Ly92aWRzcmMueHl6L2VtYmVkL21vdmllLyc7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpZnJhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgcG9zdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3Qgc2VydmVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlcnZlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzZXJ2ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBzZXJ2ZXIxLnRleHRDb250ZW50ID0gJ1NlcnZlciAxJztcbiAgICBzZXJ2ZXIxLmNsYXNzTmFtZSA9ICdzZXJ2ZXIxJztcbiAgICBzZXJ2ZXIyLnRleHRDb250ZW50ID0gJ1NlcnZlciAyJztcbiAgICBzZXJ2ZXIyLmNsYXNzTmFtZSA9ICdzZXJ2ZXIyJztcbiAgICBzZXJ2ZXJXcmFwcGVyLmNsYXNzTmFtZSA9ICdzZXJ2ZXItd3JhcHBlcic7XG4gICAgcG9zdGVyLnNyYyA9IGAke2Jhc2VJbWdVUkx9JHtwb3N0ZXJQYXRofWA7XG4gICAgcG9zdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9zdGVyJylcbiAgICBpZnJhbWVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdpZnJhbWUtY29udGFpbmVyJylcbiAgICBiYWNrQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWxlZnQtbG9uZ1wiPjwvaT4nO1xuICAgIGlmcmFtZS5zcmMgPSBgJHtzZXJ2ZXJ9JHttb3ZpZUlEfWA7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93ZnVsbHNjcmVlblwiLCBcInRydWVcIik7XG5cbiAgICB0aXRsZUhlYWRlci50ZXh0Q29udGVudCA9IG1vdmllVGl0bGU7XG4gICAgc2VydmVyV3JhcHBlci5hcHBlbmQoYmFja0J0biwgc2VydmVyMSwgc2VydmVyMik7XG4gICAgaWZyYW1lQ29udGFpbmVyLmFwcGVuZChpZnJhbWUsIHBvc3Rlciwgc2VydmVyV3JhcHBlcik7XG4gICAgYXBwLmFwcGVuZChpZnJhbWVDb250YWluZXIpO1xuXG4gICAgc2VydmVyMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHNlcnZlciA9ICdodHRwczovL3ZpZHNyYy54eXovZW1iZWQvbW92aWUvJztcbiAgICAgIGlmcmFtZS5zcmMgPSBgJHtzZXJ2ZXJ9JHttb3ZpZUlEfWA7XG4gICAgfSlcblxuICAgIHNlcnZlcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzZXJ2ZXIgPSAnaHR0cHM6Ly8yZW1iZWQub3JnL2VtYmVkL21vdmllLyc7XG4gICAgICBpZnJhbWUuc3JjID0gYCR7c2VydmVyfSR7bW92aWVJRH1gO1xuICAgIH0pO1xuXG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYXBwLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgZGlzcGxheVBvcHVsYXJTZXJpZXMgZnJvbSAnLi9kaXNwbGF5UG9wdWxhclNlcmllcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHdhdGNoU2VyaWVzKG1vdmllVGl0bGUsIG1vdmllSUQsIHBvc3RlclBhdGgpIHtcbiAgY29uc3QgdGl0bGVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VcIik7XG4gIHRpdGxlSGVhZGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGJhc2VJbWdVUkwgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsL1wiO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgaWZyYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHBvc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgcG9zdGVyLnNyYyA9IGAke2Jhc2VJbWdVUkx9JHtwb3N0ZXJQYXRofWA7XG4gICAgcG9zdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9zdGVyJylcbiAgICBpZnJhbWVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdpZnJhbWUtY29udGFpbmVyJylcbiAgICBiYWNrQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXJpZ2h0LWZyb20tYnJhY2tldFwiPjwvaT4nO1xuICAgIGlmcmFtZS5zcmMgPSBgaHR0cHM6Ly92aWRzcmMueHl6L2VtYmVkL3R2LyR7bW92aWVJRH1gO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwgXCJ0cnVlXCIpO1xuXG4gICAgdGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBtb3ZpZVRpdGxlO1xuICAgIGlmcmFtZUNvbnRhaW5lci5hcHBlbmQoaWZyYW1lLCBiYWNrQnRuLCBwb3N0ZXIpO1xuICAgIGFwcC5hcHBlbmQoaWZyYW1lQ29udGFpbmVyKTtcbiAgXG4gICAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBkaXNwbGF5UG9wdWxhclNlcmllcygpOyBcbiAgICAgIH0pO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==