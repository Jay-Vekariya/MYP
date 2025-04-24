import React, { useContext } from 'react';
import { SidebarContext } from '../App';

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="flex h-20 bg-[#D9EAFD] shadow-md fixed top-0 left-0 right-0 z-50 px-4">


      {/* YouTube-style menu button */}
      <div className="flex items-center mr-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-gray-600 hover:bg-gray-200 rounded-full focus:outline-none transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>


      <div className="flex flex-1 items-center justify-between">


        <div className="flex items-center">
          
          <img
            alt="Company Logo"
            className="h-10"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/xCgmnusW2ukpvBWTvfwzyBmqAvybhEQ1XMjLtmlLF-g.jpg"
            width="60"
          />
          <span className="ml-2 text-xl font-bold">MYP</span>
        </div>

        <div className="flex items-center space-x-4">

          <div className="flex items-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/OZOC2oFWRVZiIhZaba27pATU0iE0gSqxdvtFl2GnwBg.jpg"
              alt="Language"
              className="h-6"
            />
            <span className="ml-2">English</span>
          </div>
          <div className="flex items-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/4FwdIaUIlRGBtd6zkNPvcbc8V58OUQSZ1LnSSaU69iU.jpg"
              alt="User Avatar"
              className="h-10 rounded-full"
            />
            <div className="ml-2">
              <p className="font-semibold">Rahul</p>
              <p className="text-sm text-gray-500">OID: 114761</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
