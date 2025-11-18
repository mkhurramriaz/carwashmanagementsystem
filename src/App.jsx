import './styles.css';  // Global CSS Import
import Signup from './Signup';
import Home from './Home';
import Deposit from './Deposit';
import Welcome from './Welcome';
import Page from './page';  // Page Import
import Login from './Login'; 
import Services from './Services'; 
import Booking from './Booking'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Withdrawal from './Withdrawal';
import Sendemail from './Sendemail';
import Sendsms from './Sendsms';
import Payment  from './Payment';
import Feedback  from './Feedback';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/payment' element={<Payment />} />
            <Route path='/services' element={<Services />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/booking' element={<Booking />} />
          <Route path='/send-email' element={<Sendemail />} />
          <Route path='/send-sms' element={<Sendsms />} />
          <Route path='/login' element={<Login />} />        {/* ✅ Only once */}
          <Route path='/home' element={<Home />} />
          <Route path='/page' element={<Page />} />           {/* optional if needed */}
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdrawal' element={<Withdrawal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;