import React from 'react';
import './Header.css';
import micaLogo from '../mica.jpg';

function Header({ onNavigate }) {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={micaLogo} alt="Car Logo" />
        </div>
        <div className="title">
          <h1>Car Wash Booking System1</h1>
        </div>
      </header>
      <nav className="nav">
        <button onClick={() => onNavigate('login')}>Login</button>
        <button onClick={() => onNavigate('services')}>Services</button>
        <button onClick={() => onNavigate('booking')}>Booking</button>
        <button onClick={() => onNavigate('payment')}>Payment</button>
        <button onClick={() => onNavigate('feedback')}>Feedback</button>
      </nav>
    </>
  );
}

export default Header;
