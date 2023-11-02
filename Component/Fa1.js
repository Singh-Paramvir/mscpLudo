import axios from "axios";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter(); // this route helps us to going next page

  async function login(data) {
    console.log(data,"asasas");
    try {
      var token = localStorage.getItem("token");
      console.log(token, "to get the token form local new one");
      const res = await axios.post("/api/fa",{ token: token, data });
      const response = res.data;
      console.log(response, "response data");
      

      notify("Data Updated Successfully");
      setTimeout(() => {
        router.push("/dashboard"); // here we are going to next page
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
      point,
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
              <h3 class="heading-text pink-text mt-2">UPDATE CHIPS PRICE AND ROUND</h3>

              <div class="name-sec">
                <div className="input-item">
                  <h6 className="item-text">CHIPS</h6>
                  <input
                    ref={emailRef}
                    className="textinput"
                    type="email"
                    name="username"
                    placeholder=""
                    required
                  />
                </div>

               
              </div>
              <div className="input-item">
                  <h6 className="item-text">ROUND</h6>
                  <input
                    ref={passwordRef}
                    className="textinput"
                    type="number"
                    name="last-name"
                    placeholder=""
                    required
                  />
                </div>
              <a
                href="funds-page.html"
                class="btn btn-round btn-warning w-100 "
                style={{ marginTop: "126px", marginBottom: "20px" }}
                type="button"
                onClick={onSubmitHandler}
              >
                UPDATE
              </a>

            </form>
          </div>
        </div>
      </section>

      <script src="js/bootstrap.bundle.js"></script>
    </div>
  );
};

export default Login;
