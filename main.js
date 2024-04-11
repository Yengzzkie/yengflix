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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE;;;;;GAKC;EACD,wEAAwE;EACxE,oDAAoD;AACtD;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,oDAAoD;EACpD,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,yBAAyB;EACzB,eAAe;;EAEf;IACE,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,OAAO;IACP,4BAA4B;IAC5B,mBAAmB;IACnB,WAAW;IACX,WAAW;EACb;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,gBAAgB;;IAEhB;MACE,kBAAkB;MAClB,WAAW;MACX,kBAAkB;MAClB,eAAe;IACjB;;IAEA;MACE,WAAW;MACX,kBAAkB;MAClB,SAAS;MACT,SAAS;MACT,2BAA2B;MAC3B,gBAAgB;MAChB,WAAW;MACX,QAAQ;MACR,4BAA4B;IAC9B;;IAEA;MACE,WAAW;IACb;EACF;;EAEA;IACE,kBAAkB;IAClB,SAAS;;IAET;MACE,YAAY;MACZ,YAAY;IACd;;IAEA;MACE,YAAY;MACZ,YAAY;MACZ,YAAY;MACZ,eAAe;IACjB;EACF;AACF;;AAEA;EACE,aAAa;AACf;;;AAGA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6DAA6D;EAC7D,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,4BAA4B;;EAE5B;IACE,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,+BAA+B;;IAE/B;MACE,kBAAkB;MAClB,SAAS;MACT,OAAO;MACP,sCAAsC;MACtC,YAAY;MACZ,WAAW;MACX,aAAa;MACb,kBAAkB,EAAE,8BAA8B;MAClD,gBAAgB,EAAE,8BAA8B;MAChD,2BAA2B;MAC3B,+BAA+B;IACjC;;IAEA;MACE,aAAa,EAAE,uCAAuC;IACxD;;;IAGA;MACE,WAAW;MACX,gBAAgB;IAClB;;IAEA;MACE,WAAW;MACX,4BAA4B;IAC9B;;IAEA;MACE,kBAAkB;MAClB,UAAU;MACV,SAAS;MACT,kBAAkB;MAClB,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,YAAY;MACZ;gDAC0C;MAC1C,+BAA+B;MAC/B,eAAe;MACf,YAAY;IACd;;IAEA;MACE,qBAAqB;IACvB;;IAEA;MACE,kBAAkB;IACpB;EACF;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,yBAAyB;IACzB,YAAY;;IAEZ;MACE,gBAAgB;MAChB,mBAAmB;IACrB;EACF;AACF;;AAEA;EACE,kBAAkB;EAClB,YAAY;;EAEZ;IACE,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,gCAAgC;IAChC,eAAe;EACjB;;EAEA;IACE,oCAAoC;IACpC,UAAU;EACZ;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,aAAa;AACf;;;AAGA;EACE;IACE,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,MAAM;IACN,QAAQ;IACR,4BAA4B;IAC5B,mCAAmC;IACnC,0BAA0B;IAC1B,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,aAAa;IACb,gCAAgC;;IAEhC;MACE,YAAY;IACd;;IAEA;MACE,sBAAsB;;MAEtB;QACE,kBAAkB;MACpB;IACF;;IAEA;MACE,eAAe;MACf,aAAa;MACb,sBAAsB;MACtB,mBAAmB;MACnB,YAAY;MACZ,YAAY;;MAEZ;QACE,WAAW;MACb;;MAEA;QACE,YAAY;QACZ,gBAAgB;MAClB;IACF;EACF;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,cAAc;IACd,eAAe,EAAE,iCAAiC;IAClD,OAAO;IACP,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,cAAc;IACd,yBAAyB;IACzB,uBAAuB;IACvB,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,OAAO;IACP,4BAA4B;IAC5B,mBAAmB;IACnB,WAAW;IACX,WAAW;EACb;;EAEA;IACE,6DAA6D;EAC/D;;EAEA;KACG;MACC,eAAe;KAChB;;KAEA;MACC,gBAAgB;KACjB;EACH;;EAEA;;IAEE;MACE,eAAe;IACjB;;IAEA;MACE,aAAa;IACf;EACF;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\n:root {\n  --light-background: linear-gradient(\n    135deg,\n    rgb(0, 208, 255),\n    rgb(89, 219, 248),\n    rgb(174, 234, 248)\n  );\n  --dark-background: linear-gradient(135deg, rgb(35 35 35), rgb(54 54 54));\n  --dropshadow: 1px 1px 2px rgba(162, 162, 162, 0.511);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif, Arial, Helvetica;\n  font-weight: 100;\n  font-style: normal;\n  height: 100%;\n  width: 100%;\n}\n\n#app {\n  background: var(--dark-background);\n  height: 100%;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: rgb(29 29 29);\n  padding: 0 2rem;\n\n  #logo {\n    position: relative;\n    letter-spacing: 1.2px;\n    color: hsl(1, 98%, 62%);\n  }\n\n  #logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: '';\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  nav {\n    margin-left: 10px;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n\n    li {\n      position: relative;\n      color: #fff;\n      margin-right: 1rem;\n      cursor: pointer;\n    }\n\n    li:after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      background: #fff;\n      height: 1px;\n      width: 0;\n      transition: width .2s linear;\n    }\n\n    li:hover::after {\n      width: 100%;\n    }\n  }\n\n  #input-wrapper {\n    position: absolute;\n    right: 2%;\n\n    input {\n      width: 200px;\n      padding: 5px;\n    }\n\n    button {\n      border: none;\n      padding: 5px;\n      width: 150px;\n      cursor: pointer;\n    }\n  }\n}\n\n#hamburger {\n  display: none;\n}\n\n\n#mobile-logo {\n  display: none;\n}\n\n#previous-page-btn, #next-page-btn {\n  position: fixed;\n  top: 50%;\n  background: #ff9225c1;\n  color: #fcefea;\n  font-size: 2rem;\n  border: none;\n  padding: 10px 15px;\n  z-index: 9999;\n  cursor: pointer;\n  transition: all .1s linear;\n}\n\n#previous-page-btn:hover, #next-page-btn:hover {\n  color: hsl(0, 100%, 50%);\n  transform: scale(1.2);\n}\n\n#previous-page-btn {\n  left: 2%;\n}\n\n#next-page-btn {\n  right: 2%;\n}\n\n#page {\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n#movie-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));\n  justify-content: center;\n  gap: 20px;\n  height: 100%;\n  padding: 1rem 1rem 4rem 1rem;\n\n  #movie-card {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    transition: transform 0.8s ease;\n\n    #movie-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, 0.614);\n      color: white;\n      width: 100%;\n      padding: 10px;\n      overflow-x: hidden; /* Hide horizontal scrollbar */\n      overflow-y: auto; /* Enable vertical scrollbar */\n      transform: translateY(100%);\n      transition: transform 0.8s ease;\n    }\n    \n    #movie-info::-webkit-scrollbar {\n      display: none; /* Hide scrollbar for WebKit browsers */\n    }\n    \n\n    h1 {\n      color: #fff;\n      font-weight: 300;\n    }\n\n    img {\n      width: 100%;\n      transition: filter 0.5s ease;\n    }\n\n    button {\n      position: absolute;\n      bottom: 5%;\n      right: 5%;\n      background: orange;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      border: none;\n      box-shadow: 1px 1px 2px rgba(152, 152, 152, 0.891),\n        -1px -1px 2px rgba(255, 255, 255, 0.882);\n      transition: transform 0.5s ease;\n      cursor: pointer;\n      z-index: 999;\n    }\n\n    button:hover {\n      transform: scale(1.2);\n    }\n\n    p {\n      visibility: hidden;\n    }\n  }\n\n  #movie-card:hover {\n    transform: scale(1.1);\n  }\n\n  #movie-card:hover img {\n    filter: blur(3px);\n  }\n\n  #movie-card:hover #movie-info {\n    transform: translateY(0%);\n    height: 100%;\n\n    p {\n      margin-top: 3rem;\n      visibility: visible;\n    }\n  }\n}\n\n#iframe-container {\n  position: relative;\n  height: 100%;\n\n  button {\n    position: absolute;\n    top: 1%;\n    right: 2%;\n    background: orange;\n    color: #fff;\n    font-size: 2rem;\n    border: none;\n    padding: 10px;\n    transform: rotate(180deg);\n    transition: transform .3s linear;\n    cursor: pointer;\n  }\n\n  button:hover {\n    transform: rotate(180deg) scale(1.1);\n    color: red;\n  }\n\n  #poster {\n    width: 100%;\n  }\n}\n\niframe {\n  width: 100%;\n  height: 600px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  background: #2e2e2e;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  padding: 10px;\n  z-index: 9999;\n}\n\n\n@media screen and (max-width: 1024px) {\n  header {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    top: 0;\n    right: 0;\n    transform: translateY(-100%);\n    background: rgba(29, 29, 29, 0.863);\n    backdrop-filter: blur(5px);\n    height: auto;\n    width: 100vw;\n    padding: 1rem 0;\n    z-index: 9999;\n    transition: transform .3s linear;\n  \n    #logo {\n      margin: none;\n    }\n  \n    ul {\n      flex-direction: column;\n\n      li {\n        margin-bottom: 5px;\n      }\n    }\n  \n    #input-wrapper {\n      position: unset;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 200px;\n      margin: 20px;\n\n      input {\n        width: 100%;\n      }\n  \n      button {\n        width: 150px;\n        margin-top: 10px;\n      }\n    }\n  }\n\n  header.active {\n    transform: translateX(0);\n  }\n\n  #hamburger {\n    display: block;\n    position: fixed; /* Change 'fixed' to 'absolute' */\n    top: 3%;\n    right: 5%;\n    background: transparent;\n    color: white;\n    font-size: 1.8rem;\n    border: none;\n    cursor: pointer;\n    z-index: 99999;\n  }\n\n  #mobile-logo {\n    position: relative;\n    display: block;\n    background: rgb(29 29 29);\n    color: hsl(1, 98%, 62%);\n    padding: 1rem;\n  }\n\n  #mobile-logo::after {\n    position: absolute;\n    background: rgb(29 29 29);\n    content: '';\n    bottom: 0;\n    left: 0;\n    transform: translateY(-100%);\n    border-radius: 100%;\n    width: 100%;\n    height: 15%;\n  }\n\n  #movie-container {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 150px));\n  }\n\n  #movie-info {\n     h1 {\n      font-size: 1rem;\n     }\n\n     p {\n      font-size: .8rem;\n     }\n  }\n\n  #iframe-container {\n\n    button {\n      font-size: 1rem;\n    }\n\n    iframe {\n      height: 300px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
          (0,_watchMovie_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movie.title, movie.id, movie.poster_path);
        });
        
        movieInfo.append(movieOverview);
        movieCard.append(movieImage, watchBtn, movieInfo);
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


async function watchSeries(movieTitle, movieID) {
  const titleHeader = document.getElementById('page');
  titleHeader.innerHTML = '';

    try {
      const movieContainer = document.createElement("div");
      const iframe = document.createElement("iframe");
      const backBtn = document.createElement("button");

      backBtn.textContent = "Back";
      iframe.src = `https://vidsrc.xyz/embed/tv/${movieID}`;
      iframe.setAttribute("allowfullscreen", "true");

      titleHeader.textContent = movieTitle;
      movieContainer.append(iframe, backBtn);
      app.append(movieContainer);
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUMzTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsU0FBUyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksWUFBWSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLHdCQUF3Qix5QkFBeUIsYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksWUFBWSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLGFBQWEsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxzQkFBc0IsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFL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OztBQUU5QztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsUUFBUTtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUFvQjtBQUM1QixPQUFPOztBQUVQLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q3VycmVudFBhZ2UuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZGlzcGxheU1vdmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Tm93UGxheWluZ01vdmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5UG9wdWxhclNlcmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5U2VyaWVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2dldE5vd1BsYXlpbmdNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvZ2V0UG9wdWxhclNlcmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9zZWFyY2hNb3ZpZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy9zZWFyY2hTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL21vZHVsZXMvd2F0Y2hNb3ZpZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvbW9kdWxlcy93YXRjaFNlcmllcy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHJnYigwLCAyMDgsIDI1NSksXG4gICAgcmdiKDg5LCAyMTksIDI0OCksXG4gICAgcmdiKDE3NCwgMjM0LCAyNDgpXG4gICk7XG4gIC0tZGFyay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzUgMzUgMzUpLCByZ2IoNTQgNTQgNTQpKTtcbiAgLS1kcm9wc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE2MiwgMTYyLCAxNjIsIDAuNTExKTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICBwYWRkaW5nOiAwIDJyZW07XG5cbiAgI2xvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gICAgY29sb3I6IGhzbCgxLCA5OCUsIDYyJSk7XG4gIH1cblxuICAjbG9nbzo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgfVxuXG4gIG5hdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgbGk6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycyBsaW5lYXI7XG4gICAgfVxuXG4gICAgbGk6aG92ZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICNpbnB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIlO1xuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbiNoYW1idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbiNtb2JpbGUtbG9nbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNwcmV2aW91cy1wYWdlLWJ0biwgI25leHQtcGFnZS1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmY5MjI1YzE7XG4gIGNvbG9yOiAjZmNlZmVhO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xufVxuXG4jcHJldmlvdXMtcGFnZS1idG46aG92ZXIsICNuZXh0LXBhZ2UtYnRuOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgwLCAxMDAlLCA1MCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbiNwcmV2aW91cy1wYWdlLWJ0biB7XG4gIGxlZnQ6IDIlO1xufVxuXG4jbmV4dC1wYWdlLWJ0biB7XG4gIHJpZ2h0OiAyJTtcbn1cblxuI3BhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMmUyZTJlO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jbW92aWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAzMDBweCkpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSA0cmVtIDFyZW07XG5cbiAgI21vdmllLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2U7XG5cbiAgICAjbW92aWUtaW5mbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYxNCk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEhpZGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIgKi9cbiAgICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIEVuYWJsZSB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2U7XG4gICAgfVxuICAgIFxuICAgICNtb3ZpZS1pbmZvOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIHNjcm9sbGJhciBmb3IgV2ViS2l0IGJyb3dzZXJzICovXG4gICAgfVxuICAgIFxuXG4gICAgaDEge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogNSU7XG4gICAgICByaWdodDogNSU7XG4gICAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC44OTEpLFxuICAgICAgICAtMXB4IC0xcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODIpO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICB9XG5cbiAgICBidXR0b246aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfVxuXG4gICNtb3ZpZS1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cblxuICAjbW92aWUtY2FyZDpob3ZlciBpbWcge1xuICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICB9XG5cbiAgI21vdmllLWNhcmQ6aG92ZXIgI21vdmllLWluZm8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cbn1cblxuI2lmcmFtZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcblxuICBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDElO1xuICAgIHJpZ2h0OiAyJTtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBsaW5lYXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDEuMSk7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gICNwb3N0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbmlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjksIDI5LCAyOSwgMC44NjMpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBsaW5lYXI7XG4gIFxuICAgICNsb2dvIHtcbiAgICAgIG1hcmdpbjogbm9uZTtcbiAgICB9XG4gIFxuICAgIHVsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgI2lucHV0LXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHVuc2V0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgbWFyZ2luOiAyMHB4O1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoZWFkZXIuYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cblxuICAjaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIENoYW5nZSAnZml4ZWQnIHRvICdhYnNvbHV0ZScgKi9cbiAgICB0b3A6IDMlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgfVxuXG4gICNtb2JpbGUtbG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XG4gICAgY29sb3I6IGhzbCgxLCA5OCUsIDYyJSk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICNtb2JpbGUtbG9nbzo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgfVxuXG4gICNtb3ZpZS1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDE1MHB4KSk7XG4gIH1cblxuICAjbW92aWUtaW5mbyB7XG4gICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgfVxuXG4gICAgIHAge1xuICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgfVxuICB9XG5cbiAgI2lmcmFtZS1jb250YWluZXIge1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICBpZnJhbWUge1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRTs7Ozs7R0FLQztFQUNELHdFQUF3RTtFQUN4RSxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7O0VBRWY7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjs7SUFFaEI7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsU0FBUztNQUNULDJCQUEyQjtNQUMzQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFFBQVE7TUFDUiw0QkFBNEI7SUFDOUI7O0lBRUE7TUFDRSxXQUFXO0lBQ2I7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTOztJQUVUO01BQ0UsWUFBWTtNQUNaLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLGVBQWU7SUFDakI7RUFDRjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtBQUNm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O0lBQ0UsY0FBYztJQUNkLGVBQWUsRUFBRSxpQ0FBaUM7SUFDbEQsT0FBTztJQUNQLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU87SUFDUCw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSw2REFBNkQ7RUFDL0Q7O0VBRUE7S0FDRztNQUNDLGVBQWU7S0FDaEI7O0tBRUE7TUFDQyxnQkFBZ0I7S0FDakI7RUFDSDs7RUFFQTs7SUFFRTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxMzVkZWcsXFxuICAgIHJnYigwLCAyMDgsIDI1NSksXFxuICAgIHJnYig4OSwgMjE5LCAyNDgpLFxcbiAgICByZ2IoMTc0LCAyMzQsIDI0OClcXG4gICk7XFxuICAtLWRhcmstYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDM1IDM1IDM1KSwgcmdiKDU0IDU0IDU0KSk7XFxuICAtLWRyb3BzaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTYyLCAxNjIsIDE2MiwgMC41MTEpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhcHAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuXFxuICAjbG9nbyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcbiAgICBjb2xvcjogaHNsKDEsIDk4JSwgNjIlKTtcXG4gIH1cXG5cXG4gICNsb2dvOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI5IDI5IDI5KTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB9XFxuXFxuICB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgIGxpIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBsaTphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjJzIGxpbmVhcjtcXG4gICAgfVxcblxcbiAgICBsaTpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICB9XFxuXFxuICAjaW5wdXQtd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDIlO1xcblxcbiAgICBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jaGFtYnVyZ2VyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbiNtb2JpbGUtbG9nbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJldmlvdXMtcGFnZS1idG4sICNuZXh0LXBhZ2UtYnRuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmOTIyNWMxO1xcbiAgY29sb3I6ICNmY2VmZWE7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XFxufVxcblxcbiNwcmV2aW91cy1wYWdlLWJ0bjpob3ZlciwgI25leHQtcGFnZS1idG46aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAxMDAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4jcHJldmlvdXMtcGFnZS1idG4ge1xcbiAgbGVmdDogMiU7XFxufVxcblxcbiNuZXh0LXBhZ2UtYnRuIHtcXG4gIHJpZ2h0OiAyJTtcXG59XFxuXFxuI3BhZ2Uge1xcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21vdmllLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMzAwcHgpKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtIDRyZW0gMXJlbTtcXG5cXG4gICNtb3ZpZS1jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZTtcXG5cXG4gICAgI21vdmllLWluZm8ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE0KTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEhpZGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIgKi9cXG4gICAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBFbmFibGUgdmVydGljYWwgc2Nyb2xsYmFyICovXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgICNtb3ZpZS1pbmZvOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSBzY3JvbGxiYXIgZm9yIFdlYktpdCBicm93c2VycyAqL1xcbiAgICB9XFxuICAgIFxcblxcbiAgICBoMSB7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICByaWdodDogNSU7XFxuICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbiAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC44OTEpLFxcbiAgICAgICAgLTFweCAtMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgyKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB6LWluZGV4OiA5OTk7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxuICB9XFxuXFxuICAjbW92aWUtY2FyZDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG5cXG4gICNtb3ZpZS1jYXJkOmhvdmVyIGltZyB7XFxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgfVxcblxcbiAgI21vdmllLWNhcmQ6aG92ZXIgI21vdmllLWluZm8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIHAge1xcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jaWZyYW1lLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMSU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgbGluZWFyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDEuMSk7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuXFxuICAjcG9zdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbmlmcmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjMmUyZTJlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyOSwgMjksIDI5LCAwLjg2Myk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGxpbmVhcjtcXG4gIFxcbiAgICAjbG9nbyB7XFxuICAgICAgbWFyZ2luOiBub25lO1xcbiAgICB9XFxuICBcXG4gICAgdWwge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgbGkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgXFxuICAgICNpbnB1dC13cmFwcGVyIHtcXG4gICAgICBwb3NpdGlvbjogdW5zZXQ7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgIG1hcmdpbjogMjBweDtcXG5cXG4gICAgICBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICB9XFxuICBcXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIGhlYWRlci5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuXFxuICAjaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogQ2hhbmdlICdmaXhlZCcgdG8gJ2Fic29sdXRlJyAqL1xcbiAgICB0b3A6IDMlO1xcbiAgICByaWdodDogNSU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogOTk5OTk7XFxuICB9XFxuXFxuICAjbW9iaWxlLWxvZ28ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjkgMjkgMjkpO1xcbiAgICBjb2xvcjogaHNsKDEsIDk4JSwgNjIlKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbG9nbzo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyOSAyOSAyOSk7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gIH1cXG5cXG4gICNtb3ZpZS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxNTBweCkpO1xcbiAgfVxcblxcbiAgI21vdmllLWluZm8ge1xcbiAgICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgIH1cXG5cXG4gICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgICB9XFxuICB9XFxuXFxuICAjaWZyYW1lLWNvbnRhaW5lciB7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIGlmcmFtZSB7XFxuICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBkaXNwbGF5Tm93UGxheWluZ01vdmllcyBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlOb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgZGlzcGxheVBvcHVsYXJTZXJpZXMgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5UG9wdWxhclNlcmllcy5qc1wiO1xuaW1wb3J0IHNlYXJjaE1vdmllIGZyb20gXCIuL21vZHVsZXMvc2VhcmNoTW92aWUuanNcIjtcbmltcG9ydCBzZWFyY2hTZXJpZXMgZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2hTZXJpZXMuanNcIjtcbmltcG9ydCB7IGdldE5vd1BsYXlpbmdNb3ZpZXMgfSBmcm9tIFwiLi9tb2R1bGVzL2dldE5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcbmltcG9ydCB7IHJlc2V0Q3VycmVudFBhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlDdXJyZW50UGFnZS5qc1wiO1xuXG5jb25zdCBzZWFyY2hNb3ZpZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtcXVlcnlcIik7XG5jb25zdCBzZWFyY2hNb3ZpZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLW1vdmllLWJ0blwiKTtcbmNvbnN0IHNlYXJjaFNlcmllc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXNlcmllcy1idG5cIik7XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ0blwiKTtcbmNvbnN0IHR2U2VyaWVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0di1zZXJpZXMtYnRuXCIpO1xuY29uc3Qgbm93UGxheWluZ01vdmllc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1bGFyLW1vdmllcy1idG4nKVxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJcIik7XG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcblxuLy8gTkFWSUdBVElPTiBFVkVOVExJU1RFTkVSU1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXNldEN1cnJlbnRQYWdlKCk7XG4gIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICBnZXROb3dQbGF5aW5nTW92aWVzKCk7XG4gIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG59KTtcblxubm93UGxheWluZ01vdmllc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKTtcbnR2U2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UG9wdWxhclNlcmllcyk7XG5zZWFyY2hTZXJpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaFNlcmllcyk7IC8vIGV2ZW50bGlzdGVuZXIgZm9yIHNlYXJjaGluZyBxdWVyeSBmb3IgVFYgU2VyaWVzXG5cbi8vIEhBTUJVUkdFUiBFVkVOVExJU1RFTkVSXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgLy8gZXZlbnRsaXN0ZW5lciBmb3IgdG9nZ2xpbmcgdGhlIGhhbWJ1cmdlciBtZW51XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFNFQVJDSCBRVUVSWSBFVkVOVExJU1RFTkVSU1xuc2VhcmNoU2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChzZWFyY2hNb3ZpZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgVFYgc2hvdyB0aXRsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hTZXJpZXMoKTtcbiAgfVxufSk7XG5cbnNlYXJjaE1vdmllQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChzZWFyY2hNb3ZpZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgbW92aWUgdGl0bGVcIik7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoTW92aWUoKTtcbiAgfVxufSk7XG5cbmRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7IC8vaW5pdGlsaXplIHRoZSBsaXN0IG9mIG5vdyBwbGF5aW5nIG1vdmllcyBvbiBwYWdlIGxvYWRcblxuZXhwb3J0IHsgc2VhcmNoTW92aWVJbnB1dCB9O1xuIiwibGV0IGN1cnJlbnRQYWdlID0gMTtcbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZScpO1xucGFnZS50ZXh0Q29udGVudCA9IGBQYWdlICR7Y3VycmVudFBhZ2V9IG9mIGA7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlKCkge1xuICByZXR1cm4gY3VycmVudFBhZ2U7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudFBhZ2UoKSB7XG4gIGN1cnJlbnRQYWdlKys7XG59XG5cbmZ1bmN0aW9uIGRlY3JlbWVudFBhZ2UoKSB7XG4gIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcbiAgICBjdXJyZW50UGFnZS0tO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgY3VycmVudFBhZ2UgPSAxO1xuICB9XG5cbmV4cG9ydCB7IGN1cnJlbnRQYWdlLCBnZXRDdXJyZW50UGFnZSwgaW5jcmVtZW50UGFnZSwgZGVjcmVtZW50UGFnZSwgcmVzZXRDdXJyZW50UGFnZSB9O1xuIiwiaW1wb3J0IHdhdGNoTW92aWUgZnJvbSAnLi93YXRjaE1vdmllLmpzJztcbmltcG9ydCBkaXNwbGF5Tm93UGxheWluZ01vdmllcyBmcm9tICcuL2Rpc3BsYXlOb3dQbGF5aW5nTW92aWVzLmpzJztcbmltcG9ydCB7IGluY3JlbWVudFBhZ2UsIGRlY3JlbWVudFBhZ2UgfSBmcm9tICcuL2Rpc3BsYXlDdXJyZW50UGFnZS5qcyc7XG5cbi8vIHRoaXMgaXMgdGhlIG1haW4gZnVuY3Rpb24gaW4gZGlzcGxheWluZyB0aGUgbW92aWVzIG1heSBpdCBiZSB0aGUgXG4vLyAnUG9wdWxhcicgb3IgJ1NlYXJjaGVkJyBtb3ZpZXMgYnkgdXNlclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheU1vdmllcyhtb3ZpZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYmFzZUltZ1VSTCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC9cIjtcbiAgXG4gICAgICAvLyBDbGVhciBwcmV2aW91cyBjb250ZW50XG4gICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgY29uc3QgcHJldmlvdXNQYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBuZXh0UGFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICBtb3ZpZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWNvbnRhaW5lcicpO1xuICAgICAgcHJldmlvdXNQYWdlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4nXG4gICAgICBuZXh0UGFnZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPic7XG4gICAgICBwcmV2aW91c1BhZ2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2aW91cy1wYWdlLWJ0bicpXG4gICAgICBuZXh0UGFnZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25leHQtcGFnZS1idG4nKVxuXG4gICAgICBuZXh0UGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpbmNyZW1lbnRQYWdlKCk7XG4gICAgICAgIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG4gICAgICB9KTtcbiAgXG4gICAgICBwcmV2aW91c1BhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVjcmVtZW50UGFnZSgpO1xuICAgICAgICBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpO1xuICAgICAgfSk7XG5cbiAgICAgIG1vdmllcy5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgICAgICBjb25zdCBtb3ZpZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB3YXRjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IG1vdmllSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBjb25zdCBtb3ZpZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBtb3ZpZU92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIG1vdmllSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vdmllLWluZm8nKTtcbiAgICAgICAgbW92aWVJbmZvLmlubmVySFRNTCA9IGA8aDE+JHttb3ZpZS50aXRsZX08L2gxPmA7XG4gICAgICAgIG1vdmllT3ZlcnZpZXcudGV4dENvbnRlbnQgPSBgJHttb3ZpZS5vdmVydmlld31gO1xuICAgICAgICBtb3ZpZUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1jYXJkJylcbiAgICAgICAgd2F0Y2hCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGxheVwiPjwvaT5gO1xuICAgICAgICBtb3ZpZUltYWdlLnNyYyA9IGAke2Jhc2VJbWdVUkx9JHttb3ZpZS5wb3N0ZXJfcGF0aH1gO1xuICBcbiAgICAgICAgd2F0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICB3YXRjaE1vdmllKG1vdmllLnRpdGxlLCBtb3ZpZS5pZCwgbW92aWUucG9zdGVyX3BhdGgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG1vdmllSW5mby5hcHBlbmQobW92aWVPdmVydmlldyk7XG4gICAgICAgIG1vdmllQ2FyZC5hcHBlbmQobW92aWVJbWFnZSwgd2F0Y2hCdG4sIG1vdmllSW5mbyk7XG4gICAgICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZChtb3ZpZUNhcmQsIG5leHRQYWdlQnRuLCBwcmV2aW91c1BhZ2VCdG4pXG4gICAgICAgIGFwcC5hcHBlbmQobW92aWVDb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9IiwiaW1wb3J0IHsgZ2V0Tm93UGxheWluZ01vdmllcyB9IGZyb20gXCIuL2dldE5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gXCIuL2Rpc3BsYXlNb3ZpZXMuanNcIjtcblxuLy8gdGhpcyB3aWxsIGRpc3BsYXkgdGhlIGN1cnJlbnQgcG9wdWxhciBtb3ZpZXMgb24gcGFnZSBsb2FkIGFuZCBpcyBzZXQgYXNcbi8vIGRlZmF1bHQgbGFuZGluZyBwYWdlXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5Tm93UGxheWluZ01vdmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBub3dQbGF5aW5nTW92aWVzID0gYXdhaXQgZ2V0Tm93UGxheWluZ01vdmllcygpO1xuICAgIGRpc3BsYXlNb3ZpZXMobm93UGxheWluZ01vdmllcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRQb3B1bGFyU2VyaWVzIGZyb20gXCIuL2dldFBvcHVsYXJTZXJpZXMuanNcIjtcbmltcG9ydCBkaXNwbGF5U2VyaWVzIGZyb20gXCIuL2Rpc3BsYXlTZXJpZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheVBvcHVsYXJTZXJpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5vd1BsYXlpbmdNb3ZpZXMgPSBhd2FpdCBnZXRQb3B1bGFyU2VyaWVzKCk7XG4gICAgICBkaXNwbGF5U2VyaWVzKG5vd1BsYXlpbmdNb3ZpZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgd2F0Y2hTZXJpZXMgZnJvbSAnLi93YXRjaFNlcmllcy5qcyc7XG5pbXBvcnQgZGlzcGxheVBvcHVsYXJTZXJpZXMgZnJvbSAnLi9kaXNwbGF5UG9wdWxhclNlcmllcy5qcyc7XG5pbXBvcnQgeyBpbmNyZW1lbnRQYWdlLCBkZWNyZW1lbnRQYWdlIH0gZnJvbSAnLi9kaXNwbGF5Q3VycmVudFBhZ2UuanMnO1xuXG4vLyBpIGp1c3QgY29waWVkIHRoZSBlbnRpcmUgZnVuY3Rpb24gZnJvbSBkaXNwbGF5TW92aWVzIGJlY2F1c2Vcbi8vIFRWIHNlcmllcyBoYXMgZGlmZmVyZW50IHByb3BlcnR5IGZvciB0aGUgdGl0bGUsIGluc3RlYWQgaXQgdXNlcyAnbmFtZScgYW5kXG4vLyBpIGRvbid0IGtub3cgaG93IHRvIGNoYW5nZSB0aGUgbW92aWUudGl0bGUgdG8gbW92aWUubmFtZSB3aGVuIHF1ZXJ5aW5nIGZvclxuLy8gVFYgc2VyaWVzIDopXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5U2VyaWVzKG1vdmllcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNlSW1nVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwL1wiO1xuICBcbiAgICAgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBjb25zdCBwcmV2aW91c1BhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IG5leHRQYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgIG1vdmllQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW92aWUtY29udGFpbmVyJyk7XG4gICAgICBwcmV2aW91c1BhZ2VCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPidcbiAgICAgIG5leHRQYWdlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JztcbiAgICAgIHByZXZpb3VzUGFnZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXZpb3VzLXBhZ2UtYnRuJylcbiAgICAgIG5leHRQYWdlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dC1wYWdlLWJ0bicpXG5cbiAgICAgIG5leHRQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGluY3JlbWVudFBhZ2UoKTtcbiAgICAgICAgZGlzcGxheVBvcHVsYXJTZXJpZXMoKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHByZXZpb3VzUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZWNyZW1lbnRQYWdlKCk7XG4gICAgICAgIGRpc3BsYXlQb3B1bGFyU2VyaWVzKCk7XG4gICAgICB9KTtcblxuICAgICAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vdmllQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHdhdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgbW92aWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgICAgY29uc3QgbW92aWVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgbW92aWVPdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBtb3ZpZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1pbmZvJyk7XG4gICAgICAgIG1vdmllSW5mby5pbm5lckhUTUwgPSBgPGgxPiR7bW92aWUubmFtZX08L2gxPmA7XG4gICAgICAgIG1vdmllT3ZlcnZpZXcudGV4dENvbnRlbnQgPSBgJHttb3ZpZS5vdmVydmlld31gO1xuICAgICAgICBtb3ZpZUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtb3ZpZS1jYXJkJylcbiAgICAgICAgd2F0Y2hCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGxheVwiPjwvaT5gO1xuICAgICAgICBtb3ZpZUltYWdlLnNyYyA9IGAke2Jhc2VJbWdVUkx9JHttb3ZpZS5wb3N0ZXJfcGF0aH1gO1xuICBcbiAgICAgICAgd2F0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICB3YXRjaFNlcmllcyhtb3ZpZS5uYW1lLCBtb3ZpZS5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbW92aWVJbmZvLmFwcGVuZChtb3ZpZU92ZXJ2aWV3KTtcbiAgICAgICAgbW92aWVDYXJkLmFwcGVuZChtb3ZpZUltYWdlLCB3YXRjaEJ0biwgbW92aWVJbmZvKTtcbiAgICAgICAgbW92aWVDb250YWluZXIuYXBwZW5kKG1vdmllQ2FyZCwgbmV4dFBhZ2VCdG4sIHByZXZpb3VzUGFnZUJ0bilcbiAgICAgICAgYXBwLmFwcGVuZChtb3ZpZUNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlDdXJyZW50UGFnZS5qc1wiO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBtZXRob2Q6IFwiR0VUXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIEF1dGhvcml6YXRpb246XG4gICAgICBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlKOS5leUpoZFdRaU9pSm1PVGt3TUdJd1ptVmhaalpqWmpWa01qazBNRGMxWWpBeE5EUmtNbVppWVNJc0luTjFZaUk2SWpZMk1UQTRORFExTldJek56QmtNREUzTURZek16RmpOU0lzSW5OamIzQmxjeUk2V3lKaGNHbGZjbVZoWkNKZExDSjJaWEp6YVc5dUlqb3hmUS5yMlY4T3J1OXhhQXU0SkxRUFp3X25xdl9sVlVMd2EtWlBmcThydVFId3ZnXCIsXG4gIH0sXG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXROb3dQbGF5aW5nTW92aWVzKCkge1xuICBsZXQgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50UGFnZSgpO1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuICBcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/bGFuZ3VhZ2U9ZW4tVVMmcGFnZT0ke2N1cnJlbnRQYWdlfWAsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcGFnZS50ZXh0Q29udGVudCA9IGBQYWdlICR7Y3VycmVudFBhZ2V9IG9mICR7ZGF0YS50b3RhbF9wYWdlc31gO1xuICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBhbiBlcnJvclxuICB9XG59XG5cbmV4cG9ydCB7IG9wdGlvbnMsIGdldE5vd1BsYXlpbmdNb3ZpZXMgfTtcbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi9nZXROb3dQbGF5aW5nTW92aWVzLmpzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50UGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlDdXJyZW50UGFnZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRQb3B1bGFyU2VyaWVzKCkgeyAvL2ZldGNoIG5vdyBwbGF5aW5nIG1vdmllc1xuICBsZXQgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50UGFnZSgpO1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2L3RvcF9yYXRlZD9sYW5ndWFnZT1lbi1VUyZwYWdlPSR7Y3VycmVudFBhZ2V9YCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBwYWdlLnRleHRDb250ZW50ID0gYFBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgJHtkYXRhLnRvdGFsX3BhZ2VzfWA7XG4gICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBhbiBlcnJvclxuICAgICAgfVxuICAgIH0iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4vZ2V0Tm93UGxheWluZ01vdmllc1wiO1xuaW1wb3J0IHsgc2VhcmNoTW92aWVJbnB1dCB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSBcIi4vZGlzcGxheU1vdmllcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hNb3ZpZSgpIHtcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHNlYXJjaE1vdmllSW5wdXQudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9xdWVyeT0ke3NlYXJjaFF1ZXJ5fSZpbmNsdWRlX2FkdWx0PWZhbHNlJmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWAsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdHMpXG4gICAgICBkaXNwbGF5TW92aWVzKHNlYXJjaFJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBzZWFyY2hNb3ZpZUlucHV0IH0gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuL2dldE5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcbmltcG9ydCBkaXNwbGF5U2VyaWVzIGZyb20gJy4vZGlzcGxheVNlcmllcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFNlcmllcygpIHtcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHNlYXJjaE1vdmllSW5wdXQudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC90dj9xdWVyeT0ke3NlYXJjaFF1ZXJ5fSZpbmNsdWRlX2FkdWx0PWZhbHNlJmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWAsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdHMpXG4gICAgICBkaXNwbGF5U2VyaWVzKHNlYXJjaFJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMgZnJvbSBcIi4vZGlzcGxheU5vd1BsYXlpbmdNb3ZpZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gd2F0Y2hNb3ZpZShtb3ZpZVRpdGxlLCBtb3ZpZUlELCBwb3N0ZXJQYXRoKSB7XG4gIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuICB0aXRsZUhlYWRlci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBiYXNlSW1nVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIjtcblxuICB0cnkge1xuICAgIGNvbnN0IGlmcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwb3N0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHBvc3Rlci5zcmMgPSBgJHtiYXNlSW1nVVJMfSR7cG9zdGVyUGF0aH1gO1xuICAgIHBvc3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bvc3RlcicpXG4gICAgaWZyYW1lQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaWZyYW1lLWNvbnRhaW5lcicpXG4gICAgYmFja0J0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1yaWdodC1mcm9tLWJyYWNrZXRcIj48L2k+JztcbiAgICBpZnJhbWUuc3JjID0gYGh0dHBzOi8vMmVtYmVkLm9yZy9lbWJlZC9tb3ZpZS8ke21vdmllSUR9YDtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIFwidHJ1ZVwiKTtcblxuICAgIHRpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gbW92aWVUaXRsZTtcbiAgICBpZnJhbWVDb250YWluZXIuYXBwZW5kKGlmcmFtZSwgYmFja0J0biwgcG9zdGVyKTtcbiAgICBhcHAuYXBwZW5kKGlmcmFtZUNvbnRhaW5lcik7XG5cbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGRpc3BsYXlOb3dQbGF5aW5nTW92aWVzKCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBkaXNwbGF5UG9wdWxhclNlcmllcyBmcm9tICcuL2Rpc3BsYXlQb3B1bGFyU2VyaWVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gd2F0Y2hTZXJpZXMobW92aWVUaXRsZSwgbW92aWVJRCkge1xuICBjb25zdCB0aXRsZUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG4gIHRpdGxlSGVhZGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgYmFja0J0bi50ZXh0Q29udGVudCA9IFwiQmFja1wiO1xuICAgICAgaWZyYW1lLnNyYyA9IGBodHRwczovL3ZpZHNyYy54eXovZW1iZWQvdHYvJHttb3ZpZUlEfWA7XG4gICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIFwidHJ1ZVwiKTtcblxuICAgICAgdGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBtb3ZpZVRpdGxlO1xuICAgICAgbW92aWVDb250YWluZXIuYXBwZW5kKGlmcmFtZSwgYmFja0J0bik7XG4gICAgICBhcHAuYXBwZW5kKG1vdmllQ29udGFpbmVyKTtcbiAgXG4gICAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBkaXNwbGF5UG9wdWxhclNlcmllcygpOyBcbiAgICAgIH0pO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==