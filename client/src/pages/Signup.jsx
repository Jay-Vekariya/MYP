import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src="https://storage.googleapis.com/a1aa/image/6fzq7EFTZd5dnAXWgEIKmqUnSyo0v6NI5vihnKH8QGw.jpg"
            alt="Logo with blue abstract design"
            className="h-12"
            height="50"
            width="50"
          />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-2">Welcome to</h2>
        <h1 className="text-center text-3xl font-bold mb-4">Manage Your Property</h1>
        <p className="text-center text-gray-600 mb-8">Enter your information below to continue</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="rahul@gmail.com"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">First name</label>
              <input
                type="text"
                placeholder="Rahul"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Last name</label>
              <input
                type="text"
                placeholder="Ravaliya"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2 relative">
              <label className="block text-gray-700">Create Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i 
                className={`fas fa-eye${showPassword ? '-slash' : ''} absolute right-3 top-3 text-gray-500 cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            <div className="w-1/2 relative">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i 
                className={`fas fa-eye${showConfirmPassword ? '-slash' : ''} absolute right-3 top-3 text-gray-500 cursor-pointer`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 mt-4"
          >
            Already have an account? Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
