import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function Feedback() {
  const [customerName, setCustomerName] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [rating, setRating] = useState('1');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Client-side validation
    if (customerName.length < 3) {
      setError('Customer name must be at least 3 characters long');
      return;
    }
    if (serviceId.length < 3) {
      setError('Service ID must be at least 3 characters long');
      return;
    }
    if (comments.length < 5) {
      setError('Comments must be at least 5 characters long');
      return;
    }

    const feedbackData = {
      customerName,
      serviceId,
      rating: parseInt(rating), // Convert to number as required by validation
      comments,
    };

    axios.post('http://localhost:3001/feedback', feedbackData)
      .then((response) => {
        setSuccess('Feedback submitted successfully!');
        // Clear form
        setCustomerName('');
        setServiceId('');
        setRating('1');
        setComments('');
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
        setError(error.response?.data?.message || 'Error submitting feedback. Please try again.');
      });
  };

  return (
    <section id="feedback">
      <div className="form-container">
        <h2>Feedback & Ratings</h2>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Enter your full name (min 3 characters)"
            required
            minLength={3}
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <label htmlFor="serviceId">Service ID:</label>
          <input
            type="text"
            id="serviceId"
            name="serviceId"
            placeholder="Enter the service ID (min 3 characters)"
            required
            minLength={3}
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
          />

          <label htmlFor="rating">Rating (1-5):</label>
          <select
            id="rating"
            name="rating"
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="1">1 – Poor</option>
            <option value="2">2 – Fair</option>
            <option value="3">3 – Good</option>
            <option value="4">4 – Very Good</option>
            <option value="5">5 – Excellent</option>
          </select>

          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Enter your comments here... (min 5 characters)"
            rows="4"
            required
            minLength={5}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </section>
  );
}

export default Feedback;
 


