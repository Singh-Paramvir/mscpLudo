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
exports.id = "pages/api/totalUser";
exports.ids = ["pages/api/totalUser"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/totalUser.js":
/*!********************************!*\
  !*** ./pages/api/totalUser.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            // const {data} = req.body;\n            const { token  } = req.body;\n            const { data  } = req.body;\n            console.log(token, data, \"to be send to api tp\");\n            var config = {\n                method: \"post\",\n                url: \"http://16.171.114.188:3000/api/admin/getAllRequests\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG90YWxVc2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVYLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRiwyQkFBMkI7WUFDM0IsTUFBTSxFQUFDQyxLQUFLLEdBQUMsR0FBQ0gsR0FBRyxDQUFDSSxJQUFJO1lBQ3RCLE1BQU0sRUFBQ0MsSUFBSSxHQUFDLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSTtZQUN2QkUsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssRUFBQ0UsSUFBSSxFQUFFLHNCQUFzQixDQUFDLENBQUM7WUFDaEQsSUFBSUcsTUFBTSxHQUFHO2dCQUNYTixNQUFNLEVBQUUsTUFBTTtnQkFDZE8sR0FBRyxFQUFFLHFEQUFxRDtnQkFDMURDLE9BQU8sRUFBQztvQkFDTixlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUVQLEtBQUssQ0FBQyxDQUFDO2lCQUNyQztnQkFBQ0UsSUFBSTthQUNMO1lBQ0QsTUFBTVAsNENBQUssQ0FBQ1UsTUFBTSxDQUFDLENBQUNHLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7Z0JBQzNDTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxTQUFTLENBQUNGLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0NKLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVYLElBQUksRUFBRU8sUUFBUSxDQUFDUCxJQUFJO2lCQUFDLENBQUMsQ0FBQzthQUM5QyxDQUFDLENBQUM7U0FDSixDQUFDLE9BQU9ZLEdBQUcsRUFBRTtZQUNaWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsR0FBRyxDQUFDLENBQUM7WUFDakJoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vcGFnZXMvYXBpL3RvdGFsVXNlci5qcz84N2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3Qge2RhdGF9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zdCB7dG9rZW59PXJlcS5ib2R5XG4gICAgICBjb25zdCB7ZGF0YX0gPSByZXEuYm9keTtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuLGRhdGEsIFwidG8gYmUgc2VuZCB0byBhcGkgdHBcIik7XG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICB1cmw6IFwiaHR0cDovLzE2LjE3MS4xMTQuMTg4OjMwMDAvYXBpL2FkbWluL2dldEFsbFJlcXVlc3RzXCIsXG4gICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICB9LGRhdGEsXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YX0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/totalUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/totalUser.js"));
module.exports = __webpack_exports__;

})();