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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/createStore.js":
/*!********************************!*\
  !*** ./helpers/createStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/reducers */ \"./src/components/reducers/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req) {\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n    // baseURL: 'https://wsa-api-nytnyt.herokuapp.com',\n    baseURL: 'http://localhost:5000',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_src_components_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(axiosInstance)));\n  return store;\n});\n\n//# sourceURL=webpack:///./helpers/createStore.js?");

/***/ }),

/***/ "./helpers/renderer.js":
/*!*****************************!*\
  !*** ./helpers/renderer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/Routes */ \"./src/Routes.js\");\n\n\n\n\n //serialize is used to prevent xss attacks\n\n\n\n\n\n/**\r\n * Denne funktion renderer det content vi vil have vist på skræmen først. \r\n * Det der sker, er at data storen bliver loadet, og smidt med som content.\r\n * Herefter omformateres det til en string af html og sendes med i det html dokument der bliver sendt tilbage til brugeren først.\r\n * først herefter loades bundle.js filen, som er alt det react, vi gerne vil have på siden.\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store, context) {\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_7__[\"ServerStyleSheet\"]();\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_src_Routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"])))));\n  var style = sheet.getStyleTags(); //This instance returns an object of all the metatags we have loaded up to the Helmet lib.\n\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_6__[\"Helmet\"].renderStatic();\n  return \"\\n        <!DOCTYPE html>\\n            <head>\\n            \".concat(helmet.title.toString(), \"\\n            \").concat(helmet.meta.toString(), \"\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Work+Sans:400,500\\\" rel=\\\"stylesheet\\\" type=\\\"text/css\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Cousine\\\" rel=\\\"stylesheet\\\" type=\\\"text/css\\\">          \\n            \").concat(style, \"\\n            </head>\\n            <body>\\n                <div id=\\\"root\\\">\").concat(content, \"</div>\\n                <script> \\n                    window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), \"\\n                </script>\\n                <script src=\\\"/bundle.js\\\"></script>\\n            </body>\\n        </html> \\n    \");\n});\n\n//# sourceURL=webpack:///./helpers/renderer.js?");

/***/ }),

/***/ "./public/css/Fonts.js":
/*!*****************************!*\
  !*** ./public/css/Fonts.js ***!
  \*****************************/
/*! exports provided: Paragraph, Header1, Header2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Paragraph\", function() { return Paragraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header1\", function() { return Header1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header2\", function() { return Header2; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    font-size: 30px;\\n    letter-spacing: 2px;\\n    font-family: 'Chewy', sans-serif;\\n    line-height: 1.5;\\n    margin: 0px;\\n    color: #fff;\\n    text-shadow: 0px 2px 7px rgba(0,0,0,0.25);\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    font-size: 60px;\\n    letter-spacing: 2px;\\n    font-family: 'Chewy', sans-serif;\\n    line-height: 1.25;\\n    margin: 0px;\\n    color: #fff;\\n    text-shadow: 0px 2px 7px rgba(0,0,0,0.25);\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    font-size: 14px;\\n    font-family: 'Raleway', sans-serif;\\n    line-height: 1.25;\\n    letter-spacing: 1.25px;\\n    margin: 0px;\\n    color: white;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject());\nvar Header1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1(_templateObject2());\nvar Header2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2(_templateObject3());\n\n//# sourceURL=webpack:///./public/css/Fonts.js?");

/***/ }),

/***/ "./public/css/Global.js":
/*!******************************!*\
  !*** ./public/css/Global.js ***!
  \******************************/
/*! exports provided: Wrapper, ParagraphContainerCenter, FlexContentColumnDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParagraphContainerCenter\", function() { return ParagraphContainerCenter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexContentColumnDiv\", function() { return FlexContentColumnDiv; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    flex-flow: column nowrap;\\n    justify-content: center;\\n    text-align: center;\\n    margin: 20px;\\n    box-sizing: border-box;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    height: 100%;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\nvar ParagraphContainerCenter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());\nvar FlexContentColumnDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3());\n\n//# sourceURL=webpack:///./public/css/Global.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Routes */ \"./src/Routes.js\");\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/renderer */ \"./helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/createStore */ \"./helpers/createStore.js\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(); ///////////////////////////////\n// CREATE A PROXY TO THE API //\n///////////////////////////////\n\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:5000', {// //this second argument in proxy is not nessesary in your own projects\n  // proxyReqOptDecorator(opts){\n  //     opts.headers['x-forwarded-host'] = 'localhost:3000';\n  //     return opts;\n  // }\n})); // Make a static connection to the public \n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('public')); //CORS handler. pr. default CORS error will take action and deny any api calls. This handles CORS\n\napp.use(function (req, res, next) {\n  res.header(\"Access-Control-Allow-Origin\", \"*\");\n  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');\n  res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n  next();\n});\n/* How to setup your server routing with the React routing. \r\nReact uses paths and its own routing interigation. That is why we want to create an asynchronous connection between \r\nthe server routing and the react routing. If we don't, then we can't retrieve data from external API's or fetch data from\r\nour reducers directely from our front-end to our back-end through and API. Therefore, this app has two redux storages; one for the server side and one \r\nfor the front-end. The helpers/createStore.js takes one or several cookies from our API and stores it in our reducer pr. default. Mainly\r\nthis storage is to check if a user has logged in with passport. Our front-end storage is located in our src/Client.js file. It initialize\r\nthe current state of our entire app. \r\n\r\nThis setup is by far the toughest to understand about a React app created from scratch. (it is very unlogical). \r\n\r\nYou webpack needs to be setup perfect in order for everything ot be rendered correctly. The same goes for your routing handling in src/Routes.js \r\nand how the server side and front-end interperate them. */\n// All routes\n\napp.get('*', function (req, res) {\n  // Create a store that stores a cookie from the API\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req); // Get the current path the user is at in the front end\n\n  var page_path = req.path; //Figure out if any of the front-end routes matches our backend. \n\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"matchRoutes\"])(_src_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path)\n  /* This promise goes directely into our src/Routes.js file. As its an object we need to do the curly braces.\r\n  The route name, is a name that we define ourselves */\n  .map(function (_ref) {\n    var route = _ref.route;\n\n    /* The loadData we use for user authentications. If the use have logged in the data will \r\n    automatically be loaded */\n    return route.loadData ? route.loadData(store, page_path) : null;\n  }) // If the routes are true and has the correct setup, then we can create a promise.\n  .map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(reject);\n      });\n    }\n  });\n  /* Take the above promise (which is a route) and render its content through a renderer method.\r\n  The content is first known after it has run through our renderer method located under ./helpers/renderer.js. */\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req, store, context); // If the user is not validated\n\n    if (context.url) {\n      return res.redirect(302, context.url);\n    } // If the user goes to a page which doesnt exist\n\n\n    if (context.notFound) {\n      res.status(404);\n    } // If everything goes well\n\n\n    res.send(content);\n  });\n}); // Start a server\n\napp.listen(3000, function () {\n  console.log(\"-----------------------------------\");\n  console.log(\"Server is running on localhost 3000\");\n  console.log(\"-----------------------------------\");\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    position: absolute;\\n    top: 0px; left: 0px; right: 0px; bottom: 0px;\\n    overflow-y: scroll;\\n    -webkit-overflow-scrolling: touch;\\n    font-family: 'Open Sans', sans-serif;\\n    box-sizing: border-box;\\n    -webkit-font-smoothing: antialiased;\\n\\n    * {\\n      box-sizing: border-box;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar PageWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());\n/* Vi bør loade lodash metoden map alene - for at spare plads i bundle. */\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: App\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _components_pages_main_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/main/Main */ \"./src/components/pages/main/Main.js\");\n/* harmony import */ var _components_pages_subpages_Signup_Signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/subpages/Signup/Signup */ \"./src/components/pages/subpages/Signup/Signup.js\");\n/* harmony import */ var _components_pages_subpages_Signin_Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/subpages/Signin/Signin */ \"./src/components/pages/subpages/Signin/Signin.js\");\n/* harmony import */ var _components_pages_subpages_CreateCourse_CreateCourse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/subpages/CreateCourse/CreateCourse */ \"./src/components/pages/subpages/CreateCourse/CreateCourse.js\");\n/* harmony import */ var _components_pages_subpages_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/subpages/NotFound/NotFound */ \"./src/components/pages/subpages/NotFound/NotFound.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  routes: [_objectSpread({}, _components_pages_main_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    path: '/',\n    exact: true\n  }), _objectSpread({}, _components_pages_subpages_Signup_Signup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: '/sign-up',\n    exact: true\n  }), _objectSpread({}, _components_pages_subpages_Signin_Signin__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    path: '/sign-in',\n    exact: true\n  }), _objectSpread({}, _components_pages_subpages_CreateCourse_CreateCourse__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    path: '/create-course',\n    exact: true\n  }), _objectSpread({}, _components_pages_subpages_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) // {\n  //     ...NotFoundPage\n  // }\n  ]\n})]);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/components/actions/index.js":
/*!*****************************************!*\
  !*** ./src/components/actions/index.js ***!
  \*****************************************/
/*! exports provided: userAuth, createUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userAuth\", function() { return userAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutUser\", function() { return logoutUser; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/components/actions/types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar userAuth = function userAuth() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n        var res, data, _data;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return api.get('/users/auth');\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.data;\n\n              case 6:\n                data = _context.sent;\n                dispatch({\n                  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_USER\"],\n                  payload: data\n                });\n                _context.next = 17;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](0);\n\n                if (!_context.t0.response) {\n                  _context.next = 17;\n                  break;\n                }\n\n                _context.next = 15;\n                return _context.t0.response.data;\n\n              case 15:\n                _data = _context.sent;\n\n                if (_data) {\n                  dispatch({\n                    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_USER\"],\n                    payload: _data\n                  });\n                }\n\n              case 17:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[0, 10]]);\n      }));\n\n      return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar createUser = function createUser(formData) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n        var res, data, _data2;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n\n                /* Reset the reducer so its empty - it might be the second time the user tries to \r\n                fill in the form because he used an email which is allready in the database. If this\r\n                is the case then the reducer is not empty which will interupt the dispatch. */\n                dispatch({\n                  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_USER\"],\n                  payload: null\n                }); // Make connection to the API proxy\n\n                _context2.next = 4;\n                return api.post('/users', {\n                  data: formData\n                });\n\n              case 4:\n                res = _context2.sent;\n                _context2.next = 7;\n                return res.data;\n\n              case 7:\n                data = _context2.sent;\n\n                // Send back a response to the client\n                if (data) {\n                  dispatch({\n                    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_USER\"],\n                    payload: data\n                  });\n                }\n\n                _context2.next = 18;\n                break;\n\n              case 11:\n                _context2.prev = 11;\n                _context2.t0 = _context2[\"catch\"](0);\n\n                if (!_context2.t0.response) {\n                  _context2.next = 18;\n                  break;\n                }\n\n                _context2.next = 16;\n                return _context2.t0.response.data;\n\n              case 16:\n                _data2 = _context2.sent;\n\n                if (_data2) {\n                  dispatch({\n                    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_USER\"],\n                    payload: _data2\n                  });\n                }\n\n              case 18:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this, [[0, 11]]);\n      }));\n\n      return function (_x4, _x5, _x6) {\n        return _ref2.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar logoutUser = function logoutUser() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n        var res, data, _data3;\n\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.prev = 0;\n                _context3.next = 3;\n                return api.get('/users/logout');\n\n              case 3:\n                res = _context3.sent;\n                _context3.next = 6;\n                return res.data;\n\n              case 6:\n                data = _context3.sent;\n\n                // Send back a response to the client\n                if (data) {\n                  dispatch({\n                    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"LOGOUT_USER\"],\n                    payload: data\n                  });\n                }\n\n                setTimeout(function () {\n                  // Empty the auth reducer\n                  dispatch({\n                    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_USER\"],\n                    payload: null\n                  });\n                }, 2000);\n                _context3.next = 18;\n                break;\n\n              case 11:\n                _context3.prev = 11;\n                _context3.t0 = _context3[\"catch\"](0);\n\n                if (!_context3.t0.response) {\n                  _context3.next = 18;\n                  break;\n                }\n\n                _context3.next = 16;\n                return _context3.t0.response.data;\n\n              case 16:\n                _data3 = _context3.sent;\n\n                if (_data3) {\n                  dispatch({\n                    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"LOGOUT_USER\"],\n                    payload: _data3\n                  });\n                }\n\n              case 18:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this, [[0, 11]]);\n      }));\n\n      return function (_x7, _x8, _x9) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n};\n\n//# sourceURL=webpack:///./src/components/actions/index.js?");

/***/ }),

/***/ "./src/components/actions/types.js":
/*!*****************************************!*\
  !*** ./src/components/actions/types.js ***!
  \*****************************************/
/*! exports provided: CREATE_USER, AUTH_USER, LOGOUT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE_USER\", function() { return CREATE_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_USER\", function() { return AUTH_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT_USER\", function() { return LOGOUT_USER; });\nvar CREATE_USER = 'create_user';\nvar AUTH_USER = 'auth_user';\nvar LOGOUT_USER = 'logout_user';\n\n//# sourceURL=webpack:///./src/components/actions/types.js?");

/***/ }),

/***/ "./src/components/pages/header/Header.js":
/*!***********************************************!*\
  !*** ./src/components/pages/header/Header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_css_Fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/css/Fonts */ \"./public/css/Fonts.js\");\n/* harmony import */ var _public_css_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/css/Global */ \"./public/css/Global.js\");\n/* harmony import */ var _subpages_Signup_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subpages/Signup/styles */ \"./src/components/pages/subpages/Signup/styles.js\");\n\n // Global fonts\n\n // Global styling\n\n // Import styles\n\n\n\nvar Header = function Header(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"bounds\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    title: \"Welcome\",\n    to: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"header--logo\"\n  }, \"Courses\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, props.auth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"user--login\"\n  }, \"Welcome \".concat(props.auth.firstName, \" \").concat(props.auth.lastName, \" \")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    title: \"Sign up\",\n    to: \"/sign-up\"\n  }, \"Sign Up\"), props.auth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"user--login\",\n    onClick: props.logout\n  }, \"Sign out\") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    title: \"Sign in\",\n    to: \"/sign-in\"\n  }, \"Sign In\"), props.logoutUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subpages_Signup_styles__WEBPACK_IMPORTED_MODULE_4__[\"Error\"], null, props.logoutUser.message) : null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/pages/header/Header.js?");

/***/ }),

/***/ "./src/components/pages/main/Main.js":
/*!*******************************************!*\
  !*** ./src/components/pages/main/Main.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ \"./src/components/actions/index.js\");\n/* harmony import */ var _public_css_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/css/Global */ \"./public/css/Global.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/Header */ \"./src/components/pages/header/Header.js\");\n/* harmony import */ var _subpages_Maincontent_MainContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subpages/Maincontent/MainContent */ \"./src/components/pages/subpages/Maincontent/MainContent.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n // In order to\n\n // Connect to states - a react redux method\n\n\n\n\n // Components\n\n\n\n\nvar Main =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Main, _Component);\n\n  function Main(props) {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));\n    _this.state = {};\n    return _this;\n  } ///////////////////////////\n  // REDUCERS              //\n  ///////////////////////////\n\n  /* Ensures that we make a call to the database to check for userAuth each time we load\r\n  this component. If there is an auth then we want it to affect the state for later manipulation\r\n  with the update component lifecycle. */\n\n\n  _createClass(Main, [{\n    key: \"getUserAuth\",\n    value: function getUserAuth() {\n      var userAuth = this.props.userAuth;\n      userAuth();\n    } ///////////////////////////\n    // CLICK HANDLERS        //\n    ///////////////////////////\n\n  }, {\n    key: \"logoutBtn\",\n    value: function logoutBtn(e) {\n      e.preventDefault();\n      var logoutUser = this.props.logoutUser;\n      logoutUser();\n    } ///////////////////////////\n    // COMPONENT LIFE CYCLES //\n    ///////////////////////////\n\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getUserAuth(); // Get the user auth\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_public_css_Global__WEBPACK_IMPORTED_MODULE_3__[\"Wrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        auth: this.props.auth,\n        logout: this.logoutBtn.bind(this),\n        logoutUser: this.props.logout\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subpages_Maincontent_MainContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // Stores the user auth\n\n\nfunction loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"userAuth\"])());\n} // Makes sure that we can get the auth as a prop\n\n\nfunction mapStateToProps(_ref) {\n  var auth = _ref.auth,\n      logout = _ref.logout;\n  return {\n    auth: auth,\n    logout: logout\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n    userAuth: _actions__WEBPACK_IMPORTED_MODULE_2__[\"userAuth\"],\n    logoutUser: _actions__WEBPACK_IMPORTED_MODULE_2__[\"logoutUser\"]\n  })(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(Main))\n});\n\n//# sourceURL=webpack:///./src/components/pages/main/Main.js?");

/***/ }),

/***/ "./src/components/pages/subpages/CreateCourse/CreateCourse.js":
/*!********************************************************************!*\
  !*** ./src/components/pages/subpages/CreateCourse/CreateCourse.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/Header */ \"./src/components/pages/header/Header.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n // Import components\n\n\n\nvar CreateCourse =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CreateCourse, _Component);\n\n  function CreateCourse(props) {\n    var _this;\n\n    _classCallCheck(this, CreateCourse);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateCourse).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(CreateCourse, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bounds course--detail\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Create Course\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"validation--errors--label\"\n      }, \"Validation errors\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"validation-errors\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Please provide a value for \\\"Title\\\"\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Please provide a value for \\\"Description\\\"\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid-66\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"course--header\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"course--label\"\n      }, \"Course\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"title\",\n        name: \"title\",\n        type: \"text\",\n        className: \"input-title course--title--input\",\n        placeholder: \"Course title...\",\n        value: \"\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"By Joe Smith\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"course--description\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n        id: \"description\",\n        name: \"description\",\n        className: \"\",\n        placeholder: \"Course description...\"\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid-25 grid-right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"course--stats\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"course--stats--list\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"course--stats--list--item\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Estimated Time\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"estimatedTime\",\n        name: \"estimatedTime\",\n        type: \"text\",\n        className: \"course--time--input\",\n        placeholder: \"Hours\",\n        value: \"\"\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"course--stats--list--item\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Materials Needed\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n        id: \"materialsNeeded\",\n        name: \"materialsNeeded\",\n        className: \"\",\n        placeholder: \"List materials...\"\n      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid-100 pad-bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"button\",\n        type: \"submit\"\n      }, \"Create Course\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        class: \"button button-secondary\",\n        onclick: \"event.preventDefault(); location.href='index.html';\"\n      }, \"Cancel\"))))));\n    }\n  }]);\n\n  return CreateCourse;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: CreateCourse\n});\n\n//# sourceURL=webpack:///./src/components/pages/subpages/CreateCourse/CreateCourse.js?");

/***/ }),

/***/ "./src/components/pages/subpages/Maincontent/MainContent.js":
/*!******************************************************************!*\
  !*** ./src/components/pages/subpages/Maincontent/MainContent.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar MainComponent = function MainComponent(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"bounds main-content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"grid-33\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"course--module course--link\",\n    href: \"course-detail.html\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"course--label\"\n  }, \"Course\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"course--title\"\n  }, \"Build a Basic Bookcase\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"grid-33\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"course--module course--link\",\n    href: \"course-detail.html\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"course--label\"\n  }, \"Course\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"course--title\"\n  }, \"Learn How to Program\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"grid-33\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"course--module course--link\",\n    href: \"course-detail.html\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"course--label\"\n  }, \"Course\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"course--title\"\n  }, \"Learn How to Test Programs\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"grid-33\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"course--module course--add--module\",\n    to: \"/create-course\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"course--add--title\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    version: \"1.1\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    x: \"0px\",\n    y: \"0px\",\n    viewBox: \"0 0 13 13\",\n    className: \"add\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polygon\", {\n    points: \"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 \"\n  })), \"New Course\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainComponent);\n\n//# sourceURL=webpack:///./src/components/pages/subpages/Maincontent/MainContent.js?");

/***/ }),

/***/ "./src/components/pages/subpages/NotFound/NotFound.js":
/*!************************************************************!*\
  !*** ./src/components/pages/subpages/NotFound/NotFound.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/Header */ \"./src/components/pages/header/Header.js\");\n\n\n\nvar NotFound = function NotFound() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"bounds\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Not Found\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Sorry! We couldn't find the page you're looking for.\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: NotFound\n});\n\n//# sourceURL=webpack:///./src/components/pages/subpages/NotFound/NotFound.js?");

/***/ }),

/***/ "./src/components/pages/subpages/Signin/Signin.js":
/*!********************************************************!*\
  !*** ./src/components/pages/subpages/Signin/Signin.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../header/Header */ \"./src/components/pages/header/Header.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n // Import components\n\n\n\nvar Signin =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin(props) {\n    var _this;\n\n    _classCallCheck(this, Signin);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signin).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Signin, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bounds\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid-33 centered signin\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Sign In\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"emailAddress\",\n        name: \"emailAddress\",\n        type: \"text\",\n        className: \"\",\n        placeholder: \"Email Address\",\n        value: \"\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"password\",\n        name: \"password\",\n        type: \"password\",\n        className: \"\",\n        placeholder: \"Password\",\n        value: \"\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid-100 pad-bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"button\",\n        type: \"submit\"\n      }, \"Sign In\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        title: \"Welcome\",\n        to: \"/\",\n        className: \"button button-secondary\"\n      }, \"Cancel\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\xA0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Don't have a user account?\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/sign-up\"\n      }, \" Click here\"), \" to sign up!\"))));\n    }\n  }]);\n\n  return Signin;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Signin\n});\n\n//# sourceURL=webpack:///./src/components/pages/subpages/Signin/Signin.js?");

/***/ }),

/***/ "./src/components/pages/subpages/Signup/CreateUser.js":
/*!************************************************************!*\
  !*** ./src/components/pages/subpages/Signup/CreateUser.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ \"redux-form\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/pages/subpages/Signup/styles.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions */ \"./src/components/actions/index.js\");\n/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! domain */ \"domain\");\n/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(domain__WEBPACK_IMPORTED_MODULE_6__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n // Local styles\n\n\n\n\n\nvar CreateUserForm =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CreateUserForm, _Component);\n\n  function CreateUserForm(props, context) {\n    var _this;\n\n    _classCallCheck(this, CreateUserForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateUserForm).call(this, props));\n    _this.state = {\n      isLoading: false,\n      isError: false,\n      isSuccess: false,\n      statusMsg: \"\"\n    };\n    return _this;\n  }\n\n  _createClass(CreateUserForm, [{\n    key: \"renderFields\",\n    value: function renderFields(_ref) {\n      var input = _ref.input,\n          _ref$meta = _ref.meta,\n          touched = _ref$meta.touched,\n          error = _ref$meta.error,\n          otherProps = _objectWithoutProperties(_ref, [\"input\", \"meta\"]);\n\n      var hasError = touched && error !== undefined; // Different field components\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, input.name === \"firstName\" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"InputField\"], _extends({\n        error: hasError,\n        type: \"text\",\n        placeholder: \"First name\"\n      }, input)) : input.name === \"lastName\" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"InputField\"], _extends({\n        error: hasError,\n        type: \"text\",\n        placeholder: \"Last name\"\n      }, input)) : input.name === \"emailAddress\" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"InputField\"], _extends({\n        error: hasError,\n        type: \"email\",\n        placeholder: \"Email address\"\n      }, input)) : input.name === \"password\" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"InputField\"], _extends({\n        error: hasError,\n        type: \"password\",\n        placeholder: \"Password\"\n      }, input)) : input.name === \"confirmPassword\" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"InputField\"], _extends({\n        error: hasError,\n        type: \"password\",\n        placeholder: \"Repeat password\"\n      }, input)) : \"\", hasError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"ErrorContainer\"], null, error));\n    }\n  }, {\n    key: \"submitForm\",\n    value: function submitForm(props) {\n      var createUserReducer = this.props.createUserReducer;\n      createUserReducer(props); // Reset all states and start the loader\n\n      this.setState({\n        isLoading: true\n      });\n    } /////////////////////////\n    // COMPONENT LIFECYCLE //\n    /////////////////////////\n\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      var _this2 = this;\n\n      /* Handle result \r\n      Check if there is a create user state. If there is and it the status code is \r\n      anything but 200 then throw the error message else empty the states for success.\r\n      */\n      var createUserState = this.props.createUserState;\n      /* If isLoading is true and the createUserState is not null state \r\n      then the user has pressed the submit button */\n\n      if (createUserState && this.state.isLoading) {\n        if (createUserState.status !== 201) {\n          this.setState({\n            isLoading: false,\n            isError: true,\n            isSuccess: false,\n            statusMsg: createUserState.message\n          });\n        } else {\n          this.setState({\n            isLoading: false,\n            isError: false,\n            isSuccess: true,\n            statusMsg: createUserState.message\n          });\n          this.props.reset(); // Redirect the user to the front page\n\n          setTimeout(function () {\n            _this2.props.history.push(\"/\");\n          }, 2000);\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var handleSubmit = this.props.handleSubmit; // If the state isSuccess then we want to reset all of the values in the form\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        id: \"create_user_form\",\n        onSubmit: handleSubmit(function (props) {\n          return _this3.submitForm(props);\n        })\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n        name: \"firstName\",\n        component: this.renderFields\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n        name: \"lastName\",\n        component: this.renderFields\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n        name: \"emailAddress\",\n        component: this.renderFields\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n        name: \"password\",\n        component: this.renderFields\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n        name: \"confirmPassword\",\n        component: this.renderFields\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid-100 pad-bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"button\",\n        type: \"submit\"\n      }, this.state.isLoading ? \"Loading...\" : \"Sign up\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        title: \"Welcome\",\n        to: \"/\",\n        className: \"button button-secondary\"\n      }, \"Cancel\")), this.state.isError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Error\"], null, this.state.statusMsg) : null, this.state.isSuccess ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Success\"], null, this.state.statusMsg) : null);\n    }\n  }]);\n\n  return CreateUserForm;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar validate = function validate(values) {\n  var errors = {}; // First name\n\n  if (!values.firstName || values.firstName.trim() === '') {\n    errors.firstName = 'Please fill in your firstname';\n  } // Lastnae\n\n\n  if (!values.lastName || values.lastName.trim() === '') {\n    errors.lastName = 'Please fill in your lastname';\n  } // Email\n\n\n  if (!values.emailAddress || values.emailAddress.trim() === '') {\n    errors.emailAddress = 'Please fill in your email address';\n  } // Password\n\n\n  if (!values.password || values.password.trim() === '') {\n    errors.password = 'Please fill in your password';\n  } // If the passwords length is less than 3\n\n\n  if (values.password && values.password.length <= 3) {\n    errors.password = 'The length of your password should be more than 3 characters';\n  } // Repeat password\n\n\n  if (!values.confirmPassword || values.confirmPassword.trim() === '') {\n    errors.confirmPassword = 'Please confirm your password';\n  } // If the two passwords dont match\n\n\n  if (values.confirmPassword !== values.password) {\n    errors.confirmPassword = 'The two passwords dont match';\n  }\n\n  return errors;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"reduxForm\"])({\n  form: 'createUserForm',\n  validate: validate\n})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(CreateUserForm)));\n\n//# sourceURL=webpack:///./src/components/pages/subpages/Signup/CreateUser.js?");

/***/ }),

/***/ "./src/components/pages/subpages/Signup/Signup.js":
/*!********************************************************!*\
  !*** ./src/components/pages/subpages/Signup/Signup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ \"./src/components/actions/index.js\");\n/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../header/Header */ \"./src/components/pages/header/Header.js\");\n/* harmony import */ var _CreateUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateUser */ \"./src/components/pages/subpages/Signup/CreateUser.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n // Create connection to the reducers\n\n // Import components \n\n\n\n\nvar Signup =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Signup, _Component);\n\n  function Signup(props) {\n    var _this;\n\n    _classCallCheck(this, Signup);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signup).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Signup, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bounds\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid-33 centered signin\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Sign Up\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        createUserReducer: this.props.createUser // create user reducer\n        ,\n        createUserState: this.props.create_user // create user state (check status)\n\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\xA0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Already have a user account?\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/sign-in\"\n      }, \" Click here\"), \" to sign in!\"))));\n    }\n  }]);\n\n  return Signup;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction mapStateToProps(_ref) {\n  var form = _ref.form,\n      create_user = _ref.create_user;\n  return {\n    form: form,\n    create_user: create_user\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n    createUser: _actions__WEBPACK_IMPORTED_MODULE_3__[\"createUser\"]\n  })(Signup)\n});\n\n//# sourceURL=webpack:///./src/components/pages/subpages/Signup/Signup.js?");

/***/ }),

/***/ "./src/components/pages/subpages/Signup/slideUpAnmiation.js":
/*!******************************************************************!*\
  !*** ./src/components/pages/subpages/Signup/slideUpAnmiation.js ***!
  \******************************************************************/
/*! exports provided: slideUpAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slideUpAnimation\", function() { return slideUpAnimation; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    from {\\n        opacity: 1\\n        z-index: 1;\\n        bottom: 0px;\\n    } \\n    to {\\n        z-index: 0;\\n        opacity: 0;\\n        bottom: -80px;\\n    }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar slideUpAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/components/pages/subpages/Signup/slideUpAnmiation.js?");

/***/ }),

/***/ "./src/components/pages/subpages/Signup/styles.js":
/*!********************************************************!*\
  !*** ./src/components/pages/subpages/Signup/styles.js ***!
  \********************************************************/
/*! exports provided: ErrorContainer, ErrorMessage, InputField, Error, Success */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorContainer\", function() { return ErrorContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMessage\", function() { return ErrorMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputField\", function() { return InputField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Error\", function() { return Error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Success\", function() { return Success; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slideUpAnmiation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideUpAnmiation */ \"./src/components/pages/subpages/Signup/slideUpAnmiation.js\");\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n    padding-top: 29px;\\n    left: 0;\\n    position: fixed;\\n    width: 100%;\\n    height: 80px;\\n    text-align: center;\\n    background: #4BB543;\\n    /* border: 1px solid black; */\\n    bottom: 0px;\\n    color: white;\\n    animation: \", \" 1s forwards;\\n    animation-delay: 2s;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n    padding-top: 29px;\\n    left: 0;\\n    position: fixed;\\n    width: 100%;\\n    height: 80px;\\n    text-align: center;\\n    background: #B33A3A;\\n    /* border: 1px solid black; */\\n    bottom: 0px;\\n    color: white;\\n    animation: \", \" 1s forwards;\\n    animation-delay: 2s;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    width: 100%;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    color: #332a40;\\n    border-radius: 8px;\\n    text-align: center;\\n    padding: 15px;\\n    margin-bottom: 15px;\\n    outline: none;\\n    box-sizing: border-box;\\n    font-size: 16px;\\n\\n    p {\\n        margin-top: 0px;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ErrorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\nvar ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());\nvar InputField = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_templateObject3());\n\nvar Error = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4(), _slideUpAnmiation__WEBPACK_IMPORTED_MODULE_1__[\"slideUpAnimation\"]);\nvar Success = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject5(), _slideUpAnmiation__WEBPACK_IMPORTED_MODULE_1__[\"slideUpAnimation\"]);\n\n//# sourceURL=webpack:///./src/components/pages/subpages/Signup/styles.js?");

/***/ }),

/***/ "./src/components/reducers/AuthUserReducer.js":
/*!****************************************************!*\
  !*** ./src/components/reducers/AuthUserReducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/components/actions/types.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_USER\"]:\n      return action.payload;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/components/reducers/AuthUserReducer.js?");

/***/ }),

/***/ "./src/components/reducers/CreateUserReducer.js":
/*!******************************************************!*\
  !*** ./src/components/reducers/CreateUserReducer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/components/actions/types.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_USER\"]:\n      return action.payload;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/components/reducers/CreateUserReducer.js?");

/***/ }),

/***/ "./src/components/reducers/LogoutUserReducer.js":
/*!******************************************************!*\
  !*** ./src/components/reducers/LogoutUserReducer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/components/actions/types.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"LOGOUT_USER\"]:\n      return action.payload;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/components/reducers/LogoutUserReducer.js?");

/***/ }),

/***/ "./src/components/reducers/index.js":
/*!******************************************!*\
  !*** ./src/components/reducers/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ \"redux-form\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CreateUserReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateUserReducer */ \"./src/components/reducers/CreateUserReducer.js\");\n/* harmony import */ var _AuthUserReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthUserReducer */ \"./src/components/reducers/AuthUserReducer.js\");\n/* harmony import */ var _LogoutUserReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogoutUserReducer */ \"./src/components/reducers/LogoutUserReducer.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  form: redux_form__WEBPACK_IMPORTED_MODULE_1__[\"reducer\"],\n  create_user: _CreateUserReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  logout: _LogoutUserReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  auth: _AuthUserReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/components/reducers/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "domain":
/*!*************************!*\
  !*** external "domain" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"domain\");\n\n//# sourceURL=webpack:///external_%22domain%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-form\");\n\n//# sourceURL=webpack:///external_%22redux-form%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });