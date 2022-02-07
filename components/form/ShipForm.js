import React, { useState } from "react";
import { FormOne, FormTwo, FormThree, FormFour } from "./Formpages";

const ShipForm = () => {
  const [page, setPage] = useState(1);
  const [sender, setSender] = useState({
    senderName: "",
    senderContact: "",
    senderAddress: "",
    senderCountry: "",
    senderCity: "",
  });

  const [receiver, setReceiver] = useState({
    receiverName: "",
    receiverContact: "",
    receiverAddress: "",
    receiverCountry: "",
    receiverCity: "",
  });

  const [deliveryInfo, setDeliveryInfo] = useState({
    pickupDate: "",
    pickupTime: "",
    schedule: "",
    description: "",
    weight: "",
    quantity: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const shippingCost = () => {
    let shippingFee = 1000;
    let shippingTax = 200;
    let totalShipping;

    console.log(Number(deliveryInfo.weight));
    if (Number(deliveryInfo.weight) < 6) {
      totalShipping = 1000 * Number(deliveryInfo.quantity) + shippingTax;
    } else {
      totalShipping = 2000 * Number(deliveryInfo.quantity) + shippingTax;
    }

    return setTotalPrice(totalShipping);
  };

  // console.log(shippingCost());

  // console.log("k");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSender({ ...sender, [name]: value });

    // console.log(name);
    // if (
    //   name === "senderName" ||
    //   "senderContact" ||
    //   "senderAddress" ||
    //   "senderCountry" ||
    //   "senderCity"
    // ) {
    //    setSender({ ...sender, [name]: value });
    // }
    // else {
    //   setReceiver({ ...receiver, [name]: value });
    // }
  };

  const handleReceiver = (e) => {
    const { name, value } = e.target;
    setReceiver({ ...receiver, [name]: value });
  };

  const handleDeliveryInfo = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  console.log(sender);
  console.log(receiver);
  console.log(totalPrice);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const nextPage = () => {
    switch (page) {
      case 1:
        setPage((prev) => prev + 1);
        break;
      case 2:
        setPage((prev) => prev + 1);
        break;
      case 3:
        setPage((prev) => prev + 1);
        shippingCost();
        break;
      // case 4:
      //   break;
      default:
        break;
    }
  };

  const prevPage = () => {
    switch (page) {
      case 2:
        setPage((prev) => prev - 1);
        break;
      case 3:
        setPage((prev) => prev - 1);
        break;
      case 4:
        setPage((prev) => prev - 1);
        break;
      default:
        break;
    }
  };
  return (
    <div className="shipFormContainer">
      <div className="formContent">
        <h2>We’re excited to serve you!</h2>
        <p>
          QikPik is your on-demand delivery companion. It is specially built for
          fast and reliable pick-up/delivery service. QikPik is your most
          convenient means of sending items within and across cities. QikPik
          eliminates the need to leave your home or comfort zone, trying to
          dispatch items for delivery.
        </p>
      </div>
      {/* Progress bar */}
      <div>
        <ul id="progressbar">
          <li class="active" id="account">
            <strong>Confirmed</strong>
          </li>
          <li id="personal" className={page >= 2 && "active"}>
            <strong>Picked Parcel</strong>
          </li>
          <li id="loan" className={page >= 3 && "active"}>
            <strong>On The Way</strong>
          </li>
          <li id="income" className={page >= 4 && "active"}>
            <strong>Delivered</strong>
          </li>
        </ul>
        <hr />
        <br />
      </div>
      <form>
        <div>
          {page === 1 && (
            <FormOne sender={sender} handleChange={handleChange} />
          )}
          {page === 2 && (
            <FormTwo receiver={receiver} handleReceiver={handleReceiver} />
          )}
          {page === 3 && (
            <FormThree
              deliveryInfo={deliveryInfo}
              handleDelivery={handleDeliveryInfo}
            />
          )}
          {page === 4 && (
            <FormFour
              totalPrice={totalPrice}
              weight={deliveryInfo.weight}
              quantity={deliveryInfo.quantity}
            />
          )}

          <div className="formBtn">
            <button
              style={{ visibility: page === 1 && "hidden" }}
              onClick={prevPage}
            >
              Back
            </button>

            {page === 4 ? (
              <button onClick={handleSubmit}>Finish</button>
            ) : (
              <button onClick={nextPage}>Next</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShipForm;
