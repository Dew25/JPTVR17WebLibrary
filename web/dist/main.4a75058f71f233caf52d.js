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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ReaderModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReaderModule.js */ \"./web/js/ReaderModule.js\");\n/* harmony import */ var _BookModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookModule.js */ \"./web/js/BookModule.js\");\n/* harmony import */ var _AuthModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthModule.js */ \"./web/js/AuthModule.js\");\n\r\n//import {getBooks } from './printBooks.js';\r\n\r\n\r\n\r\n\r\ndocument.getElementById(\"newBooks\").onclick = function(){\r\n  toogleMenuActive(\"newBooks\"); //находится в текущем скрипте\r\n  _BookModule_js__WEBPACK_IMPORTED_MODULE_1__[\"bookModule\"].listBooks(); // импортирована из скрипта (модуля) book.js\r\n};\r\ndocument.getElementById(\"newBook\").onclick = function(){\r\n  toogleMenuActive(\"newBook\"); //находится в текущем скрипте\r\n  _BookModule_js__WEBPACK_IMPORTED_MODULE_1__[\"bookModule\"].printNewBookForm(); // импортирована из скрипта (модуля) book.js\r\n};\r\ndocument.getElementById(\"listReaders\").onclick = function(){\r\n  toogleMenuActive(\"listReaders\");//находится в текущем скрипте\r\n  _ReaderModule_js__WEBPACK_IMPORTED_MODULE_0__[\"readerModule\"].listReaders();// импортирована из скрипта (модуля) reader.js\r\n};\r\ndocument.getElementById(\"showLogin\").onclick = function(){\r\n  toogleMenuActive(\"showLogin\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_2__[\"authModule\"].printLoginForm();\r\n};\r\ndocument.getElementById(\"sysout\").onclick = function(){\r\n  toogleMenuActive(\"sysout\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_2__[\"authModule\"].systemOutput();\r\n};\r\n\r\nfunction toogleMenuActive(elementId){\r\n  let activeElement = document.getElementById(elementId);\r\n  let passiveElements = document.getElementsByClassName(\"nav-item\");\r\n  for(let i = 0; i < passiveElements.length; i++){\r\n    if(activeElement === passiveElements[i]){\r\n      passiveElements[i].classList.add(\"active\");\r\n    }else{\r\n      if(passiveElements[i].classList.contains(\"active\")){\r\n        passiveElements[i].classList.remove(\"active\");\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\r\nfunction validationFunc(){\r\n//  window.addEventListener('click', function () {\r\n    // Fetch all the forms we want to apply custom Bootstrap validation styles to\r\n    var forms = document.getElementsByClassName('needs-validation')\r\n\r\n    // Loop over them and prevent submission\r\n    Array.prototype.filter.call(forms, function (form) {\r\n      form.addEventListener('submit', function (event) {\r\n        if (form.checkValidity() === false) {\r\n          event.preventDefault()\r\n          event.stopPropagation()\r\n        }\r\n        form.classList.add('was-validated')\r\n      }, false)\r\n    });\r\n//  }, false);\r\n}\r\n\r\n//console.log(\"hello1\");\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./web/js/App.js?");

/***/ }),

/***/ "./web/js/AuthModule.js":
/*!******************************!*\
  !*** ./web/js/AuthModule.js ***!
  \******************************/
/*! exports provided: authModule */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Identifier 'authModule' has already been declared (80:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|   }\\n| }\\n> let authModule = new AuthModule();\\n| export {authModule}\\n| \");\n\n//# sourceURL=webpack:///./web/js/AuthModule.js?");

/***/ }),

/***/ "./web/js/BookModule.js":
/*!******************************!*\
  !*** ./web/js/BookModule.js ***!
  \******************************/
/*! exports provided: bookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bookModule\", function() { return bookModule; });\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n/* harmony import */ var _AuthModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthModule.js */ \"./web/js/AuthModule.js\");\n\r\n\r\n\r\nclass Book{\r\n  listBooks(){\r\n//    httpModule.http({url:'listNewBooks',options:{method:'GET'}})\r\n    _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__[\"httpModule\"].http({url:'rest/entity.book',options:{method:'GET'}})\r\n            .then(function(response) {\r\n              console.log(response);\r\n              let data = response;\r\n            //  let data = response;\r\n              let cards = '<div class=\"row w-100 d-flex justify-content-center\">';\r\n              for(let i= 0; i< data.length;i++){\r\n                cards +=\r\n                        `<div class=\"card border-primary m-3\" style=\"width: 10em;\">\r\n                            <div class=\"card-header\">${data[i].name}</div>\r\n                            <div class=\"card-body\">\r\n                              <h4 class=\"card-title\">${data[i].author}</h4>\r\n                              <p class=\"card-text\">${data[i].publishedYear}</p>\r\n                            </div>\r\n                          </div>`;//card(data);\r\n              };\r\n              cards += '</div>';\r\n              document.getElementById('content').innerHTML = cards;\r\n              console.log('Request succeeded with JSON response', response);  \r\n            })\r\n  }\r\n  createBook(){\r\n      let name = document.getElementById('name').value;\r\n      let author = document.getElementById('author').value;\r\n      let isbn = document.getElementById('isbn').value;\r\n      let publishedYear = document.getElementById('publishedYear').value;\r\n      let countInLibrary = document.getElementById('countInLibrary').value;\r\n      let price = document.getElementById('price').value;\r\n      let book={\r\n          \"name\": name,\r\n          \"author\": author,\r\n          \"isbn\": isbn,\r\n          \"publishedYear\": publishedYear,\r\n          \"countInLibrary\": countInLibrary,\r\n          \"price\": price,\r\n      }\r\n      \r\n     _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__[\"httpModule\"].http({url:'rest/entity.book',options:{method:'POST',data:book}})\r\n            .then(function(response) {\r\n              console.log(response);\r\n              if(response === undefined){\r\n                document.getElementById('info').innerHTML = 'Книга добавлена';\r\n                bookModule.listBooks();//this === undefined в модуле\r\n              }else{\r\n                document.getElementById('info').innerHTML = 'Книгу добавить не удалось'; \r\n                if(response.authStatus === 'false'){\r\n                  _AuthModule_js__WEBPACK_IMPORTED_MODULE_1__[\"authModule\"].printLoginForm();\r\n                }else{\r\n                  bookModule.listBooks();\r\n                }\r\n              }    \r\n              console.log('Request succeeded with JSON response', response);  \r\n            });\r\n\r\n  }\r\n  \r\n  printNewBookForm(validFunc){\r\n    let htmlAddBook = `<div class=\"row d-flex justify-content-center\">\r\n                        <div class=\"col-md-8 order-md-1\">\r\n                          <h4 class=\"mb-3\">Добавить книгу</h4>\r\n                          <form class=\"needs-validation\" novalidate>\r\n                            \r\n                            <div class=\"mb-3\">\r\n                              <label for=\"name\">Название</label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"\" value=\"\" required>\r\n                              <div class=\"invalid-feedback\">\r\n                                Название должно быть заполнено.\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"mb-3\">\r\n                              <label for=\"author\">Автор книги</label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"author\" placeholder=\"\" value=\"\" required>\r\n                              <div class=\"invalid-feedback\">\r\n                                Имя автора должно быть заполнено.\r\n                              </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"mb-3\">\r\n                              <label for=\"isbn\">ISBN</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"isbn\" placeholder=\"isbn\" required>\r\n                                <div class=\"invalid-feedback\" style=\"width: 100%;\">\r\n                                  Это поле должно быть заполнено!\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-4 mb-3\">\r\n                                <label for=\"publishedYear\">Год издания книги</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"publishedYear\" placeholder=\"год издания\">\r\n                                <div class=\"invalid-feedback\">\r\n                                  Это поле должно быть заполнено!\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"col-md-4 mb-3\">\r\n                                <label for=\"countInLibrary\">Количество экземпляров</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"countInLibrary\" placeholder=\"Сколько экземпляров\" required>\r\n                                <div class=\"invalid-feedback\">\r\n                                  Это поле должно быть заполнено!\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"col-md-4 mb-3\">\r\n                                <label for=\"price\">Цена книги</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"Цена книги\">\r\n                              </div>\r\n                            </div>\r\n                            <hr class=\"mb-4\">\r\n                            <button class=\"btn btn-primary btn-lg btn-block\" id=\"btnAddBook\" type=\"button\">Добавить книгу</button>\r\n                          </form>\r\n                        </div>\r\n                      </div>`;\r\n    document.getElementById('content').innerHTML = htmlAddBook;\r\n    document.getElementById('btnAddBook').addEventListener('click', this.createBook);\r\n    \r\n  }\r\n\r\n}\r\nconst bookModule = new Book();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./web/js/BookModule.js?");

/***/ }),

/***/ "./web/js/HttpModule.js":
/*!******************************!*\
  !*** ./web/js/HttpModule.js ***!
  \******************************/
/*! exports provided: httpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpModule\", function() { return httpModule; });\n/*  fetch немножко параноик и по умолчанию не \r\n*   передаёт куки от сайта, на который \r\n*   отправляется запрос (а идентификатор \r\n*   сессии хранится в куке PHPSESSID). \r\n*   За передачу кук и заголовков авторизации \r\n*   отвечает опция credentials, которая может \r\n*   иметь одно из следующих значений:\r\n*     'omit' (по умолчанию) — не передавать куки и заголовки авторизации;\r\n*     'same-origin' — передавать, только если домен, на который \r\n*       отправляется запрос, совпадает с доменом текущего сайта \r\n*       (точнее, origin; сложный случай, но текущего вопроса не касается, \r\n*       так что не буду его подробно описывать);\r\n*     'include' — передавать.\r\n*/\r\n//делаем доступными функции класса в других модулях\r\n\r\nclass HttpModule{\r\n  \r\n  status(response) {  \r\n    if (response.status >= 200 && response.status < 300) {  \r\n      return Promise.resolve(response)  \r\n    } else {  \r\n      return Promise.reject(new Error(response.statusText))  \r\n    }  \r\n  }\r\n  json(response) {  \r\n    return response.json()  \r\n  }\r\n //формирует options для fetch\r\n  fetchOpts(opt){\r\n    if(opt.method === 'POST'){\r\n      return {\r\n              method: opt.method,\r\n              headers: {\r\n                'Content-Type': 'application/json;charset=utf-8'\r\n              },\r\n              credentials: 'include',\r\n              body: JSON.stringify(opt.data)\r\n            };\r\n    }else{\r\n      return {\r\n              method: opt.method,\r\n              headers: {\r\n                'Content-Type': 'application/json;charset=utf-8'\r\n              },\r\n              credentials: 'include'\r\n            };\r\n    }\r\n  };\r\n\r\n  http(httpOptions){\r\n    if (httpOptions.params != null){\r\n      httpOptions.url= httpOptions.url+'?'+this.queryParams(httpOptions.params);\r\n    }\r\n    let options = this.fetchOpts(httpOptions.options);\r\n    return fetch(httpOptions.url, options)\r\n              .then(this.status)\r\n              .then(this.json)\r\n              .catch((ex) => console.log(\"Fetch Exception\", ex));\r\n  };\r\n// преобразовывает пары ключ:значение в key=value как это отображается в параметрах \r\n  queryParams(params) {\r\n      return Object.keys(params)\r\n          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))\r\n          .join('&');\r\n  }\r\n\r\n}\r\n\r\nlet httpModule = new HttpModule();\r\n\r\n\n\n//# sourceURL=webpack:///./web/js/HttpModule.js?");

/***/ }),

/***/ "./web/js/ReaderModule.js":
/*!********************************!*\
  !*** ./web/js/ReaderModule.js ***!
  \********************************/
/*! exports provided: readerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readerModule\", function() { return readerModule; });\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n/* harmony import */ var _BookModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookModule.js */ \"./web/js/BookModule.js\");\n\r\n\r\n\r\n\r\nclass ReaderModule{\r\n  listReaders(){\r\n    _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__[\"httpModule\"].http({url:'listReadersJson',options:{method:'GET'}})\r\n      .then(function(response) {  \r\n        if(response.authStatus === \"true\"){\r\n          let data = response.dataJson;\r\n          let cards = '<div class=\"w-100 d-flex justify-content-center\">';\r\n          for(let i=0;i<data.length;i++){\r\n            cards +=  \r\n             `<div class=\"card border-primary m-3\" style=\"max-width: 30rem;\">\r\n                <div class=\"card-header\">${data[i].name} ${data[i].surname}</div>\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Телефон: ${data[i].phone}</h4>\r\n                  <p class=\"card-text\">Кошелек с деньгами: ${data[i].money}</p>\r\n                </div>\r\n              </div>`;;\r\n          }\r\n          cards +='</div>';\r\n          document.getElementById('content').innerHTML = cards;\r\n        }else{\r\n          _BookModule_js__WEBPACK_IMPORTED_MODULE_1__[\"bookModule\"].listBooks();\r\n          document.getElementById(\"info\").innerHTML=\"У вас нет прав. Войдите!\"\r\n        }\r\n        console.log('Request succeeded with JSON response', response);  \r\n      })\r\n      .catch(function(error) {  \r\n        console.log('Request failed', error);  \r\n      });\r\n  }\r\n\r\n  printListReaders(data){\r\n    let cards = '<div class=\"w-100 d-flex justify-content-center\">';\r\n    for(let i=0;i<data.length;i++){\r\n      cards +=  \r\n       `<div class=\"card border-primary m-3\" style=\"max-width: 30rem;\">\r\n          <div class=\"card-header\">${data[i].name} ${data[i].surname}</div>\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Телефон: ${data[i].phone}</h4>\r\n            <p class=\"card-text\">Кошелек с деньгами: ${data[i].money}</p>\r\n          </div>\r\n        </div>`;;\r\n    }\r\n    cards +='</div>';\r\n    document.getElementById('content').innerHTML = cards;\r\n  }\r\n  printNewReaderForm(){\r\n   document.getElementById('content').innerHTML=\r\n            `<div class=\"card w-50\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title w-100 text-center\">Зарегистрировать пользователя</h5>\r\n                  <p class=\"card-text d-flex justify-content-end\">Имя пользователя: <input class=\"w-50 ml-3\" type=\"text\" id=\"firstname\"></p>\r\n                  <p class=\"card-text d-flex justify-content-end\">Фамилия пользователя: <input class=\"w-50 ml-3\" type=\"text\" id=\"lastname\"></p>\r\n                  <p class=\"card-text d-flex justify-content-end\">Телефон пользователя: <input class=\"w-50 ml-3\" type=\"text\" id=\"phone\"></p>\r\n                  <p class=\"card-text d-flex justify-content-end\">Логин: <input class=\"w-50 ml-3\" type=\"text\" id=\"login\"></p>\r\n                  <p class=\"card-text d-flex justify-content-end\">Пароль: <input class=\"w-50 ml-3\" type=\"text\" id=\"password\"></p>\r\n                  <a href=\"#\" id=\"btnAddUser\" class=\"btn btn-primary w-100\">Зарегистрировать пользователя</a>\r\n                </div>\r\n            </div>`;\r\n    document.getElementById('btnAddUser').onclick=function(){\r\n        createUser();\r\n    }\r\n  }\r\n}\r\nlet readerModule = new ReaderModule();\r\n\r\n\n\n//# sourceURL=webpack:///./web/js/ReaderModule.js?");

/***/ })

/******/ });