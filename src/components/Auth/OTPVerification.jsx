import React, { useState } from 'react';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button type="submit">Verify OTP</button>
    </form>
  );
};

export default OTPVerification;
