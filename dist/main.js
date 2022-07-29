/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAboutUs)
/* harmony export */ });
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


function createAboutUs() {
  const mainContent = document.querySelector("main > div");
  mainContent.className = "about-us";
  mainContent.innerHTML = `
  <h1>Burger Joy</h1>
  <div class="hr"></div>

  <div class="information">
  <p class="story">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ipsa dolor explicabo ducimus itaque doloribus consequatur, qui quos expedita deserunt perferendis consequuntur id eligendi, cum praesentium libero obcaecati fuga atque!</p>
  <p>📞 000 111 222</p>
  <p>📍 Lorem Ipsum 18, Sit Amet, USA</p>
  </div>
  `;

  console.log(mainContent);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
  const mainContent = document.querySelector("main > div");
  mainContent.className = "home";

  mainContent.innerHTML = `
    <h1>Burger Joy</h1>
    <h3>Best Hamburger in your country!</h3>
    <p>Made with passion since 1920.</p>

    <div class="hr"></div>

    <div class="hours">
      <ul>
        <li>
          <span class="t-left">Monday:</span>
          <span>9am - 8pm</span>
        </li>
        <li>
          <span class="t-left">Tuesday:</span>
          <span>9am - 8pm</span>
        </li>
        <li>
          <span class="t-left">Wednesday:</span>
          <span>9am - 8pm</span>
        </li>
        <li>
          <span class="t-left">Thursday:</span>
          <span>9am - 8pm</span>
        </li>
        <li>
          <span class="t-left">Friday:</span>
          <span>9am - 11pm</span>
        </li>
        <li>
          <span class="t-left">Saturday:</span>
          <span>9am - 1pm</span>
        </li>
        <li>
          <span class="t-left">Sunday:</span>
          <span>9am - 11pm</span>
        </li>
      </ul>
    </div>
  `;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu() {
  const mainContent = document.querySelector("main > div");
  mainContent.className = "menu";
  mainContent.innerHTML = `
  <h1>Burger Joy</h1>
  <div class="hr"></div>

  <div class="items-menu">

    <div class="menu-item">
      <img src="../dist/img/product/img1-hamburger.png" alt="" />
      <h3>Hamburger <span class="clr">$3.49</span></h3>
      <p class="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eos voluptatibus reprehenderit consectetur.
      </p>
    </div>

  </div>

  `;

  const products = [
    {
      name: "Hamburger",
      url: "1-hamburger",
      price: "3.49",
    },
    {
      name: "Cheeseburger",
      url: "2-cheesburger",
      price: "4.49",
    },
    {
      name: "Steak",
      url: "3-steak",
      price: "10.99",
    },
    {
      name: "BBQ Ribs",
      url: "4-bbq",
      price: "7.99",
    },
    {
      name: "Caesar Salad",
      url: "5-salad",
      price: "7.49",
    },
    {
      name: "French Fries",
      url: "6-fries",
      price: "1.99",
    },
  ];
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eos voluptatibus reprehenderit consectetur.";
  /*fai una funzione che generi tot elementi html
  function (product) {
    return `
    e sistemi tutti i cosi con il place older per i cosi e poi 
    non scordare l'alt nella foto fai tipo product.name + photo
    non scordare il $
    ecc ecc ecc
    `;
  }

  poi magari quando deve essere chiamata si fa
  products.forEach(product)
  e gli passi il product all'interno della funzione superiore
  e appendi gli oggetti al coso
  
  
  */

  console.log(mainContent);
}


/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEl": () => (/* binding */ createEl),
/* harmony export */   "default": () => (/* binding */ createWeb)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us */ "./src/about-us.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




function createEl(el) {
  return document.createElement(el);
}

const content = document.querySelector("#content");

function createNav() {
  const nav = createEl("nav");
  const ul = createEl("ul");
  ul.innerHTML = `
    <li tabindex="0" class="active">Home</li>
    <li tabindex="0">Menu</li>
    <li tabindex="0">About Us</li>
  `;
  nav.appendChild(ul);
  content.appendChild(nav);
}

function createMain() {
  const div = createEl("div");
  div.classList.add("p-x", "al-itm");

  const main = createEl("main");

  const divContent = createEl("div");

  main.appendChild(divContent);
  div.appendChild(main);
  content.appendChild(div);
}

function createFooter() {
  const footer = createEl("footer");
  footer.innerHTML = `
    <p>
      Copyright &copy;2022 ArmandoCrn
      <a href="https://github.com/ArmandoCrn" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>
    </p>
  `;

  content.appendChild(footer);
}

function liEvent() {
  if (!this.className) {
    const [home, menu, aboutUs] = document.querySelectorAll("nav li");

    if (this === home) {
      menu.classList.remove("active");
      aboutUs.classList.remove("active");
      (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }

    if (this === menu) {
      home.classList.remove("active");
      aboutUs.classList.remove("active");
      (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    if (this === aboutUs) {
      home.classList.remove("active");
      menu.classList.remove("active");
      (0,_about_us__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    this.classList.add("active");
  }
}

function createWeb() {
  createNav();

  createMain();
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

  createFooter();

  const lItems = document.querySelectorAll("nav li");
  lItems.forEach((li) => li.addEventListener("click", liEvent));
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


(0,_webpage__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDckM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFZ0M7QUFDTztBQUNQO0FBQ2hDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7QUFDbEM7QUFDQSxvREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC11cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tIFwiLi93ZWJwYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBYm91dFVzKCkge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gPiBkaXZcIik7XHJcbiAgbWFpbkNvbnRlbnQuY2xhc3NOYW1lID0gXCJhYm91dC11c1wiO1xyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IGBcclxuICA8aDE+QnVyZ2VyIEpveTwvaDE+XHJcbiAgPGRpdiBjbGFzcz1cImhyXCI+PC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvblwiPlxyXG4gIDxwIGNsYXNzPVwic3RvcnlcIj5Mb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWxpcXVpZCwgaXBzYSBkb2xvciBleHBsaWNhYm8gZHVjaW11cyBpdGFxdWUgZG9sb3JpYnVzIGNvbnNlcXVhdHVyLCBxdWkgcXVvcyBleHBlZGl0YSBkZXNlcnVudCBwZXJmZXJlbmRpcyBjb25zZXF1dW50dXIgaWQgZWxpZ2VuZGksIGN1bSBwcmFlc2VudGl1bSBsaWJlcm8gb2JjYWVjYXRpIGZ1Z2EgYXRxdWUhPC9wPlxyXG4gIDxwPvCfk54gMDAwIDExMSAyMjI8L3A+XHJcbiAgPHA+8J+TjSBMb3JlbSBJcHN1bSAxOCwgU2l0IEFtZXQsIFVTQTwvcD5cclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBjb25zb2xlLmxvZyhtYWluQ29udGVudCk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluID4gZGl2XCIpO1xyXG4gIG1haW5Db250ZW50LmNsYXNzTmFtZSA9IFwiaG9tZVwiO1xyXG5cclxuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8aDE+QnVyZ2VyIEpveTwvaDE+XHJcbiAgICA8aDM+QmVzdCBIYW1idXJnZXIgaW4geW91ciBjb3VudHJ5ITwvaDM+XHJcbiAgICA8cD5NYWRlIHdpdGggcGFzc2lvbiBzaW5jZSAxOTIwLjwvcD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaHJcIj48L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaG91cnNcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+TW9uZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDhwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+VHVlc2RheTo8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj45YW0gLSA4cG08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInQtbGVmdFwiPldlZG5lc2RheTo8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj45YW0gLSA4cG08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInQtbGVmdFwiPlRodXJzZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDhwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+RnJpZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDExcG08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInQtbGVmdFwiPlNhdHVyZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDFwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+U3VuZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDExcG08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluID4gZGl2XCIpO1xyXG4gIG1haW5Db250ZW50LmNsYXNzTmFtZSA9IFwibWVudVwiO1xyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IGBcclxuICA8aDE+QnVyZ2VyIEpveTwvaDE+XHJcbiAgPGRpdiBjbGFzcz1cImhyXCI+PC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJpdGVtcy1tZW51XCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICA8aW1nIHNyYz1cIi4uL2Rpc3QvaW1nL3Byb2R1Y3QvaW1nMS1oYW1idXJnZXIucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPGgzPkhhbWJ1cmdlciA8c3BhbiBjbGFzcz1cImNsclwiPiQzLjQ5PC9zcGFuPjwvaDM+XHJcbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWVyYXQgZW9zIHZvbHVwdGF0aWJ1cyByZXByZWhlbmRlcml0IGNvbnNlY3RldHVyLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcblxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhhbWJ1cmdlclwiLFxyXG4gICAgICB1cmw6IFwiMS1oYW1idXJnZXJcIixcclxuICAgICAgcHJpY2U6IFwiMy40OVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDaGVlc2VidXJnZXJcIixcclxuICAgICAgdXJsOiBcIjItY2hlZXNidXJnZXJcIixcclxuICAgICAgcHJpY2U6IFwiNC40OVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTdGVha1wiLFxyXG4gICAgICB1cmw6IFwiMy1zdGVha1wiLFxyXG4gICAgICBwcmljZTogXCIxMC45OVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCQlEgUmlic1wiLFxyXG4gICAgICB1cmw6IFwiNC1iYnFcIixcclxuICAgICAgcHJpY2U6IFwiNy45OVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDYWVzYXIgU2FsYWRcIixcclxuICAgICAgdXJsOiBcIjUtc2FsYWRcIixcclxuICAgICAgcHJpY2U6IFwiNy40OVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJGcmVuY2ggRnJpZXNcIixcclxuICAgICAgdXJsOiBcIjYtZnJpZXNcIixcclxuICAgICAgcHJpY2U6IFwiMS45OVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID1cclxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWVyYXQgZW9zIHZvbHVwdGF0aWJ1cyByZXByZWhlbmRlcml0IGNvbnNlY3RldHVyLlwiO1xyXG4gIC8qZmFpIHVuYSBmdW56aW9uZSBjaGUgZ2VuZXJpIHRvdCBlbGVtZW50aSBodG1sXHJcbiAgZnVuY3Rpb24gKHByb2R1Y3QpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICBlIHNpc3RlbWkgdHV0dGkgaSBjb3NpIGNvbiBpbCBwbGFjZSBvbGRlciBwZXIgaSBjb3NpIGUgcG9pIFxyXG4gICAgbm9uIHNjb3JkYXJlIGwnYWx0IG5lbGxhIGZvdG8gZmFpIHRpcG8gcHJvZHVjdC5uYW1lICsgcGhvdG9cclxuICAgIG5vbiBzY29yZGFyZSBpbCAkXHJcbiAgICBlY2MgZWNjIGVjY1xyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHBvaSBtYWdhcmkgcXVhbmRvIGRldmUgZXNzZXJlIGNoaWFtYXRhIHNpIGZhXHJcbiAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0KVxyXG4gIGUgZ2xpIHBhc3NpIGlsIHByb2R1Y3QgYWxsJ2ludGVybm8gZGVsbGEgZnVuemlvbmUgc3VwZXJpb3JlXHJcbiAgZSBhcHBlbmRpIGdsaSBvZ2dldHRpIGFsIGNvc29cclxuICBcclxuICBcclxuICAqL1xyXG5cclxuICBjb25zb2xlLmxvZyhtYWluQ29udGVudCk7XHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgY3JlYXRlQWJvdXRVcyBmcm9tIFwiLi9hYm91dC11c1wiO1xyXG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwoZWwpIHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gY3JlYXRlRWwoXCJuYXZcIik7XHJcbiAgY29uc3QgdWwgPSBjcmVhdGVFbChcInVsXCIpO1xyXG4gIHVsLmlubmVySFRNTCA9IGBcclxuICAgIDxsaSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPkhvbWU8L2xpPlxyXG4gICAgPGxpIHRhYmluZGV4PVwiMFwiPk1lbnU8L2xpPlxyXG4gICAgPGxpIHRhYmluZGV4PVwiMFwiPkFib3V0IFVzPC9saT5cclxuICBgO1xyXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwicC14XCIsIFwiYWwtaXRtXCIpO1xyXG5cclxuICBjb25zdCBtYWluID0gY3JlYXRlRWwoXCJtYWluXCIpO1xyXG5cclxuICBjb25zdCBkaXZDb250ZW50ID0gY3JlYXRlRWwoXCJkaXZcIik7XHJcblxyXG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKG1haW4pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsKFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgICA8cD5cclxuICAgICAgQ29weXJpZ2h0ICZjb3B5OzIwMjIgQXJtYW5kb0NyblxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FybWFuZG9Dcm5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvcD5cclxuICBgO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpRXZlbnQoKSB7XHJcbiAgaWYgKCF0aGlzLmNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgW2hvbWUsIG1lbnUsIGFib3V0VXNdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBsaVwiKTtcclxuXHJcbiAgICBpZiAodGhpcyA9PT0gaG9tZSkge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgY3JlYXRlSG9tZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzID09PSBtZW51KSB7XHJcbiAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgYWJvdXRVcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBjcmVhdGVNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMgPT09IGFib3V0VXMpIHtcclxuICAgICAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGNyZWF0ZUFib3V0VXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVXZWIoKSB7XHJcbiAgY3JlYXRlTmF2KCk7XHJcblxyXG4gIGNyZWF0ZU1haW4oKTtcclxuICBjcmVhdGVIb21lKCk7XHJcblxyXG4gIGNyZWF0ZUZvb3RlcigpO1xyXG5cclxuICBjb25zdCBsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGxpXCIpO1xyXG4gIGxJdGVtcy5mb3JFYWNoKChsaSkgPT4gbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpRXZlbnQpKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVXZWIgZnJvbSBcIi4vd2VicGFnZVwiO1xyXG5cclxuY3JlYXRlV2ViKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==