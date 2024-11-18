import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowRight, ShieldAlert } from 'lucide-react';

const DisclaimerPage = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate('/Question'); // Adjust route as needed
  };

  const handleSkipTest = () => {
    navigate('/dashboard'); // Adjust route as needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-neutral-900/80 backdrop-blur-lg rounded-2xl shadow-2xl shadow-red-900/20 p-8 border border-red-900/20"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex justify-center mb-8"
        >
          <ShieldAlert className="w-16 h-16 text-red-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center bg-gradient-to-r from-white to-red-200 text-transparent bg-clip-text mb-6"
        >
          Before You Begin
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-8 text-neutral-300"
        >
          <div className="flex items-start gap-3 p-4 bg-red-950/20 rounded-lg border border-red-900/20">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-white">Important Notice</p>
              <p className="mt-1">This personality assessment is designed to provide insights into your behavioral patterns and tendencies. The results are based on your responses and should be interpreted as general guidance rather than absolute truth.</p>
            </div>
          </div>

          <ul className="space-y-3 list-disc list-inside ml-4">
            <li>The test takes approximately 10-15 minutes to complete</li>
            <li>Answer honestly for the most accurate results</li>
            <li>There are no right or wrong answers</li>
            <li>Your responses will be kept confidential</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleStartTest}
            className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white text-lg font-semibold rounded-xl 
                     hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/30 
                     hover:shadow-xl hover:shadow-red-900/40 hover:-translate-y-0.5 active:translate-y-0
                     flex items-center justify-center gap-2 group"
          >
            Start Test
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={handleSkipTest}
            className="px-8 py-4 bg-neutral-800 text-neutral-300 text-lg font-semibold rounded-xl 
                     hover:bg-neutral-700 hover:text-white transition-all duration-300 
                     shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 
                     hover:-translate-y-0.5 active:translate-y-0"
          >
            Skip Test
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DisclaimerPage;
