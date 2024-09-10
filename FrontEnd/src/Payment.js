
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
const Payment = () => {
  const payMode = useRef();
  const [showThankYou, setShowThankYou] = useState(false);
  
  const orderId = useRef();
  const transactionHandler = (e) => {
    let tran = {
      paymentMethod: payMode.current.value,
      // productId:'P444',
      // orderId: sessionStorage.getItem("orderId"),
      orderId: localStorage.getItem("oid"),
      paymentStatus:"Success",
      transactionDate: new Date(),



 
    };
    console.log(tran);
    axios
      .post("http://localhost:5290/api/Payment/AddPayment", tran)
      .then((response) => {
      
        console.log("Transaction successful", response.data.Payment);
        setShowThankYou(true);
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={transactionHandler}>
        <table className="table">
          <tr>
            <td colSpan={2}>orderId:<strong>{localStorage.getItem("oid")}</strong></td>
          </tr>
       
          <tr>
            <td>Mode</td>
            <td>
              <select ref={payMode}>
                <option>Debit</option>
                <option>Credit</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
            <button className="btn btn-secondary rounded-pill px-4 py-2 shadow-sm">  Make Transaction</button>

            </td>
          </tr>
        </table>
      </form>
      {showThankYou && (
        <div className="alert alert-success mt-4" role="alert">
          Thank you for visiting!
        </div>
      )}
    </div>
    
      
  );
};
export default Payment;
