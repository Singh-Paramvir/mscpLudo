import React, { useEffect, useState,useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Arrow from "../public/arrow.svg";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let moon;
let firstName
let cutChips;
let firstName1
let userId


const MyRefferal = () => {
  const firstRef = useRef();
  const firstRef1 = useRef();
  const [selectedUserId, setSelectedUserId] = useState(null); 
  const [referrals, setReferrals] = useState([]); // Initialize as an empty array
  const router = useRouter();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [cutChipsModalOpen, setCutChipsModalOpen] =React.useState(false);
  const [deleteModelOpen,setdeleteModelOpen] = React.useState(false);


  async function myReferrals() {
    try {
      const token = localStorage.getItem("token");
      let res = await axios.post("/api/myrefferals", { token: token });
      const response = res.data;
      console.log(response.data, "to get the data from api");
      setReferrals(response.data.data); // Update to access data property correctly
    } catch (err) {
      console.log(err);
    }
  }
// model 
async function apiFunction(e) {
  try{
    setModalOpen(!modalOpen)
    moon = e
    console.log(moon, "userId");
    
  }catch(err){
    console.log(err,"api error here")
  }
}
async function apiFunction1(e) {
  try{
    setCutChipsModalOpen(!cutChipsModalOpen)
    cutChips = e
    console.log(cutChips, "cut model chips user here");
  //  await handleAddChips1()
  }catch(err){
    console.log(err,"api error here")
  }
}
async function apiFunction2(e) {
  try{
    setdeleteModelOpen(!deleteModelOpen)
    userId = e
    console.log(userId, "delete user user here");
  //  await handleAddChips1()
  }catch(err){
    console.log(err,"api error here")
  }
}

 // cut chips
 const handleAddChips1 = async (e) => {
  try {
    console.log("chall pye mittra api");
    firstName1 = firstRef1.current.value;
    console.log("cut chips vala",typeof firstName1);
    console.log(cutChips, "lkjdfildjflkfjfi====------????");
    const data = {
      firstName1,
      cutChips,
    };
    console.log(data, "moon hererererererere ");
    const token = localStorage.getItem("token");
    console.log(token, "fhfhjfh");

    // api call
    let res = await axios.post("/api/cutchips", { token: token, data });
    const response = res.data;
    console.log(response, "response data");

    // Close the modal
    setModalOpen(false);
    console.log("model closed");

    // Refresh the page after showing the toast message
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (e) {
    console.log(e);
  }
};
 // add chips
const handleAddChips = async (e) => {
  try {
    firstName = firstRef.current.value;
    console.log("4985094850458",typeof firstName);
    console.log(moon, "lkjdfildjflkfjfi====------????");
    const data = {
      firstName,
      moon,
    };
    console.log(data, "moon hererererererere ");
    const token = localStorage.getItem("token");
    console.log(token, "fhfhjfh");

    // api call
    let res = await axios.post("/api/addchips", { token: token, data });
    const response = res.data;
    console.log(response, "response data");

    // Close the modal
    setModalOpen(false);
    console.log("model closed");

    // Refresh the page after showing the toast message
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (e) {
    console.log(e);
  }
};
// delete user handler
const handleAddChips3 = async (e) => {
  try {
   
    console.log(userId, "lkjdfildjflkfjfi====------????");
    const data = {
     userId
    };
    console.log(data, "moon hererererererere ");
    const token = localStorage.getItem("token");
    console.log(token, "fhfhjfh");

    // api call
    let res = await axios.post("/api/deleteuser", { token: token, data });
    const response = res.data;
    console.log(response, "response data");

    // Close the modal
    setModalOpen(false);
    console.log("model closed");

   // Refresh the page after showing the toast message
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (e) {
    console.log(e);
  }
};


  useEffect(() => {
    myReferrals();
  }, []);

  return (
    
    <div>
       {/* // delete user model */}
       <Modal toggle={() => setdeleteModelOpen(!deleteModelOpen)} isOpen={deleteModelOpen}>
  <div className="modal-header d-flex justify-content-between align-items-center m-0">
    <h5 className="modal-title">Do You Want To Delete User</h5>
    <button
      aria-label="Close"
      className="close"
      type="button"
      onClick={() => setdeleteModelOpen(!deleteModelOpen)}
    >
      <span aria-hidden={true}>×</span>
    </button>
  </div>
  <ModalBody>
   
  </ModalBody>
  <ModalFooter>
    <Button
      color="secondary"
      type="button"
      onClick={() => setdeleteModelOpen(!deleteModelOpen)}
    >
      Close
    </Button>
    <Button
    color="primary"
    type="button"
    onClick={handleAddChips3} // Call handleAddChips function when the "Save Changes" button is clicked
  >
    Delete User
  </Button>
  </ModalFooter>
</Modal>

      {/* // add chips model */}
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
  <div className="modal-header d-flex justify-content-between align-items-center m-0">
    <h5 className="modal-title">Add Chips</h5>
    <button
      aria-label="Close"
      className="close"
      type="button"
      onClick={() => setModalOpen(!modalOpen)}
    >
      <span aria-hidden={true}>×</span>
    </button>
  </div>
  <ModalBody>
    <input
      className="textinput mt-3"
      type="number"
      name="quantity"
      placeholder="Enter Amount"
      required
      ref={firstRef}
    />
  </ModalBody>
  <ModalFooter>
    <Button
      color="secondary"
      type="button"
      onClick={() => setModalOpen(!modalOpen)}
    >
      Close
    </Button>
    <Button
    color="primary"
    type="button"
    onClick={handleAddChips} // Call handleAddChips function when the "Save Changes" button is clicked
  >
    Save Changes
  </Button>
  </ModalFooter>
</Modal>


  {/* Cut Chips modal */}
  <Modal
        toggle={() => setCutChipsModalOpen(!cutChipsModalOpen)}
        isOpen={cutChipsModalOpen}
      >
        <div className="modal-header d-flex justify-content-between align-items-center m-0">
          <h5 className="modal-title">Cut Chips</h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setCutChipsModalOpen(!cutChipsModalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
    <input
      className="textinput mt-3"
      type="number"
      name="quantity"
      placeholder="Enter Amount"
      required
      ref={firstRef1}
    />
  </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setCutChipsModalOpen(!cutChipsModalOpen)}
          >
            Close
          </Button>
          <Button
            color="primary" // Use the danger color for the "Cut Chips" button
            type="button"
             onClick={handleAddChips1}
           
          >
            Cut Chips Now
          </Button>
        </ModalFooter>
      </Modal>

      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec" id="ref-code">
              <h3 className="heading-text pink-text mt-2">
                <span
                  className="arrows-icon"
                  id="left-rfset"
                  style={{
                    position: "relative",
                    left: "-44%",
                    cursor: "pointer",
                  }}
                >
                  <img src={Arrow.src} onClick={() => router.back()} />
                </span>
                My Referrals
              </h3>

              <table className="table funds-table mt-3" id="funds-color">
                <thead>
                  <tr>
                    <th id="fuds" scope="col">
                      Sr. No.
                    </th>
                    <th id="fuds" scope="col">
                      Name
                    </th>
                    <th id="fuds" scope="col">
                      UserName
                    </th>
                    <th id="fuds" scope="col">
                      Email
                    </th>
                    <th id="fuds" scope="col">
                      Chips
                    </th>
                    <th id="fuds" scope="col">
                      ReferralCode
                    </th>
                    <th id="fuds" scope="col">
                      ReferredBy
                    </th>
                    {/* <th id="fuds" scope="col">
                      Delete User
                    </th> */}
                  </tr>
                </thead>

                <tbody>
{referrals.length > 0 ? (
  referrals.map((referral, index) => (
    <tr key={referral._id}>
      <td>{index + 1}</td>
      <td>{referral.name}</td>
      <td>{referral.username}</td>
      <td>{referral.email}</td>
      <td>{referral.chips}</td>
      <td>{referral.referral_code}</td>
      <td>{referral.referby_friends}</td>

      {/* <td> <Button color="primary" type="button"
       onClick={() => apiFunction(referral.userId)}>
Add Chips
</Button></td>
<td>
                          <Button
                            color="danger" // Use the danger color for the "Cut Chips" button
                            type="button"
                            onClick={() => apiFunction1(referral.userId)}
                          >
                            Cut Chips
                          </Button>
                        </td>
                        <td>
                          <Button
                            color="danger" // Use the danger color for the "Cut Chips" button
                            type="button"
                            onClick={() => apiFunction2(referral.userId)}
                          >
                            Delete
                          </Button>
                        </td> */}
    </tr>
    
  ))
) : (
  <tr>
    <td colSpan="4">No referrals found</td>
  </tr>
)}
</tbody>
              </table>
            </form>
          </div>
        </div>
      </section>
    </div>
    // model
    
  );
};

export default MyRefferal;
