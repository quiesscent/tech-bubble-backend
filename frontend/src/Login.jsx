import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from './assets/techbubbles.png';
import google from './assets/google.png';

export default function Login() {
  const location = useLocation(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email address';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
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
        <div className="flex items-center">
        <img src={icon} alt="techbubble icon" />
        <h1 className="opacity-0 md:opacity-100 font-bold text-2xl">TechBubble</h1>
        </div>
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
              className={`w-full p-3 mt-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

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

          <div className="text-right">
            <Link to="/forgot-password" className="text-black text-sm underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>

          <button
            type="button"
            className="flex items-center justify-center bg-gray-200 w-full p-3 mt-4 rounded-md hover:bg-gray-300"
          >
            <img src={google} alt="Google icon" className="w-6 h-6 mr-2" />
            Sign up with Google
          </button>
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
