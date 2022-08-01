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
    <img src="../dist/img/product/img${product.url}.png" alt="${product.name} photo" />
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDckM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q3FDO0FBQ3JDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxZQUFZLGFBQWEsY0FBYztBQUM5RSxVQUFVLGNBQWMscUJBQXFCLGNBQWM7QUFDM0Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRWdDO0FBQ087QUFDUDtBQUNoQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3JGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ2xDO0FBQ0Esb0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQtdXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vd2VicGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWJvdXRVcygpIHtcclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluID4gZGl2XCIpO1xyXG4gIG1haW5Db250ZW50LmNsYXNzTmFtZSA9IFwiYWJvdXQtdXNcIjtcclxuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgPGgxPkJ1cmdlciBKb3k8L2gxPlxyXG4gIDxkaXYgY2xhc3M9XCJoclwiPjwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25cIj5cclxuICA8cCBjbGFzcz1cInN0b3J5XCI+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaXF1aWQsIGlwc2EgZG9sb3IgZXhwbGljYWJvIGR1Y2ltdXMgaXRhcXVlIGRvbG9yaWJ1cyBjb25zZXF1YXR1ciwgcXVpIHF1b3MgZXhwZWRpdGEgZGVzZXJ1bnQgcGVyZmVyZW5kaXMgY29uc2VxdXVudHVyIGlkIGVsaWdlbmRpLCBjdW0gcHJhZXNlbnRpdW0gbGliZXJvIG9iY2FlY2F0aSBmdWdhIGF0cXVlITwvcD5cclxuICA8cD7wn5OeIDAwMCAxMTEgMjIyPC9wPlxyXG4gIDxwPvCfk40gTG9yZW0gSXBzdW0gMTgsIFNpdCBBbWV0LCBVU0E8L3A+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gPiBkaXZcIik7XHJcbiAgbWFpbkNvbnRlbnQuY2xhc3NOYW1lID0gXCJob21lXCI7XHJcblxyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxoMT5CdXJnZXIgSm95PC9oMT5cclxuICAgIDxoMz5CZXN0IEhhbWJ1cmdlciBpbiB5b3VyIGNvdW50cnkhPC9oMz5cclxuICAgIDxwPk1hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE5MjAuPC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJoclwiPjwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJob3Vyc1wiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5Nb25kYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gOHBtPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5UdWVzZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDhwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+V2VkbmVzZGF5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjlhbSAtIDhwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+VGh1cnNkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gOHBtPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5GcmlkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gMTFwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidC1sZWZ0XCI+U2F0dXJkYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gMXBtPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LWxlZnRcIj5TdW5kYXk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+OWFtIC0gMTFwbTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gXCIuL3dlYnBhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSGFtYnVyZ2VyXCIsXHJcbiAgICAgIHVybDogXCIxLWhhbWJ1cmdlclwiLFxyXG4gICAgICBwcmljZTogXCIzLjQ5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNoZWVzZWJ1cmdlclwiLFxyXG4gICAgICB1cmw6IFwiMi1jaGVlc2J1cmdlclwiLFxyXG4gICAgICBwcmljZTogXCI0LjQ5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlN0ZWFrXCIsXHJcbiAgICAgIHVybDogXCIzLXN0ZWFrXCIsXHJcbiAgICAgIHByaWNlOiBcIjEwLjk5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJCUSBSaWJzXCIsXHJcbiAgICAgIHVybDogXCI0LWJicVwiLFxyXG4gICAgICBwcmljZTogXCI3Ljk5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNhZXNhciBTYWxhZFwiLFxyXG4gICAgICB1cmw6IFwiNS1zYWxhZFwiLFxyXG4gICAgICBwcmljZTogXCI3LjQ5XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZyZW5jaCBGcmllc1wiLFxyXG4gICAgICB1cmw6IFwiNi1mcmllc1wiLFxyXG4gICAgICBwcmljZTogXCIxLjk5XCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID1cclxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWVyYXQgZW9zIHZvbHVwdGF0aWJ1cyByZXByZWhlbmRlcml0IGNvbnNlY3RldHVyLlwiO1xyXG5cclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluID4gZGl2XCIpO1xyXG4gIG1haW5Db250ZW50LmNsYXNzTmFtZSA9IFwibWVudVwiO1xyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IGBcclxuICA8aDE+QnVyZ2VyIEpveTwvaDE+XHJcbiAgPGRpdiBjbGFzcz1cImhyXCI+PC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgaXRlbXNNZW51ID0gY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgaXRlbXNNZW51LmNsYXNzTGlzdC5hZGQoXCJpdGVtcy1tZW51XCIpO1xyXG5cclxuICBmdW5jdGlvbiBnZW5lcmF0ZUl0ZW0ocHJvZHVjdCkge1xyXG4gICAgY29uc3QgdGV4dCA9IGBcclxuICAgIDxpbWcgc3JjPVwiLi4vZGlzdC9pbWcvcHJvZHVjdC9pbWcke3Byb2R1Y3QudXJsfS5wbmdcIiBhbHQ9XCIke3Byb2R1Y3QubmFtZX0gcGhvdG9cIiAvPlxyXG4gICAgPGgzPiR7cHJvZHVjdC5uYW1lfSA8c3BhbiBjbGFzcz1cImNsclwiPiQke3Byb2R1Y3QucHJpY2V9PC9zcGFuPjwvaDM+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAke2Rlc2NyaXB0aW9ufVxyXG4gICAgPC9wPlxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuICAgIG1lbnVJdGVtLmRhdGFzZXQucHJvZHVjdCA9IHByb2R1Y3QudXJsO1xyXG4gICAgbWVudUl0ZW0uaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gbWVudUl0ZW07XHJcbiAgfVxyXG5cclxuICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiBpdGVtc01lbnUuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVJdGVtKHByb2R1Y3QpKSk7XHJcblxyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGl0ZW1zTWVudSk7XHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgY3JlYXRlQWJvdXRVcyBmcm9tIFwiLi9hYm91dC11c1wiO1xyXG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwoZWwpIHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gY3JlYXRlRWwoXCJuYXZcIik7XHJcbiAgY29uc3QgdWwgPSBjcmVhdGVFbChcInVsXCIpO1xyXG4gIHVsLmlubmVySFRNTCA9IGBcclxuICAgIDxsaSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPkhvbWU8L2xpPlxyXG4gICAgPGxpIHRhYmluZGV4PVwiMFwiPk1lbnU8L2xpPlxyXG4gICAgPGxpIHRhYmluZGV4PVwiMFwiPkFib3V0IFVzPC9saT5cclxuICBgO1xyXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwicC14XCIsIFwiYWwtaXRtXCIpO1xyXG5cclxuICBjb25zdCBtYWluID0gY3JlYXRlRWwoXCJtYWluXCIpO1xyXG5cclxuICBjb25zdCBkaXZDb250ZW50ID0gY3JlYXRlRWwoXCJkaXZcIik7XHJcblxyXG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKG1haW4pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsKFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgICA8cD5cclxuICAgICAgQ29weXJpZ2h0ICZjb3B5OzIwMjIgQXJtYW5kb0NyblxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FybWFuZG9Dcm5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvcD5cclxuICBgO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpRXZlbnQoKSB7XHJcbiAgaWYgKCF0aGlzLmNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgW2hvbWUsIG1lbnUsIGFib3V0VXNdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBsaVwiKTtcclxuXHJcbiAgICBpZiAodGhpcyA9PT0gaG9tZSkge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgY3JlYXRlSG9tZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzID09PSBtZW51KSB7XHJcbiAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgYWJvdXRVcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBjcmVhdGVNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMgPT09IGFib3V0VXMpIHtcclxuICAgICAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGNyZWF0ZUFib3V0VXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVXZWIoKSB7XHJcbiAgY3JlYXRlTmF2KCk7XHJcblxyXG4gIGNyZWF0ZU1haW4oKTtcclxuICBjcmVhdGVIb21lKCk7XHJcblxyXG4gIGNyZWF0ZUZvb3RlcigpO1xyXG5cclxuICBjb25zdCBsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGxpXCIpO1xyXG4gIGxJdGVtcy5mb3JFYWNoKChsaSkgPT4gbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpRXZlbnQpKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVXZWIgZnJvbSBcIi4vd2VicGFnZVwiO1xyXG5cclxuY3JlYXRlV2ViKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==