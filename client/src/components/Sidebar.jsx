import React, { useContext } from 'react';
import { SidebarContext } from '../App';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path) ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100';
  };

  return (
    <div className={`w-48 bg-[#F8FAFC] shadow-md fixed h-full top-0 transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <nav className="mt-10 sticky top-20 overflow-y-auto h-[calc(100vh-5rem)]">
        <NavLink to="/dashboard" className={`flex items-center px-6 py-2 ${isActive('/dashboard')}`}>
          <span className="mx-3">Dashboard</span>
        </NavLink>
        <NavLink to="/property" className={`flex items-center px-6 py-2 mt-4 ${isActive('/property')}`}>
          <span className="mx-3">Property</span>
        </NavLink>
        <NavLink to="/workers" className={`flex items-center px-6 py-2 mt-4 ${isActive('/workers')}`}>
          <span className="mx-3">Workers</span>
        </NavLink>
        <NavLink to="/addproperty" className={`flex items-center px-6 py-2 mt-4 ${isActive('/addproperty')}`}>
          <span className="mx-3">Add Property</span>
        </NavLink>
        <NavLink to="/addexpense" className={`flex items-center px-6 py-2 mt-4 ${isActive('/addexpense')}`}>
          <span className="mx-3">Expenses</span>
        </NavLink>
        <NavLink to="/contact" className={`flex items-center px-6 py-2 mt-4 ${isActive('/contact')}`}>
          <span className="mx-3">Contacts</span>
        </NavLink>
        <button onClick={handleLogout} className="flex items-center px-6 py-2 mt-4 text-gray-600 hover:bg-gray-100 w-full text-left">
          <span className="mx-3 font-bold text-red-500">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
