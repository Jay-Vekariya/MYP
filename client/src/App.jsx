import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

export const SidebarContext = createContext();

import { PropertiesProvider } from './context/PropertiesContext';
import { WorkerProvider } from './context/WorkerContext';
import { ExpensesProvider } from './context/ExpensesContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EditProperty from './pages/EditProperty';
import './App.css';
import Dashboard from './pages/Dashboard';
import Property from './pages/Property';
import PropertyDetail from './pages/Propertydetail';
import AddProperty from './pages/AddProperty';
import AddWorker from './pages/Addworker';
import EditWorker from './pages/EditWorker';
import Workers from './pages/Workers';
import AddExpense from './pages/AddExpense';
import Contact from './pages/contact';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      <PropertiesProvider>
        <WorkerProvider key={Date.now()}>
          <ExpensesProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/property" element={<Property />} />
                <Route path="/propertydetail" element={<PropertyDetail />} />
                <Route path="/addproperty" element={<AddProperty />} />
                <Route path="/workers" element={<Workers />} />
                <Route path="/add-worker" element={<AddWorker />} />
                <Route path="/edit-worker/:id" element={<EditWorker />} />
                <Route path="/addexpense" element={<AddExpense />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/edit-property/:id" element={<EditProperty />} />
                <Route path="/" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </ExpensesProvider>
        </WorkerProvider>
    </PropertiesProvider>
    </SidebarContext.Provider>
  );
}

export default App;
