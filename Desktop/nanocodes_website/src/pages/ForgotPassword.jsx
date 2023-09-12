import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    // Make API request to initiate password reset
    fetch('https://api.nanocodes.com.ng/auth/password/reset/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Password reset email sent successfully!');
        } else {
          setMessage('Failed to send password reset email. Please try again.');
        }
      })
      .catch((error) => {
        setMessage('Failed to send password reset email. Please try again.');
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-md px-4 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Reset Password
          </button>
        </form>
        <p className="text-red-500 mt-2">{message}</p>
      </div>
    </div>
  );
}

export default ForgotPassword;
