import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from './assets/techbubbles.png';
import google from './assets/google.png';

export default function Login() {
  const location = useLocation(); // Tracks the active tab

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validation and Messages
  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState(''); // Placeholder for API error/success messages

  // Email Validation Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email address';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Placeholder API Simulation
      if (email === 'test@example.com' && password === 'password123') {
        setApiMessage('Login successful! Redirecting...');
      } else {
        setApiMessage('Invalid credentials. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <img src={icon} alt="techbubble icon" />
        <h1 className="opacity-0 md:opacity-100">TechBubble</h1>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 divide-x border border-blue-600 max-w-sm m-3 md:w-80">
          <Link
            to="/"
            className={`p-4 text-center ${
              location.pathname === '/' ? 'bg-blue-600 text-white' : ''
            }`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`p-4 text-center ${
              location.pathname === '/signup' ? 'bg-blue-600 text-white' : ''
            }`}
          >
            Sign up
          </Link>
        </div>
      </div>

      <div className="max-w-sm mx-auto mt-5 p-6">
        <h2 className="text-2xl font-bold text-center pt-3 mb-6">Login</h2>
        <p className="p-2 text-center text-gray-600">
          Join our open-source platform to access resources and upscale your career.
        </p>

        {/* API Message */}
        {apiMessage && (
          <p
            className={`text-center mb-4 text-sm ${
              apiMessage.includes('successful') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {apiMessage}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 mt-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 mt-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Enter your password"
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mt-2">
            <Link to="/forgot-password" className="text-blue-600 text-sm underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>

          {/* Google Sign Up */}
          <button
            type="button"
            className="flex items-center justify-center bg-gray-200 w-full p-3 mt-4 rounded-md hover:bg-gray-300"
          >
            <img src={google} alt="Google icon" className="w-6 h-6 mr-2" />
            Sign up with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
