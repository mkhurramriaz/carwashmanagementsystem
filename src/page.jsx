import React from 'react';
import { Link } from 'react-router-dom'; 
import './styles.css';
import micaLogo from './mica.jpg';

function Page() {
  return (
    <div>
      <header className=" bg-red-500 flex items-center justify-between text-center " >
        <div className="logo">
          <img src={micaLogo} alt="Car Logo" />
        </div>
        <div className=" font-bold text-white text-3xl m-8">
          <h1 className='cursor-pointer'>Car Wash Booking System</h1>
        </div>
      </header>
<nav className="bg-slate-500 p-4 flex items-center justify-center space-x-6">
  <Link className="font-bold text-white hover:text-red-500" to="/register">Signup</Link>
  <Link className="font-bold text-white hover:text-red-500" to="/login">Login</Link>
  <Link className="font-bold text-white hover:text-red-500" to="/services">Services</Link>
  <Link className="font-bold text-white hover:text-red-500" to="/booking">Booking</Link>
  <Link className="font-bold text-white hover:text-red-500" to="/payment">Payment</Link>
  <Link className="font-bold text-white hover:text-red-500" to="/feedback">Feedback</Link>
</nav>


    </div>
  );
}

export default Page;