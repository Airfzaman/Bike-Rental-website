// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <header>
//       <nav>
//         <h1>Rent a Bike</h1>
//         <ul>
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/bikes">Bikes</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <h1 className="navbar-logo">Rent a Bike</h1>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/bikes">Bikes</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
      <style jsx>{`
      *{
      margin:0px;
      padding:0px;}
        /* Basic Styling */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #333;
          color: #fff;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }

        .navbar-logo {
          font-size: 1.5rem;
          font-weight: bold;
          padding-left: 0;
          margin-left: 0;
        }

        /* Links Styling */
        .nav-links ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          padding-left: 0;
          margin-left: 0;
        }

        .nav-links ul li a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s;
        }

        .nav-links ul li a:hover {
          color: #f0a500;
          background-color: #D3D3D3;
        }

        /* Mobile Menu */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .bar {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px;
          background-color: #fff;
          transition: transform 0.3s;
        }

        /* Responsive Styling */
        @media (max-width: 768px) {
          .nav-links ul {
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background-color: #333;
            display: ${isOpen ? "flex" : "none"};
            padding: 1rem;
          }

          .menu-toggle {
            display: block;
          }

          .nav-links.open ul {
            display: flex;
          }

          .navbar-logo {
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
