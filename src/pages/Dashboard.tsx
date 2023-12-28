import  { useState, useEffect} from 'react';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import Card from '../components/Card';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import LineChart from "../components/Linechart";
import LineChart1 from '../components/Chart2';
import LineChart2 from '../components/Chart1';
import LineChart3 from '../components/Chart3';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | Categories'; // Set your dynamic title here
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-gray transition-all">
        {/* Sidebar and Navbar components */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:gap-7.5 place-content-center m-2 md:m-6">
            <div className="card 2xl:p-4 card">
              <Card />
            </div>
            <div className="card 2xl:p-4 card">
              <Card1 />
            </div>
            <div className="card 2xl:p-4 card">
              <Card2 />
            </div>
            <div className="card 2xl:p-4 card">
              <Card3 />
            </div>
          </div>

          {/* Date input */}
          <div className="p-5 ml-5 mb-4">
            {/* ... */}
          </div>

          <div className="p-5 ml-5 mb-4">
            {/* ... */}
          </div>

          {/* Line Charts */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 m-2 md:m-10">
            <div className="chart-container flex flex-col mb-4 md:mb-0 w-full md:w-1/2 chart">
              <LineChart />
            </div>
            <div className="chart-container flex flex-col mb-4 md:mb-0 w-full md:w-1/2 chart">
              <LineChart1 />
            </div>
            <div className="chart-container flex flex-col mb-4 md:mb-0 w-full md:w-1/2 chart">
              <LineChart2 />
            </div>
            <div className="chart-container flex flex-col mb-4 md:mb-0 w-full md:w-1/2 chart">
              <LineChart3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
