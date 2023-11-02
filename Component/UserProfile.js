import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";


const Profile = () => {
  const router = useRouter(); // this route helps us to going next page

  const firstRef = useRef();
  const lastRef = useRef();
  const [email, setEmail] = useState(null);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRef, setLoadingRef] = useState(false);

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  async function profile(data) {
    try {
      console.log(data, "data here");
      let res = await axios.post("/api/profile", data);
      const response = res.data;
      console.log(response,"to check the response from api");
      localStorage.setItem('token', response.data.data)
      notify("user Signed Successfully");
      setIsLoading(true);
      setLoadingRef(true);
      router.push("/dashboard")    
    } catch (err) {
      console.log(err, "error show");
      notifyError("Something Went Wrong");
    }
  }
  function onSubmitHandler(event) {
    event.preventDefault();

    const firstName = firstRef.current.value;
    const lastName = lastRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    
    if (!(password == confirmPassword)) {
      notifyError("Password not Match");
      return;
    }
    
    const data = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    };
    console.log(data, "data sadaa ");
    profile(data);
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

      <section className="profile-sec pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec">
              <div className="line profile-line"></div>
              <h3 className="heading-text pink-text mt-2"> Complete Profile</h3>

              <div className="name-sec">
                <div
                  className="input-item item-set"
                  style={{ marginRight: "10px" }}
                >
                  <h6 className="item-text">FIRST NAME</h6>
                  <input
                    className="textinput"
                    type="text"
                    name="username"
                    ref={firstRef}
                  />
                </div>
                <div
                  className="input-item item-set"
                  style={{ marginRight: "10px" }}
                  >
                  <h6 className="item-text">LAST NAME</h6>
                  <input
                    className="textinput"
                    type="text"
                    name="username"
                    ref={lastRef}
                    />
                </div>
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">EMAIL</h6>
                <input
                  className="textinput"
                  type="email"
                  name="username"
                  defaultValue={email}
                />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">PASSWORD</h6>
                <input
                  className="textinput"
                  type="text"
                  name="last-name"
                  ref={passwordRef}
                />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">CONFIRM PASSWORD</h6>
                <input
                  className="textinput"
                  type="text"
                  name="last-name"
                  ref={confirmPasswordRef}
                />
              </div>
              <a
                href="funds-page.html"
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "1px", marginBottom: "20px" }}
                type="button"
                onClick={onSubmitHandler}
                >
                CONTINUE
              </a>
              {/* 
          <!-- <div className="para-set">
          <p className="iptpara-text">Are you new here? <a href="home-page.html" style="font-weight: bold;  font-size: 15px; color: #D32286;">Sign Up</a></p>
              </div> --> */}
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Profile;

// let {email, password} = data;
// const res1 = await signIn("credentials", {
//   redirect: false,
//   email,
//   password,
// });
// console.log(res1);
// if (res?.error) {
//   console.log(res.error);
//   notifyError("Invalid login details. Please try again or signup below.");
//   setIsLoading(false);
// }
// if (!res.error) {
//   console.log(res);
//   setLoadingRef(true);
//   notify("Profile Update successfully");
//   setIsLoading(true);
//   setTimeout(() => {
//     router.push("/dashboard");
//   }, 2000);
// }