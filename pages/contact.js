// import Navbar from '../components/Navbar';

// export default function About() {
//   return (
//     <div>
//       <Navbar />
//       <section id="about">
//         <h2>Contact Us</h2>
//         <p>We offer the best bikes for rent at affordable prices!</p>
//       </section>
//     </div>
//   );
// }
// import Navbar from '../components/Navbar';

// export default function Contact() {
//   return (
//     <div>
//       <Navbar />
//       <section id="contact">
//         <div className="container">
//           <h2>Contact Us</h2>
//           <p>We offer the best bikes for rent at affordable prices!</p>
//           <div className="contact-info">
//             <h3>Get in Touch</h3>
//             <p>If you have any questions, feel free to contact us:</p>
//             <ul>
//               <li><strong>Email:</strong> support@bikehire.com</li>
//               <li><strong>Phone:</strong> +1 234 567 890</li>
//               <li><strong>Address:</strong> 123 Bike Lane, Cyclist City</li>
//               <li><strong>Business Hours:</strong> Mon - Fri, 9 AM - 6 PM</li>
//             </ul>
//             <form className="contact-form">
//               <h4>Contact Form</h4>
//               <label htmlFor="name">Your Name:</label>
//               <input type="text" id="name" name="name" required />
              
//               <label htmlFor="email">Your Email:</label>
//               <input type="email" id="email" name="email" required />
              
//               <label htmlFor="message">Your Message:</label>
//               <textarea id="message" name="message" required></textarea>
              
//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <style jsx>
//         {`
//           /* Global Styles */
//           body {
//             font-family: 'Arial', sans-serif;
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//             background-color: #fafafa;
//           }

//           h2, h3, h4 {
//             margin-bottom: 10px;
//             color: #333;
//           }

//           p {
//             font-size: 1.1rem;
//             color: #666;
//           }

//           /* Contact Section */
//           #contact {
//             background: linear-gradient(45deg, #ff6f61, #d63b26);
//             padding: 60px 20px;
//             color: white;
//             text-align: center;
//           }

//           .container {
//             max-width: 1200px;
//             margin: 0 auto;
//             padding: 20px;
//             background-color: #fff;
//             border-radius: 8px;
//             box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//             color: #333;
//           }

//           .contact-info {
//             margin-bottom: 30px;
//           }

//           .contact-info ul {
//             list-style: none;
//             padding: 0;
//             margin-bottom: 20px;
//           }

//           .contact-info li {
//             margin-bottom: 12px;
//             font-size: 1rem;
//           }

//           .contact-info li strong {
//             color: #333;
//           }

//           /* Contact Form Styling */
//           .contact-form {
//             background-color: #fff;
//             padding: 25px;
//             border-radius: 8px;
//             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//           }

//           .contact-form label {
//             display: block;
//             font-weight: bold;
//             margin-bottom: 8px;
//             font-size: 1.1rem;
//             color: #333;
//           }

//           .contact-form input,
//           .contact-form textarea {
//             width: 100%;
//             padding: 12px;
//             margin-bottom: 15px;
//             border: 1px solid #ccc;
//             border-radius: 6px;
//             font-size: 1rem;
//           }

//           .contact-form textarea {
//             height: 150px;
//             resize: vertical;
//           }

//           .contact-form button {
//             padding: 12px 25px;
//             background-color: #007BFF;
//             color: white;
//             font-size: 1rem;
//             border: none;
//             border-radius: 6px;
//             cursor: pointer;
//             transition: background-color 0.3s ease;
//           }

//           .contact-form button:hover {
//             background-color: #0056b3;
//           }

//           /* Responsive Styling */
//           @media (max-width: 768px) {
//             .container {
//               padding: 20px;
//             }

//             .contact-info {
//               text-align: center;
//             }

//             .contact-form label {
//               font-size: 0.9rem;
//             }

//             .contact-form input,
//             .contact-form textarea {
//               font-size: 0.9rem;
//             }

//             .contact-form button {
//               width: 100%;
//             }
//           }

//           @media (max-width: 480px) {
//             h2 {
//               font-size: 1.8rem;
//             }

//             .container {
//               padding: 15px;
//             }

//             .contact-info h3 {
//               font-size: 1.3rem;
//             }

//             .contact-info p,
//             .contact-info li {
//               font-size: 0.9rem;
//             }

//             .contact-form input,
//             .contact-form textarea {
//               padding: 10px;
//             }

//             .contact-form button {
//               padding: 14px 30px;
//               font-size: 1rem;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div>
      <Navbar />
      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>We offer the best bikes for rent at affordable prices!</p>
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>If you have any questions, feel free to contact us:</p>
            <ul>
              <li><strong>Email:</strong> support@bikehire.com</li>
              <li><strong>Phone:</strong> +1 234 567 890</li>
              <li><strong>Address:</strong> 123 Bike Lane, Cyclist City</li>
              <li><strong>Business Hours:</strong> Mon - Fri, 9 AM - 6 PM</li>
            </ul>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h4>Contact Form</h4>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

              <label htmlFor="phone">Your Phone Number:</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />

              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        #contact {
          background-image: url('https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/source/himalayan-4506565ccada995d.jpg');
          background-size: cover;
          background-position: center;
          padding: 60px 20px;
          color: white;
          text-align: center;
        }
         /* Global Styles */
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #fafafa;
          }

          h2, h3, h4 {
            margin-bottom: 10px;
            color: #333;
          }

          p {
            font-size: 1.1rem;
            color: #666;
          }

          /* Contact Section */
          #contact {
            background: linear-gradient(45deg, #ff6f61, #d63b26);
            padding: 60px 20px;
            color: white;
            text-align: center;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            color: #333;
          }

          .contact-info {
            margin-bottom: 30px;
          }

          .contact-info ul {
            list-style: none;
            padding: 0;
            margin-bottom: 20px;
          }

          .contact-info li {
            margin-bottom: 12px;
            font-size: 1rem;
          }

          .contact-info li strong {
            color: #333;
          }

          /* Contact Form Styling */
          .contact-form {
            background-color: #fff;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .contact-form label {
            display: block;
            font-weight: bold;
            margin-bottom: 8px;
            font-size: 1.1rem;
            color: #333;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
          }

          .contact-form textarea {
            height: 150px;
            resize: vertical;
          }

          .contact-form button {
            padding: 12px 25px;
            background-color: #007BFF;
            color: white;
            font-size: 1rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .contact-form button:hover {
            background-color: #0056b3;
          }

          /* Responsive Styling */
          @media (max-width: 768px) {
            .container {
              padding: 20px;
            }

            .contact-info {
              text-align: center;
            }

            .contact-form label {
              font-size: 0.9rem;
            }

            .contact-form input,
            .contact-form textarea {
              font-size: 0.9rem;
            }

            .contact-form button {
              width: 100%;
            }
          }

          @media (max-width: 480px) {
            h2 {
              font-size: 1.8rem;
            }

            .container {
              padding: 15px;
            }

            .contact-info h3 {
              font-size: 1.3rem;
            }

            .contact-info p,
            .contact-info li {
              font-size: 0.9rem;
            }

            .contact-form input,
            .contact-form textarea {
              padding: 10px;
            }

            .contact-form button {
              padding: 14px 30px;
              font-size: 1rem;
            }
          }
        /* ... rest of the CSS from your original code ... */
      `}</style>
    </div>
  );
}

