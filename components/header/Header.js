const header = () => {
  return (
    <div>
      <div className="header">
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
                <li>Request Delivery</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="headerBody">
          <div className="headerBody-1">
            <h1>
              Fast And <span>Urgent</span> Courier Delivery Services
            </h1>
            <p>
              Do you need a fast delivery service? Then you are at the right
              place.We offer the fastest delivery service.
            </p>
            <button>Request Delivery</button>
          </div>
          <div>
            <img src="images/delivery.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
