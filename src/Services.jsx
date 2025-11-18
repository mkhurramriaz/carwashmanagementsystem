// Services.js
import React from 'react';
import './styles.css';

function Services() {

  return (
    <div className="services-page">
      <div className="services-container">
        <h2>Our Services</h2>
        <table>
          <colgroup>
            <col style={{ width: '7%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '7%' }} />
          </colgroup>
          <thead>
            <tr>
              <th>Wash Type</th>
              <th>Description</th>
              <th>Price</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Wash</td>
              <td>Exterior wash and dry</td>
              <td>Rs100</td>
              <td>30 minutes</td>
            </tr>
            <tr>
              <td>Premium Wash</td>
              <td>Exterior and interior cleaning with waxing</td>
              <td>Rs200</td>
              <td>1 hour</td>
            </tr>
            <tr>
              <td>Detailing</td>
              <td>Comprehensive cleaning with paint protection</td>
              <td>Rs500</td>
              <td>2 hours</td>
            </tr>
          </tbody>
        </table>
        <button>Proceed to Booking</button>
      </div>
    </div>
  );
}

export default Services;