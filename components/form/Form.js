import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        <div className="formContainer">
          <div className="inputBox-1">
            <span>01</span>
            <div className="inputDiv-1">
              <h2>Pick-Up Address</h2>
              <input
                type="text"
                className="form-input"
                id="name"
                placeholder="NAME*"
                name="name"
                required
              />

              <input
                type="text"
                className="form-input"
                id="contact"
                placeholder="SENDER CONTACT*"
                name="contact"
                required
              />

              <input
                type="text"
                className="form-input"
                id="address"
                placeholder="SENDER ADDRESS*"
                name="address"
                required
              />
              <label name="country">Country</label>
              <input
                type="text"
                className="form-input"
                id="country"
                placeholder="COUNTRY*"
                name="country"
                required
              />
              <label name="country">City</label>
              <input
                type="text"
                className="form-input"
                id="city"
                placeholder="CITY*"
                name="city"
                required
              />
              <label name="country">ZIP</label>
              <input
                type="text"
                className="form-input"
                id="zip"
                placeholder=" SENDER ZIP*"
                name="zip"
                required
              />
            </div>
          </div>
          {/* Second input */}

          <div className="inputBox-1">
            <span>02</span>
            <div className="inputDiv-1">
              <h2>Destination Address</h2>
              <input
                type="text"
                className="form-input"
                id="name"
                placeholder="NAME*"
                name="name"
                required
              />

              <input
                type="text"
                className="form-input"
                id="contact"
                placeholder="RECEIVER CONTACT*"
                name="contact"
                required
              />

              <input
                type="text"
                className="form-input"
                id="address"
                placeholder="DESTINATION ADDRESS*"
                name="address"
                required
              />
              <label name="country">Country</label>
              <input
                type="text"
                className="form-input"
                id="country"
                placeholder="COUNTRY*"
                name="country"
                required
              />
              <label name="country">City</label>
              <input
                type="text"
                className="form-input"
                id="city"
                placeholder="CITY*"
                name="city"
                required
              />
              <label name="country">ZIP</label>
              <input
                type="text"
                className="form-input"
                id="zip"
                placeholder="DESTINATION ZIP*"
                name="zip"
                required
              />
            </div>
          </div>
          {/* Third input */}
          <div className="inputBox-2">
            <span>03</span>
            <div className="inputDiv-2">
              <h2>Delivery Information</h2>
              <label>Pickup Date</label>
              <input
                type="date"
                className="form-input"
                name="deliverydate"
                required
              />
              <label>Pickup Time</label>
              <input
                type="time"
                className="form-input"
                id="contact"
                placeholder="YOUR PHONE*"
                name="yourphone"
                required
              />
              <label>Schedule Delivery</label>
              <select className="form-input" name="schedule">
                <option value="anytime">Anytime</option>
                <option value="urgent">Urgent</option>
              </select>
              <label>
                Please Describe(dimensions, weight, number or pieces)
              </label>
              <textarea
                className="form-input"
                rows="10"
                required
                placeholder="Parcel Description*"
                name="parceldescription"
              ></textarea>
            </div>
          </div>

          {/* fourth input box */}
          <div className="inputBox-2">
            <span>04</span>
            <div className="inputDiv-2">
              <h2>Basic Information</h2>
              <input
                type="text"
                className="form-input"
                id="name"
                placeholder="YOUR NAME*"
                name="yourname"
                required
              />

              <input
                type="text"
                className="form-input"
                id="contact"
                placeholder="YOUR PHONE*"
                name="yourphone"
                required
              />

              <input
                type="email"
                className="form-input"
                id="address"
                placeholder="YOUR EMAIL*"
                name="email"
                required
              />
              <textarea
                className="form-input"
                rows="10"
                placeholder="Any Other Information"
                name="yourmessage"
              ></textarea>
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
