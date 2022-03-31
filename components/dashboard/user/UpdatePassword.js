import React from "react";

const UpdatePassword = () => {
  return (
    <div className="update-profile">
      <div class="u-profile">
        <h3>Change Password</h3>

        <div className="u-input">
          <form>
            <label for="password">Old Password</label>

            <input type="password" />
            <label for="password">New Password</label>
            <input type="password" />
            <label for="password">Confirm Password</label>
            <input type="password" />

            <button className="u-btn">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
