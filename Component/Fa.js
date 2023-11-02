import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const [currentChips, setCurrentChips] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  function handleChipsChange(event) {
    setCurrentChips(event.target.value);
  }

  function handlePriceChange(event) {
    setCurrentPrice(event.target.value);
  }

  useEffect(() => {
    // Function to fetch the current chips and prices from the server
    async function fetchCurrentData() {
      try {
        const token = localStorage.getItem("token");
        // Make the API call to fetch the data
        let res = await axios.post("/api/getPrice", { token: token });
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
      const res = await axios.post("/api/fa", { token: token, data });
      const response = res.data;
      console.log(response, "response data");

      notify("Data Updated Successfully");
      setTimeout(() => {
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
              <h3 className="heading-text pink-text mt-2">CHIPS PRICE</h3>

              <div className="name-sec">
                <div className="input-item">
                  <h6 className="item-text">CHIPS</h6>
                  <input
                    ref={emailRef}
                    className="textinput"
                    type="number"
                    name="username"
                    placeholder=""
                    required
                    value={currentChips}
                    onChange={handleChipsChange} // Add this onChange handler
                  />
                </div>
              </div>
              <div className="input-item">
                <h6 className="item-text">PRICE</h6>
                <input
                  ref={passwordRef}
                  className="textinput"
                  type="number"
                  name="last-name"
                  placeholder=""
                  required
                  value={currentPrice}
                  onChange={handlePriceChange} // Add this onChange handler
                />
              </div>
              <a
                href="funds-page.html"
                className="btn btn-round btn-warning w-100"
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
