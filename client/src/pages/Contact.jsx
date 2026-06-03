import Navbar from "../components/Navbar";
import "../css/Contact.css";
function Contact() {
  const images = [

    "https://images.unsplash.com/photo-1490645935967-10de6ba17061",

    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",

    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",

    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  ];

  return (

    <>

      <Navbar />

      <div className="contact-page">

        <div className="contact-top">

          <h1>
            Contact Nutrient Tracker
          </h1>

          <p>
            Healthy Life Starts With
            Healthy Food
          </p>

          <div className="contact-info">

            <div className="info-card">

              <h3>Email</h3>

              <p>
                nutrienttracker@gmail.com
              </p>

            </div>

            <div className="info-card">

              <h3>Phone</h3>

              <p>
                +91 9876543210
              </p>

            </div>

            <div className="info-card">

              <h3>Address</h3>

              <p>
                45 Healthy Street,
                Chennai, India
              </p>

            </div>

          </div>

        </div>

        <div className="slider-section">

          <div className="slider-track">

            {images.map((img, index) => (

              <img
                key={index}
                src={img}
                alt="food"
              />
            ))}

            {images.map((img, index) => (

              <img
                key={index + "copy"}
                src={img}
                alt="food"
              />
            ))}

          </div>

        </div>

        <div className="contact-form-section">

          <h2>
            Send Us Message
          </h2>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Enter Name"
            />

            <input
              type="email"
              placeholder="Enter Email"
            />

            <textarea
              placeholder="Enter Message"
            ></textarea>

            <button type="submit">

              Submit

            </button>

          </form>

        </div>

        <div className="map-section">

          <h2>
            Our Location
          </h2>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.189365434219!2d78.6568942745191!3d10.790483158807695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaaf3f59f51a61%3A0x94bce5d6d3d8f17b!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1716820000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </>
  );
}

export default Contact;