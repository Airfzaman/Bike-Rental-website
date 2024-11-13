// import Link from 'next/link';

// const BikeCard = ({ bike }) => {
//   return (
//     <div className="bike-card">
//       <img src={bike.image} alt={bike.name} />
//       <h3>{bike.name}</h3>
//       <p>Price: ${bike.price} per day</p>
//       <Link href={`/bikes/${bike.id}`}>
//         <button>Rent Now</button>
//       </Link>
//     </div>
//   );
// };

// export default BikeCard;
import Link from 'next/link';

const BikeCard = ({ bike }) => {
  return (
    <div className="bike-card">
      <img src={bike.image} alt={bike.name} />
      <h3>{bike.name}</h3>
      <p>Price: ${bike.price} per day</p>
      <Link href={`/bikes/${bike.id}`}>
        <button>Rent Now</button>
      </Link>
      <style jsx>{`
        /* Card Container */
        .bike-card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          padding: 16px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
          max-width: 300px;
          margin: 1rem auto;
        }

        /* Hover Effect */
        .bike-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        /* Image Styling */
        .bike-card img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        /* Text Styling */
        h3 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
          color: #333;
        }

        p {
          color: #666;
          font-size: 1rem;
          margin: 0.5rem 0 1rem;
        }

        /* Button Styling */
        button {
          background-color: #f0a500;
          border: none;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #e08900;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .bike-card {
            padding: 12px;
          }

          h3 {
            font-size: 1.1rem;
          }

          p {
            font-size: 0.9rem;
          }

          button {
            font-size: 0.9rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BikeCard;
