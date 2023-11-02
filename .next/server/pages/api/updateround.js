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
exports.id = "pages/api/updateround";
exports.ids = ["pages/api/updateround"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/updateround.js":
/*!**********************************!*\
  !*** ./pages/api/updateround.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            // Filter out properties with null, undefined, or empty string values\n            const filteredData = Object.fromEntries(Object.entries(data).filter(([_, value])=>value !== null && value !== undefined && value !== \"\"\n            ));\n            console.log(filteredData, \"to be sent to the API!!!!\");\n            var config = {\n                method: \"post\",\n                url: \"http://159.89.168.224:3000/api/admin/updateslote\",\n                data: filteredData\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlcm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1lBRXJCLHFFQUFxRTtZQUNyRSxNQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxDQUNyQ0QsTUFBTSxDQUFDRSxPQUFPLENBQUNMLElBQUksQ0FBQyxDQUFDTSxNQUFNLENBQUMsQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLEtBQUssQ0FBQyxHQUFLQSxLQUFLLEtBQUssSUFBSSxJQUFJQSxLQUFLLEtBQUtDLFNBQVMsSUFBSUQsS0FBSyxLQUFLLEVBQUU7WUFBQSxDQUFDLENBQ25HO1lBRURFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxZQUFZLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztZQUV2RCxJQUFJVSxNQUFNLEdBQUc7Z0JBQ1hiLE1BQU0sRUFBRSxNQUFNO2dCQUNkYyxHQUFHLEVBQUUsa0RBQWtEO2dCQUN2RGIsSUFBSSxFQUFFRSxZQUFZO2FBQ25CO1lBRUQsTUFBTVAsNENBQUssQ0FBQ2lCLE1BQU0sQ0FBQyxDQUFDRSxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQ0wsT0FBTyxDQUFDQyxHQUFHLENBQUNLLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLENBQUNmLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDRixHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRW5CLElBQUksRUFBRWUsUUFBUSxDQUFDZixJQUFJO2lCQUFFLENBQUMsQ0FBQzthQUMvQyxDQUFDLENBQUM7U0FDSixDQUFDLE9BQU9vQixHQUFHLEVBQUU7WUFDWlYsT0FBTyxDQUFDQyxHQUFHLENBQUNTLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCdEIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLEtBQUssRUFBRUQsR0FBRzthQUFFLENBQUMsQ0FBQztTQUN0QztLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWRvYWRtaW4vLi9wYWdlcy9hcGkvdXBkYXRlcm91bmQuanM/MDAwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgICAgLy8gRmlsdGVyIG91dCBwcm9wZXJ0aWVzIHdpdGggbnVsbCwgdW5kZWZpbmVkLCBvciBlbXB0eSBzdHJpbmcgdmFsdWVzXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gXCJcIilcbiAgICAgICk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRGF0YSwgXCJ0byBiZSBzZW50IHRvIHRoZSBBUEkhISEhXCIpO1xuXG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICB1cmw6IFwiaHR0cDovLzE1OS44OS4xNjguMjI0OjMwMDAvYXBpL2FkbWluL3VwZGF0ZXNsb3RlXCIsXG4gICAgICAgIGRhdGE6IGZpbHRlcmVkRGF0YSwgLy8gU2VuZCB0aGUgZmlsdGVyZWQgZGF0YVxuICAgICAgfTtcblxuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImZpbHRlcmVkRGF0YSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImZpbHRlciIsIl8iLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateround.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateround.js"));
module.exports = __webpack_exports__;

})();