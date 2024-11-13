// import Navbar from '../components/Navbar';

// export default function About() {
//   return (
//     <div>
//       <Navbar />
//       <section id="about">
//         <h2>About Us</h2>
//         <p>We offer the best bikes for rent at affordable prices!</p>
//       </section>
//     </div>
//   );
// }
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <div className="about-container">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Rent a Bike</strong>! We specialize in offering high-quality bikes for rent,
            tailored to suit both casual riders and adventure enthusiasts. Our mission is to make bike
            rentals affordable, convenient, and accessible for everyone.
          </p>
          <p>
            Our fleet includes a wide variety of bikes, from city cruisers and mountain bikes to electric bikes, 
            ensuring you ll find the perfect match for your needs. We are committed to providing well-maintained 
            and sanitized bikes, and our knowledgeable team is here to help you select the right bike for your journey.
          </p>
          <p>
            Whether you re looking to explore the city, go off-road, or simply enjoy a leisurely ride, 
            <strong>Rent a Bike</strong> is here to make it happen. Join us and discover the freedom of riding!
          </p>
        </div>
      </section>

      <style jsx>{`
        /* General Styling */
        #about {
          padding: 2rem 1rem;
          background-color: #f5f5f5;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        /* About Container */
        .about-container {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          padding: 2rem;
          text-align: center;
        }

        /* Header Styling */
        .about-container h2 {
          color: #333;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        /* Text Styling */
        .about-container p {
          color: #555;
          font-size: 1rem;
          line-height: 1.6;
          margin: 1rem 0;
        }

        .about-container strong {
          color: #f0a500;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          #about {
            padding: 1.5rem;
          }

          .about-container {
            padding: 1.5rem;
          }

          .about-container h2 {
            font-size: 1.75rem;
          }

          .about-container p {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .about-container h2 {
            font-size: 1.5rem;
          }

          .about-container p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
