import React, { useState } from "react";

export const FormOne = ({ sender, handleChange }) => {
  return (
    <div>
      <form>
        <div className="inputBox-1">
          <span>01</span>
          <div className="inputDiv-1">
            <h2>Pick-Up Address</h2>
            <input
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
              required
            />

            <input
              type="text"
              className="form-input"
              placeholder="SENDER ADDRESS*"
              name="senderAddress"
              value={sender.senderAddress}
              onChange={handleChange}
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
              required
            />
            <label name="country">City</label>
            <input
              type="text"
              className="form-input"
              placeholder="CITY*"
              name="senderCity"
              value={sender.senderCity}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export function FormTwo({ receiver, handleReceiver }) {
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
          required
        />

        <input
          type="text"
          className="form-input"
          id="address"
          placeholder="DESTINATION ADDRESS*"
          name="receiverAddress"
          value={receiver.receiverAddress}
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
