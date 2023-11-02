import axios from "axios";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter(); // this route helps us to going next page

  async function login(data) {
    console.log(data);
    try {
      const res = await axios.post("/api/login", data);
      const response = res.data;
      console.log(response, "response data");
      // console.log(response.data.data.xx.data, "to check the token for storage")
      localStorage.setItem('token', response.data.data)

      notify("User Login Successfully");
      setTimeout(() => {
        router.push("/fa1"); // here we are going to next page
      }, 1000);
    } catch (err) {
      notifyError("user not login");
      console.log(err);
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      email,
      password,
    };

    console.log(data, "data here");

    login(data);
  }

  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div>
      <section class="profile-sec pb-0">
        <div class="container">
          <div class="row justify-content-center">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            <form class="input-sec">
              <div class="line profile-line"></div>
              <h3 class="heading-text pink-text mt-2"> LOGIN USER</h3>

              <div class="name-sec">
                <div className="input-item">
                  <h6 className="item-text">EMAIL</h6>
                  <input
                    ref={emailRef}
                    className="textinput"
                    type="email"
                    name="username"
                    placeholder="Enter your Email"
                    required
                  />
                </div>

                <div className="input-item">
                  <h6 className="item-text">PASSWORD</h6>
                  <input
                    ref={passwordRef}
                    className="textinput"
                    type="password"
                    name="last-name"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
              </div>

              <a
                href="funds-page.html"
                class="btn btn-round btn-warning w-100 "
                style={{ marginTop: "126px", marginBottom: "20px" }}
                type="button"
                onClick={onSubmitHandler}
              >
                CONTINUE
              </a>

              <p className="para-text"
              //  onClick={forgotHandler}
               >
                Forgot Password?{" "}
                <span style={{ fontWeight: "600" }}>FORGOT</span>
              </p>
            </form>
          </div>
        </div>
      </section>

      <script src="js/bootstrap.bundle.js"></script>
    </div>
  );
};

export default Login;
