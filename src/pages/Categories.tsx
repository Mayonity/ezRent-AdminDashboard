import { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebars';
import Navbar from '../components/Sidebar/Navbar';
import Table from '../components/Table'; 
const Category= () => {
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | Category'; // Set your dynamic title here
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row bg-gray transition-all">
    {/* Sidebar and Navbar components */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="flex-1">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
        <Table/>
  
      </div>
    </div>
  );
};

export default Category;