import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import "./Checkout.css";

let config = {
  publicKey: "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
  productIdentity: "1234567890",
  productName: "Drogon",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    onSuccess(payload) {
      console.log(payload);
    },
    onError(error) {
      // handle errors
      console.log(error);
    },
  },
  paymentPreference: ["MOBILE_BANKING", "KHALTI", "EBANKING", "CONNECT_IPS"],
};

let checkout = new KhaltiCheckout(config);
const totalAmount = 1000;

const total = 5000;

const handleClick = (e) => {
  e.preventDefault();
  checkout.show({ amount: total * 100 });
};

const Checkout = () => {
  return (
    <>
      <div className="container">
        <h3 className="title">My Cart</h3>
        <br />
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xl-5">
            <div className="box">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xl-7">
                  <h6 className="itemtitle">Item info </h6>
                  <div className="itemDetail">
                    Name:Bottle <br />
                    Quantity:4kg
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xl-5">
                  <img
                    className="Image"
                    src="https://www.euractiv.com/wp-content/uploads/sites/2/2021/09/Bali-plastic-polllution-scaled.jpg"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="box">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xl-7">
                  <h6 className="itemtitle">Item info </h6>
                  <div className="itemDetail">
                    Name:Bottle <br />
                    Quantity:4kg
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xl-5">
                  <img
                    className="Image"
                    src="https://www.euractiv.com/wp-content/uploads/sites/2/2021/09/Bali-plastic-polllution-scaled.jpg"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="box">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xl-7">
                  <h6 className="itemtitle">Item info </h6>
                  <div className="itemDetail">
                    Name:Bottle <br />
                    Quantity:4kg
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xl-5">
                  <img
                    className="Image"
                    src="https://www.euractiv.com/wp-content/uploads/sites/2/2021/09/Bali-plastic-polllution-scaled.jpg"
                  />
                </div>
              </div>
            </div>
            <br />
            <h1 style={{ fontSize: "40px" }}>Rs.{total}</h1>
          </div>
          <div className="col-md-6 col-sm-12 col-xl-1"></div>
          <div className="col-md-6 col-sm-12 col-xl-6">
            <h4 className="price">Enter all Fields</h4>
            <hr className="horizontal" />
            <form>
              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" class="form-label">
                  User name:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div className="title ">
                {/* button */}
                <button
                  onClick={handleClick}
                  style={{
                    width: "100px",
                    height: "40px",
                    color: "white",
                    backgroundColor: "#4D2A7A",
                    borderRadius: "10px",
                  }}
                >
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>

        <br />

        <br />
      </div>
    </>
  );
};

export default Checkout;
