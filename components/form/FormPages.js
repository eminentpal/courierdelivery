import React, { useState } from "react";

export const FormOne = ({ sender, setFormErrors, setCheck, handleChange }) => {
  const formValidate = (values) => {
    const errors = {};

    if (!values.senderName) {
      errors.senderName = "fullName is required!";
    }
    if (!values.senderContact) {
      errors.senderContact = "Sender Contact is required!";
    }
    if (!values.senderAddress) {
      errors.senderAddress = "Sender Address is required!";
    }
    if (!values.senderCountry) {
      errors.senderCountry = "Sender Country is required!";
    }
    if (!values.senderCity) {
      errors.senderCity = "Sender City is required!";
    }
    setCheck({
      receiver: false,
      sender: true,
    });

    // if (receiver && !values.receiverName) {
    //   errors.receiverName = "Receiver name is required!";
    //   setCheck(true);
    // }
    return errors;
  };
  return (
    <div>
      <form>
        <div className="inputBox-1">
          <span>01</span>
          <div className="inputDiv-1">
            <h2>Pick-Up Address</h2>
            <input
              onKeyUp={() => setFormErrors(formValidate(sender))}
              type="text"
              className="form-input"
              placeholder="NAME*"
              name="senderName"
              value={sender.senderName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className="form-input"
              placeholder="SENDER CONTACT*"
              name="senderContact"
              value={sender.senderContact}
              onChange={handleChange}
              onKeyUp={() => setFormErrors(formValidate(sender))}
              required
            />

            <input
              type="text"
              className="form-input"
              placeholder="SENDER ADDRESS*"
              name="senderAddress"
              value={sender.senderAddress}
              onChange={handleChange}
              onKeyUp={() => setFormErrors(formValidate(sender))}
              required
            />
            <label name="country">Country</label>
            <input
              type="text"
              className="form-input"
              placeholder="COUNTRY*"
              name="senderCountry"
              value={sender.senderCountry}
              onChange={handleChange}
              onKeyUp={() => setFormErrors(formValidate(sender))}
              required
            />
            <label name="country">City</label>
            <input
              type="text"
              className="form-input"
              placeholder="CITY*"
              name="senderCity"
              value={sender.senderCity}
              onKeyUp={() => setFormErrors(formValidate(sender))}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export function FormTwo({ receiver, handleReceiver, setCheck, setFormErrors }) {
  const validateReceiver = (values) => {
    const errors = {};

    if (!values.receiverName) {
      errors.receiverName = "fullName is required!";
    }
    if (!values.receiverContact) {
      errors.receiverContact = "Contact is required!";
    }
    // if (!values.senderContact) {
    //   errors.senderContact = "Sender Contact is required!";
    //   setCheck(true);
    // }
    // if (!values.senderAddress) {
    //   errors.senderAddress = "Sender Address is required!";
    //   setCheck(true);
    // }
    // if (!values.senderCountry) {
    //   errors.senderCountry = "Sender Country is required!";
    //   setCheck(true);
    // }
    // if (!values.senderCity) {
    //   errors.senderCity = "Sender City is required!";
    //   setCheck(true);
    // }

    // if (receiver && !values.receiverName) {
    //   errors.receiverName = "Receiver name is required!";
    //   setCheck(true);
    // }
    setCheck({
      receiver: true,
      sender: true,
    });
    console.log(errors);
    return errors;
  };

  return (
    <div className="inputBox-1">
      <span>02</span>
      <div className="inputDiv-1">
        <h2>Destination Address</h2>
        <input
          type="text"
          className="form-input"
          id="name"
          placeholder="NAME*"
          name="receiverName"
          value={receiver.receiverName}
          onChange={handleReceiver}
          onKeyUp={() => setFormErrors(validateReceiver(receiver))}
          required
        />

        <input
          type="text"
          className="form-input"
          id="contact"
          placeholder="RECEIVER CONTACT*"
          name="receiverContact"
          value={receiver.receiverContact}
          onChange={handleReceiver}
          onKeyUp={() => setFormErrors(validateReceiver(receiver))}
          required
        />

        <input
          type="text"
          className="form-input"
          id="address"
          placeholder="DESTINATION ADDRESS*"
          name="receiverAddress"
          value={receiver.receiverAddress}
          // onKeyUp={() => setFormErrors(formValidate(receiver))}
          onChange={handleReceiver}
          required
        />
        <label name="country">Country</label>
        <input
          type="text"
          className="form-input"
          id="country"
          placeholder="COUNTRY*"
          name="receiverCountry"
          value={receiver.receiverCountry}
          // onKeyUp={() => setFormErrors(formValidate(receiver))}
          onChange={handleReceiver}
          required
        />
        <label name="country">City</label>
        <input
          type="text"
          className="form-input"
          id="city"
          placeholder="CITY*"
          name="receiverCity"
          value={receiver.receiverCity}
          // onKeyUp={() => setFormErrors(formValidate(receiver))}
          onChange={handleReceiver}
          required
        />
      </div>
    </div>
  );
}

export function FormThree({ deliveryInfo, handleDelivery }) {
  const weight = [1, 3, 6, , 9, 12];
  return (
    <div>
      <div className="inputBox-2">
        <span>03</span>
        <div className="inputDiv-2">
          <h2>Delivery Information</h2>
          <label>Pickup Date</label>
          <input
            type="date"
            className="form-input"
            name="pickupDate"
            value={deliveryInfo.pickupDate}
            onChange={handleDelivery}
            required
          />
          <label>Pickup Time</label>
          <input
            type="time"
            className="form-input"
            name="pickupTime"
            value={deliveryInfo.pickupTime}
            onChange={handleDelivery}
            required
          />
          <label>Schedule Delivery</label>
          <select
            onChange={handleDelivery}
            className="form-input"
            name="schedule"
          >
            <option value="anytime">Anytime</option>
            <option value="urgent">Urgent</option>
          </select>

          <label>Please Describe(Shoe, food, cloth, document)</label>
          <textarea
            className="form-input"
            rows="10"
            required
            placeholder="Parcel Description*"
            name="description"
            value={deliveryInfo.description}
            onChange={handleDelivery}
          ></textarea>
          <label>Select Weight</label>
          <select
            className="form-input"
            onChange={handleDelivery}
            name="weight"
          >
            <option />
            {weight.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <label>Item Quantity</label>
          <input
            className="form-input"
            type="number"
            onChange={handleDelivery}
            name="quantity"
            value={deliveryInfo.quantity}
          />
        </div>
      </div>
    </div>
  );
}

export function FormFour({ totalPrice, weight, quantity }) {
  return (
    <div className="ship-pricing">
      <h3>Pricing</h3>
      <div className="pricing-container">
        <div className="pricing-box">
          <span>Weight</span>
          <span>{weight}kg</span>
        </div>
        <div className="pricing-box">
          <span>Total Quantity(s)</span>
          <span>{quantity}</span>
        </div>
        <div className="pricing-box">
          <span>Main Charge</span>
          {Number(weight) >= 6 ? <span>N2000</span> : <span>N1000</span>}
        </div>
        <div className="pricing-box">
          <span>Total Price</span>
          <span>N{totalPrice}</span>
        </div>
      </div>
    </div>
  );
}
