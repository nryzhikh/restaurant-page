/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n    const restaurantImage = \"restaurant-image.jpg\";\n    const restaurantName = \"Our Restaurant\";\n    const restaurantDescription = `At ${restaurantName}, we believe in serving not just food but a wonderful experience. \n        Our chefs are dedicated to preparing dishes that delight your taste buds and leave you wanting more. \n        The warm and inviting ambiance of our restaurant sets the perfect mood for a memorable dining experience. \n        Whether you're celebrating a special occasion or just looking for a great meal, we have something for everyone. \n        Come and join us for an unforgettable culinary journey!`;\n\n    const header = document.createElement(\"header\");\n    header.innerHTML = `<h1>Welcome to ${restaurantName}</h1>`;\n    document.body.appendChild(header);\n\n    const main = document.createElement(\"main\");\n    main.innerHTML = `\n        <img src=\"${restaurantImage}\" alt=\"Restaurant Interior\" width =\"400\" height = \"500\">\n        <p>${restaurantDescription}</p>\n    `;\n    document.body.appendChild(main);\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;