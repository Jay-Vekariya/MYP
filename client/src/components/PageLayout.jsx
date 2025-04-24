import React, { useContext } from 'react';
import { SidebarContext } from '../App';
import Sidebar from './Sidebar';
import Header from './Header';

const PageLayout = ({ children }) => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div className={`flex transition-all duration-300`}>
      <Sidebar />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-48' : 'ml-0'}`}>
        <Header />
        <div className="p-6 mt-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
