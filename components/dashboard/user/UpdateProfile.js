import React, { useState } from "react";
import Input from "./Input";

function UpdateProfile() {
  const [image, setImage] = useState();

  console.log(image);
  return (
    <div className="update-profile">
      <div class="u-profile">
        <h3>Update Profile</h3>

        <div className="u-input">
          <form>
            <label for="name">Name</label>

            <Input type="text" />
            <label for="email">Email</label>
            <input type="email" />
            <label for="avatar">Avatar</label>
            <div className="u-avatar">
              <img src="/images/user-2.png" alt="profile" />
              <input type="file" onChange={(e) => setImage(e.target.value)} />
            </div>
            <button className="u-btn">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
