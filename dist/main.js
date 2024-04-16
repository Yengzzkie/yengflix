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
        visibility: hidden;
        position: absolute;
        font-size: .8rem;
        color: rgb(140, 140, 140);
        right: 8%;
        top: 50%;
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

    button:hover, button:active {
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
  /* height: 50px; */
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
        color: var(--red-background)
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
    padding: 10px;
    transform: rotate(180deg);
    transition: transform 0.3s linear;
    cursor: pointer;
  }

  button:hover {
    transform: rotate(180deg) scale(1.1);
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
    /* transform: translateY(-100%); */
    /* background: linear-gradient(
      90deg,
      rgb(29, 29, 29),
      rgba(29, 29, 29, 0.95),
      rgba(29, 29, 29, 0.85),
      rgba(29, 29, 29, 0.65)
    ); */
    /* backdrop-filter: blur(5px); */
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
      /* flex-direction: column; */
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 2rem;
      /* margin: 50px 0; */

      li {
        margin-bottom: 25px;

        span {
          display: none;
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
    /* transform: translateY(0); */
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
        color: var(--red-background)
      }
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\n:root {\n  --light-background: linear-gradient(\n    135deg,\n    rgb(0, 208, 255),\n    rgb(89, 219, 248),\n    rgb(174, 234, 248)\n  );\n  --dark-background: linear-gradient(135deg, rgb(35 35 35), rgb(54 54 54));\n  --dropshadow: 1px 1px 2px rgba(162, 162, 162, 0.511);\n  --red-background: hsl(0, 100%, 50%);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: auto;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif, Arial, Helvetica;\n  font-weight: 100;\n  font-style: normal;\n  height: 100%;\n  min-height: 100vh;\n  width: 100%;\n}\n\n#app {\n  background: var(--dark-background);\n  height: 100%;\n  min-height: 100vh;\n\n  h2 {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #fff;\n    width: 100%;\n    margin: auto;\n  }\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  background: rgb(29 29 29);\n  font-weight: 300;\n  height: 100px;\n  padding: 0 2rem;\n\n  #logo {\n    position: relative;\n    letter-spacing: 1.2px;\n    color: var(--red-background);\n  }\n\n  #logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: \"\";\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  nav {\n    width: 100%;\n    margin-left: 10px;\n    padding: 0 1rem;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n\n    li {\n      position: relative;\n      color: #fff;\n      margin-right: 1rem;\n      cursor: pointer;\n    }\n\n    li:after {\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      background: #fff;\n      height: 1px;\n      width: 0;\n      transition: width 0.2s linear;\n    }\n\n    li:hover::after {\n      width: 100%;\n    }\n  }\n\n  #input-wrapper {\n    position: absolute;\n    display: flex;\n    right: 2%;\n\n    div {\n      position: relative;\n      height: auto;\n      width: auto;\n\n      input {\n        border: none;\n        border-radius: 5px;\n        width: 200px;\n        padding: 5px;\n        margin-right: 5px;\n      }\n\n      input:not(:placeholder-shown):valid ~ span {\n        visibility: visible;\n      }\n\n      span {\n        visibility: hidden;\n        position: absolute;\n        font-size: .8rem;\n        color: rgb(140, 140, 140);\n        right: 8%;\n        top: 50%;\n        transform: translateY(-50%);\n        cursor: pointer;\n      }\n    }\n\n    button {\n      border: none;\n      border-radius: 5px;\n      padding: 5px;\n      width: 150px;\n      margin-right: 5px;\n      cursor: pointer;\n    }\n\n    button:hover, button:active {\n      color: #fff;\n      background: var(--red-background);\n    }\n  }\n}\n\n#hamburger {\n  display: none;\n}\n\n#mobile-logo {\n  display: none;\n}\n\n#previous-page-btn,\n#next-page-btn {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  background: #c2c2c2aa;\n  color: #fff;\n  font-size: 2rem;\n  border: none;\n  /* height: 50px; */\n  padding: 10px 8px;\n  z-index: 9999;\n  cursor: pointer;\n  transition: all 0.1s linear;\n}\n\n#previous-page-btn:hover,\n#next-page-btn:hover {\n  background: #d6d6d6c8;\n  color: var(--red-background);\n  transform: translateY(-50%);\n}\n\n#previous-page-btn {\n  left: 2%;\n}\n\n#next-page-btn {\n  right: 2%;\n}\n\n#page {\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n#movie-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));\n  justify-content: center;\n  gap: 20px;\n  height: 100%;\n  padding: 1rem 1rem 4rem 1rem;\n\n  #movie-card {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    border: 3px solid #fff;\n    border-radius: 15px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    transition: transform 0.8s ease;\n\n    #movie-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, 0.614);\n      color: #fff;\n      width: 100%;\n      padding: 20px 10px;\n      overflow-x: hidden; /* Hide horizontal scrollbar */\n      overflow-y: auto; /* Enable vertical scrollbar */\n      transform: translateY(100%);\n      transition: transform 0.8s ease;\n\n      i {\n        color: var(--red-background)\n      }\n    }\n\n    #movie-info::-webkit-scrollbar {\n      display: none; /* Hide scrollbar for WebKit browsers */\n    }\n\n    h1 {\n      color: #fff;\n      font-weight: 300;\n    }\n\n    img {\n      width: 100%;\n      transition: filter 0.5s ease;\n    }\n\n    #button-wrapper {\n      position: absolute;\n      display: flex;\n      flex-direction: column;\n      top: 2%;\n      right: 2%;\n      z-index: 9999;\n\n      button {\n        background: orange;\n        color: rgba(50, 50, 50, 0.881);\n        width: 35px;\n        height: 35px;\n        border-radius: 50%;\n        border: none;\n        margin: 5px;\n        box-shadow: 1px 1px 2px rgba(152, 152, 152, 0.891),\n          -1px -1px 2px rgba(255, 255, 255, 0.882);\n        transition: transform 0.5s ease;\n        cursor: pointer;\n        z-index: 999;\n      }\n\n      button:hover {\n        color: var(--red-background);\n        transform: scale(1.2);\n      }\n\n      #watch-button {\n        top: 5%;\n        right: 5%;\n      }\n\n      #add-to-list-button {\n        top: 15%;\n        right: 5%;\n      }\n\n      #delete-from-list {\n        top: 15%;\n        right: 5%;\n      }\n    }\n\n    p {\n      visibility: hidden;\n    }\n  }\n\n  #movie-card:hover {\n    transform: scale(1.03);\n  }\n\n  #movie-card:hover img {\n    filter: blur(3px);\n  }\n\n  #movie-card:hover #movie-info {\n    transform: translateY(0%);\n    height: 100%;\n\n    p {\n      margin-top: 1rem;\n      visibility: visible;\n    }\n  }\n}\n\n#iframe-container {\n  position: relative;\n  height: 100%;\n\n  button {\n    position: absolute;\n    top: 1%;\n    right: 2%;\n    background: orange;\n    color: #fff;\n    font-size: 2rem;\n    border: none;\n    padding: 10px;\n    transform: rotate(180deg);\n    transition: transform 0.3s linear;\n    cursor: pointer;\n  }\n\n  button:hover {\n    transform: rotate(180deg) scale(1.1);\n    color: var(--red-background);\n  }\n\n  #poster {\n    width: 100%;\n  }\n}\n\niframe {\n  width: 100%;\n  height: 600px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  padding: 10px;\n  z-index: 9999;\n}\n\n@media screen and (max-width: 1024px) {\n  header {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    bottom: 0;\n    left: 0;\n    border-top: 3px solid #fff;\n    border-radius: 5px 5px 0 0;\n    /* transform: translateY(-100%); */\n    /* background: linear-gradient(\n      90deg,\n      rgb(29, 29, 29),\n      rgba(29, 29, 29, 0.95),\n      rgba(29, 29, 29, 0.85),\n      rgba(29, 29, 29, 0.65)\n    ); */\n    /* backdrop-filter: blur(5px); */\n    height: 60px;\n    width: 100vw;\n    padding: 1rem 0;\n    z-index: 99999;\n    transition: height 0.3s linear;\n\n    #logo {\n      display: none;\n      margin: none;\n    }\n\n    ul {\n      /* flex-direction: column; */\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      padding: 0 2rem;\n      /* margin: 50px 0; */\n\n      li {\n        margin-bottom: 25px;\n\n        span {\n          display: none;\n        }\n\n        i:hover {\n          color: var(--red-background);\n        }\n      }\n    }\n\n    #input-wrapper {\n      position: unset;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 200px;\n      margin: 20px;\n\n      input {\n        width: 100%;\n      }\n\n      button {\n        width: 150px;\n        margin-top: 10px;\n      }\n    }\n  }\n\n  header.active {\n    background: linear-gradient(\n      rgb(29, 29, 29),\n      rgba(29, 29, 29, 0.95),\n      rgba(29, 29, 29, 0.85),\n      rgba(29, 29, 29, 0.65)\n    );\n    backdrop-filter: blur(5px);\n    height: 250px;\n    /* transform: translateY(0); */\n  }\n\n  #hamburger {\n    display: block;\n    position: fixed; /* Change 'fixed' to 'absolute' */\n    top: 3%;\n    right: 5%;\n    background: transparent;\n    color: white;\n    font-size: 1.8rem;\n    border: none;\n    cursor: pointer;\n    z-index: 999999;\n  }\n\n  #mobile-logo {\n    position: relative;\n    display: block;\n    background: rgb(29 29 29);\n    color: var(--red-background);\n    padding: 1rem;\n  }\n\n  #mobile-logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: \"\";\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  #movie-container {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 150px));\n\n    #movie-card {\n      button {\n        width: 35px;\n        height: 35px;\n      }\n    }\n  }\n\n  #movie-info {\n    h1 {\n      font-size: 1rem;\n    }\n\n    p {\n      font-size: 0.8rem;\n\n      i {\n        color: var(--red-background)\n      }\n    }\n  }\n\n  #iframe-container {\n    button {\n      font-size: 1rem;\n    }\n\n    iframe {\n      height: 300px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_displayMyList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/displayMyList.js */ "./src/modules/displayMyList.js");









const searchMovieInput = document.getElementById('search-query');
const searchMovieBtn = document.getElementById('search-movie-btn');
const searchSeriesBtn = document.getElementById('search-series-btn');
const homeBtn = document.getElementById('home-btn');
const tvSeriesBtn = document.getElementById('tv-series-btn');
const myListBtn = document.getElementById('my-list');
const nowPlayingMoviesBtn = document.getElementById('popular-movies-btn');
const hamburger = document.getElementById('hamburger');
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
hamburger.addEventListener('click', () => { // eventlistener for toggling the hamburger menu
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

;(0,_modules_displayNowPlayingMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // initilize the list of now playing movies on page load




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUMzTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLEtBQUssWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLHlCQUF5Qix5QkFBeUIsYUFBYSxjQUFjLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLFlBQVksS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxhQUFhLE1BQU0sYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxz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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsV0FBVyxFQUFFLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLHVFQUF1QjtBQUM3QixLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9CNkQ7O0FBRTlDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFdBQVcsRUFBRSxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxRQUFRO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQW9CO0FBQzVCLE9BQU87O0FBRVAsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2FkZFRvTXlMaXN0LmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2RlbGV0ZUZyb21NeUxpc3QuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZGlzcGxheUN1cnJlbnRQYWdlLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZGlzcGxheU15TGlzdC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Tm93UGxheWluZ01vdmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5UG9wdWxhclNlcmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5U2VyaWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2dldE5vd1BsYXlpbmdNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZ2V0UG9wdWxhclNlcmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9zZWFyY2hNb3ZpZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9zZWFyY2hTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvd2F0Y2hNb3ZpZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy93YXRjaFNlcmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHJnYigwLCAyMDgsIDI1NSksXG4gICAgcmdiKDg5LCAyMTksIDI0OCksXG4gICAgcmdiKDE3NCwgMjM0LCAyNDgpXG4gICk7XG4gIC0tZGFyay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzUgMzUgMzUpLCByZ2IoNTQgNTQgNTQpKTtcbiAgLS1kcm9wc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE2MiwgMTYyLCAxNjIsIDAuNTExKTtcbiAgLS1yZWQtYmFja2dyb3VuZDogaHNsKDAsIDEwMCUsIDUwJSk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNhcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMCAycmVtO1xuXG4gICNsb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XG4gIH1cblxuICAjbG9nbzo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUlO1xuICB9XG5cbiAgbmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cblxuICB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgbGk6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBsaW5lYXI7XG4gICAgfVxuXG4gICAgbGk6aG92ZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICNpbnB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICByaWdodDogMiU7XG5cbiAgICBkaXYge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IGF1dG87XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6dmFsaWQgfiBzcGFuIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICBjb2xvcjogcmdiKDE0MCwgMTQwLCAxNDApO1xuICAgICAgICByaWdodDogOCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgYnV0dG9uOmhvdmVyLCBidXR0b246YWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxufVxuXG4jaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI21vYmlsZS1sb2dvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3ByZXZpb3VzLXBhZ2UtYnRuLFxuI25leHQtcGFnZS1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6ICNjMmMyYzJhYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICAvKiBoZWlnaHQ6IDUwcHg7ICovXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbn1cblxuI3ByZXZpb3VzLXBhZ2UtYnRuOmhvdmVyLFxuI25leHQtcGFnZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZDZkNmQ2Yzg7XG4gIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI3ByZXZpb3VzLXBhZ2UtYnRuIHtcbiAgbGVmdDogMiU7XG59XG5cbiNuZXh0LXBhZ2UtYnRuIHtcbiAgcmlnaHQ6IDIlO1xufVxuXG4jcGFnZSB7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNtb3ZpZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDMwMHB4KSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDRyZW0gMXJlbTtcblxuICAjbW92aWUtY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2U7XG5cbiAgICAjbW92aWUtaW5mbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYxNCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXG4gICAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBFbmFibGUgdmVydGljYWwgc2Nyb2xsYmFyICovXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKVxuICAgICAgfVxuICAgIH1cblxuICAgICNtb3ZpZS1pbmZvOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIHNjcm9sbGJhciBmb3IgV2ViS2l0IGJyb3dzZXJzICovXG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XG4gICAgfVxuXG4gICAgI2J1dHRvbi13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgdG9wOiAyJTtcbiAgICAgIHJpZ2h0OiAyJTtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICAgICAgY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC44ODEpO1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC44OTEpLFxuICAgICAgICAgIC0xcHggLTFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4Mik7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgfVxuXG4gICAgICBidXR0b246aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICB9XG5cbiAgICAgICN3YXRjaC1idXR0b24ge1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICByaWdodDogNSU7XG4gICAgICB9XG5cbiAgICAgICNhZGQtdG8tbGlzdC1idXR0b24ge1xuICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgcmlnaHQ6IDUlO1xuICAgICAgfVxuXG4gICAgICAjZGVsZXRlLWZyb20tbGlzdCB7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICByaWdodDogNSU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbiAgI21vdmllLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gIH1cblxuICAjbW92aWUtY2FyZDpob3ZlciBpbWcge1xuICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICB9XG5cbiAgI21vdmllLWNhcmQ6aG92ZXIgI21vdmllLWluZm8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cbn1cblxuI2lmcmFtZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcblxuICBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDElO1xuICAgIHJpZ2h0OiAyJTtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgbGluZWFyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgxLjEpO1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XG4gIH1cblxuICAjcG9zdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5pZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA5MGRlZyxcbiAgICAgIHJnYigyOSwgMjksIDI5KSxcbiAgICAgIHJnYmEoMjksIDI5LCAyOSwgMC45NSksXG4gICAgICByZ2JhKDI5LCAyOSwgMjksIDAuODUpLFxuICAgICAgcmdiYSgyOSwgMjksIDI5LCAwLjY1KVxuICAgICk7ICovXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7ICovXG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgbGluZWFyO1xuXG4gICAgI2xvZ28ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIG1hcmdpbjogbm9uZTtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAycmVtO1xuICAgICAgLyogbWFyZ2luOiA1MHB4IDA7ICovXG5cbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICNpbnB1dC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIG1hcmdpbjogMjBweDtcblxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhlYWRlci5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHJnYigyOSwgMjksIDI5KSxcbiAgICAgIHJnYmEoMjksIDI5LCAyOSwgMC45NSksXG4gICAgICByZ2JhKDI5LCAyOSwgMjksIDAuODUpLFxuICAgICAgcmdiYSgyOSwgMjksIDI5LCAwLjY1KVxuICAgICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7ICovXG4gIH1cblxuICAjaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIENoYW5nZSAnZml4ZWQnIHRvICdhYnNvbHV0ZScgKi9cbiAgICB0b3A6IDMlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gIH1cblxuICAjbW9iaWxlLWxvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICNtb2JpbGUtbG9nbzo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUlO1xuICB9XG5cbiAgI21vdmllLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMTUwcHgpKTtcblxuICAgICNtb3ZpZS1jYXJkIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI21vdmllLWluZm8ge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNpZnJhbWUtY29udGFpbmVyIHtcbiAgICBidXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIGlmcmFtZSB7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFOzs7OztHQUtDO0VBQ0Qsd0VBQXdFO0VBQ3hFLG9EQUFvRDtFQUNwRCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlOztFQUVmO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiw0QkFBNEI7RUFD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Zm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDEzNWRlZyxcXG4gICAgcmdiKDAsIDIwOCwgMjU1KSxcXG4gICAgcmdiKDg5LCAyMTksIDI0OCksXFxuICAgIHJnYigxNzQsIDIzNCwgMjQ4KVxcbiAgKTtcXG4gIC0tZGFyay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzUgMzUgMzUpLCByZ2IoNTQgNTQgNTQpKTtcXG4gIC0tZHJvcHNoYWRvdzogMXB4IDFweCAycHggcmdiYSgxNjIsIDE2MiwgMTYyLCAwLjUxMSk7XFxuICAtLXJlZC1iYWNrZ3JvdW5kOiBoc2woMCwgMTAwJSwgNTAlKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmFja2dyb3VuZCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMCAycmVtO1xcblxcbiAgI2xvZ28ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKTtcXG4gIH1cXG5cXG4gICNsb2dvOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICB9XFxuXFxuICB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgIGxpIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBsaTphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBsaW5lYXI7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXI6OmFmdGVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgI2lucHV0LXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHJpZ2h0OiAyJTtcXG5cXG4gICAgZGl2IHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcblxcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKTp2YWxpZCB+IHNwYW4ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICB9XFxuXFxuICAgICAgc3BhbiB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICAgICAgY29sb3I6IHJnYigxNDAsIDE0MCwgMTQwKTtcXG4gICAgICAgIHJpZ2h0OiA4JTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uOmhvdmVyLCBidXR0b246YWN0aXZlIHtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI2hhbWJ1cmdlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbW9iaWxlLWxvZ28ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3ByZXZpb3VzLXBhZ2UtYnRuLFxcbiNuZXh0LXBhZ2UtYnRuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYmFja2dyb3VuZDogI2MyYzJjMmFhO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICAvKiBoZWlnaHQ6IDUwcHg7ICovXFxuICBwYWRkaW5nOiAxMHB4IDhweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XFxufVxcblxcbiNwcmV2aW91cy1wYWdlLWJ0bjpob3ZlcixcXG4jbmV4dC1wYWdlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDZkNmQ2Yzg7XFxuICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4jcHJldmlvdXMtcGFnZS1idG4ge1xcbiAgbGVmdDogMiU7XFxufVxcblxcbiNuZXh0LXBhZ2UtYnRuIHtcXG4gIHJpZ2h0OiAyJTtcXG59XFxuXFxuI3BhZ2Uge1xcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21vdmllLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMzAwcHgpKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtIDRyZW0gMXJlbTtcXG5cXG4gICNtb3ZpZS1jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZTtcXG5cXG4gICAgI21vdmllLWluZm8ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE0KTtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXFxuICAgICAgb3ZlcmZsb3cteTogYXV0bzsgLyogRW5hYmxlIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlO1xcblxcbiAgICAgIGkge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjbW92aWUtaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBXZWJLaXQgYnJvd3NlcnMgKi9cXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgI2J1dHRvbi13cmFwcGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHRvcDogMiU7XFxuICAgICAgcmlnaHQ6IDIlO1xcbiAgICAgIHotaW5kZXg6IDk5OTk7XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuODgxKTtcXG4gICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuODkxKSxcXG4gICAgICAgICAgLTFweCAtMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgyKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB6LWluZGV4OiA5OTk7XFxuICAgICAgfVxcblxcbiAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgIH1cXG5cXG4gICAgICAjd2F0Y2gtYnV0dG9uIHtcXG4gICAgICAgIHRvcDogNSU7XFxuICAgICAgICByaWdodDogNSU7XFxuICAgICAgfVxcblxcbiAgICAgICNhZGQtdG8tbGlzdC1idXR0b24ge1xcbiAgICAgICAgdG9wOiAxNSU7XFxuICAgICAgICByaWdodDogNSU7XFxuICAgICAgfVxcblxcbiAgICAgICNkZWxldGUtZnJvbS1saXN0IHtcXG4gICAgICAgIHRvcDogMTUlO1xcbiAgICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG4gIH1cXG5cXG4gICNtb3ZpZS1jYXJkOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gIH1cXG5cXG4gICNtb3ZpZS1jYXJkOmhvdmVyIGltZyB7XFxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgfVxcblxcbiAgI21vdmllLWNhcmQ6aG92ZXIgI21vdmllLWluZm8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIHAge1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jaWZyYW1lLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMSU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGxpbmVhcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgxLjEpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgI3Bvc3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5pZnJhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgOTBkZWcsXFxuICAgICAgcmdiKDI5LCAyOSwgMjkpLFxcbiAgICAgIHJnYmEoMjksIDI5LCAyOSwgMC45NSksXFxuICAgICAgcmdiYSgyOSwgMjksIDI5LCAwLjg1KSxcXG4gICAgICByZ2JhKDI5LCAyOSwgMjksIDAuNjUpXFxuICAgICk7ICovXFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpOyAqL1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICB6LWluZGV4OiA5OTk5OTtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgbGluZWFyO1xcblxcbiAgICAjbG9nbyB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICBtYXJnaW46IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgdWwge1xcbiAgICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgcGFkZGluZzogMCAycmVtO1xcbiAgICAgIC8qIG1hcmdpbjogNTBweCAwOyAqL1xcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGk6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjaW5wdXQtd3JhcHBlciB7XFxuICAgICAgcG9zaXRpb246IHVuc2V0O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICBtYXJnaW46IDIwcHg7XFxuXFxuICAgICAgaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgfVxcblxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgaGVhZGVyLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICByZ2IoMjksIDI5LCAyOSksXFxuICAgICAgcmdiYSgyOSwgMjksIDI5LCAwLjk1KSxcXG4gICAgICByZ2JhKDI5LCAyOSwgMjksIDAuODUpLFxcbiAgICAgIHJnYmEoMjksIDI5LCAyOSwgMC42NSlcXG4gICAgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgKi9cXG4gIH1cXG5cXG4gICNoYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBDaGFuZ2UgJ2ZpeGVkJyB0byAnYWJzb2x1dGUnICovXFxuICAgIHRvcDogMyU7XFxuICAgIHJpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiA5OTk5OTk7XFxuICB9XFxuXFxuICAjbW9iaWxlLWxvZ28ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgI21vYmlsZS1sb2dvOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgfVxcblxcbiAgI21vdmllLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDE1MHB4KSk7XFxuXFxuICAgICNtb3ZpZS1jYXJkIHtcXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDM1cHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAjbW92aWUtaW5mbyB7XFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWJhY2tncm91bmQpXFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAjaWZyYW1lLWNvbnRhaW5lciB7XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIGlmcmFtZSB7XFxuICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlOb3dQbGF5aW5nTW92aWVzLmpzJztcbmltcG9ydCBkaXNwbGF5UG9wdWxhclNlcmllcyBmcm9tICcuL21vZHVsZXMvZGlzcGxheVBvcHVsYXJTZXJpZXMuanMnO1xuaW1wb3J0IHNlYXJjaE1vdmllIGZyb20gJy4vbW9kdWxlcy9zZWFyY2hNb3ZpZS5qcyc7XG5pbXBvcnQgc2VhcmNoU2VyaWVzIGZyb20gJy4vbW9kdWxlcy9zZWFyY2hTZXJpZXMuanMnO1xuaW1wb3J0IHsgZ2V0Tm93UGxheWluZ01vdmllcyB9IGZyb20gJy4vbW9kdWxlcy9nZXROb3dQbGF5aW5nTW92aWVzLmpzJztcbmltcG9ydCB7IHJlc2V0Q3VycmVudFBhZ2UgfSBmcm9tICcuL21vZHVsZXMvZGlzcGxheUN1cnJlbnRQYWdlLmpzJztcbmltcG9ydCBkaXNwbGF5TXlMaXN0IGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5TXlMaXN0LmpzJztcblxuY29uc3Qgc2VhcmNoTW92aWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcXVlcnknKTtcbmNvbnN0IHNlYXJjaE1vdmllQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1tb3ZpZS1idG4nKTtcbmNvbnN0IHNlYXJjaFNlcmllc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc2VyaWVzLWJ0bicpO1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWJ0bicpO1xuY29uc3QgdHZTZXJpZXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHYtc2VyaWVzLWJ0bicpO1xuY29uc3QgbXlMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWxpc3QnKTtcbmNvbnN0IG5vd1BsYXlpbmdNb3ZpZXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdWxhci1tb3ZpZXMtYnRuJyk7XG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmNvbnN0IGNsZWFyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItZmllbGQnKTtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLWxvZ28nKVxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4vLyBOQVZJR0FUSU9OIEVWRU5UTElTVEVORVJTXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZXNldEN1cnJlbnRQYWdlKCk7XG4gIGFwcC5pbm5lckhUTUwgPSAnJztcbiAgZ2V0Tm93UGxheWluZ01vdmllcygpO1xuICBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpO1xufSk7XG5cbmxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlc2V0Q3VycmVudFBhZ2UoKTtcbiAgYXBwLmlubmVySFRNTCA9ICcnO1xuICBnZXROb3dQbGF5aW5nTW92aWVzKCk7XG4gIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG59KVxuXG5ub3dQbGF5aW5nTW92aWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMpO1xudHZTZXJpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UG9wdWxhclNlcmllcyk7XG5teUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TXlMaXN0KTtcbnNlYXJjaFNlcmllc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaFNlcmllcyk7IC8vIGV2ZW50bGlzdGVuZXIgZm9yIHNlYXJjaGluZyBxdWVyeSBmb3IgVFYgU2VyaWVzXG5cbi8vIEhBTUJVUkdFUiBFVkVOVExJU1RFTkVSXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vIGV2ZW50bGlzdGVuZXIgZm9yIHRvZ2dsaW5nIHRoZSBoYW1idXJnZXIgbWVudVxuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59KTtcblxuLy8gU0VBUkNIIFFVRVJZIEVWRU5UTElTVEVORVJTXG5zZWFyY2hTZXJpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChzZWFyY2hNb3ZpZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgVFYgc2hvdyB0aXRsZScpO1xuICB9IGVsc2Uge1xuICAgIHNlYXJjaFNlcmllcygpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICB9XG59KTtcblxuc2VhcmNoTW92aWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChzZWFyY2hNb3ZpZUlucHV0LnZhbHVlID09PSAnJykge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgbW92aWUgdGl0bGUnKTtcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hNb3ZpZSgpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICB9XG59KTtcblxuY2xlYXJGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2VhcmNoTW92aWVJbnB1dC52YWx1ZSA9ICcnO1xufSlcblxuZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMoKTsgLy8gaW5pdGlsaXplIHRoZSBsaXN0IG9mIG5vdyBwbGF5aW5nIG1vdmllcyBvbiBwYWdlIGxvYWRcblxuZXhwb3J0IHsgc2VhcmNoTW92aWVJbnB1dCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9NeUxpc3QoeyBtb3ZpZSwgdGl0bGUsIHR5cGUgfSkge1xuICAvLyBSZXRyaWV2ZSBleGlzdGluZyBsaXN0IGZyb20gbG9jYWwgc3RvcmFnZSBvciBpbml0aWFsaXplIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IG15TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TGlzdCcpKSB8fCBbXTtcblxuICAvLyBDaGVjayBpZiBtb3ZpZUlkIGlzIGFscmVhZHkgaW4gdGhlIGxpc3RcbiAgaWYgKCFteUxpc3QuaW5jbHVkZXMobW92aWUpKSB7XG4gICAgLy8gSWYgbm90LCBhZGQgaXQgdG8gdGhlIGxpc3RcbiAgICBteUxpc3QucHVzaCh7XG4gICAgICB0aXRsZSxcbiAgICAgIGlkOiBtb3ZpZS5pZCxcbiAgICAgIG92ZXJ2aWV3OiBtb3ZpZS5vdmVydmlldyxcbiAgICAgIHJlbGVhc2VfZGF0ZTogbW92aWUucmVsZWFzZV9kYXRlLFxuICAgICAgdm90ZV9hdmVyYWdlOiBtb3ZpZS52b3RlX2F2ZXJhZ2UsXG4gICAgICBwb3N0ZXI6IG1vdmllLnBvc3Rlcl9wYXRoLFxuICAgICAgdHlwZSxcbiAgICB9KTtcblxuICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgbGlzdCBiYWNrIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlMaXN0JywgSlNPTi5zdHJpbmdpZnkobXlMaXN0KSk7XG5cbiAgICBhbGVydCgnTW92aWUgYWRkZWQgdG8geW91ciBsaXN0IScpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdUaGlzIG1vdmllIGlzIGFscmVhZHkgaW4geW91ciBsaXN0IScpO1xuICB9XG59XG4iLCJpbXBvcnQgZGlzcGxheU15TGlzdCBmcm9tICcuL2Rpc3BsYXlNeUxpc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVGcm9tTXlMaXN0KGluZGV4KSB7XG4gIGNvbnN0IG15TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TGlzdCcpKSB8fCBbXTtcblxuICBteUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlMaXN0JywgSlNPTi5zdHJpbmdpZnkobXlMaXN0KSk7IC8vIENvcnJlY3RlZDogUGFzc2luZyBteUxpc3QgaW5zdGVhZCBvZiAnbXlMaXN0J1xuICBkaXNwbGF5TXlMaXN0KCk7XG59XG4iLCJsZXQgY3VycmVudFBhZ2UgPSAxO1xuY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG5wYWdlLnRleHRDb250ZW50ID0gYFBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgYDtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XG4gIHJldHVybiBjdXJyZW50UGFnZTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50UGFnZSgpIHtcbiAgY3VycmVudFBhZ2UrKztcbn1cblxuZnVuY3Rpb24gZGVjcmVtZW50UGFnZSgpIHtcbiAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xuICAgIGN1cnJlbnRQYWdlLS07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRDdXJyZW50UGFnZSgpIHtcbiAgY3VycmVudFBhZ2UgPSAxO1xufVxuXG5leHBvcnQge1xuIGN1cnJlbnRQYWdlLCBnZXRDdXJyZW50UGFnZSwgaW5jcmVtZW50UGFnZSwgZGVjcmVtZW50UGFnZSwgcmVzZXRDdXJyZW50UGFnZSBcbn07XG4iLCJpbXBvcnQgd2F0Y2hNb3ZpZSBmcm9tICcuL3dhdGNoTW92aWUuanMnO1xuaW1wb3J0IGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzIGZyb20gJy4vZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMuanMnO1xuaW1wb3J0IHsgaW5jcmVtZW50UGFnZSwgZGVjcmVtZW50UGFnZSB9IGZyb20gJy4vZGlzcGxheUN1cnJlbnRQYWdlLmpzJztcbmltcG9ydCBhZGRUb015TGlzdCBmcm9tICcuL2FkZFRvTXlMaXN0LmpzJztcblxuLy8gdGhpcyBpcyB0aGUgbWFpbiBmdW5jdGlvbiBpbiBkaXNwbGF5aW5nIHRoZSBtb3ZpZXMgbWF5IGl0IGJlIHRoZVxuLy8gJ1BvcHVsYXInIG9yICdTZWFyY2hlZCcgbW92aWVzIGJ5IHVzZXJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlNb3ZpZXMobW92aWVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYmFzZUltZ1VSTCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyc7XG5cbiAgICAvLyBDbGVhciBwcmV2aW91cyBjb250ZW50XG4gICAgYXBwLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHByZXZpb3VzUGFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5leHRQYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBtb3ZpZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWNvbnRhaW5lcicpO1xuICAgIHByZXZpb3VzUGFnZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGV2cm9uLWxlZnRcIj48L2k+JztcbiAgICBuZXh0UGFnZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPic7XG4gICAgcHJldmlvdXNQYWdlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJldmlvdXMtcGFnZS1idG4nKTtcbiAgICBuZXh0UGFnZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25leHQtcGFnZS1idG4nKTtcblxuICAgIG5leHRQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaW5jcmVtZW50UGFnZSgpO1xuICAgICAgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMoKTtcbiAgICB9KTtcblxuICAgIHByZXZpb3VzUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlY3JlbWVudFBhZ2UoKTtcbiAgICAgIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG4gICAgfSk7XG5cbiAgICBtb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgIGNvbnN0IG1vdmllQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3Qgd2F0Y2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IGFkZFRvTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgbW92aWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgY29uc3QgbW92aWVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBtb3ZpZU92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3QgbW92aWVSZWxlYXNlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IG1vdmllUmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICBtb3ZpZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1pbmZvJyk7XG4gICAgICBtb3ZpZUluZm8uaW5uZXJIVE1MID0gYDxoMT4ke21vdmllLnRpdGxlfTwvaDE+YDtcbiAgICAgIG1vdmllT3ZlcnZpZXcudGV4dENvbnRlbnQgPSBgJHttb3ZpZS5vdmVydmlld31gO1xuICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT4gIDogICR7TWF0aC5mbG9vcihtb3ZpZS52b3RlX2F2ZXJhZ2UpfSAvIDEwYDtcbiAgICAgIG1vdmllUmVsZWFzZURhdGUuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2FsZW5kYXItZGF5c1wiPjwvaT4gIDogICR7bW92aWUucmVsZWFzZV9kYXRlfWA7XG4gICAgICBtb3ZpZUltYWdlLnNyYyA9IGAke2Jhc2VJbWdVUkx9JHttb3ZpZS5wb3N0ZXJfcGF0aH1gO1xuICAgICAgbW92aWVDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtY2FyZCcpO1xuICAgICAgYnRuV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbi13cmFwcGVyJyk7XG4gICAgICB3YXRjaEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbGF5XCI+PC9pPic7XG4gICAgICB3YXRjaEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dhdGNoLWJ1dHRvbicpO1xuICAgICAgYWRkVG9MaXN0QnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWhlYXJ0XCI+PC9pPic7XG4gICAgICBhZGRUb0xpc3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdG8tbGlzdC1idXR0b24nKTtcblxuICAgICAgd2F0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFwcC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgd2F0Y2hNb3ZpZShtb3ZpZS50aXRsZSwgbW92aWUuaWQsIG1vdmllLmJhY2tkcm9wX3BhdGgpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZFRvTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBtb3ZpZS50aXRsZSA/IG1vdmllLnRpdGxlIDogbW92aWUubmFtZTsgLy8gY2hlY2tzIGlmIHRoZSBlbGVtZW50IGlzIGEgXCJtb3ZpZVwiIG9yIFwidHZcIlxuICAgICAgICBhZGRUb015TGlzdCh7IG1vdmllLCB0aXRsZSwgdHlwZTogJ21vdmllJyB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBtb3ZpZUluZm8uYXBwZW5kKG1vdmllT3ZlcnZpZXcsIG1vdmllUmVsZWFzZURhdGUsIG1vdmllUmF0aW5nKTtcbiAgICAgIGJ0bldyYXBwZXIuYXBwZW5kKHdhdGNoQnRuLCBhZGRUb0xpc3RCdG4pO1xuICAgICAgbW92aWVDYXJkLmFwcGVuZChtb3ZpZUltYWdlLCBidG5XcmFwcGVyLCBtb3ZpZUluZm8pO1xuICAgICAgbW92aWVDb250YWluZXIuYXBwZW5kKG1vdmllQ2FyZCwgbmV4dFBhZ2VCdG4sIHByZXZpb3VzUGFnZUJ0bik7XG4gICAgICBhcHAuYXBwZW5kKG1vdmllQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufVxuIiwiaW1wb3J0IHdhdGNoTW92aWUgZnJvbSAnLi93YXRjaE1vdmllLmpzJztcbmltcG9ydCB3YXRjaFNlcmllcyBmcm9tICcuL3dhdGNoU2VyaWVzLmpzJztcbmltcG9ydCBkZWxldGVGcm9tTXlMaXN0IGZyb20gJy4vZGVsZXRlRnJvbU15TGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlNeUxpc3QoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbXlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlMaXN0JykpIHx8IFtdO1xuICAgIGNvbnN0IGJhc2VJbWdVUkwgPSAnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8nO1xuXG4gICAgYXBwLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG1vdmllQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtY29udGFpbmVyJyk7XG5cbiAgICBpZiAobXlMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZW1wdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGVtcHR5VGV4dC5pbm5lckhUTUwgPSAnWW91ciBsaXN0IGlzIGVtcHR5IDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYnJvb21cIj48L2k+JztcbiAgICAgIGFwcC5hcHBlbmQoZW1wdHlUZXh0KTtcbiAgICB9XG5cbiAgICBteUxpc3QuZm9yRWFjaCgobW92aWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBtb3ZpZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGJ0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHdhdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBkZWxldGVGcm9tTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgbW92aWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgY29uc3QgbW92aWVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBtb3ZpZU92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3QgbW92aWVSZWxlYXNlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IG1vdmllUmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICBtb3ZpZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1pbmZvJyk7XG4gICAgICBtb3ZpZUluZm8uaW5uZXJIVE1MID0gYDxoMT4ke21vdmllLnRpdGxlfTwvaDE+YDtcbiAgICAgIG1vdmllT3ZlcnZpZXcudGV4dENvbnRlbnQgPSBgJHttb3ZpZS5vdmVydmlld31gO1xuICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT4gIDogICR7TWF0aC5mbG9vcihtb3ZpZS52b3RlX2F2ZXJhZ2UpfSAvIDEwYDtcbiAgICAgIG1vdmllUmVsZWFzZURhdGUuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2FsZW5kYXItZGF5c1wiPjwvaT4gIDogICR7bW92aWUucmVsZWFzZV9kYXRlfWA7XG4gICAgICBtb3ZpZUltYWdlLnNyYyA9IGAke2Jhc2VJbWdVUkx9JHttb3ZpZS5wb3N0ZXJ9YDtcbiAgICAgIG1vdmllQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWNhcmQnKTtcbiAgICAgIGJ0bldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdidXR0b24td3JhcHBlcicpO1xuICAgICAgd2F0Y2hCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGxheVwiPjwvaT4nO1xuICAgICAgd2F0Y2hCdG4uc2V0QXR0cmlidXRlKCdpZCcsICd3YXRjaC1idXR0b24nKTtcbiAgICAgIGRlbGV0ZUZyb21MaXN0QnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiPjwvaT4nO1xuICAgICAgZGVsZXRlRnJvbUxpc3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGUtZnJvbS1saXN0Jyk7XG5cblxuICAgICAgd2F0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFwcC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbW92aWUudHlwZSA9PT0gJ21vdmllJyA/IHdhdGNoTW92aWUobW92aWUudGl0bGUsIG1vdmllLmlkLCBtb3ZpZS5iYWNrZHJvcF9wYXRoKSA6IHdhdGNoU2VyaWVzKG1vdmllLm5hbWUsIG1vdmllLmlkLCBtb3ZpZS5iYWNrZHJvcF9wYXRoKTtcbiAgICAgIH0pO1xuXG4gICAgICBkZWxldGVGcm9tTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlRnJvbU15TGlzdChpbmRleCk7XG4gICAgICB9KTtcblxuICAgICAgbW92aWVJbmZvLmFwcGVuZChtb3ZpZU92ZXJ2aWV3LCBtb3ZpZVJlbGVhc2VEYXRlLCBtb3ZpZVJhdGluZyk7XG4gICAgICBidG5XcmFwcGVyLmFwcGVuZCh3YXRjaEJ0biwgZGVsZXRlRnJvbUxpc3RCdG4pO1xuICAgICAgbW92aWVDYXJkLmFwcGVuZChtb3ZpZUltYWdlLCBtb3ZpZUluZm8sIGJ0bldyYXBwZXIpO1xuICAgICAgbW92aWVDb250YWluZXIuYXBwZW5kKG1vdmllQ2FyZCk7XG4gICAgICBhcHAuYXBwZW5kKG1vdmllQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufVxuXG5kaXNwbGF5TXlMaXN0KCk7IC8vIGluaXRpYWxpemUgbXkgbGlzdCBjb250ZW50c1xuIiwiaW1wb3J0IHsgZ2V0Tm93UGxheWluZ01vdmllcyB9IGZyb20gXCIuL2dldE5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gXCIuL2Rpc3BsYXlNb3ZpZXMuanNcIjtcblxuLy8gdGhpcyB3aWxsIGRpc3BsYXkgdGhlIGN1cnJlbnQgcG9wdWxhciBtb3ZpZXMgb24gcGFnZSBsb2FkIGFuZCBpcyBzZXQgYXNcbi8vIGRlZmF1bHQgbGFuZGluZyBwYWdlXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBub3dQbGF5aW5nTW92aWVzID0gYXdhaXQgZ2V0Tm93UGxheWluZ01vdmllcygpO1xuICAgIGRpc3BsYXlNb3ZpZXMobm93UGxheWluZ01vdmllcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRQb3B1bGFyU2VyaWVzIGZyb20gXCIuL2dldFBvcHVsYXJTZXJpZXMuanNcIjtcbmltcG9ydCBkaXNwbGF5U2VyaWVzIGZyb20gXCIuL2Rpc3BsYXlTZXJpZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheVBvcHVsYXJTZXJpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5vd1BsYXlpbmdNb3ZpZXMgPSBhd2FpdCBnZXRQb3B1bGFyU2VyaWVzKCk7XG4gICAgICBkaXNwbGF5U2VyaWVzKG5vd1BsYXlpbmdNb3ZpZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgd2F0Y2hTZXJpZXMgZnJvbSAnLi93YXRjaFNlcmllcy5qcyc7XG5pbXBvcnQgZGlzcGxheVBvcHVsYXJTZXJpZXMgZnJvbSAnLi9kaXNwbGF5UG9wdWxhclNlcmllcy5qcyc7XG5pbXBvcnQgeyBpbmNyZW1lbnRQYWdlLCBkZWNyZW1lbnRQYWdlIH0gZnJvbSAnLi9kaXNwbGF5Q3VycmVudFBhZ2UuanMnO1xuaW1wb3J0IGFkZFRvTXlMaXN0IGZyb20gJy4vYWRkVG9NeUxpc3QuanMnO1xuXG4vLyBpIGp1c3QgY29waWVkIHRoZSBlbnRpcmUgZnVuY3Rpb24gZnJvbSBkaXNwbGF5TW92aWVzIGJlY2F1c2Vcbi8vIFRWIHNlcmllcyBoYXMgZGlmZmVyZW50IHByb3BlcnR5IGZvciB0aGUgdGl0bGUsIGluc3RlYWQgaXQgdXNlcyAnbmFtZScgYW5kXG4vLyBpIGRvbid0IGtub3cgaG93IHRvIGNoYW5nZSB0aGUgbW92aWUudGl0bGUgdG8gbW92aWUubmFtZSB3aGVuIHF1ZXJ5aW5nIGZvclxuLy8gVFYgc2VyaWVzIDopXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5U2VyaWVzKG1vdmllcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNlSW1nVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwL1wiO1xuICBcbiAgICAgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBjb25zdCBwcmV2aW91c1BhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IG5leHRQYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgIG1vdmllQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtY29udGFpbmVyJyk7XG4gICAgICBwcmV2aW91c1BhZ2VCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPidcbiAgICAgIG5leHRQYWdlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JztcbiAgICAgIHByZXZpb3VzUGFnZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXZpb3VzLXBhZ2UtYnRuJylcbiAgICAgIG5leHRQYWdlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dC1wYWdlLWJ0bicpXG5cbiAgICAgIG5leHRQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGluY3JlbWVudFBhZ2UoKTtcbiAgICAgICAgZGlzcGxheVBvcHVsYXJTZXJpZXMoKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHByZXZpb3VzUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZWNyZW1lbnRQYWdlKCk7XG4gICAgICAgIGRpc3BsYXlQb3B1bGFyU2VyaWVzKCk7XG4gICAgICB9KTtcblxuICAgICAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vdmllQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJ0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB3YXRjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGFkZFRvTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBtb3ZpZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY29uc3QgbW92aWVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgbW92aWVPdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgbW92aWVSZWxlYXNlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgbW92aWVSYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgbW92aWVJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtaW5mbycpO1xuICAgICAgICBtb3ZpZUluZm8uaW5uZXJIVE1MID0gYDxoMT4ke21vdmllLm5hbWV9PC9oMT5gO1xuICAgICAgICBtb3ZpZU92ZXJ2aWV3LnRleHRDb250ZW50ID0gYCR7bW92aWUub3ZlcnZpZXd9YDtcbiAgICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT4gIDogICR7TWF0aC5mbG9vcihtb3ZpZS52b3RlX2F2ZXJhZ2UpfSAvIDEwYDtcbiAgICAgICAgbW92aWVSZWxlYXNlRGF0ZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYWxlbmRhci1kYXlzXCI+PC9pPiAgOiAgJHttb3ZpZS5maXJzdF9haXJfZGF0ZX1gO1xuICAgICAgICBtb3ZpZUltYWdlLnNyYyA9IGAke2Jhc2VJbWdVUkx9JHttb3ZpZS5wb3N0ZXJfcGF0aH1gO1xuICAgICAgICBtb3ZpZUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1jYXJkJylcbiAgICAgICAgYnRuV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbi13cmFwcGVyJyk7XG4gICAgICAgIHdhdGNoQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsYXlcIj48L2k+YDtcbiAgICAgICAgd2F0Y2hCdG4uc2V0QXR0cmlidXRlKCdpZCcsICd3YXRjaC1idXR0b24nKTtcbiAgICAgICAgYWRkVG9MaXN0QnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWhlYXJ0XCI+PC9pPidcbiAgICAgICAgYWRkVG9MaXN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRvLWxpc3QtYnV0dG9uJyk7XG4gICAgICAgIFxuICAgICAgICB3YXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIHdhdGNoU2VyaWVzKG1vdmllLm5hbWUsIG1vdmllLmlkLCBtb3ZpZS5iYWNrZHJvcF9wYXRoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkVG9MaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gbW92aWUudGl0bGUgPyBtb3ZpZS50aXRsZSA6IG1vdmllLm5hbWU7IC8vY2hlY2tzIGlmIHRoZSBlbGVtZW50IGlzIGEgXCJtb3ZpZVwiIG9yIFwidHZcIlxuICAgICAgICAgIGFkZFRvTXlMaXN0KHttb3ZpZSwgdGl0bGU6IGl0ZW1UaXRsZSwgdHlwZTogXCJ0dlwifSk7IFxuICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtb3ZpZUluZm8uYXBwZW5kKG1vdmllT3ZlcnZpZXcsIG1vdmllUmVsZWFzZURhdGUsIG1vdmllUmF0aW5nKTtcbiAgICAgICAgYnRuV3JhcHBlci5hcHBlbmQod2F0Y2hCdG4sIGFkZFRvTGlzdEJ0bik7XG4gICAgICAgIG1vdmllQ2FyZC5hcHBlbmQobW92aWVJbWFnZSwgYnRuV3JhcHBlciwgbW92aWVJbmZvKTtcbiAgICAgICAgbW92aWVDb250YWluZXIuYXBwZW5kKG1vdmllQ2FyZCwgbmV4dFBhZ2VCdG4sIHByZXZpb3VzUGFnZUJ0bilcbiAgICAgICAgYXBwLmFwcGVuZChtb3ZpZUNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlDdXJyZW50UGFnZS5qc1wiO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBtZXRob2Q6IFwiR0VUXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIEF1dGhvcml6YXRpb246XG4gICAgICBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlKOS5leUpoZFdRaU9pSm1PVGt3TUdJd1ptVmhaalpqWmpWa01qazBNRGMxWWpBeE5EUmtNbVppWVNJc0luTjFZaUk2SWpZMk1UQTRORFExTldJek56QmtNREUzTURZek16RmpOU0lzSW5OamIzQmxjeUk2V3lKaGNHbGZjbVZoWkNKZExDSjJaWEp6YVc5dUlqb3hmUS5yMlY4T3J1OXhhQXU0SkxRUFp3X25xdl9sVlVMd2EtWlBmcThydVFId3ZnXCIsXG4gIH0sXG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXROb3dQbGF5aW5nTW92aWVzKCkge1xuICBsZXQgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50UGFnZSgpO1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuICBcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/bGFuZ3VhZ2U9ZW4tVVMmcGFnZT0ke2N1cnJlbnRQYWdlfWAsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcGFnZS50ZXh0Q29udGVudCA9IGBQYWdlICR7Y3VycmVudFBhZ2V9IG9mICR7ZGF0YS50b3RhbF9wYWdlc31gO1xuICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBhbiBlcnJvclxuICB9XG59XG5cbmV4cG9ydCB7IG9wdGlvbnMsIGdldE5vd1BsYXlpbmdNb3ZpZXMgfTtcbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi9nZXROb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50UGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlDdXJyZW50UGFnZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRQb3B1bGFyU2VyaWVzKCkgeyAvL2ZldGNoIG5vdyBwbGF5aW5nIG1vdmllc1xuICBsZXQgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50UGFnZSgpO1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2L3RvcF9yYXRlZD9sYW5ndWFnZT1lbi1VUyZwYWdlPSR7Y3VycmVudFBhZ2V9YCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBwYWdlLnRleHRDb250ZW50ID0gYFBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgJHtkYXRhLnRvdGFsX3BhZ2VzfWA7XG4gICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBhbiBlcnJvclxuICAgICAgfVxuICAgIH0iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4vZ2V0Tm93UGxheWluZ01vdmllc1wiO1xuaW1wb3J0IHsgc2VhcmNoTW92aWVJbnB1dCB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSBcIi4vZGlzcGxheU1vdmllcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hNb3ZpZSgpIHtcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHNlYXJjaE1vdmllSW5wdXQudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9xdWVyeT0ke3NlYXJjaFF1ZXJ5fSZpbmNsdWRlX2FkdWx0PWZhbHNlJmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWAsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdHMpXG4gICAgICBkaXNwbGF5TW92aWVzKHNlYXJjaFJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBzZWFyY2hNb3ZpZUlucHV0IH0gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuL2dldE5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcbmltcG9ydCBkaXNwbGF5U2VyaWVzIGZyb20gJy4vZGlzcGxheVNlcmllcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFNlcmllcygpIHtcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHNlYXJjaE1vdmllSW5wdXQudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC90dj9xdWVyeT0ke3NlYXJjaFF1ZXJ5fSZpbmNsdWRlX2FkdWx0PWZhbHNlJmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWAsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdHMpXG4gICAgICBkaXNwbGF5U2VyaWVzKHNlYXJjaFJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMgZnJvbSBcIi4vZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gd2F0Y2hNb3ZpZShtb3ZpZVRpdGxlLCBtb3ZpZUlELCBwb3N0ZXJQYXRoKSB7XG4gIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuICB0aXRsZUhlYWRlci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBiYXNlSW1nVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIjtcblxuICB0cnkge1xuICAgIGNvbnN0IGlmcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwb3N0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHBvc3Rlci5zcmMgPSBgJHtiYXNlSW1nVVJMfSR7cG9zdGVyUGF0aH1gO1xuICAgIHBvc3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bvc3RlcicpXG4gICAgaWZyYW1lQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaWZyYW1lLWNvbnRhaW5lcicpXG4gICAgYmFja0J0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1yaWdodC1mcm9tLWJyYWNrZXRcIj48L2k+JztcbiAgICBpZnJhbWUuc3JjID0gYGh0dHBzOi8vMmVtYmVkLm9yZy9lbWJlZC9tb3ZpZS8ke21vdmllSUR9YDtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIFwidHJ1ZVwiKTtcblxuICAgIHRpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gbW92aWVUaXRsZTtcbiAgICBpZnJhbWVDb250YWluZXIuYXBwZW5kKGlmcmFtZSwgYmFja0J0biwgcG9zdGVyKTtcbiAgICBhcHAuYXBwZW5kKGlmcmFtZUNvbnRhaW5lcik7XG5cbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBkaXNwbGF5UG9wdWxhclNlcmllcyBmcm9tICcuL2Rpc3BsYXlQb3B1bGFyU2VyaWVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gd2F0Y2hTZXJpZXMobW92aWVUaXRsZSwgbW92aWVJRCwgcG9zdGVyUGF0aCkge1xuICBjb25zdCB0aXRsZUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZVwiKTtcbiAgdGl0bGVIZWFkZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgYmFzZUltZ1VSTCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvXCI7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpZnJhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgcG9zdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBwb3N0ZXIuc3JjID0gYCR7YmFzZUltZ1VSTH0ke3Bvc3RlclBhdGh9YDtcbiAgICBwb3N0ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwb3N0ZXInKVxuICAgIGlmcmFtZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lmcmFtZS1jb250YWluZXInKVxuICAgIGJhY2tCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcmlnaHQtZnJvbS1icmFja2V0XCI+PC9pPic7XG4gICAgaWZyYW1lLnNyYyA9IGBodHRwczovL3ZpZHNyYy54eXovZW1iZWQvdHYvJHttb3ZpZUlEfWA7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93ZnVsbHNjcmVlblwiLCBcInRydWVcIik7XG5cbiAgICB0aXRsZUhlYWRlci50ZXh0Q29udGVudCA9IG1vdmllVGl0bGU7XG4gICAgaWZyYW1lQ29udGFpbmVyLmFwcGVuZChpZnJhbWUsIGJhY2tCdG4sIHBvc3Rlcik7XG4gICAgYXBwLmFwcGVuZChpZnJhbWVDb250YWluZXIpO1xuICBcbiAgICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYXBwLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGRpc3BsYXlQb3B1bGFyU2VyaWVzKCk7IFxuICAgICAgfSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9