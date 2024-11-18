import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Verify_phone_OTP() {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30); // 30-second countdown

  const location = useLocation();
  const navigate = useNavigate();
  const userId = new URLSearchParams(location.search).get('userId'); // Extract userId from query params

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleInputChange = (value, index) => {
    if (!isNaN(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    } else if (value === '' && index > 0) {
      // Move focus to the previous input on backspace
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOTP = otp.join('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/verify-phone-otp', {
        userId, // Include userId in the request body
        otp: enteredOTP,
      });

      if (response.status === 200) {
        // alert('OTP Verified Successfully');
        navigate('/Question'); // Redirect on success
      } else {
        setError(response.data.message || 'Incorrect OTP. Please try again.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to verify OTP. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      setError('');
      setTimer(30); // Reset the timer
      const response = await axios.post('http://localhost:8000/api/v1/users/resend-otp', { userId });
      if (response.status === 200) {
        alert('OTP resent successfully.');
      } else {
        setError(response.data.message || 'Failed to resend OTP. Please try again later.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to resend OTP. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 heart-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-black"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="backdrop-blur-sm bg-black/40 rounded-2xl shadow-2xl overflow-hidden border border-red-900/30 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Verify Your Phone Number</h2>
            <p className="text-red-300/80">
              We've sent a 6-digit code to your phone. It will expire in {timer} seconds.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className="w-12 h-14 text-center text-xl font-bold bg-white/10 border border-red-900/30 rounded-lg text-white focus:ring-2 focus:ring-red-900/50 focus:border-transparent transition-all"
                />
              ))}
            </div>

            {error && (
              <div className="text-red-500 text-center mb-4 bg-red-900/20 p-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-red-900 text-white rounded-lg font-medium hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={handleResendOTP}
              className={`text-red-400 hover:text-red-300 transition-colors text-sm ${
                timer > 0 ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={timer > 0 || loading}
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : 'Resend OTP'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify_phone_OTP;
