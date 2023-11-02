import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const Login7 = () => {
  const emailRef = useRef();
  const router = useRouter();

  const [totalUserCount, setTotalUserCount] = useState(0);
  const [todayUserCount, setTodayUserCount] = useState(0);

  useEffect(() => {
    // Fetch the user counts data when the component mounts
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("api/totalUser", { token });
      const response = res.data;
      console.log(response, "response data!!!!!!!");
      console.log(response.data.data.totalUserCount,"total user from response");
      setTotalUserCount(response.data.data.totalUserCount);
      setTodayUserCount(response.data.data.todayUserCount);
    } catch (err) {
      console.log(err);
    }
  }

  async function onSubmitHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const data = {
      email,
    };

    console.log(data, "data here");

    login(data);
  }

  async function login(data) {
    console.log(data, "from send");
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("api/totalUser", { token, data });
      const response = res.data;
      console.log(response, "2 nd");

       notify("User getting Successfully");
       console.log(response.data.data.totalUserCount,"total user from response");
      setTotalUserCount(response.data.data.totalUserCount);
      setTodayUserCount(response.data.data.todayUserCount);
      // setTimeout(() => {
      //   router.push("/dashboard"); // Navigate to the next page
      // }, 1000);
    } catch (err) {
      notifyError("Please Check Email or Password");
      console.log(err);
    }
  }

  const notify = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <section className="profile-sec pb-0">
        <div className="container">
          <div className="row justify-content-center">
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
  
            <form className="input-sec">
              <div className="line profile-line"></div>
              <h3 className="heading-text pink-text mt-2">TOTAL USER</h3>
  
              <div className="name-sec" style={{ margin: '20px 0' }}>
                {/* Separate row for "No of total User" */}
                <div className="row">
                  <div className="col">
                    <h6 className="item-text">No of total User:</h6>
                  </div>
                  <div className="col">
                    <p>{totalUserCount}</p>
                  </div>
                </div>
  
                {/* Separate row for "No of User of Today" */}
                <div className="row">
                  <div className="col">
                    <h6 className="item-text">No of User of Today:</h6>
                  </div>
                  <div className="col">
                    <p>{todayUserCount}</p>
                  </div>
                </div>
  
                {/* Separate row for "date to sort" */}
                <div className="row">
                  <div className="col">
                    <h6 className="item-text">date to sort:</h6>
                  </div>
                  <div className="col">
                    <input
                      ref={emailRef}
                      className="textinput"
                      type="date"
                      name="date"
                      placeholder="select date"
                      required
                    />
                  </div>
                </div>
              </div>
  
              <a
                href="funds-page.html"
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "20px", marginBottom: "20px" }}
                type="button"
                onClick={onSubmitHandler}
              >
                CONTINUE
              </a>
            </form>
          </div>
        </div>
      </section>
  
      <script src="js/bootstrap.bundle.js"></script>
    </div>
  );
  
  
};

export default Login7;
