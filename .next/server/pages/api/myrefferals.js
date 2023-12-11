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
exports.id = "pages/api/myrefferals";
exports.ids = ["pages/api/myrefferals"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/myrefferals.js":
/*!**********************************!*\
  !*** ./pages/api/myrefferals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import {getSession} from 'next-auth/react';\nasync function handler(req, res) {\n    // const session = await getSession({req})\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            console.log(token, \"to be send to api tp\");\n            var config = {\n                method: \"post\",\n                url: \"http://16.171.114.188:3000/api/admin/getalluser\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                }\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbXlyZWZmZXJhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQzFCLDhDQUE4QztBQUUvQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLDBDQUEwQztJQUMxQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBQ0MsS0FBSyxHQUFDLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtZQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQzNDLElBQUlJLE1BQU0sR0FBRztnQkFDWEwsTUFBTSxFQUFFLE1BQU07Z0JBQ2RNLEdBQUcsRUFBRSxpREFBaUQ7Z0JBQ3REQyxPQUFPLEVBQUU7b0JBQ1AsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFTixLQUFLLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtZQUNELE1BQU1MLDRDQUFLLENBQUNTLE1BQU0sQ0FBQyxDQUFDRyxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQ04sT0FBTyxDQUFDQyxHQUFHLENBQUNNLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFRixJQUFJLEVBQUVILFFBQVEsQ0FBQ0csSUFBSTtpQkFBRSxDQUFDLENBQUM7YUFDL0MsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxPQUFPRyxHQUFHLEVBQUU7WUFDWlosT0FBTyxDQUFDQyxHQUFHLENBQUNXLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCaEIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS9teXJlZmZlcmFscy5qcz9kMGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7Z2V0U2Vzc2lvbn0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHt0b2tlbn0gPSByZXEuYm9keTtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuLCBcInRvIGJlIHNlbmQgdG8gYXBpIHRwXCIpO1xuICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgdXJsOiBcImh0dHA6Ly8xNi4xNzEuMTE0LjE4ODozMDAwL2FwaS9hZG1pbi9nZXRhbGx1c2VyXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2tlbiIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/myrefferals.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/myrefferals.js"));
module.exports = __webpack_exports__;

})();