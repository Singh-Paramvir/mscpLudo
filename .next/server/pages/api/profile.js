"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/profile";
exports.ids = ["pages/api/profile"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/profile.js":
/*!******************************!*\
  !*** ./pages/api/profile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(data, \"Hello\");\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://159.89.168.224:3000/api/admin/updateWithdrawActive\", data);\n            const request = response.data;\n            console.log(request, \"to check\");\n            res.status(200).json({\n                data: request\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(403).json({\n                error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRTlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7WUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUIsSUFBSUksUUFBUSxHQUFHLE1BQU1ULGlEQUFVLENBQUMsMkRBQTJELEVBQUVLLElBQUksQ0FBQztZQUNsRyxNQUFNTSxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0osSUFBSTtZQUM3QkUsT0FBTyxDQUFDQyxHQUFHLENBQUNHLE9BQU8sRUFBQyxVQUFVLENBQUMsQ0FBQztZQUNoQ1IsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRVIsSUFBSSxFQUFFTSxPQUFPO2FBQUUsQ0FBQyxDQUFDO1NBQ3pDLENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1pQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxHQUFHLENBQUMsQ0FBQztZQUNqQlgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS9wcm9maWxlLmpzPzE2YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsXCJIZWxsb1wiKTtcblxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly8xNTkuODkuMTY4LjIyNDozMDAwL2FwaS9hZG1pbi91cGRhdGVXaXRoZHJhd0FjdGl2ZVwiLCBkYXRhKTtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSByZXNwb25zZS5kYXRhO1xuICAgICAgY29uc29sZS5sb2cocmVxdWVzdCxcInRvIGNoZWNrXCIpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZXF1ZXN0IH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJwb3N0IiwicmVxdWVzdCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile.js"));
module.exports = __webpack_exports__;

})();