import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from './assets/techbubbles.png';

export default function Signup() {
  const location = useLocation(); // Track current route for active tab

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validation Errors
  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState(''); // Placeholder for API success/error messages

  // Validation Rules
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // Password strength

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email address';

    if (!password) newErrors.password = 'Password is required';
    else if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must be at least 8 characters long and include one uppercase, one lowercase, and one number';
    }

    if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    else if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);

    // If no errors, simulate API call
    if (Object.keys(newErrors).length === 0) {
      if (email === 'test@example.com') {
        setApiMessage('Sign-up successful! Redirecting...');
      } else {
        setApiMessage('Sign-up failed. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <img src={icon} alt="techbubble icon" />

        {/* Tabs */}
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
        <h2 className="text-2xl font-bold text-center pt-3 mb-6">Sign Up</h2>
        <p className="p-2 text-center text-gray-600">
          Create an account to access our resources and start your journey!
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

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full p-3 mt-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.confirmPassword ? 'border-red-500' : ''
              }`}
              placeholder="Confirm your password"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            Confirm
          </button>

          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link to="/" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
