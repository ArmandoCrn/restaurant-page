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
  `;

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
    <li class="active">Home</li>
    <li>Menu</li>
    <li>About Us</li>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDckM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JnQztBQUNPO0FBQ1A7QUFDaEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNyRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rQztBQUNsQztBQUNBLG9EQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LXVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gXCIuL3dlYnBhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0VXMoKSB7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiA+IGRpdlwiKTtcclxuICBtYWluQ29udGVudC5jbGFzc05hbWUgPSBcImFib3V0LXVzXCI7XHJcbiAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gIDxoMT5CdXJnZXIgSm95PC9oMT5cclxuICA8ZGl2IGNsYXNzPVwiaHJcIj48L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uXCI+XHJcbiAgPHAgY2xhc3M9XCJzdG9yeVwiPkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlxdWlkLCBpcHNhIGRvbG9yIGV4cGxpY2FibyBkdWNpbXVzIGl0YXF1ZSBkb2xvcmlidXMgY29uc2VxdWF0dXIsIHF1aSBxdW9zIGV4cGVkaXRhIGRlc2VydW50IHBlcmZlcmVuZGlzIGNvbnNlcXV1bnR1ciBpZCBlbGlnZW5kaSwgY3VtIHByYWVzZW50aXVtIGxpYmVybyBvYmNhZWNhdGkgZnVnYSBhdHF1ZSE8L3A+XHJcbiAgPHA+8J+TniAwMDAgMTExIDIyMjwvcD5cclxuICA8cD7wn5ONIExvcmVtIElwc3VtIDE4LCBTaXQgQW1ldCwgVVNBPC9wPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGNvbnNvbGUubG9nKG1haW5Db250ZW50KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gPiBkaXZcIik7XHJcbiAgbWFpbkNvbnRlbnQuY2xhc3NOYW1lID0gXCJob21lXCI7XHJcblxyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxoMT5CdXJnZXIgSm95PC9oMT5cclxuICAgIDxoMz5CZXN0IEhhbWJ1cmdlciBpbiB5b3VyIGNvdW50cnkhPC9oMz5cclxuICAgIDxwPk1hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE5MjAuPC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJoclwiPjwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJob3Vyc1wiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5Nb25kYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gOHBtPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5UdWVzZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDhwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+V2VkbmVzZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDhwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+VGh1cnNkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gOHBtPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5GcmlkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gMTFwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+U2F0dXJkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gMXBtPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5TdW5kYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gMTFwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gPiBkaXZcIik7XHJcbiAgbWFpbkNvbnRlbnQuY2xhc3NOYW1lID0gXCJtZW51XCI7XHJcbiAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gIDxoMT5CdXJnZXIgSm95PC9oMT5cclxuICBgO1xyXG5cclxuICBjb25zb2xlLmxvZyhtYWluQ29udGVudCk7XHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgY3JlYXRlQWJvdXRVcyBmcm9tIFwiLi9hYm91dC11c1wiO1xyXG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwoZWwpIHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gY3JlYXRlRWwoXCJuYXZcIik7XHJcbiAgY29uc3QgdWwgPSBjcmVhdGVFbChcInVsXCIpO1xyXG4gIHVsLmlubmVySFRNTCA9IGBcclxuICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPkhvbWU8L2xpPlxyXG4gICAgPGxpPk1lbnU8L2xpPlxyXG4gICAgPGxpPkFib3V0IFVzPC9saT5cclxuICBgO1xyXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwicC14XCIsIFwiYWwtaXRtXCIpO1xyXG5cclxuICBjb25zdCBtYWluID0gY3JlYXRlRWwoXCJtYWluXCIpO1xyXG5cclxuICBjb25zdCBkaXZDb250ZW50ID0gY3JlYXRlRWwoXCJkaXZcIik7XHJcblxyXG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKG1haW4pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsKFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgICA8cD5cclxuICAgICAgQ29weXJpZ2h0ICZjb3B5OzIwMjIgQXJtYW5kb0NyblxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FybWFuZG9Dcm5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvcD5cclxuICBgO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpRXZlbnQoKSB7XHJcbiAgaWYgKCF0aGlzLmNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgW2hvbWUsIG1lbnUsIGFib3V0VXNdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBsaVwiKTtcclxuXHJcbiAgICBpZiAodGhpcyA9PT0gaG9tZSkge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgY3JlYXRlSG9tZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzID09PSBtZW51KSB7XHJcbiAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgYWJvdXRVcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBjcmVhdGVNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMgPT09IGFib3V0VXMpIHtcclxuICAgICAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGNyZWF0ZUFib3V0VXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVXZWIoKSB7XHJcbiAgY3JlYXRlTmF2KCk7XHJcblxyXG4gIGNyZWF0ZU1haW4oKTtcclxuICBjcmVhdGVIb21lKCk7XHJcblxyXG4gIGNyZWF0ZUZvb3RlcigpO1xyXG5cclxuICBjb25zdCBsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGxpXCIpO1xyXG4gIGxJdGVtcy5mb3JFYWNoKChsaSkgPT4gbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpRXZlbnQpKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVXZWIgZnJvbSBcIi4vd2VicGFnZVwiO1xyXG5cclxuY3JlYXRlV2ViKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==