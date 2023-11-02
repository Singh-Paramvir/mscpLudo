import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LinkPage = () => {
  const [usdAmt, setUsdAmt] = useState();
  const [name, setName] = useState(null);
  const router = useRouter();


  function onSubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="funds-sec" onSubmit={onSubmitHandler}>
              <h3 className="funds-heading">Your Dashboard</h3>
              <h4 className="wel-text">
                {/* Welcome NAME ! */}{" "}
                <strong style={{ marginBottom: "10px !important" }}>
                  {" "}
                  Welcome {name?.firstName} !{" "}
                </strong>{" "}
                <br /> <br/>
                Hey there, Ludo fanatics! Get ready to roll the dice and dive into an epic journey of strategy and fun. As the game's master, I'm here to ensure your Ludo adventure is packed with excitement and challenges. Let's roll, move those pieces, and aim for victory together!                
                
              </h4>

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

<div className="col-head mt-3 text-center d-flex justify-content-center" id="col-head">
  <h6 className="mb-0 mt-0" style={{ fontSize: "14px" }}>
                
                </h6>

                <div className="col-md-7 left-headSec">
                  <div className="link-head  " id="first-sec">
                   

                    <Link href={"/updateProfile"}>
                      <div
                        className="link-item first-sec first-set"
                        id="first-item "
                      >
                        SLOTS
                      </div>
                    </Link>

                 
                      <div className="link-item third-sec" id="sec-item" onClick={()=>router.push("/myRefferals")}>
                        ALL USERS
                      
                      </div>
                  
                    {/* <Link href={"/total"}>
                      <div className="link-item five-sec" id="sec-item">
                        SORT USER
                      </div>
                    </Link> */}
                    {/* <Link href={"/fa"}>
                      <div className="link-item six-sec" id="seconds-item">
                        CHIPS PRICE
                      </div>
                    </Link> */}

{/* 
                    <Link href={"/login"}> 
                      <div
                        className="link-item second-sec "
                    
                        id="thirds-item"
                      >
                        INCOME
                      </div>
                    </Link> */}
                   
                  </div>
                </div>

               
                <div className="col-md-3"></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

};

export default LinkPage;




