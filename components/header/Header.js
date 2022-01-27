const header = () => {
  return (
    <div className="navMain">
      <div className="navContainer">
        <div className="logo">
          <img src="images/logo2.svg" alt="logo" />
        </div>

        <nav className="navBar">
          <div className="fristNav">
            <ul>
              <li>Home</li>
              <li>Be a Driver</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="secondNav">
            <ul>
              <li>Track Parcel</li>
              <li>Sign Up</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default header;
