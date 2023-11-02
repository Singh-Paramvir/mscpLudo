// import React from 'react'
import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer,toast } from 'react-toastify'


const Verify = () => {

  const otpRef = useRef()

  const router = useRouter()



  async function verify(data) {
    
    try {
      const res = await axios.post("/api/verifyCode",data)
      const response = res.data

      console.log(response, "otp verified successfully");
      
      notify("Otp Verify Successfully")

      setTimeout(() => {
        router.push("/userProfile") 
        }, 1500);

    }
    catch (err) {

      notifyError("Otp Not Verify")
      console.log(err, 'error here')
     

    }

  }
  function onSubmitHandler(event) {
    event.preventDefault()            // value change before changes

    const otp = otpRef.current.value
    const email = localStorage.getItem('email')

    const data = {
      otp,
      email
    }
console.log(data,"otp here")
    verify(data)
  }

   // resend otp to user   
 
   async function resendHandler(event){
    event.preventDefault()
    const email= localStorage.getItem('email')
    console.log(email,"find data")

    try{
        const res= await axios.post("/api/resend",{email:email}) 
      const resend = res.data
     
      console.log(resend,"resend ")
      notify("otp send again to mobile number")
    }
    catch(err){
        console.log(err, 'error this is  here')
        notifyError("Otp not Send")

    }
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

            <form className="input-sec iptset-line ipt-width" >

              <div className="input-line  varification-line"></div>

              <h3 className="heading-text" style={{ textAlign: "center" }}> <span
                style={{ fontSize: "16px", paddingRight: "16px" }}><i className="fa-solid fa-angle-left"></i></span> Verification
                code</h3>
              <p className="check-txt">Check your email For verification code</p>


              <div className="ipt-box">
                <input className="ipt-txt" type="text" maxLength="6" ref={otpRef}/>



              </div>
              Didn't receive it?
              <div onClick={resendHandler} className="did-txt">
                <button> <span className="resend-txt" >Resend code</span></button>


              </div>


              <p className="by-text mb-0 " style={{ marginTop: '50px', fontSize: '11px', paddingLeft: '5px', float: 'left' }}>
                <input className="form-check-input mt-0" type="checkbox" value="" style={{ marginRight: '5px', }} id="flexCheckDefault" />
                I agree with HealthiWealthi Terms of Use and Privacy Policy.
              </p>

              <a className="btn btn-round btn-warning w-100 " style={{ marginTop: '15px', marginBottom: '20px', }}
                type="button" onClick={onSubmitHandler}>CONTINUE</a>
              {/* 
      <!-- <div className="para-set">
            <p className="iptpara-text">Are you new here? <a href="home-page.html" style="font-weight: bold;  font-size: 15px; color: #D32286;">Sign Up</a></p>
          </div> --> */}

            </form>
          </div>
        </div>
      </section>


    </div>


  )
}

export default Verify