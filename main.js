/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


function createHome() {
  const div = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createEl)("div");
  div.classList.add("p-x", "al-itm");

  const main = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createEl)("main");
  main.innerHTML = `
    <div class="home">
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
    </div>
  `;

  div.appendChild(main);
  _webpage__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(div);
}


/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "createEl": () => (/* binding */ createEl),
/* harmony export */   "default": () => (/* binding */ createWeb)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


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
    }

    if (this === menu) {
      home.classList.remove("active");
      aboutUs.classList.remove("active");
    }

    if (this === aboutUs) {
      home.classList.remove("active");
      menu.classList.remove("active");
    }

    this.classList.add("active");
    console.log({ home, menu, aboutUs });
  }
}

function createWeb() {
  createNav();
  const lItems = document.querySelectorAll("nav li");
  lItems.forEach((li) => li.addEventListener("click", liEvent));

  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

  createFooter();
}

/*
Praticamente qui lasciamo solo la funzione che sarà presente in webpage.js 
così che svolga il suo ruolo

ma per iniziare dovrò scrivere prima cosa succede(?)

vabbe praticamente in webpage.js creiamo la funzione che costruisce l'header
il footer
e il main
in home.js creiamo quello che costruisce tutto ciò all'interno di main
quando premiamo main
*/


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDOUM7QUFDZTtBQUNmLGNBQWMsa0RBQVE7QUFDdEI7QUFDQTtBQUNBLGVBQWUsa0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQW1CO0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGdDO0FBQ2hDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQy9FQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ2xDO0FBQ0Esb0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWwsIGNvbnRlbnQgfSBmcm9tIFwiLi93ZWJwYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwicC14XCIsIFwiYWwtaXRtXCIpO1xyXG5cclxuICBjb25zdCBtYWluID0gY3JlYXRlRWwoXCJtYWluXCIpO1xyXG4gIG1haW4uaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImhvbWVcIj5cclxuICAgICAgPGgxPkJ1cmdlciBKb3k8L2gxPlxyXG4gICAgICA8aDM+QmVzdCBIYW1idXJnZXIgaW4geW91ciBjb3VudHJ5ITwvaDM+XHJcbiAgICAgIDxwPk1hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE5MjAuPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImhyXCI+PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaG91cnNcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+TW9uZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+OWFtIC0gOHBtPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5UdWVzZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+OWFtIC0gOHBtPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5XZWRuZXNkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj45YW0gLSA4cG08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInQtbGVmdFwiPlRodXJzZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+OWFtIC0gOHBtPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5GcmlkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj45YW0gLSAxMXBtPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5TYXR1cmRheTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjlhbSAtIDFwbTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+U3VuZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+OWFtIC0gMTFwbTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkaXYuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG59XHJcbiIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbChlbCkge1xyXG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gY3JlYXRlRWwoXCJuYXZcIik7XHJcbiAgY29uc3QgdWwgPSBjcmVhdGVFbChcInVsXCIpO1xyXG4gIHVsLmlubmVySFRNTCA9IGBcclxuICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPkhvbWU8L2xpPlxyXG4gICAgPGxpPk1lbnU8L2xpPlxyXG4gICAgPGxpPkFib3V0IFVzPC9saT5cclxuICBgO1xyXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWwoXCJmb290ZXJcIik7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IGBcclxuICAgIDxwPlxyXG4gICAgICBDb3B5cmlnaHQgJmNvcHk7MjAyMiBBcm1hbmRvQ3JuXHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQXJtYW5kb0NyblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiPjwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgPC9wPlxyXG4gIGA7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlFdmVudCgpIHtcclxuICBpZiAoIXRoaXMuY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBbaG9tZSwgbWVudSwgYWJvdXRVc10gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGxpXCIpO1xyXG5cclxuICAgIGlmICh0aGlzID09PSBob21lKSB7XHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgYWJvdXRVcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzID09PSBtZW51KSB7XHJcbiAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgYWJvdXRVcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzID09PSBhYm91dFVzKSB7XHJcbiAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHsgaG9tZSwgbWVudSwgYWJvdXRVcyB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYigpIHtcclxuICBjcmVhdGVOYXYoKTtcclxuICBjb25zdCBsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGxpXCIpO1xyXG4gIGxJdGVtcy5mb3JFYWNoKChsaSkgPT4gbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpRXZlbnQpKTtcclxuXHJcbiAgY3JlYXRlSG9tZSgpO1xyXG5cclxuICBjcmVhdGVGb290ZXIoKTtcclxufVxyXG5cclxuLypcclxuUHJhdGljYW1lbnRlIHF1aSBsYXNjaWFtbyBzb2xvIGxhIGZ1bnppb25lIGNoZSBzYXLDoCBwcmVzZW50ZSBpbiB3ZWJwYWdlLmpzIFxyXG5jb3PDrCBjaGUgc3ZvbGdhIGlsIHN1byBydW9sb1xyXG5cclxubWEgcGVyIGluaXppYXJlIGRvdnLDsiBzY3JpdmVyZSBwcmltYSBjb3NhIHN1Y2NlZGUoPylcclxuXHJcbnZhYmJlIHByYXRpY2FtZW50ZSBpbiB3ZWJwYWdlLmpzIGNyZWlhbW8gbGEgZnVuemlvbmUgY2hlIGNvc3RydWlzY2UgbCdoZWFkZXJcclxuaWwgZm9vdGVyXHJcbmUgaWwgbWFpblxyXG5pbiBob21lLmpzIGNyZWlhbW8gcXVlbGxvIGNoZSBjb3N0cnVpc2NlIHR1dHRvIGNpw7IgYWxsJ2ludGVybm8gZGkgbWFpblxyXG5xdWFuZG8gcHJlbWlhbW8gbWFpblxyXG4qL1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVXZWIgZnJvbSBcIi4vd2VicGFnZVwiO1xyXG5cclxuY3JlYXRlV2ViKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==