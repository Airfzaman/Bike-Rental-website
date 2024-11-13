// import Navbar from '../components/Navbar';

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <section id="home">
//         <h2>Welcome to Rent a Bike</h2>
//         <p>Find the perfect bike for your next adventure.</p>
//       </section>
//     </div>
//   );
// }
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="overlay">
          <h2>Welcome to Rent a Bike</h2>
          <p>Your adventure begins here. Find the perfect bike for your next journey.</p>
          <div className="cta">
            <a href='/bikes'><button className="ctaButton">Browse Bikes</button></a>
            <a href='/bikes'><button className="ctaButton">Book Now</button></a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="service">
          <h3>Wide Selection</h3>
          <p>Choose from a variety of bikes suited for all terrains and preferences.</p>
        </div>
        <div className="service">
          <h3>Flexible Rentals</h3>
          <p>Rent bikes for an hour, a day, or a week—whatever suits your needs.</p>
        </div>
        <div className="service">
          <h3>Convenient Delivery</h3>
          <p>Get your bike delivered directly to your location, hassle-free.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <div className="address">
            <h3>Address</h3>
            <p>Baikuntha Path, South Sarania, Guwahati, Assam 781007</p>
            <p>8:30am - 10:30pm</p>
          </div>
          <div className="contacts">
            <h3>Contacts</h3>
            <p>+91 81338 84198</p>
            <p>info@bharagari.in</p>
            <div className="social-icons">
              <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14282.789002519934!2d91.78761364187388!3d26.1406032762874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731048503354!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </footer>

      {/* Scoped CSS using styled-jsx */}
      <style jsx>{`
        /* Navbar */
        .navbar {
          // position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 10px 20px;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Add padding to the top of the hero section */
        .hero {
          background-image: url('https://plus.unsplash.com/premium_photo-1661962466364-1f54edb628cf?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center;
          height: 100vh;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          // position: relative;
          padding-top: 80px; /* Adjust this value based on your navbar height */
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.5);
          padding: 20px;
          border-radius: 10px;
        }

        h2 {
          font-size: 3rem;
          margin-bottom: 20px;
          font-family: 'Arial', sans-serif;
          text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);
        }

        p {
          font-size: 1.5rem;
          margin-top: 10px;
          margin-bottom: 30px;
          font-family: 'Arial', sans-serif;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
        }

        .cta {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .ctaButton {
          background-color: #ff7f50;
          border: none;
          color: white;
          padding: 15px 30px;
          font-size: 1.1rem;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease;
          min-width: 120px;
        }

        .ctaButton:hover {
          background-color: #ff6347;
        }

        @media (max-width: 768px) {
          .ctaButton {
            padding: 12px 25px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .ctaButton {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }

        /* Services Section */
        .services {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          background-color: #f4f4f4;
          padding: 50px 20px;
        }

        @media (min-width: 768px) {
          .services {
            flex-direction: row;
            justify-content: space-around;
          }
        }

        .service {
          text-align: center;
          max-width: 90%;
        }

        @media (min-width: 768px) {
          .service {
            width: 30%;
          }
        }

        .service h3 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: #333;
        }

        .service p {
          font-size: 1.2rem;
          color: #666;
        }

        /* Footer Section */
        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          background-color: #0A2D56;
          color: #fff;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .footer {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .contact-info {
          max-width: 100%;
          text-align: center;
        }

        @media (min-width: 768px) {
          .contact-info {
            flex: 1;
            max-width: 40%;
            text-align: left;
          }
        }

        .contact-info h2, .contact-info h3 {
          color: #fff;
          font-size: 24px;
        }

        .address, .contacts {
          margin-top: 20px;
        }

        .contacts p, .address p {
          font-size: 16px;
          color: #D1D9E6;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 10px;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .social-icons {
            justify-content: start;
          }
        }

        .social-icons img {
          width: 30px;
          height: 30px;
        }

        .map {
          width: 100%;
          padding-left: 0;
        }

        @media (min-width: 768px) {
          .map {
            flex: 1;
            max-width: 50%;
            padding-left: 20px;
          }
        }

        .map iframe {
          width: 100%;
          height: 300px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
