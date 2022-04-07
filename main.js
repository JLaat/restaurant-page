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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactTab\": () => (/* binding */ createContactTab)\n/* harmony export */ });\n\nconst createContactTab = () => {\nconst mainContainer = document.getElementById('content');\n\n// Create contact tab\nconst contactTab = document.createElement(\"div\");\ncontactTab.id = \"Contact\";\ncontactTab.className = \"tab\";\n\ncontactTab.style.display = \"grid\";\ncontactTab.style.gridTemplateColumns = \"1fr\";\ncontactTab.style.gridTemplateRows = \"repeat(3, 1fr)\";\n\n// Address section\nconst addressContainer = document.createElement(\"div\");\n\nconst addressHeader = document.createElement(\"h1\");\naddressHeader.textContent = \"Visit us\";\n\nconst addressParagraph = document.createElement(\"h3\");\naddressParagraph.textContent = \"Karjalankatu 103 Joensuu\";\n\naddressContainer.appendChild(addressHeader);\naddressContainer.appendChild(addressParagraph);\n\n\n// Contact section\nconst contactContainer = document.createElement(\"div\");\n\nconst contactHeader = document.createElement(\"h1\");\ncontactHeader.textContent = \"Contact\";\n\nconst email = document.createElement(\"h3\");\nemail.textContent = \"Email: contact@pullaboys.com\";\n\nconst phone = document.createElement(\"h3\");\nphone.textContent = \"Phone: +3584466771\";\n\ncontactContainer.appendChild(contactHeader);\ncontactContainer.appendChild(email);\ncontactContainer.appendChild(phone);\n\n\n// Append into DOM\ncontactTab.appendChild(addressContainer);\ncontactTab.appendChild(contactContainer);\nmainContainer.appendChild(contactTab);\n\n};\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeTab\": () => (/* binding */ createHomeTab)\n/* harmony export */ });\n\nconst createHomeTab = () => {\n    const mainContainer = document.getElementById('content');\n\n    // Create container for home-tab content\n    const homeTab = document.createElement(\"div\");\n    homeTab.className = \"tab\";\n    homeTab.id = \"Home\";\n    \n\n    // Create restaurant image and description\n    const restaurantImage = document.createElement(\"img\");\n    restaurantImage.src = \"/pictures/buns.jpg\";\n\n    const restaurantDescription = document.createElement(\"p\");\n    restaurantDescription.textContent = \"Bun's that will melt in your tongue, with a little Finnish twist\";\n\n    // Append elements into DOM\n    homeTab.appendChild(restaurantImage);\n    homeTab.appendChild(restaurantDescription);\n    mainContainer.appendChild(homeTab);\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n\n(0,_webpage__WEBPACK_IMPORTED_MODULE_0__.pageStartup)();\n\n\nconst changeActiveTab = (tabId) => {\n    const tabs = document.getElementsByClassName(\"tab\");\n\n    // Set every tabs display to none\n    for(let i = 0; i < tabs.length; i++) {\n        tabs[i].style.display = \"none\";\n    }\n    // Set selected tab display to grid\n    document.getElementById(tabId).style.display = \"grid\";\n}\n\n\n// Set event listeners\nconst tabButtons = document.getElementsByClassName(\"button\");\nfor(let i = 0; i < tabButtons.length; i++) {\n    tabButtons[i].addEventListener(\"click\", () => {\n        changeActiveTab(tabButtons[i].textContent);\n    })\n}\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuTab\": () => (/* binding */ createMenuTab)\n/* harmony export */ });\n\nconst createMenuTab = () => {\n    const mainContainer = document.getElementById('content');\n\n    // Create container for menu tab\n    const menuTab = document.createElement('div');\n    menuTab.id = \"Menu\";\n    menuTab.className = \"tab\";\n\n    menuTab.style.display = \"grid\";\n    menuTab.style.gridTemplateColumns = \"repeat(2, 1fr)\";\n    menuTab.style.gridTemplateRows = \"repeat(4, 1fr)\";\n\n    // Menu items\n    const kaneliPulla = document.createElement(\"div\");\n    const imgKaneliPulla = document.createElement(\"img\");\n    imgKaneliPulla.src = \"/pictures/kanelipulla.jpg\";\n    const txtKaneliPulla = document.createElement(\"p\");\n    txtKaneliPulla.textContent = \"Kanelipulla\";\n    kaneliPulla.appendChild(imgKaneliPulla);\n    kaneliPulla.appendChild(txtKaneliPulla);\n\n\n    const voiSilmaPulla = document.createElement(\"div\");\n    const imgVoiSilmaPulla = document.createElement(\"img\");\n    imgVoiSilmaPulla.src = \"/pictures/voipulla.jpg\";\n    const txtVoisilmapulla = document.createElement(\"p\");\n    txtVoisilmapulla.textContent = \"Voisilmäpulla\";\n    voiSilmaPulla.appendChild(imgVoiSilmaPulla);\n    voiSilmaPulla.appendChild(txtVoisilmapulla);\n\n    const korvapuusti = document.createElement(\"div\");\n    const imgKorvaPuusti = document.createElement(\"img\");\n    imgKorvaPuusti.src = \"/pictures/korvapuusti.jpg\";\n    const txtKorvapuusti = document.createElement(\"p\");\n    txtKorvapuusti.textContent = \"Korvapuusti\";\n    korvapuusti.appendChild(imgKorvaPuusti);\n    korvapuusti.appendChild(txtKorvapuusti);\n\n    const karjalanPiirakka = document.createElement(\"div\");\n    const imgKarjalanPiirakka = document.createElement(\"img\");\n    imgKarjalanPiirakka.src = \"/pictures/karjalanpiirakka11.jpg\";\n    const txtKarjalanpiirakka = document.createElement(\"p\");\n    txtKarjalanpiirakka.textContent = \"Karjalanpiirakka\";\n    karjalanPiirakka.appendChild(imgKarjalanPiirakka);\n    karjalanPiirakka.appendChild(txtKarjalanpiirakka);\n\n\n    menuTab.appendChild(kaneliPulla);\n    menuTab.appendChild(voiSilmaPulla);\n    menuTab.appendChild(korvapuusti);\n    menuTab.appendChild(karjalanPiirakka);\n\n    mainContainer.appendChild(menuTab);\n\n}\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageStartup\": () => (/* binding */ pageStartup)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst pageStartup = () => {\n  const mainContainer = document.getElementById(\"content\");\n\n  // Create header for page\n  const header = document.createElement(\"div\");\n  header.className = \"header\";\n\n  const companyName = document.createElement(\"h1\");\n  companyName.textContent = \"Pulla Boys\";\n    // Create tab buttons \n    const tabContainer = document.createElement(\"div\");\n    tabContainer.className = \"tabContainer\";\n    tabContainer.style.display = \"flex\";\n    tabContainer.style.justifyContent = \"center\";\n\n    const btnHome = document.createElement(\"button\");\n    btnHome.textContent = \"Home\";\n    btnHome.className = \"button\";\n\n    const btnMenu = document.createElement(\"button\");\n    btnMenu.textContent = \"Menu\";\n    btnMenu.className = \"button\";\n\n    const btnContact = document.createElement(\"button\");\n    btnContact.textContent = \"Contact\";\n    btnContact.className = \"button\";\n\n    tabContainer.appendChild(btnHome);\n    tabContainer.appendChild(btnMenu);\n    tabContainer.appendChild(btnContact);\n\n    header.appendChild(companyName);\n    header.appendChild(tabContainer);\n    mainContainer.appendChild(header);\n    \n\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeTab)();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuTab)();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContactTab)();\n  \n\n  // Main container styling\n  mainContainer.style.display = \"grid\";\n  mainContainer.style.textAlign = \"center\";\n  mainContainer.style.justifyContent = \"center\";\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/webpage.js?");

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