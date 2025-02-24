import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from './assets/techbubbles.png';

export default function ForgotPassword() {
  return (
    <>
      <div className="flex justify-between">
         <div className="flex items-center">
            <img src={icon} alt="techbubble icon" />
             <h1 className="opacity-0 md:opacity-100 font-bold text-2xl">TechBubble</h1>
          </div>
      </div>

      <div className="max-w-lg mx-auto mt-5 p-6">
        <h2 className="text-2xl font-bold text-center pt-3 mb-4">Forgot Password</h2>
        <p className="p-2 text-center text-gray-600 md:whitespace-nowrap whitespace-normal">
          Fill out the section below to retrieve your password.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full p-4 mt-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-700 font-bold text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            Reset password
          </button>

          <p className="text-center mt-4">
            <Link to="/" className="text-blue-600">Go back to Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}
