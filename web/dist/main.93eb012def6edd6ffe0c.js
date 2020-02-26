/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/js/App.js":
/*!***********************!*\
  !*** ./web/js/App.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ReaderModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReaderModule.js */ \"./web/js/ReaderModule.js\");\n/* harmony import */ var _BookModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookModule.js */ \"./web/js/BookModule.js\");\n/* harmony import */ var _BookModule_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BookModule_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthModule.js */ \"./web/js/AuthModule.js\");\n\n//import {getBooks } from './printBooks.js';\n\n\n\n\ndocument.getElementById(\"newBooks\").onclick = function(){\n  toogleMenuActive(\"newBooks\"); //находится в текущем скрипте\n  _BookModule_js__WEBPACK_IMPORTED_MODULE_1__[\"bookModule\"].listBooks(); // импортирована из скрипта (модуля) book.js\n};\ndocument.getElementById(\"newBook\").onclick = function(){\n  toogleMenuActive(\"newBook\"); //находится в текущем скрипте\n  _BookModule_js__WEBPACK_IMPORTED_MODULE_1__[\"bookModule\"].printNewBookForm(); // импортирована из скрипта (модуля) book.js\n};\ndocument.getElementById(\"listReaders\").onclick = function(){\n  toogleMenuActive(\"listReaders\");//находится в текущем скрипте\n  _ReaderModule_js__WEBPACK_IMPORTED_MODULE_0__[\"readerModule\"].listReaders();// импортирована из скрипта (модуля) reader.js\n};\ndocument.getElementById(\"showLogin\").onclick = function(){\n  toogleMenuActive(\"showLogin\");\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_2__[\"authModule\"].printLoginForm();\n};\ndocument.getElementById(\"sysout\").onclick = function(){\n  toogleMenuActive(\"sysout\");\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_2__[\"authModule\"].systemOutput();\n};\n\nfunction toogleMenuActive(elementId){\n  let activeElement = document.getElementById(elementId);\n  let passiveElements = document.getElementsByClassName(\"nav-item\");\n  for(let i = 0; i < passiveElements.length; i++){\n    if(activeElement === passiveElements[i]){\n      passiveElements[i].classList.add(\"active\");\n    }else{\n      if(passiveElements[i].classList.contains(\"active\")){\n        passiveElements[i].classList.remove(\"active\");\n      }\n    }\n  }\n}\n\n\nfunction validationFunc(){\n//  window.addEventListener('click', function () {\n    // Fetch all the forms we want to apply custom Bootstrap validation styles to\n    var forms = document.getElementsByClassName('needs-validation')\n\n    // Loop over them and prevent submission\n    Array.prototype.filter.call(forms, function (form) {\n      form.addEventListener('submit', function (event) {\n        if (form.checkValidity() === false) {\n          event.preventDefault()\n          event.stopPropagation()\n        }\n        form.classList.add('was-validated')\n      }, false)\n    });\n//  }, false);\n}\n\nconsole.log(\"hello\");\n\n\n\n\n//# sourceURL=webpack:///./web/js/App.js?");

/***/ }),

/***/ "./web/js/AuthModule.js":
/*!******************************!*\
  !*** ./web/js/AuthModule.js ***!
  \******************************/
/*! exports provided: authModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authModule\", function() { return authModule; });\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n/* harmony import */ var _BookModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookModule.js */ \"./web/js/BookModule.js\");\n/* harmony import */ var _BookModule_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BookModule_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//export {printLoginForm,systemOutput};\n\n\nclass AuthModule{\n//код внедрения в страничку\n  cards(){\n    return  `<div class=\"w-100 d-flex justify-content-center\">\n               <div class=\"card border-primary p-2\" style=\"max-width: 30rem;\">\n                  <div class=\"card-header text-center\">Введите логин и пароль</div>\n                  <div class=\"card-body\">\n                    <p class=\"card-text d-flex justify-content-between\">Логин: <input class=\"ml-2\" type=\"text\" id=\"login\"></p>\n                    <p class=\"card-text d-flex justify-content-between\">Пароль: <input class=\"ml-2\" type=\"text\" id=\"password\"></p>\n                    <p class=\"card-text\"><button class=\"btn btn-light w-100\" type=\"button\" id=\"btnEnter\">Войти</button</p>\n                  </div>\n                </div>\n             </div>`;\n  }\n\n  printLoginForm(){\n    document.getElementById('content').innerHTML = `<div class=\"w-100 d-flex justify-content-center\">\n               <div class=\"card border-primary p-2\" style=\"max-width: 30rem;\">\n                  <div class=\"card-header text-center\">Введите логин и пароль</div>\n                  <div class=\"card-body\">\n                    <p class=\"card-text d-flex justify-content-between\">Логин: <input class=\"ml-2\" type=\"text\" id=\"login\"></p>\n                    <p class=\"card-text d-flex justify-content-between\">Пароль: <input class=\"ml-2\" type=\"text\" id=\"password\"></p>\n                    <p class=\"card-text\"><button class=\"btn btn-light w-100\" type=\"button\" id=\"btnEnter\">Войти</button</p>\n                  </div>\n                </div>\n             </div>`;//cards;\n    document.getElementById('btnEnter').onclick = function(){\n      \n    let login = document.getElementById('login').value;\n    let password = document.getElementById('password').value;\n    let credentials = {\n      'login': login,\n      'password': password\n    };\n    _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__[\"httpModule\"].http({url:'loginJson', \n            options:{method:'POST',data:credentials}\n          }).then(function(response) { \n              if(response.authStatus === 'true'){\n                localStorage.setItem('token',response.token);\n                localStorage.setItem('user',response.user);\n                document.getElementById('info').innerHTML = 'Вы вошли как '+response.user.login;\n                document.getElementById('showLogin').style.display = 'none';\n                document.getElementById('sysout').style.display = 'block';\n                document.getElementById('listReaders').style.display = 'block';\n                document.getElementById('newBook').style.display = 'block';\n                \n              }else{\n                document.getElementById('info').innerHTML = 'Войти не удалось';\n                this.printLoginForm();\n                document.getElementById('showLogin').style.display = 'block';\n                document.getElementById('sysout').style.display = 'none';\n                document.getElementById('listReaders').style.display = 'none';\n                //document.getElementById('newBook').style.display = 'none';\n              }\n              _BookModule_js__WEBPACK_IMPORTED_MODULE_1__[\"bookModule\"].listBooks();\n              console.log('Request succeeded with JSON response', response);  \n            })\n    }  \n  }\n\n  systemOutput(){\n      _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__[\"httpModule\"].http({url:'logoutJson',\n            options:{method:'GET'}\n          })\n            .then(function(response) { \n              if('false'===response.authStatus){\n                if(localStorage.getItem('token')!== null){\n                  localStorage.removeItem('token');\n                }\n                if(localStorage.getItem('user')!== null){\n                  localStorage.removeItem('user');\n                }\n                document.getElementById('showLogin').style.display = 'block';\n                document.getElementById('sysout').style.display = 'none';\n                document.getElementById('listReaders').style.display = 'none';\n                document.getElementById('info').innerHTML = 'Вы вышли';\n                _BookModule_js__WEBPACK_IMPORTED_MODULE_1__[\"bookModule\"].listBooks();\n              }\n              console.log('Request succeeded with JSON response', response);  \n            })\n\n  }\n}\nlet authModule = new AuthModule();\n\n\n\n//# sourceURL=webpack:///./web/js/AuthModule.js?");

/***/ }),

/***/ "./web/js/BookModule.js":
/*!******************************!*\
  !*** ./web/js/BookModule.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (4:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| class Book{\\n>   cart=`<div class=\\\"card border-primary m-3\\\" style=\\\"max-width: 10rem;\\\">\\n|           <div class=\\\"card-header\\\">${data[i].name}</div>\\n|           <div class=\\\"card-body\\\">\");\n\n//# sourceURL=webpack:///./web/js/BookModule.js?");

/***/ }),

/***/ "./web/js/HttpModule.js":
/*!******************************!*\
  !*** ./web/js/HttpModule.js ***!
  \******************************/
/*! exports provided: httpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpModule\", function() { return httpModule; });\n/*  fetch немножко параноик и по умолчанию не \n*   передаёт куки от сайта, на который \n*   отправляется запрос (а идентификатор \n*   сессии хранится в куке PHPSESSID). \n*   За передачу кук и заголовков авторизации \n*   отвечает опция credentials, которая может \n*   иметь одно из следующих значений:\n*     'omit' (по умолчанию) — не передавать куки и заголовки авторизации;\n*     'same-origin' — передавать, только если домен, на который \n*       отправляется запрос, совпадает с доменом текущего сайта \n*       (точнее, origin; сложный случай, но текущего вопроса не касается, \n*       так что не буду его подробно описывать);\n*     'include' — передавать.\n*/\n//делаем доступными функции класса в других модулях\n\nclass HttpModule{\n  \n  status(response) {  \n    if (response.status >= 200 && response.status < 300) {  \n      return Promise.resolve(response)  \n    } else {  \n      return Promise.reject(new Error(response.statusText))  \n    }  \n  }\n  json(response) {  \n    return response.json()  \n  }\n //формирует options для fetch\n  fetchOpts(opt){\n    if(opt.method === 'POST'){\n      return {\n              method: opt.method,\n              headers: {\n                'Content-Type': 'application/json;charset=utf-8'\n              },\n              credentials: 'include',\n              body: JSON.stringify(opt.data)\n            };\n    }else{\n      return {\n              method: opt.method,\n              headers: {\n                'Content-Type': 'application/json;charset=utf-8'\n              },\n              credentials: 'include'\n            };\n    }\n  };\n\n  http(httpOptions){\n    if (httpOptions.params != null){\n      httpOptions.url= httpOptions.url+'?'+this.queryParams(httpOptions.params);\n    }\n    let options = this.fetchOpts(httpOptions.options);\n    return fetch(httpOptions.url, options)\n              .then(this.status)\n              .then(this.json)\n              .catch((ex) => console.log(\"Fetch Exception\", ex));\n  };\n// преобразовывает пары ключ:значение в key=value как это отображается в параметрах \n  queryParams(params) {\n      return Object.keys(params)\n          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))\n          .join('&');\n  }\n\n}\n\nlet httpModule = new HttpModule();\n\n\n\n//# sourceURL=webpack:///./web/js/HttpModule.js?");

/***/ }),

/***/ "./web/js/ReaderModule.js":
/*!********************************!*\
  !*** ./web/js/ReaderModule.js ***!
  \********************************/
/*! exports provided: readerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readerModule\", function() { return readerModule; });\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n/* harmony import */ var _BookModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookModule.js */ \"./web/js/BookModule.js\");\n/* harmony import */ var _BookModule_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BookModule_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nclass ReaderModule{\n  listReaders(){\n    _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__[\"httpModule\"].http({url:'listReadersJson',options:{method:'GET'}})\n      .then(function(response) {  \n        if(response.authStatus === \"true\"){\n          let data = response.dataJson;\n          let cards = '<div class=\"w-100 d-flex justify-content-center\">';\n          for(let i=0;i<data.length;i++){\n            cards +=  \n             `<div class=\"card border-primary m-3\" style=\"max-width: 30rem;\">\n                <div class=\"card-header\">${data[i].name} ${data[i].surname}</div>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Телефон: ${data[i].phone}</h4>\n                  <p class=\"card-text\">Кошелек с деньгами: ${data[i].money}</p>\n                </div>\n              </div>`;;\n          }\n          cards +='</div>';\n          document.getElementById('content').innerHTML = cards;\n        }else{\n          _BookModule_js__WEBPACK_IMPORTED_MODULE_1__[\"bookModule\"].listBooks();\n          document.getElementById(\"info\").innerHTML=\"У вас нет прав. Войдите!\"\n        }\n        console.log('Request succeeded with JSON response', response);  \n      })\n      .catch(function(error) {  \n        console.log('Request failed', error);  \n      });\n  }\n\n  printListReaders(data){\n    let cards = '<div class=\"w-100 d-flex justify-content-center\">';\n    for(let i=0;i<data.length;i++){\n      cards +=  \n       `<div class=\"card border-primary m-3\" style=\"max-width: 30rem;\">\n          <div class=\"card-header\">${data[i].name} ${data[i].surname}</div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Телефон: ${data[i].phone}</h4>\n            <p class=\"card-text\">Кошелек с деньгами: ${data[i].money}</p>\n          </div>\n        </div>`;;\n    }\n    cards +='</div>';\n    document.getElementById('content').innerHTML = cards;\n  }\n}\nlet readerModule = new ReaderModule();\n\n\n\n//# sourceURL=webpack:///./web/js/ReaderModule.js?");

/***/ })

/******/ });