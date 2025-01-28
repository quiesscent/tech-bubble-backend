import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import icon from './assets/techbubbles.png';
import axios from 'axios';

export default function Signup() {
  const location = useLocation(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const passwordRegex = /^.{6,}$/; 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email address';

    if (!password) newErrors.password = 'Password is required';
    else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    else if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);

     if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post("https://tech-bubble-api.onrender.com/api/auth/register", {
          email: email,
          username: email,
          password: password,
        });
        setApiMessage(response.data.message || 'Sign-up successful! Redirecting...');
      } catch (error) {
        if (error.response && error.response.data) {
          setApiMessage(
            error.response.data.error || 'An error occurred. Please try again.'
          );
        } else {
          setApiMessage('Unable to connect to the server.');
        }
      }
    }
  };

  return (
    <>
      <div className="flex justify-between">
       <div className="flex items-center">
          <img src={icon} alt="techbubble icon" />
            <h1 className="opacity-0 md:opacity-100 font-bold text-2xl">TechBubble</h1>
        </div>
        <div className="grid grid-cols-2 divide-x border border-blue-600 max-w-sm m-3 md:w-80 rounded-md">
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

      <div className="max-w-lg mx-auto mt-5 p-6">
        <h2 className="text-2xl font-bold text-center pt-3 mb-6">Sign Up</h2>
        <p className="p-2 text-center text-gray-600 md:whitespace-nowrap whitespace-normal">
        Join our open-source platform to access resources and upscale your career.
        </p>
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
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-4 mt-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-4 mt-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 pr-10 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full p-4 mt-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 pr-10 ${
                  errors.confirmPassword ? 'border-red-500' : ''
                }`}
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}
