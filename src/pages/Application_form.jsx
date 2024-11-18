"use client";

import React, { useState } from "react";

function AdvisorApplication() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [expertise, setExpertise] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting application:", { name, email, expertise, message });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white font-sans flex items-center justify-center p-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/20 to-black"></div>

      {/* Enlarged Background Circles */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-red-500 rounded-full opacity-20 animate-pulse"></div>

      {/* Additional Decorative Props */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-red-700 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute top-1/4 right-1/5 w-24 h-24 bg-red-400 rounded-full blur-2xl opacity-10"></div>
      <div className="absolute bottom-1/4 left-1/5 w-20 h-20 bg-red-600 rounded-full blur-2xl opacity-15"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-red-800 rounded-full blur-3xl opacity-10"></div>

      {/* Form Container */}
      <div className="w-full max-w-2xl relative z-10 animate-fade-in">
        <div className="bg-gray-900 border border-red-600 rounded-lg shadow-lg shadow-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 transform hover:scale-105 p-8">
          <h1 className="text-3xl font-bold text-center text-white mb-6 animate-slide-in">
            Become a Dark Charisma Advisor
          </h1>
          <p className="text-center text-gray-400 mb-8 animate-fade-in-delayed">
            Share your expertise and help others unlock their hidden potential.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg text-white pl-4 py-2 focus:border-red-500 focus:ring-red-500 transition duration-300 hover:border-red-400 hover:shadow-md hover:shadow-red-500/20"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg text-white pl-4 py-2 focus:border-red-500 focus:ring-red-500 transition duration-300 hover:border-red-400 hover:shadow-md hover:shadow-red-500/20"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="expertise"
                className="block text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
              >
                Area of Expertise
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="expertise"
                  value={expertise}
                  onChange={(e) => setExpertise(e.target.value)}
                  placeholder="e.g., Confidence Building, Emotional Control"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg text-white pl-4 py-2 focus:border-red-500 focus:ring-red-500 transition duration-300 hover:border-red-400 hover:shadow-md hover:shadow-red-500/20"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
              >
                Why do you want to be an advisor?
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your experience and why you'd be a great advisor..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg text-white pl-4 py-2 focus:border-red-500 focus:ring-red-500 transition duration-300 hover:border-red-400 hover:shadow-md hover:shadow-red-500/20"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-900 to-red-500 text-white font-bold py-3 px-8 text-lg rounded-lg hover:from-red-500 hover:to-red-600 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-red-600/50"
            >
              Submit Application
            </button>
          </form>
        </div>
        <p className="text-center text-sm text-gray-400 mt-6 w-full animate-fade-in-delayed">
          By submitting this application, you agree to our terms and conditions
          for advisors.
        </p>
      </div>
    </div>
  );
}

export default AdvisorApplication;
