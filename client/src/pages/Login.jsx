import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <img
            src="https://storage.googleapis.com/a1aa/image/lcPtMl_y8e6-GM2hlNdoQPPhx3fM_c7lis8_ATRorQg.jpg"
            alt="Logo"
            className="mx-auto mb-4"
            width="50"
            height="50"
          />
          <h1 className="text-2xl font-semibold">MYP</h1>
        </div>
        <h2 className="text-center text-xl font-semibold mb-2">Welcome to</h2>
        <h3 className="text-center text-2xl font-bold mb-4">Manage Your Property</h3>
        <p className="text-center text-gray-600 mb-6">Please login your account.</p>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="rahul@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-blue-500">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        <div className="text-center my-6 text-gray-600">Or Continue With</div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100">
            <img
              src="https://storage.googleapis.com/a1aa/image/nXYt9iMHSoZZWWIpnNpZtQrCHs5HMv-i3hJf2S5Me4Y.jpg"
              alt="Google logo"
              className="mr-2"
              width="20"
              height="20"
            />
            Google
          </button>
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100">
            <img
              src="https://storage.googleapis.com/a1aa/image/K1CtBSmte9RvDmKlbiZWUIxxWQC20IH79KEoLR23BFA.jpg"
              alt="Facebook logo"
              className="mr-2"
              width="20"
              height="20"
            />
            Facebook
          </button>
        </div>
        <div className="text-center text-gray-600">
          New member here?{' '}
          <button 
            onClick={() => navigate('/signup')}
            className="text-blue-500 hover:underline"
          >
            Register Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
