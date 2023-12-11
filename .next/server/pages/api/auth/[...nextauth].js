"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    session: {
        strategy: "jwt",
        maxAge: 1500,
        secret: "ayC5ej+5fmSNxGt61XXH2uSa61wQgCr2dUwmAoDUzXs="
    },
    providers: [
        credentials_default()({
            name: "Custom Provider",
            async authorize (credentials) {
                let { email , password  } = credentials;
                console.log(credentials, "for credentials");
                let data = {
                    email: email,
                    password: password
                };
                console.log(data, "form email and password");
                let response = await external_axios_default().post("http://18.204.222.172:6000/api/v1/auth/loginadmin", data);
                console.log(response, "response");
                let user = response.data;
                let token = response.data.data;
                localStorage.setItem("token", token);
                // console.log(token, 'for token')
                // if (!token) {
                //   throw new Error("Invalid token");
                // }
                if (!(response.status == 200)) {
                    throw new Error("Invalid Credentials" + email);
                }
                if (response.status == 200) {
                    return user = {
                        name: token,
                        email: email
                    };
                }
            }
        }), 
    ]
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1954));
module.exports = __webpack_exports__;

})();