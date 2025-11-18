import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

function Booking() {
  const [ownerName, setOwnerName] = useState('');
  const [carModel, setCarModel] = useState('toyotaCorolla');
  const [service, setService] = useState('basic');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/booking', {
      ownerName,
      carModel,
      service,
      date,
      time
    })
    .then(result => {
      console.log(result.data);
      if (result.status === 200) {
        navigate("/payment");
      }
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <section id="booking">
      <div className="form-container">
        <h2>Book a Service</h2>
        <form onSubmit={handleSubmit}>
          {/* Car Owner Name */}
          <label htmlFor="ownerName">Car Owner Name:</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            placeholder="Enter your full name"
            required
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />

          {/* Car Model */}
          <label htmlFor="carModel">Car Model:</label>
          <select
            id="carModel"
            name="carModel"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
          >
            <option value="toyotaCorolla">Toyota Corolla</option>
            <option value="hondaCivic">Honda Civic</option>
            <option value="bmw3Series">BMW 3 Series</option>
            <option value="audiA4">Audi A4</option>
            <option value="mercedesBenzCClass">Mercedes‑Benz C‑Class</option>
            <option value="hyundaiElantra">Hyundai Elantra</option>
          </select>

          {/* Service Selection */}
          <label htmlFor="service">Select Service:</label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="basic">Basic Wash – Rs100 – 30 minutes</option>
            <option value="premium">Premium Wash – Rs200 – 1 hour</option>
            <option value="detailing">Detailing – Rs500 – 2 hours</option>
          </select>

          {/* Preferred Date */}
          <label htmlFor="date">Preferred Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Preferred Time */}
          <label htmlFor="time">Preferred Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          {/* Submit Button */}
          <button type="submit">Proceed to Payment</button>
        </form>
      </div>
    </section>
  );
}

export default Booking;
 