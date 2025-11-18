import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function Payment() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');
      setIsLoading(true);

      // Client-side validation
      if (!name || name.length < 3) {
        setError('Please enter your name (minimum 3 characters)');
        setIsLoading(false);
        return;
      }
      if (!amount || parseFloat(amount) < 1) {
        setError('Amount must be at least 1');
        setIsLoading(false);
        return;
      }

      const paymentData = {
        name,
        amount: parseFloat(amount),
        paymentMethod
      };

      axios.post('http://localhost:3001/payment', paymentData)
        .then((response) => {
          setSuccess('Payment successful!');
          // Clear form
          setName('');
          setAmount('');
          setPaymentMethod('creditCard');
        })
        .catch((error) => {
          console.error('Payment failed:', error);
          const errorMessage = error.response?.data?.message || 'Payment failed. Please try again.';
          setError(errorMessage);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

  return (
    <section id="payment">
      <div className="form-container">
        <h2>Payment</h2>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name as used in booking"
            required
            minLength={3}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
          />

          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount (minimum 1)"
            required
            min="1"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={isLoading}
          />

          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            required
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            disabled={isLoading}
          >
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Make Payment'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Payment;
 