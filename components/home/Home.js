const Home = () => {
  // document.querySelector("#contact-form").addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   e.target.elements.name.value = "";
  //   e.target.elements.email.value = "";
  //   e.target.elements.message.value = "";
  // });

  return (
    <div className="bodyContainer">
      <div className="header">
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
      {/* Brands */}

      <div className="brands">
        <div className="brandsCont">
          <img src="images/logo-coca-cola.png" alt="cocacola" />
          <img src="images/logo-godrej.png" alt="godrej" />
          <img src="images/logo-philips.png" alt="philips" />
          <img src="images/logo-paypal.png" alt="paypal" />
          <img src="images/logo-oppo.png" alt="oppo" />
        </div>
      </div>
      {/* Body Box */}
      <div className="bodyBox">
        <div>
          <img src="images/track1.svg" alt="image" />
        </div>
        <div className="bodyBox-1">
          <h2>
            Track Your Shipment Through The <br /> Application, At Any Time!
          </h2>
          <p>
            Do you need a fast delivery service? Then you are at the right
            place.We offer the fastest delivery service.
          </p>
          <button>Track Now</button>
        </div>
      </div>
      {/* Second Box */}
      <div className="bodyBox2">
        <div className="bodyBox-2">
          <h2>
            We Provide The Best Parcel Service <br /> Ever
          </h2>
          <p>
            Do you need a fast delivery service? Then you are at the right
            place.We offer the fastest delivery service.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img src="images/bike.svg" alt="image" />
        </div>
      </div>
      {/* Services */}
      <div className="services">
        <h2>How It Works</h2>
        <div className="servicesBox">
          <div className="box">
            <span>
              <img src="images/phone.svg" alt="shipping" />
            </span>
            <h3>Request Delivery</h3>
            <p>You first need to place a request for delivery.</p>
          </div>
          <div className="box">
            <span>
              <img src="images/shipping.svg" alt="shipping" />
            </span>
            <h3>Await Pickup</h3>
            <p>
              You just have to wait for us to arrive and pickup your ddelivery,
              package it for delivery.
            </p>
          </div>
          <div className="box">
            <span>
              <img src="images/track.svg" alt="shipping" />
            </span>
            <h3>Track Delivery</h3>
            <p>
              You can seat and home and track your delivery to see how its
              status
            </p>
          </div>
          <div className="box">
            <span>
              <img src="images/money.svg" alt="shipping" />
            </span>
            <h3>Cash On Delivery</h3>
            <p>
              Your delivery should arrive after three working days, and you pay
              cash on delivery.
            </p>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className="about">
        <div>
          <img src="/images/boxes.svg" alt="about image" />
        </div>
        <div className="aboutCont">
          <h2>About Us</h2>
          <p>
            Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.
            Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd
            boksättare tog att antal bokstäver och blandade dem för att göra ett
            provexemplar av en bok. Lorem ipsum har inte bara överlevt fem
            århundraden, utan även övergången till elektronisk typografi utan
            större förändringar. Det blev allmänt känt på 1960-talet i samband
            med lanseringen av Letraset-ark med avsnitt av Lorem.
          </p>
        </div>
      </div>
      {/* <!----testimonial--> */}
      <div class="testimonial">
        <h2>Testimonials</h2>
        <p>Here are what our beloved user are saying about our services...</p>
        <div class="small-container">
          <div class="row">
            <div class="col-3">
              <i class="fa fa-quote-left"> </i>
              <p>
                I am pleased with The Mi smart band 4 features a 39.9% larger
                (Than Mi band 3) Amoled color full-touch display width.
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src="images/user-1.png" alt="sean Parker" />
              <h3>Sean Parker</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left"> </i>
              <p>
                I am pleased with The Mi smart band 4 features a 39.9% larger
                (Than Mi band 3) Amoled color full-touch display width.
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src="images/user-2.png" alt="davies" />
              <h3>Ifeanyi Davies</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left"> </i>
              <p>
                I am pleased with The Mi smart band 4 features a 39.9% larger
                (Than Mi band 3) Amoled color full-touch display width.
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src="images/user-3.png" alt="rita" />
              <h3>Rita Jones</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Contact us */}
      <section id="contact">
        <h2 className="section-header">Contact</h2>

        <div className="contact-wrapper">
          {/* <!-- Left contact page -->  */}

          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <span>
                  <i className="fa sendIcon fa-paper-plane"></i>
                </span>
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          {/* <!-- Left contact page -->  */}

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place">City, State</span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (212) 555-2368
                    </a>
                  </span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      hitmeup@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul className="social-media-list">
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <hr />

            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
