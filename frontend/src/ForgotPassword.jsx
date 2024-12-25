import React from 'react';
import { Link } from 'react-router-dom';
import icon from './assets/techbubbles.png';

export default function ForgotPassword() {
  return (
    <>
      <div className="flex justify-between">
        <img src={icon} alt="techbubble icon" />
        <h1>TechBubble</h1>
        <div className="grid grid-cols-2 divide-x border border-blue-600 max-w-sm m-3 md:w-80">
          <Link to="/" className="p-4 text-center">
            Login
          </Link>
          <Link to="/signup" className="p-4 text-center">
            Sign up
          </Link>
        </div>
      </div>

      <div className="max-w-sm mx-auto mt-5 p-6">
        <h2 className="text-2xl font-bold text-center pt-3 mb-6">Forgot Password</h2>
        <p className="p-2 text-center">
          Enter your email address, and we’ll send you a link to reset your password.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 mt-2 bg-gray-200 rounded-md focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-3 bg-blue-700 font-bold text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Reset Link
          </button>

          <p className="text-center mt-4">
            <Link to="/" className="text-blue-600">Back to Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}
