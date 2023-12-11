"use strict";
exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 6936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Login = ()=>{
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: currentChips , 1: setCurrentChips  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: currentPrice , 1: setCurrentPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    function handleChipsChange(event) {
        setCurrentChips(event.target.value);
    }
    function handlePriceChange(event) {
        setCurrentPrice(event.target.value);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Function to fetch the current chips and prices from the server
        async function fetchCurrentData() {
            try {
                const token = localStorage.getItem("token");
                // Make the API call to fetch the data
                let res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/getPrice", {
                    token: token
                });
                const data = res.data; // Assuming the response contains chips and prices data
                // Update the state with the fetched data
                setCurrentChips(data.data.data.chips);
                setCurrentPrice(data.data.data.point);
            } catch (err) {
                console.log(err);
            // Handle any error if needed
            }
        }
        // Call the function to fetch the data
        fetchCurrentData();
    }, []);
    async function login(data) {
        try {
            var token = localStorage.getItem("token");
            console.log(token, "to get the token form local new one");
            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/fa", {
                token: token,
                data
            });
            const response = res.data;
            console.log(response, "response data");
            notify("Data Updated Successfully");
            setTimeout(()=>{
                router.push("/dashboard");
            }, 1000);
        } catch (err) {
            notifyError("Data Not Update");
            console.log(err);
        }
    }
    function onSubmitHandler(event) {
        event.preventDefault();
        const chips = emailRef.current.value;
        const point = passwordRef.current.value;
        const data = {
            chips,
            point
        };
        console.log(data, "data here");
        login(data);
    }
    const notify = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    ;
    const notifyError = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "profile-sec pb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                newestOnTop: false,
                                closeOnClick: true,
                                rtl: false,
                                pauseOnFocusLoss: true,
                                draggable: true,
                                pauseOnHover: true
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "input-sec",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "line profile-line"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "heading-text pink-text mt-2",
                                        children: "CHIPS PRICE"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "name-sec",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "input-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "item-text",
                                                    children: "CHIPS"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ref: emailRef,
                                                    className: "textinput",
                                                    type: "number",
                                                    name: "username",
                                                    placeholder: "",
                                                    required: true,
                                                    value: currentChips,
                                                    onChange: handleChipsChange
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "item-text",
                                                children: "PRICE"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                ref: passwordRef,
                                                className: "textinput",
                                                type: "number",
                                                name: "last-name",
                                                placeholder: "",
                                                required: true,
                                                value: currentPrice,
                                                onChange: handlePriceChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "funds-page.html",
                                        className: "btn btn-round btn-warning w-100",
                                        style: {
                                            marginTop: "126px",
                                            marginBottom: "20px"
                                        },
                                        type: "button",
                                        onClick: onSubmitHandler,
                                        children: "UPDATE"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/bootstrap.bundle.js"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;