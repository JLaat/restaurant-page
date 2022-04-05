/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeTab\": () => (/* binding */ createHomeTab)\n/* harmony export */ });\n\nconst createHomeTab = () => {\n    const mainContainer = document.getElementById('content');\n\n    // Create container for home-tab content\n    const homeTab = document.createElement(\"div\");\n    homeTab.className = \"tab\";\n    homeTab.style.display = \"grid\";\n\n\n    // Create restaurant image and description\n    const restaurantImage = document.createElement(\"img\");\n    restaurantImage.src = \"/pictures/buns.jpg\";\n\n    const restaurantDescription = document.createElement(\"p\");\n    restaurantDescription.textContent = \"Bun's that will melt in your tongue\";\n\n    // Append elements into DOM\n    homeTab.appendChild(restaurantImage);\n    homeTab.appendChild(restaurantDescription);\n    mainContainer.appendChild(homeTab);\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n\n(0,_webpage__WEBPACK_IMPORTED_MODULE_0__.pageStartup)();\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageStartup\": () => (/* binding */ pageStartup)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nconst pageStartup = () => {\n  const mainContainer = document.getElementById(\"content\");\n\n  // Create header for page\n  const header = document.createElement(\"div\");\n  header.className = \"header\";\n\n  const companyName = document.createElement(\"h1\");\n  companyName.textContent = \"Pulla Boys\";\n    // Create tab buttons \n    const tabContainer = document.createElement(\"div\");\n    tabContainer.style.display = \"flex\";\n    tabContainer.style.justifyContent = \"center\";\n\n    const btnHome = document.createElement(\"button\");\n    btnHome.textContent = \"Home\";\n    const btnMenu = document.createElement(\"button\");\n    btnMenu.textContent = \"Menu\";\n    const btnContact = document.createElement(\"button\");\n    btnContact.textContent = \"Contact\";\n\n    tabContainer.appendChild(btnHome);\n    tabContainer.appendChild(btnMenu);\n    tabContainer.appendChild(btnContact);\n\n    header.appendChild(companyName);\n    header.appendChild(tabContainer);\n    mainContainer.appendChild(header);\n    \n\n\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeTab)();\n\n  // Main container styling\n  mainContainer.style.display = \"grid\";\n  mainContainer.style.textAlign = \"center\";\n  mainContainer.style.justifyContent = \"center\";\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/webpage.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;