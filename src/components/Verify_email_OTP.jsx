
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { verifyPhoneOtp } from "../store/auth/authActions.js";
import axios from "axios";

export default function Verify_email_otp() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(30); // 30-second countdown timer
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error, isLoading } = useSelector((state) => state.auth);

  // Timer countdown logic
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
    } else if (value === "" && index > 0) {
      // Move focus to the previous input on backspace
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    if (!user) {
      alert("User not found. Please try logging in again.");
      navigate("/login");
      return;
    }

    dispatch(verifyPhoneOtp({ userId: user, otp: otpCode }))
      .unwrap()
      .then(() => navigate("/Question")) // Navigate to dashboard on success
      .catch((err) => console.error(err)); // Log any errors
  };

  const handleResendOTP = async () => {
    try {
      setTimer(30); // Reset the timer
      await axios.post("http://localhost:8000/api/v1/users/resend-otp", {
        userId: user,
      });
      alert("OTP resent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 heart-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-black"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="backdrop-blur-sm bg-black/40 rounded-2xl shadow-2xl overflow-hidden border border-red-900/30 p-8">
          <button
            onClick={() => navigate(-1)} // Navigate back
            className="flex items-center text-red-300 hover:text-red-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="text-center mb-8">
            <Heart
              className="w-16 h-16 text-red-600 mx-auto mb-4 animate-pulse-slow"
              fill="rgba(220, 38, 38, 0.3)"
            />
            <h2 className="text-2xl font-bold text-white mb-2">Verify Your Email</h2>
            <p className="text-red-300/80">
              Enter the 6-digit code sent to your email.
            </p>
          </div>

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
            onClick={handleSubmit}
            className="w-full py-3 px-4 bg-red-900 text-white rounded-lg font-medium hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </button>

          <div className="text-center mt-6">
            <button
              onClick={handleResendOTP}
              className={`text-red-400 hover:text-red-300 transition-colors text-sm ${
                timer > 0 ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={timer > 0 || isLoading}
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
