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
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


function createMenu() {
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

  const mainContent = document.querySelector("main > div");
  mainContent.className = "menu";
  mainContent.innerHTML = `
  <h1>Burger Joy</h1>
  <div class="hr"></div>
  `;

  const itemsMenu = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createEl)("div");
  itemsMenu.classList.add("items-menu");

  function generateItem(product) {
    const text = `
    <img src="img/product/img${product.url}.png" alt="${product.name} photo" />
    <h3>${product.name} <span class="clr">$${product.price}</span></h3>
    <p class="description">
    ${description}
    </p>
    `;

    const menuItem = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createEl)("div");
    menuItem.classList.add("menu-item");
    menuItem.dataset.product = product.url;
    menuItem.innerHTML = text;

    return menuItem;
  }

  products.forEach((product) => itemsMenu.appendChild(generateItem(product)));

  mainContent.appendChild(itemsMenu);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDckM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q3FDO0FBQ3JDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZLGFBQWEsY0FBYztBQUN0RSxVQUFVLGNBQWMscUJBQXFCLGNBQWM7QUFDM0Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRWdDO0FBQ087QUFDUDtBQUNoQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3JGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ2xDO0FBQ0Esb0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQtdXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vd2VicGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWJvdXRVcygpIHtcclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluID4gZGl2XCIpO1xyXG4gIG1haW5Db250ZW50LmNsYXNzTmFtZSA9IFwiYWJvdXQtdXNcIjtcclxuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgPGgxPkJ1cmdlciBKb3k8L2gxPlxyXG4gIDxkaXYgY2xhc3M9XCJoclwiPjwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25cIj5cclxuICA8cCBjbGFzcz1cInN0b3J5XCI+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaXF1aWQsIGlwc2EgZG9sb3IgZXhwbGljYWJvIGR1Y2ltdXMgaXRhcXVlIGRvbG9yaWJ1cyBjb25zZXF1YXR1ciwgcXVpIHF1b3MgZXhwZWRpdGEgZGVzZXJ1bnQgcGVyZmVyZW5kaXMgY29uc2VxdXVudHVyIGlkIGVsaWdlbmRpLCBjdW0gcHJhZXNlbnRpdW0gbGliZXJvIG9iY2FlY2F0aSBmdWdhIGF0cXVlITwvcD5cclxuICA8cD7wn5OeIDAwMCAxMTEgMjIyPC9wPlxyXG4gIDxwPvCfk40gTG9yZW0gSXBzdW0gMTgsIFNpdCBBbWV0LCBVU0E8L3A+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gPiBkaXZcIik7XHJcbiAgbWFpbkNvbnRlbnQuY2xhc3NOYW1lID0gXCJob21lXCI7XHJcblxyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxoMT5CdXJnZXIgSm95PC9oMT5cclxuICAgIDxoMz5CZXN0IEhhbWJ1cmdlciBpbiB5b3VyIGNvdW50cnkhPC9oMz5cclxuICAgIDxwPk1hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE5MjAuPC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJoclwiPjwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJob3Vyc1wiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5Nb25kYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gOHBtPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5UdWVzZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDhwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+V2VkbmVzZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDhwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+VGh1cnNkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gOHBtPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5GcmlkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gMTFwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+U2F0dXJkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gMXBtPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5TdW5kYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gMTFwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gXCIuL3dlYnBhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSGFtYnVyZ2VyXCIsXHJcbiAgICAgIHVybDogXCIxLWhhbWJ1cmdlclwiLFxyXG4gICAgICBwcmljZTogXCIzLjQ5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNoZWVzZWJ1cmdlclwiLFxyXG4gICAgICB1cmw6IFwiMi1jaGVlc2J1cmdlclwiLFxyXG4gICAgICBwcmljZTogXCI0LjQ5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlN0ZWFrXCIsXHJcbiAgICAgIHVybDogXCIzLXN0ZWFrXCIsXHJcbiAgICAgIHByaWNlOiBcIjEwLjk5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJCUSBSaWJzXCIsXHJcbiAgICAgIHVybDogXCI0LWJicVwiLFxyXG4gICAgICBwcmljZTogXCI3Ljk5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNhZXNhciBTYWxhZFwiLFxyXG4gICAgICB1cmw6IFwiNS1zYWxhZFwiLFxyXG4gICAgICBwcmljZTogXCI3LjQ5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZyZW5jaCBGcmllc1wiLFxyXG4gICAgICB1cmw6IFwiNi1mcmllc1wiLFxyXG4gICAgICBwcmljZTogXCIxLjk5XCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID1cclxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWVyYXQgZW9zIHZvbHVwdGF0aWJ1cyByZXByZWhlbmRlcml0IGNvbnNlY3RldHVyLlwiO1xyXG5cclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluID4gZGl2XCIpO1xyXG4gIG1haW5Db250ZW50LmNsYXNzTmFtZSA9IFwibWVudVwiO1xyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IGBcclxuICA8aDE+QnVyZ2VyIEpveTwvaDE+XHJcbiAgPGRpdiBjbGFzcz1cImhyXCI+PC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgaXRlbXNNZW51ID0gY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgaXRlbXNNZW51LmNsYXNzTGlzdC5hZGQoXCJpdGVtcy1tZW51XCIpO1xyXG5cclxuICBmdW5jdGlvbiBnZW5lcmF0ZUl0ZW0ocHJvZHVjdCkge1xyXG4gICAgY29uc3QgdGV4dCA9IGBcclxuICAgIDxpbWcgc3JjPVwiaW1nL3Byb2R1Y3QvaW1nJHtwcm9kdWN0LnVybH0ucG5nXCIgYWx0PVwiJHtwcm9kdWN0Lm5hbWV9IHBob3RvXCIgLz5cclxuICAgIDxoMz4ke3Byb2R1Y3QubmFtZX0gPHNwYW4gY2xhc3M9XCJjbHJcIj4kJHtwcm9kdWN0LnByaWNlfTwvc3Bhbj48L2gzPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgJHtkZXNjcmlwdGlvbn1cclxuICAgIDwvcD5cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVFbChcImRpdlwiKTtcclxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgICBtZW51SXRlbS5kYXRhc2V0LnByb2R1Y3QgPSBwcm9kdWN0LnVybDtcclxuICAgIG1lbnVJdGVtLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xyXG4gIH1cclxuXHJcbiAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4gaXRlbXNNZW51LmFwcGVuZENoaWxkKGdlbmVyYXRlSXRlbShwcm9kdWN0KSkpO1xyXG5cclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChpdGVtc01lbnUpO1xyXG59XHJcbiIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZUFib3V0VXMgZnJvbSBcIi4vYWJvdXQtdXNcIjtcclxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsKGVsKSB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xyXG59XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gIGNvbnN0IG5hdiA9IGNyZWF0ZUVsKFwibmF2XCIpO1xyXG4gIGNvbnN0IHVsID0gY3JlYXRlRWwoXCJ1bFwiKTtcclxuICB1bC5pbm5lckhUTUwgPSBgXHJcbiAgICA8bGkgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj5Ib21lPC9saT5cclxuICAgIDxsaSB0YWJpbmRleD1cIjBcIj5NZW51PC9saT5cclxuICAgIDxsaSB0YWJpbmRleD1cIjBcIj5BYm91dCBVczwvbGk+XHJcbiAgYDtcclxuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICBjb25zdCBkaXYgPSBjcmVhdGVFbChcImRpdlwiKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZChcInAteFwiLCBcImFsLWl0bVwiKTtcclxuXHJcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsKFwibWFpblwiKTtcclxuXHJcbiAgY29uc3QgZGl2Q29udGVudCA9IGNyZWF0ZUVsKFwiZGl2XCIpO1xyXG5cclxuICBtYWluLmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChtYWluKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbChcImZvb3RlclwiKTtcclxuICBmb290ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPHA+XHJcbiAgICAgIENvcHlyaWdodCAmY29weTsyMDIyIEFybWFuZG9Dcm5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Bcm1hbmRvQ3JuXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3A+XHJcbiAgYDtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaUV2ZW50KCkge1xyXG4gIGlmICghdGhpcy5jbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IFtob21lLCBtZW51LCBhYm91dFVzXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgbGlcIik7XHJcblxyXG4gICAgaWYgKHRoaXMgPT09IGhvbWUpIHtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBhYm91dFVzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcyA9PT0gbWVudSkge1xyXG4gICAgICBob21lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgY3JlYXRlTWVudSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzID09PSBhYm91dFVzKSB7XHJcbiAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBjcmVhdGVBYm91dFVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2ViKCkge1xyXG4gIGNyZWF0ZU5hdigpO1xyXG5cclxuICBjcmVhdGVNYWluKCk7XHJcbiAgY3JlYXRlSG9tZSgpO1xyXG5cclxuICBjcmVhdGVGb290ZXIoKTtcclxuXHJcbiAgY29uc3QgbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBsaVwiKTtcclxuICBsSXRlbXMuZm9yRWFjaCgobGkpID0+IGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsaUV2ZW50KSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlV2ViIGZyb20gXCIuL3dlYnBhZ2VcIjtcclxuXHJcbmNyZWF0ZVdlYigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=