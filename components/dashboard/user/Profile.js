import React from "react";
import Link from "next/link";

const Profile = () => {
  return (
    <div class="profile">
      <h1>Profile</h1>
      <div class="profile-cont">
        <div class="profile-image">
          <img src="/images/user-2.png" alt="profile pic" />
          <Link href="/user/updateprofile">
            <button class="profile-btn">Edit Profile</button>
          </Link>
        </div>
        <div class="profile-content">
          <div class="p-detail">
            <h4>Name</h4>
            <p>Ezie Innocent</p>
          </div>
          <div class="p-detail">
            <h4>Email</h4>
            <p>eziechukwudi@gmail.com</p>
          </div>
          <div class="p-detail">
            <h4>Joined On</h4>
            <p>1-05-2022</p>
          </div>
          <div class="p-btn-main">
            <Link href="">
              <button class="p-btn">My Shipment</button>
            </Link>

            <Link href="/user/updatepassword">
              <button class="p-btn">Change Password</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
