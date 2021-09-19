
import React from 'react';
import { Link  } from 'react-router-dom';

 export default function Navbar () {
 
    return (
     <nav className="navbar">
      <h1>Flight Info</h1>
      <div className="links">
      <Link to="/">Data Grid</Link>
      <Link to="/reservationForm" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Reservation Form</Link>
      </div>
    </nav>
    );
  }

