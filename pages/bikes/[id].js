// import { useRouter } from 'next/router';
// import Navbar from '../../components/Navbar';

// const bikesData = [
//   { id: '1', name: 'Mountain Bike', price: 20, image: 'https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/source/himalayan-4506565ccada995d.jpg' },
//   { id: '2', name: 'Mountain Bike', price: 20, image: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fhero%2Fxpulse-200-4v%2Fhero-xpulse-200-4v-matt-nexus-blue.jpg%3Fv%3D1659429824&w=640&q=75' },
//   { id: '3', name: 'Mountain Bike', price: 20, image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Himalayan_New.png?size=690:388' },
//   { id: '4', name: 'Mountain Bike', price: 20, image: 'https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/source/himalayan-4506565ccada995d.jpg' },
//   { id: '5', name: 'Mountain Bike', price: 20, image: 'https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/source/himalayan-4506565ccada995d.jpg' },
//   { id: '6', name: 'Mountain Bike', price: 20, image: 'https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/source/himalayan-4506565ccada995d.jpg' },
//   { id: '7', name: 'Mountain Bike', price: 20, image: 'https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/source/himalayan-4506565ccada995d.jpg' },
//   { id: '8', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '9', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '10', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '11', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '12', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '13', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '14', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '15', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '16', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '17', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '18', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   { id: '19', name: 'Road Bike', price: 25, image: '/images/bike1.jpg' },
//   // Add more bikes here
// ];

// export default function BikeDetails() {
//   const router = useRouter();
//   const { id } = router.query;
//   const bike = bikesData.find((bike) => bike.id === id);

//   if (!bike) return <p>Loading...</p>;

//   return (
//     <div>
//       <Navbar />
//       <div className="bike-card">
//         <img src={bike.image} alt={bike.name} />
//         <h3>{bike.name}</h3>
//         <p>Price: ${bike.price} per day</p>
//         <button>Rent Now</button>
//       </div>
//       <style jsx>{`
//         /* Main container styling */
//         .bike-card {
//           max-width: 600px;
//           margin: 40px auto;
//           padding: 20px;
//           border: 1px solid #e0e0e0;
//           border-radius: 8px;
//           box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//           background-color: #fff;
//           text-align: center;
//         }

//         /* Image styling */
//         .bike-card img {
//           width: 100%;
//           max-width: 400px;
//           height: auto;
//           border-radius: 8px;
//           margin-bottom: 20px;
//         }

//         /* Typography */
//         .bike-card h3 {
//           font-size: 1.8rem;
//           color: #333;
//           margin-bottom: 10px;
//           font-weight: 600;
//         }

//         .bike-card p {
//           font-size: 1.1rem;
//           color: #555;
//           margin: 10px 0;
//         }

//         /* Button styling */
//         .bike-card button {
//           padding: 10px 20px;
//           font-size: 1rem;
//           font-weight: 600;
//           color: #fff;
//           background-color: #0070f3;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }

//         .bike-card button:hover {
//           background-color: #005bb5;
//         }

//         /* Navbar styling */
//         .navbar {
//           background-color: #333;
//           padding: 15px 20px;
//           color: #fff;
//           text-align: center;
//         }

//         .navbar a {
//           color: #fff;
//           text-decoration: none;
//           font-size: 1.1rem;
//           font-weight: 500;
//         }

//         .navbar a:hover {
//           color: #0070f3;
//         }

//         /* Additional global styles */
//         body {
//           font-family: Arial, sans-serif;
//           background-color: #f5f5f5;
//           margin: 0;
//           padding: 0;
//         }

//         .container {
//           padding: 20px;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const bikesData = [
  { id: '1', name: 'Mountain Bike', price: 20, image: 'https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/source/himalayan-4506565ccada995d.jpg' },
  { id: '2', name: 'Mountain Bike', price: 20, image: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fhero%2Fxpulse-200-4v%2Fhero-xpulse-200-4v-matt-nexus-blue.jpg%3Fv%3D1659429824&w=640&q=75' },
  // Add more bikes as needed
];

export default function BikeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const bike = bikesData.find((bike) => bike.id === id);

  const [isBooking, setIsBooking] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleBooking = async () => {
    setIsBooking(true);
    try {
      const response = await fetch('/api/bookBike', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...bookingDetails, bikeId: bike.id }),
      });

      if (response.ok) {
        alert('Bike booked successfully!');
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsBooking(false);
    }
  };

  if (!bike) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="bike-card">
        <img src={bike.image} alt={bike.name} />
        <h3>{bike.name}</h3>
        <p className="price">Price: ${bike.price} per day</p>

        {/* Booking form */}
        <div className="booking-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={bookingDetails.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={bookingDetails.email}
            onChange={handleInputChange}
          />
          <label>StartDate</label>
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            value={bookingDetails.startDate}
            onChange={handleInputChange}
          />
          <label>EndDate</label>
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            value={bookingDetails.endDate}
            onChange={handleInputChange}
          />
          <button onClick={handleBooking} disabled={isBooking}>
            {isBooking ? 'Booking...' : 'Rent Now'}
          </button>
        </div>
      </div>
      <style jsx>{`
        .bike-card {
          width: 80%;
          max-width: 900px;
          margin: 2rem auto;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          background-color: #fff;
        }
        
        .bike-card img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }

        h3 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .price {
          font-size: 1.2rem;
          color: #888;
          margin-bottom: 2rem;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .booking-form input {
          padding: 0.75rem;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          transition: all 0.2s ease;
        }

        .booking-form input:focus {
          outline: none;
          border-color: #0070f3;
          box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
        }

        button {
          padding: 0.75rem;
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
          background-color: #0070f3;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        button:hover {
          background-color: #005bb5;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        /* Responsive styling */
        @media (max-width: 768px) {
          .bike-card {
            width: 90%;
            padding: 1.5rem;
          }

          h3 {
            font-size: 1.5rem;
          }

          .price {
            font-size: 1rem;
          }

          button {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .bike-card {
            width: 95%;
            padding: 1rem;
          }

          h3 {
            font-size: 1.2rem;
          }

          .price {
            font-size: 0.9rem;
          }

          button {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
